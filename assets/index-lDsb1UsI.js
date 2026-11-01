var Rg=Object.defineProperty;var Pg=(i,e,t)=>e in i?Rg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var U=(i,e,t)=>Pg(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Dg(i,e,t,n,s=1){const r=t*n,a=new Float32Array(r),o=new Uint8Array(r),l=[],c=[],u=(p,v)=>{l.push(p),c.push(v);let _=l.length-1;for(;_>0;){const m=_-1>>1;if(l[m]<=l[_])break;[l[m],l[_]]=[l[_],l[m]],[c[m],c[_]]=[c[_],c[m]],_=m}},d=()=>{const p=l[0],v=c[0],_=l.pop(),m=c.pop();if(l.length){l[0]=_,c[0]=m;let f=0;for(;;){const x=2*f+1,M=x+1;let w=f;if(x<l.length&&l[x]<l[w]&&(w=x),M<l.length&&l[M]<l[w]&&(w=M),w===f)break;[l[w],l[f]]=[l[f],l[w]],[c[w],c[f]]=[c[f],c[w]],f=w}}return[p,v]};for(let p=0;p<r;p++){const v=p%t,_=p/t|0;(e[p]||v===0||_===0||v===t-1||_===n-1)&&(o[p]=1,a[p]=e[p]?-1e9:i[p],u(a[p],p))}for(;l.length;){const[p,v]=d(),_=v%t,m=v/t|0,f=[v-1,v+1,v-t,v+t];for(let x=0;x<4;x++){if(x===0&&_===0||x===1&&_===t-1||x===2&&m===0||x===3&&m===n-1)continue;const M=f[x];o[M]||(o[M]=1,a[M]=Math.max(p,i[M]),u(a[M],M))}}const h=new Uint8Array(r);for(let p=0;p<r;p++)!e[p]&&a[p]-i[p]>s&&(h[p]=1);return h}function Lg(i,e,t,n,s){const r=n*s,a=new Uint8Array(r).fill(99);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c;if(e[u]){a[u]=0;continue}let d=99;for(let h=-3;h<=3;h++)for(let p=-3;p<=3;p++){const v=c+p,_=l+h;if(!(v<0||_<0||v>=n||_>=s)&&e[_*n+v]===1){const m=Math.max(Math.abs(p),Math.abs(h));m<d&&(d=m)}}a[u]=d}const o=new Uint8Array(r);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c;if(e[u]||a[u]>2)continue;let d=!1;for(let h=-3;h<=3&&!d;h++)for(let p=-3;p<=3;p++){const v=c+p,_=l+h;if(v<0||_<0||v>=n||_>=s)continue;const m=_*n+v;if(!e[m]&&t[m]>0&&a[m]>a[u]&&i[m]>i[u]+.3){d=!0;break}}d&&(o[u]=1)}return o}function Fg(i,e,t,n,s,r=3,a=.5){const o=new Float32Array(n*s);for(let l=0;l<s;l++)for(let c=0;c<n;c++){const u=l*n+c,d=t[u];if(d<=0||e[u])continue;let h=u,p=i[u];for(let v=-r;v<=r;v++)for(let _=-r;_<=r;_++){const m=c+_,f=l+v;if(m<0||f<0||m>=n||f>=s)continue;const x=f*n+m;if(e[x])continue;const M=i[x];M>p&&M<=i[u]+8&&(p=M,h=x)}p-i[u]>=a?o[h]=Math.max(o[h],d):o[u]=Math.max(o[u],d)}return o}function Ig(i,e,t,n,s,r,a,o=.08){const l=n*s,c=new Float32Array(l);for(let P=0;P<l;P++)c[P]=i[P*8];const u=new Float32Array(l).fill(1/0),d=new Uint8Array(l),h=[],p=[],v=(P,A)=>{h.push(P),p.push(A);let R=h.length-1;for(;R>0;){const F=R-1>>1;if(h[F]<=h[R])break;[h[F],h[R]]=[h[R],h[F]],[p[F],p[R]]=[p[R],p[F]],R=F}},_=()=>{const P=h[0],A=p[0],R=h.pop(),F=p.pop();if(h.length){h[0]=R,p[0]=F;let Y=0;for(;;){const y=2*Y+1,b=y+1;let N=Y;if(y<h.length&&h[y]<h[N]&&(N=y),b<h.length&&h[b]<h[N]&&(N=b),N===Y)break;[h[N],h[Y]]=[h[Y],h[N]],[p[N],p[Y]]=[p[Y],p[N]],Y=N}}return[P,A]};for(let P=0;P<l;P++){const A=P%n,R=P/n|0;(t[P]||A===0||R===0||A===n-1||R===s-1)&&(d[P]=1,u[P]=t[P]?-1e9:c[P],v(u[P],P))}for(;h.length;){const[P,A]=_(),R=A%n,F=A/n|0,Y=[];R<n-1&&Y.push([A+1,e[A*8]]),R>0&&Y.push([A-1,e[(A-1)*8]]),F<s-1&&Y.push([A+n,e[A*8+4]]),F>0&&Y.push([A-n,e[(A-n)*8+4]]);for(const[y,b]of Y)d[y]||(d[y]=1,u[y]=Math.max(P,b,c[y]),v(u[y],y))}const m=new Int32Array(l).fill(-1);let f=0,x=0,M=0;const w=[];for(let P=0;P<l;P++){if(m[P]!==-1||t[P]||!(u[P]-c[P]>o))continue;const A=[];let R=0;for(m[P]=P,w.push(P);w.length;){const F=w.pop();A.push(F),R=Math.max(R,u[F]-c[F]);const Y=F%n;for(const y of[Y<n-1?F+1:-1,Y>0?F-1:-1,F+n<l?F+n:-1,F-n>=0?F-n:-1])y<0||m[y]!==-1||t[y]||!(u[y]-c[y]>o)||(m[y]=P,w.push(y))}if(A.length>r||R>a){M++;continue}f++,x+=A.length;for(const F of A){const Y=u[F]-.02;for(let y=0;y<8;y++)i[F*8+y]<Y&&(i[F*8+y]=Y)}}return{pits:f,cells:x,kept:M}}const Ml={maxCells:25,maxDepth:3},Mo="./".replace(/\/$/,"");async function as(i){const e=await fetch(i,{cache:"no-cache"});if(!e.ok)throw new Error(`${i}: ${e.status}`);return e.json()}async function _s(i,e){const t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);const n=await t.arrayBuffer();if(n.byteLength!==e*4)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Float32Array(n)}async function Ug(i,e){const t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);const n=await t.arrayBuffer();if(n.byteLength!==e)throw new Error(`${i}: unexpected size ${n.byteLength}`);return new Uint8Array(n)}function Id(i){return new Promise(e=>{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i})}function xs(i,e,t){const n=new i.constructor(i.length);for(let s=0;s<t;s++)n.set(i.subarray(s*e,(s+1)*e),(t-1-s)*e);return n}async function Ng(){return as(`${Mo}/scenes/index.json`)}async function kg(){return as(`${Mo}/events/index.json`)}async function Og(i){return as(`${Mo}/events/${i}.json`)}async function zg(i){try{const e=await as(`${Mo}/scenes/${i}/scenarios.json`);return Array.isArray(e.scenarios)?e.scenarios:[]}catch{return[]}}async function Bg(i,e){const t=`${Mo}/scenes/${i}`;e?.(.05,"meta");const n=await as(`${t}/meta.json`),s=n.cols,r=n.rows;e?.(.15,"dem");const[a,o,l,c,u,d,h,p,v]=await Promise.all([_s(`${t}/dem.bin`,s*r),Ug(`${t}/mask.bin`,s*r),_s(`${t}/bldh.bin`,s*r).catch(()=>new Float32Array(s*r)),_s(`${t}/expo.bin`,s*r).catch(()=>new Float32Array(s*r)),as(`${t}/buildings.json`).catch(()=>({buildings:[]})),_s(`${t}/chan.bin`,s*r*3).catch(()=>_s(`${t}/chan.bin`,s*r).then(k=>{const X=new Float32Array(s*r*3);for(let Z=0;Z<s*r;Z++)X[Z*3]=k[Z],X[Z*3+2]=.05;return X})).catch(()=>new Float32Array(s*r*3)),_s(`${t}/ug.bin`,s*r).catch(()=>new Float32Array(s*r)),_s(`${t}/sg_cell.bin`,s*r*8).catch(()=>null),_s(`${t}/sg_face.bin`,s*r*8).catch(()=>null)]),_=await as(`${t}/measures.json`).catch(()=>null),m=await as(`${t}/fine.json`).catch(()=>null),f=await as(`${t}/hires.json`).catch(()=>null);e?.(.55,"textures");const[x,M]=await Promise.all([Id(`${t}/imagery.jpg`),Id(`${t}/basemap.jpg`)]);e?.(.95,"done");const w=xs(a,s,r),P=xs(o,s,r),A=Dg(w,P,s,r,2),R=xs(l,s,r),F=Fg(w,P,xs(c,s,r),s,r),Y=Lg(w,P,F,s,r),y=p?xs(p,s*8,r):null,b=new Uint8Array(s*r);if(y)for(let k=0;k<s*r;k++)y[k*8+7]-y[k*8]>3&&(b[k]=1);const N=v?xs(v,s*8,r):null;if(y&&N&&Ml.maxCells>0){const k=Ig(y,N,P,s,r,Ml.maxCells,Ml.maxDepth);console.info(`[pits] ${i}: filled ${k.pits} sub-grid pits (${k.cells} cells), kept ${k.kept}`)}return{meta:n,dem:w,mask:P,bldh:R,expo:F,basin:A,rim:Y,chan:xs(d,s*3,r),ug:xs(h,s,r),sgCell:y,sgFace:N,steep:b,buildings:u.buildings,imagery:x,basemap:M,savedMeasures:_,fine:m,hires:f,dir:t}}const Xr={slr:0,rainScale:1,tideScale:1},Hg=i=>i?{slr:i.slr??0,rainScale:i.rain_scale??1,tideScale:i.tide_scale??1}:Xr,Ud={zh:"现状",en:"Today",measures:"records"},Vg=[{id:"measures",generic:!0,zh:"无措施 vs 含措施",en:"No measures vs with measures",desc_zh:"左侧只有实际工程和有记录的临时措施；右侧再加上你在「措施」里画的情景措施。",desc_en:"Left: built records and documented temporary measures only; right: plus the what-if measures you drew under Measures.",A:{zh:"无措施",en:"No measures",measures:"records"},B:{zh:"含措施",en:"With measures",measures:"all"}},{id:"slr-0.5",generic:!0,kinds:["typhoon","fictional"],zh:"现状 vs 海平面上升 +0.5 m",en:"Today vs sea-level rise +0.5 m",desc_zh:"情景假设，不是预报：边界潮位整体加 0.5 m。天文台（IPCC AR6）鲗鱼涌预估，SSP2-4.5 下相对 1995–2014 年：2050 年 +0.20 m（0.13–0.28），2060 年 +0.26 m（0.17–0.37）；+0.5 m 是本世纪后期的量级，或高排放情景下更早出现。",desc_en:"A what-if, not a forecast: +0.5 m on the boundary level. HKO (IPCC AR6) for Quarry Bay, SSP2-4.5, relative to 1995–2014: +0.20 m by 2050 (0.13–0.28), +0.26 m by 2060 (0.17–0.37); +0.5 m is a late-century magnitude, or earlier under high emissions.",A:Ud,B:{zh:"海平面 +0.5 m",en:"Sea level +0.5 m",measures:"records",slr:.5}},{id:"rain-1.2",generic:!0,kinds:["rainstorm"],zh:"现状 vs 雨强 ×1.2",en:"Today vs rainfall ×1.2",desc_zh:"情景假设，不是预报：逐时雨强 ×1.2。按 Clausius–Clapeyron 关系，极端小时雨强每升温 1 °C 约增 7%，升温 3 °C 约 +20%。",desc_en:"A what-if, not a forecast: hourly rain ×1.2. Clausius–Clapeyron scaling gives about +7 % per °C for extreme hourly rain, so +3 °C ≈ +20 %.",A:Ud,B:{zh:"雨强 ×1.2",en:"Rain ×1.2",measures:"records",rain_scale:1.2}}];function Gg(i,e){const t=(i??[]).filter(s=>!s.events?.length||s.events.includes(e.id)).map(s=>({...s,generic:!1})),n=Vg.filter(s=>!s.kinds||s.kinds.includes(e.kind));return[...t,...n]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="169",Pi={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wg=0,Nd=1,$g=2,um=1,Xg=2,is=3,ks=0,Kn=1,ti=2,Fs=0,sr=1,yh=2,kd=3,Od=4,jg=5,er=100,qg=101,Yg=102,Kg=103,Zg=104,Jg=200,Qg=201,ev=202,tv=203,Sh=204,wh=205,nv=206,iv=207,sv=208,rv=209,av=210,ov=211,lv=212,cv=213,hv=214,bh=0,Th=1,Eh=2,oa=3,Ah=4,Ch=5,Rh=6,Ph=7,dm=0,uv=1,dv=2,Is=0,fv=1,pv=2,mv=3,gv=4,vv=5,_v=6,xv=7,fm=300,la=301,ca=302,Dh=303,Lh=304,Ql=306,Fh=1e3,Dn=1001,Ih=1002,ct=1003,Mv=1004,Do=1005,On=1006,Dc=1007,Ds=1008,ui=1009,pm=1010,mm=1011,uo=1012,Pu=1013,lr=1014,tn=1015,va=1016,Du=1017,Lu=1018,ha=1020,gm=35902,vm=1021,_m=1022,Ft=1023,xm=1024,Mm=1025,na=1026,ua=1027,Fu=1028,Iu=1029,ym=1030,Uu=1031,Nu=1033,yl=33776,Sl=33777,wl=33778,bl=33779,Uh=35840,Nh=35841,kh=35842,Oh=35843,zh=36196,Bh=37492,Hh=37496,Vh=37808,Gh=37809,Wh=37810,$h=37811,Xh=37812,jh=37813,qh=37814,Yh=37815,Kh=37816,Zh=37817,Jh=37818,Qh=37819,eu=37820,tu=37821,Tl=36492,nu=36494,iu=36495,Sm=36283,su=36284,ru=36285,au=36286,yv=3200,Sv=3201,wv=0,bv=1,Rs="",ci="srgb",zs="srgb-linear",ku="display-p3",ec="display-p3-linear",Ll="linear",Wt="srgb",Fl="rec709",Il="p3",Ar=7680,zd=519,Tv=512,Ev=513,Av=514,wm=515,Cv=516,Rv=517,Pv=518,Dv=519,Bd=35044,Pn="300 es",os=2e3,Ul=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hd=1234567;const ia=Math.PI/180,fo=180/Math.PI;function _a(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function kn(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Lv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fv(i,e,t){return i!==e?(t-i)/(e-i):0}function to(i,e,t){return(1-t)*i+t*e}function Iv(i,e,t,n){return to(i,e,1-Math.exp(-t*n))}function Uv(i,e=1){return e-Math.abs(Ou(i,e*2)-e)}function Nv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ov(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zv(i,e){return i+Math.random()*(e-i)}function Bv(i){return i*(.5-Math.random())}function Hv(i){i!==void 0&&(Hd=i);let e=Hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vv(i){return i*ia}function Gv(i){return i*fo}function Wv(i){return(i&i-1)===0&&i!==0}function $v(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xt={DEG2RAD:ia,RAD2DEG:fo,generateUUID:_a,clamp:kn,euclideanModulo:Ou,mapLinear:Lv,inverseLerp:Fv,lerp:to,damp:Iv,pingpong:Uv,smoothstep:Nv,smootherstep:kv,randInt:Ov,randFloat:zv,randFloatSpread:Bv,seededRandom:Hv,degToRad:Vv,radToDeg:Gv,isPowerOfTwo:Wv,ceilPowerOfTwo:$v,floorPowerOfTwo:Xv,setQuaternionFromProperEuler:jv,normalize:$n,denormalize:jr};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,s,r,a,o,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],v=n[8],_=s[0],m=s[3],f=s[6],x=s[1],M=s[4],w=s[7],P=s[2],A=s[5],R=s[8];return r[0]=a*_+o*x+l*P,r[3]=a*m+o*M+l*A,r[6]=a*f+o*w+l*R,r[1]=c*_+u*x+d*P,r[4]=c*m+u*M+d*A,r[7]=c*f+u*w+d*R,r[2]=h*_+p*x+v*P,r[5]=h*m+p*M+v*A,r[8]=h*f+p*w+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,v=t*d+n*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new ft;function bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qv(){const i=Nl("canvas");return i.style.display="block",i}const Vd={};function El(i){i in Vd||(Vd[i]=!0,console.warn(i))}function Yv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Kv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gd=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wd=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Na={[zs]:{transfer:Ll,primaries:Fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ci]:{transfer:Wt,primaries:Fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ec]:{transfer:Ll,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Wd),fromReference:i=>i.applyMatrix3(Gd)},[ku]:{transfer:Wt,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wd),fromReference:i=>i.applyMatrix3(Gd).convertLinearToSRGB()}},Jv=new Set([zs,ec]),Ct={enabled:!0,_workingColorSpace:zs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Na[e].toReference,s=Na[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Na[i].primaries},getTransfer:function(i){return i===Rs?Ll:Na[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Na[e].luminanceCoefficients)}};function sa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cr;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=Nl("canvas")),Cr.width=e.width,Cr.height=e.height;const n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=sa(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sa(t[n]/255)*255):t[n]=sa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class Tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ic(s[a].image)):r.push(Ic(s[a]))}else r=Ic(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;class zn extends fr{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=Dn,s=Dn,r=On,a=Ds,o=Ft,l=ui,c=zn.DEFAULT_ANISOTROPY,u=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=_a(),this.name="",this.source=new Tm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=fm;zn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,s=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(p+1)/2,P=(f+1)/2,A=(u+h)/4,R=(d+_)/4,F=(v+m)/4;return M>w&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=R/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=F/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends n_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Em extends zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ct,this.minFilter=ct,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ct,this.minFilter=ct,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==v){let m=1-o;const f=l*h+c*p+u*v+d*_,x=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const P=Math.sqrt(M),A=Math.atan2(P,f*x);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const w=o*x;if(l=l*m+h*w,c=c*m+p*w,u=u*m+v*w,d=d*m+_*w,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new j,$d=new cr;class Gi{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Fo.subVectors(this.max,ka),Rr.subVectors(e.a,ka),Pr.subVectors(e.b,ka),Dr.subVectors(e.c,ka),Ms.subVectors(Pr,Rr),ys.subVectors(Dr,Pr),$s.subVectors(Rr,Dr);let t=[0,-Ms.z,Ms.y,0,-ys.z,ys.y,0,-$s.z,$s.y,Ms.z,0,-Ms.x,ys.z,0,-ys.x,$s.z,0,-$s.x,-Ms.y,Ms.x,0,-ys.y,ys.x,0,-$s.y,$s.x,0];return!Nc(t,Rr,Pr,Dr,Fo)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Rr,Pr,Dr,Fo))?!1:(Io.crossVectors(Ms,ys),t=[Io.x,Io.y,Io.z],Nc(t,Rr,Pr,Dr,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new j,new j,new j,new j,new j,new j,new j,new j],bi=new j,Lo=new Gi,Rr=new j,Pr=new j,Dr=new j,Ms=new j,ys=new j,$s=new j,ka=new j,Fo=new j,Io=new j,Xs=new j;function Nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);const o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=e.dot(Xs),c=t.dot(Xs),u=n.dot(Xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const s_=new Gi,Oa=new j,kc=new j;class Wi{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(kc)),this.expandByPoint(Oa.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new j,Oc=new j,Uo=new j,Ss=new j,zc=new j,No=new j,Bc=new j;class yo{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oc.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(Oc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Uo),o=Ss.dot(this.direction),l=-Ss.dot(Uo),c=Ss.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oc).addScaledVector(Uo,h),p}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,s,r){zc.subVectors(t,e),No.subVectors(n,e),Bc.crossVectors(zc,No);let a=this.direction.dot(Bc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ss.subVectors(this.origin,e);const l=o*this.direction.dot(No.crossVectors(Ss,No));if(l<0)return null;const c=o*this.direction.dot(zc.cross(Ss));if(c<0||l+c>a)return null;const u=-o*Ss.dot(Bc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,a,o,l,c,u,d,h,p,v,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,p,v,_,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,p,v,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,_=c*d;t[0]=h+_*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,a_)}lookAt(e,t,n){const s=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ws.crossVectors(n,ai),ws.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ws.crossVectors(n,ai)),ws.normalize(),ko.crossVectors(ai,ws),s[0]=ws.x,s[4]=ko.x,s[8]=ai.x,s[1]=ws.y,s[5]=ko.y,s[9]=ai.y,s[2]=ws.z,s[6]=ko.z,s[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],v=n[2],_=n[6],m=n[10],f=n[14],x=n[3],M=n[7],w=n[11],P=n[15],A=s[0],R=s[4],F=s[8],Y=s[12],y=s[1],b=s[5],N=s[9],k=s[13],X=s[2],Z=s[6],J=s[10],z=s[14],ne=s[3],fe=s[7],ce=s[11],pe=s[15];return r[0]=a*A+o*y+l*X+c*ne,r[4]=a*R+o*b+l*Z+c*fe,r[8]=a*F+o*N+l*J+c*ce,r[12]=a*Y+o*k+l*z+c*pe,r[1]=u*A+d*y+h*X+p*ne,r[5]=u*R+d*b+h*Z+p*fe,r[9]=u*F+d*N+h*J+p*ce,r[13]=u*Y+d*k+h*z+p*pe,r[2]=v*A+_*y+m*X+f*ne,r[6]=v*R+_*b+m*Z+f*fe,r[10]=v*F+_*N+m*J+f*ce,r[14]=v*Y+_*k+m*z+f*pe,r[3]=x*A+M*y+w*X+P*ne,r[7]=x*R+M*b+w*Z+P*fe,r[11]=x*F+M*N+w*J+P*ce,r[15]=x*Y+M*k+w*z+P*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],f=e[15];return v*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*p-n*l*p)+_*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*u-r*l*u)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-t*l*d+t*o*h+s*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],f=e[15],x=d*m*c-_*h*c+_*l*p-o*m*p-d*l*f+o*h*f,M=v*h*c-u*m*c-v*l*p+a*m*p+u*l*f-a*h*f,w=u*_*c-v*d*c+v*o*p-a*_*p-u*o*f+a*d*f,P=v*d*l-u*_*l-v*o*h+a*_*h+u*o*m-a*d*m,A=t*x+n*M+s*w+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(_*h*r-d*m*r-_*s*p+n*m*p+d*s*f-n*h*f)*R,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*R,e[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*p-n*l*p)*R,e[4]=M*R,e[5]=(u*m*r-v*h*r+v*s*p-t*m*p-u*s*f+t*h*f)*R,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*f-t*l*f)*R,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*p+t*l*p)*R,e[8]=w*R,e[9]=(v*d*r-u*_*r-v*n*p+t*_*p+u*n*f-t*d*f)*R,e[10]=(a*_*r-v*o*r+v*n*c-t*_*c-a*n*f+t*o*f)*R,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*R,e[12]=P*R,e[13]=(u*_*s-v*d*s+v*n*h-t*_*h-u*n*m+t*d*m)*R,e[14]=(v*o*s-a*_*s-v*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,v=r*d,_=a*u,m=a*d,f=o*d,x=l*c,M=l*u,w=l*d,P=n.x,A=n.y,R=n.z;return s[0]=(1-(_+f))*P,s[1]=(p+w)*P,s[2]=(v-M)*P,s[3]=0,s[4]=(p-w)*A,s[5]=(1-(h+f))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(v+M)*R,s[9]=(m-x)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Lr.set(s[0],s[1],s[2]).length();const a=Lr.set(s[4],s[5],s[6]).length(),o=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);const c=1/r,u=1/a,d=1/o;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=os){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let p,v;if(o===os)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ul)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=os){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),h=(t+e)*c,p=(n+s)*u;let v,_;if(o===os)v=(a+r)*d,_=-2*d;else if(o===Ul)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new j,Ti=new Nt,r_=new j(0,0,0),a_=new j(1,1,1),ws=new j,ko=new j,ai=new j,Xd=new Nt,jd=new cr;class ds{constructor(e=0,t=0,n=0,s=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const qd=new j,Fr=new cr,Zi=new Nt,Oo=new j,za=new j,l_=new j,c_=new cr,Yd=new j(1,0,0),Kd=new j(0,1,0),Zd=new j(0,0,1),Jd={type:"added"},h_={type:"removed"},Ir={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Zn extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new j,t=new ds,n=new cr,s=new j(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ft}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(za,Oo,this.up):Zi.lookAt(Oo,za,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(Zi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Zn.DEFAULT_UP=new j(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new j,Ji=new j,Vc=new j,Qi=new j,Ur=new j,Nr=new j,Qd=new j,Gc=new j,Wc=new j,$c=new j,Xc=new Yt,jc=new Yt,qc=new Yt;class Mi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ei.subVectors(e,t),s.cross(Ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ei.subVectors(s,t),Ji.subVectors(n,t),Vc.subVectors(e,t);const a=Ei.dot(Ei),o=Ei.dot(Ji),l=Ei.dot(Vc),c=Ji.dot(Ji),u=Ji.dot(Vc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xc.setScalar(0),jc.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(e,t),jc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xc,r.x),a.addScaledVector(jc,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(e,t,n,s){return Ei.subVectors(n,t),Ji.subVectors(e,t),Ei.cross(Ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ei.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ur.subVectors(s,n),Nr.subVectors(r,n),Gc.subVectors(e,n);const l=Ur.dot(Gc),c=Nr.dot(Gc);if(l<=0&&c<=0)return t.copy(n);Wc.subVectors(e,s);const u=Ur.dot(Wc),d=Nr.dot(Wc);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ur,a);$c.subVectors(e,r);const p=Ur.dot($c),v=Nr.dot($c);if(v>=0&&p<=v)return t.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Nr,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Qd.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(Qd,o);const f=1/(m+_+h);return a=_*f,o=h*f,t.copy(n).addScaledVector(Ur,a).addScaledVector(Nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=Ou(e,1),t=kn(t,0,1),n=kn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yc(a,r,e+1/3),this.g=Yc(a,r,e),this.b=Yc(a,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=ci){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const n=Am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Ct.fromWorkingColorSpace(Nn.copy(this),e),Math.round(kn(Nn.r*255,0,255))*65536+Math.round(kn(Nn.g*255,0,255))*256+Math.round(kn(Nn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,s=Nn.g,r=Nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ci){Ct.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,s=Nn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(zo);const n=to(bs.h,zo.h,t),s=to(bs.s,zo.s,t),r=to(bs.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ot;ot.NAMES=Am;let u_=0;class xa extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=sr,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=wh,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==ks&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sh&&(n.blendSrc=this.blendSrc),this.blendDst!==wh&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ss extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new j,Bo=new je;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bd,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array),s=$n(s,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),e}}class Cm extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rm extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d_=0;const mi=new Nt,Kc=new Zn,kr=new j,oi=new Gi,Ba=new Gi,Sn=new j;class sn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Rm:Cm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(oi.min,Ba.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Ba.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Ba.min),oi.expandByPoint(Ba.max))}oi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Sn.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),Sn.add(kr)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new j,l[F]=new j;const c=new j,u=new j,d=new j,h=new je,p=new je,v=new je,_=new j,m=new j;function f(F,Y,y){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,Y),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,F),p.fromBufferAttribute(r,Y),v.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(b),o[F].add(_),o[Y].add(_),o[y].add(_),l[F].add(m),l[Y].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let F=0,Y=x.length;F<Y;++F){const y=x[F],b=y.start,N=y.count;for(let k=b,X=b+N;k<X;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new j,w=new j,P=new j,A=new j;function R(F){P.fromBufferAttribute(s,F),A.copy(P);const Y=o[F];M.copy(Y),M.sub(P.multiplyScalar(P.dot(Y))).normalize(),w.crossVectors(A,Y);const b=w.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,b)}for(let F=0,Y=x.length;F<Y;++F){const y=x[F],b=y.start,N=y.count;for(let k=b,X=b+N;k<X;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new j,r=new j,a=new j,o=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new wn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ef=new Nt,js=new yo,Ho=new Wi,tf=new j,Vo=new j,Go=new j,Wo=new j,Zc=new j,$o=new j,nf=new j,Xo=new j;class Mt extends Zn{constructor(e=new sn,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){$o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Zc.fromBufferAttribute(d,e),a?$o.addScaledVector(Zc,u):$o.addScaledVector(Zc.sub(t),u))}t.add($o)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(Ho.containsPoint(js.origin)===!1&&(js.intersectSphere(Ho,tf)===null||js.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),js.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=x,P=M;w<P;w+=3){const A=o.getX(w),R=o.getX(w+1),F=o.getX(w+2);s=jo(this,f,e,n,c,u,d,A,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const x=o.getX(m),M=o.getX(m+1),w=o.getX(m+2);s=jo(this,a,e,n,c,u,d,x,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=x,P=M;w<P;w+=3){const A=w,R=w+1,F=w+2;s=jo(this,f,e,n,c,u,d,A,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const x=m,M=m+1,w=m+2;s=jo(this,a,e,n,c,u,d,x,M,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function f_(i,e,t,n,s,r,a,o){let l;if(e.side===Kn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ks,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function jo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Vo),i.getVertexPosition(l,Go),i.getVertexPosition(c,Wo);const u=f_(i,e,t,n,Vo,Go,Wo,nf);if(u){const d=new j;Mi.getBarycoord(nf,Vo,Go,Wo,d),s&&(u.uv=Mi.getInterpolatedAttribute(s,o,l,c,d,new je)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,o,l,c,d,new je)),a&&(u.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new j,materialIndex:0};Mi.getNormal(Vo,Go,Wo,h.normal),u.face=h,u.barycoord=d}return u}class Us extends sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(d,2));function v(_,m,f,x,M,w,P,A,R,F,Y){const y=w/R,b=P/F,N=w/2,k=P/2,X=A/2,Z=R+1,J=F+1;let z=0,ne=0;const fe=new j;for(let ce=0;ce<J;ce++){const pe=ce*b-k;for(let Se=0;Se<Z;Se++){const le=Se*y-N;fe[_]=le*x,fe[m]=pe*M,fe[f]=X,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[f]=A>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push(Se/R),d.push(1-ce/F),z+=1}}for(let ce=0;ce<F;ce++)for(let pe=0;pe<R;pe++){const Se=h+pe+Z*ce,le=h+pe+Z*(ce+1),ee=h+(pe+1)+Z*(ce+1),ae=h+(pe+1)+Z*ce;l.push(Se,le,ae),l.push(le,ee,ae),ne+=6}o.addGroup(p,ne,Y),p+=ne,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xn(i){const e={};for(let t=0;t<i.length;t++){const n=da(i[t]);for(const s in n)e[s]=n[s]}return e}function p_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const m_={clone:da,merge:Xn};var g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dm extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=os}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new j,sf=new je,rf=new je;class xi extends Dm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,zr=1;class __ extends Zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xi(Or,zr,e,t);s.layers=this.layers,this.add(s);const r=new xi(Or,zr,e,t);r.layers=this.layers,this.add(r);const a=new xi(Or,zr,e,t);a.layers=this.layers,this.add(a);const o=new xi(Or,zr,e,t);o.layers=this.layers,this.add(o);const l=new xi(Or,zr,e,t);l.layers=this.layers,this.add(l);const c=new xi(Or,zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===os)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Lm extends zn{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:la,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x_ extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new fs({name:"CubemapFromEquirect",uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:Fs});r.uniforms.tEquirect.value=t;const a=new Mt(s,r),o=t.minFilter;return t.minFilter===Ds&&(t.minFilter=On),new __(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Jc=new j,M_=new j,y_=new ft;class Es{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jc.subVectors(n,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||y_.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Wi,qo=new j;class Fm{constructor(e=new Es,t=new Es,n=new Es,s=new Es,r=new Es,a=new Es){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=os){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],v=s[9],_=s[10],m=s[11],f=s[12],x=s[13],M=s[14],w=s[15];if(n[0].setComponents(l-r,h-c,m-p,w-f).normalize(),n[1].setComponents(l+r,h+c,m+p,w+f).normalize(),n[2].setComponents(l+a,h+u,m+v,w+x).normalize(),n[3].setComponents(l-a,h-u,m-v,w-x).normalize(),n[4].setComponents(l-o,h-d,m-_,w-M).normalize(),t===os)n[5].setComponents(l+o,h+d,m+_,w+M).normalize();else if(t===Ul)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Im(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S_(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Vi extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],_=[],m=[];for(let f=0;f<u;f++){const x=f*h-a;for(let M=0;M<c;M++){const w=M*d-r;v.push(w,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const M=x+c*f,w=x+c*(f+1),P=x+1+c*(f+1),A=x+1+c*f;p.push(M,w,A),p.push(w,P,A)}this.setIndex(p),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var w_=`#ifdef USE_ALPHAHASH
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
#endif`,F_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,yx=`struct PhysicalMaterial {
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
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
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
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
gl_Position = projectionMatrix * mvPosition;`,eM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oM=`float getShadowMask() {
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
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,hM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`,dM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gM=`#ifdef USE_TRANSMISSION
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
#endif`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`#include <common>
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
}`,RM=`#if DEPTH_PACKING == 3200
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
}`,PM=`#define DISTANCE
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
}`,DM=`#define DISTANCE
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
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
}`,UM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,kM=`uniform vec3 diffuse;
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
}`,OM=`#define LAMBERT
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
}`,zM=`#define LAMBERT
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
}`,BM=`#define MATCAP
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
}`,HM=`#define MATCAP
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
}`,VM=`#define NORMAL
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
}`,GM=`#define NORMAL
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
}`,WM=`#define PHONG
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
}`,$M=`#define PHONG
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
}`,XM=`#define STANDARD
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
}`,jM=`#define STANDARD
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
}`,qM=`#define TOON
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
}`,YM=`#define TOON
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
}`,KM=`uniform float size;
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
}`,ZM=`uniform vec3 diffuse;
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
}`,JM=`#include <common>
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
}`,QM=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ty=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:w_,alphahash_pars_fragment:b_,alphamap_fragment:T_,alphamap_pars_fragment:E_,alphatest_fragment:A_,alphatest_pars_fragment:C_,aomap_fragment:R_,aomap_pars_fragment:P_,batching_pars_vertex:D_,batching_vertex:L_,begin_vertex:F_,beginnormal_vertex:I_,bsdfs:U_,iridescence_fragment:N_,bumpmap_pars_fragment:k_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:H_,color_fragment:V_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:$_,common:X_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:q_,displacementmap_pars_vertex:Y_,displacementmap_vertex:K_,emissivemap_fragment:Z_,emissivemap_pars_fragment:J_,colorspace_fragment:Q_,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ax,fog_pars_vertex:ox,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:vx,lights_phong_fragment:_x,lights_phong_pars_fragment:xx,lights_physical_fragment:Mx,lights_physical_pars_fragment:yx,lights_fragment_begin:Sx,lights_fragment_maps:wx,lights_fragment_end:bx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Dx,map_particle_pars_fragment:Lx,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:kx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:Kx,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:eM,dithering_pars_fragment:tM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:rM,shadowmap_vertex:aM,shadowmask_pars_fragment:oM,skinbase_vertex:lM,skinning_pars_vertex:cM,skinning_vertex:hM,skinnormal_vertex:uM,specularmap_fragment:dM,specularmap_pars_fragment:fM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:vM,uv_pars_fragment:_M,uv_pars_vertex:xM,uv_vertex:MM,worldpos_vertex:yM,background_vert:SM,background_frag:wM,backgroundCube_vert:bM,backgroundCube_frag:TM,cube_vert:EM,cube_frag:AM,depth_vert:CM,depth_frag:RM,distanceRGBA_vert:PM,distanceRGBA_frag:DM,equirect_vert:LM,equirect_frag:FM,linedashed_vert:IM,linedashed_frag:UM,meshbasic_vert:NM,meshbasic_frag:kM,meshlambert_vert:OM,meshlambert_frag:zM,meshmatcap_vert:BM,meshmatcap_frag:HM,meshnormal_vert:VM,meshnormal_frag:GM,meshphong_vert:WM,meshphong_frag:$M,meshphysical_vert:XM,meshphysical_frag:jM,meshtoon_vert:qM,meshtoon_frag:YM,points_vert:KM,points_frag:ZM,shadow_vert:JM,shadow_frag:QM,sprite_vert:ey,sprite_frag:ty},Ae={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zi={basic:{uniforms:Xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Xn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Xn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Xn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Xn([Ae.points,Ae.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Xn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Xn([Ae.common,Ae.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Xn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Xn([Ae.sprite,Ae.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Xn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Xn([Ae.lights,Ae.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};zi.physical={uniforms:Xn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Yo={r:0,b:0,g:0},Ys=new ds,ny=new Nt;function iy(i,e,t,n,s,r,a){const o=new ot(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function v(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const w=v(x);w===null?f(o,l):w&&w.isColor&&(f(w,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const w=v(M);w&&(w.isCubeTexture||w.mapping===Ql)?(u===void 0&&(u=new Mt(new Us(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:da(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ys.copy(M.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Ys)),u.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Wt,(d!==w||h!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Mt(new Vi(2,2),new fs({name:"BackgroundMaterial",uniforms:da(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,M){x.getRGB(Yo,Pm(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:_,addToRenderList:m}}function sy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(y,b,N,k,X){let Z=!1;const J=d(k,N,b);r!==J&&(r=J,c(r.object)),Z=p(y,k,N,X),Z&&v(y,k,N,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,w(y,b,N,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,b,N){const k=N.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let Z=X[b.id];Z===void 0&&(Z={},X[b.id]=Z);let J=Z[k];return J===void 0&&(J=h(l()),Z[k]=J),J}function h(y){const b=[],N=[],k=[];for(let X=0;X<t;X++)b[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,b,N,k){const X=r.attributes,Z=b.attributes;let J=0;const z=N.getAttributes();for(const ne in z)if(z[ne].location>=0){const ce=X[ne];let pe=Z[ne];if(pe===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;J++}return r.attributesNum!==J||r.index!==k}function v(y,b,N,k){const X={},Z=b.attributes;let J=0;const z=N.getAttributes();for(const ne in z)if(z[ne].location>=0){let ce=Z[ne];ce===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),X[ne]=pe,J++}r.attributes=X,r.attributesNum=J,r.index=k}function _(){const y=r.newAttributes;for(let b=0,N=y.length;b<N;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),X[y]!==b&&(i.vertexAttribDivisor(y,b),X[y]=b)}function x(){const y=r.newAttributes,b=r.enabledAttributes;for(let N=0,k=b.length;N<k;N++)b[N]!==y[N]&&(i.disableVertexAttribArray(N),b[N]=0)}function M(y,b,N,k,X,Z,J){J===!0?i.vertexAttribIPointer(y,b,N,X,Z):i.vertexAttribPointer(y,b,N,k,X,Z)}function w(y,b,N,k){_();const X=k.attributes,Z=N.getAttributes(),J=b.defaultAttributeValues;for(const z in Z){const ne=Z[z];if(ne.location>=0){let fe=X[z];if(fe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const ce=fe.normalized,pe=fe.itemSize,Se=e.get(fe);if(Se===void 0)continue;const le=Se.buffer,ee=Se.type,ae=Se.bytesPerElement,xe=ee===i.INT||ee===i.UNSIGNED_INT||fe.gpuType===Pu;if(fe.isInterleavedBufferAttribute){const me=fe.data,Be=me.stride,Oe=fe.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ne.locationSize;Ve++)f(ne.location+Ve,me.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<ne.locationSize;Ve++)m(ne.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Ve=0;Ve<ne.locationSize;Ve++)M(ne.location+Ve,pe/ne.locationSize,ee,ce,Be*ae,(Oe+pe/ne.locationSize*Ve)*ae,xe)}else{if(fe.isInstancedBufferAttribute){for(let me=0;me<ne.locationSize;me++)f(ne.location+me,fe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let me=0;me<ne.locationSize;me++)m(ne.location+me);i.bindBuffer(i.ARRAY_BUFFER,le);for(let me=0;me<ne.locationSize;me++)M(ne.location+me,pe/ne.locationSize,ee,ce,pe*ae,pe/ne.locationSize*me*ae,xe)}}else if(J!==void 0){const ce=J[z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ne.location,ce);break;case 3:i.vertexAttrib3fv(ne.location,ce);break;case 4:i.vertexAttrib4fv(ne.location,ce);break;default:i.vertexAttrib1fv(ne.location,ce)}}}}x()}function P(){F();for(const y in n){const b=n[y];for(const N in b){const k=b[N];for(const X in k)u(k[X].object),delete k[X];delete b[N]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const N in b){const k=b[N];for(const X in k)u(k[X].object),delete k[X];delete b[N]}delete n[y.id]}function R(y){for(const b in n){const N=n[b];if(N[y.id]===void 0)continue;const k=N[y.id];for(const X in k)u(k[X].object),delete k[X];delete N[y.id]}}function F(){Y(),a=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function ry(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_];for(let _=0;_<h.length;_++)t.update(v,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ay(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ft&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ui&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:P,maxSamples:A}}function oy(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Es,o=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,M=x*4;let w=f.clippingState||null;l.value=w,w=u(v,h,M,p);for(let P=0;P!==M;++P)w[P]=t[P];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const f=p+_*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,w=p;M!==_;++M,w+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ly(i){let e=new WeakMap;function t(a,o){return o===Dh?a.mapping=la:o===Lh&&(a.mapping=ca),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dh||o===Lh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new x_(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class So extends Dm{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,af=[.125,.215,.35,.446,.526,.582],tr=20,Qc=new So,of=new ot;let eh=null,th=0,nh=0,ih=!1;const Zs=(1+Math.sqrt(5))/2,Br=1/Zs,lf=[new j(-Zs,Br,0),new j(Zs,Br,0),new j(-Br,0,Zs),new j(Br,0,Zs),new j(0,Zs,-Br),new j(0,Zs,Br),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===la||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:va,format:Ft,colorSpace:zs,depthBuffer:!1},s=hf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(r)),this._blurMaterial=hy(r,e,t)}return s}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,n,s){const o=new xi(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(of),u.toneMapping=Is,u.autoClear=!1;const p=new ss({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),v=new Mt(new Us,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(of),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;Ko(s,x*M,f>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===la||e.mapping===ca;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lf[(s-r-1)%lf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Mt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*tr-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):tr;m>tr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const f=[];let x=0;for(let R=0;R<tr;++R){const F=R/_,Y=Math.exp(-F*F/2);f.push(Y),R===0?x+=Y:R<m&&(x+=2*Y)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-n;const w=this._sizeLods[s],P=3*w*(s>M-Zr?s-M+Zr:0),A=4*(this._cubeSize-w);Ko(t,P,A,3*w,2*w),l.setRenderTarget(t),l.render(d,Qc)}}function cy(i){const e=[],t=[],n=[];let s=i;const r=i-Zr+1+af.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Zr?l=af[a-i+Zr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,f=1,x=new Float32Array(_*v*p),M=new Float32Array(m*v*p),w=new Float32Array(f*v*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,F=A>2?0:-1,Y=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];x.set(Y,_*v*A),M.set(h,m*v*A);const y=[A,A,A,A,A,A];w.set(y,f*v*A)}const P=new sn;P.setAttribute("position",new wn(x,_)),P.setAttribute("uv",new wn(M,m)),P.setAttribute("faceIndex",new wn(w,f)),e.push(P),s>Zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hf(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=Ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hy(i,e,t){const n=new Float32Array(tr),s=new j(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function uf(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function df(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Bu(){return`

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
	`}function uy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Dh||l===Lh,u=l===la||l===ca;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new cf(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new cf(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&El("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fy(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,w=x.length;M<w;M+=3){const P=x[M+0],A=x[M+1],R=x[M+2];h.push(P,A,A,R,R,P)}}else if(v!==void 0){const x=v.array;_=v.version;for(let M=0,w=x.length/3-1;M<w;M+=3){const P=M+0,A=M+1,R=M+2;h.push(P,A,A,R,R,P)}}else return;const m=new(bm(h)?Rm:Cm)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function py(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*a),t.update(p,n,1)}function c(h,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,h*a,v),t.update(p,n,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];t.update(m,n,1)}function d(h,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,v);let f=0;for(let x=0;x<v;x++)f+=p[x];for(let x=0;x<_.length;x++)t.update(f,n,_[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function my(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gy(i,e,t){const n=new WeakMap,s=new Yt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let y=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;v===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let P=o.attributes.position.count*w,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*A*4*d),F=new Em(R,P,A,d);F.type=tn,F.needsUpdate=!0;const Y=w*4;for(let b=0;b<d;b++){const N=f[b],k=x[b],X=M[b],Z=P*A*4*b;for(let J=0;J<N.count;J++){const z=J*Y;v===!0&&(s.fromBufferAttribute(N,J),R[Z+z+0]=s.x,R[Z+z+1]=s.y,R[Z+z+2]=s.z,R[Z+z+3]=0),_===!0&&(s.fromBufferAttribute(k,J),R[Z+z+4]=s.x,R[Z+z+5]=s.y,R[Z+z+6]=s.z,R[Z+z+7]=0),m===!0&&(s.fromBufferAttribute(X,J),R[Z+z+8]=s.x,R[Z+z+9]=s.y,R[Z+z+10]=s.z,R[Z+z+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:F,size:new je(P,A)},n.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vy(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Um extends zn{constructor(e,t,n,s,r,a,o,l,c,u=na){if(u!==na&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===na&&(n=lr),n===void 0&&u===ua&&(n=ha),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nm=new zn,ff=new Um(1,1),km=new Em,Om=new i_,zm=new Lm,pf=[],mf=[],gf=new Float32Array(16),vf=new Float32Array(9),_f=new Float32Array(4);function Ma(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _y(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),gn(t,n)}}function wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;vf.set(n),i.uniformMatrix3fv(this.addr,!1,vf),gn(t,n)}}function by(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),gn(t,n)}}function Ty(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function Ry(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Fy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ff.compareFunction=wm,r=ff):r=Nm,t.setTexture2D(e||r,s)}function Iy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Om,s)}function Uy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zm,s)}function Ny(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||km,s)}function ky(i){switch(i){case 5126:return _y;case 35664:return xy;case 35665:return My;case 35666:return yy;case 35674:return Sy;case 35675:return wy;case 35676:return by;case 5124:case 35670:return Ty;case 35667:case 35671:return Ey;case 35668:case 35672:return Ay;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Py;case 36295:return Dy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(i,e){i.uniform1fv(this.addr,e)}function zy(i,e){const t=Ma(e,this.size,2);i.uniform2fv(this.addr,t)}function By(i,e){const t=Ma(e,this.size,3);i.uniform3fv(this.addr,t)}function Hy(i,e){const t=Ma(e,this.size,4);i.uniform4fv(this.addr,t)}function Vy(i,e){const t=Ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gy(i,e){const t=Ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wy(i,e){const t=Ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $y(i,e){i.uniform1iv(this.addr,e)}function Xy(i,e){i.uniform2iv(this.addr,e)}function jy(i,e){i.uniform3iv(this.addr,e)}function qy(i,e){i.uniform4iv(this.addr,e)}function Yy(i,e){i.uniform1uiv(this.addr,e)}function Ky(i,e){i.uniform2uiv(this.addr,e)}function Zy(i,e){i.uniform3uiv(this.addr,e)}function Jy(i,e){i.uniform4uiv(this.addr,e)}function Qy(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Nm,r[a])}function eS(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Om,r[a])}function tS(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zm,r[a])}function nS(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||km,r[a])}function iS(i){switch(i){case 5126:return Oy;case 35664:return zy;case 35665:return By;case 35666:return Hy;case 35674:return Vy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return $y;case 35667:case 35671:return Xy;case 35668:case 35672:return jy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Ky;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class sS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}}class rS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function xf(i,e){i.seq.push(e),i.map[e.id]=e}function oS(i,e,t){const n=i.name,s=n.length;for(sh.lastIndex=0;;){const r=sh.exec(n),a=sh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xf(t,c===void 0?new sS(o,i,e):new rS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new aS(o),xf(t,d)),t=d}}}class Al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);oS(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Mf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lS=37297;let cS=0;function hS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function uS(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Il&&t===Fl?n="LinearDisplayP3ToLinearSRGB":e===Fl&&t===Il&&(n="LinearSRGBToLinearDisplayP3"),i){case zs:case ec:return[n,"LinearTransferOETF"];case ci:case ku:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hS(i.getShaderSource(e),a)}else return s}function dS(i,e){const t=uS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fS(i,e){let t;switch(e){case fv:t="Linear";break;case pv:t="Reinhard";break;case mv:t="Cineon";break;case gv:t="ACESFilmic";break;case _v:t="AgX";break;case xv:t="Neutral";break;case vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zo=new j;function pS(){Ct.getLuminanceCoefficients(Zo);const i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function gS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Za(i){return i!==""}function Sf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(i){return i.replace(_S,MS)}const xS=new Map;function MS(i,e){let t=dt[e];if(t===void 0){const n=xS.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(i){return i.replace(yS,SS)}function SS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===um?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===is&&(e="SHADOWMAP_TYPE_VSM"),e}function bS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case la:case ca:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ca:e="ENVMAP_MODE_REFRACTION";break}return e}function ES(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dm:e="ENVMAP_BLENDING_MULTIPLY";break;case uv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function AS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CS(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wS(t),c=bS(t),u=TS(t),d=ES(t),h=AS(t),p=mS(t),v=gS(r),_=s.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Za).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Za).join(`
`),f.length>0&&(f+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),f=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?dt.tonemapping_pars_fragment:"",t.toneMapping!==Is?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,dS("linearToOutputTexel",t.outputColorSpace),pS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=ou(a),a=Sf(a,t),a=wf(a,t),o=ou(o),o=Sf(o,t),o=wf(o,t),a=bf(a),o=bf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+a,w=x+f+o,P=Mf(s,s.VERTEX_SHADER,M),A=Mf(s,s.FRAGMENT_SHADER,w);s.attachShader(_,P),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(b){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(A).trim();let Z=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,A);else{const z=yf(s,P,"vertex"),ne=yf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+z+`
`+ne)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(J=!1);J&&(b.diagnostics={runnable:Z,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(P),s.deleteShader(A),F=new Al(s,_),Y=vS(s,_)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let Y;this.getAttributes=function(){return Y===void 0&&R(this),Y};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,lS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let RS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DS(e),t.set(e,n)),n}}class DS{constructor(e){this.id=RS++,this.code=e,this.usedTimes=0}}function LS(i,e,t,n,s,r,a){const o=new zu,l=new PS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,p=s.vertexTextures;let v=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,b,N,k,X){const Z=k.fog,J=X.geometry,z=y.isMeshStandardMaterial?k.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),fe=ne&&ne.mapping===Ql?ne.image.height:null,ce=_[y.type];y.precision!==null&&(v=s.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=pe!==void 0?pe.length:0;let le=0;J.morphAttributes.position!==void 0&&(le=1),J.morphAttributes.normal!==void 0&&(le=2),J.morphAttributes.color!==void 0&&(le=3);let ee,ae,xe,me;if(ce){const In=zi[ce];ee=In.vertexShader,ae=In.fragmentShader}else ee=y.vertexShader,ae=y.fragmentShader,l.update(y),xe=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const Be=i.getRenderTarget(),Oe=X.isInstancedMesh===!0,Ve=X.isBatchedMesh===!0,et=!!y.map,it=!!y.matcap,B=!!ne,zt=!!y.aoMap,at=!!y.lightMap,lt=!!y.bumpMap,Ye=!!y.normalMap,Et=!!y.displacementMap,Ke=!!y.emissiveMap,L=!!y.metalnessMap,E=!!y.roughnessMap,ie=y.anisotropy>0,he=y.clearcoat>0,re=y.dispersion>0,K=y.iridescence>0,we=y.sheen>0,_e=y.transmission>0,Pe=ie&&!!y.anisotropyMap,ut=he&&!!y.clearcoatMap,ve=he&&!!y.clearcoatNormalMap,De=he&&!!y.clearcoatRoughnessMap,Ge=K&&!!y.iridescenceMap,$e=K&&!!y.iridescenceThicknessMap,Te=we&&!!y.sheenColorMap,tt=we&&!!y.sheenRoughnessMap,nt=!!y.specularMap,wt=!!y.specularColorMap,W=!!y.specularIntensityMap,Ee=_e&&!!y.transmissionMap,oe=_e&&!!y.thicknessMap,ue=!!y.gradientMap,Ce=!!y.alphaMap,Le=y.alphaTest>0,gt=!!y.alphaHash,Zt=!!y.extensions;let Fn=Is;y.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(Fn=i.toneMapping);const _t={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:ae,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&X._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&X.instanceColor!==null,instancingMorph:Oe&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:zs,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:it,envMap:B,envMapMode:B&&ne.mapping,envMapCubeUVHeight:fe,aoMap:zt,lightMap:at,bumpMap:lt,normalMap:Ye,displacementMap:p&&Et,emissiveMap:Ke,normalMapObjectSpace:Ye&&y.normalMapType===bv,normalMapTangentSpace:Ye&&y.normalMapType===wv,metalnessMap:L,roughnessMap:E,anisotropy:ie,anisotropyMap:Pe,clearcoat:he,clearcoatMap:ut,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:re,iridescence:K,iridescenceMap:Ge,iridescenceThicknessMap:$e,sheen:we,sheenColorMap:Te,sheenRoughnessMap:tt,specularMap:nt,specularColorMap:wt,specularIntensityMap:W,transmission:_e,transmissionMap:Ee,thicknessMap:oe,gradientMap:ue,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Le,alphaHash:gt,combine:y.combine,mapUv:et&&m(y.map.channel),aoMapUv:zt&&m(y.aoMap.channel),lightMapUv:at&&m(y.lightMap.channel),bumpMapUv:lt&&m(y.bumpMap.channel),normalMapUv:Ye&&m(y.normalMap.channel),displacementMapUv:Et&&m(y.displacementMap.channel),emissiveMapUv:Ke&&m(y.emissiveMap.channel),metalnessMapUv:L&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:Pe&&m(y.anisotropyMap.channel),clearcoatMapUv:ut&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:tt&&m(y.sheenRoughnessMap.channel),specularMapUv:nt&&m(y.specularMap.channel),specularColorMapUv:wt&&m(y.specularColorMap.channel),specularIntensityMapUv:W&&m(y.specularIntensityMap.channel),transmissionMapUv:Ee&&m(y.transmissionMap.channel),thicknessMapUv:oe&&m(y.thicknessMap.channel),alphaMapUv:Ce&&m(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ye||ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!J.attributes.uv&&(et||Ce),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fn,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&Ct.getTransfer(y.map.colorSpace)===Wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ti,flipSided:y.side===Kn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Zt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&y.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function x(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(M(b,y),w(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function w(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),y.push(o.mask)}function P(y){const b=_[y.type];let N;if(b){const k=zi[b];N=m_.clone(k.uniforms)}else N=y.uniforms;return N}function A(y,b){let N;for(let k=0,X=u.length;k<X;k++){const Z=u[k];if(Z.cacheKey===b){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new CS(i,b,y,r),u.push(N)),N}function R(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function F(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:P,acquireProgram:A,releaseProgram:R,releaseShaderCache:F,programs:u,dispose:Y}}function FS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function IS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Af(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,p,v,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,h,p,v,_,m){const f=a(d,h,p,v,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,v,_,m){const f=a(d,h,p,v,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||IS),n.length>1&&n.sort(h||Ef),s.length>1&&s.sort(h||Ef)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function US(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Af,i.set(n,[a])):s>=r.length?(a=new Af,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function NS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ot};break;case"SpotLight":t={position:new j,direction:new j,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let OS=0;function zS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BS(i){const e=new NS,t=kS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const s=new j,r=new Nt,a=new Nt;function o(c){let u=0,d=0,h=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let p=0,v=0,_=0,m=0,f=0,x=0,M=0,w=0,P=0,A=0,R=0;c.sort(zS);for(let Y=0,y=c.length;Y<y;Y++){const b=c[Y],N=b.color,k=b.intensity,X=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=N.r*k,d+=N.g*k,h+=N.b*k;else if(b.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(b.sh.coefficients[J],k);R++}else if(b.isDirectionalLight){const J=e.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const z=b.shadow,ne=t.get(b);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=b.shadow.matrix,x++}n.directional[p]=J,p++}else if(b.isSpotLight){const J=e.get(b);J.position.setFromMatrixPosition(b.matrixWorld),J.color.copy(N).multiplyScalar(k),J.distance=X,J.coneCos=Math.cos(b.angle),J.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),J.decay=b.decay,n.spot[_]=J;const z=b.shadow;if(b.map&&(n.spotLightMap[P]=b.map,P++,z.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[_]=z.matrix,b.castShadow){const ne=t.get(b);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=Z,w++}_++}else if(b.isRectAreaLight){const J=e.get(b);J.color.copy(N).multiplyScalar(k),J.halfWidth.set(b.width*.5,0,0),J.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=J,m++}else if(b.isPointLight){const J=e.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),J.distance=b.distance,J.decay=b.decay,b.castShadow){const z=b.shadow,ne=t.get(b);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,ne.shadowCameraNear=z.camera.near,ne.shadowCameraFar=z.camera.far,n.pointShadow[v]=ne,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=b.shadow.matrix,M++}n.point[v]=J,v++}else if(b.isHemisphereLight){const J=e.get(b);J.skyColor.copy(b.color).multiplyScalar(k),J.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[f]=J,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==p||F.pointLength!==v||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==x||F.numPointShadows!==M||F.numSpotShadows!==w||F.numSpotMaps!==P||F.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,F.directionalLength=p,F.pointLength=v,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=x,F.numPointShadows=M,F.numSpotShadows=w,F.numSpotMaps=P,F.numLightProbes=R,n.version=OS++)}function l(c,u){let d=0,h=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const M=c[f];if(M.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Cf(i){const e=new BS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function HS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Cf(i),e.set(s,[o])):r>=a.length?(o=new Cf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class VS extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WS=`void main() {
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
}`;function XS(i,e,t){let n=new Fm;const s=new je,r=new je,a=new Yt,o=new VS({depthPacking:Sv}),l=new GS,c={},u=t.maxTextureSize,d={[ks]:Kn,[Kn]:ks,[ti]:ti},h=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:WS,fragmentShader:$S}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=um;let f=this.type;this.render=function(A,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const Y=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Fs),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=f!==is&&this.type===is,X=f===is&&this.type!==is;for(let Z=0,J=A.length;Z<J;Z++){const z=A[Z],ne=z.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const fe=ne.getFrameExtents();if(s.multiply(fe),r.copy(ne.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,ne.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,ne.mapSize.y=r.y)),ne.map===null||k===!0||X===!0){const pe=this.type!==is?{minFilter:ct,magFilter:ct}:{};ne.map!==null&&ne.map.dispose(),ne.map=new jn(s.x,s.y,pe),ne.map.texture.name=z.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const ce=ne.getViewportCount();for(let pe=0;pe<ce;pe++){const Se=ne.getViewport(pe);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(a),ne.updateMatrices(z,pe),n=ne.getFrustum(),w(R,F,ne.camera,z,this.type)}ne.isPointLightShadow!==!0&&this.type===is&&x(ne,F),ne.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(Y,y,b)};function x(A,R){const F=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,F,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,F,p,_,null)}function M(A,R,F,Y){let y=null;const b=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)y=b;else if(y=F.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=y.uuid,k=R.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let Z=X[k];Z===void 0&&(Z=y.clone(),X[k]=Z,R.addEventListener("dispose",P)),y=Z}if(y.visible=R.visible,y.wireframe=R.wireframe,Y===is?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=F}return y}function w(A,R,F,Y,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===is)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const k=e.update(A),X=A.material;if(Array.isArray(X)){const Z=k.groups;for(let J=0,z=Z.length;J<z;J++){const ne=Z[J],fe=X[ne.materialIndex];if(fe&&fe.visible){const ce=M(A,fe,Y,y);A.onBeforeShadow(i,A,R,F,k,ce,ne),i.renderBufferDirect(F,null,k,ce,A,ne),A.onAfterShadow(i,A,R,F,k,ce,ne)}}}else if(X.visible){const Z=M(A,X,Y,y);A.onBeforeShadow(i,A,R,F,k,Z,null),i.renderBufferDirect(F,null,k,Z,A,null),A.onAfterShadow(i,A,R,F,k,Z,null)}}const N=A.children;for(let k=0,X=N.length;k<X;k++)w(N[k],R,F,Y,y)}function P(A){A.target.removeEventListener("dispose",P);for(const F in c){const Y=c[F],y=A.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}const jS={[bh]:Th,[Eh]:Rh,[Ah]:Ph,[oa]:Ch,[Th]:bh,[Rh]:Eh,[Ph]:Ah,[Ch]:oa};function qS(i){function e(){let W=!1;const Ee=new Yt;let oe=null;const ue=new Yt(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!W&&(i.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,Le,gt,Zt,Fn){Fn===!0&&(Ce*=Zt,Le*=Zt,gt*=Zt),Ee.set(Ce,Le,gt,Zt),ue.equals(Ee)===!1&&(i.clearColor(Ce,Le,gt,Zt),ue.copy(Ee))},reset:function(){W=!1,oe=null,ue.set(-1,0,0,0)}}}function t(){let W=!1,Ee=!1,oe=null,ue=null,Ce=null;return{setReversed:function(Le){Ee=Le},setTest:function(Le){Le?xe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Le){oe!==Le&&!W&&(i.depthMask(Le),oe=Le)},setFunc:function(Le){if(Ee&&(Le=jS[Le]),ue!==Le){switch(Le){case bh:i.depthFunc(i.NEVER);break;case Th:i.depthFunc(i.ALWAYS);break;case Eh:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case Ah:i.depthFunc(i.EQUAL);break;case Ch:i.depthFunc(i.GEQUAL);break;case Rh:i.depthFunc(i.GREATER);break;case Ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Le}},setLocked:function(Le){W=Le},setClear:function(Le){Ce!==Le&&(i.clearDepth(Le),Ce=Le)},reset:function(){W=!1,oe=null,ue=null,Ce=null}}}function n(){let W=!1,Ee=null,oe=null,ue=null,Ce=null,Le=null,gt=null,Zt=null,Fn=null;return{setTest:function(_t){W||(_t?xe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(_t){Ee!==_t&&!W&&(i.stencilMask(_t),Ee=_t)},setFunc:function(_t,In,Tn){(oe!==_t||ue!==In||Ce!==Tn)&&(i.stencilFunc(_t,In,Tn),oe=_t,ue=In,Ce=Tn)},setOp:function(_t,In,Tn){(Le!==_t||gt!==In||Zt!==Tn)&&(i.stencilOp(_t,In,Tn),Le=_t,gt=In,Zt=Tn)},setLocked:function(_t){W=_t},setClear:function(_t){Fn!==_t&&(i.clearStencil(_t),Fn=_t)},reset:function(){W=!1,Ee=null,oe=null,ue=null,Ce=null,Le=null,gt=null,Zt=null,Fn=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,v=!1,_=null,m=null,f=null,x=null,M=null,w=null,P=null,A=new ot(0,0,0),R=0,F=!1,Y=null,y=null,b=null,N=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),Z=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Z=J>=2);let ne=null,fe={};const ce=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Se=new Yt().fromArray(ce),le=new Yt().fromArray(pe);function ee(W,Ee,oe,ue){const Ce=new Uint8Array(4),Le=i.createTexture();i.bindTexture(W,Le),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<oe;gt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Ee+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Le}const ae={};ae[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),r.setFunc(oa),at(!1),lt(Nd),xe(i.CULL_FACE),B(Fs);function xe(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function me(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function Be(W,Ee){return u[W]!==Ee?(i.bindFramebuffer(W,Ee),u[W]=Ee,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ee),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Oe(W,Ee){let oe=h,ue=!1;if(W){oe=d.get(Ee),oe===void 0&&(oe=[],d.set(Ee,oe));const Ce=W.textures;if(oe.length!==Ce.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,gt=Ce.length;Le<gt;Le++)oe[Le]=i.COLOR_ATTACHMENT0+Le;oe.length=Ce.length,ue=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ue=!0);ue&&i.drawBuffers(oe)}function Ve(W){return p!==W?(i.useProgram(W),p=W,!0):!1}const et={[er]:i.FUNC_ADD,[qg]:i.FUNC_SUBTRACT,[Yg]:i.FUNC_REVERSE_SUBTRACT};et[Kg]=i.MIN,et[Zg]=i.MAX;const it={[Jg]:i.ZERO,[Qg]:i.ONE,[ev]:i.SRC_COLOR,[Sh]:i.SRC_ALPHA,[av]:i.SRC_ALPHA_SATURATE,[sv]:i.DST_COLOR,[nv]:i.DST_ALPHA,[tv]:i.ONE_MINUS_SRC_COLOR,[wh]:i.ONE_MINUS_SRC_ALPHA,[rv]:i.ONE_MINUS_DST_COLOR,[iv]:i.ONE_MINUS_DST_ALPHA,[ov]:i.CONSTANT_COLOR,[lv]:i.ONE_MINUS_CONSTANT_COLOR,[cv]:i.CONSTANT_ALPHA,[hv]:i.ONE_MINUS_CONSTANT_ALPHA};function B(W,Ee,oe,ue,Ce,Le,gt,Zt,Fn,_t){if(W===Fs){v===!0&&(me(i.BLEND),v=!1);return}if(v===!1&&(xe(i.BLEND),v=!0),W!==jg){if(W!==_||_t!==F){if((m!==er||M!==er)&&(i.blendEquation(i.FUNC_ADD),m=er,M=er),_t)switch(W){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yh:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Od:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}f=null,x=null,w=null,P=null,A.set(0,0,0),R=0,_=W,F=_t}return}Ce=Ce||Ee,Le=Le||oe,gt=gt||ue,(Ee!==m||Ce!==M)&&(i.blendEquationSeparate(et[Ee],et[Ce]),m=Ee,M=Ce),(oe!==f||ue!==x||Le!==w||gt!==P)&&(i.blendFuncSeparate(it[oe],it[ue],it[Le],it[gt]),f=oe,x=ue,w=Le,P=gt),(Zt.equals(A)===!1||Fn!==R)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Fn),A.copy(Zt),R=Fn),_=W,F=!1}function zt(W,Ee){W.side===ti?me(i.CULL_FACE):xe(i.CULL_FACE);let oe=W.side===Kn;Ee&&(oe=!oe),at(oe),W.blending===sr&&W.transparent===!1?B(Fs):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),s.setMask(W.colorWrite);const ue=W.stencilWrite;a.setTest(ue),ue&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Et(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){Y!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),Y=W)}function lt(W){W!==Wg?(xe(i.CULL_FACE),W!==y&&(W===Nd?i.cullFace(i.BACK):W===$g?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),y=W}function Ye(W){W!==b&&(Z&&i.lineWidth(W),b=W)}function Et(W,Ee,oe){W?(xe(i.POLYGON_OFFSET_FILL),(N!==Ee||k!==oe)&&(i.polygonOffset(Ee,oe),N=Ee,k=oe)):me(i.POLYGON_OFFSET_FILL)}function Ke(W){W?xe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function L(W){W===void 0&&(W=i.TEXTURE0+X-1),ne!==W&&(i.activeTexture(W),ne=W)}function E(W,Ee,oe){oe===void 0&&(ne===null?oe=i.TEXTURE0+X-1:oe=ne);let ue=fe[oe];ue===void 0&&(ue={type:void 0,texture:void 0},fe[oe]=ue),(ue.type!==W||ue.texture!==Ee)&&(ne!==oe&&(i.activeTexture(oe),ne=oe),i.bindTexture(W,Ee||ae[W]),ue.type=W,ue.texture=Ee)}function ie(){const W=fe[ne];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(W){Se.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Te(W){le.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),le.copy(W))}function tt(W,Ee){let oe=l.get(Ee);oe===void 0&&(oe=new WeakMap,l.set(Ee,oe));let ue=oe.get(W);ue===void 0&&(ue=i.getUniformBlockIndex(Ee,W.name),oe.set(W,ue))}function nt(W,Ee){const ue=l.get(Ee).get(W);o.get(Ee)!==ue&&(i.uniformBlockBinding(Ee,ue,W.__bindingPointIndex),o.set(Ee,ue))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ne=null,fe={},u={},d=new WeakMap,h=[],p=null,v=!1,_=null,m=null,f=null,x=null,M=null,w=null,P=null,A=new ot(0,0,0),R=0,F=!1,Y=null,y=null,b=null,N=null,k=null,Se.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:me,bindFramebuffer:Be,drawBuffers:Oe,useProgram:Ve,setBlending:B,setMaterial:zt,setFlipSided:at,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:Et,setScissorTest:Ke,activeTexture:L,bindTexture:E,unbindTexture:ie,compressedTexImage2D:he,compressedTexImage3D:re,texImage2D:De,texImage3D:Ge,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:ut,texStorage3D:ve,texSubImage2D:K,texSubImage3D:we,compressedTexSubImage2D:_e,compressedTexSubImage3D:Pe,scissor:$e,viewport:Te,reset:wt}}function Rf(i,e,t,n){const s=YS(n);switch(t){case vm:return i*e;case xm:return i*e;case Mm:return i*e*2;case Fu:return i*e/s.components*s.byteLength;case Iu:return i*e/s.components*s.byteLength;case ym:return i*e*2/s.components*s.byteLength;case Uu:return i*e*2/s.components*s.byteLength;case _m:return i*e*3/s.components*s.byteLength;case Ft:return i*e*4/s.components*s.byteLength;case Nu:return i*e*4/s.components*s.byteLength;case yl:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wl:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Oh:return Math.max(i,16)*Math.max(e,8)/4;case Uh:case kh:return Math.max(i,8)*Math.max(e,8)/2;case zh:case Bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case eu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sm:case su:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ru:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YS(i){switch(i){case ui:case pm:return{byteLength:1,components:1};case uo:case mm:case va:return{byteLength:2,components:1};case Du:case Lu:return{byteLength:2,components:4};case lr:case Pu:case tn:return{byteLength:4,components:1};case gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function KS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return p?new OffscreenCanvas(L,E):Nl("canvas")}function _(L,E,ie){let he=1;const re=Ke(L);if((re.width>ie||re.height>ie)&&(he=ie/Math.max(re.width,re.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(he*re.width),we=Math.floor(he*re.height);d===void 0&&(d=v(K,we));const _e=E?v(K,we):d;return _e.width=K,_e.height=we,_e.getContext("2d").drawImage(L,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+K+"x"+we+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==ct&&L.minFilter!==On}function f(L){i.generateMipmap(L)}function x(L,E,ie,he,re=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=E;if(E===i.RED&&(ie===i.FLOAT&&(K=i.R32F),ie===i.HALF_FLOAT&&(K=i.R16F),ie===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(K=i.R8UI),ie===i.UNSIGNED_SHORT&&(K=i.R16UI),ie===i.UNSIGNED_INT&&(K=i.R32UI),ie===i.BYTE&&(K=i.R8I),ie===i.SHORT&&(K=i.R16I),ie===i.INT&&(K=i.R32I)),E===i.RG&&(ie===i.FLOAT&&(K=i.RG32F),ie===i.HALF_FLOAT&&(K=i.RG16F),ie===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(K=i.RG8UI),ie===i.UNSIGNED_SHORT&&(K=i.RG16UI),ie===i.UNSIGNED_INT&&(K=i.RG32UI),ie===i.BYTE&&(K=i.RG8I),ie===i.SHORT&&(K=i.RG16I),ie===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(K=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(K=i.RGB16UI),ie===i.UNSIGNED_INT&&(K=i.RGB32UI),ie===i.BYTE&&(K=i.RGB8I),ie===i.SHORT&&(K=i.RGB16I),ie===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),ie===i.UNSIGNED_INT&&(K=i.RGBA32UI),ie===i.BYTE&&(K=i.RGBA8I),ie===i.SHORT&&(K=i.RGBA16I),ie===i.INT&&(K=i.RGBA32I)),E===i.RGB&&ie===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.RGBA){const we=re?Ll:Ct.getTransfer(he);ie===i.FLOAT&&(K=i.RGBA32F),ie===i.HALF_FLOAT&&(K=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(K=we===Wt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(L,E){let ie;return L?E===null||E===lr||E===ha?ie=i.DEPTH24_STENCIL8:E===tn?ie=i.DEPTH32F_STENCIL8:E===uo&&(ie=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===lr||E===ha?ie=i.DEPTH_COMPONENT24:E===tn?ie=i.DEPTH_COMPONENT32F:E===uo&&(ie=i.DEPTH_COMPONENT16),ie}function w(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==ct&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){const E=L.target;E.removeEventListener("dispose",P),R(E),E.isVideoTexture&&u.delete(E)}function A(L){const E=L.target;E.removeEventListener("dispose",A),Y(E)}function R(L){const E=n.get(L);if(E.__webglInit===void 0)return;const ie=L.source,he=h.get(ie);if(he){const re=he[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(L),Object.keys(he).length===0&&h.delete(ie)}n.remove(L)}function F(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const ie=L.source,he=h.get(ie);delete he[E.__cacheKey],a.memory.textures--}function Y(L){const E=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let re=0;re<E.__webglFramebuffer[he].length;re++)i.deleteFramebuffer(E.__webglFramebuffer[he][re]);else i.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)i.deleteFramebuffer(E.__webglFramebuffer[he]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=L.textures;for(let he=0,re=ie.length;he<re;he++){const K=n.get(ie[he]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(ie[he])}n.remove(L)}let y=0;function b(){y=0}function N(){const L=y;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),y+=1,L}function k(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function X(L,E){const ie=n.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(ie,L,E);return}}t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+E)}function Z(L,E){const ie=n.get(L);if(L.version>0&&ie.__version!==L.version){le(ie,L,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+E)}function J(L,E){const ie=n.get(L);if(L.version>0&&ie.__version!==L.version){le(ie,L,E);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+E)}function z(L,E){const ie=n.get(L);if(L.version>0&&ie.__version!==L.version){ee(ie,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+E)}const ne={[Fh]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Ih]:i.MIRRORED_REPEAT},fe={[ct]:i.NEAREST,[Mv]:i.NEAREST_MIPMAP_NEAREST,[Do]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[Dc]:i.LINEAR_MIPMAP_NEAREST,[Ds]:i.LINEAR_MIPMAP_LINEAR},ce={[Tv]:i.NEVER,[Dv]:i.ALWAYS,[Ev]:i.LESS,[wm]:i.LEQUAL,[Av]:i.EQUAL,[Pv]:i.GEQUAL,[Cv]:i.GREATER,[Rv]:i.NOTEQUAL};function pe(L,E){if(E.type===tn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Dc||E.magFilter===Do||E.magFilter===Ds||E.minFilter===On||E.minFilter===Dc||E.minFilter===Do||E.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ne[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ne[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ne[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,fe[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ct||E.minFilter!==Do&&E.minFilter!==Ds||E.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Se(L,E){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));const he=E.source;let re=h.get(he);re===void 0&&(re={},h.set(he,re));const K=k(E);if(K!==L.__cacheKey){re[K]===void 0&&(re[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),re[K].usedTimes++;const we=re[L.__cacheKey];we!==void 0&&(re[L.__cacheKey].usedTimes--,we.usedTimes===0&&F(E)),L.__cacheKey=K,L.__webglTexture=re[K].texture}return ie}function le(L,E,ie){let he=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=i.TEXTURE_3D);const re=Se(L,E),K=E.source;t.bindTexture(he,L.__webglTexture,i.TEXTURE0+ie);const we=n.get(K);if(K.version!==we.__version||re===!0){t.activeTexture(i.TEXTURE0+ie);const _e=Ct.getPrimaries(Ct.workingColorSpace),Pe=E.colorSpace===Rs?null:Ct.getPrimaries(E.colorSpace),ut=E.colorSpace===Rs||_e===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let ve=_(E.image,!1,s.maxTextureSize);ve=Et(E,ve);const De=r.convert(E.format,E.colorSpace),Ge=r.convert(E.type);let $e=x(E.internalFormat,De,Ge,E.colorSpace,E.isVideoTexture);pe(he,E);let Te;const tt=E.mipmaps,nt=E.isVideoTexture!==!0,wt=we.__version===void 0||re===!0,W=K.dataReady,Ee=w(E,ve);if(E.isDepthTexture)$e=M(E.format===ua,E.type),wt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,$e,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,$e,ve.width,ve.height,0,De,Ge,null));else if(E.isDataTexture)if(tt.length>0){nt&&wt&&t.texStorage2D(i.TEXTURE_2D,Ee,$e,tt[0].width,tt[0].height);for(let oe=0,ue=tt.length;oe<ue;oe++)Te=tt[oe],nt?W&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Te.width,Te.height,De,Ge,Te.data):t.texImage2D(i.TEXTURE_2D,oe,$e,Te.width,Te.height,0,De,Ge,Te.data);E.generateMipmaps=!1}else nt?(wt&&t.texStorage2D(i.TEXTURE_2D,Ee,$e,ve.width,ve.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,De,Ge,ve.data)):t.texImage2D(i.TEXTURE_2D,0,$e,ve.width,ve.height,0,De,Ge,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,$e,tt[0].width,tt[0].height,ve.depth);for(let oe=0,ue=tt.length;oe<ue;oe++)if(Te=tt[oe],E.format!==Ft)if(De!==null)if(nt){if(W)if(E.layerUpdates.size>0){const Ce=Rf(Te.width,Te.height,E.format,E.type);for(const Le of E.layerUpdates){const gt=Te.data.subarray(Le*Ce/Te.data.BYTES_PER_ELEMENT,(Le+1)*Ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Le,Te.width,Te.height,1,De,gt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,ve.depth,De,Te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,$e,Te.width,Te.height,ve.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,ve.depth,De,Ge,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,$e,Te.width,Te.height,ve.depth,0,De,Ge,Te.data)}else{nt&&wt&&t.texStorage2D(i.TEXTURE_2D,Ee,$e,tt[0].width,tt[0].height);for(let oe=0,ue=tt.length;oe<ue;oe++)Te=tt[oe],E.format!==Ft?De!==null?nt?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,$e,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Te.width,Te.height,De,Ge,Te.data):t.texImage2D(i.TEXTURE_2D,oe,$e,Te.width,Te.height,0,De,Ge,Te.data)}else if(E.isDataArrayTexture)if(nt){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,$e,ve.width,ve.height,ve.depth),W)if(E.layerUpdates.size>0){const oe=Rf(ve.width,ve.height,E.format,E.type);for(const ue of E.layerUpdates){const Ce=ve.data.subarray(ue*oe/ve.data.BYTES_PER_ELEMENT,(ue+1)*oe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ve.width,ve.height,1,De,Ge,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,Ge,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,ve.width,ve.height,ve.depth,0,De,Ge,ve.data);else if(E.isData3DTexture)nt?(wt&&t.texStorage3D(i.TEXTURE_3D,Ee,$e,ve.width,ve.height,ve.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,Ge,ve.data)):t.texImage3D(i.TEXTURE_3D,0,$e,ve.width,ve.height,ve.depth,0,De,Ge,ve.data);else if(E.isFramebufferTexture){if(wt)if(nt)t.texStorage2D(i.TEXTURE_2D,Ee,$e,ve.width,ve.height);else{let oe=ve.width,ue=ve.height;for(let Ce=0;Ce<Ee;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,$e,oe,ue,0,De,Ge,null),oe>>=1,ue>>=1}}else if(tt.length>0){if(nt&&wt){const oe=Ke(tt[0]);t.texStorage2D(i.TEXTURE_2D,Ee,$e,oe.width,oe.height)}for(let oe=0,ue=tt.length;oe<ue;oe++)Te=tt[oe],nt?W&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,De,Ge,Te):t.texImage2D(i.TEXTURE_2D,oe,$e,De,Ge,Te);E.generateMipmaps=!1}else if(nt){if(wt){const oe=Ke(ve);t.texStorage2D(i.TEXTURE_2D,Ee,$e,oe.width,oe.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ge,ve)}else t.texImage2D(i.TEXTURE_2D,0,$e,De,Ge,ve);m(E)&&f(he),we.__version=K.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ee(L,E,ie){if(E.image.length!==6)return;const he=Se(L,E),re=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+ie);const K=n.get(re);if(re.version!==K.__version||he===!0){t.activeTexture(i.TEXTURE0+ie);const we=Ct.getPrimaries(Ct.workingColorSpace),_e=E.colorSpace===Rs?null:Ct.getPrimaries(E.colorSpace),Pe=E.colorSpace===Rs||we===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,ve=E.image[0]&&E.image[0].isDataTexture,De=[];for(let ue=0;ue<6;ue++)!ut&&!ve?De[ue]=_(E.image[ue],!0,s.maxCubemapSize):De[ue]=ve?E.image[ue].image:E.image[ue],De[ue]=Et(E,De[ue]);const Ge=De[0],$e=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),tt=x(E.internalFormat,$e,Te,E.colorSpace),nt=E.isVideoTexture!==!0,wt=K.__version===void 0||he===!0,W=re.dataReady;let Ee=w(E,Ge);pe(i.TEXTURE_CUBE_MAP,E);let oe;if(ut){nt&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,tt,Ge.width,Ge.height);for(let ue=0;ue<6;ue++){oe=De[ue].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Le=oe[Ce];E.format!==Ft?$e!==null?nt?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,0,0,Le.width,Le.height,$e,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,tt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,0,0,Le.width,Le.height,$e,Te,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce,tt,Le.width,Le.height,0,$e,Te,Le.data)}}}else{if(oe=E.mipmaps,nt&&wt){oe.length>0&&Ee++;const ue=Ke(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,tt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ve){nt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,De[ue].width,De[ue].height,$e,Te,De[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,De[ue].width,De[ue].height,0,$e,Te,De[ue].data);for(let Ce=0;Ce<oe.length;Ce++){const gt=oe[Ce].image[ue].image;nt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,0,0,gt.width,gt.height,$e,Te,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,tt,gt.width,gt.height,0,$e,Te,gt.data)}}else{nt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,$e,Te,De[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,$e,Te,De[ue]);for(let Ce=0;Ce<oe.length;Ce++){const Le=oe[Ce];nt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,0,0,$e,Te,Le.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce+1,tt,$e,Te,Le.image[ue])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),K.__version=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ae(L,E,ie,he,re,K){const we=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),Pe=x(ie.internalFormat,we,_e,ie.colorSpace);if(!n.get(E).__hasExternalTextures){const ve=Math.max(1,E.width>>K),De=Math.max(1,E.height>>K);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,K,Pe,ve,De,E.depth,0,we,_e,null):t.texImage2D(re,K,Pe,ve,De,0,we,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),lt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,re,n.get(ie).__webglTexture,0,at(E)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,re,n.get(ie).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(L,E,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const he=E.depthTexture,re=he&&he.isDepthTexture?he.type:null,K=M(E.stencilBuffer,re),we=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=at(E);lt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,K,E.width,E.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,L)}else{const he=E.textures;for(let re=0;re<he.length;re++){const K=he[re],we=r.convert(K.format,K.colorSpace),_e=r.convert(K.type),Pe=x(K.internalFormat,we,_e,K.colorSpace),ut=at(E);ie&&lt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Pe,E.width,E.height):lt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const he=n.get(E.depthTexture).__webglTexture,re=at(E);if(E.depthTexture.format===na)lt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(E.depthTexture.format===ua)lt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Be(L){const E=n.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",re)};he.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=he}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");me(E.__webglFramebuffer,L)}else if(ie){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=i.createRenderbuffer(),xe(E.__webglDepthbuffer[he],L,!1);else{const re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),xe(E.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(L,E,ie){const he=n.get(L);E!==void 0&&ae(he.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&Be(L)}function Ve(L){const E=L.texture,ie=n.get(L),he=n.get(E);L.addEventListener("dispose",A);const re=L.textures,K=L.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=E.version,a.memory.textures++),K){ie.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer[_e]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)ie.__webglFramebuffer[_e][Pe]=i.createFramebuffer()}else ie.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)ie.__webglFramebuffer[_e]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(we)for(let _e=0,Pe=re.length;_e<Pe;_e++){const ut=n.get(re[_e]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&lt(L)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let _e=0;_e<re.length;_e++){const Pe=re[_e];ie.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[_e]);const ut=r.convert(Pe.format,Pe.colorSpace),ve=r.convert(Pe.type),De=x(Pe.internalFormat,ut,ve,Pe.colorSpace,L.isXRRenderTarget===!0),Ge=at(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,De,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ie.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(ie.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),pe(i.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ae(ie.__webglFramebuffer[_e][Pe],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Pe);else ae(ie.__webglFramebuffer[_e],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(E)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let _e=0,Pe=re.length;_e<Pe;_e++){const ut=re[_e],ve=n.get(ut);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),pe(i.TEXTURE_2D,ut),ae(ie.__webglFramebuffer,L,ut,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),m(ut)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,he.__webglTexture),pe(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ae(ie.__webglFramebuffer[Pe],L,E,i.COLOR_ATTACHMENT0,_e,Pe);else ae(ie.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,_e,0);m(E)&&f(_e),t.unbindTexture()}L.depthBuffer&&Be(L)}function et(L){const E=L.textures;for(let ie=0,he=E.length;ie<he;ie++){const re=E[ie];if(m(re)){const K=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(re).__webglTexture;t.bindTexture(K,we),f(K),t.unbindTexture()}}}const it=[],B=[];function zt(L){if(L.samples>0){if(lt(L)===!1){const E=L.textures,ie=L.width,he=L.height;let re=i.COLOR_BUFFER_BIT;const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(L),_e=E.length>1;if(_e)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Pe]);const ut=n.get(E[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,ie,he,0,0,ie,he,re,i.NEAREST),l===!0&&(it.length=0,B.length=0,it.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(K),B.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,we.__webglColorRenderbuffer[Pe]);const ut=n.get(E[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ut,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function at(L){return Math.min(s.maxSamples,L.samples)}function lt(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Et(L,E){const ie=L.colorSpace,he=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==zs&&ie!==Rs&&(Ct.getTransfer(ie)===Wt?(he!==Ft||re!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),E}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Oe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=lt}function ZS(i,e){function t(n,s=Rs){let r;const a=Ct.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===Du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pm)return i.BYTE;if(n===mm)return i.SHORT;if(n===uo)return i.UNSIGNED_SHORT;if(n===Pu)return i.INT;if(n===lr)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===va)return i.HALF_FLOAT;if(n===vm)return i.ALPHA;if(n===_m)return i.RGB;if(n===Ft)return i.RGBA;if(n===xm)return i.LUMINANCE;if(n===Mm)return i.LUMINANCE_ALPHA;if(n===na)return i.DEPTH_COMPONENT;if(n===ua)return i.DEPTH_STENCIL;if(n===Fu)return i.RED;if(n===Iu)return i.RED_INTEGER;if(n===ym)return i.RG;if(n===Uu)return i.RG_INTEGER;if(n===Nu)return i.RGBA_INTEGER;if(n===yl||n===Sl||n===wl||n===bl)if(a===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uh||n===Nh||n===kh||n===Oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zh||n===Bh||n===Hh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zh||n===Bh)return a===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vh||n===Gh||n===Wh||n===$h||n===Xh||n===jh||n===qh||n===Yh||n===Kh||n===Zh||n===Jh||n===Qh||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eu)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tu)return a===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===nu||n===iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sm||n===su||n===ru||n===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ha?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class JS extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ew=`
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

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new zn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fs({vertexShader:ew,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends fr{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const _=new nw,m=t.getContextAttributes();let f=null,x=null;const M=[],w=[],P=new je;let A=null;const R=new xi;R.layers.enable(1),R.viewport=new Yt;const F=new xi;F.layers.enable(2),F.viewport=new Yt;const Y=[R,F],y=new JS;y.layers.enable(1),y.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=M[ee];return ae===void 0&&(ae=new rh,M[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=M[ee];return ae===void 0&&(ae=new rh,M[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=M[ee];return ae===void 0&&(ae=new rh,M[ee]=ae),ae.getHandSpace()};function k(ee){const ae=w.indexOf(ee.inputSource);if(ae===-1)return;const xe=M[ae];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||a),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<M.length;ee++){const ae=w[ee];ae!==null&&(w[ee]=null,M[ee].disconnect(ae))}b=null,N=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,x=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new jn(p.framebufferWidth,p.framebufferHeight,{format:Ft,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,xe=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?ua:na,xe=m.stencil?ha:lr);const Be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new jn(h.textureWidth,h.textureHeight,{format:Ft,type:ui,depthTexture:new Um(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(ee){for(let ae=0;ae<ee.removed.length;ae++){const xe=ee.removed[ae],me=w.indexOf(xe);me>=0&&(w[me]=null,M[me].disconnect(xe))}for(let ae=0;ae<ee.added.length;ae++){const xe=ee.added[ae];let me=w.indexOf(xe);if(me===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=w.length){w.push(xe),me=Oe;break}else if(w[Oe]===null){w[Oe]=xe,me=Oe;break}if(me===-1)break}const Be=M[me];Be&&Be.connect(xe)}}const J=new j,z=new j;function ne(ee,ae,xe){J.setFromMatrixPosition(ae.matrixWorld),z.setFromMatrixPosition(xe.matrixWorld);const me=J.distanceTo(z),Be=ae.projectionMatrix.elements,Oe=xe.projectionMatrix.elements,Ve=Be[14]/(Be[10]-1),et=Be[14]/(Be[10]+1),it=(Be[9]+1)/Be[5],B=(Be[9]-1)/Be[5],zt=(Be[8]-1)/Be[0],at=(Oe[8]+1)/Oe[0],lt=Ve*zt,Ye=Ve*at,Et=me/(-zt+at),Ke=Et*-zt;if(ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ke),ee.translateZ(Et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Be[10]===-1)ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const L=Ve+Et,E=et+Et,ie=lt-Ke,he=Ye+(me-Ke),re=it*et/E*L,K=B*et/E*L;ee.projectionMatrix.makePerspective(ie,he,re,K,L,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ae=ee.near,xe=ee.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),y.near=F.near=R.near=ae,y.far=F.far=R.far=xe,(b!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,N=y.far);const me=ee.parent,Be=y.cameras;fe(y,me);for(let Oe=0;Oe<Be.length;Oe++)fe(Be[Oe],me);Be.length===2?ne(y,R,F):y.projectionMatrix.copy(R.projectionMatrix),ce(ee,y,me)};function ce(ee,ae,xe){xe===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=fo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pe=null;function Se(ee,ae){if(u=ae.getViewerPose(c||a),v=ae,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let me=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let Oe=0;Oe<xe.length;Oe++){const Ve=xe[Oe];let et=null;if(p!==null)et=p.getViewport(Ve);else{const B=d.getViewSubImage(h,Ve);et=B.viewport,Oe===0&&(e.setRenderTargetTextures(x,B.colorTexture,h.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(x))}let it=Y[Oe];it===void 0&&(it=new xi,it.layers.enable(Oe),it.viewport=new Yt,Y[Oe]=it),it.matrix.fromArray(Ve.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Ve.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(et.x,et.y,et.width,et.height),Oe===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(it)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Oe=d.getDepthInformation(xe[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,s.renderState)}}for(let xe=0;xe<M.length;xe++){const me=w[xe],Be=M[xe];me!==null&&Be!==void 0&&Be.update(me,ae,c||a)}pe&&pe(ee,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const le=new Im;le.setAnimationLoop(Se),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}}const Ks=new ds,sw=new Nt;function rw(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pm(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),M=x.envMap,w=x.envMapRotation;M&&(m.envMap.value=M,Ks.copy(w),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),m.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(Ks)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aw(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const w=M.program;n.uniformBlockBinding(x,w)}function c(x,M){let w=s[x.id];w===void 0&&(v(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(x,P);const A=e.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function u(x){const M=d();x.__bindingPointIndex=M;const w=i.createBuffer(),P=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],w=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=w.length;A<R;A++){const F=Array.isArray(w[A])?w[A]:[w[A]];for(let Y=0,y=F.length;Y<y;Y++){const b=F[Y];if(p(b,A,Y,P)===!0){const N=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let Z=0;Z<k.length;Z++){const J=k[Z],z=_(J);typeof J=="number"||typeof J=="boolean"?(b.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,N+X,b.__data)):J.isMatrix3?(b.__data[0]=J.elements[0],b.__data[1]=J.elements[1],b.__data[2]=J.elements[2],b.__data[3]=0,b.__data[4]=J.elements[3],b.__data[5]=J.elements[4],b.__data[6]=J.elements[5],b.__data[7]=0,b.__data[8]=J.elements[6],b.__data[9]=J.elements[7],b.__data[10]=J.elements[8],b.__data[11]=0):(J.toArray(b.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,w,P){const A=x.value,R=M+"_"+w;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const F=P[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return P[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function v(x){const M=x.uniforms;let w=0;const P=16;for(let R=0,F=M.length;R<F;R++){const Y=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,b=Y.length;y<b;y++){const N=Y[y],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,Z=k.length;X<Z;X++){const J=k[X],z=_(J),ne=w%P,fe=ne%z.boundary,ce=ne+fe;w+=fe,ce!==0&&P-ce<z.storage&&(w+=P-ce),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=z.storage}}}const A=w%P;return A>0&&(w+=P-A),x.__size=w,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class ow{constructor(e={}){const{canvas:t=qv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=Is,this.toneMappingExposure=1;const M=this;let w=!1,P=0,A=0,R=null,F=-1,Y=null;const y=new Yt,b=new Yt;let N=null;const k=new ot(0);let X=0,Z=t.width,J=t.height,z=1,ne=null,fe=null;const ce=new Yt(0,0,Z,J),pe=new Yt(0,0,Z,J);let Se=!1;const le=new Fm;let ee=!1,ae=!1;const xe=new Nt,me=new Nt,Be=new j,Oe=new Yt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function it(){return R===null?z:1}let B=n;function zt(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Le,!1),B===null){const q="webgl2";if(B=zt(q,C),B===null)throw zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,lt,Ye,Et,Ke,L,E,ie,he,re,K,we,_e,Pe,ut,ve,De,Ge,$e,Te,tt,nt,wt,W;function Ee(){at=new dy(B),at.init(),nt=new ZS(B,at),lt=new ay(B,at,e,nt),Ye=new qS(B),lt.reverseDepthBuffer&&Ye.buffers.depth.setReversed(!0),Et=new my(B),Ke=new FS,L=new KS(B,at,Ye,Ke,lt,nt,Et),E=new ly(M),ie=new uy(M),he=new S_(B),wt=new sy(B,he),re=new fy(B,he,Et,wt),K=new vy(B,re,he,Et),$e=new gy(B,lt,L),ve=new oy(Ke),we=new LS(M,E,ie,at,lt,wt,ve),_e=new rw(M,Ke),Pe=new US,ut=new HS(at),Ge=new iy(M,E,ie,Ye,K,h,l),De=new XS(M,K,lt),W=new aw(B,Et,lt,Ye),Te=new ry(B,at,Et),tt=new py(B,at,Et),Et.programs=we.programs,M.capabilities=lt,M.extensions=at,M.properties=Ke,M.renderLists=Pe,M.shadowMap=De,M.state=Ye,M.info=Et}Ee();const oe=new iw(M,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(Z,J,!1))},this.getSize=function(C){return C.set(Z,J)},this.setSize=function(C,q,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,J=q,t.width=Math.floor(C*z),t.height=Math.floor(q*z),Q===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Z*z,J*z).floor()},this.setDrawingBufferSize=function(C,q,Q){Z=C,J=q,z=Q,t.width=Math.floor(C*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(ce)},this.setViewport=function(C,q,Q,te){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,q,Q,te),Ye.viewport(y.copy(ce).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(pe)},this.setScissor=function(C,q,Q,te){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,q,Q,te),Ye.scissor(b.copy(pe).multiplyScalar(z).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){Ye.setScissorTest(Se=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,q=!0,Q=!0){let te=0;if(C){let G=!1;if(R!==null){const Me=R.texture.format;G=Me===Nu||Me===Uu||Me===Iu}if(G){const Me=R.texture.type,be=Me===ui||Me===lr||Me===uo||Me===ha||Me===Du||Me===Lu,Ue=Ge.getClearColor(),ze=Ge.getClearAlpha(),Ze=Ue.r,Je=Ue.g,ke=Ue.b;be?(p[0]=Ze,p[1]=Je,p[2]=ke,p[3]=ze,B.clearBufferuiv(B.COLOR,0,p)):(v[0]=Ze,v[1]=Je,v[2]=ke,v[3]=ze,B.clearBufferiv(B.COLOR,0,v))}else te|=B.COLOR_BUFFER_BIT}q&&(te|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Pe.dispose(),ut.dispose(),Ke.dispose(),E.dispose(),ie.dispose(),K.dispose(),wt.dispose(),W.dispose(),we.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",un),oe.removeEventListener("sessionend",ni),Jn.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=Et.autoReset,q=De.enabled,Q=De.autoUpdate,te=De.needsUpdate,G=De.type;Ee(),Et.autoReset=C,De.enabled=q,De.autoUpdate=Q,De.needsUpdate=te,De.type=G}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){const q=C.target;q.removeEventListener("dispose",gt),Zt(q)}function Zt(C){Fn(C),Ke.remove(C)}function Fn(C){const q=Ke.get(C).programs;q!==void 0&&(q.forEach(function(Q){we.releaseProgram(Q)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,Q,te,G,Me){q===null&&(q=Ve);const be=G.isMesh&&G.matrixWorld.determinant()<0,Ue=Xi(C,q,Q,te,G);Ye.setMaterial(te,be);let ze=Q.index,Ze=1;if(te.wireframe===!0){if(ze=re.getWireframeAttribute(Q),ze===void 0)return;Ze=2}const Je=Q.drawRange,ke=Q.attributes.position;let xt=Je.start*Ze,Rt=(Je.start+Je.count)*Ze;Me!==null&&(xt=Math.max(xt,Me.start*Ze),Rt=Math.min(Rt,(Me.start+Me.count)*Ze)),ze!==null?(xt=Math.max(xt,0),Rt=Math.min(Rt,ze.count)):ke!=null&&(xt=Math.max(xt,0),Rt=Math.min(Rt,ke.count));const kt=Rt-xt;if(kt<0||kt===1/0)return;wt.setup(G,te,Ue,Q,ze);let En,vt=Te;if(ze!==null&&(En=he.get(ze),vt=tt,vt.setIndex(En)),G.isMesh)te.wireframe===!0?(Ye.setLineWidth(te.wireframeLinewidth*it()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(G.isLine){let We=te.linewidth;We===void 0&&(We=1),Ye.setLineWidth(We*it()),G.isLineSegments?vt.setMode(B.LINES):G.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else G.isPoints?vt.setMode(B.POINTS):G.isSprite&&vt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const We=G._multiDrawStarts,en=G._multiDrawCounts,st=G._multiDrawCount,Qn=ze?he.get(ze).bytesPerElement:1,ji=Ke.get(te).currentProgram.getUniforms();for(let An=0;An<st;An++)ji.setValue(B,"_gl_DrawID",An),vt.render(We[An]/Qn,en[An])}else if(G.isInstancedMesh)vt.renderInstances(xt,kt,G.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,en=Math.min(Q.instanceCount,We);vt.renderInstances(xt,kt,en)}else vt.render(xt,kt)};function _t(C,q,Q){C.transparent===!0&&C.side===ti&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Bs(C,q,Q),C.side=ks,C.needsUpdate=!0,Bs(C,q,Q),C.side=ti):Bs(C,q,Q)}this.compile=function(C,q,Q=null){Q===null&&(Q=C),m=ut.get(Q),m.init(q),x.push(m),Q.traverseVisible(function(G){G.isLight&&G.layers.test(q.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),C!==Q&&C.traverseVisible(function(G){G.isLight&&G.layers.test(q.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const te=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Ue=Me[be];_t(Ue,Q,G),te.add(Ue)}else _t(Me,Q,G),te.add(Me)}),x.pop(),m=null,te},this.compileAsync=function(C,q,Q=null){const te=this.compile(C,q,Q);return new Promise(G=>{function Me(){if(te.forEach(function(be){Ke.get(be).currentProgram.isReady()&&te.delete(be)}),te.size===0){G(C);return}setTimeout(Me,10)}at.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let In=null;function Tn(C){In&&In(C)}function un(){Jn.stop()}function ni(){Jn.start()}const Jn=new Im;Jn.setAnimationLoop(Tn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(C){In=C,oe.setAnimationLoop(C),C===null?Jn.stop():Jn.start()},oe.addEventListener("sessionstart",un),oe.addEventListener("sessionend",ni),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,q,R),m=ut.get(C,x.length),m.init(q),x.push(m),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),le.setFromProjectionMatrix(me),ae=this.localClippingEnabled,ee=ve.init(this.clippingPlanes,ae),_=Pe.get(C,f.length),_.init(),f.push(_),oe.enabled===!0&&oe.isPresenting===!0){const Me=M.xr.getDepthSensingMesh();Me!==null&&Li(Me,q,-1/0,M.sortObjects)}Li(C,q,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(ne,fe),et=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,et&&Ge.addToRenderList(_,C),this.info.render.frame++,ee===!0&&ve.beginShadows();const Q=m.state.shadowsArray;De.render(Q,C,q),ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=_.opaque,G=_.transmissive;if(m.setupLights(),q.isArrayCamera){const Me=q.cameras;if(G.length>0)for(let be=0,Ue=Me.length;be<Ue;be++){const ze=Me[be];$i(te,G,C,ze)}et&&Ge.render(C);for(let be=0,Ue=Me.length;be<Ue;be++){const ze=Me[be];Bn(_,C,ze,ze.viewport)}}else G.length>0&&$i(te,G,C,q),et&&Ge.render(C),Bn(_,C,q);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(M,C,q),wt.resetDefaultState(),F=-1,Y=null,x.pop(),x.length>0?(m=x[x.length-1],ee===!0&&ve.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Li(C,q,Q,te){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){te&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const be=K.update(C),Ue=C.material;Ue.visible&&_.push(C,be,Ue,Q,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){const be=K.update(C),Ue=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Oe.copy(be.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ue)){const ze=be.groups;for(let Ze=0,Je=ze.length;Ze<Je;Ze++){const ke=ze[Ze],xt=Ue[ke.materialIndex];xt&&xt.visible&&_.push(C,be,xt,Q,Oe.z,ke)}}else Ue.visible&&_.push(C,be,Ue,Q,Oe.z,null)}}const Me=C.children;for(let be=0,Ue=Me.length;be<Ue;be++)Li(Me[be],q,Q,te)}function Bn(C,q,Q,te){const G=C.opaque,Me=C.transmissive,be=C.transparent;m.setupLightsView(Q),ee===!0&&ve.setGlobalState(M.clippingPlanes,Q),te&&Ye.viewport(y.copy(te)),G.length>0&&yi(G,q,Q),Me.length>0&&yi(Me,q,Q),be.length>0&&yi(be,q,Q),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function $i(C,q,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[te.id]===void 0&&(m.state.transmissionRenderTarget[te.id]=new jn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?va:ui,minFilter:Ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Me=m.state.transmissionRenderTarget[te.id],be=te.viewport||y;Me.setSize(be.z,be.w);const Ue=M.getRenderTarget();M.setRenderTarget(Me),M.getClearColor(k),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),et&&Ge.render(Q);const ze=M.toneMapping;M.toneMapping=Is;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),m.setupLightsView(te),ee===!0&&ve.setGlobalState(M.clippingPlanes,te),yi(C,Q,te),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),at.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ke=0,xt=q.length;ke<xt;ke++){const Rt=q[ke],kt=Rt.object,En=Rt.geometry,vt=Rt.material,We=Rt.group;if(vt.side===ti&&kt.layers.test(te.layers)){const en=vt.side;vt.side=Kn,vt.needsUpdate=!0,Ca(kt,Q,te,En,vt,We),vt.side=en,vt.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}M.setRenderTarget(Ue),M.setClearColor(k,X),Ze!==void 0&&(te.viewport=Ze),M.toneMapping=ze}function yi(C,q,Q){const te=q.isScene===!0?q.overrideMaterial:null;for(let G=0,Me=C.length;G<Me;G++){const be=C[G],Ue=be.object,ze=be.geometry,Ze=te===null?be.material:te,Je=be.group;Ue.layers.test(Q.layers)&&Ca(Ue,q,Q,ze,Ze,Je)}}function Ca(C,q,Q,te,G,Me){C.onBeforeRender(M,q,Q,te,G,Me),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(M,q,Q,te,C,Me),G.transparent===!0&&G.side===ti&&G.forceSinglePass===!1?(G.side=Kn,G.needsUpdate=!0,M.renderBufferDirect(Q,q,te,G,C,Me),G.side=ks,G.needsUpdate=!0,M.renderBufferDirect(Q,q,te,G,C,Me),G.side=ti):M.renderBufferDirect(Q,q,te,G,C,Me),C.onAfterRender(M,q,Q,te,G,Me)}function Bs(C,q,Q){q.isScene!==!0&&(q=Ve);const te=Ke.get(C),G=m.state.lights,Me=m.state.shadowsArray,be=G.state.version,Ue=we.getParameters(C,G.state,Me,q,Q),ze=we.getProgramCacheKey(Ue);let Ze=te.programs;te.environment=C.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(C.isMeshStandardMaterial?ie:E).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",gt),Ze=new Map,te.programs=Ze);let Je=Ze.get(ze);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===be)return To(C,Ue),Je}else Ue.uniforms=we.getUniforms(C),C.onBeforeCompile(Ue,M),Je=we.acquireProgram(Ue,ze),Ze.set(ze,Je),te.uniforms=Ue.uniforms;const ke=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=ve.uniform),To(C,Ue),te.needsLights=Hs(C),te.lightsStateVersion=be,te.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function bo(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Al.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function To(C,q){const Q=Ke.get(C);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Xi(C,q,Q,te,G){q.isScene!==!0&&(q=Ve),L.resetTextureUnits();const Me=q.fog,be=te.isMeshStandardMaterial?q.environment:null,Ue=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zs,ze=(te.isMeshStandardMaterial?ie:E).get(te.envMap||be),Ze=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ke=!!Q.morphAttributes.position,xt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let kt=Is;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(kt=M.toneMapping);const En=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=En!==void 0?En.length:0,We=Ke.get(te),en=m.state.lights;if(ee===!0&&(ae===!0||C!==Y)){const Hn=C===Y&&te.id===F;ve.setState(te,C,Hn)}let st=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==en.state.version||We.outputColorSpace!==Ue||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==ze||te.fog===!0&&We.fog!==Me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==Ze||We.vertexTangents!==Je||We.morphTargets!==ke||We.morphNormals!==xt||We.morphColors!==Rt||We.toneMapping!==kt||We.morphTargetsCount!==vt)&&(st=!0):(st=!0,We.__version=te.version);let Qn=We.currentProgram;st===!0&&(Qn=Bs(te,q,G));let ji=!1,An=!1,gr=!1;const qt=Qn.getUniforms(),Fi=We.uniforms;if(Ye.useProgram(Qn.program)&&(ji=!0,An=!0,gr=!0),te.id!==F&&(F=te.id,An=!0),ji||Y!==C){lt.reverseDepthBuffer?(xe.copy(C.projectionMatrix),Kv(xe),Zv(xe),qt.setValue(B,"projectionMatrix",xe)):qt.setValue(B,"projectionMatrix",C.projectionMatrix),qt.setValue(B,"viewMatrix",C.matrixWorldInverse);const Hn=qt.map.cameraPosition;Hn!==void 0&&Hn.setValue(B,Be.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&qt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&qt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),Y!==C&&(Y=C,An=!0,gr=!0)}if(G.isSkinnedMesh){qt.setOptional(B,G,"bindMatrix"),qt.setOptional(B,G,"bindMatrixInverse");const Hn=G.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),qt.setValue(B,"boneTexture",Hn.boneTexture,L))}G.isBatchedMesh&&(qt.setOptional(B,G,"batchingTexture"),qt.setValue(B,"batchingTexture",G._matricesTexture,L),qt.setOptional(B,G,"batchingIdTexture"),qt.setValue(B,"batchingIdTexture",G._indirectTexture,L),qt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&qt.setValue(B,"batchingColorTexture",G._colorsTexture,L));const Ra=Q.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&$e.update(G,Q,Qn),(An||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,qt.setValue(B,"receiveShadow",G.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Fi.envMap.value=ze,Fi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&q.environment!==null&&(Fi.envMapIntensity.value=q.environmentIntensity),An&&(qt.setValue(B,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&vc(Fi,gr),Me&&te.fog===!0&&_e.refreshFogUniforms(Fi,Me),_e.refreshMaterialUniforms(Fi,te,z,J,m.state.transmissionRenderTarget[C.id]),Al.upload(B,bo(We),Fi,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Al.upload(B,bo(We),Fi,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&qt.setValue(B,"center",G.center),qt.setValue(B,"modelViewMatrix",G.modelViewMatrix),qt.setValue(B,"normalMatrix",G.normalMatrix),qt.setValue(B,"modelMatrix",G.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Hn=te.uniformsGroups;for(let vr=0,_c=Hn.length;vr<_c;vr++){const Pa=Hn[vr];W.update(Pa,Qn),W.bind(Pa,Qn)}}return Qn}function vc(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Hs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,q,Q){Ke.get(C.texture).__webglTexture=q,Ke.get(C.depthTexture).__webglTexture=Q;const te=Ke.get(C);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const Q=Ke.get(C);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,Q=0){R=C,P=q,A=Q;let te=!0,G=null,Me=!1,be=!1;if(C){const ze=Ke.get(C);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(ze.__hasExternalTextures)L.rebindTextures(C,Ke.get(C.texture).__webglTexture,Ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(ze.__boundDepthTexture!==ke){if(ke!==null&&Ke.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(be=!0);const Je=Ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?G=Je[q][Q]:G=Je[q],Me=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?G=Ke.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?G=Je[Q]:G=Je,y.copy(C.viewport),b.copy(C.scissor),N=C.scissorTest}else y.copy(ce).multiplyScalar(z).floor(),b.copy(pe).multiplyScalar(z).floor(),N=Se;if(Ye.bindFramebuffer(B.FRAMEBUFFER,G)&&te&&Ye.drawBuffers(C,G),Ye.viewport(y),Ye.scissor(b),Ye.setScissorTest(N),Me){const ze=Ke.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,Q)}else if(be){const ze=Ke.get(C.texture),Ze=q||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,Q||0,Ze)}F=-1},this.readRenderTargetPixels=function(C,q,Q,te,G,Me,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){Ye.bindFramebuffer(B.FRAMEBUFFER,Ue);try{const ze=C.texture,Ze=ze.format,Je=ze.type;if(!lt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-te&&Q>=0&&Q<=C.height-G&&B.readPixels(q,Q,te,G,nt.convert(Ze),nt.convert(Je),Me)}finally{const ze=R!==null?Ke.get(R).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,q,Q,te,G,Me,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){const ze=C.texture,Ze=ze.format,Je=ze.type;if(!lt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-te&&Q>=0&&Q<=C.height-G){Ye.bindFramebuffer(B.FRAMEBUFFER,Ue);const ke=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ke),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(q,Q,te,G,nt.convert(Ze),nt.convert(Je),0);const xt=R!==null?Ke.get(R).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,xt);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Yv(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ke),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(ke),B.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,Q=0){C.isTexture!==!0&&(El("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const te=Math.pow(2,-Q),G=Math.floor(C.image.width*te),Me=Math.floor(C.image.height*te),be=q!==null?q.x:0,Ue=q!==null?q.y:0;L.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,be,Ue,G,Me),Ye.unbindTexture()},this.copyTextureToTexture=function(C,q,Q=null,te=null,G=0){C.isTexture!==!0&&(El("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1],q=arguments[2],G=arguments[3]||0,Q=null);let Me,be,Ue,ze,Ze,Je;Q!==null?(Me=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Ue=Q.min.x,ze=Q.min.y):(Me=C.image.width,be=C.image.height,Ue=0,ze=0),te!==null?(Ze=te.x,Je=te.y):(Ze=0,Je=0);const ke=nt.convert(q.format),xt=nt.convert(q.type);L.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),En=B.getParameter(B.UNPACK_SKIP_PIXELS),vt=B.getParameter(B.UNPACK_SKIP_ROWS),We=B.getParameter(B.UNPACK_SKIP_IMAGES),en=C.isCompressedTexture?C.mipmaps[G]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,en.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,en.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Ze,Je,Me,be,ke,xt,en.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Ze,Je,en.width,en.height,ke,en.data):B.texSubImage2D(B.TEXTURE_2D,G,Ze,Je,Me,be,ke,xt,en),B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,En),B.pixelStorei(B.UNPACK_SKIP_ROWS,vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We),G===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(C,q,Q=null,te=null,G=0){C.isTexture!==!0&&(El("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,C=arguments[2],q=arguments[3],G=arguments[4]||0);let Me,be,Ue,ze,Ze,Je,ke,xt,Rt;const kt=C.isCompressedTexture?C.mipmaps[G]:C.image;Q!==null?(Me=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Ue=Q.max.z-Q.min.z,ze=Q.min.x,Ze=Q.min.y,Je=Q.min.z):(Me=kt.width,be=kt.height,Ue=kt.depth,ze=0,Ze=0,Je=0),te!==null?(ke=te.x,xt=te.y,Rt=te.z):(ke=0,xt=0,Rt=0);const En=nt.convert(q.format),vt=nt.convert(q.type);let We;if(q.isData3DTexture)L.setTexture3D(q,0),We=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)L.setTexture2DArray(q,0),We=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const en=B.getParameter(B.UNPACK_ROW_LENGTH),st=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qn=B.getParameter(B.UNPACK_SKIP_PIXELS),ji=B.getParameter(B.UNPACK_SKIP_ROWS),An=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(We,G,ke,xt,Rt,Me,be,Ue,En,vt,kt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(We,G,ke,xt,Rt,Me,be,Ue,En,kt.data):B.texSubImage3D(We,G,ke,xt,Rt,Me,be,Ue,En,vt,kt),B.pixelStorei(B.UNPACK_ROW_LENGTH,en),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ji),B.pixelStorei(B.UNPACK_SKIP_IMAGES,An),G===0&&q.generateMipmaps&&B.generateMipmap(We),Ye.unbindTexture()},this.initRenderTarget=function(C){Ke.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ku?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===ec?"display-p3":"srgb"}}class wo extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cs extends zn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ct,u=ct,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lu extends wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new Nt,Pf=new Nt,Jo=[],Df=new Gi,lw=new Nt,Ha=new Mt,Va=new Wi;class cw extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Df.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Df)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Va.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),e.ray.intersectsSphere(Va)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),Pf.multiplyMatrices(n,Hr),Ha.matrixWorld=Pf,Ha.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){const l=Jo[a];l.instanceId=r,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(s*this.count),s,this.count,Fu,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qr extends xa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new j,Ol=new j,Lf=new Nt,Ga=new yo,Qo=new Wi,ah=new j,Ff=new j;class cu extends Zn{constructor(e=new sn,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kl.fromBufferAttribute(t,s-1),Ol.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kl.distanceTo(Ol);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Lf.copy(s).invert(),Ga.copy(e.ray).applyMatrix4(Lf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=p,m=v-1;_<m;_+=c){const f=u.getX(_),x=u.getX(_+1),M=el(this,e,Ga,l,f,x);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(p),f=el(this,e,Ga,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let _=p,m=v-1;_<m;_+=c){const f=el(this,e,Ga,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=el(this,e,Ga,l,v-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function el(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(kl.fromBufferAttribute(a,s),Ol.fromBufferAttribute(a,r),t.distanceSqToSegment(kl,Ol,ah,Ff)>n)return;ah.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ah);if(!(l<e.near||l>e.far))return{distance:l,point:Ff.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const If=new j,Uf=new j;class tl extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)If.fromBufferAttribute(t,s),Uf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+If.distanceTo(Uf);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hw extends xa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nf=new Nt,hu=new yo,nl=new Wi,il=new j;class uw extends Zn{constructor(e=new sn,t=new hw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;Nf.copy(s).invert(),hu.copy(e.ray).applyMatrix4(Nf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,_=p;v<_;v++){const m=c.getX(v);il.fromBufferAttribute(d,m),kf(il,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=h,_=p;v<_;v++)il.fromBufferAttribute(d,v),kf(il,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kf(i,e,t,n,s,r,a){const o=hu.distanceSqToPoint(i);if(o<t){const l=new j;hu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class no extends sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let v=0;const _=[],m=n/2;let f=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(p,2));function x(){const w=new j,P=new j;let A=0;const R=(t-e)/n;for(let F=0;F<=r;F++){const Y=[],y=F/r,b=y*(t-e)+e;for(let N=0;N<=s;N++){const k=N/s,X=k*l+o,Z=Math.sin(X),J=Math.cos(X);P.x=b*Z,P.y=-y*n+m,P.z=b*J,d.push(P.x,P.y,P.z),w.set(Z,R,J).normalize(),h.push(w.x,w.y,w.z),p.push(k,1-y),Y.push(v++)}_.push(Y)}for(let F=0;F<s;F++)for(let Y=0;Y<r;Y++){const y=_[Y][F],b=_[Y+1][F],N=_[Y+1][F+1],k=_[Y][F+1];e>0&&(u.push(y,b,k),A+=3),t>0&&(u.push(b,N,k),A+=3)}c.addGroup(f,A,0),f+=A}function M(w){const P=v,A=new je,R=new j;let F=0;const Y=w===!0?e:t,y=w===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),v++;const b=v;for(let N=0;N<=s;N++){const X=N/s*l+o,Z=Math.cos(X),J=Math.sin(X);R.x=Y*J,R.y=m*y,R.z=Y*Z,d.push(R.x,R.y,R.z),h.push(0,y,0),A.x=Z*.5+.5,A.y=J*.5*y+.5,p.push(A.x,A.y),v++}for(let N=0;N<s;N++){const k=P+N,X=b+N;w===!0?u.push(X,X+1,k):u.push(X+1,X,k),F+=3}c.addGroup(f,F,w===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const sl=new j,rl=new j,oh=new j,al=new Mi;class lh extends sn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ia*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:m,c:f}=al;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),al.getNormal(oh),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const M=(x+1)%3,w=d[x],P=d[M],A=al[u[x]],R=al[u[M]],F=`${w}_${P}`,Y=`${P}_${w}`;Y in h&&h[Y]?(oh.dot(h[Y].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(R.x,R.y,R.z)),h[Y]=null):F in h||(h[F]={index0:c[x],index1:c[M],normal:oh.clone()})}}for(const v in h)if(h[v]){const{index0:_,index1:m}=h[v];sl.fromBufferAttribute(o,_),rl.fromBufferAttribute(o,m),p.push(sl.x,sl.y,sl.z),p.push(rl.x,rl.y,rl.z)}this.setAttribute("position",new Ot(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const dw={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Bm(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,h,p;if(n&&(r=vw(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let v=t;v<s;v+=t)d=i[v],h=i[v+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return po(r,a,t,o,l,p,0),a}};function Bm(i,e,t,n,s){let r,a;if(s===Cw(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Of(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Of(r,i[r],i[r+1],a);return a&&nc(a,a.next)&&(go(a),a=a.next),a}function hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nc(t,t.next)||Kt(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function po(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Sw(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?pw(i,n,s,r):fw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),go(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mw(hr(i),e,t),po(i,e,t,n,s,r,2)):a===2&&gw(i,e,t,n,s,r):po(hr(i),e,t,n,s,r,1);break}}}function fw(i){const e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=p&&Jr(s,o,r,l,a,c,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function pw(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Kt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,p=o<l?o<c?o:c:l<c?l:c,v=u<d?u<h?u:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=uu(p,v,e,t,n),x=uu(_,m,e,t,n);let M=i.prevZ,w=i.nextZ;for(;M&&M.z>=f&&w&&w.z<=x;){if(M.x>=p&&M.x<=_&&M.y>=v&&M.y<=m&&M!==s&&M!==a&&Jr(o,u,l,d,c,h,M.x,M.y)&&Kt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=p&&w.x<=_&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&Jr(o,u,l,d,c,h,w.x,w.y)&&Kt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=_&&M.y>=v&&M.y<=m&&M!==s&&M!==a&&Jr(o,u,l,d,c,h,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=x;){if(w.x>=p&&w.x<=_&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&Jr(o,u,l,d,c,h,w.x,w.y)&&Kt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function mw(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!nc(s,r)&&Hm(s,n,n.next,r)&&mo(s,r)&&mo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),go(n),go(n.next),n=i=r),n=n.next}while(n!==i);return hr(n)}function gw(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tw(a,o)){let l=Vm(a,o);a=hr(a,a.next),l=hr(l,l.next),po(a,e,t,n,s,r,0),po(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vw(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Bm(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(bw(c));for(s.sort(_w),r=0;r<s.length;r++)t=xw(s[r],t);return t}function _w(i,e){return i.x-e.x}function xw(i,e){const t=Mw(i,e);if(!t)return e;const n=Vm(t,i);return hr(n,n.next),hr(t,t.next)}function Mw(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Jr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),mo(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&yw(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function yw(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function Sw(i,e,t,n){let s=i;do s.z===0&&(s.z=uu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ww(s)}function ww(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function uu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bw(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Tw(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ew(i,e)&&(mo(i,e)&&mo(e,i)&&Aw(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||nc(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nc(i,e){return i.x===e.x&&i.y===e.y}function Hm(i,e,t,n){const s=ll(Kt(i,e,t)),r=ll(Kt(i,e,n)),a=ll(Kt(t,n,i)),o=ll(Kt(t,n,e));return!!(s!==r&&a!==o||s===0&&ol(i,t,e)||r===0&&ol(i,n,e)||a===0&&ol(t,i,n)||o===0&&ol(t,e,n))}function ol(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ll(i){return i>0?1:i<0?-1:0}function Ew(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Hm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mo(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function Aw(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vm(i,e){const t=new du(i.i,i.x,i.y),n=new du(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Of(i,e,t,n){const s=new du(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function go(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function du(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cw(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Hu{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Hu.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];zf(e),Bf(n,e);let a=e.length;t.forEach(zf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Bf(n,t[l]);const o=dw.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qr extends sn{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/s,p=new j,v=new je;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}d+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,M=x,w=x+n+1,P=x+n+2,A=x+1;o.push(M,w,A),o.push(w,P,A)}}this.setIndex(o),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ea extends sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new j,h=new j,p=[],v=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],M=f/n;let w=0;f===0&&a===0?w=.5/t:f===n&&l===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const A=P/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+M*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(A+w,1-M),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const M=u[f][x+1],w=u[f][x],P=u[f+1][x],A=u[f+1][x+1];(f!==0||a>0)&&p.push(M,w,A),(f!==n-1||l<Math.PI)&&p.push(w,P,A)}this.setIndex(p),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qn extends fs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rw extends sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Hf=new Nt;class Vf{constructor(e,t,n=0,s=1/0){this.ray=new yo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(e,t=!0,n=[]){return fu(e,this,n,t),n.sort(Gf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fu(e[s],this,n,t);return n.sort(Gf),n}}function Gf(i,e){return i.distance-e.distance}function fu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)fu(r[a],e,t,!0)}}class Wf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pw extends fr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);const cl=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ic=`
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
`,Dw=ic+`
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
`,Lw=ic+`
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
`,Fw=ic+`
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  float z = zOf(ij);
  float h = t.a > 0.75 ? (uSubgrid > 0.5 ? volOf(ij, uTide) : max(0.0, uTide - z)) : 0.0;
  o0 = vec4(h, 0.0, 0.0, 0.0);
  o1 = vec4(0.0, 0.0, 0.0, 0.0);
}
`,Iw={pump:1,culvert:2,pipe:3};function Uw(i,e,t){const n=Math.max(1,i.length),s=new Float32Array(n*4),r=new Float32Array(n*4),a=new Float32Array(e*t*4).fill(-1),o=(l,c,u)=>{if(l<0||l>=e*t)return;const d=l*4;a[d]<0?(a[d]=c,a[d+1]=u):a[d+2]<0&&(a[d+2]=c,a[d+3]=u)};return i.forEach((l,c)=>{s[c*4]=l.a,s[c*4+1]=l.b,s[c*4+2]=Iw[l.kind],l.kind==="pump"?(s[c*4+3]=l.q??1,r[c*4]=l.on??.05,r[c*4+1]=l.off??.01):(s[c*4+3]=l.d??1,r[c*4]=l.n??.013,r[c*4+1]=l.L??20,r[c*4+2]=l.zin??0,r[c*4+3]=l.zout??0),o(l.a,c,1),l.b>=0&&o(l.b,c,-1)}),{c0:s,c1:r,map:a,n}}const Nw=ic+`
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
`,kw=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uSrc;
layout(location = 0) out vec4 o;
void main() { o = texelFetch(uSrc, ivec2(gl_FragCoord.xy), 0); }
`,Ow=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uState0; uniform sampler2D uState1;
layout(location = 0) out vec4 o0; layout(location = 1) out vec4 o1;
void main() { ivec2 ij = ivec2(gl_FragCoord.xy); o0 = texelFetch(uState0, ij, 0); o1 = texelFetch(uState1, ij, 0); }
`,zw=`
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
`,Jl=class Jl{constructor(e,t,n,s,r,a,o,l,c,u){U(this,"W");U(this,"H");U(this,"dx");U(this,"renderer");U(this,"rtA");U(this,"rtB");U(this,"scene",new wo);U(this,"camera",new So(-1,1,1,-1,0,1));U(this,"quad");U(this,"fluxMat");U(this,"depthMat");U(this,"initMat");U(this,"copyMat");U(this,"maxMat");U(this,"connMat");U(this,"copy1Mat");U(this,"connTex0",null);U(this,"connTex1",null);U(this,"connMapTex");U(this,"connRTA",null);U(this,"connRTB",null);U(this,"connN",0);U(this,"connBuf",new Float32Array(4));U(this,"redRTs",[]);U(this,"redBuf",new Float32Array(64));U(this,"terrainTex");U(this,"modTex");U(this,"chanTex");U(this,"terrainData");U(this,"modData");U(this,"chanData");U(this,"faceModTex");U(this,"faceModData");U(this,"sgTex",null);U(this,"subgridAvailable");U(this,"auxBuf");U(this,"time",0);U(this,"dt",.5);U(this,"steps",0);U(this,"readBuf");U(this,"cellBuf",new Float32Array(4));U(this,"cellAux",new Float32Array(4));this.renderer=e,this.W=t.W,this.H=t.H,this.dx=t.dx;const d=this.W*this.H;this.terrainData=new Float32Array(d*4);for(let v=0;v<d;v++)this.terrainData[v*4]=n[v],this.terrainData[v*4+1]=s[v],this.terrainData[v*4+2]=a?a[v]:0,this.terrainData[v*4+3]=r[v]?1:o&&o[v]?.5:0;this.terrainTex=this.makeDataTex(this.terrainData),this.modData=new Float32Array(d*4);for(let v=0;v<d;v++)this.modData[v*4+3]=1;if(this.modTex=this.makeDataTex(this.modData),this.faceModData=new Float32Array(d*4).fill(Jl.FACE_NONE),this.faceModTex=this.makeDataTex(this.faceModData),this.chanData=new Float32Array(d*4),l)for(let v=0;v<d;v++)r[v]||(this.chanData[v*4]=l[v*3],this.chanData[v*4+1]=l[v*3+1],this.chanData[v*4+2]=l[v*3+2]);if(c)for(let v=0;v<d;v++)r[v]||(this.chanData[v*4+3]=c[v]);if(this.chanTex=this.makeDataTex(this.chanData),this.subgridAvailable=!!u,u){const v=new Float32Array(d*4),_=new Float32Array(d*4),m=new Float32Array(d*4),f=new Float32Array(d*4);for(let x=0;x<d;x++)for(let M=0;M<4;M++)v[x*4+M]=u.cell[x*8+M],_[x*4+M]=u.cell[x*8+4+M],m[x*4+M]=u.face[x*8+M],f[x*4+M]=u.face[x*8+4+M];this.sgTex=[v,_,m,f].map(x=>this.makeDataTex(x))}this.rtA=this.makeRT(),this.rtB=this.makeRT();const h=()=>({uState0:{value:null},uState1:{value:null},uTerrain:{value:this.terrainTex},uMod:{value:this.modTex},uChan:{value:this.chanTex},uSize:{value:new je(this.W,this.H)},uDt:{value:this.dt},uDx:{value:this.dx},uG:{value:9.81},uTide:{value:0},uRain:{value:0},uDrain:{value:0},uTheta:{value:.8},uHmin:{value:.002},uManning:{value:.035},uBuildings:{value:1},uTankRate:{value:.01},uBldBlock:{value:1},uManningBld:{value:.6},uHs:{value:0},uHillCap:{value:120/36e5},uRecover:{value:6},uTideLock:{value:1.5},uSgC0:{value:this.sgTex?this.sgTex[0]:this.chanTex},uSgC1:{value:this.sgTex?this.sgTex[1]:this.chanTex},uSgFE:{value:this.sgTex?this.sgTex[2]:this.chanTex},uSgFN:{value:this.sgTex?this.sgTex[3]:this.chanTex},uSubgrid:{value:this.sgTex?1:0},uSill:{value:.1},uWeirB:{value:4},uFaceMod:{value:this.faceModTex},uConnMap:{value:null},uConnState:{value:null},uC0:{value:null},uC1:{value:null},uCS:{value:null}}),p=v=>new qn({vertexShader:cl,fragmentShader:v,uniforms:h(),glslVersion:Pn,depthTest:!1,depthWrite:!1});this.fluxMat=p(Dw),this.depthMat=p(Lw),this.initMat=p(Fw),this.copyMat=new qn({vertexShader:cl,fragmentShader:Ow,glslVersion:Pn,depthTest:!1,depthWrite:!1,uniforms:{uState0:{value:null},uState1:{value:null}}}),this.copy1Mat=new qn({vertexShader:cl,fragmentShader:kw,glslVersion:Pn,depthTest:!1,depthWrite:!1,uniforms:{uSrc:{value:null}}}),this.connMat=p(Nw),this.connMapTex=this.makeDataTex(new Float32Array(d*4).fill(-1));for(const v of[this.fluxMat,this.depthMat,this.initMat,this.connMat])v.uniforms.uConnMap.value=this.connMapTex;this.setConnectors([]),this.maxMat=new qn({vertexShader:cl,fragmentShader:zw,glslVersion:Pn,depthTest:!1,depthWrite:!1,uniforms:{uSrc:{value:null},uTerrain:{value:this.terrainTex},uSrcSize:{value:new je(this.W,this.H)},uFirst:{value:1}}});for(const v of[this.fluxMat,this.depthMat])v.uniforms.uSize.value=new je(this.W,this.H);this.quad=new Mt(new Vi(2,2),this.fluxMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.readBuf=new Float32Array(d*4),this.auxBuf=new Float32Array(d*4)}get subgridOn(){return this.depthMat.uniforms.uSubgrid.value>.5}makeDataTex(e){const t=new cs(e,this.W,this.H,Ft,tn);return t.minFilter=ct,t.magFilter=ct,t.generateMipmaps=!1,t.wrapS=Dn,t.wrapT=Dn,t.needsUpdate=!0,t}makeRT(){const e=new jn(this.W,this.H,{count:2,type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const t of e.textures)t.wrapS=Dn,t.wrapT=Dn;return e}get stateTex(){return this.rtA.textures[0]}get auxTex(){return this.rtA.textures[1]}setParams(e){for(const t of[this.fluxMat,this.depthMat,this.initMat])e.subgrid!==void 0&&(t.uniforms.uSubgrid.value=e.subgrid&&this.subgridAvailable?1:0),e.manning!==void 0&&(t.uniforms.uManning.value=e.manning),e.buildings!==void 0&&(t.uniforms.uBuildings.value=e.buildings?1:0),e.drain!==void 0&&(t.uniforms.uDrain.value=e.drain),e.theta!==void 0&&(t.uniforms.uTheta.value=e.theta),e.bldBlock!==void 0&&(t.uniforms.uBldBlock.value=e.bldBlock),e.manningBld!==void 0&&(t.uniforms.uManningBld.value=e.manningBld),e.hillCap!==void 0&&(t.uniforms.uHillCap.value=e.hillCap),e.recover!==void 0&&(t.uniforms.uRecover.value=e.recover),e.tideLock!==void 0&&(t.uniforms.uTideLock.value=e.tideLock)}setDt(e){this.dt=e;for(const t of[this.fluxMat,this.depthMat])t.uniforms.uDt.value=e}updateMod(){this.modTex.needsUpdate=!0,this.faceModTex.needsUpdate=!0}updateTerrain(){this.terrainTex.needsUpdate=!0}reset(e){this.time=0,this.steps=0,this.initMat.uniforms.uTide.value=e,this.quad.material=this.initMat;const t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t),this.clearConnState()}step(e,t,n,s=0){const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1;for(let o=0;o<e;o++){if(this.connN>0&&this.connRTA&&this.connRTB){const l=this.connMat.uniforms;l.uState0.value=this.rtA.textures[0],l.uState1.value=this.rtA.textures[1],l.uCS.value=this.connRTA.texture,l.uTide.value=t,this.quad.material=this.connMat,this.renderer.setRenderTarget(this.connRTB),this.renderer.render(this.scene,this.camera),[this.connRTA,this.connRTB]=[this.connRTB,this.connRTA],this.depthMat.uniforms.uConnState.value=this.connRTA.texture}this.fluxMat.uniforms.uState0.value=this.rtA.textures[0],this.fluxMat.uniforms.uState1.value=this.rtA.textures[1],this.fluxMat.uniforms.uTide.value=t,this.fluxMat.uniforms.uRain.value=n,this.quad.material=this.fluxMat,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.depthMat.uniforms.uState0.value=this.rtB.textures[0],this.depthMat.uniforms.uState1.value=this.rtB.textures[1],this.depthMat.uniforms.uTide.value=t,this.depthMat.uniforms.uRain.value=n,this.depthMat.uniforms.uHs.value=s,this.quad.material=this.depthMat,this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.time+=this.dt,this.steps++}this.renderer.autoClear=a,this.renderer.setRenderTarget(r)}setConnectors(e){const{c0:t,c1:n,map:s,n:r}=Uw(e,this.W,this.H);this.connN=e.length,this.connTex0?.dispose(),this.connTex1?.dispose();const a=l=>{const c=new cs(l,r,1,Ft,tn);return c.minFilter=ct,c.magFilter=ct,c.needsUpdate=!0,c};if(this.connTex0=a(t),this.connTex1=a(n),this.connMapTex.image.data.set(s),this.connMapTex.needsUpdate=!0,!this.connRTA||this.connRTA.width!==r){this.connRTA?.dispose(),this.connRTB?.dispose();const l=()=>new jn(r,1,{type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.connRTA=l(),this.connRTB=l()}this.clearConnState();const o=this.connMat.uniforms;o.uC0.value=this.connTex0,o.uC1.value=this.connTex1,this.depthMat.uniforms.uConnState.value=this.connRTA.texture}clearConnState(){if(!this.connRTA||!this.connRTB)return;const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new ot),n=this.renderer.getClearAlpha();this.renderer.setClearColor(new ot(0,0,0),0);for(const s of[this.connRTA,this.connRTB])this.renderer.setRenderTarget(s),this.renderer.clear();this.renderer.setClearColor(t,n),this.renderer.setRenderTarget(e)}blit1(e,t){this.copy1Mat.uniforms.uSrc.value=e,this.quad.material=this.copy1Mat;const n=this.renderer.getRenderTarget(),s=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=s,this.renderer.setRenderTarget(n)}readConnectors(){return!this.connRTA||this.connN===0?new Float32Array(0):(this.connBuf.length<this.connN*4&&(this.connBuf=new Float32Array(this.connN*4)),this.renderer.readRenderTargetPixels(this.connRTA,0,0,this.connN,1,this.connBuf),this.connBuf.subarray(0,this.connN*4))}static snapshotBytes(e,t){return e*t*32}blit(e,t){this.blitTex(e.textures[0],e.textures[1],t)}blitTex(e,t,n){this.copyMat.uniforms.uState0.value=e,this.copyMat.uniforms.uState1.value=t,this.quad.material=this.copyMat;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(n),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s)}snapshot(e){const t=e??{rt:this.makeRT(),time:0,steps:0,dt:this.dt,conn:null};return this.blit(this.rtA,t.rt),t.time=this.time,t.steps=this.steps,t.dt=this.dt,this.saveConn(t),t}saveConn(e){if(this.connN===0||!this.connRTA){e.conn=null;return}(!e.conn||e.conn.width!==this.connRTA.width)&&(e.conn?.dispose(),e.conn=new jn(this.connRTA.width,1,{type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})),this.blit1(this.connRTA.texture,e.conn)}restore(e){this.blit(e.rt,this.rtA),this.time=e.time,this.steps=e.steps,this.setDt(e.dt),this.connRTA&&(e.conn&&e.conn.width===this.connRTA.width?this.blit1(e.conn.texture,this.connRTA):this.clearConnState())}readSnapshot(e){let t=null;e.conn&&(t=new Float32Array(e.conn.width*4),this.renderer.readRenderTargetPixels(e.conn,0,0,e.conn.width,1,t));const n=this.W*this.H*4,s=new Float32Array(n),r=new Float32Array(n),a=this.renderer.getContext(),o=this.renderer.properties.get(e.rt).__webglFramebuffer,l=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(a.FRAMEBUFFER,o),a.readBuffer(a.COLOR_ATTACHMENT0),a.readPixels(0,0,this.W,this.H,a.RGBA,a.FLOAT,s),a.readBuffer(a.COLOR_ATTACHMENT1),a.readPixels(0,0,this.W,this.H,a.RGBA,a.FLOAT,r),a.readBuffer(a.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(l),{state:s,aux:r,conn:t}}snapshotFromData(e,t,n,s,r,a){const o=this.makeDataTex(e),l=this.makeDataTex(t),c=r??{rt:this.makeRT(),time:n,steps:0,dt:s,conn:null};if(this.blitTex(o,l,c.rt),o.dispose(),l.dispose(),c.time=n,c.steps=Math.round(n/s),c.dt=s,a&&a.length>=4&&this.connRTA&&a.length===this.connRTA.width*4){const u=new cs(a,a.length/4,1,Ft,tn);u.minFilter=ct,u.magFilter=ct,u.needsUpdate=!0,(!c.conn||c.conn.width!==a.length/4)&&(c.conn?.dispose(),c.conn=new jn(a.length/4,1,{type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})),this.blit1(u,c.conn),u.dispose()}else c.conn?.dispose(),c.conn=null;return c}maxDepth(){let e=this.W,t=this.H,n=this.rtA.textures[1],s=1,r=0;const a=this.renderer.getRenderTarget(),o=this.renderer.autoClear;for(this.renderer.autoClear=!1,this.quad.material=this.maxMat;e>4||t>4;){const c=Math.ceil(e/4),u=Math.ceil(t/4);this.redRTs[r]||(this.redRTs[r]=new jn(c,u,{type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}));const d=this.maxMat.uniforms;d.uSrc.value=n,d.uFirst.value=s,d.uSrcSize.value.set(e,t),this.renderer.setRenderTarget(this.redRTs[r]),this.renderer.render(this.scene,this.camera),n=this.redRTs[r].texture,e=c,t=u,s=0,r++}let l=0;if(r>0){this.renderer.readRenderTargetPixels(this.redRTs[r-1],0,0,e,t,this.redBuf);for(let c=0;c<e*t;c++)l=Math.max(l,this.redBuf[c*4])}return this.renderer.autoClear=o,this.renderer.setRenderTarget(a),l}readCell(e,t){e=Math.min(this.W-1,Math.max(0,e)),t=Math.min(this.H-1,Math.max(0,t)),this.renderer.readRenderTargetPixels(this.rtA,e,t,1,1,this.cellBuf);const n=this.renderer.getContext(),s=this.renderer.properties.get(this.rtA).__webglFramebuffer,r=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(n.FRAMEBUFFER,s),n.readBuffer(n.COLOR_ATTACHMENT1),n.readPixels(e,t,1,1,n.RGBA,n.FLOAT,this.cellAux),n.readBuffer(n.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(r),{state:this.cellBuf,aux:this.cellAux}}readState(){return this.renderer.readRenderTargetPixels(this.rtA,0,0,this.W,this.H,this.readBuf),this.readBuf}readAux(){const e=this.renderer.getContext(),t=this.renderer.properties.get(this.rtA).__webglFramebuffer,n=this.renderer.getRenderTarget();return this.renderer.state.bindFramebuffer(e.FRAMEBUFFER,t),e.readBuffer(e.COLOR_ATTACHMENT1),e.readPixels(0,0,this.W,this.H,e.RGBA,e.FLOAT,this.auxBuf),e.readBuffer(e.COLOR_ATTACHMENT0),this.renderer.setRenderTarget(n),this.auxBuf}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.terrainTex.dispose(),this.modTex.dispose(),this.faceModTex.dispose(),this.chanTex.dispose(),this.sgTex?.forEach(e=>e.dispose()),this.fluxMat.dispose(),this.depthMat.dispose(),this.initMat.dispose(),this.copyMat.dispose(),this.maxMat.dispose(),this.connMat.dispose(),this.copy1Mat.dispose(),this.quad.geometry.dispose(),this.connTex0?.dispose(),this.connTex1?.dispose(),this.connMapTex.dispose(),this.connRTA?.dispose(),this.connRTB?.dispose();for(const e of this.redRTs)e.dispose()}};U(Jl,"FACE_NONE",-1e4);let ta=Jl;const Bw="hkfl-runs",Hw=1,Vw=6e8,ch=typeof CompressionStream<"u"&&typeof DecompressionStream<"u";async function Vr(i,e=!1){const t=new Blob([i]).stream().pipeThrough(e?new DecompressionStream("gzip"):new CompressionStream("gzip"));return new Response(t).arrayBuffer()}function es(i){return new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)})}function hl(i){return new Promise((e,t)=>{i.oncomplete=()=>e(),i.onerror=()=>t(i.error),i.onabort=()=>t(i.error)})}function Gw(i){const e=JSON.stringify(i);let t=5381,n=52711;for(let s=0;s<e.length;s++){const r=e.charCodeAt(s);t=(t*33^r)>>>0,n=(n*31^r)>>>0}return`${t.toString(16).padStart(8,"0")}${n.toString(16).padStart(8,"0")}`}class zl{constructor(e){this.db=e}static async open(){if(typeof indexedDB>"u")return null;try{const e=indexedDB.open(Bw,Hw);return e.onupgradeneeded=()=>{const t=e.result;t.createObjectStore("frames",{keyPath:"key"}).createIndex("run","run",{unique:!1}),t.createObjectStore("runs",{keyPath:"run"})},new zl(await es(e))}catch{return null}}async list(e){const t=this.db.transaction(["frames","runs"],"readwrite"),n=await es(t.objectStore("frames").index("run").getAllKeys(IDBKeyRange.only(e))),s=await es(t.objectStore("runs").get(e));return s&&(s.at=Date.now(),t.objectStore("runs").put(s)),await hl(t),n.map(r=>Number(String(r).split("|")[1])).filter(r=>Number.isFinite(r)).sort((r,a)=>r-a)}async get(e,t){const n=this.db.transaction("frames","readonly"),s=await es(n.objectStore("frames").get(`${e}|${t}`));if(!s)return null;const[r,a]=s.gz?await Promise.all([Vr(s.state,!0),Vr(s.aux,!0)]):[s.state,s.aux],o=s.conn?s.gz?await Vr(s.conn,!0):s.conn:void 0;return{t:s.t,dt:s.dt,maxDepthSeen:s.maxDepthSeen,state:r,aux:a,conn:o}}async put(e,t){const[n,s]=ch?await Promise.all([Vr(t.state),Vr(t.aux)]):[t.state,t.aux],r=t.conn?ch?await Vr(t.conn):t.conn:void 0,a={key:`${e}|${t.t}`,run:e,t:t.t,dt:t.dt,maxDepthSeen:t.maxDepthSeen,gz:ch,state:n,aux:s,conn:r,bytes:n.byteLength+s.byteLength+(r?.byteLength??0)},o=this.db.transaction(["frames","runs"],"readwrite"),l=await es(o.objectStore("frames").get(a.key));o.objectStore("frames").put(a);const c=await es(o.objectStore("runs").get(e))??{run:e,at:0,bytes:0,frames:0};c.at=Date.now(),c.bytes+=a.bytes-(l?.bytes??0),c.frames+=l?0:1,o.objectStore("runs").put(c),await hl(o),await this.evict(e)}async evict(e){const t=this.db.transaction("runs","readonly"),n=await es(t.objectStore("runs").getAll());let s=n.reduce((r,a)=>r+a.bytes,0);for(const r of n.sort((a,o)=>a.at-o.at)){if(s<=Vw)break;r.run!==e&&(await this.remove(r.run),s-=r.bytes)}}async remove(e){const t=this.db.transaction(["frames","runs"],"readwrite"),n=await es(t.objectStore("frames").index("run").getAllKeys(IDBKeyRange.only(e)));for(const s of n)t.objectStore("frames").delete(s);t.objectStore("runs").delete(e),await hl(t)}async clear(){const e=this.db.transaction(["frames","runs"],"readwrite");e.objectStore("frames").clear(),e.objectStore("runs").clear(),await hl(e)}async stats(){const e=this.db.transaction("runs","readonly"),t=await es(e.objectStore("runs").getAll());return{bytes:t.reduce((n,s)=>n+s.bytes,0),runs:t.length}}}const $f={type:"change"},Vu={type:"start"},Gm={type:"end"},ul=new yo,Xf=new Es,Ww=Math.cos(70*Xt.DEG2RAD),dn=new j,ei=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6;class $w extends Pw{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new cr,this._lastTargetPosition=new j,this._quat=new cr().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wf,this._sphericalDelta=new Wf,this._scale=1,this._panOffset=new j,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new j,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jw.bind(this),this._onPointerDown=Xw.bind(this),this._onPointerUp=qw.bind(this),this._onContextMenu=tb.bind(this),this._onMouseWheel=Zw.bind(this),this._onKeyDown=Jw.bind(this),this._onTouchStart=Qw.bind(this),this._onTouchMove=eb.bind(this),this._onMouseDown=Yw.bind(this),this._onMouseMove=Kw.bind(this),this._interceptControlDown=nb.bind(this),this._interceptControlUp=ib.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($f),this.update(),this.state=Lt.NONE}update(e=null){const t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ei:n>Math.PI&&(n-=ei),s<-Math.PI?s+=ei:s>Math.PI&&(s-=ei),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=dn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<Ww?this.object.lookAt(this.target):(Xf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(Xf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent($f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dn.copy(s).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ei*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ei*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ei*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ei*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Xw(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jw(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qw(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gm),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Yw(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Lt.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Vu)}function Kw(i){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zw(i){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(i.preventDefault(),this.dispatchEvent(Vu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gm))}function Jw(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Qw(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Lt.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Lt.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Vu)}function eb(i){switch(this._trackPointer(i),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Lt.NONE}}function tb(i){this.enabled!==!1&&i.preventDefault()}function nb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ib(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sb(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}class Ai{constructor(e,t){U(this,"camera");U(this,"controls");U(this,"tween",null);U(this,"tour",null);U(this,"touring",!1);U(this,"onTourEnd");this.camera=e,this.controls=new $w(e,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=25,this.controls.maxDistance=6e4,this.controls.screenSpacePanning=!1,this.controls.mouseButtons={LEFT:Pi.PAN,MIDDLE:Pi.DOLLY,RIGHT:Pi.ROTATE},this.controls.touches={ONE:Ps.PAN,TWO:Ps.DOLLY_ROTATE};const n=s=>{this.controls.mouseButtons.LEFT=s.shiftKey||s.ctrlKey?Pi.ROTATE:Pi.PAN};window.addEventListener("keydown",n),window.addEventListener("keyup",n),this.controls.zoomSpeed=1.2,t.addEventListener("pointerdown",()=>{this.touring&&this.stopTour(),this.tween=null}),t.addEventListener("wheel",()=>{this.touring&&this.stopTour(),this.tween=null},{passive:!0})}state(){return{pos:this.camera.position.clone(),target:this.controls.target.clone()}}flyTo(e,t=2.5,n){this.tween={from:this.state(),to:e,t0:performance.now(),dur:t*1e3,onDone:n}}jumpTo(e){this.camera.position.copy(e.pos),this.controls.target.copy(e.target),this.controls.update()}static viewOf(e,t,n=150,s=35){const r=Xt.degToRad(n),a=Xt.degToRad(s);return{pos:new j(e.x+t*Math.cos(a)*Math.sin(r),e.y+t*Math.sin(a),e.z+t*Math.cos(a)*Math.cos(r)),target:e.clone()}}startTour(e){e.length&&(this.touring=!0,this.tour={stops:e,i:0,phase:"fly",t0:performance.now()},this.flyTo(e[0],3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())}))}stopTour(){this.touring=!1,this.tour=null,this.controls.autoRotate=!1,this.onTourEnd?.()}update(e){const t=performance.now();if(this.tween){const n=Math.min(1,(t-this.tween.t0)/this.tween.dur),s=sb(n);if(this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,s),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,s),n>=1){const r=this.tween.onDone;this.tween=null,r?.()}}if(this.tour&&this.touring&&this.tour.phase==="orbit"){const n=(t-this.tour.t0)/1e3,s=new j().subVectors(this.camera.position,this.controls.target);if(s.applyAxisAngle(new j(0,1,0),e*.12),this.camera.position.copy(this.controls.target).add(s),n>7){this.tour.i=(this.tour.i+1)%this.tour.stops.length,this.tour.phase="fly",this.tour.t0=t;const r=this.tour.stops[this.tour.i];this.flyTo(r,3.5,()=>{this.tour&&(this.tour.phase="orbit",this.tour.t0=performance.now())})}}this.controls.update()}}const rb=`
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
`,ab=`
precision highp float;
in vec3 position; out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,ob=`
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
  float mpp = w / (projectionMatrix[1][1] * 0.5 * uViewport.y);   // metres per pixel at the particle
  vA *= 1.0 - smoothstep(3.0, 6.0, mpp);
  vA *= smoothstep(0.08, 0.3, p.a);
  vSpd = p.a;
  gl_Position = ch;
  float px = clamp(14.0 / mpp, 7.0, 30.0);
  gl_PointSize = clamp(px + L * 1.2, px, 44.0) * uDpr;
}
`,lb=`
precision highp float;
in float vA; in float vSpd; in vec2 vDir; in float vLen; uniform float uNight;
out vec4 fragColor;
void main() {
  if (vA <= 0.001) discard;
  vec2 q = gl_PointCoord - 0.5; q.y = -q.y;
  float along = dot(q, vDir);                       // head at +0.5, tail at -0.5
  float across = dot(q, vec2(-vDir.y, vDir.x));
  float w = 0.085;
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
`;class jf{constructor(e,t,n,s,r,a,o,l,c=128){U(this,"N");U(this,"renderer");U(this,"rtA");U(this,"rtB");U(this,"scene",new wo);U(this,"camera",new So(-1,1,1,-1,0,1));U(this,"quad");U(this,"updateMat");U(this,"pointMat");U(this,"group",new Bi);U(this,"spawnTex");U(this,"spawnData");U(this,"spawnCap");U(this,"time",0);U(this,"speedScale",30);this.renderer=e,this.N=c;const u=()=>{const x=new jn(c,c,{count:2,type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(const M of x.textures)M.wrapS=Dn,M.wrapT=Dn;return x};this.rtA=u(),this.rtB=u();const d=1024,h=64;this.spawnCap=d*h,this.spawnData=new Float32Array(this.spawnCap*4),this.spawnTex=new cs(this.spawnData,d,h,Ft,tn),this.spawnTex.minFilter=ct,this.spawnTex.magFilter=ct,this.spawnTex.needsUpdate=!0,this.updateMat=new qn({vertexShader:ab,fragmentShader:rb,glslVersion:Pn,depthTest:!1,depthWrite:!1,uniforms:{uPart:{value:null},uTail:{value:null},uState:{value:r},uTerrain:{value:a},uSpawn:{value:this.spawnTex},uSpawnCount:{value:0},uSpawnSize:{value:new je(d,h)},uSize:{value:new je(t,n)},uDx:{value:s},uDt:{value:.016},uTime:{value:0},uSpeedScale:{value:this.speedScale},uLife:{value:7}}}),this.quad=new Mt(new Vi(2,2),this.updateMat),this.quad.frustumCulled=!1,this.scene.add(this.quad);const p=c*c,v=new Float32Array(p);for(let x=0;x<p;x++)v[x]=x;const _=new sn;_.setAttribute("pid",new wn(v,1)),_.setAttribute("position",new wn(new Float32Array(p*3),3));const m=new Gi(new j(-1e6,-1e6,-1e6),new j(1e6,1e6,1e6));_.boundingBox=m,_.boundingSphere=m.getBoundingSphere(new Wi),this.pointMat=new qn({vertexShader:ob,fragmentShader:lb,glslVersion:Pn,transparent:!0,depthWrite:!1,blending:sr,uniforms:{uPart:{value:this.rtA.textures[0]},uTail:{value:this.rtA.textures[1]},uState:{value:r},uTerrain:{value:a},uMod:{value:o},uN:{value:new je(c,c)},uSize:{value:new je(t,n)},uDx:{value:s},uBuildings:l.uBuildings,uBldBlock:l.uBldBlock,uLife:{value:7},uNight:l.uNight,uDpr:{value:e.getPixelRatio()},uViewport:{value:new je(1,1)}}});const f=new uw(_,this.pointMat);f.frustumCulled=!1,f.renderOrder=16,this.group.add(f),this.group.renderOrder=16,this.reset()}setState(e){this.updateMat.uniforms.uState.value=e,this.pointMat.uniforms.uState.value=e}setSpawn(e,t){const n=Math.min(t,this.spawnCap);if(t>this.spawnCap){const s=t/this.spawnCap;for(let r=0;r<this.spawnCap;r++){const a=Math.floor(r*s);this.spawnData[r*4]=e[a*2],this.spawnData[r*4+1]=e[a*2+1]}}else for(let s=0;s<n;s++)this.spawnData[s*4]=e[s*2],this.spawnData[s*4+1]=e[s*2+1];this.spawnTex.needsUpdate=!0,this.updateMat.uniforms.uSpawnCount.value=n}reset(){const e=this.renderer.getRenderTarget(),t=this.renderer.getClearColor(new ot),n=this.renderer.getClearAlpha();for(const s of[this.rtA,this.rtB])this.renderer.setRenderTarget(s),this.renderer.setClearColor(new ot(-1,-1,0),1),this.renderer.clear();this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,n),this.updateMat.uniforms.uSpawnCount.value=0}update(e,t){this.time+=e,this.speedScale=Xt.clamp(t*.05,15,220);const n=this.updateMat.uniforms;n.uPart.value=this.rtA.textures[0],n.uTail.value=this.rtA.textures[1],n.uDt.value=Math.min(e,.05),n.uTime.value=this.time,n.uSpeedScale.value=this.speedScale;const s=this.renderer.getRenderTarget(),r=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=r,this.renderer.setRenderTarget(s),[this.rtA,this.rtB]=[this.rtB,this.rtA];const a=this.pointMat.uniforms;a.uPart.value=this.rtA.textures[0],a.uTail.value=this.rtA.textures[1];const o=this.renderer.getDrawingBufferSize(new je);a.uViewport.value.copy(o),a.uDpr.value=this.renderer.getPixelRatio()}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.spawnTex.dispose(),this.updateMat.dispose(),this.pointMat.dispose(),this.quad.geometry.dispose();for(const e of this.group.children)e.geometry.dispose();this.group.clear()}}const qf=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec2 cell;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
uniform sampler2D uState; uniform sampler2D uTerrain; uniform sampler2D uMod;
uniform ivec2 uSize; uniform float uDx; uniform float uBuildings; uniform float uBldBlock; uniform float uScale; uniform float uHalo;
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
  bool show = s.r > 0.05 && spd > 0.15 && tr.a < 0.75 && tr.g <= 0.0;
  vSpd = spd; vA = show ? 1.0 : 0.0;
  float ang = atan(v.y, v.x);
  float len = uScale * uDx * clamp(0.5 + spd * 0.45, 0.5, 1.4);
  // arrow is modelled along +x in [0,1]; rotate in the ground plane (scene y -> world -z); the halo pass is fatter
  vec2 p = vec2(position.x, position.z * (1.0 + 1.1 * uHalo)) * len + vec2(-0.08 * uHalo * len, 0.0);
  p.x *= 1.0 + 0.16 * uHalo;
  vec2 r = vec2(p.x * cos(ang) - p.y * sin(ang), p.x * sin(ang) + p.y * cos(ang));
  float z = tr.r + uBuildings * min(tr.g, uBldBlock) + m.r + s.r + 0.6 + 0.05 * (1.0 - uHalo);
  vec3 w = vec3((cell.x + 0.5) * uDx + r.x, z, -((cell.y + 0.5) * uDx + r.y));
  if (!show) w = vec3(0.0, -1e5, 0.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(w, 1.0);
}
`,Yf=`
precision highp float;
in float vSpd; in float vA; out vec4 fragColor; uniform float uHalo;
void main() {
  if (vA < 0.5) discard;
  // dark arrows (slow: navy, fast: deep orange) on a white halo: readable on the light map and on any water class
  vec3 col = uHalo > 0.5 ? vec3(1.0) : mix(vec3(0.04, 0.12, 0.30), vec3(0.78, 0.25, 0.02), smoothstep(0.6, 2.0, vSpd));
  fragColor = vec4(col, uHalo > 0.5 ? 0.85 : 1.0);
}
`;class Kf{constructor(e,t,n,s,r,a,o){U(this,"mesh");U(this,"mat");U(this,"haloMat");const l=Math.max(2,Math.round(35/n)),c=new sn,u=.07,d=.22,h=.38,p=new Float32Array([0,0,-u,1-h,0,-u,1-h,0,u,0,0,u,1-h,0,-d,1,0,0,1-h,0,d]);c.setAttribute("position",new wn(p,3)),c.setIndex([0,1,2,0,2,3,4,5,6,0,2,1,0,3,2,4,6,5]);const v=new Rw;v.index=c.index,v.attributes.position=c.attributes.position;const _=[];for(let w=Math.floor(l/2);w<t;w+=l)for(let P=Math.floor(l/2);P<e;P+=l)_.push(P,w);v.setAttribute("cell",new lu(new Float32Array(_),2)),v.instanceCount=_.length/2;const m=new Gi(new j(-1e6,-1e6,-1e6),new j(1e6,1e6,1e6));v.boundingBox=m,v.boundingSphere=m.getBoundingSphere(new Wi);const f={uState:{value:s},uTerrain:{value:r},uMod:{value:a},uSize:{value:new je(e,t)},uDx:{value:n},uBuildings:o.uBuildings,uBldBlock:o.uBldBlock,uScale:{value:l*.55}};this.mat=new qn({vertexShader:qf,fragmentShader:Yf,glslVersion:Pn,transparent:!0,depthWrite:!1,side:ti,uniforms:{...f,uHalo:{value:0}}}),this.haloMat=new qn({vertexShader:qf,fragmentShader:Yf,glslVersion:Pn,transparent:!0,depthWrite:!1,side:ti,uniforms:{...f,uHalo:{value:1}}});const x=new Mt(v,this.haloMat);x.frustumCulled=!1,x.renderOrder=14;const M=new Mt(v,this.mat);M.frustumCulled=!1,M.renderOrder=15,this.mesh=new Bi,this.mesh.add(x),this.mesh.add(M)}setState(e){this.mat.uniforms.uState.value=e,this.haloMat.uniforms.uState.value=e}dispose(){this.mesh.children[0].geometry.dispose(),this.mat.dispose(),this.haloMat.dispose()}}const cb=`
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
`,hb=`
precision highp float;
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;class Zf{constructor(e,t,n,s,r,a,o,l,c=null){U(this,"renderer");U(this,"rtA");U(this,"rtB");U(this,"scene",new wo);U(this,"camera",new So(-1,1,1,-1,0,1));U(this,"quad");U(this,"mat");U(this,"stateTex");this.renderer=e,this.stateTex=s;const u=()=>{const d=new jn(t,n,{type:tn,format:Ft,minFilter:ct,magFilter:ct,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});return d.texture.wrapS=Dn,d.texture.wrapT=Dn,d};this.rtA=u(),this.rtB=u(),this.mat=new qn({vertexShader:hb,fragmentShader:cb,glslVersion:Pn,depthTest:!1,depthWrite:!1,uniforms:{uPrev:{value:null},uState:{value:s},uAux:{value:r},uTerrain:{value:a},uMod:{value:o},uFaceMod:{value:l},uSgC0:{value:c?c.c0:o},uSgC1:{value:c?c.c1:o},uHasSg:{value:c?1:0},uAdvance:{value:0},uSubgrid:{value:0},uReset:{value:1},uTau:{value:900},uSize:{value:new je(t,n)}}}),this.quad=new Mt(new Vi(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.rtA.texture}setState(e,t){this.stateTex=e,this.mat.uniforms.uState.value=e,this.mat.uniforms.uAux.value=t}update(e,t,n=!1){if(e<=0&&!n)return;const s=this.mat.uniforms;s.uPrev.value=this.rtA.texture,s.uAdvance.value=e,s.uSubgrid.value=t?1:0,s.uReset.value=n?1:0;const r=this.renderer.getRenderTarget(),a=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=a,this.renderer.setRenderTarget(r),[this.rtA,this.rtB]=[this.rtB,this.rtA]}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}}const dl=4096,Jf=8,Qf=64;class ub{constructor(e,t,n){U(this,"atlas");U(this,"index");U(this,"info");U(this,"slots",new Array(Qf).fill(null));U(this,"where",new Map);U(this,"pending",new Set);U(this,"tick",0);U(this,"lastKey","");U(this,"indexData");this.renderer=e,this.baseUrl=t,this.info=n,this.atlas=new cs(new Uint8Array(dl*dl*4),dl,dl,Ft,ui),this.atlas.minFilter=ct,this.atlas.magFilter=ct,this.atlas.generateMipmaps=!1,this.atlas.flipY=!1,this.atlas.needsUpdate=!0,this.indexData=new Uint8Array(n.nx*n.ny*4).fill(255),this.index=new cs(this.indexData,n.nx,n.ny,Ft,ui),this.index.minFilter=ct,this.index.magFilter=ct,this.index.generateMipmaps=!1,this.index.flipY=!1,this.index.needsUpdate=!0}update(e,t,n){this.tick++;const{tile:s,res:r,nx:a,ny:o,rows:l}=this.info,c=s*r,u=e/r,d=l-t/r,h=Math.floor(u/s),p=Math.floor(d/s),v=Math.max(1,Math.ceil(n/c)),_=`${h},${p},${v}`;if(_===this.lastKey)return;this.lastKey=_;const m=[];for(let f=p-v;f<=p+v;f++)for(let x=h-v;x<=h+v;x++){if(x<0||f<0||x>=a||f>=o)continue;const M=Math.hypot((x+.5)*c-e,l*r-(f+.5)*c-t);M>n+c||m.push({k:`${x}_${f}`,tx:x,ty:f,d:M})}m.sort((f,x)=>f.d-x.d);for(const f of m.slice(0,Qf)){const x=this.where.get(f.k);if(x){x.used=this.tick;continue}this.pending.has(f.k)||(this.pending.add(f.k),this.load(f.k,f.tx,f.ty))}}async load(e,t,n){try{const s=await fetch(`${this.baseUrl}/fine/${e}.png`);if(!s.ok)throw new Error(String(s.status));const r=await createImageBitmap(await s.blob(),{imageOrientation:"none",premultiplyAlpha:"none"}),a=this.freeSlot();if(a<0){r.close();return}this.put(a,e,t,n,r),r.close()}catch{}finally{this.pending.delete(e)}}freeSlot(){let e=this.slots.indexOf(null);if(e>=0)return e;let t=-1,n=1/0;for(const[o,l]of this.where)if(l.used<n&&(n=l.used,t=l.slot,n===0))break;if(t<0)return-1;const s=this.slots[t];this.where.delete(s),this.slots[t]=null;const[r,a]=s.split("_").map(Number);return this.setIndex(r,a,255),t}put(e,t,n,s,r){const a=this.renderer.getContext();this.renderer.properties.get(this.atlas).__webglTexture||this.renderer.initTexture(this.atlas);const l=this.renderer.properties.get(this.atlas).__webglTexture;if(!l)return;const c=e%Jf*this.info.tile,u=Math.floor(e/Jf)*this.info.tile;this.renderer.state.bindTexture(a.TEXTURE_2D,l),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texSubImage2D(a.TEXTURE_2D,0,c,u,a.RGBA,a.UNSIGNED_BYTE,r),this.slots[e]=t,this.where.set(t,{slot:e,used:this.tick}),this.setIndex(n,s,e)}setIndex(e,t,n){const s=(t*this.info.nx+e)*4;this.indexData[s]=n,this.indexData[s+1]=0,this.indexData[s+2]=0,this.indexData[s+3]=255,this.index.needsUpdate=!0}get loaded(){return this.where.size}dispose(){this.atlas.dispose(),this.index.dispose(),this.where.clear(),this.slots.fill(null)}}const fl=4096,ep=8,tp=64;class db{constructor(e,t,n){U(this,"atlas");U(this,"index");U(this,"info");U(this,"have");U(this,"slots",new Array(tp).fill(null));U(this,"where",new Map);U(this,"pending",new Set);U(this,"tick",0);U(this,"lastKey","");U(this,"indexData");this.renderer=e,this.baseUrl=t,this.info=n,this.have=new Set(n.tiles.map(([s,r])=>`${s}_${r}`)),this.atlas=new cs(new Uint8Array(fl*fl*4),fl,fl,Ft,ui),this.atlas.colorSpace=ci,this.atlas.minFilter=On,this.atlas.magFilter=On,this.atlas.generateMipmaps=!1,this.atlas.flipY=!1,this.atlas.needsUpdate=!0,this.indexData=new Uint8Array(n.nx*n.ny*4).fill(255),this.index=new cs(this.indexData,n.nx,n.ny,Ft,ui),this.index.minFilter=ct,this.index.magFilter=ct,this.index.generateMipmaps=!1,this.index.flipY=!1,this.index.needsUpdate=!0}update(e,t,n){this.tick++;const{tile:s,res:r,nx:a,ny:o,rows:l}=this.info,c=s*r,u=e/r,d=l-t/r,h=Math.floor(u/s),p=Math.floor(d/s),v=Math.max(1,Math.ceil(n/c)),_=`${h},${p},${v}`;if(_===this.lastKey)return;this.lastKey=_;const m=[];for(let f=p-v;f<=p+v;f++)for(let x=h-v;x<=h+v;x++){if(x<0||f<0||x>=a||f>=o)continue;const M=`${x}_${f}`;if(!this.have.has(M))continue;const w=Math.hypot((x+.5)*c-e,l*r-(f+.5)*c-t);w>n+c||m.push({k:M,tx:x,ty:f,d:w})}m.sort((f,x)=>f.d-x.d);for(const f of m.slice(0,tp)){const x=this.where.get(f.k);if(x){x.used=this.tick;continue}this.pending.has(f.k)||(this.pending.add(f.k),this.load(f.k,f.tx,f.ty))}}async load(e,t,n){try{const s=await fetch(`${this.baseUrl}/hires/${e}.jpg`);if(!s.ok)throw new Error(String(s.status));const r=await createImageBitmap(await s.blob(),{imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"}),a=this.freeSlot();if(a<0){r.close();return}this.put(a,e,t,n,r),r.close()}catch{}finally{this.pending.delete(e)}}freeSlot(){const e=this.slots.indexOf(null);if(e>=0)return e;let t=-1,n=1/0;for(const o of this.where.values())o.used<n&&(n=o.used,t=o.slot);if(t<0)return-1;const s=this.slots[t];this.where.delete(s),this.slots[t]=null;const[r,a]=s.split("_").map(Number);return this.setIndex(r,a,255),t}put(e,t,n,s,r){const a=this.renderer.getContext();this.renderer.properties.get(this.atlas).__webglTexture||this.renderer.initTexture(this.atlas);const o=this.renderer.properties.get(this.atlas).__webglTexture;if(!o)return;const l=e%ep*this.info.tile,c=Math.floor(e/ep)*this.info.tile;this.renderer.state.bindTexture(a.TEXTURE_2D,o),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE),a.texSubImage2D(a.TEXTURE_2D,0,l,c,a.RGBA,a.UNSIGNED_BYTE,r),this.slots[e]=t,this.where.set(t,{slot:e,used:this.tick}),this.setIndex(n,s,e)}setIndex(e,t,n){const s=(t*this.info.nx+e)*4;this.indexData[s]=n,this.indexData[s+1]=0,this.indexData[s+2]=0,this.indexData[s+3]=255,this.index.needsUpdate=!0}get loaded(){return this.where.size}dispose(){this.atlas.dispose(),this.index.dispose(),this.where.clear(),this.slots.fill(null)}}const fb=`
precision highp float; precision highp int; precision highp sampler2D;
uniform sampler2D uState; uniform sampler2D uAux; uniform sampler2D uTerrain; uniform float uSubgrid; uniform ivec2 uSize;
out vec4 o;
void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  vec4 t = texelFetch(uTerrain, ij, 0);
  if (t.a > 0.75) { o = vec4(0.0, 0.0, 1.0, 0.0); return; }
  if (t.g > 0.0) { o = vec4(0.0); return; }
  float sn = 0.0, sm = 0.0, sw = 0.0;
  for (int dj = -1; dj <= 1; dj++) for (int di = -1; di <= 1; di++) {
    ivec2 c = clamp(ij + ivec2(di, dj), ivec2(0), uSize - ivec2(1));
    vec4 tc = texelFetch(uTerrain, c, 0);
    float w = (di == 0 ? 2.0 : 1.0) * (dj == 0 ? 2.0 : 1.0);
    if (tc.a > 0.75 || tc.g > 0.0) { if (tc.a > 0.75) sw += w * 0.0; continue; }
    vec4 s = texelFetch(uState, c, 0);
    float dn = (uSubgrid > 0.5 && tc.a < 0.75) ? texelFetch(uAux, c, 0).a : s.r;
    sn += w * max(dn, 0.0); sm += w * max(s.a, 0.0); sw += w;
  }
  // normalised by the full kernel weight (16) over dry land too, by the open weight only next to buildings / sea
  float norm = max(sw, 1.0);
  o = vec4(sn / norm, sm / norm, 0.0, 1.0);
}
`,pb=`
precision highp float;
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;class mb{constructor(e,t,n,s,r,a){U(this,"rt");U(this,"scene",new wo);U(this,"camera",new So(-1,1,1,-1,0,1));U(this,"quad");U(this,"mat");this.renderer=e,this.rt=new jn(t,n,{type:va,format:Ft,minFilter:On,magFilter:On,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this.rt.texture.wrapS=Dn,this.rt.texture.wrapT=Dn,this.mat=new qn({vertexShader:pb,fragmentShader:fb,glslVersion:Pn,depthTest:!1,depthWrite:!1,uniforms:{uState:{value:s},uAux:{value:r},uTerrain:{value:a},uSubgrid:{value:0},uSize:{value:new je(t,n)}}}),this.quad=new Mt(new Vi(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.rt.texture}setState(e,t){this.mat.uniforms.uState.value=e,this.mat.uniforms.uAux.value=t}update(e){this.mat.uniforms.uSubgrid.value=e?1:0;const t=this.renderer.getRenderTarget(),n=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.setRenderTarget(this.rt),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=n,this.renderer.setRenderTarget(t)}dispose(){this.rt.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}}const Gu=`
// depth -> colour by impact class: 0.1 m ankle, 0.3 m knee (cars stall), 0.5 m waist, 1.0 m chest (life-threatening), 2.0 m ground floor lost
// stepped classes (one flat colour per class, so the classes read apart on any ground); OKLCH lightness 0.93 -> 0.29 in
// equal steps with a cyan -> blue -> violet -> wine hue walk; adjacent classes >= 15 dE (normal) and >= 12 (deutan)
vec3 depthColor(float d) {
  if (d < 0.1) return vec3(0.729, 0.957, 0.996);   // #baf4fe shallow
  if (d < 0.3) return vec3(0.349, 0.788, 0.969);   // #59c9f7 ankle
  if (d < 0.5) return vec3(0.149, 0.580, 0.922);   // #2694eb knee
  if (d < 1.0) return vec3(0.247, 0.337, 0.820);   // #3f56d1 waist
  if (d < 2.0) return vec3(0.369, 0.063, 0.576);   // #5e1093 chest
  return vec3(0.341, 0.0, 0.208);                    // #570035 ground floor
}
float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i), b = hash21(i + vec2(1, 0)), c = hash21(i + vec2(0, 1)), d = hash21(i + vec2(1, 1));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
`,Wm=`
uniform float uHiOn; uniform sampler2D uHiAtlas; uniform sampler2D uHiIndex; uniform vec4 uHiInfo; uniform float uHiRows;
vec3 hiRes(vec2 xy, vec3 base, float mpp) {
  if (uHiOn < 0.5) return base;
  float k = 1.0 - smoothstep(0.9, 1.6, mpp); if (k <= 0.0) return base;
  vec2 f = vec2(xy.x / uHiInfo.w, uHiRows - xy.y / uHiInfo.w);
  ivec2 t = ivec2(floor(f / uHiInfo.x));
  if (t.x < 0 || t.y < 0 || t.x >= int(uHiInfo.y) || t.y >= int(uHiInfo.z)) return base;
  float slot = texelFetch(uHiIndex, t, 0).r * 255.0; if (slot > 254.5) return base;
  vec2 inTile = clamp(f - vec2(t) * uHiInfo.x, 0.5, uHiInfo.x - 0.5);
  vec2 ap = (vec2(mod(slot, 8.0), floor(slot / 8.0)) * uHiInfo.x + inTile) / 4096.0;
  return mix(base, texture(uHiAtlas, ap).rgb, k);
}
`,Wu=`
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uCam);
  float f = 1.0 - exp(-uFogDensity * dist);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,$m=`
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
`,gb=`
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
`,vb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec2 vUv; in vec3 vWorld; in vec3 vNormal; in float vSea;
uniform sampler2D uMap; uniform sampler2D uState; uniform sampler2D uTerrain; uniform float uHasMap;
uniform ivec2 uSize; uniform float uDx; uniform float uShadow;
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uShowMax; uniform float uHiUse;
uniform sampler2D uFlood; uniform float uFloodOn; uniform float uWaterMode; uniform float uMute;
out vec4 fragColor;
${Gu}
${Wu}
${$m}
${Wm}
void main() {
  // satellite imagery of Hong Kong is dark: lift it, and mute its colour a little so the flood layer reads first
  vec3 img = uHasMap > 0.5 ? texture(uMap, vUv).rgb : vec3(0.36, 0.42, 0.33);
  if (uHasMap > 0.5 && uHiUse > 0.5) img = hiRes(vec2(vWorld.x, -vWorld.z), img, length(fwidth(vWorld.xz)));
  vec3 base = uHasMap > 0.5 ? pow(img, vec3(0.82)) * 1.16 : img;
  float lum = dot(base, vec3(0.299, 0.587, 0.114));
  base = mix(vec3(lum), base, 0.72);
  // 2D analysis basemap: mostly grey and lighter, so that the flood classes carry the colour
  if (uMute > 0.5) base = mix(base, vec3(lum) * 0.62 + 0.36, 0.72);
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
  if (vSea > 0.75) col = uMute > 0.5 ? mix(col, vec3(0.74, 0.80, 0.86), 0.85) : mix(col, vec3(0.04, 0.10, 0.18), 0.8);
  vec4 st = texture(uState, vUv);
  // wet trace: ground that has been flooded in this event and has dried again (receding water leaves it dark)
  if (uFloodOn < 0.5 && vSea < 0.25 && st.a > 0.05 && st.r < 0.03) col = mix(col, col * vec3(0.62, 0.6, 0.56), smoothstep(0.05, 0.3, st.a) * 0.85);
  if (uShowMax > 0.5 && vSea < 0.25) { float hm = st.a; if (hm > 0.05) col = mix(col, depthColor(hm), 0.7); }
  // the flood map: per-pixel class bands from the smoothed, bilinearly filtered depth (render/FloodField.ts), crisp
  // anti-aliased edges and a thin darker line on every class boundary (iso-bands, not 10 m blocks)
  if (uFloodOn > 0.5 && vSea < 0.75) {
    vec4 F = texture(uFlood, vUv);
    float d = uWaterMode > 0.5 ? F.g : F.r;
    float vis = uWaterMode > 0.5 ? 0.10 : 0.05;
    float w = max(fwidth(d), 1e-4);
    float a = smoothstep(vis - 0.6 * w, vis + 0.6 * w, d);
    if (a > 0.001) {
      vec3 fc = depthColor(d);
      float line = 0.0; float th[6] = float[6](0.05, 0.1, 0.3, 0.5, 1.0, 2.0);
      for (int i = 0; i < 6; i++) if (th[i] >= vis) line = max(line, 1.0 - smoothstep(0.4 * w, 1.4 * w, abs(d - th[i])));
      fc *= 1.0 - 0.28 * line;
      col = mix(col, fc, a * (uMute > 0.5 ? 0.9 : 0.86));
    }
  }
  col = applyFog(col, vWorld);
  fragColor = vec4(col, 1.0);
}
`,_b=`
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
  // max-depth map: the maxima happen at different times, so z + hmax is no water surface - drape the colour on the ground
  if (uWaterMode > 0.5 && t.a < 0.25) y = z + 0.15;
  if (t.a > 0.5) y = eta; // sea: always at the forced level
  vDepth = t.a > 0.5 ? max(h, 3.0) : h;
  vVel = a.g;
  vUv = (cell + 0.5) / vec2(uSize);
  vec3 p = vec3((cell.x + 0.5) * uDx, y, -(cell.y + 0.5) * uDx);
  vWorld = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,xb=`
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
${Gu}
${Wu}
${$m}
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
        vec2 inTile = clamp(f - vec2(t) * uFineInfo.x - 0.5, 0.0, uFineInfo.x - 2.0);
        ivec2 ap = ivec2(vec2(mod(slot, 8.0), floor(slot / 8.0)) * uFineInfo.x + inTile);
        vec4 px = texelFetch(uFineAtlas, ap, 0);
        vec4 p1 = texelFetch(uFineAtlas, ap + ivec2(1, 0), 0), p2 = texelFetch(uFineAtlas, ap + ivec2(0, 1), 0), p3 = texelFetch(uFineAtlas, ap + ivec2(1, 1), 0);
        float z1 = ((px.r + p1.r + p2.r + p3.r) * 65280.0 + (px.g + p1.g + p2.g + p3.g) * 255.0) * 0.0025 + uFineZOff;
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
  float alpha = smoothstep(vis0, vis1, depthV) * (uWaterMode > 0.5 ? 0.9 : mix(0.78, 0.93, smoothstep(0.03, 0.4, depthV)));
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
    col = mix(col, vec3(0.95, 0.98, 1.0), lines * 0.3);
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
`,Mb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 position; in vec3 normal; in vec3 color; in vec2 bUv; in float lit; in vec3 edge;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vN; out vec3 vWorld; out vec3 vColor; out vec2 vUv; out float vLit; out vec3 vEdge;
void main() {
  vN = normal; vWorld = position; vColor = color; vUv = bUv; vLit = lit; vEdge = edge;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,yb=`
precision highp float; precision highp int; precision highp sampler2D;
in vec3 vN; in vec3 vWorld; in vec3 vColor; in vec2 vUv; in float vLit; in vec3 vEdge;
uniform sampler2D uTerrain; uniform sampler2D uState; uniform sampler2D uMod; uniform ivec2 uSize;
uniform sampler2D uMap; uniform float uHasMap; uniform float uHiUse;
uniform float uTime; uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uFogColor; uniform float uFogDensity;
uniform float uStorm; uniform float uFlash; uniform float uNight; uniform float uBuildings; uniform vec3 uSkyColor; uniform float uWaterMode; uniform float uFx;
out vec4 fragColor;
${Gu}
${Wu}
${Wm}
void main() {
  vec3 n = normalize(vN);
  bool roof = n.y > 0.5;
  float diff = max(dot(n, uSun), 0.0);
  // hemisphere ambient + sun: sun-facing facades bright, the others in a cool shade; never black
  float light = mix(0.62, 0.78, n.y * 0.5 + 0.5) + 0.55 * diff;
  light *= mix(1.0, 0.95, uStorm);
  light *= mix(1.0, 0.72, uNight);
  float ground = texture(uTerrain, clamp(vUv, 0.0, 1.0)).r;
  float hAbove = vWorld.y - ground;
  vec3 base = vColor;
  float mpp = length(fwidth(vWorld));   // metres per screen pixel here
  if (roof) {
    // roof: the orthophoto where it is (roof plant, colours), muted towards the building tone so blocks still read
    if (uHasMap > 0.5) {
      vec3 img = texture(uMap, vUv).rgb; if (uHiUse > 0.5) img = hiRes(vec2(vWorld.x, -vWorld.z), img, mpp);
      img = pow(img, vec3(0.82)) * 1.16;
      base = mix(base * vec3(0.86, 0.87, 0.9), img, 0.7);
    } else base *= vec3(0.86, 0.87, 0.9);
    light = 0.96 + 0.08 * diff;
  } else {
    // facade: floor bands (3.1 m) with a glazing strip, anti-aliased and faded out before one band is under ~2 px wide
    float fy = vWorld.y / 3.1; float w = fwidth(fy);
    float band = smoothstep(0.38 - w, 0.38 + w, fract(fy)) * (1.0 - smoothstep(0.86 - w, 0.86 + w, fract(fy)));
    float vis = 1.0 - smoothstep(0.12, 0.3, w);
    vec3 glassCol = mix(vec3(0.42, 0.5, 0.6), uSkyColor, 0.35);
    base = mix(base, glassCol, band * vis * 0.32);
    base *= mix(0.62, 1.0, smoothstep(0.0, 14.0, hAbove));       // contact shade towards the street
    base *= 0.94 + 0.06 * smoothstep(0.0, 120.0, hAbove);           // a touch lighter towards the top
  }
  // crisp outlines: vertical wall edges and the roof line (edge = along-wall distance, wall length, wall top)
  if (!roof && vEdge.y > 0.0) {
    float du = min(vEdge.x, vEdge.y - vEdge.x), dt = vEdge.z - vWorld.y;
    float wu = fwidth(vEdge.x), wt = fwidth(vWorld.y);
    float ln = max(1.0 - smoothstep(0.5 * wu, 1.6 * wu, du), 1.0 - smoothstep(0.5 * wt, 1.6 * wt, dt));
    base *= 1.0 - 0.28 * ln;
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
`,Sb=`
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
`,wb=`
precision highp float;
in float vA; uniform float uNight;
out vec4 fragColor;
void main() { fragColor = vec4(0.72, 0.8, 0.92, vA * mix(1.0, 0.6, uNight)); }
`,bb=`
precision highp float;
in vec3 position;
uniform mat4 projectionMatrix; uniform mat4 modelViewMatrix;
out vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Tb=`
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
`,Eb=[12252414,5884407,2528491,4150993,6164627,5701685],np=[0,.1,.3,.5,1,2];class Ab{constructor(e,t){U(this,"renderer");U(this,"scene",new wo);U(this,"camera");U(this,"director");U(this,"assets",null);U(this,"W",0);U(this,"H",0);U(this,"dx",10);U(this,"grid",null);U(this,"terrain",null);U(this,"water",null);U(this,"buildings",null);U(this,"rain");U(this,"sky");U(this,"root",new Bi);U(this,"exag",1);U(this,"waterMode","now");U(this,"measureGroup",new Bi);U(this,"ugGroup",new Bi);U(this,"ugItems",new Map);U(this,"ugLast",[]);U(this,"draftLine",null);U(this,"markerGroup",new Bi);U(this,"pinGeo",{pin:new no(.45,.45,1,6),head:new ea(2.6,12,10),ring:new Qr(3,4.2,24),small:new ea(1.6,10,8)});U(this,"pinWhite",new ss({color:16777215}));U(this,"labelsDiv");U(this,"labelEls",new Map);U(this,"imageryTex",null);U(this,"basemapTex",null);U(this,"flowA",null);U(this,"flowB",null);U(this,"arrowsA",null);U(this,"arrowsB",null);U(this,"trendA",null);U(this,"trendB",null);U(this,"sgRef",null);U(this,"fine",null);U(this,"fineOn",!0);U(this,"hires",null);U(this,"flood",null);U(this,"hiUse",{value:1});U(this,"pendingAdvance",0);U(this,"trendReset",!0);U(this,"terrainTexRef",null);U(this,"modTexRef",null);U(this,"faceModTexRef",null);U(this,"flowMode","none");U(this,"split",null);U(this,"time",0);U(this,"flashT",0);U(this,"fx",!1);U(this,"view2d",!1);U(this,"shadowUser",!0);U(this,"nearSet",2);U(this,"U",{uTime:{value:0},uSun:{value:new j(.4,.75,.35).normalize()},uCam:{value:new j},uFogColor:{value:new ot(10466504)},uFogDensity:{value:12e-5},uStorm:{value:0},uFlash:{value:0},uNight:{value:0},uRainI:{value:0},uSubgrid:{value:0},uSkyColor:{value:new ot(9418464)},uShowMax:{value:0},uBuildings:{value:1},uBldBlock:{value:1},uWaterMode:{value:0},uExag:{value:1},uShadow:{value:1},uViewH:{value:900},uFx:{value:0},uHiOn:{value:0},uHiInfo:{value:new Yt(512,1,1,.5)},uHiRows:{value:1},uFloodOn:{value:0},uMute:{value:0},uFineOn:{value:0},uFineInfo:{value:new Yt(512,1,1,1)},uFineRows:{value:1},uFineZOff:{value:-50},uFineLift:{value:.05}});U(this,"tmpV2",new je);U(this,"terrainMat",null);U(this,"waterMat",null);U(this,"buildingMat",null);U(this,"rainMat");U(this,"skyMat");U(this,"texMode","imagery");U(this,"labelInset",{l:0,r:0,t:0,b:0});this.labelsDiv=t,this.renderer=new ow({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=ci,this.renderer.autoClear=!0,this.camera=new xi(50,1,2,12e4),this.director=new Ai(this.camera,e),this.root.add(this.measureGroup),this.root.add(this.markerGroup),this.root.add(this.ugGroup),this.scene.add(this.root),this.skyMat=new qn({vertexShader:bb,fragmentShader:Tb,glslVersion:Pn,side:Kn,depthWrite:!1,uniforms:{uSun:this.U.uSun,uStorm:this.U.uStorm,uFlash:this.U.uFlash,uNight:this.U.uNight,uTime:this.U.uTime}}),this.sky=new Mt(new ea(8e4,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=36e3,s=new Float32Array(n*2*4),r=new Float32Array(n*2);for(let o=0;o<n;o++){const l=(Math.random()-.5)*900,c=Math.random()*320,u=(Math.random()-.5)*900,d=Math.random();for(let h=0;h<2;h++){const p=(o*2+h)*4;s[p]=l,s[p+1]=c,s[p+2]=u,s[p+3]=d,r[o*2+h]=h}}const a=new sn;a.setAttribute("a",new wn(s,4)),a.setAttribute("end",new wn(r,1)),this.rainMat=new qn({vertexShader:Sb,fragmentShader:wb,glslVersion:Pn,transparent:!0,depthWrite:!1,blending:yh,uniforms:{uTime:this.U.uTime,uCenter:{value:new j},uIntensity:this.U.uRainI,uWind:{value:.35},uNight:this.U.uNight}}),this.rain=new tl(a,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=20,this.scene.add(this.rain),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}loadScene(e,t,n,s,r,a,o=null){this.clearScene(),this.assets=e,this.W=e.meta.cols,this.H=e.meta.rows,this.dx=e.meta.res;const l=this.W,c=this.H,u=new Float32Array(l*c*2);for(let x=0;x<c;x++)for(let M=0;M<l;M++){const w=(x*l+M)*2;u[w]=M,u[w+1]=x}const d=new Uint32Array((l-1)*(c-1)*6);let h=0;for(let x=0;x<c-1;x++)for(let M=0;M<l-1;M++){const w=x*l+M,P=w+1,A=w+l,R=A+1;d[h++]=w,d[h++]=P,d[h++]=A,d[h++]=P,d[h++]=R,d[h++]=A}this.grid=new sn,this.grid.setAttribute("cell",new wn(u,2)),this.grid.setIndex(new wn(d,1));const p=new Gi(new j(0,-50,-c*this.dx),new j(l*this.dx,1200,0));this.grid.boundingBox=p,this.grid.boundingSphere=p.getBoundingSphere(new Wi),this.imageryTex=e.imagery?this.imgTex(e.imagery):null,this.basemapTex=e.basemap?this.imgTex(e.basemap):null;const v=this.texMode==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex,_={value:new je(l,c)};e.hires&&(this.hires=new db(this.renderer,e.dir,e.hires),this.U.uHiInfo.value.set(e.hires.tile,e.hires.nx,e.hires.ny,e.hires.res),this.U.uHiRows.value=e.hires.rows),this.U.uHiOn.value=this.hires?1:0;const m=()=>({uHiAtlas:{value:this.hires?this.hires.atlas:t},uHiIndex:{value:this.hires?this.hires.index:t},uHiUse:this.hiUse});if(this.flood=new mb(this.renderer,l,c,s,r,t),this.terrainMat=new qn({vertexShader:gb,fragmentShader:vb,glslVersion:Pn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:s},uSize:_,uDx:{value:this.dx},uMap:{value:v},uHasMap:{value:v?1:0},...m(),uFlood:{value:this.flood.texture}}}),this.terrain=new Mt(this.grid,this.terrainMat),this.terrain.frustumCulled=!1,this.terrain.renderOrder=0,this.root.add(this.terrain),this.faceModTexRef=a,this.sgRef=o,this.trendA=new Zf(this.renderer,l,c,s,r,t,n,a,o),this.trendReset=!0,e.fine){this.fine=new ub(this.renderer,e.dir,e.fine);const x=e.fine;this.U.uFineInfo.value.set(x.tile,x.nx,x.ny,x.res),this.U.uFineRows.value=x.rows,this.U.uFineZOff.value=x.z_off,this.U.uFineLift.value=x.lift_step}this.U.uFineOn.value=this.fine&&this.fineOn?1:0,this.waterMat=new qn({vertexShader:_b,fragmentShader:xb,glslVersion:Pn,transparent:!0,depthWrite:!1,side:ti,uniforms:{...this.U,uTerrain:{value:t},uMod:{value:n},uState:{value:s},uAux:{value:r},uTrend:{value:this.trendA.texture},uSize:_,uDx:{value:this.dx},uFineAtlas:{value:this.fine?this.fine.atlas:t},uFineIndex:{value:this.fine?this.fine.index:t}}}),this.water=new Mt(this.grid,this.waterMat),this.water.frustumCulled=!1,this.water.renderOrder=10,this.root.add(this.water),this.buildBuildings(e,t,s,n,_),this.terrainTexRef=t,this.modTexRef=n,this.flowA=new jf(this.renderer,l,c,this.dx,s,t,n,this.U),this.arrowsA=new Kf(l,c,this.dx,s,t,n,this.U),this.root.add(this.flowA.group),this.root.add(this.arrowsA.mesh),this.applyFlowMode();const f=this.defaultView();this.view2d?(this.director.jumpTo(this.topOf(f.target,f.pos.distanceTo(f.target)*1.25)),this.director.flyTo(f,1.6)):(this.director.jumpTo(Ai.viewOf(f.target,f.pos.distanceTo(f.target)*2.4,35,62)),this.director.flyTo(f,4))}imgTex(e){const t=new zn(e);return t.colorSpace=ci,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.minFilter=Ds,t.magFilter=On,t.generateMipmaps=!0,t.needsUpdate=!0,t}buildBuildings(e,t,n,s,r){const a=e.buildings;if(!a.length)return;const o=e.dem,l=this.W,c=this.H,u=this.dx,d=this.H*u,h=(R,F)=>{const Y=Math.min(l-1,Math.max(0,Math.floor(R/u))),y=Math.min(c-1,Math.max(0,Math.floor(F/u)));return o[y*l+Y]},p=[],v=[],_=[],m=[],f=[],x=[],M=[],w=new ot;for(const R of a){const F=R.r;if(F.length<3)continue;let Y=1/0,y=-1/0;for(const[le,ee]of F){const ae=h(le,ee);ae<Y&&(Y=ae),ae>y&&(y=ae)}if(!isFinite(Y)||Y<-1)continue;const b=Y-.5,N=Y+Math.min(Math.max(R.h,3),420)+Math.min(y-Y,8),k=R.h>70,X=k?.58+(Math.random()-.5)*.04:.08+(Math.random()-.5)*.04,Z=.05+Math.random()*.03,J=(k?.8:.84)+(Math.random()-.5)*.04;w.setHSL(X,Z,J);const z=Math.random();let ne=0;for(let le=0;le<F.length;le++){const ee=F[le],ae=F[(le+1)%F.length];ne+=ee[0]*ae[1]-ae[0]*ee[1]}const fe=ne<0?[...F].reverse():F;for(let le=0;le<fe.length;le++){const ee=fe[le],ae=fe[(le+1)%fe.length],xe=ae[0]-ee[0],me=ae[1]-ee[1],Be=Math.hypot(xe,me);if(Be<.2)continue;const Oe=me/Be,Ve=-xe/Be,et=p.length/3,it=[[ee[0],b,ee[1]],[ae[0],b,ae[1]],[ae[0],N,ae[1]],[ee[0],N,ee[1]]],B=[0,Be,Be,0];it.forEach(([zt,at,lt],Ye)=>{p.push(zt,at,-lt),v.push(Oe,0,-Ve),_.push(w.r*.92,w.g*.92,w.b*.92),m.push((zt+.5)/(l*u),(lt+.5)/d),f.push(z),x.push(B[Ye],Be,N)}),M.push(et,et+1,et+2,et,et+2,et+3)}const ce=fe.map(([le,ee])=>new je(le,ee));let pe=[];try{pe=Hu.triangulateShape(ce,[])}catch{pe=[]}const Se=p.length/3;for(const[le,ee]of fe)p.push(le,N,-ee),v.push(0,1,0),_.push(w.r,w.g,w.b),m.push((le+.5)/(l*u),(ee+.5)/d),f.push(0),x.push(0,0,N);for(const le of pe)M.push(Se+le[0],Se+le[1],Se+le[2])}const P=new sn;P.setAttribute("position",new Ot(p,3)),P.setAttribute("normal",new Ot(v,3)),P.setAttribute("color",new Ot(_,3)),P.setAttribute("bUv",new Ot(m,2)),P.setAttribute("lit",new Ot(f,1)),P.setAttribute("edge",new Ot(x,3)),P.setIndex(M);const A=this.terrainMat?.uniforms.uMap.value??null;this.buildingMat=new qn({vertexShader:Mb,fragmentShader:yb,glslVersion:Pn,uniforms:{...this.U,uTerrain:{value:t},uState:{value:n},uMod:{value:s},uSize:r,uMap:{value:A},uHasMap:{value:A?1:0},uHiAtlas:{value:this.hires?this.hires.atlas:t},uHiIndex:{value:this.hires?this.hires.index:t},uHiUse:this.hiUse}}),this.buildings=new Mt(P,this.buildingMat),this.buildings.frustumCulled=!1,this.buildings.renderOrder=1,this.buildings.visible=!this.view2d,this.root.add(this.buildings)}setStateTextures(e,t){this.terrainMat&&(this.terrainMat.uniforms.uState.value=e),this.waterMat&&(this.waterMat.uniforms.uState.value=e,this.waterMat.uniforms.uAux.value=t,this.bindTrend()),this.buildingMat&&(this.buildingMat.uniforms.uState.value=e),this.flood?.setState(e,t)}bindTrend(){if(!this.waterMat)return;const e=this.waterMat.uniforms.uState.value,t=this.trendB&&this.trendB.stateTex===e?this.trendB:this.trendA;this.waterMat.uniforms.uTrend.value=t?t.texture:null}advanceSim(e){this.pendingAdvance+=e}setSubgrid(e){this.U.uSubgrid.value=e?1:0,this.trendReset=!0}setBaselineTextures(e,t=null,n=null){this.flowB&&(this.root.remove(this.flowB.group),this.flowB.dispose(),this.flowB=null),this.arrowsB&&(this.root.remove(this.arrowsB.mesh),this.arrowsB.dispose(),this.arrowsB=null),this.trendB&&(this.trendB.dispose(),this.trendB=null),e&&this.terrainTexRef&&this.modTexRef&&(this.flowB=new jf(this.renderer,this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.arrowsB=new Kf(this.W,this.H,this.dx,e,this.terrainTexRef,this.modTexRef,this.U),this.root.add(this.flowB.group),this.root.add(this.arrowsB.mesh),t&&(this.trendB=new Zf(this.renderer,this.W,this.H,e,t,this.terrainTexRef,this.modTexRef,n??this.faceModTexRef??this.modTexRef,this.sgRef),this.trendReset=!0)),this.applyFlowMode(),this.bindTrend()}setFlowMode(e){this.flowMode=e,this.applyFlowMode()}get effFlow(){return this.waterMode==="max"?"none":this.flowMode}applyFlowMode(){const e=this.effFlow==="particles",t=this.effFlow==="arrows";this.flowA&&(this.flowA.group.visible=e),this.arrowsA&&(this.arrowsA.mesh.visible=t),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1)}setFlowSpawn(e,t,n){(e==="A"?this.flowA:this.flowB)?.setSpawn(t,n)}resetFlow(){this.flowA?.reset(),this.flowB?.reset(),this.trendReset=!0,this.pendingAdvance=0}measuresChanged(){this.trendReset=!0}setTextureMode(e){if(this.texMode=e,!this.terrainMat)return;const t=e==="imagery"?this.imageryTex??this.basemapTex:this.basemapTex??this.imageryTex;this.terrainMat.uniforms.uMap.value=t,this.terrainMat.uniforms.uHasMap.value=t?1:0,this.buildingMat&&(this.buildingMat.uniforms.uMap.value=t,this.buildingMat.uniforms.uHasMap.value=t?1:0),this.hiUse.value=e==="imagery"?1:0}setBuildingsBlock(e){this.U.uBuildings.value=e?1:0}setShowMax(e){this.U.uShowMax.value=e?1:0}setShadows(e){this.shadowUser=e,this.U.uShadow.value=e&&!this.view2d?1:0}setFx(e){this.fx=e,this.U.uFx.value=e&&!this.view2d?1:0,e||(this.flashT=0)}setView2D(e,t=!0){const n=this.director.controls,s=this.view2d;if(this.view2d=e,this.U.uFx.value=this.fx&&!e?1:0,this.U.uShadow.value=this.shadowUser&&!e?1:0,this.buildings&&(this.buildings.visible=!e),e&&(this.flashT=0),s===e)return;const r=n.target.clone(),a=this.camera.position.distanceTo(r),o=Math.tan(Xt.degToRad(25))/Math.tan(Xt.degToRad(15));this.camera.fov=e?30:50,this.camera.updateProjectionMatrix();const l=new j().subVectors(this.camera.position,r).multiplyScalar(e?o:1/o);if(this.camera.position.copy(r).add(l),n.enableRotate=!e,n.minDistance=e?120:25,!this.assets){n.maxPolarAngle=e?.004:Math.PI*.49;return}if(e){const c=this.topOf(r,a*o),u=()=>{this.view2d&&(n.maxPolarAngle=.004)};t?this.director.flyTo(c,1.4,u):(this.director.jumpTo(c),u())}else{n.maxPolarAngle=Math.PI*.49;const c=Ai.viewOf(r,a/o,20,42);t?this.director.flyTo(c,1.6):this.director.jumpTo(c)}}topOf(e,t){return Ai.viewOf(e,t,0,89.85)}setFine(e){this.fineOn=e,this.U.uFineOn.value=this.fine&&e?1:0}get fineLoaded(){return this.fine?this.fine.loaded:0}setWaterMode(e){this.waterMode=e,this.U.uWaterMode.value=e==="max"?1:0,this.applyFlowMode()}setExaggeration(e){const t=this.director.controls.target,n=e/this.exag;this.exag=e,this.root.scale.y=e,this.U.uExag.value=e,this.setBasements(this.ugLast);const s=t.y*(n-1);t.y+=s,this.camera.position.y+=s,this.director.controls.update()}cameraPreset(e,t){const n=this.director.controls.target,s=t?t.x:n.x,r=t?t.y:-n.z,a=new j(s,this.groundAt(s,r)*this.exag+2,-r),o=Math.max(this.W,this.H)*this.dx,l=new j().subVectors(this.camera.position,n),c=Xt.radToDeg(Math.atan2(l.x,l.z));if(this.view2d){this.director.flyTo(e==="bird"?this.defaultView():this.topOf(a,1400),1.8);return}if(e==="bird"){const u=new j(this.W*this.dx/2,0,-(this.H*this.dx)/2);u.y=this.groundAt(u.x,-u.z)*this.exag,this.director.flyTo(Ai.viewOf(u,o*.95,.01,84),2.2)}else e==="street"?this.director.flyTo(this.clearView(a.setY(a.y+3),240,c),2.4):this.director.flyTo(Ai.viewOf(a,900,c,32),2.2)}clearView(e,t,n){const s=this.assets;if(!s)return Ai.viewOf(e,t,n,10);const r=(a,o)=>{const l=Math.min(this.W-1,Math.max(0,Math.floor(a/this.dx))),u=Math.min(this.H-1,Math.max(0,Math.floor(o/this.dx)))*this.W+l;return(s.dem[u]+s.bldh[u])*this.exag};for(const a of[9,14,20,28])for(let o=0;o<12;o++){const l=n+(o%2?1:-1)*Math.ceil(o/2)*30,c=Ai.viewOf(e,t,l,a);let u=!0;for(let d=1;d<=24&&u;d++){const h=new j().lerpVectors(e,c.pos,d/24);r(h.x,-h.z)>h.y-2&&(u=!1)}if(u)return c}return Ai.viewOf(e,t,n,35)}clearScene(){for(const e of[this.terrain,this.water,this.buildings])e&&(this.root.remove(e),e.material.dispose());this.buildings&&this.buildings.geometry.dispose(),this.grid?.dispose(),this.grid=null,this.terrain=this.water=this.buildings=null,this.imageryTex?.dispose(),this.basemapTex?.dispose(),this.imageryTex=this.basemapTex=null,this.setBaselineTextures(null),this.flowA&&(this.root.remove(this.flowA.group),this.flowA.dispose(),this.flowA=null),this.arrowsA&&(this.root.remove(this.arrowsA.mesh),this.arrowsA.dispose(),this.arrowsA=null),this.trendA&&(this.trendA.dispose(),this.trendA=null),this.fine&&(this.fine.dispose(),this.fine=null),this.hires&&(this.hires.dispose(),this.hires=null),this.flood&&(this.flood.dispose(),this.flood=null),this.split=null,this.clearMeasures(),this.setLabels([]),this.clearBasements()}setWeather(e,t,n){const s=this.fx&&!this.view2d,r=s?Xt.clamp(1-Xt.smoothstep(Math.sin((n-6)/12*Math.PI),-.15,.15),0,1):0;s||(t*=.3,e=0,n=11),this.U.uNight.value=r*.22,this.U.uStorm.value=Xt.clamp(t,0,1),this.U.uRainI.value=Xt.clamp(e/60,0,1.6);const a=Math.max(Math.sin((n-6)/12*Math.PI),.08),o=(n-12)/12*Math.PI*.9;this.U.uSun.value.set(Math.sin(o)*Math.cos(a*1.3),Math.max(a,.15),Math.cos(o)*Math.cos(a*1.3)).normalize();const l=new ot(11123917),c=new ot(8161171),u=new ot(2897218),d=l.clone().lerp(c,this.U.uStorm.value).lerp(u,r*.8);this.U.uFogColor.value.copy(d),this.U.uSkyColor.value.copy(new ot(9418464).lerp(new ot(3818578),this.U.uStorm.value).lerp(new ot(1581104),r*.8));const h=Math.min(1,5e3/Math.max(1,this.W*this.dx));this.U.uFogDensity.value=(4e-5+3e-5*this.U.uStorm.value+2e-5*this.U.uRainI.value)*h,this.renderer.setClearColor(d)}lightning(){this.fx&&!this.view2d&&(this.flashT=.18)}setBasements(e){this.ugLast=e;const t=this.exag;for(const n of e){let s=this.ugItems.get(n.id);if(!s){const u=this.groundAt(n.x,n.y),d=Xt.clamp(Math.sqrt(n.area),24,160),h=new Us(1,1,1),p=new Mt(h,new ss({color:660518,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1}));p.renderOrder=11,this.ugGroup.add(p);const v=new Mt(h,new ss({color:2528491,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}));v.renderOrder=12,this.ugGroup.add(v);const _=new tl(new lh(h),new qr({color:15267583,transparent:!0,opacity:.95,depthTest:!1}));_.renderOrder=14,this.ugGroup.add(_);const m=new tl(new lh(new Vi(1,1).rotateX(-Math.PI/2)),new qr({color:16777215,depthTest:!1}));m.renderOrder=15,this.ugGroup.add(m);const f=new tl(new lh(new Vi(1,1).rotateX(-Math.PI/2)),new qr({color:16765286,depthTest:!1}));f.renderOrder=15,this.ugGroup.add(f),s={fill:v,glass:p,edges:_,level:m,foot:f,side:d,cap:n.cap,z:u},this.ugItems.set(n.id,s)}const r=Math.max(1,16/(s.cap*t)),a=s.cap*r,o=Math.min(n.depth,s.cap),l=o*r,c=s.z;s.glass.scale.set(s.side,a,s.side),s.glass.position.set(n.x,c-a/2,-n.y),s.edges.scale.copy(s.glass.scale),s.edges.position.copy(s.glass.position),s.fill.visible=o>.02,s.fill.scale.set(s.side*.98,Math.max(l,.05),s.side*.98),s.fill.position.set(n.x,c-a+l/2,-n.y),s.fill.material.color.set(Xm(o)),s.level.visible=o>.02,s.level.scale.set(s.side*.98,1,s.side*.98),s.level.position.set(n.x,c-a+l,-n.y),s.foot.scale.set(s.side,1,s.side),s.foot.position.set(n.x,c+.8,-n.y)}}clearBasements(){for(const e of this.ugGroup.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.ugGroup.clear(),this.ugItems.clear(),this.ugLast=[]}setLabels(e){const t=new Set(e.map(a=>a.id));for(const[a,o]of this.labelEls)t.has(a)||(o.el.remove(),this.labelEls.delete(a));for(const a of e){let o=this.labelEls.get(a.id);if(!o){const c=document.createElement("div");this.labelsDiv.appendChild(c),o={el:c,item:a,w:0},this.labelEls.set(a.id,o)}const l=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`;o.el.innerHTML!==l&&(o.w=0),o.item=a,o.el.className=`marker-label ${a.cls}`,a.color!==void 0&&o.el.style.setProperty("--dot",`#${a.color.toString(16).padStart(6,"0")}`),o.el.innerHTML=`${a.text}${a.sub?`<span class="depth">${a.sub}</span>`:""}`}const n=this.exag,s=this.pinGeo,r=this.pinWhite;for(const a of this.markerGroup.children){const o=a.material;o!==r&&o.dispose()}this.markerGroup.clear();for(const a of e){const o=this.groundAt(a.x,a.y),l=a.cls.includes("landmark"),c=a.cls.includes("upin"),u=a.cls.includes("measure"),d=a.color??(a.cls.includes("gauge")?2842585:a.cls.includes("none")?7042433:a.cls.includes("severe")?13648175:a.cls.includes("moderate")||a.cls.includes("val")?14060058:u?a.cls.includes("temporary")?1746837:6256276:l?5134180:7042433),h=l?14:u?20:c?34:26,p=new Mt(s.pin,r);p.scale.set(1,h/n,1),p.position.set(a.x,o+h/2/n,-a.y),this.markerGroup.add(p);const v=new Mt(l||u?s.small:s.head,new ss({color:d}));if(v.scale.y=1/n,v.position.set(a.x,o+(h+1)/n,-a.y),this.markerGroup.add(v),l||u)continue;const _=new Mt(s.ring,new ss({color:d,transparent:!0,opacity:c?.9:.6,side:ti}));_.rotation.x=-Math.PI/2,_.position.set(a.x,o+.5/n,-a.y),c&&_.scale.setScalar(1.6),this.markerGroup.add(_)}}updateLabels(){const e=new j,t=window.innerWidth,n=window.innerHeight,s=o=>o.includes("upin")?-1:o.includes(" ug")?-.5:o.includes("val")?0:o.includes("gauge")?1:o.includes("severe")?2:o.includes("landmark")?4:o.includes("measure")?3.5:3,r=[];for(const o of this.labelEls.values()){const{el:l,item:c}=o;e.set(c.x,this.groundAt(c.x,c.y)*this.exag+(c.cls.includes("landmark")?18:c.cls.includes("measure")?24:c.cls.includes("upin")?38:30),-c.y);const u=e.distanceTo(this.camera.position);e.project(this.camera);const d=(e.x+1)/2*t,h=(1-e.y)/2*n,p=u*2*Math.tan(Xt.degToRad(this.camera.fov/2))/n;if(!(e.z<1&&p<10&&Math.abs(e.x)<1.05&&Math.abs(e.y)<1.05&&d>this.labelInset.l+24&&d<t-this.labelInset.r-24&&h>this.labelInset.t+30&&h<n-Math.max(20,this.labelInset.b))){l.style.display="none";continue}!o.w&&l.style.display!=="none"&&(o.w=l.offsetWidth),r.push({el:l,sx:d,sy:h,dist:p,p:s(l.className),wpx:o.w||120})}r.sort((o,l)=>o.p-l.p||o.dist-l.dist);const a=[];for(const o of r){const l={x0:o.sx-o.wpx/2-4,x1:o.sx+o.wpx/2+4,y0:o.sy-26,y1:o.sy+2};if(l.x0<this.labelInset.l+8||l.x1>t-this.labelInset.r-8){o.el.style.display="none";continue}if(a.some(u=>l.x0<u.x1&&l.x1>u.x0&&l.y0<u.y1&&l.y1>u.y0)){o.el.style.display="none";continue}a.push(l),o.el.style.display="flex",o.el.style.left=`${o.sx}px`,o.el.style.top=`${o.sy}px`,o.el.style.opacity=`${Xt.clamp(1.3-o.dist/10,.45,1)}`}}groundAt(e,t){if(!this.assets)return 0;const n=Xt.clamp(Math.floor(e/this.dx),0,this.W-1),s=Xt.clamp(Math.floor(t/this.dx),0,this.H-1),r=this.assets.dem[s*this.W+n];return r<-1?.5:r}surfaceAt(e,t,n){const s=this.assets,r=Xt.clamp(Math.floor(e/this.dx),0,this.W-1),o=Xt.clamp(Math.floor(t/this.dx),0,this.H-1)*this.W+r;return s.mask[o]?-2.5:s.dem[o]+(n?s.bldh[o]:0)}raycastGround(e,t,n=!0){if(!this.assets)return null;const s=new je(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),r=new Vf;r.setFromCamera(s,this.camera);const a=r.ray.origin,o=r.ray.direction,l=4e4;let c=Math.max(this.dx*.5,2),u=0,d=!0;for(let h=0;h<l;h+=c){const p=a.x+o.x*h,v=a.y+o.y*h,_=a.z+o.z*h,m=p,f=-_,x=m>=0&&f>=0&&m<=this.W*this.dx&&f<=this.H*this.dx,M=x?this.surfaceAt(m,f,n)*this.exag:-1e9,w=v>M;if(!w&&d&&x){let P=u,A=h;for(let y=0;y<12;y++){const b=(P+A)/2,N=a.x+o.x*b,k=a.y+o.y*b,X=a.z+o.z*b;k>this.surfaceAt(N,-X,n)*this.exag?P=b:A=b}const R=(P+A)/2,F=a.x+o.x*R,Y=a.z+o.z*R;return{x:F,y:-Y,z:this.groundAt(F,-Y)}}d=w,u=h,h>2e3&&(c=Math.max(c,this.dx))}return null}screenOf(e,t){const n=new j(e,this.groundAt(e,t)*this.exag,-t).project(this.camera);return n.z>1?null:{sx:(n.x+1)/2*window.innerWidth,sy:(1-n.y)/2*window.innerHeight}}clearMeasures(){this.measureGroup.clear(),this.setDraft([],"wall")}setMeasures(e){this.measureGroup.clear();const t=n=>n.role??"whatif";for(const{m:n,eff:s,selected:r}of e){const a=n.kind==="wall"?t(n)==="whatif"?16167531:t(n)==="record"?8162984:3003583:n.kind==="sandbag"?10910015:n.kind==="pump"?5032432:n.kind==="tank"?7066778:n.kind==="culvert"?9085112:n.kind==="pipe"?8359066:9471465,o=r?15884300:s<0?15680580:a,l=s===0,c=(d=1)=>new ss({color:o,transparent:l||d<1,opacity:l?Math.min(.28,d):d,side:ti,depthWrite:!l}),u=d=>{d.userData.id=n.id,this.measureGroup.add(d)};if(n.kind==="wall"||n.kind==="sandbag"){const d=n.height??1;if(n.cells?.length&&n.pts.length<2){const h=new Us(this.dx,d,this.dx),p=new cw(h,c(),n.cells.length),v=new Nt;n.cells.forEach((_,m)=>{const f=_%this.W,x=Math.floor(_/this.W),M=(f+.5)*this.dx,w=(x+.5)*this.dx,P=this.groundAt(M,w);v.makeTranslation(M,P+(s<0?-d/2:d/2),-w),p.setMatrixAt(m,v)}),p.instanceMatrix.needsUpdate=!0,u(p);continue}for(let h=1;h<n.pts.length;h++){const p=n.pts[h-1],v=n.pts[h],_=Math.hypot(v.x-p.x,v.y-p.y);if(_<.5)continue;const m=new Us(_+1.5,d,n.kind==="wall"?2.4:3),f=new Mt(m,c()),x=(p.x+v.x)/2,M=(p.y+v.y)/2,w=Math.max(this.groundAt(p.x,p.y),this.groundAt(v.x,v.y));f.position.set(x,w+(s<0?-d/2:d/2),-M),f.rotation.y=Math.atan2(-(v.y-p.y),v.x-p.x),u(f)}if(r)for(const h of n.pts){const p=new Mt(new ea(1.6,10,8),new ss({color:15884300}));p.position.set(h.x,this.groundAt(h.x,h.y)+d+1.2,-h.y),u(p)}}else if(n.kind==="culvert"||n.kind==="pipe"){if(n.pts.length<2)continue;const d=n.pts[0],h=n.pts[n.pts.length-1],p=Math.hypot(h.x-d.x,h.y-d.y);if(p<.5)continue;const v=Math.max(.3,n.diameter??1),_=new no(v/2+.4,v/2+.4,p,10);_.rotateZ(Math.PI/2);const m=new Mt(_,c(.9)),f=(this.groundAt(d.x,d.y)+this.groundAt(h.x,h.y))/2;m.position.set((d.x+h.x)/2,f+v/2+.4,-(d.y+h.y)/2),m.rotation.y=Math.atan2(-(h.y-d.y),h.x-d.x),u(m);for(const x of[d,h]){const M=new Mt(new Qr(v+.5,v+1.8,20),c(.6));M.rotation.x=-Math.PI/2,M.position.set(x.x,this.groundAt(x.x,x.y)+.6,-x.y),u(M)}}else if(n.kind==="pump"){const d=n.pts[0];if(!d)continue;const h=this.groundAt(d.x,d.y),p=new Mt(new no(4,5,7,12),c());p.position.set(d.x,h+3.5,-d.y),u(p);const v=new Mt(new Qr((n.radius??30)-2,n.radius??30,32),c(.5));v.rotation.x=-Math.PI/2,v.position.set(d.x,h+.6,-d.y),u(v)}else if(n.kind==="tank"||n.kind==="drain"){if(n.pts.length>=3){const d=[],h=[...n.pts,n.pts[0]];for(let _=0;_+1<h.length;_++){const m=h[_],f=h[_+1],x=Math.max(1,Math.ceil(Math.hypot(f.x-m.x,f.y-m.y)/(this.dx/2)));for(let M=0;M<=x;M++){const w=m.x+(f.x-m.x)*M/x,P=m.y+(f.y-m.y)*M/x;d.push(w,this.groundAt(w,P)+1.5,-P)}}const p=new sn;p.setAttribute("position",new Ot(d,3));const v=new cu(p,new qr({color:o,transparent:!0,opacity:l?.35:.95}));v.renderOrder=10,u(v)}else if(n.pts[0]){const d=n.pts[0],h=this.groundAt(d.x,d.y),p=n.radius??60,v=new Mt(new Qr(p-Math.max(1.5,p*.04),p,64),c(.85));v.rotation.x=-Math.PI/2,v.position.set(d.x,h+.8,-d.y),u(v)}}}}pickMeasure(e,t){const n=new je(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),s=new Vf;s.setFromCamera(n,this.camera);const r=s.intersectObjects(this.measureGroup.children,!0);for(const a of r){let o=a.object;for(;o&&o.userData.id===void 0;)o=o.parent;if(o)return o.userData.id}return null}setDraft(e,t){if(this.draftLine&&(this.root.remove(this.draftLine),this.draftLine.geometry.dispose(),this.draftLine=null),e.length<1)return;const n=e.map(r=>new j(r.x,this.groundAt(r.x,r.y)+1.5,-r.y));e.length===1&&n.push(n[0].clone().add(new j(0,10,0)));const s=new sn().setFromPoints(n);this.draftLine=new cu(s,new qr({color:t==="wall"?16167531:16777215})),this.draftLine.renderOrder=30,this.root.add(this.draftLine)}defaultView(){const e=this.W*this.dx/2,t=this.H*this.dx/2,n=new j(e,this.groundAt(e,t)*this.exag+5,-t);if(this.view2d){const s=Math.max(this.H*this.dx,this.W*this.dx/Math.max(.5,this.camera.aspect))/(2*Math.tan(Xt.degToRad(15)));return this.topOf(n,s*.82)}return Ai.viewOf(n,Math.max(this.W,this.H)*this.dx*.95,20,42)}viewAt(e,t,n=900){const s=new j(e,this.groundAt(e,t)*this.exag+5,-t);return this.view2d?this.topOf(s,n*1.5):Ai.viewOf(s,n,-20+Math.random()*50,30)}updateNear(){let e=0;if(this.assets){const n=this.assets,s=this.camera.position.x,r=-this.camera.position.z,a=Math.floor(s/this.dx),o=Math.floor(r/this.dx),l=Math.max(1,Math.ceil(50/this.dx));for(let c=o-l;c<=o+l;c++)for(let u=a-l;u<=a+l;u++){const d=Xt.clamp(u,0,this.W-1),p=Xt.clamp(c,0,this.H-1)*this.W+d;e=Math.max(e,(n.dem[p]+(this.view2d?0:n.bldh[p]))*this.exag)}}const t=Xt.clamp((this.camera.position.y-e)*.2,2,4e3);Math.abs(t-this.nearSet)>this.nearSet*.08&&(this.nearSet=t,this.camera.near=t,this.camera.updateProjectionMatrix())}render(e){this.time+=e,this.U.uTime.value=this.time,this.flashT>0?(this.flashT-=e,this.U.uFlash.value=Math.max(0,this.flashT/.18)*(.25+.15*Math.random())):this.U.uFlash.value=0,this.director.update(e),this.updateNear();const t=!!this.flood&&(this.view2d||this.waterMode==="max"||!this.fx);this.U.uFloodOn.value=t?1:0,this.U.uMute.value=this.view2d?1:0,this.water&&(this.water.visible=!t),t&&this.flood.update(this.U.uSubgrid.value>.5),this.U.uCam.value.copy(this.camera.position),this.U.uViewH.value=this.renderer.getDrawingBufferSize(this.tmpV2).y,this.rainMat.uniforms.uCenter.value.copy(this.director.controls.target),this.rain.visible=this.U.uRainI.value>.01,this.sky.position.copy(this.camera.position);const n=this.camera.position.distanceTo(this.director.controls.target);this.effFlow==="particles"&&(this.flowA?.update(e,n),this.split&&this.flowB?.update(e,n));const s=this.pendingAdvance;this.pendingAdvance=0;const r=this.U.uSubgrid.value>.5;if(this.trendA?.update(s,r,this.trendReset),this.trendB?.update(s,r,this.trendReset),this.trendReset=!1,this.bindTrend(),this.fine&&this.fineOn){const a=this.director.controls.target;this.fine.update(a.x,-a.z,Xt.clamp(n*1.2,600,1500))}if(this.hires&&this.hiUse.value>.5&&n<2500){const a=this.director.controls.target;this.hires.update(a.x,-a.z,Xt.clamp(n*1.1,300,1e3))}if(this.split&&this.split.frac>.002&&this.split.frac<.998){const a=this.renderer.getDrawingBufferSize(new je),o=Math.round(this.split.frac*a.x),l=this.effFlow==="particles",c=this.effFlow==="arrows";this.renderer.setScissorTest(!0),this.setStateTextures(this.split.left.state,this.split.left.aux),t&&this.flood.update(this.U.uSubgrid.value>.5),this.flowA&&(this.flowA.group.visible=!1),this.arrowsA&&(this.arrowsA.mesh.visible=!1),this.flowB&&(this.flowB.group.visible=l),this.arrowsB&&(this.arrowsB.mesh.visible=c),this.renderer.setScissor(0,0,o,a.y),this.renderer.render(this.scene,this.camera),this.setStateTextures(this.split.right.state,this.split.right.aux),t&&this.flood.update(this.U.uSubgrid.value>.5),this.flowB&&(this.flowB.group.visible=!1),this.arrowsB&&(this.arrowsB.mesh.visible=!1),this.flowA&&(this.flowA.group.visible=l),this.arrowsA&&(this.arrowsA.mesh.visible=c),this.renderer.setScissor(o,0,a.x-o,a.y),this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1)}else this.renderer.render(this.scene,this.camera);this.updateLabels()}}function Xm(i){let e=0;for(;e+1<np.length&&i>=np[e+1];)e++;return`#${Eb[e].toString(16).padStart(6,"0")}`}const Cb=-1e4;class Rb{constructor(e,t,n){U(this,"measures",[]);U(this,"dem",null);U(this,"bld",null);U(this,"nextId",1);U(this,"baseDrain",null);U(this,"sea",null);U(this,"rPos");U(this,"rNeg");this.W=e,this.H=t,this.dx=n,this.rPos=new Float32Array(e*t),this.rNeg=new Float32Array(e*t)}add(e){const t={...e,id:this.nextId++};return this.ensureKey(t),this.measures.push(t),t}get(e){return this.measures.find(t=>t.id===e)}update(e,t){const n=this.get(e);n&&(Object.assign(n,t),n.locked&&(n.locked=!1),this.ensureKey(n))}ensureKey(e){(e.role??"whatif")!=="whatif"&&!e.key&&(e.key=`${e.kind}_${Date.now().toString(36)}${e.id.toString(36)}`)}remove(e){this.measures=this.measures.filter(t=>t.id!==e)}clearWhatIf(){this.measures=this.measures.filter(e=>(e.role??"whatif")!=="whatif"||e.scenario_only)}replaceAll(e){this.measures=[],this.nextId=1;for(const t of e)this.add(t)}existsAt(e,t){const n=ip(e.built),s=ip(e.removed);return(n===null||t.eventStart>=n)&&(s===null||t.eventStart<s)}effect(e,t){if(e.info||t.bare)return 0;const n=e.role??"whatif";if(n==="whatif")return e.key&&t.keys?.includes(e.key)||t.whatIf&&!e.scenario_only?1:0;if(e.key&&t.exclude?.includes(e.key))return 0;if(n==="record"){const s=this.existsAt(e,t);return e.in_dtm?s?0:e.kind==="wall"||e.kind==="sandbag"?-1:0:s?1:0}return e.events?.length&&!e.events.includes(t.eventId)||e.from_h!==void 0&&e.from_h!==null&&t.simH<e.from_h||e.to_h!==void 0&&e.to_h!==null&&t.simH>=e.to_h?0:1}signature(e){return this.measures.map(t=>`${t.id}:${this.effect(t,e)}`).join("|")}cost(e){const t=this.length(e);switch(e.kind){case"wall":return t*(e.height??1)*45e3;case"sandbag":return t*800;case"pump":return 25e5+(e.rate??1)*12e5;case"tank":return(e.capacity??1e4)*9e3;case"drain":return this.area(e)*1500;case"culvert":return t*(e.diameter??1)*6e4;case"pipe":return t*(e.diameter??1)*25e3}}length(e){if(e.cells?.length&&e.pts.length<2)return e.cells.length*this.dx;let t=0;for(let n=1;n<e.pts.length;n++)t+=Math.hypot(e.pts[n].x-e.pts[n-1].x,e.pts[n].y-e.pts[n-1].y);return t}area(e){if(e.cells?.length&&e.pts.length<3)return e.cells.length*this.dx*this.dx;if(e.pts.length<3)return Math.PI*(e.radius??50)**2;let t=0;const n=e.pts;for(let s=0;s<n.length;s++){const r=n[(s+1)%n.length];t+=n[s].x*r.y-r.x*n[s].y}return Math.abs(t)/2}rasterize(e,t,n){const s=this.W*this.H;this.rPos.fill(0),this.rNeg.fill(0);for(let r=0;r<s;r++)e[r*4]=0,e[r*4+1]=0,e[r*4+2]=0,e[r*4+3]=this.baseDrain?this.baseDrain[r]:1;n&&n.fill(Cb);for(const r of this.measures){const a=this.effect(r,t);if(!a||r.kind==="pump"||r.kind==="culvert"||r.kind==="pipe")continue;if((r.kind==="wall"||r.kind==="sandbag")&&n&&a>0&&!r.cells?.length&&r.pts.length>=2){this.lineFaces(r.pts,r.height??1,n);continue}const o=this.cellsOf(r);if(o.length){if(r.kind==="wall"||r.kind==="sandbag"){const l=(r.height??1)*a;for(const c of o)this.sea&&this.sea[c]||(l>0?this.rPos[c]=Math.max(this.rPos[c],l):this.rNeg[c]=Math.min(this.rNeg[c],l))}else if(r.kind==="tank"){const l=(r.capacity??2e4)/(o.length*this.dx*this.dx);for(const c of o)e[c*4+2]+=l}else if(r.kind==="drain")for(const l of o)e[l*4+3]*=r.factor??2}}for(let r=0;r<s;r++)e[r*4]=this.rPos[r]>0?this.rPos[r]:this.rNeg[r]}connectors(e){const t=[];for(const n of this.measures)if(!(this.effect(n,e)<=0)){if(n.kind==="pump"&&n.pts[0]){let r=-1,a=1/0;for(const o of this.discCells(n.pts[0],n.radius??25)){if(this.sea&&this.sea[o]||this.bld&&this.bld[o]>0)continue;const l=this.dem?this.dem[o]:0;l<a&&(a=l,r=o)}r>=0&&t.push({id:n.id,kind:"pump",a:r,b:-1,q:n.rate??1,on:n.on_m??.05,off:n.off_m??.01})}else if((n.kind==="culvert"||n.kind==="pipe")&&n.pts.length>=2){const r=this.cellOf(n.pts[0]),a=this.cellOf(n.pts[n.pts.length-1]);if(!this.inside(r.i,r.j)||!this.inside(a.i,a.j))continue;const o=r.j*this.W+r.i,l=a.j*this.W+a.i;if(o===l)continue;const c=n.diameter??1,u=n.invert??-c,d=this.dem?this.dem[o]:0,h=this.dem?this.dem[l]:0;t.push({id:n.id,kind:n.kind,a:o,b:l,d:c,n:n.manning??.013,L:Math.max(this.dx,this.length(n)),zin:d+u,zout:h+u})}}return t}cellsOf(e){return e.cells?.length?e.cells.filter(t=>t>=0&&t<this.W*this.H):e.pts.length?e.kind==="wall"||e.kind==="sandbag"?this.lineCells(e.pts):e.kind==="pump"?this.discCells(e.pts[0],e.radius??25):e.pts.length>=3?this.polygonCells(e.pts):this.discCells(e.pts[0],e.radius??50):[]}cellOf(e){return{i:Math.floor(e.x/this.dx),j:Math.floor(e.y/this.dx)}}lineFaces(e,t,n){const s=this.dem,r=this.dx,a=this.W,o=(h,p)=>{if(!this.inside(h,p)||!this.inside(h+1,p))return;const v=p*a+h,_=s?Math.max(s[v],s[v+1]):0;n[v*4]=Math.max(n[v*4],_+t)},l=(h,p)=>{if(!this.inside(h,p)||!this.inside(h,p+1))return;const v=p*a+h,_=s?Math.max(s[v],s[v+a]):0;n[v*4+1]=Math.max(n[v*4+1],_+t)},c=(h,p,v)=>o(Math.min(h,p),v),u=(h,p,v)=>l(h,Math.min(p,v)),d=1;for(let h=1;h<e.length;h++){const p=e[h-1],v=e[h],_=Math.hypot(v.x-p.x,v.y-p.y),m=Math.max(1,Math.ceil(_/(r/4)));let f=Math.floor(p.x/r),x=Math.floor(p.y/r);for(let M=0;M<=m;M++){const w=p.x+(v.x-p.x)*M/m,P=p.y+(v.y-p.y)*M/m,A=Math.floor(w/r),R=Math.floor(P/r);A!==f&&R!==x?(c(f,A,x),u(A,x,R),u(f,x,R),c(f,A,R)):A!==f?c(f,A,x):R!==x&&u(f,x,R);const F=w-A*r,Y=P-R*r;F<d?o(A-1,R):F>r-d&&o(A,R),Y<d?l(A,R-1):Y>r-d&&l(A,R),f=A,x=R}}}inside(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}lineCells(e){const t=[],n=new Set,s=(r,a)=>{if(this.inside(r,a)){const o=a*this.W+r;n.has(o)||(n.add(o),t.push(o))}};if(e.length===1){const r=this.cellOf(e[0]);return s(r.i,r.j),t}for(let r=1;r<e.length;r++){const a=this.cellOf(e[r-1]),o=this.cellOf(e[r]);let{i:l,j:c}=a;const{i:u,j:d}=o,h=Math.abs(u-l),p=-Math.abs(d-c),v=l<u?1:-1,_=c<d?1:-1;let m=h+p;for(;s(l,c),!(l===u&&c===d);){const f=2*m;f>=p&&(m+=p,l+=v,s(l,c)),f<=h&&(m+=h,c+=_,s(l,c))}}return t}discCells(e,t){const n=[],s=Math.max(1,Math.ceil(t/this.dx)),r=this.cellOf(e);for(let a=r.j-s;a<=r.j+s;a++)for(let o=r.i-s;o<=r.i+s;o++)this.inside(o,a)&&Math.hypot((o+.5)*this.dx-e.x,(a+.5)*this.dx-e.y)<=t&&n.push(a*this.W+o);if(!n.length){const a=r.j*this.W+r.i;this.inside(r.i,r.j)&&n.push(a)}return n}polygonCells(e){const t=[],n=e.map(c=>c.x),s=e.map(c=>c.y),r=Math.max(0,Math.floor(Math.min(...n)/this.dx)),a=Math.min(this.W-1,Math.floor(Math.max(...n)/this.dx)),o=Math.max(0,Math.floor(Math.min(...s)/this.dx)),l=Math.min(this.H-1,Math.floor(Math.max(...s)/this.dx));for(let c=o;c<=l;c++)for(let u=r;u<=a;u++)Pb((u+.5)*this.dx,(c+.5)*this.dx,e)&&t.push(c*this.W+u);return t}toSaved(e,t){const n=this.measures.filter(s=>!s.locked).map(s=>{const{id:r,locked:a,...o}=s;return o});return{version:1,scene:e,origin:t,saved:new Date().toISOString(),measures:n}}loadSaved(e,t){const n=(e.origin?.e0??t.e0)-t.e0,s=(e.origin?.n0??t.n0)-t.n0;for(const r of e.measures??[]){const a={...r,pts:(r.pts??[]).map(o=>({x:o.x+n,y:o.y+s}))};if(a.key){const o=this.measures.find(l=>l.key===a.key);o&&(this.measures=this.measures.filter(l=>l!==o))}this.add(a)}}}function ip(i){if(!i)return null;const e=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(i.trim());return e?new Date(`${e[1]}-${e[2]}-${e[3]??"01"}T00:00:00+08:00`).getTime():null}function Pb(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const a=t[s].x,o=t[s].y,l=t[r].x,c=t[r].y;o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var sc,Pt,jm,qm,As,sp,Ym,Km,uh,Cl,io,Zm,$u,pu,mu,Bl={},Hl=[],Db=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,rc=Array.isArray;function ls(i,e){for(var t in e)i[t]=e[t];return i}function Xu(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function Jm(i,e,t){var n,s,r,a={};for(r in e)r=="key"?n=e[r]:r=="ref"?s=e[r]:a[r]=e[r];if(arguments.length>2&&(a.children=arguments.length>3?sc.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(r in i.defaultProps)a[r]===void 0&&(a[r]=i.defaultProps[r]);return Rl(i,a,n,s,null)}function Rl(i,e,t,n,s){var r={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++jm,__i:-1,__u:0};return s==null&&Pt.vnode!=null&&Pt.vnode(r),r}function ht(i){return i.children}function so(i,e){this.props=i,this.context=e}function ur(i,e){if(e==null)return i.__?ur(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?ur(i):null}function Lb(i){if(i.__P&&i.__d){var e=i.__v,t=e.__e,n=[],s=[],r=ls({},e);r.__v=e.__v+1,Pt.vnode&&Pt.vnode(r),ju(i.__P,r,e,i.__n,i.__P.namespaceURI,32&e.__u?[t]:null,n,t??ur(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,i0(n,r,s),e.__e=e.__=null,r.__e!=t&&Qm(r)}}function Qm(i){if((i=i.__)!=null&&i.__c!=null)return i.__e=i.__c.base=null,i.__k.some(function(e){if(e!=null&&e.__e!=null)return i.__e=i.__c.base=e.__e}),Qm(i)}function rp(i){(!i.__d&&(i.__d=!0)&&As.push(i)&&!Vl.__r++||sp!=Pt.debounceRendering)&&((sp=Pt.debounceRendering)||Ym)(Vl)}function Vl(){try{for(var i,e=1;As.length;)As.length>e&&As.sort(Km),i=As.shift(),e=As.length,Lb(i)}finally{As.length=Vl.__r=0}}function e0(i,e,t,n,s,r,a,o,l,c,u){var d,h,p,v,_,m,f=n&&n.__k||Hl,x=e.length;for(l=Fb(t,e,f,l,x),d=0;d<x;d++)(p=t.__k[d])!=null&&(h=p.__i!=-1&&f[p.__i]||Bl,p.__i=d,m=ju(i,p,h,s,r,a,o,l,c,u),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&qu(h.ref,null,p),u.push(p.ref,p.__c||v,p)),_==null&&v!=null&&(_=v),4&p.__u?(l=t0(p,l,i),h.__e&&(h.__e=null)):typeof p.type=="function"&&m!==void 0?l=m:v&&(l=v.nextSibling),p.__u&=-7);return t.__e=_,l}function Fb(i,e,t,n,s){var r,a,o,l,c,u=t.length,d=u,h=0;for(i.__k=new Array(s),r=0;r<s;r++)(a=e[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=i.__k[r]=Rl(null,a,null,null,null):rc(a)?a=i.__k[r]=Rl(ht,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=i.__k[r]=Rl(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):i.__k[r]=a,l=r+h,a.__=i,a.__b=i.__b+1,o=null,(c=a.__i=Ib(a,t,l,d))!=-1&&(d--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(s>u?h--:s<u&&h++),typeof a.type!="function"&&(a.__u|=4)):c!=l&&(c==l-1?h--:c==l+1?h++:(c>l?h--:h++,a.__u|=4))):i.__k[r]=null;if(d)for(r=0;r<u;r++)(o=t[r])!=null&&!(2&o.__u)&&(o.__e==n&&(n=ur(o)),r0(o,o));return n}function t0(i,e,t){var n,s;if(typeof i.type=="function"){for(n=i.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=i,e=t0(n[s],e,t));return e}i.__e!=e&&(e&&i.type&&!e.parentNode&&(e=ur(i)),e=t.insertBefore(i.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ib(i,e,t,n){var s,r,a,o=i.key,l=i.type,c=e[t],u=c!=null&&(2&c.__u)==0;if(c===null&&o==null||u&&o==c.key&&l==c.type)return t;if(n>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((c=e[a=s>=0?s--:r++])!=null&&!(2&c.__u)&&o==c.key&&l==c.type)return a}return-1}function ap(i,e,t){e[0]=="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||Db.test(e)?t:t+"px"}function pl(i,e,t,n,s){var r,a;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||ap(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||ap(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Zm,"$1")),a=e.toLowerCase(),e=a in i||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+r]=t,t?n?t[io]=n[io]:(t[io]=$u,i.addEventListener(e,r?mu:pu,r)):i.removeEventListener(e,r?mu:pu,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function op(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e[Cl]==null)e[Cl]=$u++;else if(e[Cl]<t[io])return;return t(Pt.event?Pt.event(e):e)}}}function ju(i,e,t,n,s,r,a,o,l,c){var u,d,h,p,v,_,m,f,x,M,w,P,A,R,F,Y,y=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[o=e.__e=t.__e]),(u=Pt.__b)&&u(e);e:if(typeof y=="function"){d=a.length;try{if(x=e.props,M=y.prototype&&y.prototype.render,w=(u=y.contextType)&&n[u.__c],P=u?w?w.props.value:u.__:n,t.__c?f=(h=e.__c=t.__c).__=h.__E:(M?e.__c=h=new y(x,P):(e.__c=h=new so(x,P),h.constructor=y,h.render=Nb),w&&w.sub(h),h.state||(h.state={}),h.__n=n,p=h.__d=!0,h.__h=[],h._sb=[]),M&&h.__s==null&&(h.__s=h.state),M&&y.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=ls({},h.__s)),ls(h.__s,y.getDerivedStateFromProps(x,h.__s))),v=h.props,_=h.state,h.__v=e,p)M&&y.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),M&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(M&&y.getDerivedStateFromProps==null&&x!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(x,P),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(x,h.__s,P)===!1){e.__v!=t.__v&&(h.props=x,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(b){b&&(b.__=e)}),Hl.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&a.push(h),o=ur(t);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(x,h.__s,P),M&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,_,m)})}if(h.context=P,h.props=x,h.__P=i,h.__e=!1,A=Pt.__r,R=0,M)h.state=h.__s,h.__d=!1,A&&A(e),u=h.render(h.props,h.state,h.context),Hl.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,A&&A(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++R<25);h.state=h.__s,h.getChildContext!=null&&(n=ls(ls({},n),h.getChildContext())),M&&!p&&h.getSnapshotBeforeUpdate!=null&&(m=h.getSnapshotBeforeUpdate(v,_)),F=u!=null&&u.type===ht&&u.key==null?s0(u.props.children):u,o=e0(i,rc(F)?F:[F],e,t,n,s,r,a,o,l,c),h.base=e.__e,e.__u&=-161,h.__h.length&&a.push(h),f&&(h.__E=h.__=null)}catch(b){if(a.length=d,e.__v=null,l||r!=null){if(b.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;r!=null&&(r[r.indexOf(o)]=null),e.__e=o}else if(r!=null)for(Y=r.length;Y--;)Xu(r[Y])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),b.then||n0(e),Pt.__e(b,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Ub(t.__e,e,t,n,s,r,a,l,c);return(u=Pt.diffed)&&u(e),128&e.__u?void 0:o}function n0(i){i&&(i.__c&&(i.__c.__e=!0),i.__k&&i.__k.some(n0))}function i0(i,e,t){for(var n=0;n<t.length;n++)qu(t[n],t[++n],t[++n]);Pt.__c&&Pt.__c(e,i),i.some(function(s){try{i=s.__h,s.__h=[],i.some(function(r){r.call(s)})}catch(r){Pt.__e(r,s.__v)}})}function s0(i){return typeof i!="object"||i==null||i.__b>0?i:rc(i)?i.map(s0):i.constructor!==void 0?null:ls({},i)}function Ub(i,e,t,n,s,r,a,o,l){var c,u,d,h,p,v,_,m=t.props||Bl,f=e.props,x=e.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(c=0;c<r.length;c++)if((p=r[c])&&"setAttribute"in p==!!x&&(x?p.localName==x:p.nodeType==3)){i=p,r[c]=null;break}}if(i==null){if(x==null)return document.createTextNode(f);i=document.createElementNS(s,x,f.is&&f),o&&(Pt.__m&&Pt.__m(e,r),o=!1),r=null}if(x==null)m===f||o&&i.data==f||(i.data=f);else{if(r=x=="textarea"&&f.defaultValue!=null?null:r&&sc.call(i.childNodes),!o&&r!=null)for(m={},c=0;c<i.attributes.length;c++)m[(p=i.attributes[c]).name]=p.value;for(c in m)p=m[c],c=="dangerouslySetInnerHTML"?d=p:c=="children"||c in f||c=="value"&&"defaultValue"in f||c=="checked"&&"defaultChecked"in f||pl(i,c,null,p,s);for(c in f)p=f[c],c=="children"?h=p:c=="dangerouslySetInnerHTML"?u=p:c=="value"?v=p:c=="checked"?_=p:o&&typeof p!="function"||m[c]===p||pl(i,c,p,m[c],s);if(u)o||d&&(u.__html==d.__html||u.__html==i.innerHTML)||(i.innerHTML=u.__html),e.__k=[];else if(d&&(i.innerHTML=""),e0(e.type=="template"?i.content:i,rc(h)?h:[h],e,t,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&ur(t,0),o,l),r!=null)for(c=r.length;c--;)Xu(r[c]);o&&x!="textarea"||(c="value",x=="progress"&&v==null?i.removeAttribute("value"):v!=null&&(v!==i[c]||x=="progress"&&!v||x=="option"&&v!=m[c])&&pl(i,c,v,m[c],s),c="checked",_!=null&&_!=i[c]&&pl(i,c,_,m[c],s))}return i}function qu(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(s){Pt.__e(s,t)}}function r0(i,e,t){var n,s;if(Pt.unmount&&Pt.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||qu(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){Pt.__e(r,e)}n.base=n.__P=n.__n=null}if(n=i.__k)for(s=0;s<n.length;s++)n[s]&&r0(n[s],e,t||typeof i.type!="function");t||Xu(i.__e),i.__c=i.__=i.__e=void 0}function Nb(i,e,t){return this.constructor(i,t)}function kb(i,e,t){var n,s,r,a;e==document&&(e=document.documentElement),Pt.__&&Pt.__(i,e),s=(n=!1)?null:e.__k,r=[],a=[],ju(e,i=e.__k=Jm(ht,null,[i]),s||Bl,Bl,e.namespaceURI,s?null:e.firstChild?sc.call(e.childNodes):null,r,s?s.__e:e.firstChild,n,a),i0(r,i,a),i.props.children=null}sc=Hl.slice,Pt={__e:function(i,e,t,n){for(var s,r,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(i)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(i,n||{}),a=s.__d),a)return s.__E=s}catch(o){i=o}throw i}},jm=0,qm=function(i){return i!=null&&i.constructor===void 0},so.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ls({},this.state),typeof i=="function"&&(i=i(ls({},t),this.props)),i&&ls(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),rp(this))},so.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),rp(this))},so.prototype.render=ht,As=[],Ym=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Km=function(i,e){return i.__v.__b-e.__v.__b},Vl.__r=0,uh=Math.random().toString(8),Cl="__d"+uh,io="__a"+uh,Zm=/(PointerCapture)$|Capture$/i,$u=0,pu=op(!1),mu=op(!0);const Ob={subtitle:{zh:"香港洪涝实验室 · 交互式洪水数字孪生",en:"Hong Kong interactive flood digital twin"},scenario:{zh:"情景",en:"Scenario"},comparison:{zh:"真实数据 vs 模拟",en:"Observed vs simulated"},params:{zh:"参数",en:"Parameters"},surgeScale:{zh:"风暴潮增水倍率",en:"Surge multiplier"},waveSetup:{zh:"波浪增水（平均水位抬升）",en:"Wave set-up"},waveHs:{zh:"岸边有效波高 Hs（越浪）",en:"Nearshore wave height Hs (overtopping)"},slr:{zh:"海平面上升",en:"Sea-level rise"},rainScale:{zh:"雨量倍率",en:"Rainfall multiplier"},drain:{zh:"排水能力",en:"Drainage capacity"},buildingsBlock:{zh:"建筑物阻水（视为实体）",en:"Buildings block flow"},subgrid:{zh:"子网格地形（1 m LiDAR 格内分布）",en:"Sub-grid terrain (1 m LiDAR within cells)"},defences:{zh:"沿岸防御（按事件日期生效）",en:"Coastal defences (by event date)"},def_built:{zh:"事件时已建成",en:"in place at the event"},def_notyet:{zh:"事件时未建成",en:"not yet built at the event"},measures:{zh:"措施与防御",en:"Measures & defences"},role_whatif:{zh:"情景措施",en:"What-if"},role_record:{zh:"实际工程",en:"Built record"},role_temporary:{zh:"临时措施",en:"Temporary"},newRole:{zh:"新画的措施记为",en:"Draw new measures as"},snapShore:{zh:"顶点吸附到岸线格（画海堤用）",en:"Snap vertices to the shoreline (for sea walls)"},snapOn:{zh:"（顶点吸附岸线：开）",en:"(snapping to the shoreline)"},clearNote:{zh:"只清除情景措施；实际工程与临时措施是数据，逐条删除",en:"Removes what-if measures only; records and temporary measures are data, delete them one by one"},noMeasures:{zh:"还没有措施。画一条墙、放一台泵，或从 JSON 导入；点列表里的一项可编辑属性。",en:"No measures yet. Draw a wall, place a pump or import JSON; click an item to edit its attributes."},def_removed:{zh:"事件时尚未建成（已从地形中撤掉）",en:"not yet built at the event (removed from the terrain)"},def_raised:{zh:"已抬高地形",en:"added to the terrain"},tmp_on:{zh:"此刻生效",en:"active now"},tmp_off:{zh:"此刻未生效",en:"inactive now"},fromPipeline:{zh:"来自管线（defences.py），几何不可重画；改属性后会存入 measures.json",en:"From the pipeline (defences.py); geometry fixed, edited attributes go to measures.json"},delete:{zh:"删除",en:"Delete"},f_name:{zh:"名称",en:"Name"},f_name_ph:{zh:"例：鲤鱼门石筑海堤",en:"e.g. Lei Yue Mun rock seawall"},f_role:{zh:"类型",en:"Role"},f_built:{zh:"建成年月",en:"Completed"},f_removed:{zh:"拆除年月（可空）",en:"Removed (optional)"},f_in_dtm:{zh:"2020 年 LiDAR 地形里已有此结构（更早的事件会把它撤掉）",en:"Already in the 2020 LiDAR terrain (removed for earlier events)"},f_events:{zh:"适用事件：",en:"Applies to: "},f_window:{zh:"生效时间窗（距事件开始的小时）",en:"Active window (hours from event start)"},f_src:{zh:"来源",en:"Source"},f_src_ph:{zh:"文件 / 新闻 / 现场照片",en:"paper / news / photo"},f_note:{zh:"备注",en:"Note"},f_key:{zh:"key",en:"key"},geomCells:{zh:"格索引几何",en:"cell-index geometry"},save:{zh:"保存到场景",en:"Save to scene"},download:{zh:"下载 JSON",en:"Download JSON"},revert:{zh:"放弃改动",en:"Revert"},exportNote:{zh:"导出 JSON",en:"Export JSON"},importNote:{zh:"导入 JSON（同 key 覆盖）",en:"Import JSON (same key replaces)"},wall:{zh:"防洪墙 / 挡水板",en:"Flood wall / barrier"},sandbag:{zh:"沙包堤",en:"Sandbag line"},pump:{zh:"排水泵",en:"Pump"},culvert:{zh:"涵洞 / 过路管",en:"Culvert"},pipe:{zh:"雨水管段",en:"Sewer link"},diameter:{zh:"管径",en:"Diameter"},hintTwo:{zh:"在地图上点两次：进口、出口。",en:"Click twice on the map: inlet, then outlet."},tank:{zh:"地下蓄洪池",en:"Storage tank"},drainUp:{zh:"雨水渠扩容",en:"Drain upgrade"},clear:{zh:"清除全部",en:"Clear all"},finish:{zh:"完成绘制",en:"Finish"},cancel:{zh:"取消",en:"Cancel"},wallHeight:{zh:"墙高",en:"Height"},pumpRate:{zh:"抽排流量",en:"Pump rate"},tankCap:{zh:"容量",en:"Capacity"},drainFactor:{zh:"排水系数（0 = 进水口堵塞）",en:"Drain factor (0 = intake blocked)"},drainBlocked:{zh:"排水口堵塞",en:"Drain intake blocked"},hintDraw:{zh:"在地图上单击放置节点，双击或点“完成绘制”结束。",en:"Click on the map to place vertices; double-click or press Finish to end."},hintPoint:{zh:"在地图上单击放置。",en:"Click on the map to place."},metrics:{zh:"影响指标",en:"Impact metrics"},maxDepth:{zh:"最大水深",en:"Max depth"},floodedArea:{zh:"淹没面积 (>15 cm)",en:"Flooded area (>15 cm)"},severeArea:{zh:"严重淹没 (>50 cm)",en:"Severe (>50 cm)"},bldAffected:{zh:"受影响建筑",en:"Buildings affected"},volume:{zh:"陆上水量",en:"Water on land"},baseline:{zh:"无措施基线",en:"Baseline (no measures)"},withMeasures:{zh:"含措施",en:"With measures"},tideChart:{zh:"潮位：实测 vs 天文潮 vs 模型边界",en:"Sea level: observed vs astronomical vs model boundary"},rainChart:{zh:"雨量过程线 (mm/h)",en:"Rainfall hyetograph (mm/h)"},validation:{zh:"实际水浸记录 vs 模拟最大水深",en:"Reported flooding vs simulated max depth"},place:{zh:"地点",en:"Location"},observed:{zh:"实测/报道",en:"Reported"},simulated:{zh:"模拟",en:"Simulated"},score:{zh:"命中率",en:"Hit rate"},noVal:{zh:"该场景在此事件中没有可核对的水浸记录。",en:"No validation records for this scene/event."},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},depth:{zh:"水深",en:"Depth"},sources:{zh:"数据来源",en:"Sources"},modelNote:{zh:"模型：GPU 二维浅水方程（局部惯性格式，LISFLOOD-FP 同类），网格",en:"Model: GPU 2-D shallow water (local-inertial, LISFLOOD-FP class), grid"},fictional:{zh:"虚构情景",en:"Fictional"},typhoon:{zh:"台风风暴潮",en:"Typhoon surge"},rainstorm:{zh:"暴雨",en:"Rainstorm"},peakObs:{zh:"实测峰值",en:"Observed peak"},peakModel:{zh:"模型边界峰值",en:"Model boundary peak"},tourRunning:{zh:"飞览中… 拖动鼠标可退出",en:"Touring… drag to exit"},loading:{zh:"正在加载场景数据…",en:"Loading scene data…"},ffwd:{zh:"快进计算中",en:"Fast-forwarding"},realtime:{zh:"倍速",en:"×"},costNote:{zh:"粗略造价",en:"Rough cost"},gaugeNow:{zh:"当前边界潮位",en:"Boundary sea level"},rainNow:{zh:"当前雨强",en:"Rain rate"},flowParticles:{zh:"流向：粒子",en:"Flow: particles"},flowArrows:{zh:"流向：箭头",en:"Flow: arrows"},flowNone:{zh:"流向：关",en:"Flow: off"},peak:{zh:"跳到峰值",en:"Jump to peak"},hotspots:{zh:"最严重水浸点（模拟最大水深，街道格）",en:"Worst flooded spots (simulated max depth, streets)"},flyTo:{zh:"飞到",en:"Fly"},swipeLeft:{zh:"◀ 无措施 · 基线",en:"◀ Baseline (no measures)"},swipeRight:{zh:"含措施 ▶",en:"With measures ▶"},noHot:{zh:"尚无 ≥ 0.3 m 的街道积水",en:"No street flooding ≥ 0.3 m yet"},facilities:{zh:"重点设施影响（60 m 内街道最大水深）",en:"Key facilities (max street depth within 60 m)"},facility:{zh:"设施",en:"Facility"},unaffected:{zh:"未受影响",en:"unaffected"},showFac:{zh:"标出受影响的重点设施（医院、港铁站、学校、安老院、停车场…）",en:"Mark affected key facilities (hospitals, MTR, schools, elderly homes, car parks…)"},ft_hospital:{zh:"医院",en:"Hospital"},ft_mtr:{zh:"港铁站",en:"MTR station"},ft_ferry:{zh:"码头",en:"Ferry pier"},ft_bus:{zh:"巴士总站",en:"Bus terminus"},ft_carpark:{zh:"停车场",en:"Car park"},ft_power:{zh:"变电站",en:"Substation"},ft_school:{zh:"学校",en:"School"},ft_elderly:{zh:"安老院",en:"Elderly home"},ft_mall:{zh:"商场",en:"Shopping mall"},ft_fire:{zh:"消防局",en:"Fire station"},ft_police:{zh:"警署",en:"Police station"},ft_community:{zh:"社区中心",en:"Community centre"},ft_water:{zh:"水务设施",en:"Water works"},ft_underground:{zh:"地下空间（估计）",en:"Underground space (estimate)"},swipeHint:{zh:"A/B 分屏：拖动中间的把手，左边是无措施基线，右边是含措施",en:"Swipe view: drag the handle; baseline on the left, measures on the right"},sceneLbl:{zh:"场景",en:"Scene"},eventLbl:{zh:"事件",en:"Event"},places:{zh:"地点",en:"Places"},layers:{zh:"图层",en:"Layers"},grpCoast:{zh:"海岸边界",en:"Coastal boundary"},grpRain:{zh:"降雨与排水",en:"Rain & drainage"},grpModel:{zh:"模型设置",en:"Model"},showMax:{zh:"在地面上显示最大淹没范围",en:"Show max-depth footprint on terrain"},forcing:{zh:"外部驱动",en:"Forcing"},more:{zh:"展开",en:"More"},less:{zh:"收起",en:"Less"},hit:{zh:"命中",en:"Hit"},miss:{zh:"偏差",en:"Miss"},hitRule:{zh:"±0.35 m 或 ±50% 视为命中；取地点 60 m 内街道格的最大水深。报道位置是近似的，结果仅供参考。",en:"Hit if within ±0.35 m or ±50%; max depth over street cells within 60 m. Reported locations are approximate; indicative only."},c_sea:{zh:"潮位",en:"Sea"},c_rain:{zh:"雨强",en:"Rain"},perSec:{zh:"每秒模拟",en:"Sim per second"},running:{zh:"运行中",en:"Running"},paused:{zh:"已暂停",en:"Paused"},lg_val:{zh:"水浸记录",en:"Reported flooding"},lg_gauge:{zh:"潮位站",en:"Tide gauge"},lg_fac:{zh:"受影响设施",en:"Affected facility"},vsBase:{zh:"差值 = 含措施 − 基线；绿色为改善",en:"Delta = with measures − baseline; green is better"},splitNote:{zh:"分屏：左 A = 无措施基线，右 B = 含措施（拖动画面中央把手）",en:"Split view: left A = baseline, right B = with measures (drag the handle)"},ofFlooded:{zh:"占淹没面积",en:"of flooded area"},bldRule:{zh:"周边最大水深 > 0.15 m",en:"max depth nearby > 0.15 m"},scrubHint:{zh:"点击或拖动跳转；← → 键逐步",en:"Click or drag to seek; arrow keys step"},noMetrics:{zh:"模拟开始后显示",en:"Shown once the run starts"},waterNow:{zh:"当前水深",en:"Depth now"},waterMax:{zh:"最大水深",en:"Max depth"},legendNow:{zh:"水深 · 当前",en:"Water depth · now"},legendMax:{zh:"最大水深 · 整个事件 · ≥ 0.1",en:"Max depth · whole event · ≥ 0.1"},waterMaxHint:{zh:"显示到目前为止每格达到过的最大水深（跑完整个事件即为全事件最大），0.1 m 以下不画",en:"Highest depth each cell has reached so far (the whole-event maximum once the run is complete); below 0.1 m is not drawn"},lg_rise:{zh:"上涨中（亮、脉动）",en:"Rising (lit, pulsing)"},lg_recede:{zh:"退水中（暗、浑）",en:"Receding (dull, muddy)"},lg_contour:{zh:"等深线 0.1–2 m",en:"Depth contours 0.1–2 m"},lg_trace:{zh:"退水痕迹",en:"Dried after flooding"},lg_edge:{zh:"湿区边界",en:"Wet / dry edge"},lg_ug:{zh:"地库透视（填充 = 灌入深度）",en:"Basement X-ray (fill = depth inside)"},camBird:{zh:"鸟瞰（全场景）",en:"Bird's-eye (whole scene)"},camStreet:{zh:"街景视角（最严重水浸点）",en:"Street view (worst spot)"},camFollow:{zh:"跟随最严重水浸点",en:"Follow the worst spot"},exag:{zh:"竖向夸张（地形、建筑、水体）",en:"Vertical exaggeration (terrain, buildings, water)"},landmarks:{zh:"地标（地点、港铁站、医院、商场、码头）",en:"Landmarks (places, MTR, hospitals, malls, piers)"},shadows:{zh:"日照阴影（建筑与地形）",en:"Sun shadows (buildings and terrain)"},trendUp:{zh:"水量上涨",en:"Rising"},trendDown:{zh:"水量消退",en:"Receding"},trendFlat:{zh:"水量平稳",en:"Steady"},trendTip:{zh:"陆上水量的变化速率（街道与空地格）",en:"Rate of change of water on land (street and open cells)"},pins:{zh:"钉点时间序列",en:"Pinned points"},pin:{zh:"钉点",en:"Pin"},pinHint:{zh:"在地图上点一下放置钉点（Esc 取消）；放下后会从头重跑以补齐整条曲线",en:"Click the map to drop a pin (Esc cancels); the run restarts from the beginning to fill its whole curve"},pinEmpty:{zh:"在地图上任意位置放一个钉点，看它在整个事件里的水深变化，并与潮位、雨量对照。",en:"Drop a pin anywhere on the map to follow its water depth through the event, against sea level and rainfall."},pinAdd:{zh:"放置钉点",en:"Drop a pin"},exportCsv:{zh:"导出 CSV",en:"Export CSV"},pinNow:{zh:"当前",en:"now"},pinMax:{zh:"最大",en:"max"},pinDepth:{zh:"水深 (m)",en:"Depth (m)"},pinRerun:{zh:"放针后从头重跑补齐曲线；参数或措施改变时曲线随之重算",en:"Dropping a pin re-runs from the start to fill the curve; changing parameters or measures recomputes it"},under:{zh:"偏低",en:"Under"},over:{zh:"偏高",en:"Over"},unrep:{zh:"数据层无法表达",en:"Not in data"},valHead:{zh:"报道深度不是实测：B = 有物理参照 ±0.3 m，C = 按「水浸 / 严重水浸」等级填数 ±50%，D = 推估。模拟值取地点 60 m 内街道格的最大水深；地库点取地库水深（流入体积 ÷ 楼面面积）。点一行看依据与模型备注。",en:"Reported depths are not measurements: B = physical reference ±0.3 m, C = filled from a severity class ±50%, D = inferred. Simulated = max depth over street cells within 60 m; basement points use the basement depth (inflow volume ÷ floor area). Click a row for the basis and model notes."},basis:{zh:"依据",en:"Basis"},modelNotes:{zh:"模型备注",en:"Model note"},source:{zh:"出处",en:"Source"},sampling:{zh:"取样",en:"Sampling"},ugDepth:{zh:"地库水深（流入体积 ÷ 楼面面积）",en:"Basement depth (inflow volume ÷ floor area)"},streetDepth:{zh:"60 m 内街道格最大水深",en:"max street depth within 60 m"},snapped:{zh:"取样点已吸附到 {d} m 外的最低街道格",en:"sample point snapped {d} m to the lowest street cell"},bermNote:{zh:"报道位置是 {z} mPD 的河畔阶地，地形数据里没有这一层",en:"reported at a {z} mPD riverside berm that the terrain data does not contain"},gradeB:{zh:"B：有物理参照",en:"B: physical reference"},gradeC:{zh:"C：等级描述",en:"C: severity class"},gradeD:{zh:"D：推估",en:"D: inferred"},estimated:{zh:"推估",en:"est."}};let ac="zh";function zb(i){ac=i}function Ns(){return ac}function O(i){const e=Ob[i];return e?e[ac]:i}function $(i,e){return ac==="zh"?i:e}var vo,nn,dh,lp,Gl=0,a0=[],ln=Pt,cp=ln.__b,hp=ln.__r,up=ln.diffed,dp=ln.__c,fp=ln.unmount,pp=ln.__;function Yu(i,e){ln.__h&&ln.__h(nn,i,Gl||e),Gl=0;var t=nn.__H||(nn.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function ya(i){return Gl=1,Bb(l0,i)}function Bb(i,e,t){var n=Yu(vo++,2);if(n.t=i,!n.__c&&(n.__=[l0(void 0,e),function(o){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,o);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=nn,!nn.__f)){var s=function(o,l,c){if(!n.__c.__H)return!0;var u=!1,d=n.__c.props!==o;if(n.__c.__H.__.some(function(p){if(p.__N){u=!0;var v=p.__[0];p.__=p.__N,p.__N=void 0,v!==p.__[0]&&(d=!0)}}),r){var h=r.call(this,o,l,c);return u?h||d:h}return!u||d};nn.__f=!0;var r=nn.shouldComponentUpdate,a=nn.componentWillUpdate;nn.componentWillUpdate=function(o,l,c){if(this.__e){var u=r;r=void 0,s(o,l,c),r=u}a&&a.call(this,o,l,c)},nn.shouldComponentUpdate=s}return n.__N||n.__}function rr(i,e){var t=Yu(vo++,3);!ln.__s&&o0(t.__H,e)&&(t.__=i,t.u=e,nn.__H.__h.push(t))}function Hi(i){return Gl=5,Ku(function(){return{current:i}},[])}function Ku(i,e){var t=Yu(vo++,7);return o0(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function Hb(){for(var i;i=a0.shift();){var e=i.__H;if(i.__P&&e)try{e.__h.some(Pl),e.__h.some(gu),e.__h=[]}catch(t){e.__h=[],ln.__e(t,i.__v)}}}ln.__b=function(i){nn=null,cp&&cp(i)},ln.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),pp&&pp(i,e)},ln.__r=function(i){hp&&hp(i),vo=0;var e=(nn=i.__c).__H;e&&(dh===nn?(e.__h=[],nn.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Pl),e.__h.some(gu),e.__h=[],vo=0)),dh=nn},ln.diffed=function(i){up&&up(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(a0.push(e)!==1&&lp===ln.requestAnimationFrame||((lp=ln.requestAnimationFrame)||Vb)(Hb)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),dh=nn=null},ln.__c=function(i,e){e.some(function(t){try{t.__h.some(Pl),t.__h=t.__h.filter(function(n){return!n.__||gu(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],ln.__e(n,t.__v)}}),dp&&dp(i,e)},ln.unmount=function(i){fp&&fp(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.some(function(n){try{Pl(n)}catch(s){e=s}}),t.__H=void 0,e&&ln.__e(e,t.__v))};var mp=typeof requestAnimationFrame=="function";function Vb(i){var e,t=function(){clearTimeout(n),mp&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);mp&&(e=requestAnimationFrame(t))}function Pl(i){var e=nn,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),nn=e}function gu(i){var e=nn;i.__c=i.__(),nn=e}function o0(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function l0(i,e){return typeof e=="function"?e(i):e}var Gb=Symbol.for("preact-signals");function Zu(){if(ar>1)ar--;else{var i,e=!1;for(function(){var s=$l;for($l=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var a=r.t;a!==void 0;a=a.x)a.i===s.i&&(a.i=r.i);s=s.o}}();ao!==void 0;){var t=ao;for(ao=void 0,Wl++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&h0(t))try{t.c()}catch(s){e||(i=s,e=!0)}t=n}}if(Wl=0,ar--,e)throw i}}var ro,jt=void 0;function oc(i){var e=jt,t=ro;jt=void 0,ro=void 0;try{return i()}finally{jt=e,ro=t}}var ao=void 0,ar=0,Wl=0,gp=0,$l=void 0,Xl=0;function c0(i){if(jt!==void 0){var e=i.n;if(e===void 0||e.t!==jt)return e={i:0,S:i,p:jt.s,n:void 0,t:jt,e:void 0,x:void 0,r:e},jt.s!==void 0&&(jt.s.n=e),jt.s=e,i.n=e,32&jt.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=jt.s,e.n=void 0,jt.s.n=e,jt.s=e),e}}function Ln(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Ln.prototype.brand=Gb;Ln.prototype.h=function(){return!0};Ln.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:oc(function(){var n;(n=e.W)==null||n.call(e)}))};Ln.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&oc(function(){var s;(s=e.Z)==null||s.call(e)}))}};Ln.prototype.subscribe=function(i){var e=this;return Qu(function(){var t=e.value;oc(function(){return i(t)})},{name:"sub"})};Ln.prototype.valueOf=function(){return this.value};Ln.prototype.toString=function(){return this.value+""};Ln.prototype.toJSON=function(){return this.value};Ln.prototype.peek=function(){var i=this;return oc(function(){return i.value})};Object.defineProperty(Ln.prototype,"value",{get:function(){var i=c0(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(Wl>100)throw new Error("Cycle detected");(function(t){ar!==0&&Wl===0&&t.l!==gp&&(t.l=gp,$l={S:t,v:t.v,i:t.i,o:$l})})(this),this.v=i,this.i++,Xl++,ar++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Zu()}}}});function Xe(i,e){return new Ln(i,e)}function h0(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function u0(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function d0(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function pr(i,e){Ln.call(this,void 0,e),this.x=i,this.s=void 0,this.g=Xl-1,this.f=4}pr.prototype=new Ln;pr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Xl))return!0;if(this.g=Xl,this.f|=1,this.i>0&&!h0(this))return this.f&=-2,!0;var i=jt;try{u0(this),jt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return jt=i,d0(this),this.f&=-2,!0};pr.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Ln.prototype.S.call(this,i)};pr.prototype.U=function(i){if(this.t!==void 0&&(Ln.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};pr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(pr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=c0(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Wb(i,e){return new pr(i,e)}function f0(i){var e=i.j;if(i.j=void 0,typeof e=="function"){ar++;var t=jt;jt=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,Ju(i),n}finally{jt=t,Zu()}}}function Ju(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,f0(i)}function $b(i){if(jt!==this)throw new Error("Out-of-order effect");d0(this),jt=i,this.f&=-2;try{8&this.f&&Ju(this)}finally{Zu()}}function Sa(i,e){this.x=i,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,ro&&ro.push(this)}Sa.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{i()}};Sa.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,f0(this),u0(this),ar++;var i=jt;return jt=this,$b.bind(this,i)};Sa.prototype.N=function(){2&this.f||(this.f|=2,this.u=ao,ao=this)};Sa.prototype.d=function(){this.f|=8,1&this.f||Ju(this)};Sa.prototype.dispose=function(){this.d()};function Qu(i,e){var t=new Sa(i,e);try{t.c()}catch(s){throw t.d(),s}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var ml;function wa(i,e){Pt[i]=e.bind(null,Pt[i]||function(){})}function jl(i){if(ml){var e=ml;ml=void 0,e()}ml=i&&i.S()}function p0(i){var e=this,t=i.data,n=jb(t);n.value=t;var s=Ku(function(){for(var r=e.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return e.__$u.c=function(){var a,o=e.__$u.S(),l=s.value;o(),qm(l)||((a=e.base)==null?void 0:a.nodeType)!==3?(e.__$f|=1,e.setState({})):e.base.data=l},Wb(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}p0.displayName="_st";Object.defineProperties(Ln.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:p0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});wa("__b",function(i,e){if(typeof e.type=="string"){var t,n=e.props;for(var s in n)if(s!=="children"){var r=n[s];r instanceof Ln&&(t||(e.__np=t={}),t[s]=r,n[s]=r.peek())}}i(e)});wa("__r",function(i,e){i(e),jl();var t,n=e.__c;n&&(n.__$f&=-2,(t=n.__$u)===void 0&&(n.__$u=t=function(s){var r;return Qu(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),jl(t)});wa("__e",function(i,e,t,n){jl(),i(e,t,n)});wa("diffed",function(i,e){jl();var t;if(typeof e.type=="string"&&(t=e.__e)){var n=e.__np,s=e.props;if(n){var r=t.U;if(r)for(var a in r){var o=r[a];o!==void 0&&!(a in n)&&(o.d(),r[a]=void 0)}else t.U=r={};for(var l in n){var c=r[l],u=n[l];c===void 0?(c=Xb(t,l,u,s),r[l]=c):c.o(u,s)}}}i(e)});function Xb(i,e,t,n){var s=e in i&&i.ownerSVGElement===void 0,r=Xe(t);return{o:function(a,o){r.value=a,n=o},d:Qu(function(){var a=r.value.value;n[e]!==a&&(n[e]=a,s?i[e]=a:a?i.setAttribute(e,a):i.removeAttribute(e))})}}wa("unmount",function(i,e){if(typeof e.type=="string"){var t=e.__e;if(t){var n=t.U;if(n){t.U=void 0;for(var s in n){var r=n[s];r&&r.d()}}}}else{var a=e.__c;if(a){var o=a.__$u;o&&(a.__$u=void 0,o.d())}}i(e)});wa("__h",function(i,e,t,n){(n<3||n===9)&&(e.__$f|=2),i(e,t,n)});so.prototype.shouldComponentUpdate=function(i,e){if(this.__R)return!0;var t=this.__$u,n=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(n||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var r in i)if(r!=="__source"&&i[r]!==this.props[r])return!0;for(var a in this.props)if(!(a in i))return!0;return!1};function jb(i){return Ku(function(){return Xe(i)},[])}const qb=["overview","validation","pins","forcing"],lc=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},V={lang:Xe("zh"),scenes:Xe([]),sceneId:Xe(""),events:Xe([]),eventId:Xe(""),scene:Xe(null),event:Xe(null),params:Xe(null),leftTab:Xe(null),rightTab:Xe(null),panelsOff:Xe(!1),playing:Xe(!1),speed:Xe(900),time:Xe({label:"--",frac:0}),cond:Xe(null),status:Xe(null),loading:Xe({frac:.02,text:""}),timeline:Xe(null),compare:Xe(!1),scenarios:Xe([]),scenarioId:Xe(""),abOpen:Xe(!1),flowMode:Xe("none"),active:Xe({}),waterMode:Xe("now"),exag:Xe(1),texMode:Xe("imagery"),view2d:Xe(!0),fx:Xe(!1),baked:Xe(!1),seeking:Xe(!1),pointCard:Xe(null),showMax:Xe(!1),showFac:Xe(!0),showLandmarks:Xe(!0),showMeasureLabels:Xe(!1),fine:Xe(!0),shadows:Xe(!0),metrics:Xe(null),baseMetrics:Xe(null),trend:Xe(null),hotspots:Xe([]),validation:Xe({points:[],m:null}),facilities:Xe({m:null,base:null}),charts:Xe(null),chartCursor:Xe(0),pins:Xe({list:[],t:[],sel:null,f:null}),measures:Xe([]),selMeasure:Xe(null),dirty:Xe(!1),devSave:Xe(!1),draft:Xe({n:0,len:0}),tool:Xe(null),newRole:Xe("whatif"),snap:Xe(!0),measureParams:Xe({wall:{height:1.5,rate:0,capacity:0,factor:1,radius:0,diameter:0},sandbag:{height:.6,rate:0,capacity:0,factor:1,radius:0,diameter:0},pump:{height:0,rate:2,capacity:0,factor:1,radius:30,diameter:0},tank:{height:0,rate:0,capacity:3e4,factor:1,radius:80,diameter:0},drain:{height:0,rate:0,capacity:0,factor:2,radius:150,diameter:0},culvert:{height:0,rate:0,capacity:0,factor:1,radius:0,diameter:1.2},pipe:{height:0,rate:0,capacity:0,factor:1,radius:0,diameter:.9}})},Yb=[60,300,900,1800,3600];var Kb=0;function g(i,e,t,n,s,r){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var c={type:i,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Kb,__i:-1,__u:0,__source:s,__self:r};if(typeof i=="function"&&(a=i.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return Pt.vnode&&Pt.vnode(c),c}let Ie;function Zb(i){Ie=i}const vu={play:'<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" stroke="none"/>',reset:'<path d="M3 12a9 9 0 1 0 2.6-6.4"/><path d="M3 4v5h5"/>',compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/>',orbit:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/>',tour:'<path d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="m17 10 5-2v8l-5-2"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',panels:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',flow:'<path d="M3 8h9a3 3 0 1 0-3-3"/><path d="M3 12h13a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',arrows:'<path d="M3 12h16"/><path d="m14 6 6 6-6 6"/>',peak:'<path d="m3 20 6-11 4 6 2-3 6 8z"/><path d="M13 4v3M10.5 5.5l1.5 1.5M15.5 5.5 14 7"/>',flyto:'<path d="m3 11 18-8-8 18-2-8z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="m5 12 4 4L19 7"/>',wall:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 14h18M9 5v5M15 10v4M9 14v5"/>',sandbag:'<path d="M4 18h16"/><path d="M6 18a3 3 0 0 1 6 0M12 18a3 3 0 0 1 6 0M9 13a3 3 0 0 1 6 0"/>',pump:'<circle cx="12" cy="12" r="8"/><path d="M12 4v8l5.5 3"/>',tank:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',drain:'<path d="M7 3v6a5 5 0 0 0 10 0V3"/><path d="M12 14v7M8 21h8"/>',culvert:'<path d="M3 12h18"/><path d="M6 8a4 4 0 0 0 0 8M18 8a4 4 0 0 1 0 8"/>',pipe:'<path d="M4 7h9a4 4 0 0 1 4 4v9"/><path d="M4 11h9"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',wave:'<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 2 1.5 2 1.5"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',upload:'<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',undo:'<path d="M4 10h11a5 5 0 0 1 0 10h-3"/><path d="m8 6-4 4 4 4"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',magnet:'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 3h4v8H6M14 3h4v8h-4"/>',chev:'<path d="m6 9 6 6 6-6"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',shield:'<path d="M12 21s7-3 7-9V5l-7-2-7 2v7c0 6 7 9 7 9z"/><path d="m9 12 2 2 4-4"/>',bird:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="m12 8 4 4-4 4-4-4z"/>',street:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',pin:'<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',up:'<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',down:'<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/>',hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/>',mtr:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-3M15 21l-1.5-3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>',ferry:'<path d="M3 17c2 2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M9 9V5h6v4"/>',bus:'<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',carpark:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/>',power:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',school:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',elderly:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',mall:'<path d="M6 7h12l1 14H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',fire:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12a7 7 0 0 0 7 7z"/>',police:'<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/>',community:'<path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6z"/>',water:'<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>'},vp=vu;function m0(i,e=16,t=""){const n=vu[i]??vu.info;return`<svg class="ic ${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>`}const _p=[.1,.3,.5,1,2],Jb=[.05,.2,.4,.75,1.5,2.6],ed=()=>Ns()==="zh"?["浅","踝","膝","腰","胸","一层"]:["shallow","ankle","knee","waist","chest","floor"],g0=i=>{let e=0;for(;e<_p.length&&i>=_p[e];)e++;return e},ba=Xm,ql=i=>{const e=/^(.*?)\s*[（(]([^（）()]*)[）)]\s*$/.exec(i);return e&&e[1]?[e[1],e[2]]:[i,""]},Qb=i=>{const e=i.search(/[：:]/);return e>0?[i.slice(0,e),i.slice(e+1).trim()]:[i,""]},v0=i=>/black/i.test(i)?"black":/red|no\. ?(9|10)\b|signal no\. ?(9|10)|hurricane/i.test(i)?"red":/amber|no\. ?[678]\b|signal no\. ?[678]/i.test(i)?"amber":"",oo=i=>`#${i.toString(16).padStart(6,"0")}`,ra=Object.fromEntries(["hospital","mtr","ferry","bus","carpark","power","school","elderly","mall","fire","police","community","water"].map(i=>[i,m0(i,14)]));ra.underground=m0("carpark",14);function He({name:i,size:e=16,cls:t=""}){return g("svg",{class:`ic ${t}`,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",dangerouslySetInnerHTML:{__html:vp[i]??vp.info}})}function rn({title:i,hint:e,n:t,children:n,id:s}){return g("section",{class:"blk",id:s,children:[g("div",{class:"blk-h",children:[g("span",{class:"micro",children:i}),g("span",{class:"hint",children:e??""}),t!==void 0&&g("span",{class:"n",children:t})]}),n]})}function _0({text:i}){const[e,t]=ql(i);return g(ht,{children:[e,t&&g("small",{children:t})]})}function rs({id:i,label:e,checked:t,onChange:n}){return g("label",{class:"sw",for:i,children:[g("span",{children:g(_0,{text:e})}),g("input",{type:"checkbox",class:"switch",id:i,checked:t,onChange:s=>n(s.currentTarget.checked)})]})}function x0({id:i,label:e,value:t,min:n,max:s,step:r,fmt:a,onInput:o,onCommit:l,changed:c}){const u=(t-n)/(s-n)*100;return g("div",{class:"fr",children:[g("div",{class:"fr-top",children:[g("label",{for:i,children:g(_0,{text:e})}),g("span",{class:`val ${c?"changed":""}`,id:i.replace("sl_","sv_"),children:a(t)})]}),g("input",{type:"range",class:"range",id:i,min:n,max:s,step:r,value:t,style:{"--p":`${u}%`},onInput:d=>o(+d.currentTarget.value),onChange:d=>l?.(+d.currentTarget.value)})]})}function ir({items:i,value:e,onPick:t,cls:n="",id:s}){return g("div",{class:`seg ${n}`,id:s,role:"group",children:i.map(([r,a])=>g("button",{class:r===e?"on":"","aria-pressed":r===e,"data-v":String(r),onClick:()=>t(r),children:a},String(r)))})}function M0({html:i,cls:e=""}){return g("span",{class:e,style:{display:"contents"},dangerouslySetInnerHTML:{__html:i}})}let Wa=null;const _u=()=>(Wa||(Wa=document.createElement("div"),Wa.className="tip",document.body.appendChild(Wa)),Wa);function y0(){const[i,e]=ya(!1),t=Hi(null);return rr(()=>{if(!i)return;const n=r=>{t.current&&!t.current.contains(r.target)&&e(!1)},s=r=>{r.key==="Escape"&&e(!1)};return document.addEventListener("pointerdown",n),document.addEventListener("keydown",s),()=>{document.removeEventListener("pointerdown",n),document.removeEventListener("keydown",s)}},[i]),{open:i,setOpen:e,ref:t}}const e1=i=>i?`${i.start.replace("T"," ")} → ${i.end.slice(5).replace("T"," ")}`:"";function t1(){const{open:i,setOpen:e,ref:t}=y0(),n=V.scenes.value,s=n.find(a=>a.id===V.sceneId.value),r=n.filter(a=>!a.hidden||a.id===V.sceneId.value);return g("div",{class:"pk-wrap",ref:t,children:[g("button",{class:`picker ${i?"open":""}`,id:"scenePicker","aria-haspopup":"listbox","aria-expanded":i,onClick:()=>e(!i),children:[g("span",{class:"pk-txt",children:[g("span",{class:"pk-lab",children:O("sceneLbl")}),g("span",{class:"pk-val",children:s?$(s.name_zh,s.name_en):"—"})]}),g(He,{name:"chev",size:14,cls:"chev"})]}),i&&g("div",{class:"popover",role:"listbox",style:{width:"440px"},children:r.map(a=>g("button",{class:`opt ${a.id===V.sceneId.value?"on":""}`,role:"option","aria-selected":a.id===V.sceneId.value,onClick:()=>{e(!1),a.id!==V.sceneId.value&&Ie.onSceneChange(a.id)},children:[g("span",{class:"thumb",style:{backgroundImage:`url(scenes/${a.id}/preview.jpg)`}}),g("span",{children:[g("div",{class:"o-t",children:$(a.name_zh,a.name_en)}),g("div",{class:"o-d",children:$(a.blurb_zh,a.blurb_en)}),g("div",{class:"o-m",children:[a.cols,"×",a.rows," · ",a.res," m ",$("网格","grid")]})]})]},a.id))})]})}function n1(){const{open:i,setOpen:e,ref:t}=y0(),n=V.events.value,s=n.find(r=>r.id===V.eventId.value);return g("div",{class:"pk-wrap",ref:t,children:[g("button",{class:`picker ${i?"open":""}`,id:"eventPicker","aria-haspopup":"listbox","aria-expanded":i,onClick:()=>e(!i),children:[g("span",{class:"pk-txt",children:[g("span",{class:"pk-lab",children:[O("eventLbl"),s&&g("span",{class:`kind ${s.kind}`,children:O(s.kind)})]}),g("span",{class:"pk-val",children:s?$(s.name_zh,s.name_en):"—"})]}),g(He,{name:"chev",size:14,cls:"chev"})]}),i&&g("div",{class:"popover",role:"listbox",style:{width:"400px"},children:n.map(r=>g("button",{class:`opt ${r.id===V.eventId.value?"on":""}`,role:"option","aria-selected":r.id===V.eventId.value,onClick:()=>{e(!1),r.id!==V.eventId.value&&Ie.onEventChange(r.id)},children:[g("span",{class:`k-dot ${r.kind}`,children:g(He,{name:r.kind==="rainstorm"?"water":r.kind==="fictional"?"flag":"wave",size:17})}),g("span",{children:[g("div",{class:"o-t",children:$(r.name_zh,r.name_en)}),g("div",{class:"o-m",children:[O(r.kind)," · ",e1(r.window)]})]})]},r.id))})]})}function i1(){const i=V.abOpen.value,e=Hi(null),t=u=>{V.abOpen.value=u};rr(()=>{if(!i)return;const u=h=>{e.current&&!e.current.contains(h.target)&&!h.target.closest?.("[data-ab-open]")&&t(!1)},d=h=>{h.key==="Escape"&&t(!1)};return document.addEventListener("pointerdown",u),document.addEventListener("keydown",d),()=>{document.removeEventListener("pointerdown",u),document.removeEventListener("keydown",d)}},[i]);const n=V.compare.value,s=V.scenarios.value,r=V.scenarioId.value,a=s.filter(u=>!u.generic),o=s.filter(u=>u.generic),l=()=>{n?t(!i):(Ie.onCompare(),t(!0))},c=u=>g("button",{class:`opt ab ${u.id===r?"on":""}`,role:"option","aria-selected":u.id===r,"data-scn":u.id,onClick:()=>{t(!1),(u.id!==r||!n)&&Ie.onScenario(u.id)},children:[g("span",{children:[g("div",{class:"o-t",children:$(u.zh,u.en)}),g("div",{class:"o-d",children:$(u.desc_zh,u.desc_en)}),g("div",{class:"ab-sides",children:[g("span",{class:"ab-k",children:"A"}),g("span",{children:$(u.A.zh,u.A.en)}),g("span",{class:"ab-k b",children:"B"}),g("span",{children:$(u.B.zh,u.B.en)})]})]}),u.id===r&&n?g(He,{name:"check",size:15,cls:"o-check"}):g("span",{})]},u.id);return g("div",{class:"pk-wrap",ref:e,children:[g("button",{id:"btnCompare",class:`btn lbl-hide ${n?"on":""}`,"aria-haspopup":"listbox","aria-expanded":i,"data-tip":i?void 0:$("情景对比：左右分屏比较两个情景（拖动把手）","Scenario compare: two scenarios side by side (drag the handle)"),"data-tip-pos":"bottom",onClick:l,children:[g(He,{name:"compare"}),g("span",{children:$("A/B 对比","A/B compare")}),g(He,{name:"chev",size:13,cls:"chev"})]}),i&&g("div",{class:"popover ab-pop",role:"listbox","aria-label":$("情景对比","Scenario compare"),children:[g("div",{class:"ab-pop-h",children:[g("span",{class:"micro",children:$("情景对比 · 左 A / 右 B","Scenario compare · left A / right B")}),g("span",{class:"grow"}),n&&g("button",{class:"btn sm ghost",id:"btnCompareOff",onClick:()=>{t(!1),Ie.onCompare()},children:[g(He,{name:"x",size:13}),$("关闭对比","Exit compare")]})]}),a.length>0&&g("div",{class:"ab-grp",children:$("本场景 · 有记录的情景","This scene · documented")}),a.map(c),g("div",{class:"ab-grp",children:$("通用","Generic")}),o.map(c),g("p",{class:"caveat ab-foot",children:[g(He,{name:"info",size:12}),g("span",{children:$("两边从头同时重算；气候情景是假设，不是预报。","Both sides re-run from the start; climate pairs are what-ifs, not forecasts.")})]})]})]})}function s1(){const i=V.active.value,e=V.flowMode.value,t=e==="particles"?"flowParticles":e==="arrows"?"flowArrows":"flowNone";return g("header",{class:"topbar float",children:[g("div",{class:"brand",children:[g("span",{class:"mark",children:g("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[g("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),g("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),g("div",{children:[g("div",{class:"nm",children:"HK Flood Lab"}),g("div",{class:"sub",children:$("香港洪涝实验室 · 数字孪生","Flood digital twin · HK")})]})]}),g("span",{class:"vsep"}),g(t1,{}),g("span",{class:"crumb-sep",children:"/"}),g(n1,{}),g("span",{class:"grow"}),g("div",{class:"tb-group",children:g(ir,{id:"viewSeg",cls:"dark",items:[["2d","2D"],["3d","3D"]],value:V.view2d.value?"2d":"3d",onPick:n=>Ie.onView2D(n==="2d")})}),g("span",{class:"vsep"}),g("div",{class:"tb-group",children:[g(ir,{id:"waterSeg",cls:"dark",items:[["now",O("waterNow")],["max",O("waterMax")]],value:V.waterMode.value,onPick:n=>Ie.onWaterMode(n)}),g("button",{id:"btnPeak",class:"btn lbl-hide","data-tip":$("跳到峰值时刻并飞到最严重水浸点","Jump to the peak and fly to the worst spot"),"data-tip-pos":"bottom",onClick:()=>Ie.onPeak(),children:[g(He,{name:"peak"}),g("span",{children:O("peak")})]})]}),g("span",{class:"vsep"}),g("div",{class:"tb-group",children:[g("button",{id:"btnPin",class:`btn lbl-hide ${i.btnPin?"on":""}`,"data-tip":O("pinHint"),"data-tip-pos":"bottom",onClick:()=>Ie.onPinMode(),children:[g(He,{name:"pin"}),g("span",{children:O("pin")})]}),g("button",{id:"btnFlow",class:`btn lbl-hide ${e!=="none"?"on":""}`,"data-tip":`${O(t)} · ${$("点击切换","click to cycle")}`,"data-tip-pos":"bottom",onClick:()=>Ie.onFlowMode(),children:[g(He,{name:e==="arrows"?"arrows":"flow"}),g("span",{children:O(t)})]}),g(i1,{})]}),g("span",{class:"vsep"}),g("div",{class:"tb-group",children:[g("button",{id:"btnPanels",class:`btn icon ${V.panelsOff.value,""}`,"data-tip":$("显示/隐藏面板","Toggle panels"),"data-tip-pos":"bottom",onClick:()=>Ie.onPanels(),children:g(He,{name:"panels"})}),g("button",{id:"btnLang",class:"btn","data-tip":Ns()==="zh"?"English":"中文","data-tip-pos":"bottom",onClick:()=>Ie.onLang(),children:Ns()==="zh"?"EN":"中文"})]})]})}const S0={wall:"wall",sandbag:"sandbag",pump:"pump",tank:"tank",drain:"drain",culvert:"culvert",pipe:"pipe"},r1=i=>i.name?Ns()==="en"&&i.name_en?i.name_en:i.name:i.kind==="wall"||i.kind==="sandbag"?`${O(i.kind)} ${i.height} m`:i.kind==="pump"?`${O("pump")} ${i.rate} m³/s`:i.kind==="tank"?`${O("tank")} ${i.capacity} m³`:i.kind==="culvert"||i.kind==="pipe"?`${O(i.kind)} ⌀${i.diameter??1} m`:(i.factor??2)<1?`${O("drainBlocked")} ×${i.factor}`:`${O("drainUp")} ×${i.factor}`;function a1(){const i=V.tool.value,e=V.measures.value,t=V.selMeasure.value,n=[["wall",O("wall")],["sandbag",O("sandbag")],["pump",O("pump")],["tank",O("tank")],["drain",O("drainUp")],["culvert",O("culvert")],["pipe",O("pipe")]],s=[["whatif",O("role_whatif")],["record",O("role_record")],["temporary",O("role_temporary")]],r=e.filter(a=>(a.m.role??"whatif")==="whatif"&&!(a.m.scenario_only&&!a.eff)).reduce((a,o)=>a+o.cost,0);return g(ht,{children:[g("div",{class:"p-head",children:[g("div",{class:"grow",children:[g("div",{class:"p-t",children:O("measures")}),g("div",{class:"p-s",children:$("画在地图上；情景措施不进入 A/B 基线","Draw on the map; what-if measures are left out of the A/B baseline")})]}),g("button",{class:"btn sm icon ghost",onClick:()=>{V.leftTab.value=null},children:g(He,{name:"x",size:14})})]}),g("div",{class:"p-body",children:[g(rn,{title:$("绘制","Draw"),children:[g("div",{class:"tools",children:n.map(([a,o])=>g("button",{"data-tool":a,class:`tool ${i===a?"on":""}`,"aria-pressed":i===a,title:o,onClick:()=>Ie.onMeasureTool(i===a?null:a),children:[g(He,{name:S0[a],size:18}),g("span",{children:o.split(" / ")[0]})]},a))}),g("div",{class:"row",children:[g("label",{for:"selRole",children:O("newRole")}),g("select",{id:"selRole",class:"select",style:{width:"auto",flex:1},value:V.newRole.value,onChange:a=>{V.newRole.value=a.currentTarget.value},children:s.map(([a,o])=>g("option",{value:a,children:o},a))})]}),i&&g(o1,{kind:i}),i&&g(l1,{kind:i}),!i&&g("div",{class:"row",style:{justifyContent:"flex-end"},children:[g("button",{id:"btnSnap",class:`btn sm ${V.snap.value?"on":""}`,title:O("snapShore"),onClick:()=>{V.snap.value=!V.snap.value,Ie.onSnapToggle(V.snap.value)},children:[g(He,{name:"magnet",size:13}),$("吸附岸线","Snap")]}),g("button",{id:"btnClearM",class:"btn sm",title:O("clearNote"),onClick:()=>Ie.onClearMeasures(),children:O("clear")})]})]}),g(rn,{title:$("措施列表","Measures"),n:e.length,children:[e.length?g("div",{class:"mlist",id:"measureList",children:e.map(a=>g(h1,{it:a,sel:a.m.id===t},a.m.id))}):g("div",{class:"empty",children:[g(He,{name:"inbox",size:16}),g("span",{children:O("noMeasures")})]}),r>0&&g("div",{class:"total",children:[g("span",{children:O("costNote")}),g("b",{children:["HK$",(r/1e6).toFixed(1),"M"]})]})]}),g(rn,{title:$("文件","File"),children:g(d1,{})})]})]})}function o1({kind:i}){const e=V.measureParams.value[i],t=(s,r)=>{V.measureParams.value={...V.measureParams.value,[i]:{...e,[s]:r}},Ie.onMeasureParam(i,s,r)},n=(s,r,a,o,l,c)=>g(x0,{id:`mp_${s}`,label:r,value:e[s],min:a,max:o,step:l,fmt:u=>`${u} ${c}`,onInput:u=>t(s,u)});return g("div",{style:{marginTop:"6px"},children:[(i==="wall"||i==="sandbag")&&n("height",O("wallHeight"),.3,4,.1,"m"),i==="pump"&&g(ht,{children:[n("rate",O("pumpRate"),.2,10,.2,"m³/s"),n("radius",$("集水半径","Catch radius"),10,100,5,"m")]}),i==="tank"&&g(ht,{children:[n("capacity",O("tankCap"),2e3,15e4,1e3,"m³"),n("radius",$("半径（单点放置时）","Radius (point mode)"),30,300,10,"m")]}),i==="drain"&&g(ht,{children:[n("factor",O("drainFactor"),0,6,.5,"×"),n("radius",$("半径（单点放置时）","Radius (point mode)"),50,500,10,"m")]}),(i==="culvert"||i==="pipe")&&n("diameter",O("diameter"),.3,3,.1,"m")]})}function l1({kind:i}){const e=V.draft.value,t=i==="pump"?O("hintPoint"):i==="culvert"||i==="pipe"?O("hintTwo"):O("hintDraw")+(i==="tank"||i==="drain"?$(" 单击一次即为圆形区域。"," A single click places a circular area."):""),n=e.n?` ${$(`已放 ${e.n} 个点`,`${e.n} vertices`)}${e.len?` · ${e.len.toFixed(0)} m`:""}`:"",s=V.snap.value&&(i==="wall"||i==="sandbag")?` ${O("snapOn")}`:"";return g(ht,{children:[g("div",{class:"draw-hint",id:"measureHint",children:[g(He,{name:"info",size:13}),g("span",{children:t+n+s})]}),g("div",{class:"drawbar",children:[g("button",{id:"btnFinish",class:"btn sm primary",onClick:()=>Ie.onFinishDraft(),children:[g(He,{name:"check",size:13}),O("finish")]}),g("button",{id:"btnUndoV",class:"btn sm icon",title:`${$("撤销上一个点","Undo last vertex")} (Backspace)`,onClick:()=>Ie.onUndoVertex(),children:g(He,{name:"undo",size:13})}),g("button",{id:"btnCancelDraft",class:"btn sm",onClick:()=>Ie.onCancelDraft(),children:O("cancel")}),g("span",{class:"grow"}),g("button",{id:"btnSnap",class:"btn sm icon",style:{background:V.snap.value?"var(--sig)":void 0},title:O("snapShore"),onClick:()=>{V.snap.value=!V.snap.value,Ie.onSnapToggle(V.snap.value)},children:g(He,{name:"magnet",size:13})})]})]})}function c1(i){const e=i.m.role??"whatif";if(e==="whatif")return i.m.scenario_only&&!i.eff?g("span",{class:"mst",children:$("仅 A/B 情景","A/B pair only")}):g("span",{class:"mst cost",children:["HK$",(i.cost/1e6).toFixed(1),"M"]});if(e==="record")return i.exists?g("span",{class:"mst on",children:[O("def_built"),i.m.in_dtm?"":` · ${O("def_raised")}`]}):g("span",{class:"mst",children:i.m.in_dtm?O("def_removed"):O("def_notyet")});const t=i.m.from_h!==void 0&&i.m.to_h!==void 0?` ${i.m.from_h}h→${i.m.to_h}h`:i.m.from_h!==void 0?` ${$("第","from ")}${i.m.from_h}h${$(" 起","")}`:i.m.to_h!==void 0?` ${$("至第","until ")}${i.m.to_h}h`:"";return g("span",{class:`mst ${i.eff>0?"on":""}`,children:[i.eff>0?O("tmp_on"):O("tmp_off"),t]})}function h1({it:i,sel:e}){const t=i.m,n=t.role??"whatif",s=i.eff===0&&!(n==="record"&&i.exists),r=()=>Ie.onSelectMeasure(e?null:t.id);return g(ht,{children:[g("div",{class:`mrow ${e?"sel":""} ${s?"ghost":""}`,"data-sel":t.id,tabIndex:0,role:"button","aria-expanded":e,onClick:r,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),r())},children:[g("span",{class:`m-ic ${t.kind}`,children:g(He,{name:S0[t.kind],size:15})}),g("span",{class:"m-main",children:[g("span",{class:"m-name",children:[g("span",{children:r1(t)}),t.locked&&g("span",{title:O("fromPipeline"),children:g(He,{name:"lock",size:11})})]}),g("span",{class:"m-sub",children:[g("span",{class:`rchip ${n}`,children:O("role_"+n)}),c1(i)]})]}),g("button",{class:"btn sm icon ghost m-del","data-rm":t.id,"aria-label":O("delete"),title:O("delete"),onClick:a=>{a.stopPropagation(),Ie.onRemoveMeasure(t.id)},children:g(He,{name:"x",size:13})})]}),e&&g(u1,{m:t},JSON.stringify(t))]})}function u1({m:i}){const e=i.role??"whatif",t=o=>Ie.onUpdateMeasure(i.id,o),n=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:c})},s=o=>l=>{const c=l.currentTarget.value.trim();t({[o]:c===""?void 0:+c})},r=(o,l,c,u,d)=>g("label",{children:[l,g("span",{class:"inl",children:[g("input",{class:"input",type:"number","data-f":o,step:c,min:d,defaultValue:String(i[o]??""),onChange:s(o)})," ",u]})]}),a=(o,l,c="")=>g("label",{children:[l,g("input",{class:"input",type:"text","data-f":o,defaultValue:String(i[o]??""),placeholder:c,onChange:n(o)})]});return g("div",{class:"mform","data-form":i.id,onClick:o=>o.stopPropagation(),children:[a("name",O("f_name"),O("f_name_ph")),(i.kind==="wall"||i.kind==="sandbag")&&r("height",O("wallHeight"),.1,"m",0),i.kind==="pump"&&g(ht,{children:[r("rate",O("pumpRate"),.1,"m³/s",0),!i.cells?.length&&r("radius",$("集水半径","Catch radius"),5,"m",5)]}),i.kind==="tank"&&g(ht,{children:[r("capacity",O("tankCap"),500,"m³",0),!(i.pts.length>=3||i.cells?.length)&&r("radius",$("半径","Radius"),10,"m",10)]}),i.kind==="drain"&&g(ht,{children:[r("factor",O("drainFactor"),.5,"×",0),!(i.pts.length>=3||i.cells?.length)&&r("radius",$("半径","Radius"),10,"m",10)]}),(i.kind==="culvert"||i.kind==="pipe")&&g(ht,{children:[r("diameter",O("diameter"),.1,"m",.3),r("manning",$("曼宁 n","Manning n"),.001,"",.005),r("invert",$("管底相对地面（负为地下）","Invert vs ground (negative = below)"),.1,"m")]}),i.kind==="pump"&&g(ht,{children:[r("on_m",$("启泵水深","Switch-on depth"),.01,"m",0),r("off_m",$("停泵水深","Switch-off depth"),.01,"m",0)]}),g("label",{children:[O("f_role"),g("select",{class:"select","data-f":"role",value:e,onChange:o=>{const l=o.currentTarget.value,c={role:l};l!=="whatif"&&!i.key&&(c.key=`${i.kind}_${Date.now().toString(36)}`),t(c)},children:["whatif","record","temporary"].map(o=>g("option",{value:o,children:O("role_"+o)},o))})]}),e==="record"&&g(ht,{children:[g("label",{children:[O("f_built"),g("input",{class:"input",type:"month","data-f":"built",defaultValue:i.built??"",onChange:n("built")})]}),g("label",{children:[O("f_removed"),g("input",{class:"input",type:"month","data-f":"removed",defaultValue:i.removed??"",onChange:n("removed")})]}),g("label",{class:"chk",children:[g("input",{type:"checkbox","data-f":"in_dtm",checked:!!i.in_dtm,onChange:o=>t({in_dtm:o.currentTarget.checked})})," ",O("f_in_dtm")]})]}),e==="temporary"&&g(ht,{children:[g("div",{class:"evs",children:[O("f_events"),V.events.value.map(o=>g("label",{class:"chk",children:[g("input",{type:"checkbox","data-ev":o.id,checked:!i.events?.length||i.events.includes(o.id),onChange:l=>{const c=l.currentTarget.closest(".mform"),u=Array.from(c.querySelectorAll("[data-ev]")),d=u.filter(h=>h.checked).map(h=>h.dataset.ev);t({events:d.length===u.length?[]:d})}})," ",$(o.name_zh,o.name_en)]},o.id))]}),g("label",{children:[O("f_window"),g("span",{class:"inl",children:[g("input",{class:"input",type:"number","data-f":"from_h",step:.5,defaultValue:i.from_h!==void 0?String(i.from_h):"",placeholder:"−∞",onChange:s("from_h")})," → ",g("input",{class:"input",type:"number","data-f":"to_h",step:.5,defaultValue:i.to_h!==void 0?String(i.to_h):"",placeholder:"+∞",onChange:s("to_h")})," h"]})]})]}),a("src",O("f_src"),O("f_src_ph")),g("label",{children:[O("f_note"),g("textarea",{class:"input","data-f":"note",rows:2,defaultValue:i.note??"",onChange:n("note")})]}),g("div",{class:"foot",children:[g("button",{class:"btn sm","data-fly":i.id,onClick:()=>{const o=i.pts[0];o&&Ie.onFlyTo(o.x,o.y)},children:[g(He,{name:"flyto",size:12}),O("flyTo")]}),g("span",{class:"mono",children:[i.cells?.length?O("geomCells"):i.pts.length>1?$(`${i.pts.length} 个顶点`,`${i.pts.length} vertices`):""," · ",O("f_key")," ",i.key??"—"]})]})]})}function d1(){const i=Hi(null),e=V.dirty.value,t=V.devSave.value,n=V.scene.value;return g(ht,{children:[g("div",{class:"files",id:"measureFiles",children:[g("button",{id:"btnSaveM",class:`btn sm ${e?"primary":""}`,onClick:()=>Ie.onSaveMeasures(),children:[g(He,{name:"save",size:13}),O(t?"save":"download")]}),g("button",{id:"btnExportM",class:"btn sm icon","aria-label":O("exportNote"),title:O("exportNote"),onClick:()=>Ie.onExportMeasures(),children:g(He,{name:"download",size:13})}),g("button",{id:"btnImportM",class:"btn sm icon","aria-label":O("importNote"),title:O("importNote"),onClick:()=>i.current?.click(),children:g(He,{name:"upload",size:13})}),g("span",{class:"grow"}),g("button",{id:"btnRevertM",class:"btn sm ghost",disabled:!e,onClick:()=>Ie.onRevertMeasures(),children:O("revert")}),g("input",{ref:i,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:s=>{const r=s.currentTarget,a=r.files?.[0];a&&Ie.onImportMeasures(a),r.value=""}})]}),g("p",{class:"caveat",children:[t?$(`保存到 web/public/scenes/${n?.id}/measures.json（开发服务器写文件，提交即生效）`,`Saves web/public/scenes/${n?.id}/measures.json (the dev server writes the file; commit it)`):$("生产版只能下载 JSON，放到 web/public/scenes/<场景>/measures.json","Production build downloads the JSON; put it at web/public/scenes/<scene>/measures.json"),e?$("。有未保存的改动（已暂存在浏览器里）",". Unsaved edits (kept in this browser)"):""]})]})}const f1=[["scenario","book","scenario"],["params","sliders","params"],["layers","layers","layers"],["measures","wall","measures"]],p1=i=>{V.leftTab.value=V.leftTab.value===i?null:i,lc("hkfl.ui.left",V.leftTab.value)};function m1(){const i=V.leftTab.value,e=V.measures.value.length,t=n=>n==="scenario"?O("scenario"):n==="params"?$("参数","Params"):n==="layers"?O("layers"):$("措施","Measures");return g("div",{class:"dock",id:"left",children:[g("nav",{class:"rail float","aria-label":$("工作区","Workspaces"),children:f1.map(([n,s])=>g("button",{"data-ltab":n,class:i===n?"on":"","aria-pressed":i===n,"data-tip":i===n?$("收起","Collapse"):t(n),"data-tip-pos":"right",onClick:()=>p1(n),children:[g(He,{name:s==="book"?"info":s,size:18}),g("span",{children:t(n)}),n==="measures"&&e>0&&g("span",{class:"badge",children:e})]},n))}),i&&g("div",{class:"lpanel float",children:[i==="scenario"&&g(g1,{}),i==="params"&&g(v1,{}),i==="layers"&&g(_1,{}),i==="measures"&&g(a1,{})]})]})}function _o({title:i,sub:e}){return g("div",{class:"p-head",children:[g("div",{class:"grow",children:[g("div",{class:"p-t",children:i}),e&&g("div",{class:"p-s",children:e})]}),g("button",{class:"btn sm icon ghost","data-tip":$("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{V.leftTab.value=null,lc("hkfl.ui.left",null)},children:g(He,{name:"x",size:14})})]})}function g1(){const i=V.event.value,e=V.scene.value,[t,n]=ya(!1);if(!i||!e)return g(_o,{title:O("scenario")});const s=$(i.narrative_zh,i.narrative_en);return g(ht,{children:[g(_o,{title:O("scenario"),sub:$(e.name_zh,e.name_en)}),g("div",{class:"p-body",children:[g("section",{class:"blk",children:[g("div",{class:"ev-meta",children:[g("span",{class:`kind ${i.kind}`,children:O(i.kind)}),g("span",{class:"ev-when",children:[i.window.start.replace("T"," ")," → ",i.window.end.slice(5).replace("T"," ")," HKT"]})]}),g("h2",{class:"ev-title",children:$(i.name_zh,i.name_en)}),g("p",{class:`ev-narr ${t?"":"clamp"}`,children:s}),s.length>90&&g("button",{class:"linkish",onClick:()=>n(!t),children:O(t?"less":"more")})]}),g(rn,{title:$("事件数据","Event record"),children:g("dl",{class:"facts",children:i.facts.map(([r,a],o)=>g(ht,{children:[g("dt",{children:r}),g("dd",{children:a})]},o))})}),g(rn,{title:O("places"),n:e.pois.length,hint:$("点击飞到","click to fly"),children:[g("p",{class:"ev-narr",style:{marginBottom:"10px"},children:$(e.blurb_zh,e.blurb_en)}),g("div",{class:"chips",children:e.pois.map((r,a)=>g("button",{class:"chip","data-poi":a,onClick:()=>Ie.onFlyTo(r.x,r.y),children:[g(He,{name:"flyto",size:12}),r.name]},a))})]}),g(rn,{title:$("模型与数据","Model & data"),children:g("div",{class:"credits",children:[O("modelNote")," ",e.cols,"×",e.rows," @ ",e.res," m · DEM: ",e.dem_stats?.source??"—",g("br",{}),e.textures?.attribution??"",g("br",{}),$("建筑：Overture Maps / OpenStreetMap 贡献者","Buildings: Overture Maps / OpenStreetMap contributors")]})})]})]})}const xp={surgeScale:1,slr:0,rainScale:1,drainMmPerHour:40};function v1(){const i=V.params.value;if(!i)return g(_o,{title:O("params")});const e=(s,r)=>{V.params.value={...V.params.value,[s]:r}},t=()=>Ie.onParamChange({...V.params.value}),n=(s,r,a,o,l,c)=>g(x0,{id:`sl_${s}`,label:r,value:i[s],min:a,max:o,step:l,fmt:c,onInput:u=>e(s,u),onCommit:t,changed:xp[s]!==void 0&&Math.abs(i[s]-xp[s])>1e-6});return g(ht,{children:[g(_o,{title:O("params"),sub:$("拖动后松开即从头重算","Release a slider to re-run from the start")}),g("div",{class:"p-body",children:[g(rn,{title:O("grpCoast"),children:[n("surgeScale",O("surgeScale"),0,2,.05,s=>`×${s.toFixed(2)}`),n("waveSetup",O("waveSetup"),0,1.5,.05,s=>`+${s.toFixed(2)} m`),n("waveHs",O("waveHs"),0,5,.1,s=>`${s.toFixed(1)} m`),n("slr",O("slr"),0,1.5,.05,s=>`+${s.toFixed(2)} m`)]}),g(rn,{title:O("grpRain"),children:[n("rainScale",O("rainScale"),0,2.5,.05,s=>`×${s.toFixed(2)}`),n("drainMmPerHour",O("drain"),0,120,5,s=>`${s.toFixed(0)} mm/h`)]}),g(rn,{title:O("grpModel"),children:[g(rs,{id:"chkBld",label:O("buildingsBlock"),checked:i.buildingsBlock,onChange:s=>{V.params.value={...i,buildingsBlock:s},Ie.onParamChange({...V.params.value})}}),g(rs,{id:"chkSg",label:O("subgrid"),checked:i.subgrid,onChange:s=>{V.params.value={...i,subgrid:s},Ie.onParamChange({...V.params.value})}})]}),g(rn,{title:$("本机缓存","Browser cache"),children:[g("p",{class:"caveat",children:[g(He,{name:"info",size:12}),g("span",{children:$("每次运行的关键帧（约每小时一帧）会压缩后存进浏览器（IndexedDB，最多约 600 MB，最久未用的先清）。同一场景、事件、参数和措施再打开时直接恢复，时间轴随处可跳；改参数或措施就是另一次运行。","Keyframes of each run (about one per hour) are compressed into the browser (IndexedDB, up to about 600 MB, least recently used evicted first). The same scene, event, parameters and measures reopen from the cache and the timeline jumps anywhere; a changed parameter or measure is a new run.")})]}),g("button",{class:"btn sm",onClick:()=>Ie.onClearCache(),children:[g(He,{name:"x",size:13}),$("清空本机缓存","Clear the browser cache")]})]})]})]})}function _1(){const i=V.scene.value,e=V.flowMode.value,t=V.exag.value,n=r=>{for(let a=0;a<3&&V.flowMode.value!==r;a++)Ie.onFlowMode()},s=r=>{for(let a=0;a<4&&V.exag.value!==r;a++)Ie.onExag()};return g(ht,{children:[g(_o,{title:O("layers"),sub:$("水体、流向、标注与三维显示","Water, flow, labels and 3D")}),g("div",{class:"p-body",children:[g(rn,{title:$("水体","Water"),children:[g(ir,{cls:"full",items:[["now",O("waterNow")],["max",O("waterMax")]],value:V.waterMode.value,onPick:r=>Ie.onWaterMode(r)}),g("p",{class:"caveat",style:{marginTop:"8px"},children:[g(He,{name:"info",size:12}),g("span",{children:O("waterMaxHint")})]}),g(rs,{id:"chkMax",label:O("showMax"),checked:V.showMax.value,onChange:r=>{V.showMax.value=r,Ie.onShowMax(r)}}),g(rs,{id:"chkFine",label:$("1 m 细节（近景按 1 m 地形与连通性切边）","1 m detail (near view cut by 1 m terrain and reachability)"),checked:V.fine.value,onChange:r=>{V.fine.value=r,Ie.onFine(r)}})]}),g(rn,{title:$("流向","Flow"),children:g(ir,{cls:"full",items:[["particles",$("粒子","Particles")],["arrows",$("箭头","Arrows")],["none",$("关","Off")]],value:e,onPick:n})}),g(rn,{title:$("标注","Labels"),children:[i?.facilities?.length?g(rs,{id:"chkFac",label:O("showFac"),checked:V.showFac.value,onChange:r=>{V.showFac.value=r,Ie.onShowFacilities(r)}}):null,g(rs,{id:"chkLm",label:O("landmarks"),checked:V.showLandmarks.value,onChange:r=>{V.showLandmarks.value=r,Ie.onShowLandmarks(r)}}),g(rs,{id:"chkMl",label:$("防洪措施记录（海堤、挡水板、泵站、堵塞）","Recorded measures (seawalls, barriers, pumps, blockages)"),checked:V.showMeasureLabels.value,onChange:r=>{V.showMeasureLabels.value=r,Ie.onShowMeasureLabels(r)}})]}),g(rn,{title:$("三维","3D"),children:[g("div",{class:"row",children:[g("label",{children:$("竖向夸张","Vertical exaggeration")}),g(ir,{items:[[1,"×1"],[1.5,"×1.5"],[2,"×2"],[3,"×3"]],value:t,onPick:s})]}),g("div",{class:"row",children:[g("label",{children:$("底图","Basemap")}),g(ir,{items:[["imagery",$("卫星影像","Imagery")],["basemap",$("地图","Map")]],value:V.texMode.value,onPick:r=>{r!==V.texMode.value&&Ie.onTexToggle()}})]}),g(rs,{id:"chkSh",label:O("shadows"),checked:V.shadows.value,onChange:r=>{V.shadows.value=r,Ie.onShadows(r)}}),g(rs,{id:"chkFx",label:$("电影效果（天气、夜景、水面波光、楼面细节、闪电；仅 3D）","Cinematic effects (weather, night, glints, facade detail, lightning; 3D only)"),checked:V.fx.value,onChange:r=>Ie.onFx(r)})]})]})]})}const x1=!0,vn="u-",M1="uplot",y1=vn+"hz",S1=vn+"vt",w1=vn+"title",b1=vn+"wrap",T1=vn+"under",E1=vn+"over",A1=vn+"axis",nr=vn+"off",C1=vn+"select",R1=vn+"cursor-x",P1=vn+"cursor-y",D1=vn+"cursor-pt",L1=vn+"legend",F1=vn+"live",I1=vn+"inline",U1=vn+"series",N1=vn+"marker",Mp=vn+"label",k1=vn+"value",Ja="width",Qa="height",$a="top",yp="bottom",Gr="left",fh="right",td="#000",Sp=td+"0",ph="mousemove",wp="mousedown",mh="mouseup",bp="mouseenter",Tp="mouseleave",Ep="dblclick",O1="resize",z1="scroll",Ap="change",Yl="dppxchange",nd="--",Ta=typeof window<"u",xu=Ta?document:null,aa=Ta?window:null,B1=Ta?navigator:null;let Tt,gl;function Mu(){let i=devicePixelRatio;Tt!=i&&(Tt=i,gl&&Su(Ap,gl,Mu),gl=matchMedia(`(min-resolution: ${Tt-.001}dppx) and (max-resolution: ${Tt+.001}dppx)`),or(Ap,gl,Mu),aa.dispatchEvent(new CustomEvent(Yl)))}function li(i,e){if(e!=null){let t=i.classList;!t.contains(e)&&t.add(e)}}function yu(i,e){let t=i.classList;t.contains(e)&&t.remove(e)}function Gt(i,e,t){i.style[e]=t+"px"}function Ci(i,e,t,n){let s=xu.createElement(i);return e!=null&&li(s,e),t?.insertBefore(s,n),s}function vi(i,e){return Ci("div",i,e)}const Cp=new WeakMap;function Oi(i,e,t,n,s){let r="translate("+e+"px,"+t+"px)",a=Cp.get(i);r!=a&&(i.style.transform=r,Cp.set(i,r),e<0||t<0||e>n||t>s?li(i,nr):yu(i,nr))}const Rp=new WeakMap;function Pp(i,e,t){let n=e+t,s=Rp.get(i);n!=s&&(Rp.set(i,n),i.style.background=e,i.style.borderColor=t)}const Dp=new WeakMap;function Lp(i,e,t,n){let s=e+""+t,r=Dp.get(i);s!=r&&(Dp.set(i,s),i.style.height=t+"px",i.style.width=e+"px",i.style.marginLeft=n?-e/2+"px":0,i.style.marginTop=n?-t/2+"px":0)}const id={passive:!0},H1={...id,capture:!0};function or(i,e,t,n){e.addEventListener(i,t,n?H1:id)}function Su(i,e,t,n){e.removeEventListener(i,t,id)}Ta&&Mu();function Ri(i,e,t,n){let s;t=t||0,n=n||e.length-1;let r=n<=2147483647;for(;n-t>1;)s=r?t+n>>1:hi((t+n)/2),e[s]<i?t=s:n=s;return i-e[t]<=e[n]-i?t:n}function w0(i){return(t,n,s)=>{let r=-1,a=-1;for(let o=n;o<=s;o++)if(i(t[o])){r=o;break}for(let o=s;o>=n;o--)if(i(t[o])){a=o;break}return[r,a]}}const b0=i=>i!=null,T0=i=>i!=null&&i>0,cc=w0(b0),V1=w0(T0);function G1(i,e,t,n=0,s=!1){let r=s?V1:cc,a=s?T0:b0;[e,t]=r(i,e,t);let o=i[e],l=i[e];if(e>-1)if(n==1)o=i[e],l=i[t];else if(n==-1)o=i[t],l=i[e];else for(let c=e;c<=t;c++){let u=i[c];a(u)&&(u<o?o=u:u>l&&(l=u))}return[o??It,l??-It]}function hc(i,e,t,n){let s=Up(i),r=Up(e);i==e&&(s==-1?(i*=t,e/=t):(i/=t,e*=t));let a=t==10?hs:E0,o=s==1?hi:_i,l=r==1?_i:hi,c=o(a(pn(i))),u=l(a(pn(e))),d=fa(t,c),h=fa(t,u);return t==10&&(c<0&&(d=Ut(d,-c)),u<0&&(h=Ut(h,-u))),n||t==2?(i=d*s,e=h*r):(i=P0(i,d),e=uc(e,h)),[i,e]}function sd(i,e,t,n){let s=hc(i,e,t,n);return i==0&&(s[0]=0),e==0&&(s[1]=0),s}const rd=.1,Fp={mode:3,pad:rd},lo={pad:0,soft:null,mode:0},W1={min:lo,max:lo};function Kl(i,e,t,n){return dc(t)?Ip(i,e,t):(lo.pad=t,lo.soft=n?0:null,lo.mode=n?3:0,Ip(i,e,W1))}function St(i,e){return i??e}function $1(i,e,t){for(e=St(e,0),t=St(t,i.length-1);e<=t;){if(i[e]!=null)return!0;e++}return!1}function Ip(i,e,t){let n=t.min,s=t.max,r=St(n.pad,0),a=St(s.pad,0),o=St(n.hard,-It),l=St(s.hard,It),c=St(n.soft,It),u=St(s.soft,-It),d=St(n.mode,0),h=St(s.mode,0),p=e-i,v=hs(p),_=Yn(pn(i),pn(e)),m=hs(_),f=pn(m-v);(p<1e-24||f>10)&&(p=0,(i==0||e==0)&&(p=1e-24,d==2&&c!=It&&(r=0),h==2&&u!=-It&&(a=0)));let x=p||_||1e3,M=hs(x),w=fa(10,hi(M)),P=x*(p==0?i==0?.1:1:r),A=Ut(P0(i-P,w/10),24),R=i>=c&&(d==1||d==3&&A<=c||d==2&&A>=c)?c:It,F=Yn(o,A<R&&i>=R?R:Di(R,A)),Y=x*(p==0?e==0?.1:1:a),y=Ut(uc(e+Y,w/10),24),b=e<=u&&(h==1||h==3&&y>=u||h==2&&y<=u)?u:-It,N=Di(l,y>b&&e<=b?b:Yn(b,y));return F==N&&F==0&&(N=100),[F,N]}const X1=new Intl.NumberFormat(Ta?B1.language:"en-US"),ad=i=>X1.format(i),di=Math,Dl=di.PI,pn=di.abs,hi=di.floor,fn=di.round,_i=di.ceil,Di=di.min,Yn=di.max,fa=di.pow,Up=di.sign,hs=di.log10,E0=di.log2,j1=(i,e=1)=>di.sinh(i)*e,gh=(i,e=1)=>di.asinh(i/e),It=1/0;function Np(i){return(hs((i^i>>31)-(i>>31))|0)+1}function wu(i,e,t){return Di(Yn(i,e),t)}function A0(i){return typeof i=="function"}function mt(i){return A0(i)?i:()=>i}const q1=()=>{},C0=i=>i,R0=(i,e)=>e,Y1=i=>null,kp=i=>!0,Op=(i,e)=>i==e,K1=/\.\d*?(?=9{6,}|0{6,})/gm,dr=i=>{if(L0(i)||Os.has(i))return i;const e=`${i}`,t=e.match(K1);if(t==null)return i;let n=t[0].length-1;if(e.indexOf("e-")!=-1){let[s,r]=e.split("e");return+`${dr(s)}e${r}`}return Ut(i,n)};function Js(i,e){return dr(Ut(dr(i/e))*e)}function uc(i,e){return dr(_i(dr(i/e))*e)}function P0(i,e){return dr(hi(dr(i/e))*e)}function Ut(i,e=0){if(L0(i))return i;let t=10**e,n=i*t*(1+Number.EPSILON);return fn(n)/t}const Os=new Map;function D0(i){return((""+i).split(".")[1]||"").length}function xo(i,e,t,n){let s=[],r=n.map(D0);for(let a=e;a<t;a++){let o=pn(a),l=Ut(fa(i,a),o);for(let c=0;c<n.length;c++){let u=i==10?+`${n[c]}e${a}`:n[c]*l,d=(a>=0?0:o)+(a>=r[c]?0:r[c]),h=i==10?u:Ut(u,d);s.push(h),Os.set(h,d)}}return s}const co={},od=[],pa=[null,null],Cs=Array.isArray,L0=Number.isInteger,Z1=i=>i===void 0;function zp(i){return typeof i=="string"}function dc(i){let e=!1;if(i!=null){let t=i.constructor;e=t==null||t==Object}return e}function J1(i){return i!=null&&typeof i=="object"}const Q1=Object.getPrototypeOf(Uint8Array),F0="__proto__";function ma(i,e=dc){let t;if(Cs(i)){let n=i.find(s=>s!=null);if(Cs(n)||e(n)){t=Array(i.length);for(let s=0;s<i.length;s++)t[s]=ma(i[s],e)}else t=i.slice()}else if(i instanceof Q1)t=i.slice();else if(e(i)){t={};for(let n in i)n!=F0&&(t[n]=ma(i[n],e))}else t=i;return t}function cn(i){let e=arguments;for(let t=1;t<e.length;t++){let n=e[t];for(let s in n)s!=F0&&(dc(i[s])?cn(i[s],ma(n[s])):i[s]=ma(n[s]))}return i}const eT=0,tT=1,nT=2;function iT(i,e,t){for(let n=0,s,r=-1;n<e.length;n++){let a=e[n];if(a>r){for(s=a-1;s>=0&&i[s]==null;)i[s--]=null;for(s=a+1;s<t&&i[s]==null;)i[r=s++]=null}}}function sT(i,e){if(oT(i)){let a=i[0].slice();for(let o=1;o<i.length;o++)a.push(...i[o].slice(1));return lT(a[0])||(a=aT(a)),a}let t=new Set;for(let a=0;a<i.length;a++){let l=i[a][0],c=l.length;for(let u=0;u<c;u++)t.add(l[u])}let n=[Array.from(t).sort((a,o)=>a-o)],s=n[0].length,r=new Map;for(let a=0;a<s;a++)r.set(n[0][a],a);for(let a=0;a<i.length;a++){let o=i[a],l=o[0];for(let c=1;c<o.length;c++){let u=o[c],d=Array(s).fill(void 0),h=e?e[a][c]:tT,p=[];for(let v=0;v<u.length;v++){let _=u[v],m=r.get(l[v]);_===null?h!=eT&&(d[m]=_,h==nT&&p.push(m)):d[m]=_}iT(d,p,s),n.push(d)}}return n}const rT=typeof queueMicrotask>"u"?i=>Promise.resolve().then(i):queueMicrotask;function aT(i){let e=i[0],t=e.length,n=Array(t);for(let r=0;r<n.length;r++)n[r]=r;n.sort((r,a)=>e[r]-e[a]);let s=[];for(let r=0;r<i.length;r++){let a=i[r],o=Array(t);for(let l=0;l<t;l++)o[l]=a[n[l]];s.push(o)}return s}function oT(i){let e=i[0][0],t=e.length;for(let n=1;n<i.length;n++){let s=i[n][0];if(s.length!=t)return!1;if(s!=e){for(let r=0;r<t;r++)if(s[r]!=e[r])return!1}}return!0}function lT(i,e=100){const t=i.length;if(t<=1)return!0;let n=0,s=t-1;for(;n<=s&&i[n]==null;)n++;for(;s>=n&&i[s]==null;)s--;if(s<=n)return!0;const r=Yn(1,hi((s-n+1)/e));for(let a=i[n],o=n+r;o<=s;o+=r){const l=i[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}const I0=["January","February","March","April","May","June","July","August","September","October","November","December"],U0=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function N0(i){return i.slice(0,3)}const cT=U0.map(N0),hT=I0.map(N0),uT={MMMM:I0,MMM:hT,WWWW:U0,WWW:cT};function Xa(i){return(i<10?"0":"")+i}function dT(i){return(i<10?"00":i<100?"0":"")+i}const fT={YYYY:i=>i.getFullYear(),YY:i=>(i.getFullYear()+"").slice(2),MMMM:(i,e)=>e.MMMM[i.getMonth()],MMM:(i,e)=>e.MMM[i.getMonth()],MM:i=>Xa(i.getMonth()+1),M:i=>i.getMonth()+1,DD:i=>Xa(i.getDate()),D:i=>i.getDate(),WWWW:(i,e)=>e.WWWW[i.getDay()],WWW:(i,e)=>e.WWW[i.getDay()],HH:i=>Xa(i.getHours()),H:i=>i.getHours(),h:i=>{let e=i.getHours();return e==0?12:e>12?e-12:e},AA:i=>i.getHours()>=12?"PM":"AM",aa:i=>i.getHours()>=12?"pm":"am",a:i=>i.getHours()>=12?"p":"a",mm:i=>Xa(i.getMinutes()),m:i=>i.getMinutes(),ss:i=>Xa(i.getSeconds()),s:i=>i.getSeconds(),fff:i=>dT(i.getMilliseconds())};function ld(i,e){e=e||uT;let t=[],n=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=n.exec(i);)t.push(s[0][0]=="{"?fT[s[1]]:s[0]);return r=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](r,e);return a}}const pT=new Intl.DateTimeFormat().resolvedOptions().timeZone;function mT(i,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+i+i.getTimezoneOffset()*6e4):e==pT?t=i:(t=new Date(i.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(i.getMilliseconds())),t}const k0=i=>i%1==0,Zl=[1,2,2.5,5],gT=xo(10,-32,0,Zl),O0=xo(10,0,32,Zl),vT=O0.filter(k0),Qs=gT.concat(O0),cd=`
`,z0="{YYYY}",Bp=cd+z0,B0="{M}/{D}",eo=cd+B0,vl=eo+"/{YY}",H0="{aa}",_T="{h}:{mm}",Yr=_T+H0,Hp=cd+Yr,Vp=":{ss}",At=null;function V0(i){let e=i*1e3,t=e*60,n=t*60,s=n*24,r=s*30,a=s*365,l=(i==1?xo(10,0,3,Zl).filter(k0):xo(10,-3,0,Zl)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,n,n*2,n*3,n*4,n*6,n*8,n*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,a,a*2,a*5,a*10,a*25,a*50,a*100]);const c=[[a,z0,At,At,At,At,At,At,1],[s*28,"{MMM}",Bp,At,At,At,At,At,1],[s,B0,Bp,At,At,At,At,At,1],[n,"{h}"+H0,vl,At,eo,At,At,At,1],[t,Yr,vl,At,eo,At,At,At,1],[e,Vp,vl+" "+Yr,At,eo+" "+Yr,At,Hp,At,1],[i,Vp+".{fff}",vl+" "+Yr,At,eo+" "+Yr,At,Hp,At,1]];function u(d){return(h,p,v,_,m,f)=>{let x=[],M=m>=a,w=m>=r&&m<a,P=d(v),A=Ut(P*i,3),R=vh(P.getFullYear(),M?0:P.getMonth(),w||M?1:P.getDate()),F=Ut(R*i,3);if(w||M){let Y=w?m/r:0,y=M?m/a:0,b=A==F?A:Ut(vh(R.getFullYear()+y,R.getMonth()+Y,1)*i,3),N=new Date(fn(b/i)),k=N.getFullYear(),X=N.getMonth();for(let Z=0;b<=_;Z++){let J=vh(k+y*Z,X+Y*Z,1),z=J-d(Ut(J*i,3));b=Ut((+J+z)*i,3),b<=_&&x.push(b)}}else{let Y=m>=s?s:m,y=hi(v)-hi(A),b=F+y+uc(A-F,Y);x.push(b);let N=d(b),k=N.getHours()+N.getMinutes()/t+N.getSeconds()/n,X=m/n,Z=h.axes[p]._space,J=f/Z;for(;b=Ut(b+m,i==1?0:3),!(b>_);)if(X>1){let z=hi(Ut(k+X,6))%24,ce=d(b).getHours()-z;ce>1&&(ce=-1),b-=ce*n,k=(k+X)%24;let pe=x[x.length-1];Ut((b-pe)/m,3)*J>=.7&&x.push(b)}else x.push(b)}return x}}return[l,c,u]}const[xT,MT,yT]=V0(1),[ST,wT,bT]=V0(.001);xo(2,-53,53,[1]);function Gp(i,e){return i.map(t=>t.map((n,s)=>s==0||s==8||n==null?n:e(s==1||t[8]==0?n:t[1]+n)))}function Wp(i,e){return(t,n,s,r,a)=>{let o=e.find(v=>a>=v[0])||e[e.length-1],l,c,u,d,h,p;return n.map(v=>{let _=i(v),m=_.getFullYear(),f=_.getMonth(),x=_.getDate(),M=_.getHours(),w=_.getMinutes(),P=_.getSeconds(),A=m!=l&&o[2]||f!=c&&o[3]||x!=u&&o[4]||M!=d&&o[5]||w!=h&&o[6]||P!=p&&o[7]||o[1];return l=m,c=f,u=x,d=M,h=w,p=P,A(_)})}}function TT(i,e){let t=ld(e);return(n,s,r,a,o)=>s.map(l=>t(i(l)))}function vh(i,e,t){return new Date(i,e,t)}function $p(i,e){return e(i)}const ET="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Xp(i,e){return(t,n,s,r)=>r==null?nd:e(i(n))}function AT(i,e){let t=i.series[e];return t.width?t.stroke(i,e):t.points.width?t.points.stroke(i,e):null}function CT(i,e){return i.series[e].fill(i,e)}const RT={show:!0,live:!0,isolate:!1,mount:q1,markers:{show:!0,width:2,stroke:AT,fill:CT,dash:"solid"},idx:null,idxs:null,values:[]};function PT(i,e){let t=i.cursor.points,n=vi(),s=t.size(i,e);Gt(n,Ja,s),Gt(n,Qa,s);let r=s/-2;Gt(n,"marginLeft",r),Gt(n,"marginTop",r);let a=t.width(i,e,s);return a&&Gt(n,"borderWidth",a),n}function DT(i,e){let t=i.series[e].points;return t._fill||t._stroke}function LT(i,e){let t=i.series[e].points;return t._stroke||t._fill}function FT(i,e){return i.series[e].points.size}const _h=[0,0];function IT(i,e,t){return _h[0]=e,_h[1]=t,_h}function _l(i,e,t,n=!0){return s=>{s.button==0&&(!n||s.target==e)&&t(s)}}function xh(i,e,t,n=!0){return s=>{(!n||s.target==e)&&t(s)}}const UT={show:!0,x:!0,y:!0,lock:!1,move:IT,points:{one:!1,show:PT,size:FT,width:0,stroke:LT,fill:DT},bind:{mousedown:_l,mouseup:_l,click:_l,dblclick:_l,mousemove:xh,mouseleave:xh,mouseenter:xh},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(i,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(i,e,t,n,s)=>n-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},G0={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},hd=cn({},G0,{filter:R0}),W0=cn({},hd,{size:10}),$0=cn({},G0,{show:!1}),ud='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',X0="bold "+ud,j0=1.5,jp={show:!0,scale:"x",stroke:td,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:X0,side:2,grid:hd,ticks:W0,border:$0,font:ud,lineGap:j0,rotate:0},NT="Value",kT="Time",qp={show:!0,scale:"x",auto:!1,sorted:1,min:It,max:-It,idxs:[]};function OT(i,e,t,n,s){return e.map(r=>r==null?"":ad(r))}function zT(i,e,t,n,s,r,a){let o=[],l=Os.get(s)||0;t=a?t:Ut(uc(t,s),l);for(let c=t;c<=n;c=Ut(c+s,l))o.push(Object.is(c,-0)?0:c);return o}function bu(i,e,t,n,s,r,a){const o=[],l=i.scales[i.axes[e].scale].log,c=l==10?hs:E0,u=hi(c(t));s=fa(l,u),l==10&&(s=Qs[Ri(s,Qs)]);let d=t,h=s*l;l==10&&(h=Qs[Ri(h,Qs)]);do o.push(d),d=d+s,l==10&&!Os.has(d)&&(d=Ut(d,Os.get(s))),d>=h&&(s=d,h=s*l,l==10&&(h=Qs[Ri(h,Qs)]));while(d<=n);return o}function BT(i,e,t,n,s,r,a){let l=i.scales[i.axes[e].scale].asinh,c=n>l?bu(i,e,Yn(l,t),n,s):[l],u=n>=0&&t<=0?[0]:[];return(t<-l?bu(i,e,Yn(l,-n),-t,s):[l]).reverse().map(h=>-h).concat(u,c)}const q0=/./,HT=/[12357]/,VT=/[125]/,Yp=/1/,Tu=(i,e,t,n)=>i.map((s,r)=>e==4&&s==0||r%n==0&&t.test(s.toExponential()[s<0?1:0])?s:null);function GT(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=i.scales[a],l=i.valToPos,c=r._space,u=l(10,a),d=l(9,a)-u>=c?q0:l(7,a)-u>=c?HT:l(5,a)-u>=c?VT:Yp;if(d==Yp){let h=pn(l(1,a)-u);if(h<c)return Tu(e.slice().reverse(),o.distr,d,_i(c/h)).reverse()}return Tu(e,o.distr,d,1)}function WT(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=r._space,l=i.valToPos,c=pn(l(1,a)-l(2,a));return c<o?Tu(e.slice().reverse(),3,q0,_i(o/c)).reverse():e}function $T(i,e,t,n){return n==null?nd:e==null?"":ad(e)}const Kp={show:!0,scale:"y",stroke:td,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:X0,side:3,grid:hd,ticks:W0,border:$0,font:ud,lineGap:j0,rotate:0};function XT(i,e){let t=3+(i||1)*2;return Ut(t*e,3)}function jT(i,e){let{scale:t,idxs:n}=i.series[0],s=i._data[0],r=i.valToPos(s[n[0]],t,!0),a=i.valToPos(s[n[1]],t,!0),o=pn(a-r),l=i.series[e],c=o/(l.points.space*Tt);return n[1]-n[0]<=c}const Zp={scale:null,auto:!0,sorted:0,min:It,max:-It},Y0=(i,e,t,n,s)=>s,Jp={show:!0,auto:!0,sorted:0,gaps:Y0,alpha:1,facets:[cn({},Zp,{scale:"x"}),cn({},Zp,{scale:"y"})]},Qp={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Y0,alpha:1,points:{show:jT,filter:null},values:null,min:It,max:-It,idxs:[],path:null,clip:null};function qT(i,e,t,n,s){return t/10}const K0={time:x1,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},YT=cn({},K0,{time:!1,ori:1}),em={};function Z0(i,e){let t=em[i];return t||(t={key:i,plots:[],sub(n){t.plots.push(n)},unsub(n){t.plots=t.plots.filter(s=>s!=n)},pub(n,s,r,a,o,l,c){for(let u=0;u<t.plots.length;u++)t.plots[u]!=s&&t.plots[u].pub(n,s,r,a,o,l,c)}},i!=null&&(em[i]=t)),t}const ga=1,Eu=2;function mr(i,e,t){const n=i.mode,s=i.series[e],r=n==2?i._data[e]:i._data,a=i.scales,o=i.bbox;let l=r[0],c=n==2?r[1]:r[e],u=n==2?a[s.facets[0].scale]:a[i.series[0].scale],d=n==2?a[s.facets[1].scale]:a[s.scale],h=o.left,p=o.top,v=o.width,_=o.height,m=i.valToPosH,f=i.valToPosV;return u.ori==0?t(s,l,c,u,d,m,f,h,p,v,_,pc,Ea,gc,Q0,tg):t(s,l,c,u,d,f,m,p,h,_,v,mc,Aa,pd,eg,ng)}function dd(i,e){let t=0,n=0,s=St(i.bands,od);for(let r=0;r<s.length;r++){let a=s[r];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?n|=1:n|=2)}return[t,n==1?-1:n==2?1:n==3?2:0]}function KT(i,e,t,n,s){let r=i.mode,a=i.series[e],o=r==2?a.facets[1].scale:a.scale,l=i.scales[o];return s==-1?l.min:s==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function us(i,e,t,n,s,r){return mr(i,e,(a,o,l,c,u,d,h,p,v,_,m)=>{let f=a.pxRound;const x=c.dir*(c.ori==0?1:-1),M=c.ori==0?Ea:Aa;let w,P;x==1?(w=t,P=n):(w=n,P=t);let A=f(d(o[w],c,_,p)),R=f(h(l[w],u,m,v)),F=f(d(o[P],c,_,p)),Y=f(h(r==1?u.max:u.min,u,m,v)),y=new Path2D(s);return M(y,F,Y),M(y,A,Y),M(y,A,R),y})}function fc(i,e,t,n,s,r){let a=null;if(i.length>0){a=new Path2D;const o=e==0?gc:pd;let l=t;for(let d=0;d<i.length;d++){let h=i[d];if(h[1]>h[0]){let p=h[0]-l;p>0&&o(a,l,n,p,n+r),l=h[1]}}let c=t+s-l,u=10;c>0&&o(a,l,n-u/2,c,n+r+u)}return a}function ZT(i,e,t){let n=i[i.length-1];n&&n[0]==e?n[1]=t:i.push([e,t])}function fd(i,e,t,n,s,r,a){let o=[],l=i.length;for(let c=s==1?t:n;c>=t&&c<=n;c+=s)if(e[c]===null){let d=c,h=c;if(s==1)for(;++c<=n&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let p=r(i[d]),v=h==d?p:r(i[h]),_=d-s;p=a<=0&&_>=0&&_<l?r(i[_]):p;let f=h+s;v=a>=0&&f>=0&&f<l?r(i[f]):v,v>=p&&o.push([p,v])}return o}function tm(i){return i==0?C0:i==1?fn:e=>Js(e,i)}function J0(i){let e=i==0?pc:mc,t=i==0?(s,r,a,o,l,c)=>{s.arcTo(r,a,o,l,c)}:(s,r,a,o,l,c)=>{s.arcTo(a,r,l,o,c)},n=i==0?(s,r,a,o,l)=>{s.rect(r,a,o,l)}:(s,r,a,o,l)=>{s.rect(a,r,l,o)};return(s,r,a,o,l,c=0,u=0)=>{c==0&&u==0?n(s,r,a,o,l):(c=Di(c,o/2,l/2),u=Di(u,o/2,l/2),e(s,r+c,a),t(s,r+o,a,r+o,a+l,c),t(s,r+o,a+l,r,a+l,u),t(s,r,a+l,r,a,u),t(s,r,a,r+o,a,c),s.closePath())}}const pc=(i,e,t)=>{i.moveTo(e,t)},mc=(i,e,t)=>{i.moveTo(t,e)},Ea=(i,e,t)=>{i.lineTo(e,t)},Aa=(i,e,t)=>{i.lineTo(t,e)},gc=J0(0),pd=J0(1),Q0=(i,e,t,n,s,r)=>{i.arc(e,t,n,s,r)},eg=(i,e,t,n,s,r)=>{i.arc(t,e,n,s,r)},tg=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(e,t,n,s,r,a)},ng=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(t,e,s,n,a,r)};function ig(i){return(e,t,n,s,r)=>mr(e,t,(a,o,l,c,u,d,h,p,v,_,m)=>{let{pxRound:f,points:x}=a,M,w;c.ori==0?(M=pc,w=Q0):(M=mc,w=eg);const P=Ut(x.width*Tt,3);let A=(x.size-x.width)/2*Tt,R=Ut(A*2,3),F=new Path2D,Y=new Path2D,{left:y,top:b,width:N,height:k}=e.bbox;gc(Y,y-R,b-R,N+R*2,k+R*2);const X=Z=>{if(l[Z]!=null){let J=f(d(o[Z],c,_,p)),z=f(h(l[Z],u,m,v));M(F,J+A,z),w(F,J,z,A,0,Dl*2)}};if(r)r.forEach(X);else for(let Z=n;Z<=s;Z++)X(Z);return{stroke:P>0?F:null,fill:F,clip:Y,flags:ga|Eu}})}function sg(i){return(e,t,n,s,r,a)=>{n!=s&&(r!=n&&a!=n&&i(e,t,n),r!=s&&a!=s&&i(e,t,s),i(e,t,a))}}const JT=sg(Ea),QT=sg(Aa);function rg(i){const e=St(i?.alignGaps,0);return(t,n,s,r)=>mr(t,n,(a,o,l,c,u,d,h,p,v,_,m)=>{[s,r]=cc(l,s,r);let f=a.pxRound,x=k=>f(d(k,c,_,p)),M=k=>f(h(k,u,m,v)),w,P;c.ori==0?(w=Ea,P=JT):(w=Aa,P=QT);const A=c.dir*(c.ori==0?1:-1),R={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ga},F=R.stroke;let Y=!1;if(r-s>=_*4){let k=le=>t.posToVal(le,c.key,!0),X=null,Z=null,J,z,ne,fe=x(o[A==1?s:r]),ce=x(o[s]),pe=x(o[r]),Se=k(A==1?ce+1:pe-1);for(let le=A==1?s:r;le>=s&&le<=r;le+=A){let ee=o[le],xe=(A==1?ee<Se:ee>Se)?fe:x(ee),me=l[le];xe==fe?me!=null?(z=me,X==null?(w(F,xe,M(z)),J=X=Z=z):z<X?X=z:z>Z&&(Z=z)):me===null&&(Y=!0):(X!=null&&P(F,fe,M(X),M(Z),M(J),M(z)),me!=null?(z=me,w(F,xe,M(z)),X=Z=J=z):(X=Z=null,me===null&&(Y=!0)),fe=xe,Se=k(fe+A))}X!=null&&X!=Z&&ne!=fe&&P(F,fe,M(X),M(Z),M(J),M(z))}else for(let k=A==1?s:r;k>=s&&k<=r;k+=A){let X=l[k];X===null?Y=!0:X!=null&&w(F,x(o[k]),M(X))}let[b,N]=dd(t,n);if(a.fill!=null||b!=0){let k=R.fill=new Path2D(F),X=a.fillTo(t,n,a.min,a.max,b),Z=M(X),J=x(o[s]),z=x(o[r]);A==-1&&([z,J]=[J,z]),w(k,z,Z),w(k,J,Z)}if(!a.spanGaps){let k=[];Y&&k.push(...fd(o,l,s,r,A,x,e)),R.gaps=k=a.gaps(t,n,s,r,k),R.clip=fc(k,c.ori,p,v,_,m)}return N!=0&&(R.band=N==2?[us(t,n,s,r,F,-1),us(t,n,s,r,F,1)]:us(t,n,s,r,F,N)),R})}function eE(i){const e=St(i.align,1),t=St(i.ascDesc,!1),n=St(i.alignGaps,0),s=St(i.extend,!1);return(r,a,o,l)=>mr(r,a,(c,u,d,h,p,v,_,m,f,x,M)=>{[o,l]=cc(d,o,l);let w=c.pxRound,{left:P,width:A}=r.bbox,R=ce=>w(v(ce,h,x,m)),F=ce=>w(_(ce,p,M,f)),Y=h.ori==0?Ea:Aa;const y={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:ga},b=y.stroke,N=h.dir*(h.ori==0?1:-1);let k=F(d[N==1?o:l]),X=R(u[N==1?o:l]),Z=X,J=X;s&&e==-1&&(J=P,Y(b,J,k)),Y(b,X,k);for(let ce=N==1?o:l;ce>=o&&ce<=l;ce+=N){let pe=d[ce];if(pe==null)continue;let Se=R(u[ce]),le=F(pe);e==1?Y(b,Se,k):Y(b,Z,le),Y(b,Se,le),k=le,Z=Se}let z=Z;s&&e==1&&(z=P+A,Y(b,z,k));let[ne,fe]=dd(r,a);if(c.fill!=null||ne!=0){let ce=y.fill=new Path2D(b),pe=c.fillTo(r,a,c.min,c.max,ne),Se=F(pe);Y(ce,z,Se),Y(ce,J,Se)}if(!c.spanGaps){let ce=[];ce.push(...fd(u,d,o,l,N,R,n));let pe=c.width*Tt/2,Se=t||e==1?pe:-pe,le=t||e==-1?-pe:pe;ce.forEach(ee=>{ee[0]+=Se,ee[1]+=le}),y.gaps=ce=c.gaps(r,a,o,l,ce),y.clip=fc(ce,h.ori,m,f,x,M)}return fe!=0&&(y.band=fe==2?[us(r,a,o,l,b,-1),us(r,a,o,l,b,1)]:us(r,a,o,l,b,fe)),y})}function nm(i,e,t,n,s,r,a=It){if(i.length>1){let o=null;for(let l=0,c=1/0;l<i.length;l++)if(e[l]!==void 0){if(o!=null){let u=pn(i[l]-i[o]);u<c&&(c=u,a=pn(t(i[l],n,s,r)-t(i[o],n,s,r)))}o=l}}return a}function tE(i){i=i||co;const e=St(i.size,[.6,It,1]),t=i.align||0,n=i.gap||0;let s=i.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;const r=mt(s),a=1-e[0],o=St(e[1],It),l=St(e[2],1),c=St(i.disp,co),u=St(i.each,p=>{}),{fill:d,stroke:h}=c;return(p,v,_,m)=>mr(p,v,(f,x,M,w,P,A,R,F,Y,y,b)=>{let N=f.pxRound,k=t,X=n*Tt,Z=o*Tt,J=l*Tt,z,ne;w.ori==0?[z,ne]=r(p,v):[ne,z]=r(p,v);const fe=w.dir*(w.ori==0?1:-1);let ce=w.ori==0?gc:pd,pe=w.ori==0?u:(K,we,_e,Pe,ut,ve,De)=>{u(K,we,_e,ut,Pe,De,ve)},Se=St(p.bands,od).find(K=>K.series[0]==v),le=Se!=null?Se.dir:0,ee=f.fillTo(p,v,f.min,f.max,le),ae=N(R(ee,P,b,Y)),xe,me,Be,Oe=y,Ve=N(f.width*Tt),et=!1,it=null,B=null,zt=null,at=null;d!=null&&(Ve==0||h!=null)&&(et=!0,it=d.values(p,v,_,m),B=new Map,new Set(it).forEach(K=>{K!=null&&B.set(K,new Path2D)}),Ve>0&&(zt=h.values(p,v,_,m),at=new Map,new Set(zt).forEach(K=>{K!=null&&at.set(K,new Path2D)})));let{x0:lt,size:Ye}=c;if(lt!=null&&Ye!=null){k=1,x=lt.values(p,v,_,m),lt.unit==2&&(x=x.map(_e=>p.posToVal(F+_e*y,w.key,!0)));let K=Ye.values(p,v,_,m);Ye.unit==2?me=K[0]*y:me=A(K[0],w,y,F)-A(0,w,y,F),Oe=nm(x,M,A,w,y,F,Oe),Be=Oe-me+X}else Oe=nm(x,M,A,w,y,F,Oe),Be=Oe*a+X,me=Oe-Be;Be<1&&(Be=0),Ve>=me/2&&(Ve=0),Be<5&&(N=C0);let Et=Be>0,Ke=Oe-Be-(Et?Ve:0);me=N(wu(Ke,J,Z)),xe=(k==0?me/2:k==fe?0:me)-k*fe*((k==0?X/2:0)+(Et?Ve/2:0));const L={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},E=et?null:new Path2D;let ie=null;if(Se!=null)ie=p.data[Se.series[1]];else{let{y0:K,y1:we}=c;K!=null&&we!=null&&(M=we.values(p,v,_,m),ie=K.values(p,v,_,m))}let he=z*me,re=ne*me;for(let K=fe==1?_:m;K>=_&&K<=m;K+=fe){let we=M[K];if(we==null)continue;if(ie!=null){let Te=ie[K]??0;if(we-Te==0)continue;ae=R(Te,P,b,Y)}let _e=w.distr!=2||c!=null?x[K]:K,Pe=A(_e,w,y,F),ut=R(St(we,ee),P,b,Y),ve=N(Pe-xe),De=N(Yn(ut,ae)),Ge=N(Di(ut,ae)),$e=De-Ge;if(we!=null){let Te=we<0?re:he,tt=we<0?he:re;et?(Ve>0&&zt[K]!=null&&ce(at.get(zt[K]),ve,Ge+hi(Ve/2),me,Yn(0,$e-Ve),Te,tt),it[K]!=null&&ce(B.get(it[K]),ve,Ge+hi(Ve/2),me,Yn(0,$e-Ve),Te,tt)):ce(E,ve,Ge+hi(Ve/2),me,Yn(0,$e-Ve),Te,tt),pe(p,v,K,ve-Ve/2,Ge,me+Ve,$e)}}return Ve>0?L.stroke=et?at:E:et||(L._fill=f.width==0?f._fill:f._stroke??f._fill,L.width=0),L.fill=et?B:E,L})}function nE(i,e){const t=St(e?.alignGaps,0);return(n,s,r,a)=>mr(n,s,(o,l,c,u,d,h,p,v,_,m,f)=>{[r,a]=cc(c,r,a);let x=o.pxRound,M=z=>x(h(z,u,m,v)),w=z=>x(p(z,d,f,_)),P,A,R;u.ori==0?(P=pc,R=Ea,A=tg):(P=mc,R=Aa,A=ng);const F=u.dir*(u.ori==0?1:-1);let Y=M(l[F==1?r:a]),y=Y,b=[],N=[];for(let z=F==1?r:a;z>=r&&z<=a;z+=F)if(c[z]!=null){let fe=l[z],ce=M(fe);b.push(y=ce),N.push(w(c[z]))}const k={stroke:i(b,N,P,R,A,x),fill:null,clip:null,band:null,gaps:null,flags:ga},X=k.stroke;let[Z,J]=dd(n,s);if(o.fill!=null||Z!=0){let z=k.fill=new Path2D(X),ne=o.fillTo(n,s,o.min,o.max,Z),fe=w(ne);R(z,y,fe),R(z,Y,fe)}if(!o.spanGaps){let z=[];z.push(...fd(l,c,r,a,F,M,t)),k.gaps=z=o.gaps(n,s,r,a,z),k.clip=fc(z,u.ori,v,_,m,f)}return J!=0&&(k.band=J==2?[us(n,s,r,a,X,-1),us(n,s,r,a,X,1)]:us(n,s,r,a,X,J)),k})}function iE(i){return nE(sE,i)}function sE(i,e,t,n,s,r){const a=i.length;if(a<2)return null;const o=new Path2D;if(t(o,i[0],e[0]),a==2)n(o,i[1],e[1]);else{let l=Array(a),c=Array(a-1),u=Array(a-1),d=Array(a-1);for(let h=0;h<a-1;h++)u[h]=e[h+1]-e[h],d[h]=i[h+1]-i[h],c[h]=u[h]/d[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(d[h-1]+d[h])/((2*d[h]+d[h-1])/c[h-1]+(d[h]+2*d[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)s(o,i[h]+d[h]/3,e[h]+l[h]*d[h]/3,i[h+1]-d[h]/3,e[h+1]-l[h+1]*d[h]/3,i[h+1],e[h+1])}return o}const Au=new Set;function im(){for(let i of Au)i.syncRect(!0)}Ta&&(or(O1,aa,im),or(z1,aa,im,!0),or(Yl,aa,()=>{bn.pxRatio=Tt}));const rE=rg(),aE=ig();function sm(i,e,t,n){return(n?[i[0],i[1]].concat(i.slice(2)):[i[0]].concat(i.slice(1))).map((r,a)=>Cu(r,a,e,t))}function oE(i,e){return i.map((t,n)=>n==0?{}:cn({},e,t))}function Cu(i,e,t,n){return cn({},e==0?t:n,i)}function ag(i,e,t){return e==null?pa:[e,t]}const lE=ag;function cE(i,e,t){return e==null?pa:Kl(e,t,rd,!0)}function og(i,e,t,n){return e==null?pa:hc(e,t,i.scales[n].log,!1)}const hE=og;function lg(i,e,t,n){return e==null?pa:sd(e,t,i.scales[n].log,!1)}const uE=lg;function dE(i,e,t,n,s){let r=Yn(Np(i),Np(e)),a=e-i,o=Ri(s/n*a,t);do{let l=t[o],c=n*l/a;if(c>=s&&r+(l<5?Os.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function rm(i){let e,t;return i=i.replace(/(\d+)px/,(n,s)=>(e=fn((t=+s)*Tt))+"px"),[i,e,t]}function fE(i){i.show&&[i.font,i.labelFont].forEach(e=>{let t=Ut(e[2]*Tt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function bn(i,e,t){const n={mode:St(i.mode,1)},s=n.mode;function r(S,T,D,I){let H=T.valToPct(S);return I+D*(T.dir==-1?1-H:H)}function a(S,T,D,I){let H=T.valToPct(S);return I+D*(T.dir==-1?H:1-H)}function o(S,T,D,I){return T.ori==0?r(S,T,D,I):a(S,T,D,I)}n.valToPosH=r,n.valToPosV=a;let l=!1;n.status=0;const c=n.root=vi(M1);if(i.id!=null&&(c.id=i.id),li(c,i.class),i.title){let S=vi(w1,c);S.textContent=i.title}const u=Ci("canvas"),d=n.ctx=u.getContext("2d"),h=vi(b1,c);or("click",h,S=>{S.target===v&&(Bt!=Sr||$t!=wr)&&Cn.click(n,S)},!0);const p=n.under=vi(T1,h);h.appendChild(u);const v=n.over=vi(E1,h);i=ma(i);const _=+St(i.pxAlign,1),m=tm(_);(i.plugins||[]).forEach(S=>{S.opts&&(i=S.opts(n,i)||i)});const f=i.ms||.001,x=n.series=s==1?sm(i.series||[],qp,Qp,!1):oE(i.series||[null],Jp),M=n.axes=sm(i.axes||[],jp,Kp,!0),w=n.scales={},P=n.bands=i.bands||[];P.forEach(S=>{S.fill=mt(S.fill||null),S.dir=St(S.dir,-1)});const A=s==2?x[1].facets[0].scale:x[0].scale,R={axes:pg,series:Ra},F=(i.drawOrder||["axes","series"]).map(S=>R[S]);function Y(S){const T=S.distr==3?D=>hs(D>0?D:S.clamp(n,D,S.min,S.max,S.key)):S.distr==4?D=>gh(D,S.asinh):S.distr==100?D=>S.fwd(D):D=>D;return D=>{let I=T(D),{_min:H,_max:se}=S,de=se-H;return(I-H)/de}}function y(S){let T=w[S];if(T==null){let D=(i.scales||co)[S]||co;if(D.from!=null){y(D.from);let I=cn({},w[D.from],D,{key:S});I.valToPct=Y(I),w[S]=I}else{T=w[S]=cn({},S==A?K0:YT,D),T.key=S;let I=T.time,H=T.range,se=Cs(H);if((S!=A||s==2&&!I)&&(se&&(H[0]==null||H[1]==null)&&(H={min:H[0]==null?Fp:{mode:1,hard:H[0],soft:H[0]},max:H[1]==null?Fp:{mode:1,hard:H[1],soft:H[1]}},se=!1),!se&&dc(H))){let de=H;H=(ge,ye,Re)=>ye==null?pa:Kl(ye,Re,de)}T.range=mt(H||(I?lE:S==A?T.distr==3?hE:T.distr==4?uE:ag:T.distr==3?og:T.distr==4?lg:cE)),T.auto=mt(se?!1:T.auto),T.clamp=mt(T.clamp||qT),T._min=T._max=null,T.valToPct=Y(T)}}}y("x"),y("y"),s==1&&x.forEach(S=>{y(S.scale)}),M.forEach(S=>{y(S.scale)});for(let S in i.scales)y(S);const b=w[A],N=b.distr;let k,X;b.ori==0?(li(c,y1),k=r,X=a):(li(c,S1),k=a,X=r);const Z={};for(let S in w){let T=w[S];(T.min!=null||T.max!=null)&&(Z[S]={min:T.min,max:T.max},T.min=T.max=null)}const J=i.tzDate||(S=>new Date(fn(S/f))),z=i.fmtDate||ld,ne=f==1?yT(J):bT(J),fe=Wp(J,Gp(f==1?MT:wT,z)),ce=Xp(J,$p(ET,z)),pe=[],Se=n.legend=cn({},RT,i.legend),le=n.cursor=cn({},UT,{drag:{y:s==2}},i.cursor),ee=Se.show,ae=le.show,xe=Se.markers;Se.idxs=pe,xe.width=mt(xe.width),xe.dash=mt(xe.dash),xe.stroke=mt(xe.stroke),xe.fill=mt(xe.fill);let me,Be,Oe,Ve=[],et=[],it,B=!1,zt={};if(Se.live){const S=x[1]?x[1].values:null;B=S!=null,it=B?S(n,1,0):{_:0};for(let T in it)zt[T]=nd}if(ee)if(me=Ci("table",L1,c),Oe=Ci("tbody",null,me),Se.mount(n,me),B){Be=Ci("thead",null,me,Oe);let S=Ci("tr",null,Be);Ci("th",null,S);for(var at in it)Ci("th",Mp,S).textContent=at}else li(me,I1),Se.live&&li(me,F1);const lt={show:!0},Ye={show:!1};function Et(S,T){if(T==0&&(B||!Se.live||s==2))return pa;let D=[],I=Ci("tr",U1,Oe,Oe.childNodes[T]);li(I,S.class),S.show||li(I,nr);let H=Ci("th",null,I);if(xe.show){let ge=vi(N1,H);if(T>0){let ye=xe.width(n,T);ye&&(ge.style.border=ye+"px "+xe.dash(n,T)+" "+xe.stroke(n,T)),ge.style.background=xe.fill(n,T)}}let se=vi(Mp,H);S.label instanceof HTMLElement?se.appendChild(S.label):se.textContent=S.label,T>0&&(xe.show||(se.style.color=S.width>0?xe.stroke(n,T):xe.fill(n,T)),L("click",H,ge=>{if(le._lock)return;Tn(ge);let ye=x.indexOf(S);if((ge.ctrlKey||ge.metaKey)!=Se.isolate){let Re=x.some((Fe,Ne)=>Ne>0&&Ne!=ye&&Fe.show);x.forEach((Fe,Ne)=>{Ne>0&&Ii(Ne,Re?Ne==ye?lt:Ye:lt,!0,an.setSeries)})}else Ii(ye,{show:!S.show},!0,an.setSeries)},!1),Jn&&L(bp,H,ge=>{le._lock||(Tn(ge),Ii(x.indexOf(S),Tr,!0,an.setSeries))},!1));for(var de in it){let ge=Ci("td",k1,I);ge.textContent="--",D.push(ge)}return[I,D]}const Ke=new Map;function L(S,T,D,I=!0){const H=Ke.get(T)||{},se=le.bind[S](n,T,D,I);se&&(or(S,T,H[S]=se),Ke.set(T,H))}function E(S,T,D){const I=Ke.get(T)||{};for(let H in I)(S==null||H==S)&&(Su(H,T,I[H]),delete I[H]);S==null&&Ke.delete(T)}let ie=0,he=0,re=0,K=0,we=0,_e=0,Pe=we,ut=_e,ve=re,De=K,Ge=0,$e=0,Te=0,tt=0;n.bbox={};let nt=!1,wt=!1,W=!1,Ee=!1,oe=!1,ue=!1;function Ce(S,T,D){(D||S!=n.width||T!=n.height)&&Le(S,T),_r(!1),W=!0,wt=!0,xr()}function Le(S,T){n.width=ie=re=S,n.height=he=K=T,we=_e=0,_t(),In();let D=n.bbox;Ge=D.left=Js(we*Tt,.5),$e=D.top=Js(_e*Tt,.5),Te=D.width=Js(re*Tt,.5),tt=D.height=Js(K*Tt,.5)}const gt=3;function Zt(){let S=!1,T=0;for(;!S;){T++;let D=dg(T),I=fg(T);S=T==gt||D&&I,S||(Le(n.width,n.height),wt=!0)}}function Fn({width:S,height:T}){Ce(S,T)}n.setSize=Fn;function _t(){let S=!1,T=!1,D=!1,I=!1;M.forEach((H,se)=>{if(H.show&&H._show){let{side:de,_size:ge}=H,ye=de%2,Re=H.label!=null?H.labelSize:0,Fe=ge+Re;Fe>0&&(ye?(re-=Fe,de==3?(we+=Fe,I=!0):D=!0):(K-=Fe,de==0?(_e+=Fe,S=!0):T=!0))}}),Xi[0]=S,Xi[1]=D,Xi[2]=T,Xi[3]=I,re-=q[1]+q[3],we+=q[3],K-=q[2]+q[0],_e+=q[0]}function In(){let S=we+re,T=_e+K,D=we,I=_e;function H(se,de){switch(se){case 1:return S+=de,S-de;case 2:return T+=de,T-de;case 3:return D-=de,D+de;case 0:return I-=de,I+de}}M.forEach((se,de)=>{if(se.show&&se._show){let ge=se.side;se._pos=H(ge,se._size),se.label!=null&&(se._lpos=H(ge,se.labelSize))}})}if(le.dataIdx==null){let S=le.hover,T=S.skip=new Set(S.skip??[]);T.add(void 0);let D=S.prox=mt(S.prox),I=S.bias??(S.bias=0);le.dataIdx=(H,se,de,ge)=>{if(se==0)return de;let ye=de,Re=D(H,se,de,ge)??It,Fe=Re>=0&&Re<It,Ne=b.ori==0?re:K,rt=le.left,bt=e[0],yt=e[se];if(T.has(yt[de])){ye=null;let pt=null,Qe=null,qe;if(I==0||I==-1)for(qe=de;pt==null&&qe-- >0;)T.has(yt[qe])||(pt=qe);if(I==0||I==1)for(qe=de;Qe==null&&qe++<yt.length;)T.has(yt[qe])||(Qe=qe);if(pt!=null||Qe!=null)if(Fe){let Vt=pt==null?-1/0:k(bt[pt],b,Ne,0),Jt=Qe==null?1/0:k(bt[Qe],b,Ne,0),yn=rt-Vt,Dt=Jt-rt;yn<=Dt?yn<=Re&&(ye=pt):Dt<=Re&&(ye=Qe)}else ye=Qe==null?pt:pt==null?Qe:de-pt<=Qe-de?pt:Qe}else Fe&&pn(rt-k(bt[de],b,Ne,0))>Re&&(ye=null);return ye}}const Tn=S=>{le.event=S};le.idxs=pe,le._lock=!1;let un=le.points;un.show=mt(un.show),un.size=mt(un.size),un.stroke=mt(un.stroke),un.width=mt(un.width),un.fill=mt(un.fill);const ni=n.focus=cn({},i.focus||{alpha:.3},le.focus),Jn=ni.prox>=0,Li=Jn&&un.one;let Bn=[],$i=[],yi=[];function Ca(S,T){let D=un.show(n,T);if(D instanceof HTMLElement)return li(D,D1),li(D,S.class),Oi(D,-10,-10,re,K),v.insertBefore(D,Bn[T]),D}function Bs(S,T){if(s==1||T>0){let D=s==1&&w[S.scale].time,I=S.value;S.value=D?zp(I)?Xp(J,$p(I,z)):I||ce:I||$T,S.label=S.label||(D?kT:NT)}if(Li||T>0){S.width=S.width==null?1:S.width,S.paths=S.paths||rE||Y1,S.fillTo=mt(S.fillTo||KT),S.pxAlign=+St(S.pxAlign,_),S.pxRound=tm(S.pxAlign),S.stroke=mt(S.stroke||null),S.fill=mt(S.fill||null),S._stroke=S._fill=S._paths=S._focus=null;let D=XT(Yn(1,S.width),1),I=S.points=cn({},{size:D,width:Yn(1,D*.2),stroke:S.stroke,space:D*2,paths:aE,_stroke:null,_fill:null},S.points);I.show=mt(I.show),I.filter=mt(I.filter),I.fill=mt(I.fill),I.stroke=mt(I.stroke),I.paths=mt(I.paths),I.pxAlign=S.pxAlign}if(ee){let D=Et(S,T);Ve.splice(T,0,D[0]),et.splice(T,0,D[1]),Se.values.push(null)}if(ae){pe.splice(T,0,null);let D=null;Li?T==0&&(D=Ca(S,T)):T>0&&(D=Ca(S,T)),Bn.splice(T,0,D),$i.splice(T,0,0),yi.splice(T,0,0)}Mn("addSeries",T)}function bo(S,T){T=T??x.length,S=s==1?Cu(S,T,qp,Qp):Cu(S,T,{},Jp),x.splice(T,0,S),Bs(x[T],T)}n.addSeries=bo;function To(S){if(x.splice(S,1),ee){Se.values.splice(S,1),et.splice(S,1);let T=Ve.splice(S,1)[0];E(null,T.firstChild),T.remove()}ae&&(pe.splice(S,1),Bn.splice(S,1)[0].remove(),$i.splice(S,1),yi.splice(S,1)),Mn("delSeries",S)}n.delSeries=To;const Xi=[!1,!1,!1,!1];function vc(S,T){if(S._show=S.show,S.show){let D=S.side%2,I=w[S.scale];I==null&&(S.scale=D?x[1].scale:A,I=w[S.scale]);let H=I.time;S.size=mt(S.size),S.space=mt(S.space),S.rotate=mt(S.rotate),Cs(S.incrs)&&S.incrs.forEach(de=>{!Os.has(de)&&Os.set(de,D0(de))}),S.incrs=mt(S.incrs||(I.distr==2?vT:H?f==1?xT:ST:Qs)),S.splits=mt(S.splits||(H&&I.distr==1?ne:I.distr==3?bu:I.distr==4?BT:zT)),S.stroke=mt(S.stroke),S.grid.stroke=mt(S.grid.stroke),S.ticks.stroke=mt(S.ticks.stroke),S.border.stroke=mt(S.border.stroke);let se=S.values;S.values=Cs(se)&&!Cs(se[0])?mt(se):H?Cs(se)?Wp(J,Gp(se,z)):zp(se)?TT(J,se):se||fe:se||OT,S.filter=mt(S.filter||(I.distr>=3&&I.log==10?GT:I.distr==3&&I.log==2?WT:R0)),S.font=rm(S.font),S.labelFont=rm(S.labelFont),S._size=S.size(n,null,T,0),S._space=S._rotate=S._incrs=S._found=S._splits=S._values=null,S._size>0&&(Xi[T]=!0,S._el=vi(A1,h))}}function Hs(S,T,D,I){let[H,se,de,ge]=D,ye=T%2,Re=0;return ye==0&&(ge||se)&&(Re=T==0&&!H||T==2&&!de?fn(jp.size/3):0),ye==1&&(H||de)&&(Re=T==1&&!se||T==3&&!ge?fn(Kp.size/2):0),Re}const C=n.padding=(i.padding||[Hs,Hs,Hs,Hs]).map(S=>mt(St(S,Hs))),q=n._padding=C.map((S,T)=>S(n,T,Xi,0));let Q,te=null,G=null;const Me=s==1?x[0].idxs:null;let be=null,Ue=!1;function ze(S,T){if(e=S??[],n.data=n._data=e,s==2){Q=0;for(let D=1;D<x.length;D++)Q+=e[D][0].length}else{e.length==0&&(n.data=n._data=e=[[]]),be=e[0],Q=be.length;let D=e;if(N==2){D=e.slice();let I=D[0]=Array(Q);for(let H=0;H<Q;H++)I[H]=H}n._data=e=D}if(_r(!0),Mn("setData"),N==2&&(W=!0),T!==!1){let D=b;D.auto(n,Ue)?Ze():ms(A,D.min,D.max),Ee=Ee||le.left>=0,ue=!0,xr()}}n.setData=ze;function Ze(){Ue=!0;let S,T;s==1&&(Q>0?(te=Me[0]=0,G=Me[1]=Q-1,S=e[0][te],T=e[0][G],N==2?(S=te,T=G):S==T&&(N==3?[S,T]=hc(S,S,b.log,!1):N==4?[S,T]=sd(S,S,b.log,!1):b.time?T=S+fn(86400/f):[S,T]=Kl(S,T,rd,!0))):(te=Me[0]=S=null,G=Me[1]=T=null)),ms(A,S,T)}let Je,ke,xt,Rt,kt,En,vt,We,en,st;function Qn(S,T,D,I,H,se){S??(S=Sp),D??(D=od),I??(I="butt"),H??(H=Sp),se??(se="round"),S!=Je&&(d.strokeStyle=Je=S),H!=ke&&(d.fillStyle=ke=H),T!=xt&&(d.lineWidth=xt=T),se!=kt&&(d.lineJoin=kt=se),I!=En&&(d.lineCap=En=I),D!=Rt&&d.setLineDash(Rt=D)}function ji(S,T,D,I){T!=ke&&(d.fillStyle=ke=T),S!=vt&&(d.font=vt=S),D!=We&&(d.textAlign=We=D),I!=en&&(d.textBaseline=en=I)}function An(S,T,D,I,H=0){if(I.length>0&&S.auto(n,Ue)&&(T==null||T.min==null)){let se=St(te,0),de=St(G,I.length-1),ge=D.min==null?G1(I,se,de,H,S.distr==3):[D.min,D.max];S.min=Di(S.min,D.min=ge[0]),S.max=Yn(S.max,D.max=ge[1])}}const gr={min:null,max:null};function qt(){for(let I in w){let H=w[I];Z[I]==null&&(H.min==null||Z[A]!=null&&H.auto(n,Ue))&&(Z[I]=gr)}for(let I in w){let H=w[I];Z[I]==null&&H.from!=null&&Z[H.from]!=null&&(Z[I]=gr)}Z[A]!=null&&_r(!0);let S={};for(let I in Z){let H=Z[I];if(H!=null){let se=S[I]=ma(w[I],J1);if(H.min!=null)cn(se,H);else if(I!=A||s==2)if(Q==0&&se.from==null){let de=se.range(n,null,null,I);se.min=de[0],se.max=de[1]}else se.min=It,se.max=-It}}if(Q>0){x.forEach((I,H)=>{if(s==1){let se=I.scale,de=Z[se];if(de==null)return;let ge=S[se];if(H==0){let ye=ge.range(n,ge.min,ge.max,se);ge.min=ye[0],ge.max=ye[1],te=Ri(ge.min,e[0]),G=Ri(ge.max,e[0]),G-te>1&&(e[0][te]<ge.min&&te++,e[0][G]>ge.max&&G--),I.min=be[te],I.max=be[G]}else I.show&&I.auto&&An(ge,de,I,e[H],I.sorted);I.idxs[0]=te,I.idxs[1]=G}else if(H>0&&I.show&&I.auto){let[se,de]=I.facets,ge=se.scale,ye=de.scale,[Re,Fe]=e[H],Ne=S[ge],rt=S[ye];Ne!=null&&An(Ne,Z[ge],se,Re,se.sorted),rt!=null&&An(rt,Z[ye],de,Fe,de.sorted),I.min=de.min,I.max=de.max}});for(let I in S){let H=S[I],se=Z[I];if(H.from==null&&(se==null||se.min==null)){let de=H.range(n,H.min==It?null:H.min,H.max==-It?null:H.max,I);H.min=de[0],H.max=de[1]}}}for(let I in S){let H=S[I];if(H.from!=null){let se=S[H.from];if(se.min==null)H.min=H.max=null;else{let de=H.range(n,se.min,se.max,I);H.min=de[0],H.max=de[1]}}}let T={},D=!1;for(let I in S){let H=S[I],se=w[I];if(se.min!=H.min||se.max!=H.max){se.min=H.min,se.max=H.max;let de=se.distr;se._min=de==3?hs(se.min):de==4?gh(se.min,se.asinh):de==100?se.fwd(se.min):se.min,se._max=de==3?hs(se.max):de==4?gh(se.max,se.asinh):de==100?se.fwd(se.max):se.max,T[I]=D=!0}}if(D){x.forEach((I,H)=>{s==2?H>0&&T.y&&(I._paths=null):T[I.scale]&&(I._paths=null)});for(let I in T)W=!0,Mn("setScale",I);ae&&le.left>=0&&(Ee=ue=!0)}for(let I in Z)Z[I]=null}function Fi(S){let T=wu(te-1,0,Q-1),D=wu(G+1,0,Q-1);for(;S[T]==null&&T>0;)T--;for(;S[D]==null&&D<Q-1;)D++;return[T,D]}function Ra(){if(Q>0){let S=x.some(T=>T._focus)&&st!=ni.alpha;S&&(d.globalAlpha=st=ni.alpha),x.forEach((T,D)=>{if(D>0&&T.show&&(Hn(D,!1),Hn(D,!0),T._paths==null)){let I=st;st!=T.alpha&&(d.globalAlpha=st=T.alpha);let H=s==2?[0,e[D][0].length-1]:Fi(e[D]);T._paths=T.paths(n,D,H[0],H[1]),st!=I&&(d.globalAlpha=st=I)}}),x.forEach((T,D)=>{if(D>0&&T.show){let I=st;st!=T.alpha&&(d.globalAlpha=st=T.alpha),T._paths!=null&&vr(D,!1);{let H=T._paths!=null?T._paths.gaps:null,se=T.points.show(n,D,te,G,H),de=T.points.filter(n,D,se,H);(se||de)&&(T.points._paths=T.points.paths(n,D,te,G,de),vr(D,!0))}st!=I&&(d.globalAlpha=st=I),Mn("drawSeries",D)}}),S&&(d.globalAlpha=st=1)}}function Hn(S,T){let D=T?x[S].points:x[S];D._stroke=D.stroke(n,S),D._fill=D.fill(n,S)}function vr(S,T){let D=T?x[S].points:x[S],{stroke:I,fill:H,clip:se,flags:de,_stroke:ge=D._stroke,_fill:ye=D._fill,_width:Re=D.width}=D._paths;Re=Ut(Re*Tt,3);let Fe=null,Ne=Re%2/2;T&&ye==null&&(ye=Re>0?"#fff":ge);let rt=D.pxAlign==1&&Ne>0;if(rt&&d.translate(Ne,Ne),!T){let bt=Ge-Re/2,yt=$e-Re/2,pt=Te+Re,Qe=tt+Re;Fe=new Path2D,Fe.rect(bt,yt,pt,Qe)}T?xc(ge,Re,D.dash,D.cap,ye,I,H,de,se):_c(S,ge,Re,D.dash,D.cap,ye,I,H,de,Fe,se),rt&&d.translate(-Ne,-Ne)}function _c(S,T,D,I,H,se,de,ge,ye,Re,Fe){let Ne=!1;ye!=0&&P.forEach((rt,bt)=>{if(rt.series[0]==S){let yt=x[rt.series[1]],pt=e[rt.series[1]],Qe=(yt._paths||co).band;Cs(Qe)&&(Qe=rt.dir==1?Qe[0]:Qe[1]);let qe,Vt=null;yt.show&&Qe&&$1(pt,te,G)?(Vt=rt.fill(n,bt)||se,qe=yt._paths.clip):Qe=null,xc(T,D,I,H,Vt,de,ge,ye,Re,Fe,qe,Qe),Ne=!0}}),Ne||xc(T,D,I,H,se,de,ge,ye,Re,Fe)}const Pa=ga|Eu;function xc(S,T,D,I,H,se,de,ge,ye,Re,Fe,Ne){Qn(S,T,D,I,H),(ye||Re||Ne)&&(d.save(),ye&&d.clip(ye),Re&&d.clip(Re)),Ne?(ge&Pa)==Pa?(d.clip(Ne),Fe&&d.clip(Fe),Ao(H,de),Eo(S,se,T)):ge&Eu?(Ao(H,de),d.clip(Ne),Eo(S,se,T)):ge&ga&&(d.save(),d.clip(Ne),Fe&&d.clip(Fe),Ao(H,de),d.restore(),Eo(S,se,T)):(Ao(H,de),Eo(S,se,T)),(ye||Re||Ne)&&d.restore()}function Eo(S,T,D){D>0&&(T instanceof Map?T.forEach((I,H)=>{d.strokeStyle=Je=H,d.stroke(I)}):T!=null&&S&&d.stroke(T))}function Ao(S,T){T instanceof Map?T.forEach((D,I)=>{d.fillStyle=ke=I,d.fill(D)}):T!=null&&S&&d.fill(T)}function ug(S,T,D,I){let H=M[S],se;if(I<=0)se=[0,0];else{let de=H._space=H.space(n,S,T,D,I),ge=H._incrs=H.incrs(n,S,T,D,I,de);se=dE(T,D,ge,I,de)}return H._found=se}function Mc(S,T,D,I,H,se,de,ge,ye,Re){let Fe=de%2/2;_==1&&d.translate(Fe,Fe),Qn(ge,de,ye,Re,ge),d.beginPath();let Ne,rt,bt,yt,pt=H+(I==0||I==3?-se:se);D==0?(rt=H,yt=pt):(Ne=H,bt=pt);for(let Qe=0;Qe<S.length;Qe++)T[Qe]!=null&&(D==0?Ne=bt=S[Qe]:rt=yt=S[Qe],d.moveTo(Ne,rt),d.lineTo(bt,yt));d.stroke(),_==1&&d.translate(-Fe,-Fe)}function dg(S){let T=!0;return M.forEach((D,I)=>{if(!D.show)return;let H=w[D.scale];if(H.min==null){D._show&&(T=!1,D._show=!1,_r(!1));return}else D._show||(T=!1,D._show=!0,_r(!1));let se=D.side,de=se%2,{min:ge,max:ye}=H,[Re,Fe]=ug(I,ge,ye,de==0?re:K);if(Fe==0)return;let Ne=H.distr==2,rt=D._splits=D.splits(n,I,ge,ye,Re,Fe,Ne),bt=H.distr==2?rt.map(qe=>be[qe]):rt,yt=H.distr==2?be[rt[1]]-be[rt[0]]:Re,pt=D._values=D.values(n,D.filter(n,bt,I,Fe,yt),I,Fe,yt);D._rotate=se==2?D.rotate(n,pt,I,Fe):0;let Qe=D._size;D._size=_i(D.size(n,pt,I,S)),Qe!=null&&D._size!=Qe&&(T=!1)}),T}function fg(S){let T=!0;return C.forEach((D,I)=>{let H=D(n,I,Xi,S);H!=q[I]&&(T=!1),q[I]=H}),T}function pg(){for(let S=0;S<M.length;S++){let T=M[S];if(!T.show||!T._show)continue;let D=T.side,I=D%2,H,se,de=T.stroke(n,S),ge=D==0||D==3?-1:1,[ye,Re]=T._found;if(T.label!=null){let Gn=T.labelGap*ge,ri=fn((T._lpos+Gn)*Tt);ji(T.labelFont[0],de,"center",D==2?$a:yp),d.save(),I==1?(H=se=0,d.translate(ri,fn($e+tt/2)),d.rotate((D==3?-Dl:Dl)/2)):(H=fn(Ge+Te/2),se=ri);let Ws=A0(T.label)?T.label(n,S,ye,Re):T.label;d.fillText(Ws,H,se),d.restore()}if(Re==0)continue;let Fe=w[T.scale],Ne=I==0?Te:tt,rt=I==0?Ge:$e,bt=T._splits,yt=Fe.distr==2?bt.map(Gn=>be[Gn]):bt,pt=Fe.distr==2?be[bt[1]]-be[bt[0]]:ye,Qe=T.ticks,qe=T.border,Vt=Qe.show?Qe.size:0,Jt=fn(Vt*Tt),yn=fn((T.alignTo==2?T._size-Vt-T.gap:T.gap)*Tt),Dt=T._rotate*-Dl/180,Qt=m(T._pos*Tt),ii=(Jt+yn)*ge,Vn=Qt+ii;se=I==0?Vn:0,H=I==1?Vn:0;let fi=T.font[0],Si=T.align==1?Gr:T.align==2?fh:Dt>0?Gr:Dt<0?fh:I==0?"center":D==3?fh:Gr,Ni=Dt||I==1?"middle":D==2?$a:yp;ji(fi,de,Si,Ni);let si=T.font[1]*T.lineGap,pi=bt.map(Gn=>m(o(Gn,Fe,Ne,rt))),wi=T._values;for(let Gn=0;Gn<wi.length;Gn++){let ri=wi[Gn];if(ri!=null){I==0?H=pi[Gn]:se=pi[Gn],ri=""+ri;let Ws=ri.indexOf(`
`)==-1?[ri]:ri.split(/\n/gm);for(let Wn=0;Wn<Ws.length;Wn++){let Fd=Ws[Wn];Dt?(d.save(),d.translate(H,se+Wn*si),d.rotate(Dt),d.fillText(Fd,0,0),d.restore()):d.fillText(Fd,H,se+Wn*si)}}}Qe.show&&Mc(pi,Qe.filter(n,yt,S,Re,pt),I,D,Qt,Jt,Ut(Qe.width*Tt,3),Qe.stroke(n,S),Qe.dash,Qe.cap);let ki=T.grid;ki.show&&Mc(pi,ki.filter(n,yt,S,Re,pt),I,I==0?2:1,I==0?$e:Ge,I==0?tt:Te,Ut(ki.width*Tt,3),ki.stroke(n,S),ki.dash,ki.cap),qe.show&&Mc([Qt],[1],I==0?1:0,I==0?1:2,I==1?$e:Ge,I==1?tt:Te,Ut(qe.width*Tt,3),qe.stroke(n,S),qe.dash,qe.cap)}Mn("drawAxes")}function _r(S){x.forEach((T,D)=>{D>0&&(T._paths=null,S&&(s==1?(T.min=null,T.max=null):T.facets.forEach(I=>{I.min=null,I.max=null})))})}let Co=!1,yc=!1,Da=[];function mg(){yc=!1;for(let S=0;S<Da.length;S++)Mn(...Da[S]);Da.length=0}function xr(){Co||(rT(md),Co=!0)}function gg(S,T=!1){Co=!0,yc=T,S(n),md(),T&&Da.length>0&&queueMicrotask(mg)}n.batch=gg;function md(){if(nt&&(qt(),nt=!1),W&&(Zt(),W=!1),wt){if(Gt(p,Gr,we),Gt(p,$a,_e),Gt(p,Ja,re),Gt(p,Qa,K),Gt(v,Gr,we),Gt(v,$a,_e),Gt(v,Ja,re),Gt(v,Qa,K),Gt(h,Ja,ie),Gt(h,Qa,he),u.width=fn(ie*Tt),u.height=fn(he*Tt),M.forEach(({_el:S,_show:T,_size:D,_pos:I,side:H})=>{if(S!=null)if(T){let se=H===3||H===0?D:0,de=H%2==1;Gt(S,de?"left":"top",I-se),Gt(S,de?"width":"height",D),Gt(S,de?"top":"left",de?_e:we),Gt(S,de?"height":"width",de?K:re),yu(S,nr)}else li(S,nr)}),Je=ke=xt=kt=En=vt=We=en=Rt=null,st=1,Ia(!0),we!=Pe||_e!=ut||re!=ve||K!=De){_r(!1);let S=re/ve,T=K/De;if(ae&&!Ee&&le.left>=0){le.left*=S,le.top*=T,Mr&&Oi(Mr,fn(le.left),0,re,K),yr&&Oi(yr,0,fn(le.top),re,K);for(let D=0;D<Bn.length;D++){let I=Bn[D];I!=null&&($i[D]*=S,yi[D]*=T,Oi(I,_i($i[D]),_i(yi[D]),re,K))}}if(Ht.show&&!oe&&Ht.left>=0&&Ht.width>0){Ht.left*=S,Ht.width*=S,Ht.top*=T,Ht.height*=T;for(let D in Ac)Gt(br,D,Ht[D])}Pe=we,ut=_e,ve=re,De=K}Mn("setSize"),wt=!1}ie>0&&he>0&&(d.clearRect(0,0,u.width,u.height),Mn("drawClear"),F.forEach(S=>S()),Mn("draw")),Ht.show&&oe&&(Ro(Ht),oe=!1),ae&&Ee&&(Gs(null,!0,!1),Ee=!1),Se.show&&Se.live&&ue&&(Tc(),ue=!1),l||(l=!0,n.status=1,Mn("ready")),Ue=!1,Co=!1}n.redraw=(S,T)=>{W=T||!1,S!==!1?ms(A,b.min,b.max):xr()};function Sc(S,T){let D=w[S];if(D.from==null){if(Q==0){let I=D.range(n,T.min,T.max,S);T.min=I[0],T.max=I[1]}if(T.min>T.max){let I=T.min;T.min=T.max,T.max=I}if(Q>1&&T.min!=null&&T.max!=null&&T.max-T.min<1e-16)return;S==A&&D.distr==2&&Q>0&&(T.min=Ri(T.min,e[0]),T.max=Ri(T.max,e[0]),T.min==T.max&&T.max++),Z[S]=T,nt=!0,xr()}}n.setScale=Sc;let wc,bc,Mr,yr,gd,vd,Sr,wr,_d,xd,Bt,$t,ps=!1;const Cn=le.drag;let _n=Cn.x,xn=Cn.y;ae&&(le.x&&(wc=vi(R1,v)),le.y&&(bc=vi(P1,v)),b.ori==0?(Mr=wc,yr=bc):(Mr=bc,yr=wc),Bt=le.left,$t=le.top);const Ht=n.select=cn({show:!0,over:!0,left:0,width:0,top:0,height:0},i.select),br=Ht.show?vi(C1,Ht.over?v:p):null;function Ro(S,T){if(Ht.show){for(let D in S)Ht[D]=S[D],D in Ac&&Gt(br,D,S[D]);T!==!1&&Mn("setSelect")}}n.setSelect=Ro;function vg(S){if(x[S].show)ee&&yu(Ve[S],nr);else if(ee&&li(Ve[S],nr),ae){let D=Li?Bn[0]:Bn[S];D!=null&&Oi(D,-10,-10,re,K)}}function ms(S,T,D){Sc(S,{min:T,max:D})}function Ii(S,T,D,I){T.focus!=null&&Sg(S),T.show!=null&&x.forEach((H,se)=>{se>0&&(S==se||S==null)&&(H.show=T.show,vg(se),s==2?(ms(H.facets[0].scale,null,null),ms(H.facets[1].scale,null,null)):ms(H.scale,null,null),xr())}),D!==!1&&Mn("setSeries",S,T),I&&Ua("setSeries",n,S,T)}n.setSeries=Ii;function _g(S,T){cn(P[S],T)}function xg(S,T){S.fill=mt(S.fill||null),S.dir=St(S.dir,-1),T=T??P.length,P.splice(T,0,S)}function Mg(S){S==null?P.length=0:P.splice(S,1)}n.addBand=xg,n.setBand=_g,n.delBand=Mg;function yg(S,T){x[S].alpha=T,ae&&Bn[S]!=null&&(Bn[S].style.opacity=T),ee&&Ve[S]&&(Ve[S].style.opacity=T)}let qi,gs,Vs;const Tr={focus:!0};function Sg(S){if(S!=Vs){let T=S==null,D=ni.alpha!=1;x.forEach((I,H)=>{if(s==1||H>0){let se=T||H==0||H==S;I._focus=T?null:se,D&&yg(H,se?1:ni.alpha)}}),Vs=S,D&&xr()}}ee&&Jn&&L(Tp,me,S=>{le._lock||(Tn(S),Vs!=null&&Ii(null,Tr,!0,an.setSeries))});function Ui(S,T,D){let I=w[T];D&&(S=S/Tt-(I.ori==1?_e:we));let H=re;I.ori==1&&(H=K,S=H-S),I.dir==-1&&(S=H-S);let se=I._min,de=I._max,ge=S/H,ye=se+(de-se)*ge,Re=I.distr;return Re==3?fa(10,ye):Re==4?j1(ye,I.asinh):Re==100?I.bwd(ye):ye}function wg(S,T){let D=Ui(S,A,T);return Ri(D,e[0],te,G)}n.valToIdx=S=>Ri(S,e[0]),n.posToIdx=wg,n.posToVal=Ui,n.valToPos=(S,T,D)=>w[T].ori==0?r(S,w[T],D?Te:re,D?Ge:0):a(S,w[T],D?tt:K,D?$e:0),n.setCursor=(S,T,D)=>{Bt=S.left,$t=S.top,Gs(null,T,D)};function Md(S,T){Gt(br,Gr,Ht.left=S),Gt(br,Ja,Ht.width=T)}function yd(S,T){Gt(br,$a,Ht.top=S),Gt(br,Qa,Ht.height=T)}let La=b.ori==0?Md:yd,Fa=b.ori==1?Md:yd;function bg(){if(ee&&Se.live)for(let S=s==2?1:0;S<x.length;S++){if(S==0&&B)continue;let T=Se.values[S],D=0;for(let I in T)et[S][D++].firstChild.nodeValue=T[I]}}function Tc(S,T){if(S!=null&&(S.idxs?S.idxs.forEach((D,I)=>{pe[I]=D}):Z1(S.idx)||pe.fill(S.idx),Se.idx=pe[0]),ee&&Se.live){for(let D=0;D<x.length;D++)(D>0||s==1&&!B)&&Tg(D,pe[D]);bg()}ue=!1,T!==!1&&Mn("setLegend")}n.setLegend=Tc;function Tg(S,T){let D=x[S],I=S==0&&N==2?be:e[S],H;B?H=D.values(n,S,T)??zt:(H=D.value(n,T==null?null:I[T],S,T),H=H==null?zt:{_:H}),Se.values[S]=H}function Gs(S,T,D){_d=Bt,xd=$t,[Bt,$t]=le.move(n,Bt,$t),le.left=Bt,le.top=$t,ae&&(Mr&&Oi(Mr,fn(Bt),0,re,K),yr&&Oi(yr,0,fn($t),re,K));let I,H=te>G;qi=It,gs=null;let se=b.ori==0?re:K,de=b.ori==1?re:K;if(Bt<0||Q==0||H){I=le.idx=null;for(let ge=0;ge<x.length;ge++){let ye=Bn[ge];ye!=null&&Oi(ye,-10,-10,re,K)}Jn&&Ii(null,Tr,!0,S==null&&an.setSeries),Se.live&&(pe.fill(I),ue=!0)}else{let ge,ye,Re;s==1&&(ge=b.ori==0?Bt:$t,ye=Ui(ge,A),I=le.idx=Ri(ye,e[0],te,G),Re=k(e[0][I],b,se,0));let Fe=-10,Ne=-10,rt=0,bt=0,yt=!0,pt="",Qe="";for(let qe=s==2?1:0;qe<x.length;qe++){let Vt=x[qe],Jt=pe[qe],yn=Jt==null?null:s==1?e[qe][Jt]:e[qe][1][Jt],Dt=le.dataIdx(n,qe,I,ye),Qt=Dt==null?null:s==1?e[qe][Dt]:e[qe][1][Dt];if(ue=ue||Qt!=yn||Dt!=Jt,pe[qe]=Dt,qe>0&&Vt.show){let ii=Dt==null?-10:Dt==I?Re:k(s==1?e[0][Dt]:e[qe][0][Dt],b,se,0),Vn=Qt==null?-10:X(Qt,s==1?w[Vt.scale]:w[Vt.facets[1].scale],de,0);if(Jn&&Qt!=null){let fi=b.ori==1?Bt:$t,Si=pn(ni.dist(n,qe,Dt,Vn,fi));if(Si<qi){let Ni=ni.bias;if(Ni!=0){let si=Ui(fi,Vt.scale),pi=Qt>=0?1:-1,wi=si>=0?1:-1;wi==pi&&(wi==1?Ni==1?Qt>=si:Qt<=si:Ni==1?Qt<=si:Qt>=si)&&(qi=Si,gs=qe)}else qi=Si,gs=qe}}if(ue||Li){let fi,Si;b.ori==0?(fi=ii,Si=Vn):(fi=Vn,Si=ii);let Ni,si,pi,wi,ki,Gn,ri=!0,Ws=un.bbox;if(Ws!=null){ri=!1;let Wn=Ws(n,qe);pi=Wn.left,wi=Wn.top,Ni=Wn.width,si=Wn.height}else pi=fi,wi=Si,Ni=si=un.size(n,qe);if(Gn=un.fill(n,qe),ki=un.stroke(n,qe),Li)qe==gs&&qi<=ni.prox&&(Fe=pi,Ne=wi,rt=Ni,bt=si,yt=ri,pt=Gn,Qe=ki);else{let Wn=Bn[qe];Wn!=null&&($i[qe]=pi,yi[qe]=wi,Lp(Wn,Ni,si,ri),Pp(Wn,Gn,ki),Oi(Wn,_i(pi),_i(wi),re,K))}}}}if(Li){let qe=ni.prox,Vt=Vs==null?qi<=qe:qi>qe||gs!=Vs;if(ue||Vt){let Jt=Bn[0];Jt!=null&&($i[0]=Fe,yi[0]=Ne,Lp(Jt,rt,bt,yt),Pp(Jt,pt,Qe),Oi(Jt,_i(Fe),_i(Ne),re,K))}}}if(Ht.show&&ps)if(S!=null){let[ge,ye]=an.scales,[Re,Fe]=an.match,[Ne,rt]=S.cursor.sync.scales,bt=S.cursor.drag;if(_n=bt._x,xn=bt._y,_n||xn){let{left:yt,top:pt,width:Qe,height:qe}=S.select,Vt=S.scales[Ne].ori,Jt=S.posToVal,yn,Dt,Qt,ii,Vn,fi=ge!=null&&Re(ge,Ne),Si=ye!=null&&Fe(ye,rt);fi&&_n?(Vt==0?(yn=yt,Dt=Qe):(yn=pt,Dt=qe),Qt=w[ge],ii=k(Jt(yn,Ne),Qt,se,0),Vn=k(Jt(yn+Dt,Ne),Qt,se,0),La(Di(ii,Vn),pn(Vn-ii))):La(0,se),Si&&xn?(Vt==1?(yn=yt,Dt=Qe):(yn=pt,Dt=qe),Qt=w[ye],ii=X(Jt(yn,rt),Qt,de,0),Vn=X(Jt(yn+Dt,rt),Qt,de,0),Fa(Di(ii,Vn),pn(Vn-ii))):Fa(0,de)}else Cc()}else{let ge=pn(_d-gd),ye=pn(xd-vd);if(b.ori==1){let rt=ge;ge=ye,ye=rt}_n=Cn.x&&ge>=Cn.dist,xn=Cn.y&&ye>=Cn.dist;let Re=Cn.uni;Re!=null?_n&&xn&&(_n=ge>=Re,xn=ye>=Re,!_n&&!xn&&(ye>ge?xn=!0:_n=!0)):Cn.x&&Cn.y&&(_n||xn)&&(_n=xn=!0);let Fe,Ne;_n&&(b.ori==0?(Fe=Sr,Ne=Bt):(Fe=wr,Ne=$t),La(Di(Fe,Ne),pn(Ne-Fe)),xn||Fa(0,de)),xn&&(b.ori==1?(Fe=Sr,Ne=Bt):(Fe=wr,Ne=$t),Fa(Di(Fe,Ne),pn(Ne-Fe)),_n||La(0,se)),!_n&&!xn&&(La(0,0),Fa(0,0))}if(Cn._x=_n,Cn._y=xn,S==null){if(D){if(Ld!=null){let[ge,ye]=an.scales;an.values[0]=ge!=null?Ui(b.ori==0?Bt:$t,ge):null,an.values[1]=ye!=null?Ui(b.ori==1?Bt:$t,ye):null}Ua(ph,n,Bt,$t,re,K,I)}if(Jn){let ge=D&&an.setSeries,ye=ni.prox;Vs==null?qi<=ye&&Ii(gs,Tr,!0,ge):qi>ye?Ii(null,Tr,!0,ge):gs!=Vs&&Ii(gs,Tr,!0,ge)}}ue&&(Se.idx=I,Tc()),T!==!1&&Mn("setCursor")}let vs=null;Object.defineProperty(n,"rect",{get(){return vs==null&&Ia(!1),vs}});function Ia(S=!1){S?vs=null:(vs=v.getBoundingClientRect(),Mn("syncRect",vs))}function Sd(S,T,D,I,H,se,de){le._lock||ps&&S!=null&&S.movementX==0&&S.movementY==0||(Ec(S,T,D,I,H,se,de,!1,S!=null),S!=null?Gs(null,!0,!0):Gs(T,!0,!1))}function Ec(S,T,D,I,H,se,de,ge,ye){if(vs==null&&Ia(!1),Tn(S),S!=null)D=S.clientX-vs.left,I=S.clientY-vs.top;else{if(D<0||I<0){Bt=-10,$t=-10;return}let[Re,Fe]=an.scales,Ne=T.cursor.sync,[rt,bt]=Ne.values,[yt,pt]=Ne.scales,[Qe,qe]=an.match,Vt=T.axes[0].side%2==1,Jt=b.ori==0?re:K,yn=b.ori==1?re:K,Dt=Vt?se:H,Qt=Vt?H:se,ii=Vt?I:D,Vn=Vt?D:I;if(yt!=null?D=Qe(Re,yt)?o(rt,w[Re],Jt,0):-10:D=Jt*(ii/Dt),pt!=null?I=qe(Fe,pt)?o(bt,w[Fe],yn,0):-10:I=yn*(Vn/Qt),b.ori==1){let fi=D;D=I,I=fi}}ye&&(T==null||T.cursor.event.type==ph)&&((D<=1||D>=re-1)&&(D=Js(D,re)),(I<=1||I>=K-1)&&(I=Js(I,K))),ge?(gd=D,vd=I,[Sr,wr]=le.move(n,D,I)):(Bt=D,$t=I)}const Ac={width:0,height:0,left:0,top:0};function Cc(){Ro(Ac,!1)}let wd,bd,Td,Ed;function Ad(S,T,D,I,H,se,de){ps=!0,_n=xn=Cn._x=Cn._y=!1,Ec(S,T,D,I,H,se,de,!0,!1),S!=null&&(L(mh,xu,Cd,!1),Ua(wp,n,Sr,wr,re,K,null));let{left:ge,top:ye,width:Re,height:Fe}=Ht;wd=ge,bd=ye,Td=Re,Ed=Fe}function Cd(S,T,D,I,H,se,de){ps=Cn._x=Cn._y=!1,Ec(S,T,D,I,H,se,de,!1,!0);let{left:ge,top:ye,width:Re,height:Fe}=Ht,Ne=Re>0||Fe>0,rt=wd!=ge||bd!=ye||Td!=Re||Ed!=Fe;if(Ne&&rt&&Ro(Ht),Cn.setScale&&Ne&&rt){let bt=ge,yt=Re,pt=ye,Qe=Fe;if(b.ori==1&&(bt=ye,yt=Fe,pt=ge,Qe=Re),_n&&ms(A,Ui(bt,A),Ui(bt+yt,A)),xn)for(let qe in w){let Vt=w[qe];qe!=A&&Vt.from==null&&Vt.min!=It&&ms(qe,Ui(pt+Qe,qe),Ui(pt,qe))}Cc()}else le.lock&&(le._lock=!le._lock,Gs(T,!0,S!=null));S!=null&&(E(mh,xu),Ua(mh,n,Bt,$t,re,K,null))}function Eg(S,T,D,I,H,se,de){if(le._lock)return;Tn(S);let ge=ps;if(ps){let ye=!0,Re=!0,Fe=10,Ne,rt;b.ori==0?(Ne=_n,rt=xn):(Ne=xn,rt=_n),Ne&&rt&&(ye=Bt<=Fe||Bt>=re-Fe,Re=$t<=Fe||$t>=K-Fe),Ne&&ye&&(Bt=Bt<Sr?0:re),rt&&Re&&($t=$t<wr?0:K),Gs(null,!0,!0),ps=!1}Bt=-10,$t=-10,pe.fill(null),Gs(null,!0,!0),ge&&(ps=ge)}function Rd(S,T,D,I,H,se,de){le._lock||(Tn(S),Ze(),Cc(),S!=null&&Ua(Ep,n,Bt,$t,re,K,null))}function Pd(){M.forEach(fE),Ce(n.width,n.height,!0)}or(Yl,aa,Pd);const Er={};Er.mousedown=Ad,Er.mousemove=Sd,Er.mouseup=Cd,Er.dblclick=Rd,Er.setSeries=(S,T,D,I)=>{let H=an.match[2];D=H(n,T,D),D!=-1&&Ii(D,I,!0,!1)},ae&&(L(wp,v,Ad),L(ph,v,Sd),L(bp,v,S=>{Tn(S),Ia(!1)}),L(Tp,v,Eg),L(Ep,v,Rd),Au.add(n),n.syncRect=Ia);const Po=n.hooks=i.hooks||{};function Mn(S,T,D){yc?Da.push([S,T,D]):S in Po&&Po[S].forEach(I=>{I.call(null,n,T,D)})}(i.plugins||[]).forEach(S=>{for(let T in S.hooks)Po[T]=(Po[T]||[]).concat(S.hooks[T])});const Dd=(S,T,D)=>D,an=cn({key:null,setSeries:!1,filters:{pub:kp,sub:kp},scales:[A,x[1]?x[1].scale:null],match:[Op,Op,Dd],values:[null,null]},le.sync);an.match.length==2&&an.match.push(Dd),le.sync=an;const Ld=an.key,Rc=Z0(Ld);function Ua(S,T,D,I,H,se,de){an.filters.pub(S,T,D,I,H,se,de)&&Rc.pub(S,T,D,I,H,se,de)}Rc.sub(n);function Ag(S,T,D,I,H,se,de){an.filters.sub(S,T,D,I,H,se,de)&&Er[S](null,T,D,I,H,se,de)}n.pub=Ag;function Cg(){Rc.unsub(n),Au.delete(n),Ke.clear(),Su(Yl,aa,Pd),c.remove(),me?.remove(),Mn("destroy")}n.destroy=Cg;function Pc(){Mn("init",i,e),ze(e||i.data,!1),Z[A]?Sc(A,Z[A]):Ze(),oe=Ht.show&&(Ht.width>0||Ht.height>0),Ee=ue=!0,Ce(i.width,i.height)}return x.forEach(Bs),M.forEach(vc),t?t instanceof HTMLElement?(t.appendChild(c),Pc()):t(n,Pc):Pc(),n}bn.assign=cn;bn.fmtNum=ad;bn.rangeNum=Kl;bn.rangeLog=hc;bn.rangeAsinh=sd;bn.orient=mr;bn.pxRatio=Tt;bn.join=sT;bn.fmtDate=ld,bn.tzDate=mT;bn.sync=Z0;{bn.addGap=ZT,bn.clipGaps=fc;let i=bn.paths={points:ig};i.linear=rg,i.stepped=eE,i.bars=tE,i.spline=iE}const hn={obs:"#2457d6",model:"#d9541a",astro:"#16857a",rain:"#6b9de8",muted:"#6a707a",faint:"#959aa3",grid:"rgba(20,23,28,0.07)",now:"#f2600c",peak:"#a8690a"},pE='10px "IBM Plex Mono", ui-monospace, monospace',ho=(i={})=>({stroke:hn.faint,font:pE,grid:{stroke:hn.grid,width:1},ticks:{show:!1},gap:4,...i}),Mh=_u;function cg({opts:i,data:e,height:t,now:n,keyStr:s,rows:r}){const a=Hi(null),o=Hi(null),l=Hi(n),c=Hi(r);return c.current=r,rr(()=>{const u=a.current,d=i(),h={hooks:{draw:[m=>{const f=m.valToPos(l.current,"x",!0);if(!isFinite(f)||f<m.bbox.left||f>m.bbox.left+m.bbox.width)return;const x=m.ctx;x.save(),x.strokeStyle=hn.now,x.lineWidth=1.5*devicePixelRatio,x.beginPath(),x.moveTo(f,m.bbox.top),x.lineTo(f,m.bbox.top+m.bbox.height),x.stroke(),x.fillStyle=hn.now,x.beginPath(),x.arc(f,m.bbox.top,3*devicePixelRatio,0,Math.PI*2),x.fill(),x.restore()}]}},p={hooks:{setCursor:[m=>{const f=m.cursor.idx,x=Mh();if(f==null||m.cursor.left===void 0||m.cursor.left<0){x.style.display="none";return}const M=m.over.getBoundingClientRect();x.innerHTML=c.current(m,f).join("<br>"),x.style.display="block";const w=x.offsetWidth,P=M.left+m.cursor.left;x.style.left=`${P+14+w>innerWidth?P-w-14:P+14}px`,x.style.top=`${M.top+(m.cursor.top??0)+14}px`}]}},v=new bn({...d,width:u.clientWidth||300,height:t,plugins:[h,p]},e,u);o.current=v,v.over.addEventListener("mouseleave",()=>{Mh().style.display="none"});const _=new ResizeObserver(()=>{u.clientWidth&&v.setSize({width:u.clientWidth,height:t})});return _.observe(u),()=>{_.disconnect(),v.destroy(),o.current=null,Mh().style.display="none"}},[s,t]),rr(()=>{o.current?.setData(e,!0)},[e]),rr(()=>{l.current=n,o.current?.redraw(!1)},[n]),g("div",{class:"uchart",ref:a})}const am=i=>Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2);function om({d:i,now:e,height:t}){const s=[i.series[0]?.x??[],...i.series.map(l=>l.y.map(c=>c===null||!isFinite(c)?null:c))],r=`${i.kind}|${i.series.map(l=>l.name+l.color).join(",")}|${i.xMin}|${i.xMax}|${(i.markers??[]).map(l=>l.x).join(",")}`;return g(cg,{opts:()=>({padding:[10,4,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[i.xMin,i.xMax]},y:i.kind==="bar"?{range:(l,c,u)=>[0,Math.max(10,u*1.1)]}:{}},axes:[ho({values:(l,c)=>c.map(u=>i.xTick(u)),space:56,incrs:[3,6,12,24]}),ho({size:36,values:(l,c)=>c.map(u=>am(u))})],series:[{},...i.series.map(l=>i.kind==="bar"?{stroke:l.color,fill:l.color+"b0",width:0,paths:bn.paths.bars({size:[.75,40],align:0}),points:{show:!1}}:{stroke:l.color,width:l.dashed?1.25:1.75,dash:l.dashed?[4,3]:void 0,points:{show:!1}})],hooks:{draw:[l=>{for(const c of i.markers??[]){const u=l.valToPos(c.x,"x",!0),d=l.valToPos(c.y,"y",!0),h=l.ctx;h.save(),h.fillStyle=c.color,h.strokeStyle="#fff",h.lineWidth=2*devicePixelRatio,h.beginPath(),h.arc(u,d,4*devicePixelRatio,0,Math.PI*2),h.fill(),h.stroke(),h.restore()}}]}}),data:s,height:t,now:e,keyStr:r,rows:(l,c)=>[`<b>${i.xTick(l.data[0][c])}</b>`,...i.series.map((u,d)=>{const h=l.data[d+1][c];return h==null?"":`<i style="background:${u.color}"></i>${u.name}: ${am(h)} ${i.unit}`}).filter(Boolean)]})}function mE({pins:i,t:e,sel:t,f:n,height:s,labels:r}){const a=.08333333333333333,o=Math.round(n.hours/a)+1,l=Array.from({length:o},(_,m)=>m*a),c=(_,m,f,x=!1)=>{if(!_.length||f<_[0]-1e-9||f>_[_.length-1]+1e-9)return x&&_.length&&f>=_[0]?m[m.length-1]:null;let M=0,w=_.length-1;for(;w-M>1;){const A=M+w>>1;_[A]<=f?M=A:w=A}if(w===M)return m[M];const P=(f-_[M])/(_[w]-_[M]||1);return m[M]+(m[w]-m[M])*P},u=(_,m,f)=>{let x=0;for(let M=0;M<_.length&&_[M]<=f;M++)x=m[M];return x},d=[l,...i.map(_=>l.map(m=>c(e,_.depth,m))),l.map(_=>c(n.tide.x,n.tide.y,_)),l.map(_=>u(n.rain.x,n.rain.y,_))],h=`${i.map(_=>`${_.id}:${_.name}:${_.color}`).join("|")}|${t}|${n.hours}`,p=()=>({padding:[10,2,0,0],cursor:{y:!1,points:{size:6}},legend:{show:!1},scales:{x:{time:!1,range:[0,n.hours]},m:{range:(_,m,f)=>[0,Math.max(.3,(f??0)*1.15)]},mpd:{},mm:{range:(_,m,f)=>[0,Math.max(10,(f??0)*2.4)]}},axes:[ho({values:(_,m)=>m.map(f=>n.xTick(f)),space:56,incrs:[3,6,12,24]}),ho({scale:"m",size:34,values:(_,m)=>m.map(f=>f.toFixed(f>=1?1:2))}),ho({scale:"mpd",side:1,size:34,grid:{show:!1},stroke:hn.model,values:(_,m)=>m.map(f=>f.toFixed(1))})],series:[{},...i.map(_=>({scale:"m",stroke:oo(_.color),width:_.id===t||t===null?2:1.25,fill:_.id===t?oo(_.color)+"22":void 0,points:{show:!1}})),{scale:"mpd",stroke:hn.model+"aa",width:1.25,dash:[4,3],points:{show:!1}},{scale:"mm",stroke:hn.rain,fill:hn.rain+"40",width:0,paths:bn.paths.bars({size:[1,20],align:1}),points:{show:!1}}]}),v=(_,m)=>{const f=[`<b>${n.xTick(_.data[0][m])}</b>`];i.forEach((w,P)=>{const A=_.data[P+1][m];A!=null&&f.push(`<i style="background:${oo(w.color)}"></i>${w.name}: ${A.toFixed(2)} m`)});const x=_.data[i.length+1][m],M=_.data[i.length+2][m];return x!=null&&f.push(`<i style="background:${hn.model}"></i>${r.sea}: ${x.toFixed(2)} mPD`),M!=null&&f.push(`<i style="background:${hn.rain}"></i>${r.rain}: ${M.toFixed(0)} mm/h`),f};return g(cg,{opts:p,data:d,height:s,now:n.cursor,keyStr:h,rows:v})}function gE(){const i=V.rightTab.value,e=V.validation.value.points.length,t=V.pins.value.list.length,n=a=>{V.rightTab.value=a,lc("hkfl.ui.right",a)},s=[["overview",$("概览","Overview"),null],["validation",$("验证","Validation"),e],["pins",$("钉点","Pins"),t],["forcing",O("forcing"),null]],r={overview:"peak",validation:"check",pins:"pin",forcing:"wave"};return i?g("aside",{class:"inspector float",id:"right","aria-label":O("comparison"),children:[g("div",{class:"tabs",role:"tablist",children:[s.map(([a,o,l])=>g("button",{role:"tab","aria-selected":i===a,class:i===a?"on":"","data-tab":a,onClick:()=>n(a),children:[o,l?g("span",{class:"n",children:l}):null]},a)),g("span",{class:`live ${V.playing.value?"on":""}`,children:V.playing.value?O("running"):O("paused")}),g("button",{class:"btn sm icon ghost close","data-tip":$("收起","Collapse"),"data-tip-pos":"left",onClick:()=>{V.rightTab.value=null},children:g(He,{name:"x",size:14})})]}),g("div",{class:"p-body",children:[i==="overview"&&g(vE,{}),i==="validation"&&g(bE,{}),i==="pins"&&g(TE,{}),i==="forcing"&&g(EE,{})]})]}):g("nav",{class:"rail right float",id:"right-rail","aria-label":O("comparison"),children:qb.map(a=>{const[,o,l]=s.find(c=>c[0]===a);return g("button",{"data-rtab":a,"data-tip":o,"data-tip-pos":"left",onClick:()=>n(a),children:[g(He,{name:r[a],size:18}),g("span",{children:o}),l?g("span",{class:"badge",children:l}):null]},a)})})}function Kr({a:i,b:e,unit:t,digits:n}){const s=i-e,r=Math.abs(s)<Math.pow(10,-n)/2?"":s>0?"bad":"good";return g("span",{class:`delta ${r}`,title:"B − A",children:[r&&g(He,{name:s>0?"up":"down",size:11}),s>=0?"+":"−",Math.abs(s).toFixed(n),t?` ${t}`:""]})}function ja({k:i,v:e,unit:t,foot:n}){return g("div",{class:"stat",children:[g("div",{class:"k",title:i,children:i}),g("div",{class:"v",children:[e,t&&g("span",{class:"u",children:t})]}),g("div",{class:"f",children:n})]})}function vE(){const i=V.metrics.value,e=V.compare.value?V.baseMetrics.value:null,t=V.scene.value,[n,s]=ql(O("hotspots")),[r,a]=ql(O("facilities"));return g(ht,{children:[g(rn,{title:O("metrics"),hint:V.waterMode.value==="max"?$("至此为止的最大值","maxima so far"):$("此刻","this moment"),children:[g("div",{id:"metrics",children:V.compare.value?g(xE,{a:e,b:i}):g(ME,{m:i,base:null})}),V.compare.value&&g("div",{class:"cmp-note",children:[g(He,{name:"compare",size:13}),g("span",{children:$(`分屏：左 A = ${Ls("A")}，右 B = ${Ls("B")}（拖动画面中央把手）`,`Split view: left A = ${Ls("A")}, right B = ${Ls("B")} (drag the handle)`)})]})]}),t?.facilities?.some(o=>o.ug)?g(rn,{title:$("地下空间","Underground spaces"),hint:$("灌入体积 ÷ 楼面面积","inflow volume ÷ floor area"),children:g("div",{id:"ugTable",children:g(_E,{})})}):null,g(rn,{title:n,hint:s,children:g("div",{id:"hotspots",children:g(yE,{})})}),t?.facilities?.length?g(rn,{title:r,hint:a,children:g("div",{id:"facTable",children:g(SE,{})})}):null]})}function _E(){const{m:i,base:e}=V.facilities.value,t=V.compare.value?e:null,n=(V.scene.value?.facilities??[]).filter(o=>o.ug);if(!n.length)return null;const s=n.map(o=>({f:o,d:i?.facDepths?.[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>l.d-o.d),r=(o,l)=>o>=l-.05?[$("灌满","full"),"bad"]:o>=1?[$("地下一层淹没","basement level flooded"),"bad"]:o>=.3?[$("车辆受损","cars damaged"),"warn"]:o>=.05?[$("进水","water entering"),"ok"]:[$("干","dry"),""],a=s.filter(o=>o.d>=.3).length;return g(ht,{children:[s.map(o=>{const l=o.f.ug.cap,[c,u]=r(o.d,l),d=Math.min(1,o.d/l);return g("div",{class:"ug",children:[g("div",{class:"ug-top",children:[g("span",{class:"ug-name",children:[g(M0,{html:ra[o.f.type]??""})," ",o.f.name]}),g("span",{class:`pill num ${u}`,children:[o.d.toFixed(2)," / ",l.toFixed(1)," m"]})]}),g("div",{class:"ug-bar",children:g("i",{style:{width:`${(d*100).toFixed(1)}%`,background:ba(o.d)}})}),g("div",{class:"ug-sub",children:[c,t?` · A ${(o.b??0).toFixed(2)} m`:"",o.f.ug.area?` · ${$("楼面","floor")} ${(o.f.ug.area/1e4).toFixed(2)} ha`:""]})]},o.f.id)}),g("p",{class:"caveat",children:[g(He,{name:"info",size:12}),g("span",{children:[a,"/",n.length," ",$("地库受浸（≥ 0.3 m）。地图上地库以透视方块显示：深色为地库体积，填充为灌入深度，地面上的柱是灌满比例","basements flooded (≥ 0.3 m). On the map each basement is an X-ray box: dark = its volume, filled = depth of water, the post above ground = filled fraction")]})]})]})}const hg=()=>V.compare.value?V.scenarios.value.find(i=>i.id===V.scenarioId.value)??null:null,Ls=i=>{const e=hg();return e?$(e[i].zh,e[i].en):O(i==="A"?"baseline":"withMeasures")};function xE({a:i,b:e}){const t=hg(),n=[[O("maxDepth"),s=>s.maxDepth,"m",2],[O("floodedArea"),s=>s.floodedAreaKm2,"km²",3],[O("severeArea"),s=>s.floodedAreaSevereKm2,"km²",3],[O("bldAffected"),s=>s.buildingsAffected,"",0],[O("volume"),s=>s.volumeMm3,"Mm³",3]];return g(ht,{children:[t&&g("div",{class:"ab-card",children:[g("div",{class:"ab-card-t",children:[g("span",{class:"grow",children:$(t.zh,t.en)}),g("button",{class:"btn sm ghost","data-ab-open":!0,onClick:()=>{V.abOpen.value=!V.abOpen.value},children:$("更换","Change")})]}),g("div",{class:"ab-card-d",children:$(t.desc_zh,t.desc_en)})]}),g("table",{class:"tbl ab-tbl",id:"abTable",children:[g("thead",{children:g("tr",{children:[g("th",{}),g("th",{class:"r",children:[g("span",{class:"ab-k",children:"A"}),g("div",{class:"ab-th",children:Ls("A")})]}),g("th",{class:"r",children:[g("span",{class:"ab-k b",children:"B"}),g("div",{class:"ab-th",children:Ls("B")})]}),g("th",{class:"r",children:"B − A"})]})}),g("tbody",{children:n.map(([s,r,a,o])=>g("tr",{children:[g("td",{children:[s,a&&g("span",{class:"u",children:[" ",a]})]}),g("td",{class:"n",children:i?r(i).toFixed(o):"—"}),g("td",{class:"n",children:e?r(e).toFixed(o):"—"}),g("td",{class:"n",children:i&&e?g(Kr,{a:r(e),b:r(i),unit:"",digits:o}):"—"})]},s))})]}),g("p",{class:"caveat",children:[g(He,{name:"info",size:12}),g("span",{children:$("两边用同一网格、同一参数，只差情景设定；红色 = B 更糟，绿色 = B 更好。","Same grid and parameters on both sides, only the scenario differs; red = B worse, green = B better.")})]})]})}function ME({m:i,base:e}){if(!i)return g("div",{class:"stats",children:[O("maxDepth"),O("floodedArea"),O("severeArea"),O("bldAffected")].map(s=>g(ja,{k:s,v:"—",unit:"",foot:O("noMetrics")},s))});const t=g0(i.maxDepth),n=i.floodedAreaKm2>0?i.floodedAreaSevereKm2/i.floodedAreaKm2*100:0;return g(ht,{children:[g("div",{class:"stats",children:[g(ja,{k:O("maxDepth"),v:i.maxDepth.toFixed(2),unit:"m",foot:e?g(Kr,{a:i.maxDepth,b:e.maxDepth,unit:"m",digits:2}):g(ht,{children:[g("span",{class:"swatch",style:{background:ba(i.maxDepth)}}),ed()[t]]})}),g(ja,{k:O("floodedArea"),v:i.floodedAreaKm2.toFixed(3),unit:"km²",foot:e?g(Kr,{a:i.floodedAreaKm2,b:e.floodedAreaKm2,unit:"km²",digits:3}):`${(i.floodedAreaKm2*100).toFixed(1)} ha`}),g(ja,{k:O("severeArea"),v:i.floodedAreaSevereKm2.toFixed(3),unit:"km²",foot:e?g(Kr,{a:i.floodedAreaSevereKm2,b:e.floodedAreaSevereKm2,unit:"km²",digits:3}):`${n.toFixed(0)}% ${O("ofFlooded")}`}),g(ja,{k:O("bldAffected"),v:String(i.buildingsAffected),unit:"",foot:e?g(Kr,{a:i.buildingsAffected,b:e.buildingsAffected,unit:"",digits:0}):O("bldRule")})]}),g("div",{class:"readouts",children:[g("div",{children:[O("volume"),g("b",{children:[i.volumeMm3.toFixed(3)," Mm³"]}),e&&g(Kr,{a:i.volumeMm3,b:e.volumeMm3,unit:"Mm³",digits:3})]}),g("div",{children:[O("gaugeNow"),g("b",{children:Object.entries(i.gaugeLevels).map(([s,r])=>`${s} ${r.toFixed(2)} mPD`).join(" · ")||"—"})]})]})]})}function yE(){const i=V.hotspots.value;return i.length?g(ht,{children:i.map((e,t)=>g("div",{class:"hot","data-hot":t,role:"button",tabIndex:0,onClick:()=>Ie.onHotspot(e.x,e.y),onKeyDown:n=>{n.key==="Enter"&&Ie.onHotspot(e.x,e.y)},title:O("flyTo"),children:[g("span",{class:"rank",children:String(t+1).padStart(2,"0")}),g("div",{class:"h-main",children:[g("div",{class:"h-top",children:[g("span",{class:"h-name",children:e.name??""}),e.area?g("span",{class:"h-area",children:[(e.area/1e4).toFixed(1)," ha"]}):null,g("span",{class:"h-d",children:[e.depth.toFixed(2)," m"]})]}),g("div",{class:"h-bar",children:g("i",{style:{width:`${Math.min(100,e.depth/3*100).toFixed(1)}%`,background:ba(e.depth)}})})]}),g(He,{name:"flyto",size:13,cls:"h-fly"})]},t))}):g("div",{class:"empty",children:[g(He,{name:"inbox",size:16}),g("span",{children:O("noHot")})]})}function SE(){const{m:i,base:e}=V.facilities.value,t=V.compare.value?e:null,n=V.scene.value?.facilities;if(!n||!i?.facDepths)return g("div",{class:"empty",children:[g(He,{name:"inbox",size:16}),g("span",{children:O("noMetrics")})]});const r=n.map(o=>({f:o,d:i.facDepths[o.id]??0,b:t?.facDepths?.[o.id]})).sort((o,l)=>Math.max(l.d,l.b??0)-Math.max(o.d,o.b??0)).filter(o=>Math.max(o.d,o.b??0)>=.15),a=o=>g("span",{class:`pill num ${o>=.5?"bad":o>=.15?"warn":"ok"}`,children:o.toFixed(2)});return r.length?g(ht,{children:[g("table",{class:"tbl",children:[g("thead",{children:g("tr",{children:[g("th",{children:O("facility")}),t&&g("th",{class:"r",children:"A"}),g("th",{class:"r",children:[t?"B":O("maxDepth")," (m)"]})]})}),g("tbody",{children:r.slice(0,14).map(o=>g("tr",{children:[g("td",{children:g("div",{class:"fname",children:[g(M0,{html:ra[o.f.type]??""}),g("div",{children:[o.f.name,g("div",{class:"sub",children:O("ft_"+o.f.type)})]})]})}),t&&g("td",{class:"n",children:a(o.b??0)}),g("td",{class:"n",children:a(o.d)})]},o.f.id))})]}),g("p",{class:"caveat",children:[g(He,{name:"info",size:12}),g("span",{children:[r.length,"/",n.length," ",$("受影响（≥ 0.15 m）","affected (≥ 0.15 m)"),r.length>14?$("，仅列前 14",", top 14 shown"):"",t?` · A = ${Ls("A")}, B = ${Ls("B")}`:""]})]})]}):g("div",{class:"empty",children:[g(He,{name:"check",size:16}),g("span",{children:["0/",n.length," ",$("受影响（≥ 0.15 m）","affected (≥ 0.15 m)")]})]})}function wE(i,e){if(e===void 0)return"";const t=i.cls==="none"?0:i.depth,n=Math.max(.35,.5*t);return i.unrep||i.berm!==void 0&&e<.05?"unrep":i.cls==="none"?e<.2?"hit":"over":i.lower?e>=t-n?"hit":"under":Math.abs(e-t)<=n?"hit":e<t?"under":"over"}function bE(){const{points:i,m:e}=V.validation.value,[t,n]=ya(new Set);if(!i.length)return g("section",{class:"blk",children:g("div",{class:"empty",children:[g(He,{name:"inbox",size:16}),g("span",{children:O("noVal")})]})});const s=V.scene.value?.facilities??[],r=i.map(c=>wE(c,e?.valDepths[c.id])),a={hit:0,under:0,over:0,unrep:0};let o=0;r.forEach(c=>{c&&(o++,a[c]++)});const l=c=>{const u=new Set(t);u.has(c)?u.delete(c):u.add(c),n(u)};return g("section",{class:"blk",id:"valTable",children:[g("div",{class:"blk-h",children:g("span",{class:"micro",children:O("validation")})}),g("div",{class:"score",children:[g("div",{class:"big",children:[o?a.hit:"—",g("small",{children:["/ ",o||i.length]})]}),g("div",{class:"side",children:[g("div",{class:"cnt",children:[g("span",{children:[O("hit")," ",g("b",{children:a.hit})]}),g("span",{children:[O("under")," ",g("b",{children:a.under})]}),g("span",{children:[O("over")," ",g("b",{children:a.over})]}),a.unrep>0&&g("span",{children:[O("unrep")," ",g("b",{children:a.unrep})]})]}),g("div",{class:"ticks",children:r.map((c,u)=>g("i",{class:c},u))})]})]}),g("div",{class:"val-head",children:O("valHead")}),g("table",{class:"tbl",children:[g("thead",{children:g("tr",{children:[g("th",{children:O("place")}),g("th",{class:"r",children:[O("observed")," (m)"]}),g("th",{class:"r",children:[O("simulated")," (m)"]}),g("th",{})]})}),g("tbody",{children:i.map((c,u)=>{const d=e?.valDepths[c.id],h=c.cls==="none"?0:c.depth,p=r[u],v=c.grade,_=t.has(c.id),m=c.cls==="none"?"":v==="B"?"±0.3":v==="C"?"±50%":v==="D"?O("estimated"):"",f=c.ug?s.find(w=>w.id===c.ug):void 0,x=[c.ug?O("ugDepth")+(f?.ug?` · ${$("楼面","floor")} ${Math.round(f.ug.area).toLocaleString()} m²`:""):O("streetDepth"),c.snapped_m?O("snapped").replace("{d}",c.snapped_m.toFixed(0)):"",c.berm!==void 0?O("bermNote").replace("{z}",c.berm.toFixed(1)):""].filter(Boolean).join($("；","; ")),M=c.note_zh?$(c.note_zh,c.note_en??c.note_zh):"";return[g("tr",{class:`vrow ${_?"open":""}`,"data-vrow":c.id,onClick:()=>l(c.id),title:c.src,children:[g("td",{children:g("div",{class:"fname",children:[v&&g("span",{class:`grade ${v}`,title:O("grade"+v),children:v}),g("span",{children:[$(c.zh,c.en),c.ug?g("span",{class:"tag",children:$("地库","basement")}):c.berm!==void 0?g("span",{class:"tag",children:$("阶地","berm")}):null]})]})}),g("td",{class:"n",children:[c.cls==="none"?$("无水浸","none"):`${c.lower?"≥":""}${c.depth.toFixed(1)}`,m&&g("div",{class:"unc",children:m})]}),g("td",{class:"n",children:[d===void 0?"—":d.toFixed(2),d!==void 0&&p!=="unrep"&&!(c.lower&&d>=h)&&g("div",{class:"unc",children:["Δ ",d-h>=0?"+":"−",Math.abs(d-h).toFixed(2)]})]}),g("td",{class:"r",children:p?g("span",{class:`pill ${p==="hit"?"ok":p}`,children:O(p)}):g("span",{class:"pill mute",children:"—"})})]},c.id),_&&g("tr",{class:"vdet",children:g("td",{colSpan:4,children:g("dl",{class:"vdet-b",children:[v&&g(ht,{children:[g("dt",{children:$("可信度","Reliability")}),g("dd",{children:[O("grade"+v),m?` (${m})`:""]})]}),c.basis&&g(ht,{children:[g("dt",{children:O("basis")}),g("dd",{children:c.basis})]}),g("dt",{children:O("sampling")}),g("dd",{children:x}),M&&g(ht,{children:[g("dt",{children:O("modelNotes")}),g("dd",{children:M})]}),g("dt",{children:O("source")}),g("dd",{children:c.src})]})})},c.id+"_d")]})})]}),g("p",{class:"caveat",children:[g(He,{name:"info",size:12}),g("span",{children:O("hitRule")})]})]})}function TE(){const{list:i,t:e,sel:t,f:n}=V.pins.value;return i.length?g("section",{class:"blk",id:"pinBox",children:[g("div",{class:"blk-h",children:[g("span",{class:"micro",children:O("pins")}),g("span",{class:"hint"}),g("span",{class:"n",children:i.length})]}),i.map(s=>{const r=s.depth.length?s.depth[s.depth.length-1]:null,a=s.depth.length?Math.max(...s.depth):null;return g("div",{class:`pin-row ${s.id===t?"sel":""}`,"data-pin":s.id,onClick:o=>{o.target.tagName!=="INPUT"&&Ie.onSelectPin(t===s.id?null:s.id)},children:[g("span",{class:"dot",style:{background:oo(s.color)}}),g("input",{defaultValue:s.name,"aria-label":O("f_name"),onKeyDown:o=>{o.stopPropagation(),o.key==="Enter"&&o.currentTarget.blur()},onChange:o=>{const l=o.currentTarget.value.trim();Ie.onRenamePin(s.id,l||s.name)}}),g("span",{class:"pv",children:r===null?"—":g(ht,{children:[g("b",{children:[r.toFixed(2)," m"]}),g("br",{}),O("pinMax")," ",a.toFixed(2)]})}),g("span",{style:{display:"flex"},children:[g("button",{class:"btn sm icon ghost",title:O("flyTo"),onClick:o=>{o.stopPropagation(),Ie.onFlyPin(s.id)},children:g(He,{name:"flyto",size:13})}),g("button",{class:"btn sm icon ghost",title:O("delete"),onClick:o=>{o.stopPropagation(),Ie.onRemovePin(s.id)},children:g(He,{name:"x",size:13})})]})]},s.id)}),n&&g(ht,{children:[g("div",{class:"chart-key",style:{marginTop:"12px"},children:[i.map(s=>g("span",{children:[g("i",{style:{background:oo(s.color)}}),s.name]},s.id)),g("span",{children:[g("i",{class:"dash",style:{color:"var(--c-model)"}}),$("边界潮位 (mPD)","Sea level (mPD)")]}),g("span",{children:[g("i",{class:"bar",style:{background:"var(--c-rain)",opacity:.5}}),$("雨强","Rain")]})]}),g(mE,{pins:i,t:e,sel:t,f:n,height:200,labels:{sea:$("边界潮位","Sea level"),rain:$("雨强","Rain")}})]}),g("div",{class:"row",style:{marginTop:"10px"},children:[g("button",{class:"btn sm",onClick:()=>Ie.onPinMode(),children:[g(He,{name:"pin",size:13}),O("pinAdd")]}),g("span",{class:"grow"}),g("button",{class:"btn sm",onClick:()=>Ie.onExportPins(),children:[g(He,{name:"download",size:13}),O("exportCsv")]})]}),g("p",{class:"caveat",children:[g(He,{name:"info",size:12}),g("span",{children:O("pinRerun")})]})]}):g("section",{class:"blk",children:g("div",{class:"empty",children:[g(He,{name:"pin",size:16}),g("span",{children:[O("pinEmpty"),g("br",{}),g("button",{class:"btn sm",style:{marginTop:"10px"},onClick:()=>Ie.onPinMode(),children:[g(He,{name:"pin",size:13}),O("pinAdd")]})]})]})})}function EE(){const i=V.charts.value,e=V.chartCursor.value,t=V.event.value,[n,s]=Qb(O("tideChart")),[r,a]=ql(O("rainChart")),o=l=>g("div",{class:"chart-key",children:[l.series.map(c=>g("span",{children:[g("i",{class:l.kind==="bar"?"bar":c.dashed?"dash":"",style:c.dashed?{color:c.color}:{background:c.color}}),c.name]},c.name)),(l.markers??[]).map(c=>g("span",{children:[g("i",{class:"dot",style:{background:c.color}}),c.label]},c.label))]});return g(ht,{children:[g(rn,{title:n,hint:s,children:i?g(ht,{children:[o(i.tide),g(om,{d:i.tide,now:e,height:170})]}):null}),g(rn,{title:r,hint:a,children:i?g(ht,{children:[o(i.rain),g(om,{d:i.rain,now:e,height:120})]}):null}),t&&g(rn,{title:O("sources"),n:t.sources.length,children:g("ol",{class:"sources",children:t.sources.map((l,c)=>g("li",{children:l},c))})})]})}function AE(){const i=V.active.value,e=(t,n,s,r,a)=>g("button",{id:t,class:`btn icon ${r?"on":""}`,"aria-label":s,"aria-pressed":r,"data-tip":s,"data-tip-pos":"left",onClick:a,children:g(He,{name:n,size:16})});return g("div",{class:"mapctl",children:[g("div",{class:"ctl-stack float",role:"toolbar","aria-label":$("相机","Camera"),children:[e("btnBird","bird",O("camBird"),!1,()=>Ie.onCamera("bird")),e("btnStreet","street",O("camStreet"),!1,()=>Ie.onCamera("street")),e("btnFollow","target",O("camFollow"),!!i.btnFollow,()=>Ie.onCamera("follow")),g("hr",{}),e("btnOrbit","orbit",$("自动环绕","Orbit"),!!i.btnOrbit,()=>Ie.onOrbit()),e("btnTour","tour",$("电影式飞览","Cinematic tour"),!!i.btnTour,()=>Ie.onTour())]}),g("div",{class:"ctl-stack float",children:[g("button",{id:"btnExag",class:`btn icon txt ${V.exag.value!==1?"on":""}`,"data-tip":O("exag"),"data-tip-pos":"left",onClick:()=>Ie.onExag(),children:["×",V.exag.value]}),e("btnTex","map",V.texMode.value==="imagery"?$("切换到地图底图","Switch to map basemap"):$("切换到卫星影像","Switch to imagery"),!1,()=>Ie.onTexToggle())]})]})}function CE(){const[i,e]=ya(()=>{try{return localStorage.getItem("hkfl.ui.lgkeys")==="1"}catch{return!1}}),t=V.waterMode.value==="max",n=ed();return g("div",{class:"legend float",id:"legend",children:[g("div",{class:"lg-h",children:[g("span",{class:"lg-t",id:"legendTitle",children:O(t?"legendMax":"legendNow")}),g("span",{class:"lg-u",children:"m"}),g("span",{class:"grow"}),g("button",{class:"toggle","aria-label":$("图例说明","Legend keys"),"aria-expanded":i,onClick:()=>{e(!i),lc("hkfl.ui.lgkeys",i?"0":"1")},children:g(He,{name:"chev",size:14,cls:i?"":"rot"})})]}),g("div",{class:"steps",id:"legendSteps",children:Jb.map(s=>g("i",{style:{background:ba(s)}},s))}),g("div",{class:"breaks",children:["0.1","0.3","0.5","1","2"].map((s,r)=>g("span",{style:{left:`${(r+1)/6*100}%`},children:s},s))}),g("div",{class:"classes",id:"legendCls",children:n.map(s=>g("span",{children:s},s))}),i&&g("div",{class:"lg-keys",id:"legendKeys",children:[g("span",{children:[g("i",{class:"rise"}),O("lg_rise")]}),g("span",{children:[g("i",{class:"recede"}),O("lg_recede")]}),g("span",{children:[g("i",{class:"contour"}),O("lg_contour")]}),g("span",{children:[g("i",{class:"edge"}),O("lg_edge")]}),g("span",{children:[g("i",{class:"trace"}),O("lg_trace")]}),g("span",{children:[g("i",{class:"ug"}),O("lg_ug")]}),g("span",{children:[g("i",{class:"pt",style:{background:"var(--warn-dot)"}}),O("lg_val")]}),g("span",{children:[g("i",{class:"pt",style:{background:"var(--blue)"}}),O("lg_gauge")]}),g("span",{children:[g("i",{class:"pt",style:{background:"var(--bad)"}}),O("lg_fac")]})]})]})}const RE={60:["1分","1m"],300:["5分","5m"],900:["15分","15m"],1800:["30分","30m"],3600:["1时","1h"]},Rn={rainY:30,rainH:22,seaY:56,seaH:30};function lm(i,e){const t=Math.min(devicePixelRatio,2),n=i.clientWidth||600,s=i.clientHeight||90;(i.width!==n*t||i.height!==s*t)&&(i.width=n*t,i.height=s*t);const r=i.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,n,s);const a=h=>h/e.hours*n,o=Math.min(Rn.seaH,s-Rn.seaY-2);r.fillStyle="rgba(20,23,28,0.035)",r.fillRect(0,Rn.rainY,n,Rn.rainH),r.fillRect(0,Rn.seaY,n,o);const l=e.hours>30?6:3;r.font='10px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="center";for(let h=0;h<=e.hours+1e-6;h+=l){const p=Math.round(a(h))+.5;r.fillStyle="rgba(20,23,28,0.08)",r.fillRect(p-.5,Rn.rainY,1,Rn.seaY+o-Rn.rainY),h>0&&h<e.hours-.01&&(r.fillStyle=hn.faint,r.fillText(e.tick(h),p,10))}const c=Math.max(10,...e.rain.y),u=Math.max(1,n/Math.max(1,e.hours)-1.5);r.fillStyle=hn.rain;for(let h=0;h<e.rain.x.length;h++){const p=e.rain.y[h]/c*(Rn.rainH-3);p>.3&&r.fillRect(a(e.rain.x[h])+.75,Rn.rainY+Rn.rainH-p,u,p)}if(e.tide.y.length){const h=Math.min(...e.tide.y),p=Math.max(...e.tide.y),v=_=>Rn.seaY+o-3-(_-h)/Math.max(.05,p-h)*(o-8);r.beginPath(),e.tide.x.forEach((_,m)=>{const f=a(_),x=v(e.tide.y[m]);m===0?r.moveTo(f,x):r.lineTo(f,x)}),r.strokeStyle=hn.model,r.lineWidth=1.5,r.lineJoin="round",r.stroke(),r.lineTo(a(e.tide.x[e.tide.x.length-1]),Rn.seaY+o),r.lineTo(a(e.tide.x[0]),Rn.seaY+o),r.closePath(),r.fillStyle="rgba(217,84,26,0.08)",r.fill(),r.font='9.5px "IBM Plex Mono", ui-monospace, monospace',r.textAlign="right",r.fillStyle=hn.model,r.fillText(`${p.toFixed(1)}`,n-4,Rn.seaY+10)}r.font='9.5px "IBM Plex Sans", "Noto Sans SC", sans-serif',r.textAlign="left";const d=(h,p)=>{const v=r.measureText(h).width;r.fillStyle="rgba(251,251,252,0.85)",r.fillRect(3,p+2,v+8,13),r.fillStyle=hn.muted,r.fillText(h,7,p+12)};d($("雨强 mm/h","Rain mm/h"),Rn.rainY),d($("潮位 mPD","Sea level mPD"),Rn.seaY)}function PE(){const i=V.timeline.value,{label:e,frac:t}=V.time.value,n=V.playing.value||V.seeking.value,s=Hi(null),r=Hi(null),[a,o]=ya(null),l=Hi(!1);rr(()=>{i&&s.current&&lm(s.current,i)},[i]),rr(()=>{const f=r.current;if(!f)return;const x=new ResizeObserver(()=>{const M=V.timeline.value;M&&s.current&&lm(s.current,M)});return x.observe(f),()=>x.disconnect()},[]);const c=f=>{const x=r.current.getBoundingClientRect();return Math.min(1,Math.max(0,(f.clientX-x.left)/x.width))},u=(f,x)=>{const M=_u();M.innerHTML=f,M.style.display="block";const w=r.current.getBoundingClientRect(),P=M.offsetWidth;M.style.left=`${Math.min(innerWidth-P-8,Math.max(8,x-P/2))}px`,M.style.top=`${w.top-M.offsetHeight-10}px`},d=()=>{_u().style.display="none"},[h,p]=e.includes(",")?[e.split(",")[0],e.split(",")[1].replace("HKT","").trim()]:["",e],v=V.cond.value,_=V.trend.value,m=v?.signal?$(v.signal[0],v.signal[1]):"";return g("div",{class:"timeline float",id:"bottom",children:[g("div",{class:"tl-ctl",children:[g("div",{class:"tl-top",children:[g("button",{id:"btnPlay",class:`play ${n?"on":""}`,"aria-label":`${O("play")} / ${O("pause")}`,"data-tip":`${O("play")} / ${O("pause")} · Space`,"data-tip-pos":"right",onClick:()=>Ie.onPlayToggle(),children:g(He,{name:n?"pause":"play",size:17})}),g("div",{class:"clock",id:"timeLabel",children:[g("span",{class:"d",children:[h?`${h} · HKT`:"HKT",V.baked.value?g("span",{class:"baked-chip","data-tip":$("现在看的是预先算好的整场结果：拖时间轴、按 ▶ 都是即时回放（每 15 分钟一帧，帧间插值）。点右边 ↻ 从头实时计算","You are browsing the precomputed run: dragging the timeline and play are instant playback (a frame every 15 min, interpolated). ↻ on the right computes live from the start"),"data-tip-pos":"top",children:$("回放","Playback")}):null]}),g("span",{class:"t",children:p})]}),g("span",{class:"grow"}),g("button",{id:"btnReset",class:"btn sm icon ghost","aria-label":$("重置","Reset"),"data-tip":V.baked.value?$("从头实时计算（离开预计算回放）","Compute live from the start (leave the precomputed playback)"):$("从头重算","Restart the run"),onClick:()=>Ie.onReset(),children:g(He,{name:"reset",size:14})})]}),g(ir,{id:"speedBtns",cls:"full",items:Yb.map(f=>[f,RE[f][V.lang.value==="zh"?0:1]]),value:V.speed.value,onPick:f=>Ie.onSpeed(f)})]}),g("div",{class:"lanes",children:g("div",{id:"scrub",ref:r,tabIndex:0,role:"slider","aria-label":$("时间轴","Timeline"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(t*100),"aria-valuetext":e,onPointerDown:f=>{f.target.closest(".tmark")||(l.current=!0,f.currentTarget.setPointerCapture(f.pointerId))},onPointerMove:f=>{const x=f.target.closest(".tmark");if(x&&!l.current&&i){const w=i.marks[+x.dataset.mark];o(null),u(`<b>${$(w.zh,w.en)}</b><br>${i.fmt(w.h)}`,f.clientX);return}const M=c(f);o(M),i&&u(`<b>${i.fmt(M*i.hours)}</b>`,f.clientX),l.current&&V.baked.value&&Ie.onSeek(M)},onPointerUp:f=>{l.current&&(l.current=!1,Ie.onSeek(c(f)))},onPointerCancel:()=>{l.current=!1,o(null),d()},onPointerLeave:()=>{l.current||(o(null),d())},onKeyDown:f=>{if(!i)return;const x=.5/Math.max(1,i.hours),M=f.key==="ArrowRight"?t+x:f.key==="ArrowLeft"?t-x:f.key==="Home"?0:f.key==="End"?1:null;M!==null&&(f.preventDefault(),f.stopPropagation(),Ie.onSeek(Math.min(1,Math.max(0,M))))},children:[g("canvas",{id:"scrubCanvas",ref:s}),g("div",{class:"played",style:{width:`${(t*100).toFixed(3)}%`}}),i&&i.marks.filter(f=>f.h>=0&&f.h<=i.hours).map((f,x)=>g("span",{class:`tmark ${f.kind} ${f.tone??""}`,"data-mark":i.marks.indexOf(f),style:{left:`${(f.h/i.hours*100).toFixed(3)}%`},onClick:()=>Ie.onSeek(Math.min(1,Math.max(0,f.h/i.hours)))},x)),g("div",{class:"ghost",style:{display:a===null?"none":"block",left:`${((a??0)*100).toFixed(3)}%`}}),g("div",{class:"playhead",id:"playhead",style:{left:`${(t*100).toFixed(3)}%`}})]})}),g("div",{class:"tl-now",id:"stepInfo",children:[g("div",{class:"row2",children:[g("span",{class:"micro",style:{color:"var(--text-2)"},children:$("此刻","Now")}),g("span",{class:"grow"}),_&&g("span",{class:`trend ${_.dir}`,title:O("trendTip"),children:[_.dir!=="flat"&&g(He,{name:_.dir==="up"?"up":"down",size:11}),O(_.dir==="up"?"trendUp":_.dir==="down"?"trendDown":"trendFlat"),_.dir!=="flat"&&g("b",{children:[_.rate>0?"+":"−",Math.abs(_.rate*1e3).toFixed(0),"k m³/h"]})]})]}),v?g(ht,{children:[g("div",{class:"kv",children:[g("div",{children:[O("c_sea"),g("b",{children:[v.tide.toFixed(2),g("u",{children:"mPD"})]})]}),g("div",{children:[O("c_rain"),g("b",{children:[v.rain.toFixed(0),g("u",{children:"mm/h"})]})]}),g("div",{children:["Hs",g("b",{children:[v.hs.toFixed(1),g("u",{children:"m"})]})]})]}),g("div",{class:"row2",children:m?g("span",{class:`sig ${v0(v.signal[1])}`,title:m,children:m}):g("span",{class:"storm",children:$("无警告信号","No warning signal")})}),g("div",{class:"storm",title:$("求解器时间步 · 每帧步数","solver time step · steps per frame"),children:[v.storm?`${v.storm} · `:"","dt ",v.dt.toFixed(2)," s · ",v.n,"/f"]})]}):g("div",{class:"storm",children:O("noMetrics")})]})]})}function DE(){const i=V.status.value;return i?g("div",{class:"toast",id:"status",role:"status",children:i}):null}function LE(){const i=V.loading.value;return g("div",{id:"loading",style:{display:i?"flex":"none"},children:[g("div",{class:"ld-brand",children:[g("span",{class:"ld-mark",children:g("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","aria-hidden":"true",children:[g("path",{d:"M3 10c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"}),g("path",{d:"M3 16c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"})]})}),g("div",{children:[g("div",{class:"ld-nm",children:"HK Flood Lab"}),g("div",{class:"ld-sub",children:$("香港洪涝实验室 · 交互式洪水数字孪生","Hong Kong interactive flood digital twin")})]})]}),g("div",{class:"ld-bar",children:g("i",{id:"loadingBar",style:{width:`${Math.round((i?.frac??0)*100)}%`}})}),g("div",{class:"ld-msg",id:"loadingText",children:i?.text||O("loading")})]})}const ts=300,qa=104,ns=30,Wr=8,Ya=10,FE=18;function IE({c:i}){const e=i.series,[t,n]=ya(null),s=Math.max(.3,...e.d)*1.12,r=i.hours,a=v=>ns+v/r*(ts-ns-Wr),o=v=>Ya+(1-v/s)*(qa-Ya-FE),l=e.h.map((v,_)=>`${a(v).toFixed(1)},${o(e.d[_]).toFixed(1)}`),c=`M${a(e.h[0]).toFixed(1)},${o(0)} L${l.join(" L")} L${a(e.h[e.h.length-1]).toFixed(1)},${o(0)} Z`;let u=0;e.d.forEach((v,_)=>{v>e.d[u]&&(u=_)});const d=V.time.value.frac*r,h=[.3,.5,1,2].filter(v=>v<s),p=t===null?null:t;return g("svg",{class:"pc-chart",width:ts,height:qa,viewBox:`0 0 ${ts} ${qa}`,onPointerMove:v=>{const _=v.currentTarget.getBoundingClientRect(),m=(v.clientX-_.left-ns)/(ts-ns-Wr)*r;let f=0;for(let x=0;x<e.h.length;x++)Math.abs(e.h[x]-m)<Math.abs(e.h[f]-m)&&(f=x);n(f)},onPointerLeave:()=>n(null),role:"img","aria-label":$("该点水深随时间变化","Depth at this spot over the event"),children:[h.map(v=>g("g",{children:[g("line",{x1:ns,x2:ts-Wr,y1:o(v),y2:o(v),class:"pc-grid"}),g("text",{x:ns-4,y:o(v)+3,class:"pc-ax","text-anchor":"end",children:v})]},v)),g("line",{x1:ns,x2:ts-Wr,y1:o(0),y2:o(0),class:"pc-base"}),g("path",{d:c,class:"pc-area"}),g("polyline",{points:l.join(" "),class:"pc-line"}),g("line",{x1:a(d),x2:a(d),y1:Ya-4,y2:o(0),class:"pc-cur"}),e.d[u]>.01&&g("circle",{cx:a(e.h[u]),cy:o(e.d[u]),r:4,class:"pc-max",style:{fill:ba(e.d[u])}}),g("text",{x:ns,y:qa-4,class:"pc-ax",children:i.fmt(0)}),g("text",{x:ts-Wr,y:qa-4,class:"pc-ax","text-anchor":"end",children:i.fmt(r)}),p!==null&&g("g",{children:[g("line",{x1:a(e.h[p]),x2:a(e.h[p]),y1:Ya-4,y2:o(0),class:"pc-hov"}),g("circle",{cx:a(e.h[p]),cy:o(e.d[p]),r:3.5,class:"pc-dot"}),g("text",{x:Math.min(ts-Wr-2,Math.max(ns+2,a(e.h[p]))),y:Ya+2,class:"pc-tip","text-anchor":a(e.h[p])>ts/2?"end":"start",children:[i.fmt(e.h[p])," · ",e.d[p].toFixed(2)," m"]})]})]})}function UE(){const i=V.pointCard.value;if(!i)return null;const e=ed();let t=-1;i.series&&i.series.d.forEach((s,r)=>{(t<0||s>i.series.d[t])&&(t=r)});const n=i.series&&t>=0?Math.max(i.hmax,i.series.d[t]):i.hmax;return g("div",{class:"pointcard float",id:"pointCard",role:"dialog","aria-label":i.title,children:[g("div",{class:"pc-h",children:[g("div",{class:"pc-tt",children:[g("div",{class:"pc-name",children:i.title}),i.sub&&g("div",{class:"pc-sub",children:i.sub})]}),g("button",{class:"btn sm icon ghost","aria-label":$("关闭","Close"),onClick:()=>Ie.onPointCard(null),children:g(He,{name:"x",size:14})})]}),i.sea?g("div",{class:"pc-note",children:$("海域：水位由潮位边界给定","Sea: the level is the tidal boundary")}):g(ht,{children:[g("div",{class:"pc-stats",children:[g("div",{children:[g("span",{class:"pc-k",children:$("最大水深","Max depth")}),g("span",{class:"pc-v",children:n>=.01?g(ht,{children:[g("i",{class:"sw",style:{background:ba(n)}}),n.toFixed(2)," m"]}):$("未积水","dry")}),n>=.01&&g("span",{class:"pc-c",children:[e[g0(n)],i.series&&t>=0?` · ${i.fmt(i.series.h[t])}`:""]})]}),g("div",{children:[g("span",{class:"pc-k",children:$("此刻","Now")}),g("span",{class:"pc-v",children:i.now>=.01?`${i.now.toFixed(2)} m`:$("干","dry")})]}),g("div",{children:[g("span",{class:"pc-k",children:$("地面","Ground")}),g("span",{class:"pc-v",children:[i.ground.toFixed(1),g("small",{children:" mPD"})]})]})]}),i.series?g(IE,{c:i}):g("div",{class:"pc-note",children:i.loading?$("读取水深曲线…","Loading the depth curve…"):$("这个配置没有预计算曲线。点「钉住」后从头实时跑一遍即可得到曲线。","No precomputed curve for this configuration. Pin it and run from the start to get its curve.")})]}),g("div",{class:"pc-foot",children:g("button",{class:"btn sm",onClick:()=>Ie.onPinHere(i.x,i.y),children:[g(He,{name:"pin",size:13}),$("钉住","Pin")]})})]})}function NE(){const i=V.lang.value,e=`shell ${V.leftTab.value?"":"left-closed"} ${V.rightTab.value?"":"right-closed"} ${V.panelsOff.value?"panels-off":""}`;return g("div",{class:e,children:[g(s1,{}),g(m1,{}),g(gE,{}),g(AE,{}),g(CE,{}),g(PE,{}),g(DE,{}),g(UE,{}),g(LE,{})]},i)}class kE{constructor(e){Zb(e),kb(Jm(NE,{}),document.getElementById("ui-root")),this.labelSwipe()}labelSwipe(){const e=V.scenarios.value.find(t=>t.id===V.scenarioId.value);document.getElementById("swipeL").textContent=e?$(e.A.zh,e.A.en):O("swipeLeft").replace(/[◀▶]/g,"").trim(),document.getElementById("swipeR").textContent=e?$(e.B.zh,e.B.en):O("swipeRight").replace(/[◀▶]/g,"").trim()}get newRole(){return V.newRole.value}get showFac(){return V.showFac.value}getMeasureParams(e){return V.measureParams.value[e]}relabel(){V.lang.value=Ns(),this.labelSwipe()}setScenes(e,t){V.scenes.value=e,V.sceneId.value=t}setEvents(e,t){V.events.value=e,V.eventId.value=t}setScene(e){V.scene.value=e,V.sceneId.value=e.id}setEvent(e){V.event.value=e,V.eventId.value=e.id}setParams(e){V.params.value={...e}}setMeasures(e,t){V.measures.value=e,V.selMeasure.value=t}setMeasuresDirty(e,t){V.dirty.value=e,V.devSave.value=t}setDraftInfo(e,t){V.draft.value={n:e,len:t}}setTool(e){V.tool.value=e,e&&(V.leftTab.value="measures")}setCompare(e){V.compare.value=e}setScenarios(e,t){V.scenarios.value=e,V.scenarioId.value=t,this.labelSwipe()}setFlowMode(e){V.flowMode.value=e}setActive(e,t){V.active.value={...V.active.value,[e]:t}}setPlaying(e){V.playing.value=e}setSpeed(e){V.speed.value=e}setTime(e,t){V.time.value={label:e,frac:t}}setConditions(e){V.cond.value=e}setStepInfo(e){}setStatus(e){V.status.value=e}setLoading(e,t=""){V.loading.value=e===null?null:{frac:e,text:t}}togglePanels(){V.panelsOff.value=!V.panelsOff.value}setTimeline(e){V.timeline.value=e}setWaterMode(e){V.waterMode.value=e}setView2D(e){V.view2d.value=e}setFx(e){V.fx.value=e}setBaked(e){V.baked.value=e}setSeeking(e){V.seeking.value=e}setPointCard(e){V.pointCard.value=e}setExag(e){V.exag.value=e}setTexMode(e){V.texMode.value=e}setCharts(e,t){V.charts.value={tide:e,rain:t}}setChartCursor(e){V.chartCursor.value=e}setMetrics(e,t){const n=V.metrics.value;if(!e)V.trend.value=null;else if(n&&e.t>n.t){const s=(e.volumeMm3-n.volumeMm3)/((e.t-n.t)/3600),r=Math.abs(s)/Math.max(.001,e.volumeMm3);V.trend.value={dir:e.volumeMm3<5e-4||r<.02?"flat":s>0?"up":"down",rate:s}}V.metrics.value=e,V.baseMetrics.value=t}setHotspots(e){V.hotspots.value=e}setValidation(e,t){V.validation.value={points:e,m:t}}setFacilities(e,t){V.facilities.value={m:e,base:t}}setPins(e,t,n,s){V.pins.value={list:e.map(r=>({...r,depth:r.depth.slice()})),t:t.slice(),sel:n,f:s}}}const OE=()=>V.pointCard.value,$r=900,zE="v1.5",xl="./".replace(/\/$/,""),cm={"hk-island-east":"mangkhut-2018","tseung-kwan-o":"mangkhut-2018","sha-tin":"wanda-1962","tai-po":"mangkhut-2018","wong-tai-sin":"rainstorm-2023","victoria-harbour":"dubhe-1000","tai-o":"hato-2017","hk-overview":"dubhe-1000"},hm=[12723548,1023370,7358696,11566347,6067213,4804695];function gi(i){return new Date(i.length===16?`${i}:00+08:00`:`${i}+08:00`)}class BE{constructor(){U(this,"world");U(this,"ui");U(this,"solver",null);U(this,"baseline",null);U(this,"assets",null);U(this,"event",null);U(this,"sceneList",[]);U(this,"eventList",[]);U(this,"sceneId","wong-tai-sin");U(this,"eventId","rainstorm-2023");U(this,"params",{surgeScale:1,waveSetup:.2,waveHs:3,slr:0,rainScale:1,drainMmPerHour:40,hillCapMmPerHour:40,recoverGain:6,tideLockM:1.5,buildingsBlock:!0,manning:.035,subgrid:!0});U(this,"measures",null);U(this,"forcing",null);U(this,"playing",!1);U(this,"speed",900);U(this,"simT",0);U(this,"windowSec",86400);U(this,"compare",!1);U(this,"showBaseline",!1);U(this,"scenarioId","measures");U(this,"sceneScenarios",[]);U(this,"scenarioList",[]);U(this,"scenarioPick",{});U(this,"flowMode","none");U(this,"splitFrac",.5);U(this,"showFacilities",!0);U(this,"flyAfterSeek",!1);U(this,"hinted",!1);U(this,"waterMode","now");U(this,"showLandmarks",!0);U(this,"showMeasureLabels",!1);U(this,"follow",!1);U(this,"followAt",null);U(this,"pins",[]);U(this,"pinT",[]);U(this,"pinMode",!1);U(this,"selPin",null);U(this,"pinSeq",1);U(this,"lastPinSample",-1e9);U(this,"spawnA",new Float32Array(0));U(this,"spawnB",new Float32Array(0));U(this,"metrics",null);U(this,"baseMetrics",null);U(this,"tool",null);U(this,"draft",[]);U(this,"selectedMeasure",null);U(this,"snapShore",!0);U(this,"modSigA","");U(this,"modSigB","");U(this,"lastFrame",performance.now());U(this,"lastMetrics",0);U(this,"lastLightning",0);U(this,"metricsT",-1);U(this,"seekTarget",null);U(this,"dtBase",.5);U(this,"maxDepthSeen",0);U(this,"snaps",[]);U(this,"snapPool",[]);U(this,"snapEvery",0);U(this,"nextSnapT",0);U(this,"cache",null);U(this,"cacheKey",null);U(this,"cachedTimes",new Set);U(this,"cacheToken",0);U(this,"loadingToken",0);U(this,"bakedMan",new Map);U(this,"resultPending",!1);U(this,"noBake",new URLSearchParams(location.search).has("bake"));U(this,"view2d",!0);U(this,"pbShown",!1);U(this,"card",null);U(this,"cardSeq",0);U(this,"series",null);U(this,"pbKey",null);U(this,"pb",null);U(this,"names",null);U(this,"flashTimer",0);const e=document.getElementById("view");this.world=new Ab(e,document.getElementById("labels")),this.world.setView2D(this.view2d,!1),this.ui=new kE({onSceneChange:t=>{this.sceneId=t,this.eventId=cm[t]??this.eventId,this.ui.setEvents(this.eventList,this.eventId),this.load()},onEventChange:t=>{this.eventId=t,this.load(!1)},onParamChange:t=>{this.params=t,this.applyParams(),this.restart()},onMeasureTool:t=>this.setTool(t),onFinishDraft:()=>this.finishDraft(),onCancelDraft:()=>{this.draft=[],this.world.setDraft([],"wall"),this.setTool(null)},onUndoVertex:()=>this.undoVertex(),onSnapToggle:t=>{this.snapShore=t},onRemoveMeasure:t=>{this.measures?.remove(t),this.selectedMeasure===t&&(this.selectedMeasure=null),this.measuresChanged()},onClearMeasures:()=>{this.measures?.clearWhatIf(),this.selectedMeasure=null,this.measuresChanged()},onMeasureParam:()=>{},onSelectMeasure:t=>this.selectMeasure(t),onUpdateMeasure:(t,n)=>{this.measures?.update(t,n),this.measuresChanged()},onSaveMeasures:()=>this.saveMeasures(),onExportMeasures:()=>this.exportMeasures(),onImportMeasures:t=>this.importMeasures(t),onRevertMeasures:()=>this.revertMeasures(),onPlayToggle:()=>this.togglePlay(),onReset:()=>{this.pbKey=null,this.ui.setBaked(!1),this.restart(),this.setWater("now"),this.setPlaying(!0)},onView2D:t=>this.setView2D(t),onPointCard:()=>this.closeCard(),onPinHere:(t,n)=>{this.closeCard(),this.addPin(t,n)},onFx:t=>{this.world.setFx(t),this.ui.setFx(t)},onSpeed:t=>{this.speed=t,this.ui.setSpeed(t)},onSeek:t=>this.seek(t*this.windowSec),onCompare:()=>this.toggleCompare(),onScenario:t=>this.setScenario(t),onOrbit:()=>{this.view2d&&this.setView2D(!1);const t=this.world.director.controls;t.autoRotate=!t.autoRotate,t.autoRotateSpeed=.6,this.ui.setActive("btnOrbit",t.autoRotate)},onTour:()=>{this.view2d&&this.setView2D(!1),this.tour()},onTexToggle:()=>{this.world.setTextureMode(this.world.texMode==="imagery"?"basemap":"imagery"),this.ui.setTexMode(this.world.texMode)},onPanels:()=>{this.ui.togglePanels(),this.syncLabelInset()},onLang:()=>{zb(Ns()==="zh"?"en":"zh"),document.documentElement.lang=Ns()==="zh"?"zh-CN":"en",this.ui.relabel(),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),this.refreshCharts(),this.refreshLabels()},onFlyTo:(t,n)=>this.world.director.flyTo(this.world.viewAt(t,n,700),2.2),onShowMax:t=>this.world.setShowMax(t),onShowBaseline:t=>{this.showBaseline=t,this.bindView()},onFlowMode:()=>{this.cycleFlow(),this.flowNeedsWater()},onPeak:()=>this.jumpToPeak(),onHotspot:(t,n)=>this.world.director.flyTo(this.world.viewAt(t,n,450),2),onShowFacilities:t=>{this.showFacilities=t,this.refreshLabels()},onWaterMode:t=>this.setWater(t),onExag:()=>{const t=[1,1.5,2,3],n=t[(t.indexOf(this.world.exag)+1)%t.length];this.world.setExaggeration(n),this.ui.setExag(n),this.refreshLabels()},onCamera:t=>this.cameraPreset(t),onShowLandmarks:t=>{this.showLandmarks=t,this.refreshLabels()},onShowMeasureLabels:t=>{this.showMeasureLabels=t,this.refreshLabels()},onFine:t=>this.world.setFine(t),onClearCache:()=>{this.clearRunCache()},onShadows:t=>this.world.setShadows(t),onPinMode:()=>this.setPinMode(!this.pinMode),onRemovePin:t=>{this.pins=this.pins.filter(n=>n.id!==t),this.selPin===t&&(this.selPin=null),this.pinsChanged()},onRenamePin:(t,n)=>{const s=this.pins.find(r=>r.id===t);s&&(s.name=n,this.pinsChanged())},onSelectPin:t=>{this.selPin=t,this.pinsChanged()},onFlyPin:t=>{const n=this.pins.find(s=>s.id===t);n&&this.world.director.flyTo(this.world.viewAt(n.x,n.y,420),2)},onExportPins:()=>this.exportPins()}),this.ui.setSpeed(this.speed),this.ui.setParams(this.params),this.ui.setFlowMode(this.flowMode),this.bindPointer(e),this.bindSwipe(),window.addEventListener("resize",()=>this.syncLabelInset()),this.world.director.onTourEnd=()=>{this.ui.setActive("btnTour",!1),this.ui.setStatus(null)},this.init(),requestAnimationFrame(()=>this.frame())}async init(){try{[this.sceneList,this.eventList]=await Promise.all([Ng(),kg()])}catch(t){this.ui.setLoading(1,`数据索引加载失败 / failed to load index: ${t}`);return}const e=new URLSearchParams(location.search);e.get("scene")&&this.sceneList.some(t=>t.id===e.get("scene"))&&(this.sceneId=e.get("scene")),this.sceneList.some(t=>t.id===this.sceneId)||(this.sceneId=(this.sceneList.find(t=>!t.hidden)??this.sceneList[0]).id),this.eventId=e.get("event")??cm[this.sceneId]??this.eventList[0].id,this.eventList.some(t=>t.id===this.eventId)||(this.eventId=this.eventList[0].id),this.ui.setScenes(this.sceneList,this.sceneId),this.ui.setEvents(this.eventList,this.eventId),await this.load()}async load(e=!0){const t=++this.loadingToken;this.closeCard(),this.pbKey=null,this.pinMode&&this.setPinMode(!1),this.playing=!1,this.ui.setPlaying(!1),this.ui.setLoading(.02,O("loading"));try{const n=Og(this.eventId);if(e||!this.assets){if([this.assets,this.sceneScenarios]=await Promise.all([Bg(this.sceneId,(o,l)=>this.ui.setLoading(o*.8,`${O("loading")} ${l}`)),zg(this.sceneId)]),t!==this.loadingToken)return;this.buildSolvers()}if(this.event=await n,t!==this.loadingToken)return;history.replaceState(null,"",`?scene=${this.sceneId}&event=${this.eventId}`),this.params.waveSetup=this.event.kind==="typhoon"?.2:this.event.kind==="fictional"?.3:0;const s=this.event.tide.QUB;let r=0;if(s)for(let o=0;o<s.surge.length;o++){const l=s.surge[o];l!==null&&l>r&&(r=l)}this.params.waveHs=this.event.kind==="typhoon"?+(3*Math.min(1.5,Math.max(.3,r/2.35))).toFixed(2):this.event.kind==="fictional"?4:0,this.ui.setParams(this.params),this.buildForcing(),this.ui.setScene(this.assets.meta),this.ui.setEvent(this.event),this.hinted||(this.hinted=!0,setTimeout(()=>this.flash(this.view2d?$("拖动平移 · 滚轮缩放 · 顶栏切到 3D 可旋转查看楼宇","Drag to pan · wheel to zoom · switch to 3D in the top bar to orbit"):$("拖动平移 · 右键或 Shift + 拖动旋转 · 滚轮缩放","Drag to pan · right button or Shift + drag to orbit · wheel to zoom")),1500)),this.syncScenarios(),this.applyMeasures(),this.applyParams(),this.resultPending=!this.noBake,this.restart(),this.refreshCharts(),this.refreshLabels(),this.ui.setLoading(null);const a=this.noBake?null:await this.bakedManifest();if(t!==this.loadingToken)return;a&&a.key===this.cacheKey?this.resultPending&&this.ui.setStatus($("载入预计算结果…","Loading the precomputed result…")):(this.resultPending=!1,this.setPlaying(!0))}catch(n){console.error(n),this.ui.setLoading(1,`加载失败 / load failed: ${n}`)}}buildSolvers(){const e=this.assets,t=e.meta;this.solver?.dispose(),this.baseline?.dispose(),this.baseline=null,this.disposeSnapshots(),this.solver=new ta(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures=new Rb(t.cols,t.rows,t.res),this.measures.sea=e.mask,this.measures.dem=e.dem,this.measures.bld=e.bldh,this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.world.loadScene(e,this.solver.terrainTex,this.solver.modTex,this.solver.stateTex,this.solver.auxTex,this.solver.faceModTex,this.solver.sgTex?{c0:this.solver.sgTex[0],c1:this.solver.sgTex[1]}:null),this.spawnA=new Float32Array(t.cols*t.rows*4),this.spawnB=new Float32Array(t.cols*t.rows*4),this.compare&&this.makeBaseline(),this.syncSplit()}loadMeasures(){const e=this.assets,t=this.measures;t.replaceAll([]);for(const o of e.meta.defences??[])t.add({kind:"wall",pts:[{x:o.x,y:o.y}],cells:o.cells,height:o.height_m,key:o.id,name:o.zh,name_en:o.en,role:"record",built:o.built,in_dtm:o.in_dtm,src:o.src,locked:!0});const n=e.savedMeasures;let s=null;try{const o=localStorage.getItem(this.measuresKey());o&&(s=JSON.parse(o))}catch{s=null}const r=s&&(!n||(s.saved??"")>(n.saved??"")),a=r?s:n;a&&t.loadSaved(a,e.meta.origin),this.ui.setMeasuresDirty(!!r,!1)}measuresKey(){return`hkfl.measures.${this.sceneId}`}ctx(e,t=this.simT/3600,n){const s={eventId:this.eventId,eventStart:this.event?gi(this.event.window.start).getTime():0,simH:t,whatIf:e};if(n){const r=n.measures;s.whatIf=r==="all",s.bare=r==="none",Array.isArray(r)&&(s.keys=r),n.exclude?.length&&(s.exclude=n.exclude)}return s}sideCtx(e,t){const n=this.activeScenario();return n?this.ctx(!1,t,n[e]):this.ctx(e==="B",t)}activeScenario(){return this.compare?this.scenarioList.find(e=>e.id===this.scenarioId)??null:null}sideModOf(e){const t=this.activeScenario();return t?Hg(t[e]):Xr}syncScenarios(){this.scenarioList=Gg(this.sceneScenarios,this.event);const e=this.measures?.measures.some(s=>(s.role??"whatif")==="whatif"&&!s.scenario_only),t=this.scenarioList.find(s=>!s.generic),n=this.scenarioPick[`${this.sceneId}/${this.eventId}`]??(t&&!e?t.id:"measures");this.scenarioId=this.scenarioList.some(s=>s.id===n)?n:"measures",this.ui.setScenarios(this.scenarioList,this.scenarioId)}setScenario(e){if(this.scenarioList.some(t=>t.id===e)){if(this.scenarioId=e,this.scenarioPick[`${this.sceneId}/${this.eventId}`]=e,this.ui.setScenarios(this.scenarioList,e),!this.compare){this.toggleCompare();return}this.applyMeasures(),this.buildForcing(),this.refreshCharts(),this.syncSplit(),this.restart(),this.setPlaying(!0)}}resolveMeasureTimes(){const e=this.measures,t=this.event;if(!e||!t)return;const n=gi(t.window.start).getTime();for(const s of e.measures)s.from&&(s.from_h=+((gi(s.from).getTime()-n)/36e5).toFixed(2)),s.to&&(s.to_h=+((gi(s.to).getTime()-n)/36e5).toFixed(2))}applyMeasures(){const e=this.measures;if(e){if(this.resolveMeasureTimes(),this.solver){const t=this.sideCtx("B");e.rasterize(this.solver.modData,t,this.solver.faceModData),this.solver.updateMod(),this.solver.setConnectors(e.connectors(t)),this.modSigA=e.signature(t)}if(this.baseline){const t=this.sideCtx("A");e.rasterize(this.baseline.modData,t,this.baseline.faceModData),this.baseline.updateMod(),this.baseline.setConnectors(e.connectors(t)),this.modSigB=e.signature(t)}this.refreshMeasureViews()}}refreshMeasureViews(){this.world.measuresChanged();const e=this.measures;if(!e)return;const t=this.sideCtx("B"),n=e.measures.map(s=>({m:s,eff:e.effect(s,t),cost:e.cost(s),exists:e.existsAt(s,t)}));this.world.setMeasures(n.map(s=>({m:s.m,eff:s.eff,selected:s.m.id===this.selectedMeasure}))),this.ui.setMeasures(n,this.selectedMeasure)}tickMeasures(){const e=this.measures;if(!e||!this.solver)return;const t=this.sideCtx("B"),n=e.signature(t);if(n!==this.modSigA&&(e.rasterize(this.solver.modData,t,this.solver.faceModData),this.solver.updateMod(),this.solver.setConnectors(e.connectors(t)),this.modSigA=n,this.refreshMeasureViews()),this.baseline){const s=this.sideCtx("A"),r=e.signature(s);r!==this.modSigB&&(e.rasterize(this.baseline.modData,s,this.baseline.faceModData),this.baseline.updateMod(),this.baseline.setConnectors(e.connectors(s)),this.modSigB=r)}}makeBaseline(){const e=this.assets,t=e.meta;if(this.baseline?.dispose(),this.baseline=new ta(this.world.renderer,{W:t.cols,H:t.rows,dx:t.res},e.dem,e.bldh,e.mask,e.expo,e.basin,e.chan,e.ug,e.sgCell&&e.sgFace?{cell:e.sgCell,face:e.sgFace}:null),this.measures){const n=this.sideCtx("A");this.measures.rasterize(this.baseline.modData,n,this.baseline.faceModData),this.baseline.updateMod(),this.baseline.setConnectors(this.measures.connectors(n)),this.modSigB=this.measures.signature(n)}}buildForcing(){const e=this.event,t=this.assets.meta;this.resolveMeasureTimes();const n=gi(e.window.start),s=gi(e.window.end);this.windowSec=(s.getTime()-n.getTime())/1e3;const r=e.tide[t.gauge]??e.tide.QUB,a=[],o=[],l=[],c=[],u=(t.tide_lag_min||0)*60;for(let x=0;x<r.t.length;x++){const M=(gi(r.t[x]).getTime()-n.getTime())/1e3+u;if(M<-7200||M>this.windowSec+7200)continue;const w=r.astro[x],P=r.surge[x];w!==null&&(a.push(M),l.push(w),c.push(r.obs[x]),o.push(w+(P??0)*t.tide_scale))}const d=[],h=[];for(let x=0;x<e.rain.t.length;x++)d.push((gi(e.rain.t[x]).getTime()-n.getTime())/1e3),h.push(e.rain.mm[x]);let p=.3;for(let x=0;x<a.length;x++)p=Math.max(p,o[x]-l[x]);this.forcing={tideT:a,tideL:o,astro:l,obs:c,rainT:d,rainMm:h,hours:this.windowSec/3600,start:n,surgePeak:p};const v=t.dem_stats?.zmin??0,_=Math.max(...o)+this.params.waveSetup+this.params.slr+Math.max(this.sideModOf("A").slr,this.sideModOf("B").slr),m=Math.max(2.5,_-v+1),f=.45*t.res/Math.sqrt(9.81*m);this.dtBase=f,this.maxDepthSeen=0,this.solver?.setDt(f),this.baseline?.setDt(f),this.drawTimeline()}drawTimeline(){const e=this.forcing,t=this.event;if(!e||!t||!this.assets)return;const n=[];for(const[a,o,l]of t.signals??[])n.push({h:(gi(a).getTime()-e.start.getTime())/36e5,zh:o,en:l,kind:"sig",tone:v0(l)});const s=this.assets.meta.rain_mult[this.eventId]??1;let r=-1;for(let a=0;a<e.rainMm.length;a++)(r<0||e.rainMm[a]>e.rainMm[r])&&(r=a);if(r>=0&&e.rainMm[r]*s>=10){const a=(e.rainMm[r]*s).toFixed(0);n.push({h:e.rainT[r]/3600+.5,zh:`雨强峰值 ${a} mm/h`,en:`Rain peak ${a} mm/h`,kind:"peak-rain"})}if(t.kind!=="rainstorm"&&e.tideL.length){let a=0;for(let l=1;l<e.tideL.length;l++)e.tideL[l]>e.tideL[a]&&(a=l);const o=e.tideL[a].toFixed(2);n.push({h:e.tideT[a]/3600,zh:`潮位峰值 ${o} mPD`,en:`Sea-level peak ${o} mPD`,kind:"peak-tide"})}this.ui.setTimeline({hours:e.hours,fmt:a=>this.timeLabel(a*3600),tick:a=>this.tick(a),marks:n,tide:{x:e.tideT.map(a=>a/3600),y:e.tideL},rain:{x:e.rainT.map(a=>a/3600),y:e.rainMm}})}stormParts(e){const t=this.event,n=this.forcing;if(!t||!n)return{sig:null,dist:""};const s=n.start.getTime()+e*1e3;let r=null;for(const[l,c,u]of t.signals??[])gi(l).getTime()<=s&&(r=[c,u]);let a="";const o=t.track;if(o.length>=2){const l=o.map(c=>gi(c[0]).getTime());if(s>=l[0]&&s<=l[l.length-1]){let c=0;for(;c<l.length-2&&l[c+1]<s;)c++;const u=(s-l[c])/(l[c+1]-l[c]),d=o[c][1]+(o[c+1][1]-o[c][1])*u,h=o[c][2]+(o[c+1][2]-o[c][2])*u,p=6371,v=(h-22.302)*Math.PI/180,_=(d-114.174)*Math.PI/180,m=Math.sin(v/2)**2+Math.cos(h*Math.PI/180)*Math.cos(22.302*Math.PI/180)*Math.sin(_/2)**2,f=2*p*Math.asin(Math.sqrt(m)),x=(Math.atan2(d-114.174,h-22.302)*180/Math.PI+360)%360,M=$("北,东北,东,东南,南,西南,西,西北","N,NE,E,SE,S,SW,W,NW").split(",");a=`${$("风暴中心","storm centre")} ${f.toFixed(0)} km ${M[Math.round(x/45)%8]}`}}return{sig:r,dist:a}}tick(e){return new Date(this.forcing.start.getTime()+e*36e5).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})}timeLabel(e){return new Date(this.forcing.start.getTime()+e*1e3).toLocaleString("en-GB",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Hong_Kong"})+" HKT"}tideAt(e,t=Xr){const n=this.forcing,s=Ka(n.tideT,n.tideL,e,n.astro),r=Ka(n.tideT,n.astro,e,n.astro),a=s-r;return r+a*this.params.surgeScale*t.tideScale+this.params.waveSetup+this.params.slr+t.slr}rainAt(e,t=Xr){const n=this.forcing;let s=0;for(let a=0;a<n.rainT.length;a++)if(e>=n.rainT[a]&&e<n.rainT[a]+3600){s=n.rainMm[a];break}const r=this.assets.meta.rain_mult[this.eventId]??1;return s*r*this.params.rainScale*t.rainScale/36e5}rainMmAt(e){return this.rainAt(e)*36e5}hsAt(e,t=Xr){const n=this.forcing,r=(Ka(n.tideT,n.tideL,e,n.astro)-Ka(n.tideT,n.astro,e,n.astro))*this.params.surgeScale*t.tideScale/n.surgePeak;return r<.2?0:this.params.waveHs*Math.min(1,r)}applyParams(){const e=this.params.drainMmPerHour/36e5;for(const t of[this.solver,this.baseline])t?.setParams({manning:this.params.manning,buildings:this.params.buildingsBlock,drain:e,bldBlock:1,manningBld:.6,hillCap:this.params.hillCapMmPerHour/36e5,recover:this.params.recoverGain,tideLock:this.params.tideLockM,subgrid:this.params.subgrid});this.world.setBuildingsBlock(this.params.buildingsBlock),this.world.setSubgrid(this.params.subgrid&&!!this.solver?.subgridAvailable),this.forcing&&this.buildForcing()}restart(){if(!(!this.solver||!this.forcing)){this.ui.setSeeking(!1),this.seekTarget=null,this.playback||this.ui.setBaked(!1),this.solver.reset(this.tideAt(0,this.sideModOf("B"))),this.baseline?.reset(this.tideAt(0,this.sideModOf("A"))),this.simT=0,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=0,this.solver.setDt(this.dtBase),this.baseline?.setDt(this.dtBase),this.ui.setMetrics(null,null),this.ui.setTime(this.timeLabel(0),0),this.pinT=[];for(const e of this.pins)e.depth=[],e.level=[];this.lastPinSample=-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.world.setBasements(this.basementItems(null)),this.clearSnapshots(),this.planSnapshots(),this.takeSnapshot(),this.loadCachedRun()}}runKey(){if(!this.assets||!this.solver||this.compare)return null;const e=this.assets.meta,t=this.measures?this.measures.measures.map(n=>({k:n.kind,r:n.role??"whatif",p:n.pts,c:n.cells?.length,h:n.height,q:n.rate,v:n.capacity,f:n.factor,d:n.radius,b:n.built,x:n.removed,i:n.in_dtm,e:n.events,s:n.from_h,t:n.to_h,n:n.info,o:n.scenario_only})):[];return Gw({v:zE,pits:Ml,scene:this.sceneId,stamp:e.dem_stats??null,cols:e.cols,rows:e.rows,event:this.eventId,params:this.params,sg:this.solver.subgridOn,ms:t})}async loadCachedRun(){this.cacheKey=this.runKey(),this.cachedTimes=new Set;const e=++this.cacheToken;if(!this.cacheKey||this.noBake||(this.cache||(this.cache=await zl.open()),!this.cache||e!==this.cacheToken))return;const t=this.cacheKey;let n=[];if(await this.loadBaked(t,e)==="stale")return;try{n=await this.cache.list(t)}catch{return}if(e!==this.cacheToken)return;for(const a of n)this.cachedTimes.add(a);const s=Math.max(2,Math.floor(32e7/ta.snapshotBytes(this.assets.meta.cols,this.assets.meta.rows)));let r=0;for(const a of n){if(e!==this.cacheToken||!this.solver)return;if(this.snaps.some(c=>Math.abs(c.t-a)<1))continue;if(this.snaps.length>=s)break;let o=null;try{o=await this.cache.get(t,a)}catch{o=null}if(!o||e!==this.cacheToken||!this.solver)continue;const l=this.solver.snapshotFromData(new Float32Array(o.state),new Float32Array(o.aux),o.t,o.dt,this.snapPool.pop(),o.conn?new Float32Array(o.conn):null);this.snaps.push({t:o.t,a:l,b:null,maxDepthSeen:o.maxDepthSeen}),r++}r&&this.flash($(`已从本机缓存恢复 ${r} 个关键帧，时间轴可直接跳转`,`${r} keyframes restored from the browser cache: the timeline jumps without recomputing`))}bakedManifest(){const e=`${this.sceneId}/${this.eventId}`;let t=this.bakedMan.get(e);return t||(t=fetch(`${xl}/scenes/${this.sceneId}/baked/${this.eventId}/manifest.json`).then(n=>n.ok?n.json():null).catch(()=>null),this.bakedMan.set(e,t)),t}async loadBaked(e,t){const n=await this.bakedManifest();if(t!==this.cacheToken||!this.solver)return"stale";if(n&&n.key===e){const s=`${xl}/scenes/${n.scene}/baked/${n.event}`;for(const r of[...n.frames].sort((a,o)=>o.t-a.t)){if(this.snaps.some(h=>Math.abs(h.t-r.t)<1))continue;let a=null;try{const h=await fetch(`${s}/${r.file}`);if(!h.ok)throw new Error(String(h.status));a=await new Response((h.body??new Blob([await h.arrayBuffer()]).stream()).pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}catch{a=null}if(t!==this.cacheToken||!this.solver)return"stale";if(!a||a.byteLength!==(r.n_state+r.n_aux+r.n_conn)*4)continue;const o=new Float32Array(a),l=r.n_state,c=l+r.n_aux,u=this.solver.snapshotFromData(o.slice(0,l),o.slice(l,c),r.t,r.dt,this.snapPool.pop(),r.n_conn?o.slice(c):null),d={t:r.t,a:u,b:null,maxDepthSeen:r.maxDepthSeen};this.snaps.push(d),this.cachedTimes.add(r.t),this.resultPending&&r.t>=this.windowSec-1&&this.simT===0&&!this.playing&&this.seekTarget===null&&this.showResult(d)}}return this.resultPending&&(this.resultPending=!1,this.ui.setStatus(null),!this.playing&&this.simT===0&&this.setPlaying(!0)),"ok"}showResult(e){this.resultPending=!1,this.ui.setStatus(null),this.restoreSnapshot(e),this.setWater("max"),this.ui.setBaked(!0);const t=this.cacheKey;this.loadSeries().then(n=>{n&&t===this.cacheKey&&(this.pbKey=t,this.ui.setBaked(!0))})}get playback(){return this.pbKey!==null&&this.pbKey===this.cacheKey&&!this.compare&&!!this.series}synth(e){const t=this.series,n=this.assets,s=this.solver,r=n.meta.cols,a=n.meta.rows,o=r*a,l=n.meta.res;(!this.pb||this.pb.st.length!==o*4)&&(this.pb={st:new Float32Array(o*4),ax:new Float32Array(o*4),snap:null,lastT:0,last:0,dirty:!1});const c=this.pb,u=c.st,d=c.ax,h=t.data,p=t.cmax,v=t.q,_=n.mask,m=(e-t.t0)/t.dt,f=Math.floor(m),x=m-f,M=f+1,w=f<0?-1:Math.min(f,t.n-1)*o,P=Math.min(M,t.n-1)*o,A=1-x,R=Math.max(0,this.tideAt(e,this.sideModOf("B"))+6);for(let b=0,N=0;b<o;b++,N+=4){if(_[b]){u[N]=R,u[N+1]=0,u[N+2]=0,u[N+3]=0,d[N]=0,d[N+1]=0,d[N+2]=1,d[N+3]=R;continue}const k=w<0?0:h[w+b],X=(k*A+h[P+b]*x)*v,Z=Math.max(w<0?0:p[w+b]*v,X);u[N]=X,u[N+1]=0,u[N+2]=0,u[N+3]=Z,d[N]=0,d[N+1]=0,d[N+2]=X>.015?1:0,d[N+3]=X}const F=n.dem,Y=n.bldh,y=(b,N)=>{if(_[b])return N;const k=u[b*4];return Y[b]>0?Math.max(N,F[b]+1):k>.01?F[b]+k:Math.max(F[b],Math.min(N,F[b]+.01))};for(let b=1;b<a-1;b++)for(let N=1;N<r-1;N++){const k=b*r+N,X=k*4,Z=u[X];if(_[k]||Z<.03||Y[k]>0)continue;const J=F[k]+Z,z=(y(k+1,J)-y(k-1,J))/(2*l),ne=(y(k+r,J)-y(k-r,J))/(2*l),fe=Math.hypot(z,ne);if(fe<1e-4)continue;const ce=Math.min(3,Math.pow(Z,2/3)*Math.sqrt(Math.min(fe,.2))/.035);u[X+1]=-Z*ce*z/fe,u[X+2]=-Z*ce*ne/fe,d[X+1]=ce}for(const b of n.meta.facilities??[]){const N=b.ug,k=t.fac?.[b.id];if(!N||!k||!N.cells.length)continue;const Z=((f<0?0:k[Math.min(f,k.length-1)])*A+k[Math.min(M,k.length-1)]*x)*N.area/(l*l*N.cells.length);for(const J of N.cells)d[J*4]=Z}c.snap=s.snapshotFromData(u,d,e,s.dt,c.snap??void 0,null),s.restore(c.snap),this.world.advanceSim(Math.max(0,e-c.lastT)),c.lastT=e}playbackStep(e){const t=this.pb??(this.pb={st:new Float32Array(0),ax:new Float32Array(0),snap:null,lastT:this.simT,last:0,dirty:!1});let n=this.simT;if(this.seekTarget!==null?(n=this.seekTarget,this.seekTarget=null,this.ui.setSeeking(!1),this.ui.setStatus(null),t.dirty=!0,t.last=0):this.playing&&(n=Math.min(this.windowSec,n+this.speed*e),t.dirty=!0),!t.dirty)return;if(n>=this.windowSec-1){const r=this.snaps.find(a=>a.t>=this.windowSec-1);r?this.restoreSnapshot(r):(this.synth(this.windowSec),this.simT=this.windowSec),this.fillPinsFromSeries(),this.setPlaying(!1),t.dirty=!1,t.lastT=this.windowSec,this.ui.setTime(this.timeLabel(this.simT),1);return}this.simT=n,this.ui.setTime(this.timeLabel(n),n/this.windowSec),this.showConditions(n);const s=performance.now();if(!(this.playing&&s-t.last<70)&&(this.synth(n),t.last=s,t.dirty=!1,this.flyAfterSeek)){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(this.solver,"A"),this.metricsT=this.simT;const r=this.metrics.hotspots??[];r.length&&this.world.director.flyTo(this.world.viewAt(r[0].x,r[0].y,520),2.5)}}closeCard(){this.card=null,this.cardSeq++,this.ui.setPointCard(null)}async loadSeries(){const e=await this.bakedManifest();if(!e||!e.series||e.key!==this.cacheKey)return null;const t=`${e.scene}/${e.event}`;if(this.series?.id===t)return this.series;try{const n=await fetch(`${xl}/scenes/${e.scene}/baked/${e.event}/${e.series.file}`);if(!n.ok)return null;const s=await new Response((n.body??new Blob([await n.arrayBuffer()]).stream()).pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),r=new Uint8Array(s),a=this.assets.meta.cols*this.assets.meta.rows,o=new Uint8Array(r.length);for(let l=0;l<e.series.n;l++){const c=l*a,u=c-a;for(let d=0;d<a;d++){const h=r[c+d];o[c+d]=l&&o[u+d]>h?o[u+d]:h}}return this.series={id:t,...e.series,data:r,cmax:o},this.series}catch{return null}}async loadNames(){if(this.names?.scene===this.sceneId)return this.names.f;const e=this.sceneId;let t=null;try{const n=await fetch(`${xl}/scenes/${e}/names.json`);n.ok&&(t=await n.json())}catch{t=null}return this.names={scene:e,f:t},t}placeName(e,t,n){const s=this.assets.meta,r=Ns()==="zh";let a=null,o=null;if(n){for(const u of n.roads)for(let d=0;d+1<u.pts.length;d++){const[h,p]=u.pts[d],[v,_]=u.pts[d+1],m=v-h,f=_-p,x=m*m+f*f||1,M=Math.max(0,Math.min(1,((e-h)*m+(t-p)*f)/x)),w=Math.hypot(h+M*m-e,p+M*f-t);(!a||w<a.d)&&(a={n:r?u.zh||u.en:u.en||u.zh,d:w})}for(const u of n.places){const d=Math.hypot(u.x-e,u.y-t);(!o||d<o.d)&&(o={n:u.name,d})}}for(const u of s.facilities??[]){const d=Math.hypot(u.x-e,u.y-t);(!o||d<o.d)&&(o={n:u.name,d})}const l=u=>u<25?"":r?`约 ${Math.round(u/10)*10} m`:`~${Math.round(u/10)*10} m`,c=s.pois.length?s.pois.reduce((u,d)=>Math.hypot(d.x-e,d.y-t)<Math.hypot(u.x-e,u.y-t)?d:u).name:$(s.name_zh,s.name_en);return o&&o.d<=120?{title:o.n,sub:[a&&a.d<=60?a.n:"",l(o.d)?`${r?"距此":""}${l(o.d)}`:"",c].filter(Boolean).join(" · ")}:a&&a.d<=60?{title:a.n,sub:[o&&o.d<=400?`${r?"近":"near "}${o.n}`:"",c].filter(Boolean).join(" · ")}:{title:o&&o.d<=400?`${r?"近":"Near "}${o.n}`:c,sub:`${r?"坐标":"at"} ${Math.round(e)}, ${Math.round(t)} m`}}async openCard(e,t){const n=this.assets,s=this.solver;if(!n||!s||!this.forcing)return;const r=n.meta.cols,a=n.meta.res,o=Math.floor(e/a),l=Math.floor(t/a);if(o<0||l<0||o>=r||l>=n.meta.rows){this.closeCard();return}const c=l*r+o,u=s.readCell(o,l),d=++this.cardSeq;this.card={x:e,y:t};const h=this.windowSec/3600,p=x=>this.tick(x),v={x:e,y:t,title:$("读取中…","Loading…"),sub:"",ground:n.dem[c],sea:!!n.mask[c],now:Math.max(0,s.subgridOn?u.aux[3]:u.state[0]),hmax:u.state[3],series:null,loading:!0,hours:h,fmt:p};this.ui.setPointCard(v);const[_,m]=await Promise.all([this.loadNames(),this.loadSeries()]);if(d!==this.cardSeq)return;let f=null;if(m){const x=r*n.meta.rows,M=[0],w=[0];for(let P=0;P<m.n;P++)M.push((m.t0+P*m.dt)/3600),w.push(m.data[P*x+c]*m.q);f={h:M,d:w}}this.ui.setPointCard({...v,...this.placeName(e,t,_),series:f,loading:!1})}flowNeedsWater(){this.flowMode!=="none"&&(this.waterMode==="max"&&this.setWater("now"),this.simT>=this.windowSec-1&&!this.playing&&(this.seek(this.peakSec()),this.flash($("流向表示此刻的水流：已切到「当前水深」并跳到峰值","Flow shows the water now: switched to current depth at the peak"))))}setWater(e){this.waterMode=e,this.world.setWaterMode(e),this.ui.setWaterMode(e),this.metricsT=-1,this.lastMetrics=0}setView2D(e){if(this.view2d=e,this.world.setView2D(e),this.ui.setView2D(e),e){const t=this.world.director.controls;t.autoRotate=!1,this.ui.setActive("btnOrbit",!1),this.world.director.touring&&this.world.director.stopTour()}}persistSnapshot(e){const t=this.cacheKey,n=this.cache;if(!t||!n||!this.solver||this.cachedTimes.has(e.t))return;this.cachedTimes.add(e.t);const s=this.solver.readSnapshot(e.a);n.put(t,{t:e.t,dt:e.a.dt,maxDepthSeen:e.maxDepthSeen,state:s.state.buffer,aux:s.aux.buffer,conn:s.conn?s.conn.buffer:void 0}).catch(()=>{})}async clearRunCache(){this.cache||(this.cache=await zl.open()),await this.cache?.clear(),this.cachedTimes=new Set,this.flash($("本机缓存已清空","Browser cache cleared"))}basementItems(e){const t=this.assets?.meta;return t?(t.facilities??[]).filter(n=>n.ug).map(n=>({id:n.id,x:n.x,y:n.y,area:n.ug.area,cap:n.ug.cap,depth:e?.facDepths?.[n.id]??0})):[]}planSnapshots(){const e=this.assets;if(!e){this.snapEvery=0;return}const t=ta.snapshotBytes(e.meta.cols,e.meta.rows)*(this.baseline?2:1),n=Math.max(2,Math.floor(32e7/t));this.snapEvery=Math.max(1800,Math.ceil(this.windowSec/n/$r)*$r),this.nextSnapT=this.snapEvery}checkpoint(){const e=this.solver;this.maxDepthSeen=Math.max(this.maxDepthSeen,e.maxDepth(),this.baseline?this.baseline.maxDepth():0);const t=.45*this.assets.meta.res/Math.sqrt(9.81*Math.max(1,this.maxDepthSeen*1.4+.5));if(t<e.dt&&(e.setDt(t),this.baseline?.setDt(t)),this.snapEvery>0&&this.simT>=this.nextSnapT-1&&this.simT<this.windowSec)for(this.takeSnapshot();this.nextSnapT<=this.simT+1;)this.nextSnapT+=this.snapEvery}clearSnapshots(){for(const e of this.snaps)this.snapPool.push(e.a),e.b&&this.snapPool.push(e.b);this.snaps=[]}disposeSnapshots(){this.clearSnapshots();for(const e of this.snapPool)e.rt.dispose();this.snapPool=[]}takeSnapshot(){const e=this.solver;if(this.snaps.some(r=>Math.abs(r.t-this.simT)<this.snapEvery*.5))return;const t=e.snapshot(this.snapPool.pop()),n=this.baseline?this.baseline.snapshot(this.snapPool.pop()):null,s={t:this.simT,a:t,b:n,maxDepthSeen:this.maxDepthSeen};this.snaps.push(s),this.simT>1&&!this.baseline&&this.persistSnapshot(s)}keyframeBefore(e){let t=null;for(const n of this.snaps)n.t<=e&&(!this.baseline||n.b)&&(!t||n.t>t.t)&&(t=n);return t}showConditions(e){if(!this.forcing||!this.solver)return;const t=this.sideModOf("B"),n=this.stormParts(e);this.ui.setConditions({signal:n.sig,storm:n.dist,tide:this.tideAt(e,t),rain:this.rainAt(e,t)*36e5,hs:this.hsAt(e,t),dt:this.solver.dt,n:0})}restoreSnapshot(e){this.solver.restore(e.a),this.baseline&&e.b&&this.baseline.restore(e.b),this.simT=e.t,this.metrics=null,this.baseMetrics=null,this.lastMetrics=0,this.maxDepthSeen=e.maxDepthSeen;let t=0;for(;t<this.pinT.length&&this.pinT[t]<=e.t+1;)t++;this.pinT.length=t;for(const n of this.pins)n.depth.length=Math.min(n.depth.length,t),n.level.length=Math.min(n.level.length,t);this.lastPinSample=t?this.pinT[t-1]:-1e9,this.pinsChanged(!1),this.world.resetFlow(),this.nextSnapT=Math.max(this.snapEvery,(Math.floor(e.t/this.snapEvery)+1)*this.snapEvery),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec),this.showConditions(this.simT)}togglePlay(){if(this.seekTarget!==null&&!this.playback){this.seekTarget=null,this.ui.setSeeking(!1),this.ui.setStatus(null),this.setPlaying(!1);return}!this.playing&&this.simT>=this.windowSec-1&&(this.playback?(this.seekTarget=0,this.pb&&(this.pb.lastT=0),this.world.resetFlow()):this.restart(),this.setWater("now")),this.setPlaying(!this.playing)}setPlaying(e){this.playing=e,this.ui.setPlaying(e)}seek(e){if(e=Math.max(0,Math.min(this.windowSec,e)),this.playback){this.seekTarget=e;return}if(e<this.simT){const t=this.keyframeBefore(e);t?this.restoreSnapshot(t):this.restart()}else if(!this.pins.length){const t=this.keyframeBefore(e);t&&t.t>this.simT&&this.restoreSnapshot(t)}if(!this.pins.length){const t=this.snaps.filter(n=>n.t>=e&&n.t-e<120&&(!this.baseline||n.b)).sort((n,s)=>n.t-s.t)[0];t&&t.t!==this.simT&&(this.restoreSnapshot(t),e=t.t)}this.seekTarget=e,this.ui.setSeeking(!0)}setTool(e){this.tool=e,this.draft=[],this.world.setDraft([],"wall"),this.ui.setTool(e),this.ui.setDraftInfo(0,0),document.body.style.cursor=e?"crosshair":"default"}bindPointer(e){let t=null;e.addEventListener("pointerdown",n=>{t={x:n.clientX,y:n.clientY,t:performance.now()},this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1))}),e.addEventListener("pointerup",n=>{if(!t)return;const s=Math.hypot(n.clientX-t.x,n.clientY-t.y),r=performance.now()-t.t;if(t=null,s>5||r>600)return;if(this.pinMode){const l=this.world.raycastGround(n.clientX,n.clientY);l&&this.addPin(l.x,l.y);return}if(!this.tool){const l=this.world.pickMeasure(n.clientX,n.clientY);if(this.selectMeasure(l),l===null){const c=this.world.raycastGround(n.clientX,n.clientY);c?this.openCard(c.x,c.y):this.closeCard()}return}const a=this.world.raycastGround(n.clientX,n.clientY);if(!a)return;let o={x:a.x,y:a.y};if(this.snapShore&&(this.tool==="wall"||this.tool==="sandbag")&&(o=this.snapToShore(o)),this.tool==="pump"){this.commitMeasure([o]);return}this.draft.push(o),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()),(this.tool==="culvert"||this.tool==="pipe")&&this.draft.length>=2&&this.finishDraft()}),e.addEventListener("dblclick",()=>{this.tool&&this.draft.length&&this.finishDraft()}),document.addEventListener("click",n=>{const s=n.target.closest?.("button");s&&n.detail>0&&s.blur()},!0),window.addEventListener("keydown",n=>{const s=n.target.tagName;if(!(s==="INPUT"||s==="TEXTAREA"||s==="SELECT")){if(n.key==="Escape"&&this.card){this.closeCard();return}if(n.key==="Escape"&&(this.pinMode?this.setPinMode(!1):this.tool?this.setTool(null):this.selectMeasure(null)),n.key==="Enter"&&this.tool&&this.finishDraft(),n.key==="Backspace"&&this.tool&&(n.preventDefault(),this.undoVertex()),n.key==="Delete"&&this.selectedMeasure!==null&&!this.tool){const r=this.selectedMeasure;this.measures?.remove(r),this.selectedMeasure=null,this.measuresChanged()}n.key===" "&&s!=="BUTTON"&&(n.preventDefault(),this.togglePlay())}})}draftLength(){let e=0;for(let t=1;t<this.draft.length;t++)e+=Math.hypot(this.draft[t].x-this.draft[t-1].x,this.draft[t].y-this.draft[t-1].y);return e}undoVertex(){!this.tool||!this.draft.length||(this.draft.pop(),this.world.setDraft(this.draft,this.tool),this.ui.setDraftInfo(this.draft.length,this.draftLength()))}snapToShore(e){const t=this.assets;if(!t)return e;const n=t.meta.cols,s=t.meta.rows,r=t.meta.res,a=Math.floor(e.x/r),o=Math.floor(e.y/r);let l=e,c=1/0;if(a<0||o<0||a>=n||o>=s||!t.mask[o*n+a])return e;for(let u=o-3;u<=o+3;u++)for(let d=a-3;d<=a+3;d++){if(d<0||u<0||d>=n||u>=s)continue;const h=u*n+d;if(t.mask[h]||!(d>0&&t.mask[h-1]||d<n-1&&t.mask[h+1]||u>0&&t.mask[h-n]||u<s-1&&t.mask[h+n]))continue;const v=(d+.5)*r,_=(u+.5)*r,m=Math.hypot(v-e.x,_-e.y);m<c&&(c=m,l={x:v,y:_})}return l}finishDraft(){if(this.tool){if(this.draft.length===0){this.setTool(null);return}(this.tool==="wall"||this.tool==="sandbag"||this.tool==="culvert"||this.tool==="pipe")&&this.draft.length<2||this.commitMeasure(this.draft)}}commitMeasure(e){if(!this.measures||!this.tool)return;const t=this.ui.getMeasureParams(this.tool),n=this.ui.newRole,s=this.measures.add({kind:this.tool,pts:e,height:t.height,rate:t.rate,capacity:t.capacity,factor:t.factor,radius:t.radius,diameter:t.diameter||void 0,role:n,key:n==="whatif"?void 0:`${this.tool}_${Date.now().toString(36)}`});this.draft=[],this.world.setDraft([],"wall"),this.tool==="pump"||this.setTool(null),this.selectedMeasure=n==="whatif"&&this.tool==="pump"?null:s.id,this.measuresChanged()}selectMeasure(e){this.selectedMeasure=e,this.refreshMeasureViews()}measuresChanged(){if(!this.measures||!this.solver)return;const e=this.activeScenario();if(e&&!["A","B"].some(n=>e[n].measures==="all"||Array.isArray(e[n].measures))&&this.measures.measures.some(n=>(n.role??"whatif")==="whatif"&&!n.scenario_only)){this.flash($("已切换到「无措施 vs 含措施」，右侧 B 含你画的措施",'Switched to "no measures vs with measures": side B includes what you drew')),this.setScenario("measures");return}this.applyMeasures();try{localStorage.setItem(this.measuresKey(),JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin)))}catch{}this.ui.setMeasuresDirty(!0,!1);const t=this.playing||this.simT>0;this.restart(),t&&this.setPlaying(!0)}async saveMeasures(){if(!this.measures||!this.assets)return;const e=this.measures.toSaved(this.sceneId,this.assets.meta.origin),t=JSON.stringify(e,null,1);this.download(`${this.sceneId}.measures.json`,t),this.flash($("已下载 measures.json，放到 web/public/scenes/<场景>/ 即可生效","Downloaded measures.json; put it in web/public/scenes/<scene>/"))}exportMeasures(){!this.measures||!this.assets||this.download(`${this.sceneId}.measures.json`,JSON.stringify(this.measures.toSaved(this.sceneId,this.assets.meta.origin),null,1))}async importMeasures(e){if(!(!this.measures||!this.assets))try{const t=JSON.parse(await e.text());if(!Array.isArray(t.measures))throw new Error("no measures[]");this.measures.loadSaved(t,this.assets.meta.origin),this.measuresChanged(),this.flash($(`已导入 ${t.measures.length} 项`,`Imported ${t.measures.length} measures`))}catch(t){this.flash($(`导入失败：${t}`,`Import failed: ${t}`))}}revertMeasures(){try{localStorage.removeItem(this.measuresKey())}catch{}this.selectedMeasure=null,this.loadMeasures(),this.applyMeasures(),this.restart(),this.setPlaying(!0)}download(e,t,n="application/json"){const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([t],{type:n})),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}flash(e){this.ui.setStatus(e),clearTimeout(this.flashTimer),this.flashTimer=window.setTimeout(()=>this.ui.setStatus(null),3500)}toggleCompare(){this.compare=!this.compare,this.ui.setCompare(this.compare),this.compare?(this.makeBaseline(),this.baseline.setDt(this.solver.dt)):(this.baseline?.dispose(),this.baseline=null,this.showBaseline=!1),this.applyMeasures(),this.applyParams(),this.refreshCharts(),this.syncSplit();const e=this.simT;this.bindView(),this.restart(),!this.compare&&this.playback?(this.seekTarget=e,this.setPlaying(!1)):this.setPlaying(!0)}syncSplit(){const e=document.getElementById("swipe");if(this.compare&&this.baseline&&this.solver){this.world.setBaselineTextures(this.baseline.stateTex,this.baseline.auxTex,this.baseline.faceModTex),this.world.split={frac:this.splitFrac,left:{state:this.baseline.stateTex,aux:this.baseline.auxTex},right:{state:this.solver.stateTex,aux:this.solver.auxTex}},e.style.display="block",e.style.left=`${this.splitFrac*100}%`;const t=this.activeScenario();this.ui.setStatus(t?$(`A/B 分屏：拖动中间的把手，左 A = ${t.A.zh}，右 B = ${t.B.zh}`,`Swipe view: drag the handle; left A = ${t.A.en}, right B = ${t.B.en}`):O("swipeHint")),setTimeout(()=>this.ui.setStatus(null),5e3)}else this.world.setBaselineTextures(null),this.world.split=null,e.style.display="none"}bindSwipe(){const e=document.querySelector("#swipe .handle"),t=document.getElementById("swipe");let n=!1;e.addEventListener("pointerdown",r=>{n=!0,e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener("pointermove",r=>{n&&(this.splitFrac=Math.min(.95,Math.max(.05,r.clientX/window.innerWidth)),t.style.left=`${this.splitFrac*100}%`,this.world.split&&(this.world.split.frac=this.splitFrac))});const s=()=>{n=!1};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)}cycleFlow(){this.flowMode=this.flowMode==="particles"?"arrows":this.flowMode==="arrows"?"none":"particles",this.world.setFlowMode(this.flowMode),this.ui.setFlowMode(this.flowMode)}peakSec(){const e=this.forcing;if(this.event.kind==="rainstorm"){let r=0,a=-1;for(let o=0;o<e.rainT.length;o++)e.rainMm[o]>a&&(a=e.rainMm[o],r=e.rainT[o]);return Math.min(this.windowSec,r+5400)}let n=0,s=-1/0;for(let r=0;r<e.tideT.length;r++)e.tideL[r]>s&&(s=e.tideL[r],n=e.tideT[r]);return Math.min(this.windowSec,n+1200)}jumpToPeak(){this.forcing&&(this.flyAfterSeek=!0,this.setWater("now"),this.seek(this.peakSec()))}hotspotLabels(e){const t=this.assets.meta.pois;return e.map(n=>{let s="",r=1/0;for(const a of t){const o=Math.hypot(a.x-n.x,a.y-n.y);o<r&&(r=o,s=a.name)}return{...n,name:s?`${s.split(" ")[0]}${r>250?` ${(r/1e3).toFixed(1)} km`:""}`:""}})}bindView(){const e=this.showBaseline&&this.baseline?this.baseline:this.solver;e&&this.world.setStateTextures(e.stateTex,e.auxTex)}tour(){const e=this.world.director;if(e.touring){e.stopTour();return}const n=this.assets.meta.pois.map(s=>this.world.viewAt(s.x,s.y,650));n.length||n.push(this.world.defaultView()),e.startTour(n),this.ui.setActive("btnTour",!0),this.ui.setStatus(O("tourRunning"))}refreshCharts(){const e=this.forcing,t=this.event;if(!e||!t)return;const n=this.assets.meta,s=n.gauge,r=e.tideT.map(p=>p/3600),a=e.tideT.map(p=>this.tideAt(p)),o=[],l=t.peaks_model[s],c=t.observed_peaks[s];if(c!==void 0&&l){const p=(gi(l.t).getTime()-e.start.getTime())/36e5+(n.tide_lag_min||0)/60;o.push({x:p,y:c,label:`${O("peakObs")} ${(c+.146).toFixed(2)} mCD`,color:hn.peak})}const u={kind:"line",xMin:0,xMax:e.hours,unit:"mPD",yLabel:"mPD",cursor:this.simT/3600,xTick:p=>this.tick(p),markers:o,series:[{name:$(`实测 ${s}`,`Observed ${s}`),color:hn.obs,x:r,y:e.obs},{name:$("天文潮","Astronomical"),color:hn.astro,x:r,y:e.astro,dashed:!0},{name:$("模型边界","Model boundary"),color:hn.model,x:r,y:a}]},d=(n.rain_mult[this.eventId]??1)*this.params.rainScale,h={kind:"bar",xMin:0,xMax:e.hours,unit:"mm/h",yLabel:"mm/h",cursor:this.simT/3600,xTick:p=>this.tick(p),series:[{name:$(`模型雨强（${t.rain.station} ×${d.toFixed(2)}）`,`Model rain (${t.rain.station} ×${d.toFixed(2)})`),color:hn.rain,x:e.rainT.map(p=>p/3600+.5),y:e.rainMm.map(p=>p*d)}]};this.ui.setCharts(u,h),this.ui.setValidation(n.validation[this.eventId]??[],this.metrics)}refreshLabels(){this.assets&&this.world.setLabels(this.labelItems(this.metrics))}labelItems(e){const t=this.assets.meta,n=(t.validation[this.eventId]??[]).map(a=>({id:`v_${a.id}`,x:a.x,y:a.y,text:$(a.zh,a.en),cls:`val ${a.cls}`,sub:e?`${$("实际","obs")}${a.lower?"≥":"≈"}${a.cls==="none"?"0":a.depth.toFixed(1)} m / ${$("模拟","sim")} ${(e.valDepths[a.id]??0).toFixed(2)} m`:a.cls==="none"?$("实际无水浸","no flooding"):`${$("实际","obs")}${a.lower?"≥":"≈"}${a.depth.toFixed(1)} m`}));for(const a of t.gauges)n.push({id:`g_${a.code}`,x:a.x,y:a.y,text:a.name,cls:"gauge",sub:e?`${(e.gaugeLevels[a.code]??0).toFixed(2)} mPD`:""});const s=new Set;if(e&&this.showFacilities){for(const o of t.facilities??[])if(o.ug){const l=e.facDepths?.[o.id]??0;s.add(o.id),n.push({id:`f_${o.id}`,x:o.x,y:o.y,text:`${ra[o.type]??""} ${o.name}`,cls:`facility ug ${l>=1?"severe":l>=.3?"moderate":"dry"}`,sub:`${$("地库","basement")} ${l.toFixed(2)} / ${o.ug.cap.toFixed(1)} m${l>=o.ug.cap-.05?$("，灌满",", full"):l>=1?$("，地下一层淹没",", level flooded"):""}`})}const a=(t.facilities??[]).map(o=>({f:o,d:Math.max(e.facDepths?.[o.id]??0,this.baseMetrics?.facDepths?.[o.id]??0)})).filter(o=>o.d>=.3&&!o.f.ug).sort((o,l)=>l.d-o.d).slice(0,10);for(const{f:o,d:l}of a)s.add(o.id),n.push({id:`f_${o.id}`,x:o.x,y:o.y,text:`${ra[o.type]??""} ${o.name}`,cls:`facility ${l>=.5?"severe":"moderate"}`,sub:`${(e.facDepths?.[o.id]??0).toFixed(2)} m`})}if(this.showLandmarks){for(const[o,l]of t.pois.entries())n.push({id:`p_${o}`,x:l.x,y:l.y,text:l.name,cls:"landmark place"});const a=["mtr","hospital","mall","ferry"];for(const o of t.facilities??[])a.includes(o.type)&&!s.has(o.id)&&n.push({id:`l_${o.id}`,x:o.x,y:o.y,text:`${ra[o.type]??""} ${o.name}`,cls:"landmark"})}if(this.showMeasureLabels&&this.measures){const a=this.ctx(!0);for(const o of this.measures.measures){const l=o.role??"whatif";if(l==="whatif")continue;let c=0,u=0;if(o.pts.length){for(const v of o.pts)c+=v.x,u+=v.y;c/=o.pts.length,u/=o.pts.length}else if(o.cells?.length){const v=o.cells[Math.floor(o.cells.length/2)],_=t.cols,m=t.res;c=(v%_+.5)*m,u=(Math.floor(v/_)+.5)*m}else continue;const d=this.measures.effect(o,a),h=l==="record"?o.built?o.built>="2026"?`${$("计划","planned")} ${o.built.slice(0,4)}`:o.built:"":o.from_h!==void 0&&o.from_h!==null?`${this.tick(o.from_h)} ${$("起","on")}`:"",p=o.info?$("仅标注","noted"):d>0?$("生效","active"):d<0?$("当时未建","not yet built"):l==="temporary"?$("未启用","inactive"):$("未建","not built");n.push({id:`m_${o.id}`,x:c,y:u,text:$(o.name??o.key??"",o.name_en??o.name??o.key??""),cls:`measure ${l} ${o.info?"info":d===0?"off":d<0?"removed":"on"}`,sub:`${l==="record"?$("记录","record"):$("临时","temporary")}${h?" · "+h:""} · ${p}`})}}for(const a of this.pins){const o=a.depth.length?a.depth[a.depth.length-1]:null;n.push({id:`u_${a.id}`,x:a.x,y:a.y,text:a.name,cls:"upin",color:a.color,sub:o===null?"":`${o.toFixed(2)} m`})}const r=a=>a.cls.includes(" ug ")?1:0;return n.sort((a,o)=>r(o)-r(a))}setPinMode(e){this.pinMode=e,e&&this.tool&&this.setTool(null),this.ui.setActive("btnPin",e),document.body.style.cursor=e?"crosshair":"default",this.ui.setStatus(e?O("pinHint"):null)}addPin(e,t){const n=this.pinSeq++;if(this.pins.push({id:n,name:`${$("钉点","Pin")} ${n}`,x:e,y:t,color:hm[(n-1)%hm.length],depth:[],level:[]}),this.selPin=n,this.setPinMode(!1),this.playback){this.fillPinsFromSeries(),this.refreshLabels();return}const s=this.simT,r=this.playing||s>0;this.restart(),s>0&&this.seek(s),r&&this.setPlaying(!0),this.refreshLabels()}fillPinsFromSeries(){const e=this.series,t=this.assets;if(!e||!t||!this.pins.length)return;const n=t.meta.cols,s=n*t.meta.rows,r=t.meta.res;this.pinT=[0];for(let a=0;a<e.n;a++)this.pinT.push(e.t0+a*e.dt);for(const a of this.pins){const o=Math.floor(a.y/r)*n+Math.floor(a.x/r);a.depth=[0],a.level=[t.dem[o]];for(let l=0;l<e.n;l++){const c=e.data[l*s+o]*e.q;a.depth.push(c),a.level.push(t.dem[o]+c)}}this.lastPinSample=this.windowSec,this.pinsChanged(!1)}samplePins(e){const t=this.assets,n=t.meta.res,s=t.meta.cols;this.pinT.push(this.simT);for(const r of this.pins){const a=Math.floor(r.x/n),o=Math.floor(r.y/n),l=e.readCell(a,o),c=Math.max(0,e.subgridOn?l.aux[3]:l.state[0]);r.depth.push(c),r.level.push((t.dem[o*s+a]??0)+c)}this.lastPinSample=this.simT}pinsChanged(e=!0){const t=this.forcing;this.ui.setPins(this.pins,this.pinT.map(n=>n/3600),this.selPin,t?{hours:t.hours,tide:{x:t.tideT.map(n=>n/3600),y:t.tideT.map(n=>this.tideAt(n))},rain:{x:t.rainT.map(n=>n/3600),y:t.rainT.map(n=>this.rainMmAt(n))},cursor:this.simT/3600,xTick:n=>this.tick(n)}:null),e&&this.assets&&this.refreshLabels()}exportPins(){if(!this.pins.length||!this.forcing)return;const e=["time_hkt","hours","boundary_sea_level_mPD","rain_mm_per_h",...this.pins.flatMap(r=>[`${r.name} depth_m`,`${r.name} water_level_mPD`])],t=this.pinT.map((r,a)=>[this.timeLabel(r).replace(" HKT",""),(r/3600).toFixed(3),this.tideAt(r).toFixed(3),this.rainMmAt(r).toFixed(1),...this.pins.flatMap(o=>[o.depth[a]?.toFixed(3)??"",o.level[a]?.toFixed(3)??""])]),s=[`# HK Flood Lab pins · scene ${this.sceneId} · event ${this.eventId} · ${this.pins.map(r=>`${r.name} (x ${r.x.toFixed(0)} m, y ${r.y.toFixed(0)} m)`).join("; ")}`,e.map(r=>`"${r.replace(/"/g,'""')}"`).join(","),...t.map(r=>r.join(","))].join(`
`);this.download(`${this.sceneId}_${this.eventId}_pins.csv`,"\uFEFF"+s,"text/csv")}syncLabelInset(){const e=r=>{const a=document.getElementById(r);return a&&a.offsetParent&&getComputedStyle(a).display!=="none"?a.getBoundingClientRect():null},t=e("left"),n=e("right"),s=e("bottom");this.world.labelInset={l:t?t.right:0,r:n?window.innerWidth-n.left:0,t:document.querySelector(".topbar")?.getBoundingClientRect().bottom??60,b:s?window.innerHeight-s.top:0}}cameraPreset(e){if(e==="follow"){this.follow=!this.follow,this.ui.setActive("btnFollow",this.follow),this.followAt=null,this.follow&&this.followHotspot();return}this.follow&&(this.follow=!1,this.ui.setActive("btnFollow",!1)),e==="street"&&this.view2d&&this.setView2D(!1);const t=this.metrics?.hotspots?.[0];this.world.cameraPreset(e,e==="street"&&t?{x:t.x,y:t.y}:void 0)}followHotspot(){const e=this.metrics?.hotspots?.[0];e&&(this.followAt&&Math.hypot(this.followAt.x-e.x,this.followAt.y-e.y)<150||(this.followAt={x:e.x,y:e.y},this.world.director.flyTo(this.world.viewAt(e.x,e.y,520),2.2)))}computeMetrics(e,t="A"){const n=this.assets,s=n.meta,r=s.cols,a=s.rows,o=s.res,l=e.readState(),c=e.readAux(),u=e.subgridOn,d=n.mask,h=n.bldh;let p=0,v=0,_=0,m=0,f=0;const x=t==="A"?this.spawnA:this.spawnB;let M=0;const w=Math.max(1,Math.round(150/o)),P=Math.ceil(r/w),A=new Float32Array(P*Math.ceil(a/w)),R=new Int32Array(A.length).fill(-1),F=new Float32Array(A.length),Y=new Int32Array(A.length),y=Math.ceil(300/o);for(let z=0;z<r*a;z++){if(d[z])continue;const ne=u?c[z*4+3]:l[z*4];ne>f&&(f=ne);const fe=z%r,ce=z/r|0;if(fe<y||ce<y||fe>=r-y||ce>=a-y)continue;const pe=c[z*4+1];if(ne>.06&&pe>.12&&h[z]===0&&M*2+3<x.length&&(x[M*2]=(fe+.5)*o,x[M*2+1]=(ce+.5)*o,M++,pe>.6&&(x[M*2]=(fe+.5)*o,x[M*2+1]=(ce+.5)*o,M++)),h[z]>0||n.dem[z]<2||n.basin[z]||n.rim[z]||n.steep[z])continue;const Se=ne,le=this.waterMode==="max"?l[z*4+3]:Se;le>p&&(p=le),le>.15&&v++,le>.5&&_++,m+=Se;const ee=l[z*4+3],ae=(ce/w|0)*P+(fe/w|0);ee>A[ae]&&(A[ae]=ee,R[ae]=z),ee>=.3&&(F[ae]+=Math.min(ee,1.5),Y[ae]++)}this.world.setFlowSpawn(t,x,M);const b=[];for(let z=0;z<A.length;z++)Y[z]>=3&&b.push(z);b.sort((z,ne)=>F[ne]-F[z]);const N=[];for(const z of b){const ne=R[z],fe=(ne%r+.5)*o,ce=((ne/r|0)+.5)*o;if(N.every(pe=>Math.hypot(pe.x-fe,pe.y-ce)>=350)&&N.push({x:fe,y:ce,depth:A[z],area:Y[z]*o*o}),N.length>=6)break}let k=0;for(const z of n.buildings){const ne=Math.min(r-1,Math.max(0,Math.floor(z.c[0]/o))),fe=Math.min(a-1,Math.max(0,Math.floor(z.c[1]/o)));let ce=0;for(let pe=-1;pe<=1;pe++)for(let Se=-1;Se<=1;Se++){const le=ne+Se,ee=fe+pe;if(le<0||ee<0||le>=r||ee>=a)continue;const ae=ee*r+le;d[ae]||n.steep[ae]||(ce=Math.max(ce,l[ae*4+3]))}ce>.15&&k++}const X={};for(const z of s.facilities??[])if(z.ug){let ne=0;for(const fe of z.ug.cells)ne+=c[fe*4];X[z.id]=ne*o*o/z.ug.area}else X[z.id]=this.maxDepthNear(l,z.x,z.y,60);const Z={};for(const z of s.validation[this.eventId]??[])Z[z.id]=z.ug?X[z.ug]??0:z.berm!==void 0?Math.max(0,this.peakTideSoFar(e.time,this.sideModOf(e===this.baseline?"A":"B"))-z.berm):this.maxDepthNear(l,z.x,z.y,60);const J={};for(const z of s.gauges){const ne=Math.floor(z.x/o),fe=Math.floor(z.y/o);let ce=-1,pe=1e9;for(let Se=-3;Se<=3;Se++)for(let le=-3;le<=3;le++){const ee=ne+le,ae=fe+Se;if(ee<0||ae<0||ee>=r||ae>=a)continue;const xe=ae*r+ee;if(!d[xe])continue;const me=le*le+Se*Se;me<pe&&(pe=me,ce=xe)}ce>=0&&(J[z.code]=l[ce*4]-6)}return{t:e.time,maxDepth:p,maxDepthAll:f,floodedAreaKm2:v*o*o/1e6,floodedAreaSevereKm2:_*o*o/1e6,buildingsAffected:k,volumeMm3:m*o*o/1e6,valDepths:Z,gaugeLevels:J,hotspots:N,facDepths:X}}peakTideSoFar(e,t=Xr){const n=this.forcing;let s=-99;for(let r=0;r<n.tideT.length;r++){const a=n.tideT[r];a<0||a>e||(s=Math.max(s,this.tideAt(a,t)))}return Math.max(s,this.tideAt(Math.max(0,e),t))}maxDepthNear(e,t,n,s){const r=this.assets,a=r.meta.cols,o=r.meta.rows,l=r.meta.res,c=Math.floor(t/l),u=Math.floor(n/l),d=Math.ceil(s/l);let h=0;for(let p=u-d;p<=u+d;p++)for(let v=c-d;v<=c+d;v++){if(v<0||p<0||v>=a||p>=o)continue;const _=p*a+v;r.mask[_]||r.bldh[_]>0||r.dem[_]<2.4||r.basin[_]||r.rim[_]||r.steep[_]||Math.hypot((v+.5)*l-t,(p+.5)*l-n)>s||e[_*4+3]>h&&(h=e[_*4+3])}return h}frame(){requestAnimationFrame(()=>this.frame());const e=performance.now(),t=Math.min(.1,(e-this.lastFrame)/1e3);this.lastFrame=e;const n=this.solver;if(n&&this.forcing){let s=0,r=260;const a=this.playback;if(a!==this.pbShown&&(this.pbShown=a,this.ui.setBaked(a)),a)this.playbackStep(t);else if(this.seekTarget!==null)if(s=Math.min(this.seekTarget-this.simT,r*n.dt*2),r=520,s<=0){if(this.seekTarget=null,this.ui.setStatus(null),this.ui.setSeeking(!1),this.flyAfterSeek){this.flyAfterSeek=!1,this.metrics=this.computeMetrics(n,"A");const h=this.metrics.hotspots??[];h.length&&this.world.director.flyTo(this.world.viewAt(h[0].x,h[0].y,520),2.5)}}else this.ui.setStatus(`${O("ffwd")} ${this.timeLabel(this.simT)}`);else this.playing&&(s=this.speed*t);if(this.tickMeasures(),s>0&&this.simT<this.windowSec){let h=Math.min(r,Math.max(1,Math.round(s/n.dt)));const p=(Math.floor(this.simT/$r+1e-6)+1)*$r;h=Math.max(1,Math.min(h,Math.ceil((p-this.simT)/n.dt-1e-6)));const v=this.simT+h*n.dt/2,_=this.sideModOf("B"),m=this.tideAt(v,_),f=this.rainAt(v,_),x=this.hsAt(v,_);if(n.step(h,m,f,x),this.baseline){const P=this.sideModOf("A");this.baseline.step(h,this.tideAt(v,P),this.rainAt(v,P),this.hsAt(v,P))}const M=this.simT;this.simT+=h*n.dt,this.world.advanceSim(h*n.dt),Math.floor(this.simT/$r+1e-6)>Math.floor(M/$r+1e-6)&&this.simT<this.windowSec&&this.checkpoint(),this.simT>=this.windowSec&&(this.simT=this.windowSec,this.setPlaying(!1),this.seekTarget=null,this.ui.setStatus(null),this.ui.setSeeking(!1)),this.ui.setTime(this.timeLabel(this.simT),this.simT/this.windowSec);const w=this.stormParts(this.simT);this.ui.setConditions({signal:w.sig,storm:w.dist,tide:m,rain:f*36e5,hs:x,dt:n.dt,n:h}),this.pins.length&&this.simT-this.lastPinSample>=300&&this.samplePins(n)}if(e-this.lastMetrics>700&&this.simT>0&&(this.metrics===null||this.simT!==this.metricsT)){if(this.lastMetrics=e,this.metricsT=this.simT,this.metrics=this.computeMetrics(n,"A"),this.baseline&&(this.baseMetrics=this.computeMetrics(this.baseline,"B")),this.ui.setMetrics(this.metrics,this.compare?this.baseMetrics:null),this.ui.setHotspots(this.hotspotLabels(this.metrics.hotspots??[])),this.ui.setValidation(this.assets.meta.validation[this.eventId]??[],this.metrics),this.card&&this.solver){const h=OE();if(h){const p=this.assets.meta.res,v=this.solver.readCell(Math.floor(this.card.x/p),Math.floor(this.card.y/p));this.ui.setPointCard({...h,now:Math.max(0,this.solver.subgridOn?v.aux[3]:v.state[0]),hmax:Math.max(h.hmax,v.state[3])})}}this.ui.setChartCursor(this.simT/3600),this.syncLabelInset(),this.world.setLabels(this.labelItems(this.metrics)),this.ui.setFacilities(this.metrics,this.compare?this.baseMetrics:null),this.world.setBasements(this.basementItems(this.metrics)),this.pins.length&&this.pinsChanged(!1),this.follow&&this.followHotspot()}const o=this.rainMmAt(this.simT),l=this.forcing,c=this.tideAt(this.simT)-Ka(l.tideT,l.astro,this.simT,l.astro),u=Math.min(1,Math.max(c/2.2,o/70,.1)),d=(l.start.getTime()/36e5+8+this.simT/3600)%24;this.world.setWeather(o,u,d),this.playing&&this.simT<this.windowSec&&!HE&&o>35&&e-this.lastLightning>4e3&&Math.random()<.02&&(this.world.lightning(),this.lastLightning=e)}if(this.world.render(t),this.card){const s=document.getElementById("pointCard"),r=this.world.screenOf(this.card.x,this.card.y);s&&(r?(s.style.visibility="visible",s.style.transform=`translate(${Math.round(r.sx-28)}px, ${Math.round(r.sy-s.offsetHeight-14)}px)`):s.style.visibility="hidden")}}}const HE=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Ka(i,e,t,n){if(!i.length)return 0;if(t<=i[0])return e[0];if(t>=i[i.length-1])return e[e.length-1];let s=0,r=i.length-1;for(;r-s>1;){const o=s+r>>1;i[o]<=t?s=o:r=o}const a=(t-i[s])/(i[r]-i[s]);return e[s]+(e[r]-e[s])*a}window.addEventListener("DOMContentLoaded",()=>{window.app=new BE});
