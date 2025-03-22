(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="153",Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,il=1,Nu=2,Kc=1,Ou=2,Ln=3,ni=0,be=1,In=2,Zn=0,cr=1,qa=2,rl=3,sl=4,zu=5,sr=100,Bu=101,ku=102,al=103,ol=104,Gu=200,Hu=201,Vu=202,Wu=203,Zc=204,Jc=205,Xu=206,ju=207,qu=208,Yu=209,$u=210,Ku=0,Zu=1,Ju=2,Ya=3,Qu=4,td=5,ed=6,nd=7,To=0,id=1,rd=2,Nn=0,sd=1,ad=2,od=3,ld=4,cd=5,Qc=300,pr=301,mr=302,$a=303,Ka=304,js=306,Za=1e3,fn=1001,Ja=1002,De=1003,ll=1004,ia=1005,nn=1006,hd=1007,Wr=1008,Jn=1009,ud=1010,dd=1011,bo=1012,th=1013,Xn=1014,jn=1015,Xr=1016,eh=1017,nh=1018,Mi=1020,fd=1021,pn=1023,pd=1024,md=1025,Si=1026,gr=1027,gd=1028,ih=1029,_d=1030,rh=1031,sh=1033,ra=33776,sa=33777,aa=33778,oa=33779,cl=35840,hl=35841,ul=35842,dl=35843,xd=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,yl=37813,Ml=37814,Sl=37815,El=37816,Tl=37817,bl=37818,wl=37819,Al=37820,Cl=37821,la=36492,vd=36283,Rl=36284,Pl=36285,Ll=36286,ah=3e3,Ei=3001,yd=3200,Md=3201,oh=0,Sd=1,Ti="",Pt="srgb",Sn="srgb-linear",lh="display-p3",ca=7680,Ed=519,Td=512,bd=513,wd=514,Ad=515,Cd=516,Rd=517,Pd=518,Ld=519,Qa=35044,Dl="300 es",to=1035,Fn=2e3,Ns=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,eo=180/Math.PI;function Qn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Dd(s,t){return(s%t+t)%t}function ua(s,t,e){return(1-e)*s+e*t}function Ul(s){return(s&s-1)===0&&s!==0}function no(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],g=i[0],p=i[3],f=i[6],S=i[1],v=i[4],M=i[7],y=i[2],T=i[5],C=i[8];return r[0]=a*g+o*S+l*y,r[3]=a*p+o*v+l*T,r[6]=a*f+o*M+l*C,r[1]=c*g+h*S+u*y,r[4]=c*p+h*v+u*T,r[7]=c*f+h*M+u*C,r[2]=d*g+m*S+_*y,r[5]=d*p+m*v+_*T,r[8]=d*f+m*M+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ft;function ch(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Il={};function kr(s){s in Il||(Il[s]=!0,console.warn(s))}function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ud=new Ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Id=new Ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Fd(s){return s.convertSRGBToLinear().applyMatrix3(Id)}function Nd(s){return s.applyMatrix3(Ud).convertLinearToSRGB()}const Od={[Sn]:s=>s,[Pt]:s=>s.convertSRGBToLinear(),[lh]:Fd},zd={[Sn]:s=>s,[Pt]:s=>s.convertLinearToSRGB(),[lh]:Nd},cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Sn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Od[t],i=zd[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let zi;class hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=jr("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hr(e[n]/255)*255):e[n]=hr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bd=0;class uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Qn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(pa(i[a].image)):r.push(pa(i[a]))}else r=pa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class Fe extends Ii{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=fn,i=fn,r=nn,a=Wr,o=pn,l=Jn,c=Fe.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Qn(),this.name="",this.source=new uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ei?Pt:Ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Ei:ah}set encoding(t){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?Pt:Ti}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Qc;Fe.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,i=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,y=(f+1)/2,T=(h+d)/4,C=(u+g)/4,P=(_+p)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=C/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=P/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=P/r),this.set(n,i,r,e),this}let S=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends Ii{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ei?Pt:Ti),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gd extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==m||h!==_){let p=1-o;const f=l*d+c*m+h*_+u*g,S=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const y=Math.sqrt(v),T=Math.atan2(y,f*S);p=Math.sin(p*T)/y,o=Math.sin(o*T)/y}const M=o*S;if(l=l*p+d*M,c=c*p+m*M,h=h*p+_*M,u=u*p+g*M,p===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-o*m,t[e+2]=c*_+h*m+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-r*i,u=l*i+r*n-a*e,d=-r*e-a*n-o*i;return this.x=c*l+d*-r+h*-o-u*-a,this.y=h*l+d*-a+u*-r-c*-o,this.z=u*l+d*-o+c*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new D,Fl=new Pi;class ts{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Bi.copy(t.boundingBox),Bi.applyMatrix4(t.matrixWorld),this.union(Bi);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)wn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(wn)}else i.boundingBox===null&&i.computeBoundingBox(),Bi.copy(i.boundingBox),Bi.applyMatrix4(t.matrixWorld),this.union(Bi)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),ss.subVectors(this.max,wr),ki.subVectors(t.a,wr),Gi.subVectors(t.b,wr),Hi.subVectors(t.c,wr),kn.subVectors(Gi,ki),Gn.subVectors(Hi,Gi),hi.subVectors(ki,Hi);let e=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-hi.z,hi.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,hi.z,0,-hi.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-hi.y,hi.x,0];return!ga(e,ki,Gi,Hi,ss)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,ki,Gi,Hi,ss))?!1:(as.crossVectors(kn,Gn),e=[as.x,as.y,as.z],ga(e,ki,Gi,Hi,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,Bi=new ts,ki=new D,Gi=new D,Hi=new D,kn=new D,Gn=new D,hi=new D,wr=new D,ss=new D,as=new D,ui=new D;function ga(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ui.fromArray(s,r);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hd=new ts,Ar=new D,_a=new D;class es{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(_a)),this.expandByPoint(Ar.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new D,xa=new D,os=new D,Hn=new D,va=new D,ls=new D,ya=new D;class qs{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xa.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(xa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(os),o=Hn.dot(this.direction),l=-Hn.dot(os),c=Hn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xa).addScaledVector(os,d),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,r){va.subVectors(e,t),ls.subVectors(n,t),ya.crossVectors(va,ls);let a=this.direction.dot(ya),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot(ls.crossVectors(Hn,ls));if(l<0)return null;const c=o*this.direction.dot(va.cross(Hn));if(c<0||l+c>a)return null;const h=-o*Hn.dot(ya);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,r,a,o,l,c,h,u,d,m,_,g,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,m,_,g,p)}set(t,e,n,i,r,a,o,l,c,h,u,d,m,_,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Wd)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Vn.crossVectors(n,Xe),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Vn.crossVectors(n,Xe)),Vn.normalize(),cs.crossVectors(Xe,Vn),i[0]=Vn.x,i[4]=cs.x,i[8]=Xe.x,i[1]=Vn.y,i[5]=cs.y,i[9]=Xe.y,i[2]=Vn.z,i[6]=cs.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],S=n[3],v=n[7],M=n[11],y=n[15],T=i[0],C=i[4],P=i[8],x=i[12],w=i[1],k=i[5],V=i[9],U=i[13],F=i[2],z=i[6],q=i[10],H=i[14],Y=i[3],tt=i[7],K=i[11],dt=i[15];return r[0]=a*T+o*w+l*F+c*Y,r[4]=a*C+o*k+l*z+c*tt,r[8]=a*P+o*V+l*q+c*K,r[12]=a*x+o*U+l*H+c*dt,r[1]=h*T+u*w+d*F+m*Y,r[5]=h*C+u*k+d*z+m*tt,r[9]=h*P+u*V+d*q+m*K,r[13]=h*x+u*U+d*H+m*dt,r[2]=_*T+g*w+p*F+f*Y,r[6]=_*C+g*k+p*z+f*tt,r[10]=_*P+g*V+p*q+f*K,r[14]=_*x+g*U+p*H+f*dt,r[3]=S*T+v*w+M*F+y*Y,r[7]=S*C+v*k+M*z+y*tt,r[11]=S*P+v*V+M*q+y*K,r[15]=S*x+v*U+M*H+y*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],f=t[15];return _*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*m-n*l*m)+g*(+e*l*m-e*c*d+r*a*d-i*a*m+i*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],f=t[15],S=u*p*c-g*d*c+g*l*m-o*p*m-u*l*f+o*d*f,v=_*d*c-h*p*c-_*l*m+a*p*m+h*l*f-a*d*f,M=h*g*c-_*u*c+_*o*m-a*g*m-h*o*f+a*u*f,y=_*u*l-h*g*l-_*o*d+a*g*d+h*o*p-a*u*p,T=e*S+n*v+i*M+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(g*d*r-u*p*r-g*i*m+n*p*m+u*i*f-n*d*f)*C,t[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*f+n*l*f)*C,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*m-n*l*m)*C,t[4]=v*C,t[5]=(h*p*r-_*d*r+_*i*m-e*p*m-h*i*f+e*d*f)*C,t[6]=(_*l*r-a*p*r-_*i*c+e*p*c+a*i*f-e*l*f)*C,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*m+e*l*m)*C,t[8]=M*C,t[9]=(_*u*r-h*g*r-_*n*m+e*g*m+h*n*f-e*u*f)*C,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*C,t[12]=y*C,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*p+e*u*p)*C,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,_=r*u,g=a*h,p=a*u,f=o*u,S=l*c,v=l*h,M=l*u,y=n.x,T=n.y,C=n.z;return i[0]=(1-(g+f))*y,i[1]=(m+M)*y,i[2]=(_-v)*y,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(d+f))*T,i[6]=(p+S)*T,i[7]=0,i[8]=(_+v)*C,i[9]=(p-S)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Vi.set(i[0],i[1],i[2]).length();const a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],hn.copy(this);const c=1/r,h=1/a,u=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,_;if(o===Fn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ns)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Fn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,m=(n+i)*h;let _,g;if(o===Fn)_=(a+r)*u,g=-2*u;else if(o===Ns)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new D,hn=new te,Vd=new D(0,0,0),Wd=new D(1,1,1),Vn=new D,cs=new D,Xe=new D,Nl=new te,Ol=new Pi;class Ys{constructor(t=0,e=0,n=0,i=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xd=0;const zl=new D,Wi=new Pi,Cn=new te,hs=new D,Cr=new D,jd=new D,qd=new Pi,Bl=new D(1,0,0),kl=new D(0,1,0),Gl=new D(0,0,1),Yd={type:"added"},Hl={type:"removed"};class pe extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new D,e=new Ys,n=new Pi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Ft}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Cr,hs,this.up):Cn.lookAt(hs,Cr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Hl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new D(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new D,Rn=new D,Ma=new D,Pn=new D,Xi=new D,ji=new D,Vl=new D,Sa=new D,Ea=new D,Ta=new D;let us=!1;class rn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){un.subVectors(i,e),Rn.subVectors(n,e),Ma.subVectors(t,e);const a=un.dot(un),o=un.dot(Rn),l=un.dot(Ma),c=Rn.dot(Rn),h=Rn.dot(Ma),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(t,e,n,i,r,a,o,l){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Pn),l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Rn.subVectors(t,e),un.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Xi.subVectors(i,n),ji.subVectors(r,n),Sa.subVectors(t,n);const l=Xi.dot(Sa),c=ji.dot(Sa);if(l<=0&&c<=0)return e.copy(n);Ea.subVectors(t,i);const h=Xi.dot(Ea),u=ji.dot(Ea);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xi,a);Ta.subVectors(t,r);const m=Xi.dot(Ta),_=ji.dot(Ta);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ji,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Vl.subVectors(r,i),o=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(Vl,o);const f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Xi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let $d=0;class si extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=cr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=cn.workingColorSpace){return this.r=t,this.g=e,this.b=n,cn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=cn.workingColorSpace){if(t=Dd(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ba(a,r,t+1/3),this.g=ba(a,r,t),this.b=ba(a,r,t-1/3)}return cn.toWorkingColorSpace(this,i),this}setStyle(t,e=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pt){const n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pt){return cn.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ue(Ee.r*255,0,255))*65536+Math.round(Ue(Ee.g*255,0,255))*256+Math.round(Ue(Ee.b*255,0,255))}getHexString(t=Pt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=cn.workingColorSpace){cn.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=cn.workingColorSpace){return cn.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Pt){cn.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Pt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),dn.h+=t,dn.s+=e,dn.l+=n,this.setHSL(dn.h,dn.s,dn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(ds);const n=ua(dn.h,ds.h,e),i=ua(dn.s,ds.s,e),r=ua(dn.l,ds.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Ht;Ht.NAMES=fh;class Li extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new D,fs=new Mt;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRange={offset:0,count:-1},this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ph extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mh extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Oe extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kd=0;const tn=new te,wa=new pe,qi=new D,je=new ts,Rr=new ts,ve=new D;class Ve extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ch(t)?mh:ph)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(je.min,Rr.min),je.expandByPoint(ve),ve.addVectors(je.max,Rr.max),je.expandByPoint(ve)):(je.expandByPoint(Rr.min),je.expandByPoint(Rr.max))}je.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),ve.add(qi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new D,h[w]=new D;const u=new D,d=new D,m=new D,_=new Mt,g=new Mt,p=new Mt,f=new D,S=new D;function v(w,k,V){u.fromArray(i,w*3),d.fromArray(i,k*3),m.fromArray(i,V*3),_.fromArray(a,w*2),g.fromArray(a,k*2),p.fromArray(a,V*2),d.sub(u),m.sub(u),g.sub(_),p.sub(_);const U=1/(g.x*p.y-p.x*g.y);isFinite(U)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(U),S.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(U),c[w].add(f),c[k].add(f),c[V].add(f),h[w].add(S),h[k].add(S),h[V].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,k=M.length;w<k;++w){const V=M[w],U=V.start,F=V.count;for(let z=U,q=U+F;z<q;z+=3)v(n[z+0],n[z+1],n[z+2])}const y=new D,T=new D,C=new D,P=new D;function x(w){C.fromArray(r,w*3),P.copy(C);const k=c[w];y.copy(k),y.sub(C.multiplyScalar(C.dot(k))).normalize(),T.crossVectors(P,k);const U=T.dot(h[w])<0?-1:1;l[w*4]=y.x,l[w*4+1]=y.y,l[w*4+2]=y.z,l[w*4+3]=U}for(let w=0,k=M.length;w<k;++w){const V=M[w],U=V.start,F=V.count;for(let z=U,q=U+F;z<q;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[m++]}return new on(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new te,di=new qs,ps=new es,Xl=new D,Yi=new D,$i=new D,Ki=new D,Aa=new D,ms=new D,gs=new Mt,_s=new Mt,xs=new Mt,jl=new D,ql=new D,Yl=new D,vs=new D,ys=new D;class $t extends pe{constructor(t=new Ve,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Aa.fromBufferAttribute(u,t),a?ms.addScaledVector(Aa,h):ms.addScaledVector(Aa.sub(e),h))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(ps.containsPoint(di.origin)===!1&&(di.intersectSphere(ps,Xl)===null||di.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(r).invert(),di.copy(t.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,y=v;M<y;M+=3){const T=o.getX(M),C=o.getX(M+1),P=o.getX(M+2);i=Ms(this,f,t,n,c,h,u,T,C,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const S=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);i=Ms(this,a,t,n,c,h,u,S,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,y=v;M<y;M+=3){const T=M,C=M+1,P=M+2;i=Ms(this,f,t,n,c,h,u,T,C,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const S=p,v=p+1,M=p+2;i=Ms(this,a,t,n,c,h,u,S,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Zd(s,t,e,n,i,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ni,o),l===null)return null;ys.copy(o),ys.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:s}}function Ms(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Yi),s.getVertexPosition(l,$i),s.getVertexPosition(c,Ki);const h=Zd(s,t,e,n,Yi,$i,Ki,vs);if(h){i&&(gs.fromBufferAttribute(i,o),_s.fromBufferAttribute(i,l),xs.fromBufferAttribute(i,c),h.uv=rn.getInterpolation(vs,Yi,$i,Ki,gs,_s,xs,new Mt)),r&&(gs.fromBufferAttribute(r,o),_s.fromBufferAttribute(r,l),xs.fromBufferAttribute(r,c),h.uv1=rn.getInterpolation(vs,Yi,$i,Ki,gs,_s,xs,new Mt),h.uv2=h.uv1),a&&(jl.fromBufferAttribute(a,o),ql.fromBufferAttribute(a,l),Yl.fromBufferAttribute(a,c),h.normal=rn.getInterpolation(vs,Yi,$i,Ki,jl,ql,Yl,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};rn.getNormal(Yi,$i,Ki,u.normal),h.face=u}return h}class Di extends Ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function _(g,p,f,S,v,M,y,T,C,P,x){const w=M/C,k=y/P,V=M/2,U=y/2,F=T/2,z=C+1,q=P+1;let H=0,Y=0;const tt=new D;for(let K=0;K<q;K++){const dt=K*k-U;for(let N=0;N<z;N++){const Q=N*w-V;tt[g]=Q*S,tt[p]=dt*v,tt[f]=F,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[p]=0,tt[f]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(N/C),u.push(1-K/P),H+=1}}for(let K=0;K<P;K++)for(let dt=0;dt<C;dt++){const N=d+dt+z*K,Q=d+dt+z*(K+1),J=d+(dt+1)+z*(K+1),at=d+(dt+1)+z*K;l.push(N,Q,at),l.push(Q,J,at),Y+=6}o.addGroup(m,Y,x),m+=Y,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _r(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=_r(s[e]);for(const i in n)t[i]=n[i]}return t}function Jd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gh(s){return s.getRenderTarget()===null?s.outputColorSpace:Sn}const Qd={clone:_r,merge:Pe};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _h extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ye extends _h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class nf extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Ye(Zi,Ji,t,e);i.layers=this.layers,this.add(i);const r=new Ye(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const a=new Ye(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const l=new Ye(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Nn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class xh extends Fe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rf extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?Pt:Ti),this.texture=new xh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Di(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Zn});r.uniforms.tEquirect.value=e;const a=new $t(i,r),o=e.minFilter;return e.minFilter===Wr&&(e.minFilter=nn),new nf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ca=new D,sf=new D,af=new Ft;class gi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ca.subVectors(n,e).cross(sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||af.getNormalMatrix(t),i=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new es,Ss=new D;class Ao{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],_=i[9],g=i[10],p=i[11],f=i[12],S=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,p-m,M-f).normalize(),n[1].setComponents(l+r,d+c,p+m,M+f).normalize(),n[2].setComponents(l+a,d+h,p+_,M+S).normalize(),n[3].setComponents(l-a,d-h,p-_,M-S).normalize(),n[4].setComponents(l-o,d-u,p-g,M-v).normalize(),e===Fn)n[5].setComponents(l+o,d+u,p+g,M+v).normalize();else if(e===Ns)n[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ss.x=i.normal.x>0?t.max.x:t.min.x,Ss.y=i.normal.y>0?t.max.y:t.min.y,Ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function of(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,m=h.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Co extends Ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],_=[],g=[],p=[];for(let f=0;f<h;f++){const S=f*d-a;for(let v=0;v<c;v++){const M=v*u-r;_.push(M,-S,0),g.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const v=S+c*f,M=S+c*(f+1),y=S+1+c*(f+1),T=S+1+c*f;m.push(v,M,T),m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.width,t.height,t.widthSegments,t.heightSegments)}}var lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf="vec3 transformed = vec3( position );",mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,rp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,up=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#ifdef USE_UV
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
#endif`,tm=`#ifdef USE_UV
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
#endif`,em=`#ifdef USE_UV
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,dm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,xm=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ym=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Sm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,wm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Cm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Pm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Im=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:xf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:Ef,color_pars_fragment:Tf,color_pars_vertex:bf,color_vertex:wf,common:Af,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Lf,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,encodings_fragment:If,encodings_pars_fragment:Ff,envmap_fragment:Nf,envmap_common_pars_fragment:Of,envmap_pars_fragment:zf,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Zf,envmap_vertex:kf,fog_vertex:Gf,fog_pars_vertex:Hf,fog_fragment:Vf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_fragment:jf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:$f,lights_pars_begin:Kf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:xp,morphtarget_pars_vertex:vp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:Tp,normal_vertex:bp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Pp,output_fragment:Lp,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Ip,dithering_fragment:Fp,dithering_pars_fragment:Np,roughnessmap_fragment:Op,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:kp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:jp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:$p,tonemapping_pars_fragment:Kp,transmission_fragment:Zp,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:rm,backgroundCube_vert:sm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:xm,meshlambert_vert:vm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:bm,meshphong_frag:wm,meshphysical_vert:Am,meshphysical_frag:Cm,meshtoon_vert:Rm,meshtoon_frag:Pm,points_vert:Lm,points_frag:Dm,shadow_vert:Um,shadow_frag:Im,sprite_vert:Fm,sprite_frag:Nm},st={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},_n={basic:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Pe([st.points,st.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Pe([st.common,st.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Pe([st.sprite,st.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Pe([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Pe([st.lights,st.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};_n.physical={uniforms:Pe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Es={r:0,b:0,g:0};function Om(s,t,e,n,i,r,a){const o=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function _(p,f){let S=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===js)?(h===void 0&&(h=new $t(new Di(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:_r(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Pt,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $t(new Co(2,2),new On({name:"BackgroundMaterial",uniforms:_r(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){p.getRGB(Es,gh(s)),n.buffers.color.setClear(Es.r,Es.g,Es.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function zm(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,h=!1;function u(F,z,q,H,Y){let tt=!1;if(a){const K=g(H,q,z);c!==K&&(c=K,m(c.object)),tt=f(F,H,q,Y),tt&&S(F,H,q,Y)}else{const K=z.wireframe===!0;(c.geometry!==H.id||c.program!==q.id||c.wireframe!==K)&&(c.geometry=H.id,c.program=q.id,c.wireframe=K,tt=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(tt||h)&&(h=!1,P(F,z,q,H),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,z,q){const H=q.wireframe===!0;let Y=o[F.id];Y===void 0&&(Y={},o[F.id]=Y);let tt=Y[z.id];tt===void 0&&(tt={},Y[z.id]=tt);let K=tt[H];return K===void 0&&(K=p(d()),tt[H]=K),K}function p(F){const z=[],q=[],H=[];for(let Y=0;Y<i;Y++)z[Y]=0,q[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:H,object:F,attributes:{},index:null}}function f(F,z,q,H){const Y=c.attributes,tt=z.attributes;let K=0;const dt=q.getAttributes();for(const N in dt)if(dt[N].location>=0){const J=Y[N];let at=tt[N];if(at===void 0&&(N==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),N==="instanceColor"&&F.instanceColor&&(at=F.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;K++}return c.attributesNum!==K||c.index!==H}function S(F,z,q,H){const Y={},tt=z.attributes;let K=0;const dt=q.getAttributes();for(const N in dt)if(dt[N].location>=0){let J=tt[N];J===void 0&&(N==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),N==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),Y[N]=at,K++}c.attributes=Y,c.attributesNum=K,c.index=H}function v(){const F=c.newAttributes;for(let z=0,q=F.length;z<q;z++)F[z]=0}function M(F){y(F,0)}function y(F,z){const q=c.newAttributes,H=c.enabledAttributes,Y=c.attributeDivisors;q[F]=1,H[F]===0&&(s.enableVertexAttribArray(F),H[F]=1),Y[F]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),Y[F]=z)}function T(){const F=c.newAttributes,z=c.enabledAttributes;for(let q=0,H=z.length;q<H;q++)z[q]!==F[q]&&(s.disableVertexAttribArray(q),z[q]=0)}function C(F,z,q,H,Y,tt,K){K===!0?s.vertexAttribIPointer(F,z,q,Y,tt):s.vertexAttribPointer(F,z,q,H,Y,tt)}function P(F,z,q,H){if(n.isWebGL2===!1&&(F.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=H.attributes,tt=q.getAttributes(),K=z.defaultAttributeValues;for(const dt in tt){const N=tt[dt];if(N.location>=0){let Q=Y[dt];if(Q===void 0&&(dt==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),dt==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){const J=Q.normalized,at=Q.itemSize,ct=e.get(Q);if(ct===void 0)continue;const _t=ct.buffer,Lt=ct.type,St=ct.bytesPerElement,re=n.isWebGL2===!0&&(Lt===s.INT||Lt===s.UNSIGNED_INT||Q.gpuType===th);if(Q.isInterleavedBufferAttribute){const Nt=Q.data,O=Nt.stride,de=Q.offset;if(Nt.isInstancedInterleavedBuffer){for(let xt=0;xt<N.locationSize;xt++)y(N.location+xt,Nt.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let xt=0;xt<N.locationSize;xt++)M(N.location+xt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let xt=0;xt<N.locationSize;xt++)C(N.location+xt,at/N.locationSize,Lt,J,O*St,(de+at/N.locationSize*xt)*St,re)}else{if(Q.isInstancedBufferAttribute){for(let Nt=0;Nt<N.locationSize;Nt++)y(N.location+Nt,Q.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Nt=0;Nt<N.locationSize;Nt++)M(N.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Nt=0;Nt<N.locationSize;Nt++)C(N.location+Nt,at/N.locationSize,Lt,J,at*St,at/N.locationSize*Nt*St,re)}}else if(K!==void 0){const J=K[dt];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(N.location,J);break;case 3:s.vertexAttrib3fv(N.location,J);break;case 4:s.vertexAttrib4fv(N.location,J);break;default:s.vertexAttrib1fv(N.location,J)}}}}T()}function x(){V();for(const F in o){const z=o[F];for(const q in z){const H=z[q];for(const Y in H)_(H[Y].object),delete H[Y];delete z[q]}delete o[F]}}function w(F){if(o[F.id]===void 0)return;const z=o[F.id];for(const q in z){const H=z[q];for(const Y in H)_(H[Y].object),delete H[Y];delete z[q]}delete o[F.id]}function k(F){for(const z in o){const q=o[z];if(q[F.id]===void 0)continue;const H=q[F.id];for(const Y in H)_(H[Y].object),delete H[Y];delete q[F.id]}}function V(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function Bm(s,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,h,u),e.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function km(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),y=v&&M,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:T}}function Gm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,v=S*4;let M=f.clippingState||null;l.value=M,M=h(_,d,v,m);for(let y=0;y!==v;++y)M[y]=e[y];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,M=m;v!==g;++v,M+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Hm(s){let t=new WeakMap;function e(a,o){return o===$a?a.mapping=pr:o===Ka&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===$a||o===Ka)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rf(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yh extends _h{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ar=4,$l=[.125,.215,.35,.446,.526,.582],vi=20,Ra=new yh,Kl=new Ht;let Pa=null;const _i=(1+Math.sqrt(5))/2,Qi=1/_i,Zl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_i,Qi),new D(0,_i,-Qi),new D(Qi,0,_i),new D(-Qi,0,_i),new D(_i,Qi,0),new D(-_i,Qi,0)];class Jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Pa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa),t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Xr,format:pn,colorSpace:Sn,depthBuffer:!1},i=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Wm(r,t,e)}return i}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,i){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kl),h.toneMapping=Nn,h.autoClear=!1;const m=new Li({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),_=new $t(new Di,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Kl),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ts(i,S*v,f>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pr||t.mapping===mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Zl[(i-1)%Zl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):vi;p>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const f=[];let S=0;for(let C=0;C<vi;++C){const P=C/g,x=Math.exp(-P*P/2);f.push(x),C===0?S+=x:C<p&&(S+=2*x)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-ar?i-v+ar:0),T=4*(this._cubeSize-M);Ts(e,y,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Ra)}}function Vm(s){const t=[],e=[],n=[];let i=s;const r=s-ar+1+$l.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ar?l=$l[a-s+ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,f=1,S=new Float32Array(g*_*m),v=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,P=T>2?0:-1,x=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(x,g*_*T),v.set(d,p*_*T);const w=[T,T,T,T,T,T];M.set(w,f*_*T)}const y=new Ve;y.setAttribute("position",new on(S,g)),y.setAttribute("uv",new on(v,p)),y.setAttribute("faceIndex",new on(M,f)),t.push(y),i>ar&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(s,t,e){const n=new Ri(s,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wm(s,t,e){const n=new Float32Array(vi),i=new D(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function tc(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ec(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Xm(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$a||l===Ka,h=l===pr||l===mr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Jl(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Jl(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qm(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,f=g.length;p<f;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let v=0,M=S.length;v<M;v+=3){const y=S[v+0],T=S[v+1],C=S[v+2];d.push(y,T,T,C,C,y)}}else{const S=_.array;g=_.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const y=v+0,T=v+1,C=v+2;d.push(y,T,T,C,C,y)}}const p=new(ch(d)?mh:ph)(d,1);p.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ym(s,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,m){s.drawElements(r,m,o,d*l),e.update(m,r,1)}function u(d,m,_){if(_===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,d*l,_),e.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function $m(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Km(s,t){return s[0]-t[0]}function Zm(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Jm(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Kt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let z=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),y===!0&&(x=3);let w=h.attributes.position.count*x,k=1;w>t.maxTextureSize&&(k=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const V=new Float32Array(w*k*4*g),U=new dh(V,w,k,g);U.type=jn,U.needsUpdate=!0;const F=x*4;for(let q=0;q<g;q++){const H=T[q],Y=C[q],tt=P[q],K=w*k*4*q;for(let dt=0;dt<H.count;dt++){const N=dt*F;v===!0&&(a.fromBufferAttribute(H,dt),V[K+N+0]=a.x,V[K+N+1]=a.y,V[K+N+2]=a.z,V[K+N+3]=0),M===!0&&(a.fromBufferAttribute(Y,dt),V[K+N+4]=a.x,V[K+N+5]=a.y,V[K+N+6]=a.z,V[K+N+7]=0),y===!0&&(a.fromBufferAttribute(tt,dt),V[K+N+8]=a.x,V[K+N+9]=a.y,V[K+N+10]=a.z,V[K+N+11]=tt.itemSize===4?a.w:1)}}p={count:g,texture:U,size:new Mt(w,k)},r.set(h,p),h.addEventListener("dispose",z)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let M=0;M<_;M++)g[M]=[M,0];n[h.id]=g}for(let M=0;M<_;M++){const y=g[M];y[0]=M,y[1]=d[M]}g.sort(Zm);for(let M=0;M<8;M++)M<_&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Km);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const y=o[M],T=y[0],C=y[1];T!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+M)!==p[T]&&h.setAttribute("morphTarget"+M,p[T]),f&&h.getAttribute("morphNormal"+M)!==f[T]&&h.setAttribute("morphNormal"+M,f[T]),i[M]=C,S+=C):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Qm(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Mh=new Fe,Sh=new dh,Eh=new Gd,Th=new xh,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function Tr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=nc[i];if(r===void 0&&(r=new Float32Array(i),nc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $s(s,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function rg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ac.set(n),s.uniformMatrix2fv(this.addr,!1,ac),ge(e,n)}}function sg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;sc.set(n),s.uniformMatrix3fv(this.addr,!1,sc),ge(e,n)}}function ag(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;rc.set(n),s.uniformMatrix4fv(this.addr,!1,rc),ge(e,n)}}function og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function ug(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Mh,i)}function gg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eh,i)}function _g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Th,i)}function xg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sh,i)}function vg(s){switch(s){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(s,t){s.uniform1fv(this.addr,t)}function Mg(s,t){const e=Tr(t,this.size,2);s.uniform2fv(this.addr,e)}function Sg(s,t){const e=Tr(t,this.size,3);s.uniform3fv(this.addr,e)}function Eg(s,t){const e=Tr(t,this.size,4);s.uniform4fv(this.addr,e)}function Tg(s,t){const e=Tr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bg(s,t){const e=Tr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wg(s,t){const e=Tr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ag(s,t){s.uniform1iv(this.addr,t)}function Cg(s,t){s.uniform2iv(this.addr,t)}function Rg(s,t){s.uniform3iv(this.addr,t)}function Pg(s,t){s.uniform4iv(this.addr,t)}function Lg(s,t){s.uniform1uiv(this.addr,t)}function Dg(s,t){s.uniform2uiv(this.addr,t)}function Ug(s,t){s.uniform3uiv(this.addr,t)}function Ig(s,t){s.uniform4uiv(this.addr,t)}function Fg(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Mh,r[a])}function Ng(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Eh,r[a])}function Og(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Th,r[a])}function zg(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Sh,r[a])}function Bg(s){switch(s){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return Eg;case 35674:return Tg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return zg}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=vg(e.type)}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Bg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function oc(s,t){s.seq.push(t),s.map[t.id]=t}function Vg(s,t,e){const n=s.name,i=n.length;for(La.lastIndex=0;;){const r=La.exec(n),a=La.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){oc(e,c===void 0?new kg(o,s,t):new Gg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Hg(o),oc(e,u)),e=u}}}class Ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Vg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function lc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Wg=0;function Xg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function jg(s){switch(s){case Sn:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function cc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Xg(s.getShaderSource(t),a)}else return i}function qg(s,t){const e=jg(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Yg(s,t){let e;switch(t){case sd:e="Linear";break;case ad:e="Reinhard";break;case od:e="OptimizedCineon";break;case ld:e="ACESFilmic";break;case cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $g(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function Kg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Fr(s){return s!==""}function hc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(s){return s.replace(Jg,Qg)}function Qg(s,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return io(e)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(s){return s.replace(t_,e_)}function e_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function n_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function i_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case To:t="ENVMAP_BLENDING_MULTIPLY";break;case id:t="ENVMAP_BLENDING_MIX";break;case rd:t="ENVMAP_BLENDING_ADD";break}return t}function a_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function o_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=n_(e),c=i_(e),h=r_(e),u=s_(e),d=a_(e),m=e.isWebGL2?"":$g(e),_=Kg(r),g=i.createProgram();let p,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),f.length>0&&(f+=`
`)):(p=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),f=[m,fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),a=io(a),a=hc(a,e),a=uc(a,e),o=io(o),o=hc(o,e),o=uc(o,e),a=dc(a),o=dc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=S+p+a,M=S+f+o,y=lc(i,i.VERTEX_SHADER,v),T=lc(i,i.FRAGMENT_SHADER,M);if(i.attachShader(g,y),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const x=i.getProgramInfoLog(g).trim(),w=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(T).trim();let V=!0,U=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,y,T);else{const F=cc(i,y,"vertex"),z=cc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+F+`
`+z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(w===""||k==="")&&(U=!1);U&&(this.diagnostics={runnable:V,programLog:x,vertexShader:{log:w,prefix:p},fragmentShader:{log:k,prefix:f}})}i.deleteShader(y),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new Ds(i,g)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=Zg(i,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}let l_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h_(t),e.set(t,n)),n}}class h_{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}}function u_(s,t,e,n,i,r,a){const o=new wo,l=new c_,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,w,k,V,U){const F=V.fog,z=U.geometry,q=x.isMeshStandardMaterial?V.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),Y=H&&H.mapping===js?H.image.height:null,tt=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=K!==void 0?K.length:0;let N=0;z.morphAttributes.position!==void 0&&(N=1),z.morphAttributes.normal!==void 0&&(N=2),z.morphAttributes.color!==void 0&&(N=3);let Q,J,at,ct;if(tt){const oe=_n[tt];Q=oe.vertexShader,J=oe.fragmentShader}else Q=x.vertexShader,J=x.fragmentShader,l.update(x),at=l.getVertexShaderID(x),ct=l.getFragmentShaderID(x);const _t=s.getRenderTarget(),Lt=U.isInstancedMesh===!0,St=!!x.map,re=!!x.matcap,Nt=!!H,O=!!x.aoMap,de=!!x.lightMap,xt=!!x.bumpMap,Ct=!!x.normalMap,vt=!!x.displacementMap,Wt=!!x.emissiveMap,Ut=!!x.metalnessMap,wt=!!x.roughnessMap,Vt=x.anisotropy>0,fe=x.clearcoat>0,_e=x.iridescence>0,A=x.sheen>0,E=x.transmission>0,X=Vt&&!!x.anisotropyMap,it=fe&&!!x.clearcoatMap,nt=fe&&!!x.clearcoatNormalMap,R=fe&&!!x.clearcoatRoughnessMap,Z=_e&&!!x.iridescenceMap,et=_e&&!!x.iridescenceThicknessMap,W=A&&!!x.sheenColorMap,ft=A&&!!x.sheenRoughnessMap,gt=!!x.specularMap,mt=!!x.specularColorMap,pt=!!x.specularIntensityMap,ht=E&&!!x.transmissionMap,Et=E&&!!x.thicknessMap,zt=!!x.gradientMap,L=!!x.alphaMap,ot=x.alphaTest>0,G=!!x.extensions,rt=!!z.attributes.uv1,lt=!!z.attributes.uv2,Gt=!!z.attributes.uv3;return{isWebGL2:h,shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Q,fragmentShader:J,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Sn,map:St,matcap:re,envMap:Nt,envMapMode:Nt&&H.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:de,bumpMap:xt,normalMap:Ct,displacementMap:d&&vt,emissiveMap:Wt,normalMapObjectSpace:Ct&&x.normalMapType===Sd,normalMapTangentSpace:Ct&&x.normalMapType===oh,metalnessMap:Ut,roughnessMap:wt,anisotropy:Vt,anisotropyMap:X,clearcoat:fe,clearcoatMap:it,clearcoatNormalMap:nt,clearcoatRoughnessMap:R,iridescence:_e,iridescenceMap:Z,iridescenceThicknessMap:et,sheen:A,sheenColorMap:W,sheenRoughnessMap:ft,specularMap:gt,specularColorMap:mt,specularIntensityMap:pt,transmission:E,transmissionMap:ht,thicknessMap:Et,gradientMap:zt,opaque:x.transparent===!1&&x.blending===cr,alphaMap:L,alphaTest:ot,combine:x.combine,mapUv:St&&g(x.map.channel),aoMapUv:O&&g(x.aoMap.channel),lightMapUv:de&&g(x.lightMap.channel),bumpMapUv:xt&&g(x.bumpMap.channel),normalMapUv:Ct&&g(x.normalMap.channel),displacementMapUv:vt&&g(x.displacementMap.channel),emissiveMapUv:Wt&&g(x.emissiveMap.channel),metalnessMapUv:Ut&&g(x.metalnessMap.channel),roughnessMapUv:wt&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:it&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:W&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(x.sheenRoughnessMap.channel),specularMapUv:gt&&g(x.specularMap.channel),specularColorMapUv:mt&&g(x.specularColorMap.channel),specularIntensityMapUv:pt&&g(x.specularIntensityMap.channel),transmissionMapUv:ht&&g(x.transmissionMap.channel),thicknessMapUv:Et&&g(x.thicknessMap.channel),alphaMapUv:L&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ct||Vt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:rt,vertexUv2s:lt,vertexUv3s:Gt,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(St||L),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Nn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:G&&x.extensions.derivatives===!0,extensionFragDepth:G&&x.extensions.fragDepth===!0,extensionDrawBuffers:G&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(S(w,x),v(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),x.push(o.mask)}function M(x){const w=_[x.type];let k;if(w){const V=_n[w];k=Qd.clone(V.uniforms)}else k=x.uniforms;return k}function y(x,w){let k;for(let V=0,U=c.length;V<U;V++){const F=c[V];if(F.cacheKey===w){k=F,++k.usedTimes;break}}return k===void 0&&(k=new o_(s,w,x,r),c.push(k)),k}function T(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:P}}function d_(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function f_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function mc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,_,g,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,d,m,_,g,p){const f=a(u,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(u,d,m,_,g,p){const f=a(u,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||f_),n.length>1&&n.sort(d||pc),i.length>1&&i.sort(d||pc)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function p_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new mc,s.set(n,[a])):i>=r.length?(a=new mc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function m_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function g_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let __=0;function x_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function v_(s,t){const e=new m_,n=g_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,a=new te,o=new te;function l(h,u){let d=0,m=0,_=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,p=0,f=0,S=0,v=0,M=0,y=0,T=0,C=0,P=0;h.sort(x_);const x=u===!0?Math.PI:1;for(let k=0,V=h.length;k<V;k++){const U=h[k],F=U.color,z=U.intensity,q=U.distance,H=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=F.r*z*x,m+=F.g*z*x,_+=F.b*z*x;else if(U.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],z);else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const tt=U.shadow,K=n.get(U);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=U.shadow.matrix,M++}i.directional[g]=Y,g++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(F).multiplyScalar(z*x),Y.distance=q,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[f]=Y;const tt=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,tt.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[f]=tt.matrix,U.castShadow){const K=n.get(U);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=H,T++}f++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(F).multiplyScalar(z),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=Y,S++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*x),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const tt=U.shadow,K=n.get(U);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,K.shadowCameraNear=tt.camera.near,K.shadowCameraFar=tt.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=U.shadow.matrix,y++}i.point[p]=Y,p++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(z*x),Y.groundColor.copy(U.groundColor).multiplyScalar(z*x),i.hemi[v]=Y,v++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==p||w.spotLength!==f||w.rectAreaLength!==S||w.hemiLength!==v||w.numDirectionalShadows!==M||w.numPointShadows!==y||w.numSpotShadows!==T||w.numSpotMaps!==C)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,w.directionalLength=g,w.pointLength=p,w.spotLength=f,w.rectAreaLength=S,w.hemiLength=v,w.numDirectionalShadows=M,w.numPointShadows=y,w.numSpotShadows=T,w.numSpotMaps=C,i.version=__++)}function c(h,u){let d=0,m=0,_=0,g=0,p=0;const f=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const M=h[S];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),d++}else if(M.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function gc(s,t){const e=new v_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function y_(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new gc(s,t),e.set(r,[l])):a>=o.length?(l=new gc(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class M_ extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S_ extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function b_(s,t,e){let n=new Ao;const i=new Mt,r=new Mt,a=new Kt,o=new M_({depthPacking:Md}),l=new S_,c={},h=e.maxTextureSize,u={[ni]:be,[be]:ni,[In]:In},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:E_,fragmentShader:T_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ve;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let f=this.type;this.render=function(y,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=s.getRenderTarget(),x=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=f!==Ln&&this.type===Ln,U=f===Ln&&this.type!==Ln;for(let F=0,z=y.length;F<z;F++){const q=y[F],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Y=H.getFrameExtents();if(i.multiply(Y),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||V===!0||U===!0){const K=this.type!==Ln?{minFilter:De,magFilter:De}:{};H.map!==null&&H.map.dispose(),H.map=new Ri(i.x,i.y,K),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const tt=H.getViewportCount();for(let K=0;K<tt;K++){const dt=H.getViewport(K);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),k.viewport(a),H.updateMatrices(q,K),n=H.getFrustum(),M(T,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&S(H,C),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(P,x,w)};function S(y,T){const C=t.update(g);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ri(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,g,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(T,null,C,m,g,null)}function v(y,T,C,P){let x=null;const w=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)x=w;else if(x=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=x.uuid,V=T.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let F=U[V];F===void 0&&(F=x.clone(),U[V]=F),x=F}if(x.visible=T.visible,x.wireframe=T.wireframe,P===Ln?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=s.properties.get(x);k.light=C}return x}function M(y,T,C,P,x){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Ln)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const V=t.update(y),U=y.material;if(Array.isArray(U)){const F=V.groups;for(let z=0,q=F.length;z<q;z++){const H=F[z],Y=U[H.materialIndex];if(Y&&Y.visible){const tt=v(y,Y,P,x);s.renderBufferDirect(C,null,V,tt,y,H)}}}else if(U.visible){const F=v(y,U,P,x);s.renderBufferDirect(C,null,V,F,y,null)}}const k=y.children;for(let V=0,U=k.length;V<U;V++)M(k[V],T,C,P,x)}}function w_(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const ot=new Kt;let G=null;const rt=new Kt(0,0,0,0);return{setMask:function(lt){G!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){L=lt},setClear:function(lt,Gt,ee,oe,oi){oi===!0&&(lt*=oe,Gt*=oe,ee*=oe),ot.set(lt,Gt,ee,oe),rt.equals(ot)===!1&&(s.clearColor(lt,Gt,ee,oe),rt.copy(ot))},reset:function(){L=!1,G=null,rt.set(-1,0,0,0)}}}function r(){let L=!1,ot=null,G=null,rt=null;return{setTest:function(lt){lt?_t(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(lt){ot!==lt&&!L&&(s.depthMask(lt),ot=lt)},setFunc:function(lt){if(G!==lt){switch(lt){case Ku:s.depthFunc(s.NEVER);break;case Zu:s.depthFunc(s.ALWAYS);break;case Ju:s.depthFunc(s.LESS);break;case Ya:s.depthFunc(s.LEQUAL);break;case Qu:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}G=lt}},setLocked:function(lt){L=lt},setClear:function(lt){rt!==lt&&(s.clearDepth(lt),rt=lt)},reset:function(){L=!1,ot=null,G=null,rt=null}}}function a(){let L=!1,ot=null,G=null,rt=null,lt=null,Gt=null,ee=null,oe=null,oi=null;return{setTest:function(ne){L||(ne?_t(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(ne){ot!==ne&&!L&&(s.stencilMask(ne),ot=ne)},setFunc:function(ne,mn,Ae){(G!==ne||rt!==mn||lt!==Ae)&&(s.stencilFunc(ne,mn,Ae),G=ne,rt=mn,lt=Ae)},setOp:function(ne,mn,Ae){(Gt!==ne||ee!==mn||oe!==Ae)&&(s.stencilOp(ne,mn,Ae),Gt=ne,ee=mn,oe=Ae)},setLocked:function(ne){L=ne},setClear:function(ne){oi!==ne&&(s.clearStencil(ne),oi=ne)},reset:function(){L=!1,ot=null,G=null,rt=null,lt=null,Gt=null,ee=null,oe=null,oi=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,f=!1,S=null,v=null,M=null,y=null,T=null,C=null,P=null,x=!1,w=null,k=null,V=null,U=null,F=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=H>=2);let tt=null,K={};const dt=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),Q=new Kt().fromArray(dt),J=new Kt().fromArray(N);function at(L,ot,G,rt){const lt=new Uint8Array(4),Gt=s.createTexture();s.bindTexture(L,Gt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<G;ee++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ot,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(ot+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return Gt}const ct={};ct[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ct[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(s.DEPTH_TEST),l.setFunc(Ya),vt(!1),Wt(il),_t(s.CULL_FACE),xt(Zn);function _t(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Lt(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function St(L,ot){return m[L]!==ot?(s.bindFramebuffer(L,ot),m[L]=ot,n&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ot),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ot)),!0):!1}function re(L,ot){let G=g,rt=!1;if(L)if(G=_.get(ot),G===void 0&&(G=[],_.set(ot,G)),L.isWebGLMultipleRenderTargets){const lt=L.texture;if(G.length!==lt.length||G[0]!==s.COLOR_ATTACHMENT0){for(let Gt=0,ee=lt.length;Gt<ee;Gt++)G[Gt]=s.COLOR_ATTACHMENT0+Gt;G.length=lt.length,rt=!0}}else G[0]!==s.COLOR_ATTACHMENT0&&(G[0]=s.COLOR_ATTACHMENT0,rt=!0);else G[0]!==s.BACK&&(G[0]=s.BACK,rt=!0);rt&&(e.isWebGL2?s.drawBuffers(G):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Nt(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const O={[sr]:s.FUNC_ADD,[Bu]:s.FUNC_SUBTRACT,[ku]:s.FUNC_REVERSE_SUBTRACT};if(n)O[al]=s.MIN,O[ol]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(O[al]=L.MIN_EXT,O[ol]=L.MAX_EXT)}const de={[Gu]:s.ZERO,[Hu]:s.ONE,[Vu]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[$u]:s.SRC_ALPHA_SATURATE,[qu]:s.DST_COLOR,[Xu]:s.DST_ALPHA,[Wu]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[Yu]:s.ONE_MINUS_DST_COLOR,[ju]:s.ONE_MINUS_DST_ALPHA};function xt(L,ot,G,rt,lt,Gt,ee,oe){if(L===Zn){f===!0&&(Lt(s.BLEND),f=!1);return}if(f===!1&&(_t(s.BLEND),f=!0),L!==zu){if(L!==S||oe!==x){if((v!==sr||T!==sr)&&(s.blendEquation(s.FUNC_ADD),v=sr,T=sr),oe)switch(L){case cr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.ONE,s.ONE);break;case rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case cr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,C=null,P=null,S=L,x=oe}return}lt=lt||ot,Gt=Gt||G,ee=ee||rt,(ot!==v||lt!==T)&&(s.blendEquationSeparate(O[ot],O[lt]),v=ot,T=lt),(G!==M||rt!==y||Gt!==C||ee!==P)&&(s.blendFuncSeparate(de[G],de[rt],de[Gt],de[ee]),M=G,y=rt,C=Gt,P=ee),S=L,x=!1}function Ct(L,ot){L.side===In?Lt(s.CULL_FACE):_t(s.CULL_FACE);let G=L.side===be;ot&&(G=!G),vt(G),L.blending===cr&&L.transparent===!1?xt(Zn):xt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const rt=L.stencilWrite;c.setTest(rt),rt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),wt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function Wt(L){L!==Fu?(_t(s.CULL_FACE),L!==k&&(L===il?s.cullFace(s.BACK):L===Nu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),k=L}function Ut(L){L!==V&&(q&&s.lineWidth(L),V=L)}function wt(L,ot,G){L?(_t(s.POLYGON_OFFSET_FILL),(U!==ot||F!==G)&&(s.polygonOffset(ot,G),U=ot,F=G)):Lt(s.POLYGON_OFFSET_FILL)}function Vt(L){L?_t(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function fe(L){L===void 0&&(L=s.TEXTURE0+z-1),tt!==L&&(s.activeTexture(L),tt=L)}function _e(L,ot,G){G===void 0&&(tt===null?G=s.TEXTURE0+z-1:G=tt);let rt=K[G];rt===void 0&&(rt={type:void 0,texture:void 0},K[G]=rt),(rt.type!==L||rt.texture!==ot)&&(tt!==G&&(s.activeTexture(G),tt=G),s.bindTexture(L,ot||ct[L]),rt.type=L,rt.texture=ot)}function A(){const L=K[tt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(L){Q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function pt(L){J.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function ht(L,ot){let G=u.get(ot);G===void 0&&(G=new WeakMap,u.set(ot,G));let rt=G.get(L);rt===void 0&&(rt=s.getUniformBlockIndex(ot,L.name),G.set(L,rt))}function Et(L,ot){const rt=u.get(ot).get(L);h.get(ot)!==rt&&(s.uniformBlockBinding(ot,rt,L.__bindingPointIndex),h.set(ot,rt))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},tt=null,K={},m={},_=new WeakMap,g=[],p=null,f=!1,S=null,v=null,M=null,y=null,T=null,C=null,P=null,x=!1,w=null,k=null,V=null,U=null,F=null,Q.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_t,disable:Lt,bindFramebuffer:St,drawBuffers:re,useProgram:Nt,setBlending:xt,setMaterial:Ct,setFlipSided:vt,setCullFace:Wt,setLineWidth:Ut,setPolygonOffset:wt,setScissorTest:Vt,activeTexture:fe,bindTexture:_e,unbindTexture:A,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:ft,texImage3D:gt,updateUBOMapping:ht,uniformBlockBinding:Et,texStorage2D:et,texStorage3D:W,texSubImage2D:it,texSubImage3D:nt,compressedTexSubImage2D:R,compressedTexSubImage3D:Z,scissor:mt,viewport:pt,reset:zt}}function A_(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,E){return f?new OffscreenCanvas(A,E):jr("canvas")}function v(A,E,X,it){let nt=1;if((A.width>it||A.height>it)&&(nt=it/Math.max(A.width,A.height)),nt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const R=E?no:Math.floor,Z=R(nt*A.width),et=R(nt*A.height);g===void 0&&(g=S(Z,et));const W=X?S(Z,et):g;return W.width=Z,W.height=et,W.getContext("2d").drawImage(A,0,0,Z,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Z+"x"+et+")."),W}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Ul(A.width)&&Ul(A.height)}function y(A){return o?!1:A.wrapS!==fn||A.wrapT!==fn||A.minFilter!==De&&A.minFilter!==nn}function T(A,E){return A.generateMipmaps&&E&&A.minFilter!==De&&A.minFilter!==nn}function C(A){s.generateMipmap(A)}function P(A,E,X,it,nt=!1){if(o===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let R=E;return E===s.RED&&(X===s.FLOAT&&(R=s.R32F),X===s.HALF_FLOAT&&(R=s.R16F),X===s.UNSIGNED_BYTE&&(R=s.R8)),E===s.RG&&(X===s.FLOAT&&(R=s.RG32F),X===s.HALF_FLOAT&&(R=s.RG16F),X===s.UNSIGNED_BYTE&&(R=s.RG8)),E===s.RGBA&&(X===s.FLOAT&&(R=s.RGBA32F),X===s.HALF_FLOAT&&(R=s.RGBA16F),X===s.UNSIGNED_BYTE&&(R=it===Pt&&nt===!1?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(R=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(R=s.RGB5_A1)),(R===s.R16F||R===s.R32F||R===s.RG16F||R===s.RG32F||R===s.RGBA16F||R===s.RGBA32F)&&t.get("EXT_color_buffer_float"),R}function x(A,E,X){return T(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==De&&A.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===De||A===ll||A===ia?s.NEAREST:s.LINEAR}function k(A){const E=A.target;E.removeEventListener("dispose",k),U(E),E.isVideoTexture&&_.delete(E)}function V(A){const E=A.target;E.removeEventListener("dispose",V),z(E)}function U(A){const E=n.get(A);if(E.__webglInit===void 0)return;const X=A.source,it=p.get(X);if(it){const nt=it[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&F(A),Object.keys(it).length===0&&p.delete(X)}n.remove(A)}function F(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const X=A.source,it=p.get(X);delete it[E.__cacheKey],a.memory.textures--}function z(A){const E=A.texture,X=n.get(A),it=n.get(E);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)s.deleteFramebuffer(X.__webglFramebuffer[nt]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[nt]);else{if(s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,R=E.length;nt<R;nt++){const Z=n.get(E[nt]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(E[nt])}n.remove(E),n.remove(A)}let q=0;function H(){q=0}function Y(){const A=q;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),q+=1,A}function tt(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function K(A,E){const X=n.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(X,A,E);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function dt(A,E){const X=n.get(A);if(A.version>0&&X.__version!==A.version){St(X,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function N(A,E){const X=n.get(A);if(A.version>0&&X.__version!==A.version){St(X,A,E);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function Q(A,E){const X=n.get(A);if(A.version>0&&X.__version!==A.version){re(X,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const J={[Za]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[Ja]:s.MIRRORED_REPEAT},at={[De]:s.NEAREST,[ll]:s.NEAREST_MIPMAP_NEAREST,[ia]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[hd]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},ct={[Td]:s.NEVER,[Ld]:s.ALWAYS,[bd]:s.LESS,[Ad]:s.LEQUAL,[wd]:s.EQUAL,[Pd]:s.GEQUAL,[Cd]:s.GREATER,[Rd]:s.NOTEQUAL};function _t(A,E,X){if(X?(s.texParameteri(A,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,J[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,at[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,at[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==fn||E.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,w(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==De&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===De||E.minFilter!==ia&&E.minFilter!==Wr||E.type===jn&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Xr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Lt(A,E){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",k));const it=E.source;let nt=p.get(it);nt===void 0&&(nt={},p.set(it,nt));const R=tt(E);if(R!==A.__cacheKey){nt[R]===void 0&&(nt[R]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),nt[R].usedTimes++;const Z=nt[A.__cacheKey];Z!==void 0&&(nt[A.__cacheKey].usedTimes--,Z.usedTimes===0&&F(E)),A.__cacheKey=R,A.__webglTexture=nt[R].texture}return X}function St(A,E,X){let it=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(it=s.TEXTURE_3D);const nt=Lt(A,E),R=E.source;e.bindTexture(it,A.__webglTexture,s.TEXTURE0+X);const Z=n.get(R);if(R.version!==Z.__version||nt===!0){e.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const et=y(E)&&M(E.image)===!1;let W=v(E.image,et,!1,h);W=_e(E,W);const ft=M(W)||o,gt=r.convert(E.format,E.colorSpace);let mt=r.convert(E.type),pt=P(E.internalFormat,gt,mt,E.colorSpace);_t(it,E,ft);let ht;const Et=E.mipmaps,zt=o&&E.isVideoTexture!==!0,L=Z.__version===void 0||nt===!0,ot=x(E,W,ft);if(E.isDepthTexture)pt=s.DEPTH_COMPONENT,o?E.type===jn?pt=s.DEPTH_COMPONENT32F:E.type===Xn?pt=s.DEPTH_COMPONENT24:E.type===Mi?pt=s.DEPTH24_STENCIL8:pt=s.DEPTH_COMPONENT16:E.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Si&&pt===s.DEPTH_COMPONENT&&E.type!==bo&&E.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Xn,mt=r.convert(E.type)),E.format===gr&&pt===s.DEPTH_COMPONENT&&(pt=s.DEPTH_STENCIL,E.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Mi,mt=r.convert(E.type))),L&&(zt?e.texStorage2D(s.TEXTURE_2D,1,pt,W.width,W.height):e.texImage2D(s.TEXTURE_2D,0,pt,W.width,W.height,0,gt,mt,null));else if(E.isDataTexture)if(Et.length>0&&ft){zt&&L&&e.texStorage2D(s.TEXTURE_2D,ot,pt,Et[0].width,Et[0].height);for(let G=0,rt=Et.length;G<rt;G++)ht=Et[G],zt?e.texSubImage2D(s.TEXTURE_2D,G,0,0,ht.width,ht.height,gt,mt,ht.data):e.texImage2D(s.TEXTURE_2D,G,pt,ht.width,ht.height,0,gt,mt,ht.data);E.generateMipmaps=!1}else zt?(L&&e.texStorage2D(s.TEXTURE_2D,ot,pt,W.width,W.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,W.width,W.height,gt,mt,W.data)):e.texImage2D(s.TEXTURE_2D,0,pt,W.width,W.height,0,gt,mt,W.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&L&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,pt,Et[0].width,Et[0].height,W.depth);for(let G=0,rt=Et.length;G<rt;G++)ht=Et[G],E.format!==pn?gt!==null?zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ht.width,ht.height,W.depth,gt,ht.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,pt,ht.width,ht.height,W.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ht.width,ht.height,W.depth,gt,mt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,pt,ht.width,ht.height,W.depth,0,gt,mt,ht.data)}else{zt&&L&&e.texStorage2D(s.TEXTURE_2D,ot,pt,Et[0].width,Et[0].height);for(let G=0,rt=Et.length;G<rt;G++)ht=Et[G],E.format!==pn?gt!==null?zt?e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,ht.width,ht.height,gt,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,G,pt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage2D(s.TEXTURE_2D,G,0,0,ht.width,ht.height,gt,mt,ht.data):e.texImage2D(s.TEXTURE_2D,G,pt,ht.width,ht.height,0,gt,mt,ht.data)}else if(E.isDataArrayTexture)zt?(L&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,pt,W.width,W.height,W.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,gt,mt,W.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,pt,W.width,W.height,W.depth,0,gt,mt,W.data);else if(E.isData3DTexture)zt?(L&&e.texStorage3D(s.TEXTURE_3D,ot,pt,W.width,W.height,W.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,gt,mt,W.data)):e.texImage3D(s.TEXTURE_3D,0,pt,W.width,W.height,W.depth,0,gt,mt,W.data);else if(E.isFramebufferTexture){if(L)if(zt)e.texStorage2D(s.TEXTURE_2D,ot,pt,W.width,W.height);else{let G=W.width,rt=W.height;for(let lt=0;lt<ot;lt++)e.texImage2D(s.TEXTURE_2D,lt,pt,G,rt,0,gt,mt,null),G>>=1,rt>>=1}}else if(Et.length>0&&ft){zt&&L&&e.texStorage2D(s.TEXTURE_2D,ot,pt,Et[0].width,Et[0].height);for(let G=0,rt=Et.length;G<rt;G++)ht=Et[G],zt?e.texSubImage2D(s.TEXTURE_2D,G,0,0,gt,mt,ht):e.texImage2D(s.TEXTURE_2D,G,pt,gt,mt,ht);E.generateMipmaps=!1}else zt?(L&&e.texStorage2D(s.TEXTURE_2D,ot,pt,W.width,W.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,mt,W)):e.texImage2D(s.TEXTURE_2D,0,pt,gt,mt,W);T(E,ft)&&C(it),Z.__version=R.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function re(A,E,X){if(E.image.length!==6)return;const it=Lt(A,E),nt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+X);const R=n.get(nt);if(nt.version!==R.__version||it===!0){e.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Z=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,W=[];for(let G=0;G<6;G++)!Z&&!et?W[G]=v(E.image[G],!1,!0,c):W[G]=et?E.image[G].image:E.image[G],W[G]=_e(E,W[G]);const ft=W[0],gt=M(ft)||o,mt=r.convert(E.format,E.colorSpace),pt=r.convert(E.type),ht=P(E.internalFormat,mt,pt,E.colorSpace),Et=o&&E.isVideoTexture!==!0,zt=R.__version===void 0||it===!0;let L=x(E,ft,gt);_t(s.TEXTURE_CUBE_MAP,E,gt);let ot;if(Z){Et&&zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,L,ht,ft.width,ft.height);for(let G=0;G<6;G++){ot=W[G].mipmaps;for(let rt=0;rt<ot.length;rt++){const lt=ot[rt];E.format!==pn?mt!==null?Et?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,lt.width,lt.height,mt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,lt.width,lt.height,mt,pt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,ht,lt.width,lt.height,0,mt,pt,lt.data)}}}else{ot=E.mipmaps,Et&&zt&&(ot.length>0&&L++,e.texStorage2D(s.TEXTURE_CUBE_MAP,L,ht,W[0].width,W[0].height));for(let G=0;G<6;G++)if(et){Et?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,W[G].width,W[G].height,mt,pt,W[G].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ht,W[G].width,W[G].height,0,mt,pt,W[G].data);for(let rt=0;rt<ot.length;rt++){const Gt=ot[rt].image[G].image;Et?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,Gt.width,Gt.height,mt,pt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,ht,Gt.width,Gt.height,0,mt,pt,Gt.data)}}else{Et?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,mt,pt,W[G]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ht,mt,pt,W[G]);for(let rt=0;rt<ot.length;rt++){const lt=ot[rt];Et?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,mt,pt,lt.image[G]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,ht,mt,pt,lt.image[G])}}}T(E,gt)&&C(s.TEXTURE_CUBE_MAP),R.__version=nt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Nt(A,E,X,it,nt){const R=r.convert(X.format,X.colorSpace),Z=r.convert(X.type),et=P(X.internalFormat,R,Z,X.colorSpace);n.get(E).__hasExternalTextures||(nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,et,E.width,E.height,E.depth,0,R,Z,null):e.texImage2D(nt,0,et,E.width,E.height,0,R,Z,null)),e.bindFramebuffer(s.FRAMEBUFFER,A),Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,nt,n.get(X).__webglTexture,0,wt(E)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,nt,n.get(X).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function O(A,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let it=s.DEPTH_COMPONENT16;if(X||Vt(E)){const nt=E.depthTexture;nt&&nt.isDepthTexture&&(nt.type===jn?it=s.DEPTH_COMPONENT32F:nt.type===Xn&&(it=s.DEPTH_COMPONENT24));const R=wt(E);Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R,it,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,R,it,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,it,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const it=wt(E);X&&Vt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const it=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let nt=0;nt<it.length;nt++){const R=it[nt],Z=r.convert(R.format,R.colorSpace),et=r.convert(R.type),W=P(R.internalFormat,Z,et,R.colorSpace),ft=wt(E);X&&Vt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,W,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,W,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,W,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const it=n.get(E.depthTexture).__webglTexture,nt=wt(E);if(E.depthTexture.format===Si)Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(E.depthTexture.format===gr)Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function xt(A){const E=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,A)}else if(X){E.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[it]),E.__webglDepthbuffer[it]=s.createRenderbuffer(),O(E.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),O(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(A,E,X){const it=n.get(A);E!==void 0&&Nt(it.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),X!==void 0&&xt(A)}function vt(A){const E=A.texture,X=n.get(A),it=n.get(E);A.addEventListener("dispose",V),A.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=E.version,a.memory.textures++);const nt=A.isWebGLCubeRenderTarget===!0,R=A.isWebGLMultipleRenderTargets===!0,Z=M(A)||o;if(nt){X.__webglFramebuffer=[];for(let et=0;et<6;et++)X.__webglFramebuffer[et]=s.createFramebuffer()}else{if(X.__webglFramebuffer=s.createFramebuffer(),R)if(i.drawBuffers){const et=A.texture;for(let W=0,ft=et.length;W<ft;W++){const gt=n.get(et[W]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Vt(A)===!1){const et=R?E:[E];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let W=0;W<et.length;W++){const ft=et[W];X.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[W]);const gt=r.convert(ft.format,ft.colorSpace),mt=r.convert(ft.type),pt=P(ft.internalFormat,gt,mt,ft.colorSpace,A.isXRRenderTarget===!0),ht=wt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,pt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,X.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),O(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),_t(s.TEXTURE_CUBE_MAP,E,Z);for(let et=0;et<6;et++)Nt(X.__webglFramebuffer[et],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et);T(E,Z)&&C(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(R){const et=A.texture;for(let W=0,ft=et.length;W<ft;W++){const gt=et[W],mt=n.get(gt);e.bindTexture(s.TEXTURE_2D,mt.__webglTexture),_t(s.TEXTURE_2D,gt,Z),Nt(X.__webglFramebuffer,A,gt,s.COLOR_ATTACHMENT0+W,s.TEXTURE_2D),T(gt,Z)&&C(s.TEXTURE_2D)}e.unbindTexture()}else{let et=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?et=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(et,it.__webglTexture),_t(et,E,Z),Nt(X.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,et),T(E,Z)&&C(et),e.unbindTexture()}A.depthBuffer&&xt(A)}function Wt(A){const E=M(A)||o,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0,nt=X.length;it<nt;it++){const R=X[it];if(T(R,E)){const Z=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,et=n.get(R).__webglTexture;e.bindTexture(Z,et),C(Z),e.unbindTexture()}}}function Ut(A){if(o&&A.samples>0&&Vt(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,it=A.height;let nt=s.COLOR_BUFFER_BIT;const R=[],Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=n.get(A),W=A.isWebGLMultipleRenderTargets===!0;if(W)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){R.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&R.push(Z);const gt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(gt===!1&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),W&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,et.__webglColorRenderbuffer[ft]),gt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Z]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Z])),W){const mt=n.get(E[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,mt,0)}s.blitFramebuffer(0,0,X,it,0,0,X,it,nt,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,et.__webglColorRenderbuffer[ft]);const gt=n.get(E[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function wt(A){return Math.min(u,A.samples)}function Vt(A){const E=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(A){const E=a.render.frame;_.get(A)!==E&&(_.set(A,E),A.update())}function _e(A,E){const X=A.colorSpace,it=A.format,nt=A.type;return A.isCompressedTexture===!0||A.format===to||X!==Sn&&X!==Ti&&(X===Pt?o===!1?t.has("EXT_sRGB")===!0&&it===pn?(A.format=to,A.minFilter=nn,A.generateMipmaps=!1):E=hh.sRGBToLinear(E):(it!==pn||nt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=dt,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=Ct,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Vt}function C_(s,t,e){const n=e.isWebGL2;function i(r,a=Ti){let o;if(r===Jn)return s.UNSIGNED_BYTE;if(r===eh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ud)return s.BYTE;if(r===dd)return s.SHORT;if(r===bo)return s.UNSIGNED_SHORT;if(r===th)return s.INT;if(r===Xn)return s.UNSIGNED_INT;if(r===jn)return s.FLOAT;if(r===Xr)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===fd)return s.ALPHA;if(r===pn)return s.RGBA;if(r===pd)return s.LUMINANCE;if(r===md)return s.LUMINANCE_ALPHA;if(r===Si)return s.DEPTH_COMPONENT;if(r===gr)return s.DEPTH_STENCIL;if(r===to)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===gd)return s.RED;if(r===ih)return s.RED_INTEGER;if(r===_d)return s.RG;if(r===rh)return s.RG_INTEGER;if(r===sh)return s.RGBA_INTEGER;if(r===ra||r===sa||r===aa||r===oa)if(a===Pt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cl||r===hl||r===ul||r===dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===cl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fl||r===pl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===fl)return a===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===pl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl||r===El||r===Tl||r===bl||r===wl||r===Al||r===Cl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ml)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_l)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ml)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===El)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Al)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cl)return a===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===la)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===la)return a===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===vd||r===Rl||r===Pl||r===Ll)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===la)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Rl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ll)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class R_ extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class L_ extends Fe{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Xn),n===void 0&&h===gr&&(n=Mi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class D_ extends Ii{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null;const g=e.getContextAttributes();let p=null,f=null;const S=[],v=[];let M=null;const y=new Ye;y.layers.enable(1),y.viewport=new Kt;const T=new Ye;T.layers.enable(2),T.viewport=new Kt;const C=[y,T],P=new R_;P.layers.enable(1),P.layers.enable(2);let x=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){M=N},this.getController=function(N){let Q=S[N];return Q===void 0&&(Q=new Da,S[N]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(N){let Q=S[N];return Q===void 0&&(Q=new Da,S[N]=Q),Q.getGripSpace()},this.getHand=function(N){let Q=S[N];return Q===void 0&&(Q=new Da,S[N]=Q),Q.getHandSpace()};function k(N){const Q=v.indexOf(N.inputSource);if(Q===-1)return;const J=S[Q];J!==void 0&&(J.update(N.inputSource,N.frame,c||a),J.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",U);for(let N=0;N<S.length;N++){const Q=v[N];Q!==null&&(v[N]=null,S[N].disconnect(Q))}x=null,w=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,f=null,dt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:m}),f=new Ri(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,J=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?gr:Si,J=g.stencil?Mi:Xn);const ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),f=new Ri(d.textureWidth,d.textureHeight,{format:pn,type:Jn,depthTexture:new L_(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const _t=t.properties.get(f);_t.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(N){for(let Q=0;Q<N.removed.length;Q++){const J=N.removed[Q],at=v.indexOf(J);at>=0&&(v[at]=null,S[at].disconnect(J))}for(let Q=0;Q<N.added.length;Q++){const J=N.added[Q];let at=v.indexOf(J);if(at===-1){for(let _t=0;_t<S.length;_t++)if(_t>=v.length){v.push(J),at=_t;break}else if(v[_t]===null){v[_t]=J,at=_t;break}if(at===-1)break}const ct=S[at];ct&&ct.connect(J)}}const F=new D,z=new D;function q(N,Q,J){F.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const at=F.distanceTo(z),ct=Q.projectionMatrix.elements,_t=J.projectionMatrix.elements,Lt=ct[14]/(ct[10]-1),St=ct[14]/(ct[10]+1),re=(ct[9]+1)/ct[5],Nt=(ct[9]-1)/ct[5],O=(ct[8]-1)/ct[0],de=(_t[8]+1)/_t[0],xt=Lt*O,Ct=Lt*de,vt=at/(-O+de),Wt=vt*-O;Q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Wt),N.translateZ(vt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ut=Lt+vt,wt=St+vt,Vt=xt-Wt,fe=Ct+(at-Wt),_e=re*St/wt*Ut,A=Nt*St/wt*Ut;N.projectionMatrix.makePerspective(Vt,fe,_e,A,Ut,wt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function H(N,Q){Q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(i===null)return N;M&&(N=M),P.near=T.near=y.near=N.near,P.far=T.far=y.far=N.far,(x!==P.near||w!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),x=P.near,w=P.far);const Q=N.parent,J=P.cameras;H(P,Q);for(let at=0;at<J.length;at++)H(J[at],Q);return J.length===2?q(P,y,T):P.projectionMatrix.copy(y.projectionMatrix),M&&Y(P,Q),P};function Y(N,Q){const J=M;Q===null?J.matrix.copy(N.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(N.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const at=J.children;for(let ct=0,_t=at.length;ct<_t;ct++)at[ct].updateMatrixWorld(!0);J.projectionMatrix.copy(N.projectionMatrix),J.projectionMatrixInverse.copy(N.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=eo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let tt=null;function K(N,Q){if(h=Q.getViewerPose(c||a),_=Q,h!==null){const J=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let at=!1;J.length!==P.cameras.length&&(P.cameras.length=0,at=!0);for(let ct=0;ct<J.length;ct++){const _t=J[ct];let Lt=null;if(m!==null)Lt=m.getViewport(_t);else{const re=u.getViewSubImage(d,_t);Lt=re.viewport,ct===0&&(t.setRenderTargetTextures(f,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(f))}let St=C[ct];St===void 0&&(St=new Ye,St.layers.enable(ct),St.viewport=new Kt,C[ct]=St),St.matrix.fromArray(_t.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(_t.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ct===0&&(P.matrix.copy(St.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),at===!0&&P.cameras.push(St)}}for(let J=0;J<S.length;J++){const at=v[J],ct=S[J];at!==null&&ct!==void 0&&ct.update(at,Q,c||a)}tt&&tt(N,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const dt=new vh;dt.setAnimationLoop(K),this.setAnimationLoop=function(N){tt=N},this.dispose=function(){}}}function U_(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,gh(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,S,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===be&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===be&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=t.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===be&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const S=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(_(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(S,y);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const v=u();S.__bindingPointIndex=v;const M=s.createBuffer(),y=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],M=S.uniforms,y=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,C=M.length;T<C;T++){const P=M[T];if(m(P,T,y)===!0){const x=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let V=0;V<w.length;V++){const U=w[V],F=g(U);typeof U=="number"?(P.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,x+k,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,P.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,v,M){const y=S.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const T=Array.isArray(y)?y:[y],C=[];for(let P=0;P<T.length;P++)C.push(T[P].clone());M[v]=C}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const T=Array.isArray(M[v])?M[v]:[M[v]],C=Array.isArray(y)?y:[y];for(let P=0;P<T.length;P++){const x=T[P];if(x.equals(C[P])===!1)return x.copy(C[P]),!0}}return!1}function _(S){const v=S.uniforms;let M=0;const y=16;let T=0;for(let C=0,P=v.length;C<P;C++){const x=v[C],w={boundary:0,storage:0},k=Array.isArray(x.value)?x.value:[x.value];for(let V=0,U=k.length;V<U;V++){const F=k[V],z=g(F);w.boundary+=z.boundary,w.storage+=z.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,C>0){T=M%y;const V=y-T;T!==0&&V-w.boundary<0&&(M+=y-T,x.__offset=M)}M+=w.storage}return T=M%y,T>0&&(M+=y-T),S.__size=M,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}function F_(){const s=jr("canvas");return s.style.display="block",s}class bh{constructor(t={}){const{canvas:e=F_(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Pt,this.useLegacyLights=!0,this.toneMapping=Nn,this.toneMappingExposure=1;const v=this;let M=!1,y=0,T=0,C=null,P=-1,x=null;const w=new Kt,k=new Kt;let V=null;const U=new Ht(0);let F=0,z=e.width,q=e.height,H=1,Y=null,tt=null;const K=new Kt(0,0,z,q),dt=new Kt(0,0,z,q);let N=!1;const Q=new Ao;let J=!1,at=!1,ct=null;const _t=new te,Lt=new Mt,St=new D,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return C===null?H:1}let O=n;function de(b,B){for(let j=0;j<b.length;j++){const I=b[j],$=e.getContext(I,B);if($!==null)return $}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",rt,!1),O===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),O=de(B,b),O===null)throw de(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xt,Ct,vt,Wt,Ut,wt,Vt,fe,_e,A,E,X,it,nt,R,Z,et,W,ft,gt,mt,pt,ht,Et;function zt(){xt=new jm(O),Ct=new km(O,xt,t),xt.init(Ct),pt=new C_(O,xt,Ct),vt=new w_(O,xt,Ct),Wt=new $m(O),Ut=new d_,wt=new A_(O,xt,vt,Ut,Ct,pt,Wt),Vt=new Hm(v),fe=new Xm(v),_e=new of(O,Ct),ht=new zm(O,xt,_e,Ct),A=new qm(O,_e,Wt,ht),E=new Qm(O,A,_e,Wt),ft=new Jm(O,Ct,wt),Z=new Gm(Ut),X=new u_(v,Vt,fe,xt,Ct,ht,Z),it=new U_(v,Ut),nt=new p_,R=new y_(xt,Ct),W=new Om(v,Vt,fe,vt,E,d,l),et=new b_(v,E,Ct),Et=new I_(O,Wt,Ct,vt),gt=new Bm(O,xt,Wt,Ct),mt=new Ym(O,xt,Wt,Ct),Wt.programs=X.programs,v.capabilities=Ct,v.extensions=xt,v.properties=Ut,v.renderLists=nt,v.shadowMap=et,v.state=vt,v.info=Wt}zt();const L=new D_(v,O);this.xr=L,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(z,q,!1))},this.getSize=function(b){return b.set(z,q)},this.setSize=function(b,B,j=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,q=B,e.width=Math.floor(b*H),e.height=Math.floor(B*H),j===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(z*H,q*H).floor()},this.setDrawingBufferSize=function(b,B,j){z=b,q=B,H=j,e.width=Math.floor(b*j),e.height=Math.floor(B*j),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,B,j,I){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,B,j,I),vt.viewport(w.copy(K).multiplyScalar(H).floor())},this.getScissor=function(b){return b.copy(dt)},this.setScissor=function(b,B,j,I){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,B,j,I),vt.scissor(k.copy(dt).multiplyScalar(H).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(b){vt.setScissorTest(N=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(b=!0,B=!0,j=!0){let I=0;if(b){let $=!1;if(C!==null){const ut=C.texture.format;$=ut===sh||ut===rh||ut===ih}if($){const ut=C.texture.type,yt=ut===Jn||ut===Xn||ut===bo||ut===Mi||ut===eh||ut===nh,Tt=W.getClearColor(),bt=W.getClearAlpha(),Ot=Tt.r,At=Tt.g,Rt=Tt.b,Yt=Ut.get(C).__webglFramebuffer;yt?(m[0]=Ot,m[1]=At,m[2]=Rt,m[3]=bt,O.clearBufferuiv(O.COLOR,Yt,m)):(_[0]=Ot,_[1]=At,_[2]=Rt,_[3]=bt,O.clearBufferiv(O.COLOR,Yt,_))}else I|=O.COLOR_BUFFER_BIT}B&&(I|=O.DEPTH_BUFFER_BIT),j&&(I|=O.STENCIL_BUFFER_BIT),O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),nt.dispose(),R.dispose(),Ut.dispose(),Vt.dispose(),fe.dispose(),E.dispose(),ht.dispose(),Et.dispose(),X.dispose(),L.dispose(),L.removeEventListener("sessionstart",ne),L.removeEventListener("sessionend",mn),ct&&(ct.dispose(),ct=null),Ae.stop()};function ot(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Wt.autoReset,B=et.enabled,j=et.autoUpdate,I=et.needsUpdate,$=et.type;zt(),Wt.autoReset=b,et.enabled=B,et.autoUpdate=j,et.needsUpdate=I,et.type=$}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const B=b.target;B.removeEventListener("dispose",lt),Gt(B)}function Gt(b){ee(b),Ut.remove(b)}function ee(b){const B=Ut.get(b).programs;B!==void 0&&(B.forEach(function(j){X.releaseProgram(j)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,j,I,$,ut){B===null&&(B=re);const yt=$.isMesh&&$.matrixWorld.determinant()<0,Tt=Lu(b,B,j,I,$);vt.setMaterial(I,yt);let bt=j.index,Ot=1;I.wireframe===!0&&(bt=A.getWireframeAttribute(j),Ot=2);const At=j.drawRange,Rt=j.attributes.position;let Yt=At.start*Ot,se=(At.start+At.count)*Ot;ut!==null&&(Yt=Math.max(Yt,ut.start*Ot),se=Math.min(se,(ut.start+ut.count)*Ot)),bt!==null?(Yt=Math.max(Yt,0),se=Math.min(se,bt.count)):Rt!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,Rt.count));const ln=se-Yt;if(ln<0||ln===1/0)return;ht.setup($,I,Tt,j,bt);let Tn,le=gt;if(bt!==null&&(Tn=_e.get(bt),le=mt,le.setIndex(Tn)),$.isMesh)I.wireframe===!0?(vt.setLineWidth(I.wireframeLinewidth*Nt()),le.setMode(O.LINES)):le.setMode(O.TRIANGLES);else if($.isLine){let kt=I.linewidth;kt===void 0&&(kt=1),vt.setLineWidth(kt*Nt()),$.isLineSegments?le.setMode(O.LINES):$.isLineLoop?le.setMode(O.LINE_LOOP):le.setMode(O.LINE_STRIP)}else $.isPoints?le.setMode(O.POINTS):$.isSprite&&le.setMode(O.TRIANGLES);if($.isInstancedMesh)le.renderInstances(Yt,ln,$.count);else if(j.isInstancedBufferGeometry){const kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Qs=Math.min(j.instanceCount,kt);le.renderInstances(Yt,ln,Qs)}else le.render(Yt,ln)},this.compile=function(b,B){function j(I,$,ut){I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=be,I.needsUpdate=!0,rs(I,$,ut),I.side=ni,I.needsUpdate=!0,rs(I,$,ut),I.side=In):rs(I,$,ut)}p=R.get(b),p.init(),S.push(p),b.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(v.useLegacyLights),b.traverse(function(I){const $=I.material;if($)if(Array.isArray($))for(let ut=0;ut<$.length;ut++){const yt=$[ut];j(yt,b,I)}else j($,b,I)}),S.pop(),p=null};let oe=null;function oi(b){oe&&oe(b)}function ne(){Ae.stop()}function mn(){Ae.start()}const Ae=new vh;Ae.setAnimationLoop(oi),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(b){oe=b,L.setAnimationLoop(b),b===null?Ae.stop():Ae.start()},L.addEventListener("sessionstart",ne),L.addEventListener("sessionend",mn),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(B=L.updateCameraXR(B)),b.isScene===!0&&b.onBeforeRender(v,b,B,C),p=R.get(b,S.length),p.init(),S.push(p),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(_t),at=this.localClippingEnabled,J=Z.init(this.clippingPlanes,at),g=nt.get(b,f.length),g.init(),f.push(g),Zo(b,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,tt),J===!0&&Z.beginShadows();const j=p.state.shadowsArray;if(et.render(j,b,B),J===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(g,b),p.setupLights(v.useLegacyLights),B.isArrayCamera){const I=B.cameras;for(let $=0,ut=I.length;$<ut;$++){const yt=I[$];Jo(g,b,yt,yt.viewport)}}else Jo(g,b,B);C!==null&&(wt.updateMultisampleRenderTarget(C),wt.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,B),ht.resetDefaultState(),P=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Zo(b,B,j,I){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){I&&St.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const yt=E.update(b),Tt=b.material;Tt.visible&&g.push(b,yt,Tt,j,St.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==Wt.render.frame&&(b.skeleton.update(),b.skeleton.frame=Wt.render.frame);const yt=E.update(b),Tt=b.material;if(I&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),St.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),St.copy(yt.boundingSphere.center)),St.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Tt)){const bt=yt.groups;for(let Ot=0,At=bt.length;Ot<At;Ot++){const Rt=bt[Ot],Yt=Tt[Rt.materialIndex];Yt&&Yt.visible&&g.push(b,yt,Yt,j,St.z,Rt)}}else Tt.visible&&g.push(b,yt,Tt,j,St.z,null)}}const ut=b.children;for(let yt=0,Tt=ut.length;yt<Tt;yt++)Zo(ut[yt],B,j,I)}function Jo(b,B,j,I){const $=b.opaque,ut=b.transmissive,yt=b.transparent;p.setupLightsView(j),J===!0&&Z.setGlobalState(v.clippingPlanes,j),ut.length>0&&Pu($,ut,B,j),I&&vt.viewport(w.copy(I)),$.length>0&&is($,B,j),ut.length>0&&is(ut,B,j),yt.length>0&&is(yt,B,j),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Pu(b,B,j,I){const $=Ct.isWebGL2;ct===null&&(ct=new Ri(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Xr:Jn,minFilter:Wr,samples:$&&o===!0?4:0})),v.getDrawingBufferSize(Lt),$?ct.setSize(Lt.x,Lt.y):ct.setSize(no(Lt.x),no(Lt.y));const ut=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(U),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const yt=v.toneMapping;v.toneMapping=Nn,is(b,j,I),wt.updateMultisampleRenderTarget(ct),wt.updateRenderTargetMipmap(ct);let Tt=!1;for(let bt=0,Ot=B.length;bt<Ot;bt++){const At=B[bt],Rt=At.object,Yt=At.geometry,se=At.material,ln=At.group;if(se.side===In&&Rt.layers.test(I.layers)){const Tn=se.side;se.side=be,se.needsUpdate=!0,Qo(Rt,j,I,Yt,se,ln),se.side=Tn,se.needsUpdate=!0,Tt=!0}}Tt===!0&&(wt.updateMultisampleRenderTarget(ct),wt.updateRenderTargetMipmap(ct)),v.setRenderTarget(ut),v.setClearColor(U,F),v.toneMapping=yt}function is(b,B,j){const I=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ut=b.length;$<ut;$++){const yt=b[$],Tt=yt.object,bt=yt.geometry,Ot=I===null?yt.material:I,At=yt.group;Tt.layers.test(j.layers)&&Qo(Tt,B,j,bt,Ot,At)}}function Qo(b,B,j,I,$,ut){b.onBeforeRender(v,B,j,I,$,ut),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(v,B,j,I,b,ut),$.transparent===!0&&$.side===In&&$.forceSinglePass===!1?($.side=be,$.needsUpdate=!0,v.renderBufferDirect(j,B,I,$,b,ut),$.side=ni,$.needsUpdate=!0,v.renderBufferDirect(j,B,I,$,b,ut),$.side=In):v.renderBufferDirect(j,B,I,$,b,ut),b.onAfterRender(v,B,j,I,$,ut)}function rs(b,B,j){B.isScene!==!0&&(B=re);const I=Ut.get(b),$=p.state.lights,ut=p.state.shadowsArray,yt=$.state.version,Tt=X.getParameters(b,$.state,ut,B,j),bt=X.getProgramCacheKey(Tt);let Ot=I.programs;I.environment=b.isMeshStandardMaterial?B.environment:null,I.fog=B.fog,I.envMap=(b.isMeshStandardMaterial?fe:Vt).get(b.envMap||I.environment),Ot===void 0&&(b.addEventListener("dispose",lt),Ot=new Map,I.programs=Ot);let At=Ot.get(bt);if(At!==void 0){if(I.currentProgram===At&&I.lightsStateVersion===yt)return tl(b,Tt),At}else Tt.uniforms=X.getUniforms(b),b.onBuild(j,Tt,v),b.onBeforeCompile(Tt,v),At=X.acquireProgram(Tt,bt),Ot.set(bt,At),I.uniforms=Tt.uniforms;const Rt=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Z.uniform),tl(b,Tt),I.needsLights=Uu(b),I.lightsStateVersion=yt,I.needsLights&&(Rt.ambientLightColor.value=$.state.ambient,Rt.lightProbe.value=$.state.probe,Rt.directionalLights.value=$.state.directional,Rt.directionalLightShadows.value=$.state.directionalShadow,Rt.spotLights.value=$.state.spot,Rt.spotLightShadows.value=$.state.spotShadow,Rt.rectAreaLights.value=$.state.rectArea,Rt.ltc_1.value=$.state.rectAreaLTC1,Rt.ltc_2.value=$.state.rectAreaLTC2,Rt.pointLights.value=$.state.point,Rt.pointLightShadows.value=$.state.pointShadow,Rt.hemisphereLights.value=$.state.hemi,Rt.directionalShadowMap.value=$.state.directionalShadowMap,Rt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Rt.spotShadowMap.value=$.state.spotShadowMap,Rt.spotLightMatrix.value=$.state.spotLightMatrix,Rt.spotLightMap.value=$.state.spotLightMap,Rt.pointShadowMap.value=$.state.pointShadowMap,Rt.pointShadowMatrix.value=$.state.pointShadowMatrix);const Yt=At.getUniforms(),se=Ds.seqWithValue(Yt.seq,Rt);return I.currentProgram=At,I.uniformsList=se,At}function tl(b,B){const j=Ut.get(b);j.outputColorSpace=B.outputColorSpace,j.instancing=B.instancing,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Lu(b,B,j,I,$){B.isScene!==!0&&(B=re),wt.resetTextureUnits();const ut=B.fog,yt=I.isMeshStandardMaterial?B.environment:null,Tt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Sn,bt=(I.isMeshStandardMaterial?fe:Vt).get(I.envMap||yt),Ot=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,At=!!j.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Rt=!!j.morphAttributes.position,Yt=!!j.morphAttributes.normal,se=!!j.morphAttributes.color,ln=I.toneMapped?v.toneMapping:Nn,Tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=Tn!==void 0?Tn.length:0,kt=Ut.get(I),Qs=p.state.lights;if(J===!0&&(at===!0||b!==x)){const We=b===x&&I.id===P;Z.setState(I,b,We)}let xe=!1;I.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Qs.state.version||kt.outputColorSpace!==Tt||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==bt||I.fog===!0&&kt.fog!==ut||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Z.numPlanes||kt.numIntersection!==Z.numIntersection)||kt.vertexAlphas!==Ot||kt.vertexTangents!==At||kt.morphTargets!==Rt||kt.morphNormals!==Yt||kt.morphColors!==se||kt.toneMapping!==ln||Ct.isWebGL2===!0&&kt.morphTargetsCount!==le)&&(xe=!0):(xe=!0,kt.__version=I.version);let li=kt.currentProgram;xe===!0&&(li=rs(I,B,$));let el=!1,br=!1,ta=!1;const Ce=li.getUniforms(),ci=kt.uniforms;if(vt.useProgram(li.program)&&(el=!0,br=!0,ta=!0),I.id!==P&&(P=I.id,br=!0),el||x!==b){if(Ce.setValue(O,"projectionMatrix",b.projectionMatrix),Ct.logarithmicDepthBuffer&&Ce.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),x!==b&&(x=b,br=!0,ta=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const We=Ce.map.cameraPosition;We!==void 0&&We.setValue(O,St.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ce.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||$.isSkinnedMesh)&&Ce.setValue(O,"viewMatrix",b.matrixWorldInverse)}if($.isSkinnedMesh){Ce.setOptional(O,$,"bindMatrix"),Ce.setOptional(O,$,"bindMatrixInverse");const We=$.skeleton;We&&(Ct.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ce.setValue(O,"boneTexture",We.boneTexture,wt),Ce.setValue(O,"boneTextureSize",We.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ea=j.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0&&Ct.isWebGL2===!0)&&ft.update($,j,li),(br||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,Ce.setValue(O,"receiveShadow",$.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ci.envMap.value=bt,ci.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),br&&(Ce.setValue(O,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Du(ci,ta),ut&&I.fog===!0&&it.refreshFogUniforms(ci,ut),it.refreshMaterialUniforms(ci,I,H,q,ct),Ds.upload(O,kt.uniformsList,ci,wt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ds.upload(O,kt.uniformsList,ci,wt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ce.setValue(O,"center",$.center),Ce.setValue(O,"modelViewMatrix",$.modelViewMatrix),Ce.setValue(O,"normalMatrix",$.normalMatrix),Ce.setValue(O,"modelMatrix",$.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const We=I.uniformsGroups;for(let na=0,Iu=We.length;na<Iu;na++)if(Ct.isWebGL2){const nl=We[na];Et.update(nl,li),Et.bind(nl,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Du(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Uu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,j){Ut.get(b.texture).__webglTexture=B,Ut.get(b.depthTexture).__webglTexture=j;const I=Ut.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const j=Ut.get(b);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,j=0){C=b,y=B,T=j;let I=!0,$=null,ut=!1,yt=!1;if(b){const bt=Ut.get(b);bt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(O.FRAMEBUFFER,null),I=!1):bt.__webglFramebuffer===void 0?wt.setupRenderTarget(b):bt.__hasExternalTextures&&wt.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(yt=!0);const At=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=At[B],ut=!0):Ct.isWebGL2&&b.samples>0&&wt.useMultisampledRTT(b)===!1?$=Ut.get(b).__webglMultisampledFramebuffer:$=At,w.copy(b.viewport),k.copy(b.scissor),V=b.scissorTest}else w.copy(K).multiplyScalar(H).floor(),k.copy(dt).multiplyScalar(H).floor(),V=N;if(vt.bindFramebuffer(O.FRAMEBUFFER,$)&&Ct.drawBuffers&&I&&vt.drawBuffers(b,$),vt.viewport(w),vt.scissor(k),vt.setScissorTest(V),ut){const bt=Ut.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,j)}else if(yt){const bt=Ut.get(b.texture),Ot=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.__webglTexture,j||0,Ot)}P=-1},this.readRenderTargetPixels=function(b,B,j,I,$,ut,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){vt.bindFramebuffer(O.FRAMEBUFFER,Tt);try{const bt=b.texture,Ot=bt.format,At=bt.type;if(Ot!==pn&&pt.convert(Ot)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=At===Xr&&(xt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&xt.has("EXT_color_buffer_float"));if(At!==Jn&&pt.convert(At)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===jn&&(Ct.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-I&&j>=0&&j<=b.height-$&&O.readPixels(B,j,I,$,pt.convert(Ot),pt.convert(At),ut)}finally{const bt=C!==null?Ut.get(C).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(b,B,j=0){const I=Math.pow(2,-j),$=Math.floor(B.image.width*I),ut=Math.floor(B.image.height*I);wt.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,b.x,b.y,$,ut),vt.unbindTexture()},this.copyTextureToTexture=function(b,B,j,I=0){const $=B.image.width,ut=B.image.height,yt=pt.convert(j.format),Tt=pt.convert(j.type);wt.setTexture2D(j,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,I,b.x,b.y,$,ut,yt,Tt,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,I,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,yt,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,I,b.x,b.y,yt,Tt,B.image),I===0&&j.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,j,I,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=b.max.x-b.min.x+1,yt=b.max.y-b.min.y+1,Tt=b.max.z-b.min.z+1,bt=pt.convert(I.format),Ot=pt.convert(I.type);let At;if(I.isData3DTexture)wt.setTexture3D(I,0),At=O.TEXTURE_3D;else if(I.isDataArrayTexture)wt.setTexture2DArray(I,0),At=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const Rt=O.getParameter(O.UNPACK_ROW_LENGTH),Yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),se=O.getParameter(O.UNPACK_SKIP_PIXELS),ln=O.getParameter(O.UNPACK_SKIP_ROWS),Tn=O.getParameter(O.UNPACK_SKIP_IMAGES),le=j.isCompressedTexture?j.mipmaps[0]:j.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?O.texSubImage3D(At,$,B.x,B.y,B.z,ut,yt,Tt,bt,Ot,le.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(At,$,B.x,B.y,B.z,ut,yt,Tt,bt,le.data)):O.texSubImage3D(At,$,B.x,B.y,B.z,ut,yt,Tt,bt,Ot,le),O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,se),O.pixelStorei(O.UNPACK_SKIP_ROWS,ln),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Tn),$===0&&I.generateMipmaps&&O.generateMipmap(At),vt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?wt.setTextureCube(b,0):b.isData3DTexture?wt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?wt.setTexture2DArray(b,0):wt.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){y=0,T=0,C=null,vt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Ei:ah}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?Pt:Sn}}class N_ extends bh{}N_.prototype.isWebGL1Renderer=!0;class O_ extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class z_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new D;class Os{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ro extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let tr;const Pr=new D,er=new D,nr=new D,ir=new Mt,Lr=new Mt,wh=new te,bs=new D,Dr=new D,ws=new D,_c=new Mt,Ua=new Mt,xc=new Mt;class vc extends pe{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new z_(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Os(n,3,0,!1)),tr.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=tr,this.material=t!==void 0?t:new ro,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;As(bs.set(-.5,-.5,0),nr,a,er,i,r),As(Dr.set(.5,-.5,0),nr,a,er,i,r),As(ws.set(.5,.5,0),nr,a,er,i,r),_c.set(0,0),Ua.set(1,0),xc.set(1,1);let o=t.ray.intersectTriangle(bs,Dr,ws,!1,Pr);if(o===null&&(As(Dr.set(-.5,.5,0),nr,a,er,i,r),Ua.set(0,1),o=t.ray.intersectTriangle(bs,ws,Dr,!1,Pr),o===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:rn.getInterpolation(Pr,bs,Dr,ws,_c,Ua,xc,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function As(s,t,e,n,i,r){ir.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Lr.x=r*ir.x-i*ir.y,Lr.y=i*ir.x+r*ir.y):Lr.copy(ir),s.copy(t),s.x+=Lr.x,s.y+=Lr.y,s.applyMatrix4(wh)}class Ah extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yc=new D,Mc=new D,Sc=new te,Ia=new qs,Cs=new es;class B_ extends pe{constructor(t=new Ve,e=new Ah){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)yc.fromBufferAttribute(e,i-1),Mc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yc.distanceTo(Mc);t.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;Sc.copy(i).invert(),Ia.copy(t.ray).applyMatrix4(Sc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,u=new D,d=new D,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),S=Math.min(_.count,a.start+a.count);for(let v=f,M=S-1;v<M;v+=m){const y=_.getX(v),T=_.getX(v+1);if(c.fromBufferAttribute(p,y),h.fromBufferAttribute(p,T),Ia.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let v=f,M=S-1;v<M;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Ia.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Ch extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ec=new te,so=new qs,Rs=new es,Ps=new D;class k_ extends pe{constructor(t=new Ve,e=new Ch){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;Ec.copy(i).invert(),so.copy(t.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,g=m;_<g;_++){const p=c.getX(_);Ps.fromBufferAttribute(u,p),Tc(Ps,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m;_<g;_++)Ps.fromBufferAttribute(u,_),Tc(Ps,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tc(s,t,e,n,i,r,a){const o=so.distanceSqToPoint(s);if(o<e){const l=new D;so.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Po extends Fe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lo extends Ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let _=0;const g=[],p=n/2;let f=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(m,2));function S(){const M=new D,y=new D;let T=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const x=[],w=P/r,k=w*(e-t)+t;for(let V=0;V<=i;V++){const U=V/i,F=U*l+o,z=Math.sin(F),q=Math.cos(F);y.x=k*z,y.y=-w*n+p,y.z=k*q,u.push(y.x,y.y,y.z),M.set(z,C,q).normalize(),d.push(M.x,M.y,M.z),m.push(U,1-w),x.push(_++)}g.push(x)}for(let P=0;P<i;P++)for(let x=0;x<r;x++){const w=g[x][P],k=g[x+1][P],V=g[x+1][P+1],U=g[x][P+1];h.push(w,k,U),h.push(k,V,U),T+=6}c.addGroup(f,T,0),f+=T}function v(M){const y=_,T=new Mt,C=new D;let P=0;const x=M===!0?t:e,w=M===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),_++;const k=_;for(let V=0;V<=i;V++){const F=V/i*l+o,z=Math.cos(F),q=Math.sin(F);C.x=x*q,C.y=p*w,C.z=x*z,u.push(C.x,C.y,C.z),d.push(0,w,0),T.x=z*.5+.5,T.y=q*.5*w+.5,m.push(T.x,T.y),_++}for(let V=0;V<i;V++){const U=y+V,F=k+V;M===!0?h.push(F,F+1,U):h.push(F+1,F,U),P+=3}c.addGroup(f,P,M===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends Lo{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Do(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends Ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const S=[],v=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const T=y/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+v*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(T+M,1-v),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const v=h[f][S+1],M=h[f][S],y=h[f+1][S],T=h[f+1][S+1];(f!==0||a>0)&&m.push(v,M,T),(f!==n-1||l<Math.PI)&&m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wn extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const bc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class G_{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const H_=new G_;class Rh{constructor(t){this.manager=t!==void 0?t:H_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class V_ extends Rh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=jr("img");function l(){h(),bc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class zs extends Rh{constructor(t){super(t)}load(t,e,n,i){const r=new Fe,a=new V_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Uo extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Fa=new te,wc=new D,Ac=new D;class Ph{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cc=new te,Ur=new D,Na=new D;class W_ extends Ph{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Na.copy(n.position),Na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Na),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc)}}class Oa extends Uo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class X_ extends Ph{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j_ extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new X_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class q_ extends Uo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Y_{constructor(t,e,n=0,i=1/0){this.ray=new qs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ao(t,this,n,e),n.sort(Rc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ao(t[i],this,n,e);return n.sort(Rc),n}}function Rc(s,t){return s.distance-t.distance}function ao(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ao(i[r],t,e,!0)}}class Pc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const Lc={type:"change"},za={type:"start"},Dc={type:"end"};class $_ extends Ii{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Vt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Vt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lc),n.update(),r=i.NONE},this.update=function(){const R=new D,Z=new Pi().setFromUnitVectors(t.up,new D(0,1,0)),et=Z.clone().invert(),W=new D,ft=new Pi,gt=new D,mt=2*Math.PI;return function(){const ht=n.object.position;R.copy(ht).sub(n.target),R.applyQuaternion(Z),o.setFromVector3(R),n.autoRotate&&r===i.NONE&&x(C()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Et=n.minAzimuthAngle,zt=n.maxAzimuthAngle;return isFinite(Et)&&isFinite(zt)&&(Et<-Math.PI?Et+=mt:Et>Math.PI&&(Et-=mt),zt<-Math.PI?zt+=mt:zt>Math.PI&&(zt-=mt),Et<=zt?o.theta=Math.max(Et,Math.min(zt,o.theta)):o.theta=o.theta>(Et+zt)/2?Math.max(Et,o.theta):Math.min(zt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(o),R.applyQuaternion(et),ht.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||W.distanceToSquared(n.object.position)>a||8*(1-ft.dot(n.object.quaternion))>a||gt.distanceToSquared(n.target)>0?(n.dispatchEvent(Lc),W.copy(n.object.position),ft.copy(n.object.quaternion),gt.copy(n.target),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",xt),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",vt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Vt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Pc,l=new Pc;let c=1;const h=new D;let u=!1;const d=new Mt,m=new Mt,_=new Mt,g=new Mt,p=new Mt,f=new Mt,S=new Mt,v=new Mt,M=new Mt,y=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function x(R){l.theta-=R}function w(R){l.phi-=R}const k=function(){const R=new D;return function(et,W){R.setFromMatrixColumn(W,0),R.multiplyScalar(-et),h.add(R)}}(),V=function(){const R=new D;return function(et,W){n.screenSpacePanning===!0?R.setFromMatrixColumn(W,1):(R.setFromMatrixColumn(W,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(et),h.add(R)}}(),U=function(){const R=new D;return function(et,W){const ft=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;R.copy(gt).sub(n.target);let mt=R.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),k(2*et*mt/ft.clientHeight,n.object.matrix),V(2*W*mt/ft.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(et*(n.object.right-n.object.left)/n.object.zoom/ft.clientWidth,n.object.matrix),V(W*(n.object.top-n.object.bottom)/n.object.zoom/ft.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){d.set(R.clientX,R.clientY)}function H(R){S.set(R.clientX,R.clientY)}function Y(R){g.set(R.clientX,R.clientY)}function tt(R){m.set(R.clientX,R.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Z=n.domElement;x(2*Math.PI*_.x/Z.clientHeight),w(2*Math.PI*_.y/Z.clientHeight),d.copy(m),n.update()}function K(R){v.set(R.clientX,R.clientY),M.subVectors(v,S),M.y>0?F(P()):M.y<0&&z(P()),S.copy(v),n.update()}function dt(R){p.set(R.clientX,R.clientY),f.subVectors(p,g).multiplyScalar(n.panSpeed),U(f.x,f.y),g.copy(p),n.update()}function N(R){R.deltaY<0?z(P()):R.deltaY>0&&F(P()),n.update()}function Q(R){let Z=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),Z=!0;break}Z&&(R.preventDefault(),n.update())}function J(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),Z=.5*(y[0].pageY+y[1].pageY);d.set(R,Z)}}function at(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),Z=.5*(y[0].pageY+y[1].pageY);g.set(R,Z)}}function ct(){const R=y[0].pageX-y[1].pageX,Z=y[0].pageY-y[1].pageY,et=Math.sqrt(R*R+Z*Z);S.set(0,et)}function _t(){n.enableZoom&&ct(),n.enablePan&&at()}function Lt(){n.enableZoom&&ct(),n.enableRotate&&J()}function St(R){if(y.length==1)m.set(R.pageX,R.pageY);else{const et=nt(R),W=.5*(R.pageX+et.x),ft=.5*(R.pageY+et.y);m.set(W,ft)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Z=n.domElement;x(2*Math.PI*_.x/Z.clientHeight),w(2*Math.PI*_.y/Z.clientHeight),d.copy(m)}function re(R){if(y.length===1)p.set(R.pageX,R.pageY);else{const Z=nt(R),et=.5*(R.pageX+Z.x),W=.5*(R.pageY+Z.y);p.set(et,W)}f.subVectors(p,g).multiplyScalar(n.panSpeed),U(f.x,f.y),g.copy(p)}function Nt(R){const Z=nt(R),et=R.pageX-Z.x,W=R.pageY-Z.y,ft=Math.sqrt(et*et+W*W);v.set(0,ft),M.set(0,Math.pow(v.y/S.y,n.zoomSpeed)),F(M.y),S.copy(v)}function O(R){n.enableZoom&&Nt(R),n.enablePan&&re(R)}function de(R){n.enableZoom&&Nt(R),n.enableRotate&&St(R)}function xt(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Ct),n.domElement.addEventListener("pointerup",vt)),E(R),R.pointerType==="touch"?fe(R):Wt(R))}function Ct(R){n.enabled!==!1&&(R.pointerType==="touch"?_e(R):Ut(R))}function vt(R){X(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Ct),n.domElement.removeEventListener("pointerup",vt)),n.dispatchEvent(Dc),r=i.NONE}function Wt(R){let Z;switch(R.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Ni.DOLLY:if(n.enableZoom===!1)return;H(R),r=i.DOLLY;break;case Ni.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Y(R),r=i.PAN}else{if(n.enableRotate===!1)return;q(R),r=i.ROTATE}break;case Ni.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;q(R),r=i.ROTATE}else{if(n.enablePan===!1)return;Y(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(za)}function Ut(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;tt(R);break;case i.DOLLY:if(n.enableZoom===!1)return;K(R);break;case i.PAN:if(n.enablePan===!1)return;dt(R);break}}function wt(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(za),N(R),n.dispatchEvent(Dc))}function Vt(R){n.enabled===!1||n.enablePan===!1||Q(R)}function fe(R){switch(it(R),y.length){case 1:switch(n.touches.ONE){case Oi.ROTATE:if(n.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case Oi.PAN:if(n.enablePan===!1)return;at(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Oi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(),r=i.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(za)}function _e(R){switch(it(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;re(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(R),n.update();break;default:r=i.NONE}}function A(R){n.enabled!==!1&&R.preventDefault()}function E(R){y.push(R)}function X(R){delete T[R.pointerId];for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId==R.pointerId){y.splice(Z,1);return}}function it(R){let Z=T[R.pointerId];Z===void 0&&(Z=new Mt,T[R.pointerId]=Z),Z.set(R.pageX,R.pageY)}function nt(R){const Z=R.pointerId===y[0].pointerId?y[1]:y[0];return T[Z.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",xt),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}function Dn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Lh(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ze={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xr={duration:.5,overwrite:!1,delay:0},Io,Me,Zt,sn=1e8,jt=1/sn,oo=Math.PI*2,K_=oo/4,Z_=0,Dh=Math.sqrt,J_=Math.cos,Q_=Math.sin,ye=function(t){return typeof t=="string"},ie=function(t){return typeof t=="function"},zn=function(t){return typeof t=="number"},Fo=function(t){return typeof t>"u"},En=function(t){return typeof t=="object"},ze=function(t){return t!==!1},No=function(){return typeof window<"u"},Ls=function(t){return ie(t)||ye(t)},Uh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},we=Array.isArray,lo=/(?:-?\.?\d|\.)+/gi,Ih=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ba=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fh=/[+-]=-?[.\d]+/,Nh=/[^,'"\[\]\s]+/gi,t0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,gn,co,Oo,Je={},Bs={},Oh,zh=function(t){return(Bs=vr(t,Je))&&He},zo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},qr=function(t,e){return!e&&console.warn(t)},Bh=function(t,e){return t&&(Je[t]=e)&&Bs&&(Bs[t]=e)||Je},Yr=function(){return 0},e0={suppressEvents:!0,isStart:!0,kill:!1},Us={suppressEvents:!0,kill:!1},n0={suppressEvents:!0},Bo={},ti=[],ho={},kh,qe={},ka={},Uc=30,Is=[],ko="",Go=function(t){var e=t[0],n,i;if(En(e)||ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Is.length;i--&&!Is[i].targetTest(e););n=Is[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new hu(t[i],n)))||t.splice(i,1);return t},bi=function(t){return t._gsap||Go(an(t))[0]._gsap},Gh=function(t,e,n){return(n=t[e])&&ie(n)?t[e]():Fo(n)&&t.getAttribute&&t.getAttribute(e)||n},Be=function(t,e){return(t=t.split(",")).forEach(e)||t},ae=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},ur=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},i0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ks=function(){var t=ti.length,e=ti.slice(0),n,i;for(ho={},ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hh=function(t,e,n,i){ti.length&&!Me&&ks(),t.render(e,n,i||Me&&e<0&&(t._initted||t._startAt)),ti.length&&!Me&&ks()},Vh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Nh).length<2?e:ye(t)?t.trim():t},Wh=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},r0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},vr=function(t,e){for(var n in e)t[n]=e[n];return t},Ic=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=En(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Gs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Gr=function(t){var e=t.parent||Jt,n=t.keyframes?r0(we(t.keyframes)):Qe;if(ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},s0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Xh=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ks=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ii=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},wi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},a0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},uo=function(t,e,n,i){return t._startAt&&(Me?t._startAt.revert(Us):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},o0=function s(t){return!t||t._ts&&s(t.parent)},Fc=function(t){return t._repeat?yr(t._tTime,t=t.duration()+t._rDelay)*t:0},yr=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},Hs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zs=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||jt)||0))},Js=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zs(t),n._dirty||wi(n,t)),t},jh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Hs(t.rawTime(),e),(!e._dur||ns(0,e.totalDuration(),n)-e._tTime>jt)&&e.render(n,!0)),wi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-jt}},xn=function(t,e,n,i){return e.parent&&ii(e),e._start=ue((zn(n)?n:n||t!==Jt?en(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Xh(t,e,"_first","_last",t._sort?"_start":0),fo(e)||(t._recent=e),i||jh(t,e),t._ts<0&&Js(t,t._tTime),t},qh=function(t,e){return(Je.ScrollTrigger||zo("scrollTrigger",e))&&Je.ScrollTrigger.create(e,t)},Yh=function(t,e,n,i,r){if(Vo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Me&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&kh!==$e.frame)return ti.push(t),t._lazy=[r,i],1},l0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},fo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},c0=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&l0(t)&&!(!t._initted&&fo(t))||(t._ts<0||t._dp._ts<0)&&!fo(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ns(0,t._tDur,e),h=yr(l,o),t._yoyo&&h&1&&(a=1-a),h!==yr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Me||i||t._zTime===jt||!e&&t._zTime){if(!t._initted&&Yh(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?jt:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&uo(t,e,n,!0),t._onUpdate&&!n&&Ke(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ii(t,1),!n&&!Me&&(Ke(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},h0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Mr=function(t,e,n,i){var r=t._repeat,a=ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ue(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Js(t,t._tTime=t._tDur*o),t.parent&&Zs(t),n||wi(t.parent,t),t},Nc=function(t){return t instanceof Ie?wi(t):Mr(t,t._dur)},u0={_start:0,endTime:Yr,totalDuration:Yr},en=function s(t,e,n){var i=t.labels,r=t._recent||u0,a=t.duration()>=sn?r.endTime(!1):t._dur,o,l,c;return ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(we(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Hr=function(t,e,n){var i=zn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ze(l.vars.inherit)&&l.parent;a.immediateRender=ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new he(e[0],a,e[r+1])},ai=function(t,e){return t||t===0?e(t):e},ns=function(t,e,n){return n<t?t:n>e?e:n},Te=function(t,e){return!ye(t)||!(e=t0.exec(t))?"":e[1]},d0=function(t,e,n){return ai(n,function(i){return ns(t,e,i)})},po=[].slice,$h=function(t,e){return t&&En(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&En(t[0]))&&!t.nodeType&&t!==gn},f0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ye(i)&&!e||$h(i,1)?(r=n).push.apply(r,an(i)):n.push(i)})||n},an=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):ye(t)&&!n&&(co||!Sr())?po.call((e||Oo).querySelectorAll(t),0):we(t)?f0(t,n):$h(t)?po.call(t,0):t?[t]:[]},mo=function(t){return t=an(t)[0]||qr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return an(e,n.querySelectorAll?n:n===t?qr("Invalid scope")||Oo.createElement("div"):t)}},Kh=function(t){return t.sort(function(){return .5-Math.random()})},Zh=function(t){if(ie(t))return t;var e=En(t)?t:{each:t},n=Ai(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return ye(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,m,_){var g=(_||e).length,p=a[g],f,S,v,M,y,T,C,P,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,sn])[1],!x){for(C=-sn;C<(C=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(p=a[g]=[],f=l?Math.min(x,g)*h-.5:i%x,S=x===sn?0:l?g*u/x-.5:i/x|0,C=0,P=sn,T=0;T<g;T++)v=T%x-f,M=S-(T/x|0),p[T]=y=c?Math.abs(c==="y"?M:v):Dh(v*v+M*M),y>C&&(C=y),y<P&&(P=y);i==="random"&&Kh(p),p.max=C-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Te(e.amount||e.each)||0,n=n&&g<0?ou(n):n}return g=(p[d]-p.min)/p.max||0,ue(p.b+(n?n(g):g)*p.v)+p.u}},go=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zn(n)?0:Te(n))}},Jh=function(t,e){var n=we(t),i,r;return!n&&En(t)&&(i=n=t.radius||sn,t.values?(t=an(t.values),(r=!zn(t[0]))&&(i*=i)):t=go(t.increment)),ai(e,n?ie(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=sn,h=0,u=t.length,d,m;u--;)r?(d=t[u].x-o,m=t[u].y-l,d=d*d+m*m):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||zn(a)?h:h+Te(a)}:go(t))},Qh=function(t,e,n,i){return ai(we(t)?!e:n===!0?!!(n=0):!i,function(){return we(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},p0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},m0=function(t,e){return function(n){return t(parseFloat(n))+(e||Te(n))}},g0=function(t,e,n){return eu(t,e,0,1,n)},tu=function(t,e,n){return ai(n,function(i){return t[~~e(i)]})},_0=function s(t,e,n){var i=e-t;return we(t)?tu(t,s(0,t.length),e):ai(n,function(r){return(i+(r-t)%i)%i+t})},x0=function s(t,e,n){var i=e-t,r=i*2;return we(t)?tu(t,s(0,t.length-1),e):ai(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},$r=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?Nh:lo),n+=t.substr(e,i-e)+Qh(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},eu=function(t,e,n,i,r){var a=e-t,o=i-n;return ai(r,function(l){return n+((l-t)/a*o||0)})},v0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ye(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(we(t)&&!we(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=vr(we(t)?[]:{},t));if(!h){for(l in e)Ho.call(o,t,l,"get",e[l]);r=function(_){return jo(_,o)||(a?t.p:t)}}}return ai(n,r)},Oc=function(t,e,n){var i=t.labels,r=sn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Ke=function(t,e,n){var i=t.vars,r=i[e],a=Zt,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ti.length&&ks(),o&&(Zt=o),h=l?r.apply(c,l):r.call(c),Zt=a,h},Nr=function(t){return ii(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Me),t.progress()<1&&Ke(t,"onInterrupt"),t},lr,nu=[],iu=function(t){if(t)if(t=!t.name&&t.default||t,No()||t.headless){var e=t.name,n=ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Yr,render:jo,add:Ho,kill:F0,modifier:I0,rawVars:0},a={targetTest:0,get:0,getSetter:Xo,aliases:{},register:0};if(Sr(),t!==i){if(qe[e])return;Qe(i,Qe(Gs(t,r),a)),vr(i.prototype,vr(r,Gs(t,a))),qe[i.prop=e]=i,t.targetTest&&(Is.push(i),Bo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bh(e,i),t.register&&t.register(He,i,ke)}else nu.push(t)},Xt=255,Or={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},Ga=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Xt+.5|0},ru=function(t,e,n){var i=t?zn(t)?[t>>16,t>>8&Xt,t&Xt]:0:Or.black,r,a,o,l,c,h,u,d,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Or[t])i=Or[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Xt,i&Xt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Xt,t&Xt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(lo),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ga(l+1/3,r,a),i[1]=Ga(l,r,a),i[2]=Ga(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Ih),n&&i.length<4&&(i[3]=1),i}else i=t.match(lo)||Or.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Xt,a=i[1]/Xt,o=i[2]/Xt,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(m=u-d,c=h>.5?m/(2-u-d):m/(u+d),l=u===r?(a-o)/m+(a<o?6:0):u===a?(o-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},su=function(t){var e=[],n=[],i=-1;return t.split(ei).forEach(function(r){var a=r.match(or)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},zc=function(t,e,n){var i="",r=(t+i).match(ei),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=ru(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=su(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ei,"1").split(or),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ei),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},ei=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Or)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),y0=/hsl[a]?\(/,au=function(t){var e=t.join(" "),n;if(ei.lastIndex=0,ei.test(e))return n=y0.test(e),t[1]=zc(t[1],n),t[0]=zc(t[0],n,su(t[1])),!0},Kr,$e=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,m,_=function g(p){var f=s()-i,S=p===!0,v,M,y,T;if((f>t||f<0)&&(n+=f-e),i+=f,y=i-n,v=y-a,(v>0||S)&&(T=++u.frame,d=y-u.time*1e3,u.time=y=y/1e3,a+=v+(v>=r?4:r-v),M=1),S||(l=c(g)),M)for(m=0;m<o.length;m++)o[m](y,d,T,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Oh&&(!co&&No()&&(gn=co=window,Oo=gn.document||{},Je.gsap=He,(gn.gsapVersions||(gn.gsapVersions=[])).push(He.version),zh(Bs||gn.GreenSockGlobals||!gn.gsap&&gn||{}),nu.forEach(iu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Kr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Kr=0,c=Yr},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,f,S){var v=f?function(M,y,T,C){p(M,y,T,C),u.remove(v)}:p;return u.remove(p),o[S?"unshift":"push"](v),Sr(),v},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},u}(),Sr=function(){return!Kr&&$e.wake()},Bt={},M0=/^[\d.\-M][\d.\-,\s]/,S0=/["']/g,E0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(S0,"").trim():+c,i=l.substr(o+1).trim();return e},T0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},b0=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[E0(e[1])]:T0(t).split(",").map(Vh)):Bt._CE&&M0.test(t)?Bt._CE("",t):n},ou=function(t){return function(e){return 1-t(1-e)}},lu=function s(t,e){for(var n=t._first,i;n;)n instanceof Ie?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ai=function(t,e){return t&&(ie(t)?t:Bt[t]||b0(t))||e},Fi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Be(t,function(o){Bt[o]=Je[o]=r,Bt[a=o.toLowerCase()]=n;for(var l in r)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=r[l]}),r},cu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ha=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/oo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Q_((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:cu(o);return r=oo/r,l.config=function(c,h){return s(t,c,h)},l},Va=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:cu(n);return i.config=function(r){return s(t,r)},i};Be("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Fi(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;Fi("Elastic",Ha("in"),Ha("out"),Ha());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Fi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Fi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Fi("Circ",function(s){return-(Dh(1-s*s)-1)});Fi("Sine",function(s){return s===1?1:-J_(s*K_)+1});Fi("Back",Va("in"),Va("out"),Va());Bt.SteppedEase=Bt.steps=Je.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-jt;return function(o){return((i*ns(0,a,o)|0)+r)*n}}};xr.ease=Bt["quad.out"];Be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ko+=s+","+s+"Params,"});var hu=function(t,e){this.id=Z_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Gh,this.set=e?e.getSetter:Xo},Zr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Mr(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Kr||$e.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Sr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Js(this,n),!r._dp||r.parent||jh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?yr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Hs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-jt?0:this._rts,this.totalTime(ns(-Math.abs(this._delay),this._tDur,r),i!==!1),Zs(this),a0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=n0);var i=Me;return Me=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Me=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(en(this,n),ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ze(i)),this._dur||(this._zTime=-jt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-jt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=ie(n)?n:Wh,o=function(){var c=i.then;i.then=null,ie(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Nr(this)},s}();Qe(Zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var Ie=function(s){Lh(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ze(n.sortChildren),Jt&&xn(n.parent||Jt,Dn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&qh(Dn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Hr(0,arguments,this),this},e.from=function(i,r,a){return Hr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Hr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Gr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new he(i,r,en(this,a),1),this},e.call=function(i,r,a){return xn(this,he.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new he(i,a,en(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Gr(a).immediateRender=ze(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Gr(o).immediateRender=ze(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ue(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,g,p,f,S,v,M,y,T,C;if(this!==Jt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,M=this._start,v=this._ts,f=!v,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=ue(h%p),h===l?(g=this._repeat,d=c):(y=ue(h/p),g=~~y,g&&g===y&&(d=c,g--),d>c&&(d=c)),y=yr(this._tTime,p),!o&&this._tTime&&y!==g&&this._tTime-y*p-this._dur<=0&&(y=g),T&&g&1&&(d=c-d,C=1),g!==y&&!this._lock){var P=T&&y&1,x=P===(T&&g&1);if(g<y&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(C?0:ue(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ke(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;lu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=h0(this,ue(o),ue(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!g&&(Ke(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!f){S=0,_&&(h+=this._zTime=-jt);break}}m=_}else{m=this._last;for(var w=i<0?i:d;m;){if(_=m._prev,(m._act||w<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(w-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(w-m._start)*m._ts,r,a||Me&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){S=0,_&&(h+=this._zTime=w?-jt:jt);break}}m=_}}if(S&&!r&&(this.pause(),S.render(d>=o?0:-jt)._zTime=d>=o?1:-1,this._ts))return this._start=M,Zs(this),this.render(i,r,a);this._onUpdate&&!r&&Ke(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ii(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Ke(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(zn(r)||(r=en(this,r,i)),!(i instanceof Zr)){if(we(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ye(i))return this.addLabel(i,r);if(ie(i))i=he.delayedCall(0,i);else return this}return this!==i?xn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof he?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ye(i)?this.removeLabel(i):ie(i)?this.killTweensOf(i):(i.parent===this&&Ks(this,i),i===this._recent&&(this._recent=this._last),wi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue($e.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=en(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=he.delayedCall(0,r||Yr,a);return o.data="isPause",this._hasPause=1,xn(this,o,en(this,i))},e.removePause=function(i){var r=this._first;for(i=en(this,i);r;)r._start===i&&r.data==="isPause"&&ii(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Yn!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=an(i),l=this._first,c=zn(r),h;l;)l instanceof he?i0(l._targets,o)&&(c?(!Yn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=en(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,m,_=he.to(a,Qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||jt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Mr(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Qe({startAt:{time:en(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Oc(this,en(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Oc(this,en(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return wi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wi(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=sn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,xn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Mr(a,a===Jt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Jt._ts&&(Hh(Jt,Hs(i,Jt)),kh=$e.frame),$e.frame>=Uc){Uc+=Ze.autoSleep||120;var r=Jt._first;if((!r||!r._ts)&&Ze.autoSleep&&$e._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$e.sleep()}}},t}(Zr);Qe(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var w0=function(t,e,n,i,r,a,o){var l=new ke(this._pt,t,e,0,1,gu,null,r),c=0,h=0,u,d,m,_,g,p,f,S;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=$r(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),d=n.match(Ba)||[];u=Ba.exec(i);)_=u[0],g=i.substring(c,u.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?ur(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Ba.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Fh.test(i)||f)&&(l.e=0),this._pt=l,l},Ho=function(t,e,n,i,r,a,o,l,c,h){ie(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:ie(u)?c?t[e.indexOf("set")||!ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=ie(u)?c?L0:pu:Wo,_;if(ye(i)&&(~i.indexOf("random(")&&(i=$r(i)),i.charAt(1)==="="&&(_=ur(d,i)+(Te(d)||0),(_||_===0)&&(i=_))),!h||d!==i||_o)return!isNaN(d*i)&&i!==""?(_=new ke(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?U0:mu,0,m),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&zo(e,i),w0.call(this,t,e,d,i,m,l||Ze.stringFilter,c))},A0=function(t,e,n,i,r){if(ie(t)&&(t=Vr(t,r,e,n,i)),!En(t)||t.style&&t.nodeType||we(t)||Uh(t))return ye(t)?Vr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Vr(t[o],r,e,n,i);return a},uu=function(t,e,n,i,r,a){var o,l,c,h;if(qe[t]&&(o=new qe[t]).init(r,o.rawVars?e[t]:A0(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new ke(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==lr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Yn,_o,Vo=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,m=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,f=t.parent,S=f&&f.data==="nested"?f.vars.targets:p,v=t._overwrite==="auto"&&!Io,M=t.timeline,y,T,C,P,x,w,k,V,U,F,z,q,H;if(M&&(!d||!r)&&(r="none"),t._ease=Ai(r,xr.ease),t._yEase=u?ou(Ai(u===!0?r:u,xr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(V=p[0]?bi(p[0]).harness:0,q=V&&i[V.prop],y=Gs(i,Bo),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!m?g.render(-1,!0):g.revert(h&&_?Us:e0),g._lazy=0),a){if(ii(t._startAt=he.set(p,Qe({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&ze(l),startAt:null,delay:0,onUpdate:c&&function(){return Ke(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Me||!o&&!m)&&t._startAt.revert(Us),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),C=Qe({overwrite:!1,data:"isFromStart",lazy:o&&!g&&ze(l),immediateRender:o,stagger:0,parent:f},y),q&&(C[V.prop]=q),ii(t._startAt=he.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Me?t._startAt.revert(Us):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,jt,jt);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&ze(l)||l&&!_,T=0;T<p.length;T++){if(x=p[T],k=x._gsap||Go(p)[T]._gsap,t._ptLookup[T]=F={},ho[k.id]&&ti.length&&ks(),z=S===p?T:S.indexOf(x),V&&(U=new V).init(x,q||y,t,z,S)!==!1&&(t._pt=P=new ke(t._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Y){F[Y]=P}),U.priority&&(w=1)),!V||q)for(C in y)qe[C]&&(U=uu(C,y,t,z,x,S))?U.priority&&(w=1):F[C]=P=Ho.call(t,x,C,"get",y[C],z,S,0,i.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),v&&t._pt&&(Yn=t,Jt.killTweensOf(x,F,t.globalTime(e)),H=!t.parent,Yn=0),t._pt&&l&&(ho[k.id]=1)}w&&_u(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,d&&e<=0&&M.render(sn,!0,!0)},C0=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,m;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(h=d[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return _o=1,t.vars[e]="+=0",Vo(t,o),_o=0,l?qr(e+" not eligible for reset"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=ae(n)+Te(u.e)),u.b&&(u.b=h.s+Te(u.b))},R0=function(t,e){var n=t[0]?bi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=vr({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},P0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(we(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Vr=function(t,e,n,i,r){return ie(t)?t.call(e,n,i,r):ye(t)&&~t.indexOf("random(")?$r(t):t},du=ko+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fu={};Be(du+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return fu[s]=1});var he=function(s){Lh(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Gr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,S=i.parent||Jt,v=(we(n)||Uh(n)?zn(n[0]):"length"in i)?[n]:an(n),M,y,T,C,P,x,w,k;if(o._targets=v.length?Go(v):qr("GSAP target "+n+" not found. https://gsap.com",!Ze.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||d||Ls(c)||Ls(h)){if(i=o.vars,M=o.timeline=new Ie({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=Dn(o),M._start=0,d||Ls(c)||Ls(h)){if(C=v.length,w=d&&Zh(d),En(d))for(P in d)~du.indexOf(P)&&(k||(k={}),k[P]=d[P]);for(y=0;y<C;y++)T=Gs(i,fu),T.stagger=0,f&&(T.yoyoEase=f),k&&vr(T,k),x=v[y],T.duration=+Vr(c,Dn(o),y,x,v),T.delay=(+Vr(h,Dn(o),y,x,v)||0)-o._delay,!d&&C===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),M.to(x,T,w?w(y,x,v):0),M._ease=Bt.none;M.duration()?c=h=0:o.timeline=0}else if(_){Gr(Qe(M.vars.defaults,{ease:"none"})),M._ease=Ai(_.ease||i.ease||"none");var V=0,U,F,z;if(we(_))_.forEach(function(q){return M.to(v,q,">")}),M.duration();else{T={};for(P in _)P==="ease"||P==="easeEach"||P0(P,_[P],T,_.easeEach);for(P in T)for(U=T[P].sort(function(q,H){return q.t-H.t}),V=0,y=0;y<U.length;y++)F=U[y],z={ease:F.e,duration:(F.t-(y?U[y-1].t:0))/100*c},z[P]=F.v,M.to(v,z,V),V+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!Io&&(Yn=Dn(o),Jt.killTweensOf(v),Yn=0),xn(S,Dn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===ue(S._time)&&ze(u)&&o0(Dn(o))&&S.data!=="nested")&&(o._tTime=-jt,o.render(Math.max(0,-h)||0)),p&&qh(Dn(o),p),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-jt&&!h?l:i<jt?0:i,d,m,_,g,p,f,S,v,M;if(!c)c0(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=ue(u%g),u===l?(_=this._repeat,d=c):(p=ue(u/g),_=~~p,_&&_===p?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(M=this._yEase,d=c-d),p=yr(this._tTime,g),d===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(v&&this._yEase&&lu(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ue(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Yh(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!o&&!r&&!_&&(Ke(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&uo(this,i,r,a),Ke(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Ke(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&uo(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ii(this,1),!r&&!(h&&!o)&&(u||o||f)&&(Ke(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){Kr||$e.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vo(this,c),h=this._ease(c/this._dur),C0(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Js(this,0),this.parent||Xh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Nr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Me),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Yn&&Yn.vars.overwrite!==!0)._first||Nr(this),this.parent&&a!==this.timeline.totalDuration()&&Mr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?an(i):o,c=this._ptLookup,h=this._pt,u,d,m,_,g,p,f;if((!r||r==="all")&&s0(o,l))return r==="all"&&(this._pt=0),Nr(this);for(u=this._op=this._op||[],r!=="all"&&(ye(r)&&(g={},Be(r,function(S){return g[S]=1}),r=g),r=R0(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],r==="all"?(u[f]=r,_=d,m={}):(m=u[f]=u[f]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ks(this,p,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&h&&Nr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Hr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Hr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Jt.killTweensOf(i,r,a)},t}(Zr);Qe(he.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Be("staggerTo,staggerFrom,staggerFromTo",function(s){he[s]=function(){var t=new Ie,e=po.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Wo=function(t,e,n){return t[e]=n},pu=function(t,e,n){return t[e](n)},L0=function(t,e,n,i){return t[e](i.fp,n)},D0=function(t,e,n){return t.setAttribute(e,n)},Xo=function(t,e){return ie(t[e])?pu:Fo(t[e])&&t.setAttribute?D0:Wo},mu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},U0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},jo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},I0=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},F0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ks(this,e,"_pt"):e.dep||(n=1),e=i;return!n},N0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_u=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},ke=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||mu,this.d=l||this,this.set=c||Wo,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=N0,this.m=n,this.mt=r,this.tween=i},s}();Be(ko+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Bo[s]=1});Je.TweenMax=Je.TweenLite=he;Je.TimelineLite=Je.TimelineMax=Ie;Jt=new Ie({sortChildren:!1,defaults:xr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ze.stringFilter=au;var Ci=[],Fs={},O0=[],Bc=0,z0=0,Wa=function(t){return(Fs[t]||O0).map(function(e){return e()})},xo=function(){var t=Date.now(),e=[];t-Bc>2&&(Wa("matchMediaInit"),Ci.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=gn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Wa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bc=t,Wa("matchMedia"))},xu=function(){function s(e,n){this.selector=n&&mo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=z0++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){ie(n)&&(r=i,i=n,n=ie);var a=this,o=function(){var c=Zt,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=mo(r)),Zt=a,u=i.apply(a,arguments),ie(u)&&a._r.push(u),Zt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ie?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof he&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ie?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof he)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ci.length;a--;)Ci[a].id===this.id&&Ci.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),B0=function(){function s(e){this.contexts=[],this.scope=e,Zt&&Zt.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){En(n)||(n={matches:n});var a=new xu(0,r||this.scope),o=a.conditions={},l,c,h;Zt&&!a.selector&&(a.selector=Zt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=gn.matchMedia(n[c]),l&&(Ci.indexOf(a)<0&&Ci.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(xo):l.addEventListener("change",xo)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Vs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return iu(i)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ye(t)&&(t=an(t)[0]);var r=bi(t||{}).get,a=n?Wh:Vh;return n==="native"&&(n=""),t&&(e?a((qe[e]&&qe[e].get||r)(t,e,n,i)):function(o,l,c){return a((qe[o]&&qe[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=an(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=qe[e],o=bi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;lr._pt=0,u.init(t,n?h+n:h,lr,0,[t]),u.render(1,u),lr._pt&&jo(1,lr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=He.to(t,Qe((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ai(t.ease,xr.ease)),Ic(xr,t||{})},config:function(t){return Ic(Ze,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!qe[o]&&!Je[o]&&qr(e+" effect requires "+o+" plugin.")}),ka[e]=function(o,l,c){return n(an(o),Qe(l||{},r),c)},a&&(Ie.prototype[e]=function(o,l,c){return this.add(ka[e](o,En(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=Ai(e)},parseEase:function(t,e){return arguments.length?Ai(t,e):Bt},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),i,r;for(n.smoothChildTiming=ze(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof he&&i.vars.onComplete===i._targets[0]))&&xn(n,i,i._start-i._delay),i=r;return xn(Jt,n,0),n},context:function(t,e){return t?new xu(t,e):Zt},matchMedia:function(t){return new B0(t)},matchMediaRefresh:function(){return Ci.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||xo()},addEventListener:function(t,e){var n=Fs[t]||(Fs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Fs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:_0,wrapYoyo:x0,distribute:Zh,random:Qh,snap:Jh,normalize:g0,getUnit:Te,clamp:d0,splitColor:ru,toArray:an,selector:mo,mapRange:eu,pipe:p0,unitize:m0,interpolate:v0,shuffle:Kh},install:zh,effects:ka,ticker:$e,updateRoot:Ie.updateRoot,plugins:qe,globalTimeline:Jt,core:{PropTween:ke,globals:Bh,Tween:he,Timeline:Ie,Animation:Zr,getCache:bi,_removeLinkedListItem:Ks,reverting:function(){return Me},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return Io=t}}};Be("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Vs[s]=he[s]});$e.add(Ie.updateRoot);lr=Vs.to({},{duration:0});var k0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},G0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=k0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Xa=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ye(r)&&(l={},Be(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}G0(o,r)}}}},He=Vs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Me?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xa("roundProps",go),Xa("modifiers"),Xa("snap",Jh))||Vs;he.version=Ie.version=He.version="3.12.7";Oh=1;No()&&Sr();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kc,$n,dr,qo,yi,Gc,Yo,H0=function(){return typeof window<"u"},Bn={},xi=180/Math.PI,fr=Math.PI/180,rr=Math.atan2,Hc=1e8,$o=/([A-Z])/g,V0=/(left|right|width|margin|padding|x)/i,W0=/[\s,\(]\S/,yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},X0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},j0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},q0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Y0=function(t,e,n){return t.style[e]=n},$0=function(t,e,n){return t.style.setProperty(e,n)},K0=function(t,e,n){return t._gsap[e]=n},Z0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},J0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Q0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Qt="transform",Ge=Qt+"Origin",tx=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Bn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Un(i,o)}):this.tfm[t]=a.x?a[t]:Un(i,t),t===Ge&&(this.tfm.zOrigin=a.zOrigin);else return yn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Qt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ge,e,"")),t=Qt}(r||e)&&this.props.push(t,e,r[t])},Mu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ex=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace($o,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Yo(),(!r||!r.isStart)&&!n[Qt]&&(Mu(n),i.zOrigin&&n[Ge]&&(n[Ge]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Su=function(t,e){var n={target:t,props:[],revert:ex,save:tx};return t._gsap||He.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Eu,yo=function(t,e){var n=$n.createElementNS?$n.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$n.createElement(t);return n&&n.style?n:$n.createElement(t)},Mn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace($o,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Er(e)||e,1)||""},Vc="O,Moz,ms,Ms,Webkit".split(","),Er=function(t,e,n){var i=e||yi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Vc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Vc[a]:"")+t},Mo=function(){H0()&&window.document&&(kc=window,$n=kc.document,dr=$n.documentElement,yi=yo("div")||{style:{}},yo("div"),Qt=Er(Qt),Ge=Qt+"Origin",yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eu=!!Er("perspective"),Yo=He.core.reverting,qo=1)},Wc=function(t){var e=t.ownerSVGElement,n=yo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),dr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),dr.removeChild(n),r},Xc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tu=function(t){var e,n;try{e=t.getBBox()}catch{e=Wc(t),n=1}return e&&(e.width||e.height)||n||(e=Wc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Xc(t,["x","cx","x1"])||0,y:+Xc(t,["y","cy","y1"])||0,width:0,height:0}:e},bu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tu(t))},Ui=function(t,e){if(e){var n=t.style,i;e in Bn&&e!==Ge&&(e=Qt),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace($o,"-$1").toLowerCase())):n.removeAttribute(e)}},Kn=function(t,e,n,i,r,a){var o=new ke(t._pt,e,n,0,1,a?yu:vu);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},jc={deg:1,rad:1,turn:1},nx={grid:1,flex:1},ri=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=yi.style,l=V0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",m=i==="%",_,g,p,f;if(i===a||!r||jc[i]||jc[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),f=t.getCTM&&bu(t),(m||a==="%")&&(Bn[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],ae(m?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===$n||!g.appendChild)&&(g=$n.body),p=g._gsap,p&&m&&p.width&&l&&p.time===$e.time&&!p.uncache)return ae(r/p.width*u);if(m&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:Ui(t,e)}else(m||a==="%")&&!nx[Mn(g,"display")]&&(o.position=Mn(t,"position")),g===t&&(o.position="static"),g.appendChild(yi),_=yi[h],g.removeChild(yi),o.position="absolute";return l&&m&&(p=bi(g),p.time=$e.time,p.width=g[h]),ae(d?_*r/u:_&&r?u/_*r:0)},Un=function(t,e,n,i){var r;return qo||Mo(),e in yn&&e!=="transform"&&(e=yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(r=Qr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Xs(Mn(t,Ge))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ws[e]&&Ws[e](t,e,n)||Mn(t,e)||Gh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ri(t,e,r,n)+n:r},ix=function(t,e,n,i){if(!n||n==="none"){var r=Er(e,t,1),a=r&&Mn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Mn(t,"borderTopColor"))}var o=new ke(this._pt,t.style,e,0,1,gu),l=0,c=0,h,u,d,m,_,g,p,f,S,v,M,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Mn(t,e)||i,g?t.style[e]=g:Ui(t,e)),h=[n,i],au(h),n=h[0],i=h[1],d=n.match(or)||[],y=i.match(or)||[],y.length){for(;u=or.exec(i);)p=u[0],S=i.substring(l,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(m=parseFloat(g)||0,M=g.substr((m+"").length),p.charAt(1)==="="&&(p=ur(m,p)+M),f=parseFloat(p),v=p.substr((f+"").length),l=or.lastIndex-v.length,v||(v=v||Ze.units[e]||M,l===i.length&&(i+=v,o.e+=v)),M!==v&&(m=ri(t,e,g,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:m,c:f-m,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?yu:vu;return Fh.test(i)&&(o.e=0),this._pt=o,o},qc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qc[n]||n,e[1]=qc[i]||i,e.join(" ")},sx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Bn[o]&&(l=1,o=o==="transformOrigin"?Ge:Qt),Ui(n,o);l&&(Ui(n,Qt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Qr(n,1),a.uncache=1,Mu(i)))}},Ws={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new ke(t._pt,e,n,0,0,sx);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Jr=[1,0,0,1,0,0],wu={},Au=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yc=function(t){var e=Mn(t,Qt);return Au(e)?Jr:e.substr(7).match(Ih).map(ae)},Ko=function(t,e){var n=t._gsap||bi(t),i=t.style,r=Yc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Jr:r):(r===Jr&&!t.offsetParent&&t!==dr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,dr.appendChild(t)),r=Yc(t),l?i.display=l:Ui(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):dr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},So=function(t,e,n,i,r,a){var o=t._gsap,l=r||Ko(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,m=l[0],_=l[1],g=l[2],p=l[3],f=l[4],S=l[5],v=e.split(" "),M=parseFloat(v[0])||0,y=parseFloat(v[1])||0,T,C,P,x;n?l!==Jr&&(C=m*p-_*g)&&(P=M*(p/C)+y*(-g/C)+(g*S-p*f)/C,x=M*(-_/C)+y*(m/C)-(m*S-_*f)/C,M=P,y=x):(T=Tu(t),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),y=T.y+(~(v[1]||v[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&o.smooth?(f=M-c,S=y-h,o.xOffset=u+(f*m+S*g)-f,o.yOffset=d+(f*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ge]="0px 0px",a&&(Kn(a,o,"xOrigin",c,M),Kn(a,o,"yOrigin",h,y),Kn(a,o,"xOffset",u,o.xOffset),Kn(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},Qr=function(t,e){var n=t._gsap||new hu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Mn(t,Ge)||"0",h,u,d,m,_,g,p,f,S,v,M,y,T,C,P,x,w,k,V,U,F,z,q,H,Y,tt,K,dt,N,Q,J,at;return h=u=d=g=p=f=S=v=M=0,m=_=1,n.svg=!!(t.getCTM&&bu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qt]!=="none"?l[Qt]:"")),i.scale=i.rotate=i.translate="none"),C=Ko(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),So(t,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,T=n.yOrigin||0,C!==Jr&&(k=C[0],V=C[1],U=C[2],F=C[3],h=z=C[4],u=q=C[5],C.length===6?(m=Math.sqrt(k*k+V*V),_=Math.sqrt(F*F+U*U),g=k||V?rr(V,k)*xi:0,S=U||F?rr(U,F)*xi+g:0,S&&(_*=Math.abs(Math.cos(S*fr))),n.svg&&(h-=y-(y*k+T*U),u-=T-(y*V+T*F))):(at=C[6],Q=C[7],K=C[8],dt=C[9],N=C[10],J=C[11],h=C[12],u=C[13],d=C[14],P=rr(at,N),p=P*xi,P&&(x=Math.cos(-P),w=Math.sin(-P),H=z*x+K*w,Y=q*x+dt*w,tt=at*x+N*w,K=z*-w+K*x,dt=q*-w+dt*x,N=at*-w+N*x,J=Q*-w+J*x,z=H,q=Y,at=tt),P=rr(-U,N),f=P*xi,P&&(x=Math.cos(-P),w=Math.sin(-P),H=k*x-K*w,Y=V*x-dt*w,tt=U*x-N*w,J=F*w+J*x,k=H,V=Y,U=tt),P=rr(V,k),g=P*xi,P&&(x=Math.cos(P),w=Math.sin(P),H=k*x+V*w,Y=z*x+q*w,V=V*x-k*w,q=q*x-z*w,k=H,z=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,f=180-f),m=ae(Math.sqrt(k*k+V*V+U*U)),_=ae(Math.sqrt(q*q+at*at)),P=rr(z,q),S=Math.abs(P)>2e-4?P*xi:0,M=J?1/(J<0?-J:J):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Au(Mn(t,Qt)),H&&t.setAttribute("transform",H))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=ae(m),n.scaleY=ae(_),n.rotation=ae(g)+o,n.rotationX=ae(p)+o,n.rotationY=ae(f)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ge]=Xs(c)),n.xOffset=n.yOffset=0,n.force3D=Ze.force3D,n.renderTransform=n.svg?ox:Eu?Cu:ax,n.uncache=0,n},Xs=function(t){return(t=t.split(" "))[0]+" "+t[1]},ja=function(t,e,n){var i=Te(e);return ae(parseFloat(e)+parseFloat(ri(t,"x",n+"px",i)))+i},ax=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cu(t,e)},pi="0deg",Ir="0px",mi=") ",Cu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,f=n.force3D,S=n.target,v=n.zOrigin,M="",y=f==="auto"&&t&&t!==1||f===!0;if(v&&(u!==pi||h!==pi)){var T=parseFloat(h)*fr,C=Math.sin(T),P=Math.cos(T),x;T=parseFloat(u)*fr,x=Math.cos(T),a=ja(S,a,C*x*-v),o=ja(S,o,-Math.sin(T)*-v),l=ja(S,l,P*x*-v+v)}p!==Ir&&(M+="perspective("+p+mi),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||a!==Ir||o!==Ir||l!==Ir)&&(M+=l!==Ir||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+mi),c!==pi&&(M+="rotate("+c+mi),h!==pi&&(M+="rotateY("+h+mi),u!==pi&&(M+="rotateX("+u+mi),(d!==pi||m!==pi)&&(M+="skew("+d+", "+m+mi),(_!==1||g!==1)&&(M+="scale("+_+", "+g+mi),S.style[Qt]=M||"translate(0, 0)"},ox=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,f=n.yOffset,S=n.forceCSS,v=parseFloat(a),M=parseFloat(o),y,T,C,P,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=fr,c*=fr,y=Math.cos(l)*u,T=Math.sin(l)*u,C=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=fr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),C*=x,P*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),y*=x,T*=x)),y=ae(y),T=ae(T),C=ae(C),P=ae(P)):(y=u,P=d,T=C=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=ri(m,"x",a,"px"),M=ri(m,"y",o,"px")),(_||g||p||f)&&(v=ae(v+_-(_*y+g*C)+p),M=ae(M+g-(_*T+g*P)+f)),(i||r)&&(x=m.getBBox(),v=ae(v+i/100*x.width),M=ae(M+r/100*x.height)),x="matrix("+y+","+T+","+C+","+P+","+v+","+M+")",m.setAttribute("transform",x),S&&(m.style[Qt]=x)},lx=function(t,e,n,i,r){var a=360,o=ye(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?xi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Hc)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Hc)%a-~~(c/a)*a)),t._pt=d=new ke(t._pt,e,n,i,c,X0),d.e=h,d.u="deg",t._props.push(n),d},$c=function(t,e){for(var n in e)t[n]=e[n];return t},cx=function(t,e,n){var i=$c({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Qt]=e,o=Qr(n,1),Ui(n,Qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qt],a[Qt]=e,o=Qr(n,1),a[Qt]=c);for(l in Bn)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(m=Te(c),_=Te(h),u=m!==_?ri(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new ke(t._pt,o,l,u,d-u,vo),t._pt.u=_||0,t._props.push(l));$c(o,i)};Be("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Ws[t>1?"border"+s:s]=function(o,l,c,h,u){var d,m;if(arguments.length<4)return d=a.map(function(_){return Un(o,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},a.forEach(function(_,g){return m[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,m,u)}});var Ru={name:"css",register:Mo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,m,_,g,p,f,S,v,M,y,T,C,P;qo||Mo(),this.styles=this.styles||Su(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(qe[g]&&uu(g,e,n,i,t,r)))){if(m=typeof h,_=Ws[g],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=$r(h)),_)_(this,t,g,h,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ei.lastIndex=0,ei.test(c)||(p=Te(c),f=Te(h)),f?p!==f&&(c=ri(t,g,c,f)+f):p&&(h+=p),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],ye(c)&&~c.indexOf("random(")&&(c=$r(c)),Te(c+"")||c==="auto"||(c+=Ze.units[g]||Te(Un(t,g))||""),(c+"").charAt(1)==="="&&(c=Un(t,g))):c=Un(t,g),d=parseFloat(c),S=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in yn&&(g==="autoAlpha"&&(d===1&&Un(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,o.visibility),Kn(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=yn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Bn,v){if(this.styles.save(g),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||Qr(t,e.parseTransform),T=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new ke(this._pt,o,Qt,0,1,y.renderTransform,y,0,-1),M.dep=1),g==="scale")this._pt=new ke(this._pt,y,"scaleY",y.scaleY,(S?ur(y.scaleY,S+u):u)-y.scaleY||0,vo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Ge,0,o[Ge]),h=rx(h),y.svg?So(t,h,0,T,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==y.zOrigin&&Kn(this,y,"zOrigin",y.zOrigin,f),Kn(this,o,g,Xs(c),Xs(h)));continue}else if(g==="svgOrigin"){So(t,h,1,T,0,this);continue}else if(g in wu){lx(this,y,g,d,S?ur(d,S+h):h);continue}else if(g==="smoothOrigin"){Kn(this,y,"smooth",y.smooth,h);continue}else if(g==="force3D"){y[g]=h;continue}else if(g==="transform"){cx(this,h,t);continue}}else g in o||(g=Er(g)||g);if(v||(u||u===0)&&(d||d===0)&&!W0.test(h)&&g in o)p=(c+"").substr((d+"").length),u||(u=0),f=Te(h)||(g in Ze.units?Ze.units[g]:p),p!==f&&(d=ri(t,g,c,f)),this._pt=new ke(this._pt,v?y:o,g,d,(S?ur(d,S+u):u)-d,!v&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?q0:vo),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=j0);else if(g in o)ix.call(this,t,g,c,S?S+h:h);else if(g in t)this.add(t,g,c||t[g],S?S+h:h,i,r);else if(g!=="parseTransform"){zo(g,h);continue}v||(g in o?P.push(g,0,o[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),a.push(g)}}C&&_u(this)},render:function(t,e){if(e.tween._time||!Yo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Un,aliases:yn,getSetter:function(t,e,n){var i=yn[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==Ge&&(t._gsap.x||Un(t,"x"))?n&&Gc===n?e==="scale"?Z0:K0:(Gc=n||{})&&(e==="scale"?J0:Q0):t.style&&!Fo(t.style[e])?Y0:~e.indexOf("-")?$0:Xo(t,e)},core:{_removeProperty:Ui,_getMatrix:Ko}};He.utils.checkPrefix=Er;He.core.getStyleSaver=Su;(function(s,t,e,n){var i=Be(s+","+t+","+e,function(r){Bn[r]=1});Be(t,function(r){Ze.units[r]="deg",wu[r]=1}),yn[i[13]]=s+","+t,Be(n,function(r){var a=r.split(":");yn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ze.units[s]="px"});He.registerPlugin(Ru);var zr=He.registerPlugin(Ru)||He;zr.core.Tween;function Br(s,t,e){const n=(90-s)*(Math.PI/180),i=(t+180)*(Math.PI/180),r=-e*Math.sin(n)*Math.cos(i),a=e*Math.cos(n),o=e*Math.sin(n)*Math.sin(i);return{x:r,y:a,z:o}}function hx(s){let t,e;switch(s.type){case"capital":t=16777215,e=.12;break;case"city":t=9031664,e=.08;break;case"event":t=16734003,e=.1;break;default:t=16776960,e=.07}const n=new Le(e,16,16),i=new Li({color:t,transparent:!0,opacity:.8}),r=new vn;r.userData={point:s};const a=new $t(n,i);if(a.userData={point:s},r.add(a),s.type==="capital"||s.type==="event"){const o=new Le(e*1.5,16,16),l=new Li({color:t,transparent:!0,opacity:.3}),c=new $t(o,l);c.userData={point:s},r.add(c)}return r}function ux(){const s=document.createElement("div");return s.className="marker-tooltip",s.style.opacity=0,s}class dx{constructor(){this.textureLoader=new zs,this.cache=new Map,this.baseUrls=["./assets/textures/","/assets/textures/","../assets/textures/","assets/textures/","/","./"],this.cdnTextures={"2_no_clouds_4k.jpg":["https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg","https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg"],"earth_daymap.jpg":["https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/earth.jpg"],"elev_bump_4k.jpg":["https://raw.githubusercontent.com/turban/webgl-earth/master/images/elev_bump_4k.jpg","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/bump.jpg"],"earth_bumpmap.jpg":["https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.jpg","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/bump.jpg"],"water_4k.png":["https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png"],"fair_clouds_4k.png":["https://raw.githubusercontent.com/turban/webgl-earth/master/images/fair_clouds_4k.png","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png"],"earth_clouds.png":["https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004770/clouds_8192.png","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png"],"earth_nightlights_8k.jpg":["https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg"],"earth-night.jpg":["https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg"],"night_lights.jpg":["https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg","https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg"],"8k_stars_milky_way.jpg":["https://raw.githubusercontent.com/shaders/webgl-globe/master/textures/starfield.png","https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/star.jpg"],"8k_sun.jpg":["https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/sun.jpg"],"8k_moon.jpg":["https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/moon.jpg"],"earth_specularmap.tif":["https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/earth_ocean_3600x1800.jpg","https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png"],"earth_specularmap.jpg":["https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/earth_ocean_3600x1800.jpg","https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png"]},this.formatFallbacks={tif:["jpg","png"],tiff:["jpg","png"]},this.cdnTextures["weather-sunny.png"]=["https://cdn-icons-png.flaticon.com/512/6974/6974833.png"],this.cdnTextures["weather-cloudy.png"]=["https://cdn-icons-png.flaticon.com/512/6974/6974847.png"],this.cdnTextures["weather-rainy.png"]=["https://cdn-icons-png.flaticon.com/512/6974/6974848.png"],this.cdnTextures["weather-snowy.png"]=["https://cdn-icons-png.flaticon.com/512/6974/6974851.png"],this.cdnTextures["weather-thunder.png"]=["https://cdn-icons-png.flaticon.com/512/6974/6974857.png"],this.maxLoadAttempts=3,this.preferProceduralFallbacks=!1}async loadTexture(t,e=!0){if(this.cache.has(t))return this.cache.get(t);console.log(`Tentative de chargement de la texture: ${t} (priorité ${e?"locale":"CDN"})`);let n=[];for(const i of this.baseUrls)try{const r=`${i}${t}`;console.log(`Essai de chargement direct: ${r}`);const a=await this._loadTexturePromise(r).catch(o=>{throw n.push(`${r}: ${o.message}`),o});return console.log(`✅ Texture chargée avec succès depuis: ${r}`),this.cache.set(t,a),a}catch{}if(console.warn(`❌ Echec de chargement depuis les chemins locaux pour: ${t}`),console.debug("Erreurs:",n),this.preferProceduralFallbacks){const i=this.createFallbackTexture(t);if(["water_4k.png","weather-"].some(a=>t.includes(a)))return console.log(`Utilisation directe d'une texture procédurale pour ${t}`),this.cache.set(t,i),this._tryLoadTextureInBackground(t,e),i}if(t==="earth_nightlights_8k.jpg")try{const i=["earth_nightlights_8k.jpg","earth-night.jpg","night_lights.jpg"];for(const r of i)if(this.cdnTextures[r])try{console.log(`Essai de chargement de texture nuit depuis: ${r}`);const a=await this._loadTextureFromAnySource(r,!0);return this.cache.set(t,a),console.log(`Texture de nuit chargée depuis: ${r}`),a}catch(a){console.warn(`Échec du chargement de la texture nuit depuis: ${r}`,a)}throw new Error("Impossible de charger une texture de nuit")}catch{console.warn("Tous les essais pour les textures de nuit ont échoué. Créant une texture procédurale.");const r=this.createFallbackTexture(t);return this.cache.set(t,r),r}try{const i=await this._loadTextureFromAnySource(t,e);return this.cache.set(t,i),i}catch(i){const r=t.split(".").pop().toLowerCase();if(this.formatFallbacks[r]){const o=t.substring(0,t.lastIndexOf("."));for(const l of this.formatFallbacks[r]){const c=`${o}.${l}`;console.log(`Tentative avec format alternatif: ${c}`);try{const h=await this._loadTextureFromAnySource(c,e);return this.cache.set(t,h),h}catch(h){console.warn(`Format alternatif ${c} également échoué:`,h)}}}console.warn(`Échec du chargement de la texture ${t}. Création d'une texture procédurale.`,i);const a=this.createFallbackTexture(t);return this.cache.set(t,a),a}}async _loadTextureFromAnySource(t,e){const n=[];if(e)for(const i of this.baseUrls)try{const r=`${i}${t}`;console.log(`Essai de chargement local prioritaire: ${r}`);const a=await this._loadTexturePromise(r);return console.log(`Texture chargée localement depuis: ${r}`),a}catch(r){n.push(`Échec du chargement local depuis ${i}${t}: ${r.message}`)}if(this.cdnTextures[t]){const i=Array.isArray(this.cdnTextures[t])?this.cdnTextures[t]:[this.cdnTextures[t]];for(const r of i)try{console.log(`Essai de chargement depuis CDN: ${r}`);const a=await this._loadTexturePromise(r);return console.log(`Texture chargée depuis CDN: ${r}`),a}catch(a){n.push(`Échec du chargement depuis CDN (${r}): ${a.message}`)}}if(!e)for(const i of this.baseUrls)try{const r=`${i}${t}`;console.log(`Essai de chargement local: ${r}`);const a=await this._loadTexturePromise(r);return console.log(`Texture chargée depuis: ${r}`),a}catch(r){n.push(`Échec du chargement depuis ${i}${t}: ${r.message}`)}throw new Error(`Impossible de charger la texture ${t} depuis aucune source: ${n.join("; ")}`)}_tryLoadTextureInBackground(t,e){this._loadTextureFromAnySource(t,e).then(n=>{this.cache.set(t,n),console.log(`Texture ${t} chargée en arrière-plan avec succès`)}).catch(n=>{console.warn(`Échec du chargement en arrière-plan de ${t}`,n)})}_loadTexturePromise(t){return new Promise((e,n)=>{try{const i=new zs;console.log(`Tentative de chargement de la texture: ${t}`),t.toLowerCase().endsWith(".tif")&&console.warn(`Attention: La tentative de charger un fichier TIF (${t}) peut échouer dans certains navigateurs.`),i.load(t,r=>{console.log(`✅ Texture chargée avec succès: ${t}`),r.url=t,e(r)},r=>{r.loaded/r.total<1&&console.log(`Progression: ${t} - ${Math.round(r.loaded/r.total*100)}%`)},r=>{console.warn(`❌ Erreur lors du chargement de la texture ${t}:`,r),n(new Error(`Échec du chargement de la texture: ${r.message||"Erreur inconnue"}`))})}catch(i){console.error(`🔥 Exception lors de l'initialisation du chargement de texture ${t}:`,i),n(i)}})}createFallbackTexture(t){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");if(t.includes("earth")||t.includes("no_clouds"))n.fillStyle="#1A4077",n.fillRect(0,0,e.width,e.height),n.fillStyle="#2D6822",[{x:256,y:150,width:180,height:100},{x:280,y:260,width:100,height:120},{x:450,y:170,width:120,height:100},{x:50,y:190,width:200,height:100},{x:100,y:320,width:80,height:60}].forEach(a=>{n.beginPath(),n.ellipse(a.x,a.y,a.width/2,a.height/2,0,0,Math.PI*2),n.fill()});else if(t.includes("nightlights")){n.fillStyle="#000000",n.fillRect(0,0,e.width,e.height);const r=[{x:256,y:150,width:180,height:100,density:40},{x:280,y:260,width:100,height:120,density:30},{x:450,y:170,width:120,height:100,density:50},{x:50,y:190,width:200,height:100,density:60},{x:100,y:320,width:80,height:60,density:20}],a=(o,l,c)=>{const h=(o-c.x)/(c.width/2),u=(l-c.y)/(c.height/2);return h*h+u*u<=1};n.fillStyle="#FFFF88",r.forEach(o=>{const l=o.density*5;for(let c=0;c<l;c++){const u=o.x+(Math.random()-.5)*o.width*.8,d=o.y+(Math.random()-.5)*o.height*.8;if(a(u,d,o)){const m=Math.random()*1.5+.5,_=Math.random()*.7+.3;n.globalAlpha=_,n.beginPath(),n.arc(u,d,m,0,Math.PI*2),n.fill()}}}),n.globalAlpha=1}else if(t.includes("bump")||t.includes("elev")){n.fillStyle="#777777",n.fillRect(0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<e.width;o++)for(let l=0;l<e.height;l++){const c=(l*e.width+o)*4,u=127+(Math.sin(o*.01)*Math.cos(l*.01)*20+Math.sin(o*.02+l*.01)*15+Math.cos(o*.01+l*.02)*10);a[c]=a[c+1]=a[c+2]=u,a[c+3]=255}n.putImageData(r,0,0)}else if(t.includes("clouds")){n.fillStyle="rgba(255, 255, 255, 0)",n.fillRect(0,0,e.width,e.height);for(let r=0;r<20;r++){const a=Math.random()*e.width,o=Math.random()*e.height,l=Math.random()*60+20,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,"rgba(255, 255, 255, 0.7)"),c.addColorStop(.5,"rgba(255, 255, 255, 0.3)"),c.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,Math.PI*2),n.fill()}}else if(t.includes("stars")||t.includes("milky_way")){n.fillStyle="#000010",n.fillRect(0,0,e.width,e.height);for(let a=0;a<1500;a++){const o=Math.random()*e.width,l=Math.random()*e.height,c=Math.random()*1.5+.5,h=Math.random()*.5+.5,u=[`rgba(255, 255, 255, ${h})`,`rgba(255, 240, 220, ${h})`,`rgba(220, 240, 255, ${h})`,`rgba(255, 220, 220, ${h})`];if(n.fillStyle=u[Math.floor(Math.random()*u.length)],n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill(),Math.random()>.8){const d=n.createRadialGradient(o,l,0,o,l,c*4);d.addColorStop(0,`rgba(255, 255, 255, ${h*.5})`),d.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=d,n.beginPath(),n.arc(o,l,c*4,0,Math.PI*2),n.fill()}}const r=n.createLinearGradient(0,0,e.width,e.height);r.addColorStop(0,"rgba(75, 50, 120, 0)"),r.addColorStop(.5,"rgba(75, 50, 120, 0.1)"),r.addColorStop(1,"rgba(75, 50, 120, 0)"),n.fillStyle=r,n.fillRect(0,0,e.width,e.height)}else if(t.includes("sun")){const r=n.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);r.addColorStop(0,"#FFFFCC"),r.addColorStop(.2,"#FFFF88"),r.addColorStop(.4,"#FFDD44"),r.addColorStop(.7,"#FF8800"),r.addColorStop(1,"#FF4400"),n.fillStyle=r,n.fillRect(0,0,e.width,e.height);for(let a=0;a<15;a++){const o=Math.random()*Math.PI*2,l=Math.random()*e.width*.4,c=e.width/2+Math.cos(o)*l,h=e.height/2+Math.sin(o)*l,u=n.createRadialGradient(c,h,0,c,h,20+Math.random()*30);u.addColorStop(0,"rgba(255, 200, 50, 0.7)"),u.addColorStop(1,"rgba(255, 100, 0, 0)"),n.fillStyle=u,n.beginPath(),n.arc(c,h,50,0,Math.PI*2),n.fill()}}else if(t.includes("moon")){n.fillStyle="#CCCCCC",n.fillRect(0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<e.width;o++)for(let l=0;l<e.height;l++){const c=(l*e.width+o)*4,u=204+(Math.sin(o*.05)*Math.cos(l*.05)*10+Math.sin(o*.1+l*.05)*5+Math.cos(o*.05+l*.1)*8);a[c]=a[c+1]=a[c+2]=u,a[c+3]=255}n.putImageData(r,0,0);for(let o=0;o<40;o++){const l=Math.random()*e.width,c=Math.random()*e.height,h=Math.random()*30+5;n.fillStyle="#DDDDDD",n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill(),n.fillStyle="#999999",n.beginPath(),n.arc(l,c,h*.8,0,Math.PI*2),n.fill()}}else if(t.includes("weather"))if(n.fillStyle="#FFFFFF",n.fillRect(0,0,e.width,e.height),n.clearRect(0,0,e.width,e.height),t.includes("sunny")){n.fillStyle="#FFDD00",n.beginPath(),n.arc(e.width/2,e.height/2,80,0,Math.PI*2),n.fill(),n.strokeStyle="#FFDD00",n.lineWidth=8;for(let r=0;r<12;r++){const a=r/12*Math.PI*2,o=90,l=120;n.beginPath(),n.moveTo(e.width/2+Math.cos(a)*o,e.height/2+Math.sin(a)*o),n.lineTo(e.width/2+Math.cos(a)*l,e.height/2+Math.sin(a)*l),n.stroke()}}else if(t.includes("cloudy")){const r=(a,o,l=1)=>{n.fillStyle="#DDDDDD",n.beginPath(),n.arc(a-25*l,o,35*l,Math.PI*.5,Math.PI*1.5),n.arc(a+25*l,o-15*l,40*l,Math.PI*1,Math.PI*2),n.arc(a+75*l,o,35*l,Math.PI*.5,Math.PI*1.5,!0),n.arc(a+25*l,o+15*l,40*l,0,Math.PI*1),n.fill()};r(e.width/2-20,e.height/2-20,1.5),r(e.width/2+50,e.height/2+30,1.2)}else if(t.includes("rainy")){n.fillStyle="#AAAAAA",n.beginPath(),n.ellipse(e.width/2,e.height/2-50,100,60,0,0,Math.PI*2),n.fill(),n.strokeStyle="#4444FF",n.lineWidth=5;for(let r=0;r<10;r++){const a=e.width/2-80+r*20,o=e.height/2;n.beginPath(),n.moveTo(a,o),n.lineTo(a-10,o+60),n.stroke()}}else if(t.includes("snowy")){n.fillStyle="#AAAAAA",n.beginPath(),n.ellipse(e.width/2,e.height/2-50,100,60,0,0,Math.PI*2),n.fill(),n.fillStyle="#FFFFFF";for(let r=0;r<20;r++){const a=e.width/2-100+r*15,o=e.height/2+20+r%3*25;n.beginPath(),n.arc(a,o,6,0,Math.PI*2),n.fill(),n.strokeStyle="#FFFFFF",n.lineWidth=2;for(let l=0;l<6;l++){const c=l/6*Math.PI*2;n.beginPath(),n.moveTo(a,o),n.lineTo(a+Math.cos(c)*10,o+Math.sin(c)*10),n.stroke()}}}else t.includes("thunder")&&(n.fillStyle="#555555",n.beginPath(),n.ellipse(e.width/2,e.height/2-50,120,70,0,0,Math.PI*2),n.fill(),n.fillStyle="#FFFF00",n.beginPath(),n.moveTo(e.width/2-20,e.height/2-20),n.lineTo(e.width/2+30,e.height/2+30),n.lineTo(e.width/2,e.height/2+40),n.lineTo(e.width/2+50,e.height/2+100),n.lineTo(e.width/2-30,e.height/2+60),n.lineTo(e.width/2,e.height/2+50),n.lineTo(e.width/2-40,e.height/2),n.closePath(),n.fill());else if(t.includes("specular")){n.fillStyle="#000000",n.fillRect(0,0,e.width,e.height);const r=this._generateOceanMask(e.width,e.height),a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let l=0;l<o.length;l+=4){const c=l/4,h=c%e.width,u=Math.floor(c/e.width);r[u]&&r[u][h]&&(o[l]=o[l+1]=o[l+2]=80)}n.putImageData(a,0,0)}else if(t.includes("night")||t.includes("nightlights")){n.fillStyle="#000000",n.fillRect(0,0,e.width,e.height);const r=[{x:170,y:140,size:15,brightness:.9},{x:150,y:160,size:13,brightness:.8},{x:120,y:150,size:14,brightness:.85},{x:140,y:120,size:12,brightness:.7},{x:280,y:130,size:14,brightness:.85},{x:290,y:140,size:13,brightness:.8},{x:300,y:150,size:12,brightness:.75},{x:310,y:135,size:13,brightness:.8},{x:350,y:180,size:16,brightness:.9},{x:400,y:160,size:15,brightness:.9},{x:430,y:170,size:16,brightness:.95},{x:450,y:180,size:14,brightness:.85},{x:420,y:300,size:13,brightness:.8},{x:220,y:270,size:14,brightness:.85},{x:200,y:250,size:12,brightness:.75}];for(let a=0;a<100;a++)r.push({x:Math.random()*e.width,y:Math.random()*e.height,size:Math.random()*5+3,brightness:Math.random()*.5+.2});r.forEach(a=>{const o=n.createRadialGradient(a.x,a.y,0,a.x,a.y,a.size);o.addColorStop(0,`rgba(255, 240, 200, ${a.brightness})`),o.addColorStop(.5,`rgba(255, 240, 200, ${a.brightness*.5})`),o.addColorStop(1,"rgba(255, 240, 200, 0)"),n.fillStyle=o,n.beginPath(),n.arc(a.x,a.y,a.size,0,Math.PI*2),n.fill()})}else{for(let a=0;a<e.height;a+=64)for(let o=0;o<e.width;o+=64)n.fillStyle=(o+a)%(64*2)===0?"#BBBBBB":"#888888",n.fillRect(o,a,64,64);n.fillStyle="#FF0000",n.font="24px Arial",n.textAlign="center",n.fillText(`Missing: ${t}`,e.width/2,e.height/2)}const i=new Po(e);return i.isProcedural=!0,i.name=`procedural_${t}`,i}_generateOceanMask(t,e){const n=[];for(let a=0;a<e;a++){n[a]=[];for(let o=0;o<t;o++)n[a][o]=!0}const i=[{x:256,y:150,width:180,height:100},{x:280,y:260,width:100,height:120},{x:450,y:170,width:120,height:100},{x:50,y:190,width:200,height:100},{x:100,y:320,width:80,height:60}],r=(a,o,l)=>{const c=(a-l.x)/(l.width/2),h=(o-l.y)/(l.height/2);return c*c+h*h<=1};for(let a=0;a<e;a++)for(let o=0;o<t;o++)for(const l of i)if(r(o,a,l)){n[a][o]=!1;break}return n}getTextureCache(){return this.cache}}const It=new dx;class fx{constructor(t=null){this.apiKey=t||"a3a2d7dc7aa31fe3f8841a49e7b48766",this.baseUrl="http://api.weatherstack.com",this.cache=new Map,this.cacheDuration=30*60*1e3,this.corsProxy="https://corsproxy.io/?",this.useProxy=window.location.protocol==="https:",this.useMockedData=!0,this.useProxy&&console.log("Utilisation d'un proxy CORS pour les appels API WeatherStack"),this.useMockedData&&console.log("Utilisation de données météo simulées (pas d'appels API)")}async getWeatherData(t,e){const n=`${t.toFixed(2)},${e.toFixed(2)}`;if(this.cache.has(n)){const i=this.cache.get(n);if(Date.now()-i.timestamp<this.cacheDuration)return i.data}if(this.useMockedData){const i=this.getMockWeatherData(t,e);return this.cache.set(n,{data:i,timestamp:Date.now()}),i}try{const i=`${t},${e}`;let r=`${this.baseUrl}/current?access_key=${this.apiKey}&query=${i}`;this.useProxy&&(r=`${this.corsProxy}${encodeURIComponent(r)}`);const a=await fetch(r);if(!a.ok)throw new Error(`API error: ${a.status}`);const o=await a.json();if(o.error)throw new Error(`WeatherStack API error: ${o.error.info}`);const l=this.formatWeatherData(o);return this.cache.set(n,{data:l,timestamp:Date.now()}),l}catch(i){return console.error("Error fetching weather data:",i),this.cache.has(n)?(console.warn("Using expired cache data for weather"),this.cache.get(n).data):this.getMockWeatherData(t,e)}}formatWeatherData(t){return!t||!t.current||!t.location?this.getMockWeatherData(0,0):{name:t.location.name,main:{temp:t.current.temperature,humidity:t.current.humidity,pressure:t.current.pressure},weather:[{main:this.getWeatherMainFromDescription(t.current.weather_descriptions[0]||"Clear"),description:t.current.weather_descriptions.join(", "),icon:this.mapWeatherCodeToIcon(t.current.weather_code)}],wind:{speed:t.current.wind_speed,deg:this.convertWindDirectionToDegrees(t.current.wind_dir)},visibility:t.current.visibility}}getWeatherMainFromDescription(t){if(!t)return"Clear";const e=t.toLowerCase();return e.includes("thunder")||e.includes("lightning")?"Thunderstorm":e.includes("drizzle")?"Drizzle":e.includes("rain")?"Rain":e.includes("snow")||e.includes("sleet")||e.includes("ice")?"Snow":e.includes("fog")||e.includes("mist")||e.includes("haze")?"Atmosphere":e.includes("clear")?"Clear":e.includes("cloud")||e.includes("overcast")?"Clouds":"Clear"}mapWeatherCodeToIcon(t){return t?t>=200&&t<300?"weather-thunder.png":t>=300&&t<400||t>=500&&t<600?"weather-rainy.png":t>=600&&t<700?"weather-snowy.png":t>=700&&t<800?"weather-cloudy.png":t===113?"weather-sunny.png":t===116||t===119?"weather-cloudy.png":"weather-sunny.png":"weather-sunny.png"}convertWindDirectionToDegrees(t){return t&&{N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5}[t]||0}async getGlobalWeatherData(){const t=[{name:"New York",lat:40.71,lon:-74.01},{name:"London",lat:51.51,lon:-.13},{name:"Tokyo",lat:35.68,lon:139.77},{name:"Sydney",lat:-33.87,lon:151.21},{name:"Rio de Janeiro",lat:-22.91,lon:-43.17},{name:"Cairo",lat:30.05,lon:31.24},{name:"Moscow",lat:55.75,lon:37.62},{name:"Beijing",lat:39.91,lon:116.4},{name:"Los Angeles",lat:34.05,lon:-118.24},{name:"Paris",lat:48.85,lon:2.35}];try{const e=[];for(let n=0;n<t.length;n+=2){const r=t.slice(n,n+2).map(o=>this.getWeatherData(o.lat,o.lon).then(l=>({...o,weather:l})).catch(l=>(console.warn(`Erreur pour ${o.name}:`,l),{...o,weather:this.getMockWeatherData(o.lat,o.lon)}))),a=await Promise.all(r);e.push(...a),n+2<t.length&&await new Promise(o=>setTimeout(o,1500))}return e.filter(n=>n!==null)}catch(e){return console.error("Error fetching global weather data:",e),t.map(n=>({...n,weather:this.getMockWeatherData(n.lat,n.lon)}))}}getMockWeatherData(t,e){const n={hot:{min:25,max:40},warm:{min:15,max:25},cool:{min:5,max:15},cold:{min:-15,max:5}};let i;const r=Math.abs(t);r<20?i=n.hot:r<40?i=n.warm:r<60?i=n.cool:i=n.cold;const a=t>=0,o=new Date().getMonth(),l=o>=5&&o<=8;a&&l||!a&&!l?i={min:i.min+5,max:i.max+5}:i={min:i.min-5,max:i.max-5};const h=Math.floor(Math.random()*(i.max-i.min+1))+i.min;let u,d;return h>30?(u="Clear",d="weather-sunny.png"):h>20?(u=Math.random()>.7?"Clouds":"Clear",d=Math.random()>.7?"weather-cloudy.png":"weather-sunny.png"):h>10?(u=Math.random()>.5?"Clouds":"Rain",d=Math.random()>.5?"weather-cloudy.png":"weather-rainy.png"):h>0?(u=Math.random()>.3?"Rain":"Clouds",d=Math.random()>.3?"weather-rainy.png":"weather-cloudy.png"):(u="Snow",d="weather-snowy.png"),{name:this.getCityNameFromCoordinates(t,e),main:{temp:h,humidity:Math.floor(Math.random()*50)+30,pressure:Math.floor(Math.random()*30)+985},weather:[{main:u,description:this.getWeatherDescription(u),icon:d}],wind:{speed:Math.floor(Math.random()*30)+5,deg:Math.floor(Math.random()*360)},visibility:Math.floor(Math.random()*7)+3}}getCityNameFromCoordinates(t,e){const n=[{name:"New York",lat:40.71,lon:-74.01},{name:"London",lat:51.51,lon:-.13},{name:"Tokyo",lat:35.68,lon:139.77},{name:"Sydney",lat:-33.87,lon:151.21},{name:"Rio de Janeiro",lat:-22.91,lon:-43.17},{name:"Cairo",lat:30.05,lon:31.24},{name:"Moscow",lat:55.75,lon:37.62},{name:"Beijing",lat:39.91,lon:116.4},{name:"Los Angeles",lat:34.05,lon:-118.24},{name:"Paris",lat:48.85,lon:2.35}];let i={name:"Unknown Location",distance:Number.MAX_VALUE};for(const r of n){const a=Math.sqrt(Math.pow(r.lat-t,2)+Math.pow(r.lon-e,2));a<i.distance&&(i={name:r.name,distance:a})}return i.name}getWeatherDescription(t){const e={Clear:["Clear sky","Sunny","Fine weather"],Clouds:["Partly cloudy","Mostly cloudy","Overcast"],Rain:["Light rain","Moderate rain","Heavy rain showers"],Snow:["Light snow","Moderate snow","Heavy snowfall"],Thunderstorm:["Thunderstorm","Lightning with rain","Severe thunderstorm"],Drizzle:["Light drizzle","Intermittent drizzle"],Atmosphere:["Foggy","Misty","Hazy conditions"]},n=e[t]||e.Clear;return n[Math.floor(Math.random()*n.length)]}}class px{constructor(t=null){this.apiKey=t,this.baseUrl="https://aviation-edge.com/v2/public",this.cache=new Map,this.cacheDuration=5*60*1e3,this.useMockedData=!0,t||console.log("Clé API Aviation non fournie, utilisation des données de vol simulées")}async getFlights(){const t="flights";if(this.cache.has(t)){const e=this.cache.get(t);if(Date.now()-e.timestamp<this.cacheDuration)return e.data}if(!this.apiKey||this.useMockedData){const e=this.getMockFlightData();return this.cache.set(t,{data:e,timestamp:Date.now()}),e}try{const e=await fetch(`${this.baseUrl}/flights?key=${this.apiKey}&limit=100`);if(!e.ok)throw new Error(`API error: ${e.status}`);const n=await e.json();return this.cache.set(t,{data:n,timestamp:Date.now()}),n}catch(e){return console.error("Error fetching flight data:",e),this.getMockFlightData()}}getMockFlightData(){const t=[],e=["AF","LH","BA","DL","UA","AA","EK","QF","SQ"],n=[{from:{lat:48.85,lon:2.35},to:{lat:40.71,lon:-74.01}},{from:{lat:51.51,lon:-.13},to:{lat:35.68,lon:139.77}},{from:{lat:25.27,lon:55.3},to:{lat:-33.87,lon:151.21}},{from:{lat:1.35,lon:103.82},to:{lat:39.91,lon:116.4}},{from:{lat:19.43,lon:-99.13},to:{lat:34.05,lon:-118.24}},{from:{lat:52.52,lon:13.41},to:{lat:-22.91,lon:-43.17}},{from:{lat:41.9,lon:12.5},to:{lat:31.23,lon:121.47}},{from:{lat:59.33,lon:18.07},to:{lat:-26.2,lon:28.04}}],i=Math.floor(Math.random()*11)+20;for(let r=0;r<i;r++){const a=n[Math.floor(Math.random()*n.length)],o=Math.random(),l=a.from.lat+(a.to.lat-a.from.lat)*o,c=a.from.lon+(a.to.lon-a.from.lon)*o,h=(Math.random()-.5)*2,u=(Math.random()-.5)*2,d=e[Math.floor(Math.random()*e.length)],m=Math.floor(Math.random()*9e3)+1e3;t.push({flight:{number:`${d}${m}`},geography:{latitude:l+h,longitude:c+u,altitude:Math.floor(Math.random()*1e4)+3e4},speed:{horizontal:Math.floor(Math.random()*200)+700},departure:{iataCode:a.from.lat.toFixed(0)+a.from.lon.toFixed(0)},arrival:{iataCode:a.to.lat.toFixed(0)+a.to.lon.toFixed(0)}})}return t}}async function mx(s){const t=new vn;try{if(!s||!s.weather)throw new Error("Données météo manquantes");const{weather:e}=s;if(!e.weather||!e.weather[0]||!e.main)throw console.warn("Format de données météo incomplet:",e),new Error("Structure de données météo incomplète");let n;if(e.weather[0].icon)n=e.weather[0].icon;else switch(e.weather[0].main.toLowerCase()){case"clouds":n="weather-cloudy.png";break;case"rain":case"drizzle":n="weather-rainy.png";break;case"snow":n="weather-snowy.png";break;case"thunderstorm":n="weather-thunder.png";break;case"clear":default:n="weather-sunny.png"}let i;try{i=await It.loadTexture(n)}catch{i=gx(e.weather[0].main||"Clear")}const r=new ro({map:i,color:16777215,transparent:!0,opacity:.8}),a=new vc(r);a.scale.set(.5,.5,1),a.position.set(0,.3,0),t.add(a);const o=document.createElement("canvas");o.width=128,o.height=64;const l=o.getContext("2d");l.fillStyle="rgba(0, 0, 0, 0.5)",l.fillRect(0,0,128,64),l.font="bold 24px Arial",l.fillStyle="white",l.textAlign="center",l.fillText(`${Math.round(e.main.temp)}°C`,64,32);const c=new Po(o),h=new ro({map:c,transparent:!0}),u=new vc(h);u.scale.set(1,.5,1),u.position.set(0,-.3,0),t.add(u),t.userData={point:{name:s.name||e.name,description:`${e.weather[0].description}<br>Température: ${Math.round(e.main.temp)}°C<br>Humidité: ${e.main.humidity}%`,lat:s.lat,lng:s.lon}}}catch(e){console.error("Error creating weather marker:",e);const n=new Le(.1,16,16),i=new Li({color:35071}),r=new $t(n,i);t.add(r),t.userData={point:{name:s.name||"Données météo",description:"Informations météo non disponibles",lat:s.lat||0,lng:s.lon||0}}}return t}function gx(s){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");switch(e.clearRect(0,0,t.width,t.height),s.toLowerCase()){case"clear":e.fillStyle="#FFDD00",e.beginPath(),e.arc(32,32,25,0,Math.PI*2),e.fill();break;case"clouds":e.fillStyle="#AAAAAA",e.beginPath(),e.arc(32,32,20,0,Math.PI*2),e.fill();break;case"rain":case"drizzle":e.fillStyle="#AAAAAA",e.beginPath(),e.arc(32,32,18,0,Math.PI*2),e.fill(),e.strokeStyle="#4444FF",e.lineWidth=2;for(let n=0;n<5;n++){const i=20+n*6;e.beginPath(),e.moveTo(i,40),e.lineTo(i-3,55),e.stroke()}break;case"snow":e.fillStyle="#FFFFFF",e.beginPath(),e.arc(32,32,22,0,Math.PI*2),e.fill(),e.strokeStyle="#AAAAAA";for(let n=0;n<6;n++){const i=n/6*Math.PI*2;e.beginPath(),e.moveTo(32,32),e.lineTo(32+Math.cos(i)*22,32+Math.sin(i)*22),e.stroke()}break;case"thunderstorm":e.fillStyle="#555555",e.beginPath(),e.arc(32,32,22,0,Math.PI*2),e.fill(),e.fillStyle="#FFFF00",e.beginPath(),e.moveTo(32,15),e.lineTo(42,30),e.lineTo(35,32),e.lineTo(45,48),e.lineTo(25,35),e.lineTo(32,33),e.lineTo(22,15),e.closePath(),e.fill();break;default:e.fillStyle="#CCCCCC",e.beginPath(),e.arc(32,32,20,0,Math.PI*2),e.fill(),e.strokeStyle="#444444",e.lineWidth=2,e.strokeRect(20,20,24,24)}return new Po(t)}function _x(s,t){var n,i,r,a,o,l,c;const e=new vn;try{const h=new Do(.05,.2,8);h.rotateX(Math.PI/2);const u=new Wn({color:16777215,emissive:5592405}),d=new $t(h,u),m=new Di(.2,.02,.05),_=new $t(m,u);_.position.set(0,0,0),e.add(d),e.add(_);const g=[];for(let P=0;P<20;P++)g.push(new D(P*-.05,0,0));const p=new Ve().setFromPoints(g),f=new Ah({color:65535,transparent:!0,opacity:.6}),S=new B_(p,f);e.add(S);const v={number:((n=s.flight)==null?void 0:n.number)||"N/A",altitude:((i=s.geography)==null?void 0:i.altitude)||0,speed:((r=s.speed)==null?void 0:r.horizontal)||0,from:((a=s.departure)==null?void 0:a.iataCode)||"N/A",to:((o=s.arrival)==null?void 0:o.iataCode)||"N/A"},M=((l=s.geography)==null?void 0:l.latitude)||0,y=((c=s.geography)==null?void 0:c.longitude)||0;e.userData={point:{name:`Vol ${v.number}`,description:`De: ${v.from}<br>À: ${v.to}<br>Altitude: ${v.altitude} ft<br>Vitesse: ${v.speed} km/h`,lat:M,lng:y,type:"flight"},flightInfo:v};const T=1+v.altitude/1e5,C=Br(M,y,t*T);e.position.copy(C),e.lookAt(0,0,0),e.rotateY(Math.PI)}catch(h){console.error("Error creating flight marker:",h);const u=new Di(.1,.1,.1),d=new Li({color:16711680}),m=new $t(u,d);e.add(m)}return e}class xx{constructor(){this.textureLoader=new zs,this.resultsList=[],this.totalTextures=0,this.loadedTextures=0,this.failedTextures=0,this.localTextures=[],this.proceduralTextures=0}async checkLocalTextures(t="./assets/textures/"){console.log("🔍 Vérification des textures locales dans:",t);try{const e=[".jpg",".jpeg",".png",".webp",".tif",".tiff"],n=["earth_daymap","earth_bumpmap","earth_specularmap","earth_clouds","earth_nightlights","earth-night","2_no_clouds_4k","elev_bump_4k","water_4k","fair_clouds_4k","8k_stars_milky_way","8k_sun","8k_moon"];try{await this.listLocalFiles(t)}catch{console.warn("Impossible de lister les fichiers du répertoire, passage en mode vérification directe")}const i=n.map(async o=>{for(const l of e){const c=`${o}${l}`;try{if((await fetch(`${t}${c}`,{method:"HEAD"})).ok)return this.localTextures.includes(c)||this.localTextures.push(c),console.log(`✅ Texture trouvée: ${c}`),!0}catch{continue}}return!1});await Promise.all(i);const a=[["earth_daymap.jpg","2_no_clouds_4k.jpg"],["earth_clouds.png","fair_clouds_4k.png"],["earth_bumpmap.jpg","elev_bump_4k.jpg"]].filter(o=>!o.some(l=>this.localTextures.includes(l)));return a.length>0&&(console.warn("⚠️ Textures requises manquantes:"),a.forEach(o=>{console.warn(`  - ${o.join(" OU ")}`)})),{success:a.length===0,total:this.localTextures.length,missing:a,localTextures:this.localTextures}}catch(e){return console.error("Erreur lors de la vérification des textures:",e),{success:!1,error:e.message}}}async listLocalFiles(t){const e=n=>n.endsWith(".jpg")?1:n.endsWith(".png")?2:n.endsWith(".tif")?3:4;try{console.log("Recherche de fichiers locaux...");const n={required:[],optional:[],found:[],missing:[]},i=[["earth_daymap.jpg","2_no_clouds_4k.jpg"],["earth_clouds.png","fair_clouds_4k.png"],["earth_bumpmap.jpg","elev_bump_4k.jpg"]],r=[["earth_nightlights_8k.jpg","earth-night.jpg","night_lights.jpg"],["8k_stars_milky_way.jpg"],["8k_sun.jpg"],["8k_moon.jpg"],["earth_specularmap.jpg"],["water_4k.png"]];try{const o=await fetch(`${t}directory.json`);if(o.ok){const l=await o.json();this.localTextures=l.files||[],console.log(`📁 ${this.localTextures.length} fichiers listés dans directory.json`);return}}catch{console.log("❌ Pas de directory.json trouvé, vérification manuelle...")}for(const o of i){let l=!1;for(const c of o)try{if((await fetch(`${t}${c}`,{method:"HEAD"})).ok){this.localTextures.push(c),n.found.push(c),l=!0,console.log(`✅ Texture requise trouvée: ${c}`);break}}catch{continue}l||(n.missing.push(o[0]),console.log(`❌ Groupe de textures requises manquant: ${o.join(" ou ")}`))}for(const o of r){let l=!1;for(const c of o)try{if((await fetch(`${t}${c}`,{method:"HEAD"})).ok){this.localTextures.push(c),n.found.push(c),l=!0,console.log(`✅ Texture optionnelle trouvée: ${c}`);break}}catch{continue}!l&&o.length>0&&console.log(`ℹ️ Texture optionnelle non trouvée: ${o[0]}`)}this.localTextures.sort((o,l)=>e(o)-e(l));const a=n.missing.filter(o=>i.some(l=>l.includes(o)));return console.log(`
📊 Rapport des textures:`),console.log(`Trouvées: ${n.found.length}`),console.log(`Textures requises: ${i.length-a.length}/${i.length}`),a.length>0&&(console.warn(`
⚠️ Groupes de textures requises manquants:`),i.forEach(o=>{o.some(l=>n.found.includes(l))||console.warn(`  - ${o.join(" OU ")}`)}),console.warn(`
💡 Consultez assets/textures/README.md pour les instructions de téléchargement`)),n}catch(n){throw console.error("Erreur fatale lors de la vérification des textures:",n),n}}recordResult(t,e,n){this.totalTextures++,e?this.loadedTextures++:this.failedTextures++,this.resultsList.push({name:t,success:e,details:n})}checkCachedTextures(){console.log("🔍 Vérification des textures en cache dans l'AssetManager:");const t=It.getTextureCache(),e=Array.from(t.keys());return console.log(`Nombre de textures en cache: ${e.length}`),e.length>0?(console.log("Textures en cache:"),e.forEach(n=>{const i=t.get(n).source,r=i&&i.data instanceof HTMLCanvasElement;console.log(`  - ${n}${r?" (procédurale)":""}`)})):console.log("Aucune texture n'est actuellement en cache."),e}createDiagnosticUI(){const t=document.createElement("div");t.style.position="absolute",t.style.bottom="100px",t.style.right="20px",t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.color="white",t.style.padding="15px",t.style.borderRadius="5px",t.style.maxWidth="300px",t.style.maxHeight="400px",t.style.overflowY="auto",t.style.zIndex="1000",t.style.fontFamily="monospace",t.style.fontSize="12px",t.style.display="none",t.id="texture-diagnostic";const e=document.createElement("h3");e.textContent="🖼️ Diagnostic des textures",e.style.margin="0 0 10px 0",t.appendChild(e);const n=document.createElement("div");n.id="texture-diagnostic-content",t.appendChild(n);const i=document.createElement("button");i.textContent="Rafraîchir",i.style.marginTop="10px",i.style.padding="5px 10px",i.style.cursor="pointer",i.addEventListener("click",()=>this.updateDiagnosticUI()),t.appendChild(i);const r=document.createElement("button");r.textContent="🖼️",r.style.position="absolute",r.style.bottom="20px",r.style.right="20px",r.style.width="40px",r.style.height="40px",r.style.borderRadius="50%",r.style.fontSize="20px",r.style.backgroundColor="rgba(0, 0, 0, 0.7)",r.style.color="white",r.style.border="none",r.style.cursor="pointer",r.style.zIndex="1001",r.addEventListener("click",()=>{t.style.display==="none"?(t.style.display="block",this.updateDiagnosticUI()):t.style.display="none"}),document.body.appendChild(t),document.body.appendChild(r)}updateDiagnosticUI(){const t=document.getElementById("texture-diagnostic-content");if(!t)return;t.innerHTML="";const e=It.getTextureCache(),n=Array.from(e.keys()),i=Array.from(e.values()).filter(o=>o.isProcedural).length,r=document.createElement("ul");if(r.style.paddingLeft="20px",r.style.margin="0",n.length===0){const o=document.createElement("li");o.textContent="Aucune texture en cache",r.appendChild(o)}else n.forEach(o=>{const c=e.get(o).isProcedural===!0,h=document.createElement("li");h.textContent=`${o}${c?" (procédurale)":""}`,h.style.color=c?"orange":"lightgreen",r.appendChild(h)});t.appendChild(r);const a=document.createElement("p");if(a.innerHTML=`Total: ${n.length} texture(s)<br>
                        Procédurales: ${i}<br>
                        Locales/CDN: ${n.length-i}`,t.appendChild(a),i>3){const o=document.createElement("div");o.style.marginTop="10px",o.style.padding="10px",o.style.backgroundColor="rgba(255, 200, 50, 0.2)",o.style.borderRadius="5px",o.innerHTML=`
        <strong>⚠️ Nombreuses textures procédurales</strong>
        <p>Pour améliorer la qualité visuelle, téléchargez les textures manquantes 
        avec l'utilitaire de téléchargement (📥).</p>
      `,t.appendChild(o)}}checkRequiredTextures(){}}const Ne=new xx;typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{Ne.createDiagnosticUI()});class vx{constructor(t,e){this.container=t,this.data=e,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.globe=null,this.atmosphere=null,this.markers=[],this.hoverMarker=null,this.raycaster=new Y_,this.pointer=new Mt,this.radius=5,this.isInitialized=!1,this.tooltipElement=null,this.sun=null,this.moon=null,this.moonOrbitRadius=25,this.moonOrbitSpeed=.002,this.moonRotation=0,this.skybox=null,this.timeOfDay=12,this.dayNightMix=0,this.nightLights=null,this.weatherService=new fx,this.flightService=new px,this.textureLoadRetries=3,this.textureExtensions={clouds:["jpg","png"],earth:["jpg","png"],bump:["jpg","png"],specular:["tif","jpg","png"],night:["jpg","png"],stars:["jpg","png"],water:["jpg","png"]},this.availableTextures=["8k_moon.jpg","8k_stars_milky_way.jpg","8k_stars.jpg","8k_sun.jpg","earth_clouds.jpg","earth_bumpmap.jpg","earth_daymap.jpg","earth_specularmap.tif"],this.weatherMarkers=[],this.flightMarkers=[],this.date=new Date,this.timeMultiplier=1,this.autoTimeUpdate=!1,this.markersGroup=null,this.weatherMarkersGroup=null,this.flightMarkersGroup=null}async init(){if(console.log("🌐 Démarrage de la vérification des textures..."),await Ne.checkLocalTextures(),console.log("Textures locales détectées:",Ne.localTextures),Ne.localTextures.some(i=>i==="earth_daymap.jpg"||i==="2_no_clouds_4k.jpg")?console.log("✅ Texture principale de la Terre trouvée!"):console.warn("⚠️ Aucune texture principale de la Terre n'a été trouvée localement."),Ne.localTextures.length>0){console.log(`Utilisation prioritaire des ${Ne.localTextures.length} textures locales trouvées`),It.preferProceduralFallbacks=!1;const i={earth:Ne.localTextures.find(r=>r==="earth_daymap.jpg"||r==="ipcc_bluemarble_west_lrg.jpg"||r==="ipcc_bluemarble_east_lrg.jpg"),bump:Ne.localTextures.find(r=>r==="earth_bumpmap.jpg"||r==="Land_topography_Earth's_surface_21600x10800.png"),clouds:Ne.localTextures.find(r=>r==="earth_clouds.jpg"||r==="earth_clouds.png"||r==="cloud_combined_2048.jpg"),specular:Ne.localTextures.find(r=>r==="earth_specularmap.jpg"||r==="earth_specularmap.tif"||r==="Bathymetry is the underwater equivalent of land topography_3600x1800_color.jpg"),stars:Ne.localTextures.find(r=>r==="8k_stars_milky_way.jpg"||r==="8k_stars.jpg"),sun:Ne.localTextures.find(r=>r==="8k_sun.jpg"),moon:Ne.localTextures.find(r=>r==="8k_moon.jpg")};console.log("📦 Inventaire des textures disponibles:",i),this.textureInventory=i}this.scene=new O_,this.camera=new Ye(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=15,this.renderer=new bh({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement);const e=new q_(16777215,.5);this.scene.add(e);const n=new j_(16777215,1);return n.position.set(1,1,1),this.scene.add(n),await this.createGlobe(),this.createAtmosphere(),await this.createSkybox(),await this.createCelestialBodies(),this.markersGroup=new vn,this.weatherMarkersGroup=new vn,this.flightMarkersGroup=new vn,this.scene.add(this.markersGroup),this.scene.add(this.weatherMarkersGroup),this.scene.add(this.flightMarkersGroup),this.addMarkers(),this.loadWeatherData(),this.loadFlightData(),this.setupControls(),this.setupEventListeners(),this.tooltipElement=ux(),document.body.appendChild(this.tooltipElement),this.updateDayNightCycle(),this.createDayNightControls(),this.createTimeControls(),this.isInitialized=!0,setTimeout(()=>{this.logLoadedTextures();const i=document.createElement("button");i.textContent="Diagnostic des textures",i.style.position="absolute",i.style.bottom="80px",i.style.left="20px",i.style.padding="5px 10px",i.style.background="rgba(0, 0, 0, 0.5)",i.style.color="white",i.style.border="none",i.style.borderRadius="5px",i.style.fontFamily="Arial, sans-serif",i.style.cursor="pointer",i.addEventListener("click",()=>{this.showTextureStatus()}),document.body.appendChild(i)},1e3),this}async createGlobe(){new zs;try{console.log("Début du chargement des textures du globe...");const t=this.textureInventory||{};console.log("Utilisation de l'inventaire de textures:",t),t.specular&&console.log("Tentative de chargement de la texture spéculaire:",t.specular);const e=[t.earth?It.loadTexture(t.earth,!0):It.loadTexture("earth_daymap.jpg",!0).catch(d=>(console.warn("Fallback vers texture Earth alternative:",d),It.loadTexture("ipcc_bluemarble_west_lrg.jpg",!0).catch(()=>It.loadTexture("North_Africa_Europe.jpg",!0)))),t.bump?It.loadTexture(t.bump,!0):It.loadTexture("earth_bumpmap.jpg",!0).catch(d=>(console.warn("Fallback vers texture Bump alternative:",d),It.loadTexture("Land_topography_Earth's_surface_21600x10800.png",!0))),t.specular?It.loadTexture(t.specular,!0).catch(d=>{console.warn(`Échec du chargement de la texture spéculaire ${t.specular}:`,d);const m=t.specular.split(".").slice(0,-1).join(".");return It.loadTexture(`${m}.jpg`,!0).catch(()=>It.createFallbackTexture("specular"))}):It.loadTexture("earth_specularmap.jpg",!0).catch(d=>(console.warn("Tentative de chargement alternatif pour la texture spéculaire"),It.loadTexture("water_4k.png",!0).catch(()=>It.createFallbackTexture("specular")))),t.clouds?It.loadTexture(t.clouds,!0):It.loadTexture("earth_clouds.jpg",!0).catch(d=>(console.warn("Fallback vers texture Clouds alternative:",d),It.loadTexture("cloud_combined_2048.jpg",!0).catch(()=>It.loadTexture("earth_clouds.png",!0).catch(()=>(console.log("Génération d'une texture de nuages procédurale"),It.createFallbackTexture("clouds")))))),t.night?It.loadTexture(t.night,!0):It.loadTexture("earth_nightlights.jpg",!0).catch(d=>It.loadTexture("night_lights.jpg",!0).catch(m=>It.loadTexture("earth-night.jpg",!0).catch(_=>(console.warn("Création d'une texture de nuit procédurale améliorée"),It.createFallbackTexture("night_lights")))))],[n,i,r,a,o]=await Promise.all(e);console.log("Toutes les textures ont été chargées ou ont des fallbacks"),n.name="earth",i.name="bump",r.name="specular",a.name="clouds",o.name="night",console.log("Textures chargées:",{earth:n.isProcedural?"procédurale":n.url||"chargée",bump:i.isProcedural?"procédurale":i.url||"chargée",specular:r.isProcedural?"procédurale":r.url||"chargée",clouds:a.isProcedural?"procédurale":a.url||"chargée",night:o.isProcedural?"procédurale":o.url||"chargée"}),this.nightLights=o;const l=new Le(this.radius,64,64),c=new On({uniforms:{dayTexture:{value:n},nightTexture:{value:o},bumpMap:{value:i},specularMap:{value:r},dayNightMix:{value:this.dayNightMix},lightPosition:{value:new D(100,20,-100)}},vertexShader:`
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D dayTexture;
          uniform sampler2D nightTexture;
          uniform sampler2D bumpMap;
          uniform sampler2D specularMap;
          uniform float dayNightMix;
          uniform vec3 lightPosition;
          
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            // Direction de la lumière (soleil)
            vec3 lightDir = normalize(lightPosition - vPosition);
            
            // Facteur d'illumination basé sur l'angle entre la normale et la lumière
            float diffuseFactor = max(dot(vNormal, lightDir), 0.0);
            
            // Texture de jour et de nuit
            vec4 dayColor = texture2D(dayTexture, vUv);
            vec4 nightColor = texture2D(nightTexture, vUv);
            
            // Déterminer si ce point est du côté nuit (face opposée au soleil)
            float nightSide = clamp(1.0 - diffuseFactor * 2.0, 0.0, 1.0);
            
            // Mélanger les textures jour et nuit en fonction de la position et du cycle jour/nuit
            vec4 finalColor = mix(dayColor, nightColor, nightSide * dayNightMix);
            
            // Ajouter un peu de lumière ambiante pour que le côté nuit ne soit pas complètement noir
            finalColor = mix(finalColor, nightColor * 0.5, nightSide * 0.8);
            
            gl_FragColor = finalColor;
          }
        `});this.globe=new $t(l,c),this.scene.add(this.globe);const h=new Le(this.radius+.03,64,64),u=new Wn({map:a,transparent:!0,opacity:.4});this.clouds=new $t(h,u),this.scene.add(this.clouds)}catch(t){console.error("Erreur lors du chargement des textures:",t),console.warn("Création d'un globe basique sans textures...");const e=new Le(this.radius,32,32),n=new Wn({color:2241535,shininess:25});this.globe=new $t(e,n),this.scene.add(this.globe),this.createSimpleContinents()}}createSimpleContinents(){[{lat:40,lng:-95,scale:3.5,name:"Amérique du Nord"},{lat:-10,lng:-60,scale:3,name:"Amérique du Sud"},{lat:30,lng:80,scale:3,name:"Asie"},{lat:-25,lng:135,scale:2,name:"Australie"}].forEach(e=>{const n=Br(e.lat,e.lng,this.radius+.01),i=new Le(.2*e.scale,32,16),r=new Wn({color:2263074}),a=new $t(i,r);a.position.set(n.x,n.y,n.z),a.lookAt(0,0,0),a.scale.z=.1,this.globe.add(a)})}async createSkybox(){try{const t=this.textureInventory||{},e=t.stars?await It.loadTexture(t.stars,!0):await It.loadTexture("8k_stars_milky_way.jpg");console.log("Skybox chargé:",e.isProcedural?"procédural":e.url||"chargé");const n=new Le(500,60,40);n.scale(-1,1,1);const i=new Li({map:e,side:be});this.skybox=new $t(n,i),this.scene.add(this.skybox)}catch(t){console.warn("Impossible de charger la texture de la voie lactée:",t),this.createStars()}}async createCelestialBodies(){try{const t=this.textureInventory||{},e=t.sun?await It.loadTexture(t.sun,!0):await It.loadTexture("8k_sun.jpg");console.log("Soleil chargé:",e.isProcedural?"procédural":e.url||"chargé");const n=new Le(10,32,32),i=new Wn({map:e,emissive:16776960,emissiveIntensity:.5,shininess:0});this.sun=new $t(n,i),this.sun.position.set(100,20,-100),this.scene.add(this.sun);const r=new Oa(16777215,1.5,300);this.sun.add(r);const a=t.moon?await It.loadTexture(t.moon,!0):await It.loadTexture("8k_moon.jpg");console.log("Lune chargée:",a.isProcedural?"procédurale":a.url||"chargé");const o=new Le(1.2,32,32),l=new Wn({map:a,bumpMap:a,bumpScale:.02});this.moon=new $t(o,l),this.updateMoonPosition(),this.scene.add(this.moon)}catch(t){console.error("Erreur lors du chargement des textures des corps célestes:",t);const e=new Le(10,32,32),n=new Wn({color:16768256,emissive:16776960,emissiveIntensity:.5,shininess:0});this.sun=new $t(e,n),this.sun.position.set(100,20,-100),this.scene.add(this.sun);const i=new Oa(16777215,1.5,300);this.sun.add(i);const r=new Le(1.2,32,32),a=new Wn({color:13421772,bumpScale:.02});this.moon=new $t(r,a),this.updateMoonPosition(),this.scene.add(this.moon)}}updateMoonPosition(){const t=this.moonOrbitRadius*Math.cos(this.moonRotation),e=this.moonOrbitRadius*Math.sin(this.moonRotation);this.moon.position.set(t,0,e),this.moon.lookAt(0,0,0)}createAtmosphere(){const t=new Le(this.radius+.1,64,64),e=new On({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,blending:qa,side:be,transparent:!0});this.atmosphere=new $t(t,e),this.atmosphere.scale.set(1.1,1.1,1.1),this.scene.add(this.atmosphere)}createStars(){const t=new Ve,e=1e4,n=new Float32Array(e*3);for(let a=0;a<e*3;a+=3)n[a]=(Math.random()-.5)*2e3,n[a+1]=(Math.random()-.5)*2e3,n[a+2]=(Math.random()-.5)*2e3;t.setAttribute("position",new on(n,3));const i=new Ch({color:16777215,size:.7,transparent:!0}),r=new k_(t,i);this.scene.add(r)}addMarkers(){!this.data||!this.data.points||this.data.points.forEach(t=>{const e=hx(t),n=Br(t.lat,t.lng,this.radius+.05);e.position.set(n.x,n.y,n.z),e.lookAt(0,0,0),e.userData={point:t},this.globe.add(e),this.markers.push(e)})}async loadWeatherData(){try{const t=await this.weatherService.getGlobalWeatherData();this.weatherMarkers.forEach(e=>{this.weatherMarkersGroup.remove(e)}),this.weatherMarkers=[];for(const e of t){const n=await mx(e),i=Br(e.lat,e.lon,this.radius+.2);n.position.set(i.x,i.y,i.z),n.lookAt(0,0,0),this.weatherMarkersGroup.add(n),this.weatherMarkers.push(n)}}catch(t){console.error("Error loading weather data:",t)}}async loadFlightData(){var t,e;try{const n=await this.flightService.getFlights();this.flightMarkers.forEach(i=>{this.flightMarkersGroup.remove(i)}),this.flightMarkers=[];for(const i of n){if(!((t=i.geography)!=null&&t.latitude)||!((e=i.geography)!=null&&e.longitude))continue;const r=_x(i,this.radius);this.flightMarkersGroup.add(r),this.flightMarkers.push(r)}}catch(n){console.error("Error loading flight data:",n)}}setupControls(){this.controls=new $_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=.8,this.controls.minDistance=this.radius+1,this.controls.maxDistance=30,this.controls.minPolarAngle=Math.PI*.1,this.controls.maxPolarAngle=Math.PI*.9}setupEventListeners(){window.addEventListener("resize",this.onWindowResize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("click",this.onMouseClick.bind(this))}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onMouseMove(t){this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const e=[...this.markers,...this.weatherMarkers,...this.flightMarkers],n=this.raycaster.intersectObjects(e,!0);if(n.length>0){const i=n[0].object,r=i.parent&&i.parent.userData.point?i.parent:i;if(this.hoverMarker!==r){this.hoverMarker&&zr.to(this.hoverMarker.scale,{x:1,y:1,z:1,duration:.3}),this.hoverMarker=r,zr.to(this.hoverMarker.scale,{x:1.3,y:1.3,z:1.3,duration:.3});const c=r.userData.point;c&&(this.tooltipElement.innerHTML=`
            <strong>${c.name}</strong>
            ${c.description?`<br>${c.description}`:""}
          `,this.tooltipElement.style.opacity=1)}const a=new D;a.copy(r.position),a.project(this.camera);const o=(a.x*.5+.5)*window.innerWidth,l=(a.y*-.5+.5)*window.innerHeight;this.tooltipElement.style.left=`${o}px`,this.tooltipElement.style.top=`${l-10}px`,document.body.style.cursor="pointer"}else this.hoverMarker&&(zr.to(this.hoverMarker.scale,{x:1,y:1,z:1,duration:.3}),this.hoverMarker=null,this.tooltipElement.style.opacity=0),document.body.style.cursor="auto"}onMouseClick(t){if(this.hoverMarker&&this.hoverMarker.userData&&this.hoverMarker.userData.point){const e=this.hoverMarker.userData.point,n=Br(e.lat,e.lng,this.radius+2);zr.to(this.camera.position,{x:n.x*1.5,y:n.y*1.5,z:n.z*1.5,duration:1.5,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(this.globe.position)}})}}createDayNightControls(){const t=document.createElement("div");t.style.position="absolute",t.style.bottom="20px",t.style.left="20px",t.style.background="rgba(0, 0, 0, 0.5)",t.style.color="white",t.style.padding="10px",t.style.borderRadius="5px",t.style.fontFamily="Arial, sans-serif";const e=document.createElement("div");e.textContent="Contrôle temps",e.style.marginBottom="10px",t.appendChild(e);const n=document.createElement("input");n.type="range",n.min="0",n.max="24",n.step="0.1",n.value=this.timeOfDay.toString(),n.style.width="200px",n.addEventListener("input",r=>{this.timeOfDay=parseFloat(r.target.value),this.updateDayNightCycle(),i.textContent=`${this.timeOfDay.toFixed(1)}h`}),t.appendChild(n);const i=document.createElement("span");i.textContent=`${this.timeOfDay.toFixed(1)}h`,i.style.marginLeft="10px",t.appendChild(i),document.body.appendChild(t)}createTimeControls(){const t=document.createElement("div");t.style.position="absolute",t.style.top="20px",t.style.right="20px",t.style.background="rgba(0, 0, 0, 0.5)",t.style.color="white",t.style.padding="10px",t.style.borderRadius="5px",t.style.fontFamily="Arial, sans-serif",t.style.zIndex="1000";const e=document.createElement("div");e.textContent="Contrôle du temps",e.style.fontWeight="bold",e.style.marginBottom="10px",t.appendChild(e);const n=document.createElement("div");n.id="date-display",n.style.marginBottom="10px",n.textContent=this.date.toLocaleString(),t.appendChild(n);const i=document.createElement("div");i.style.marginBottom="10px";const r=document.createElement("label");r.textContent="Vitesse: ",i.appendChild(r);const a=document.createElement("span");a.id="speed-value",a.textContent=`${this.timeMultiplier}x`,i.appendChild(a);const o=document.createElement("input");o.type="range",o.min="0",o.max="100",o.step="1",o.value=this.timeMultiplier.toString(),o.style.width="100%",o.style.marginTop="5px",o.addEventListener("input",d=>{this.timeMultiplier=parseInt(d.target.value),a.textContent=`${this.timeMultiplier}x`}),i.appendChild(o),t.appendChild(i);const l=document.createElement("div"),c=document.createElement("input");c.type="checkbox",c.id="auto-update",c.checked=this.autoTimeUpdate,c.addEventListener("change",d=>{this.autoTimeUpdate=d.target.checked}),l.appendChild(c);const h=document.createElement("label");h.htmlFor="auto-update",h.textContent=" Avance automatique du temps",l.appendChild(h),t.appendChild(l);const u=document.createElement("div");u.style.marginTop="10px",u.style.display="flex",u.style.justifyContent="space-between",["-1h","-1j","Maintenant","+1j","+1h"].forEach(d=>{const m=document.createElement("button");m.textContent=d,m.style.flex="1",m.style.margin="0 2px",m.style.padding="5px",m.addEventListener("click",()=>{switch(d){case"-1h":this.date.setHours(this.date.getHours()-1);break;case"-1j":this.date.setDate(this.date.getDate()-1);break;case"Maintenant":this.date=new Date;break;case"+1j":this.date.setDate(this.date.getDate()+1);break;case"+1h":this.date.setHours(this.date.getHours()+1);break}this.updateTimeDisplay(),this.updateTimeOfDay()}),u.appendChild(m)}),t.appendChild(u),document.body.appendChild(t)}updateTimeDisplay(){const t=document.getElementById("date-display");t&&(t.textContent=this.date.toLocaleString())}updateTimeOfDay(){this.timeOfDay=this.date.getHours()+this.date.getMinutes()/60,this.updateDayNightCycle()}updateDayNightCycle(){this.dayNightMix=0,this.timeOfDay<6||this.timeOfDay>18?this.dayNightMix=1:(this.timeOfDay<8||this.timeOfDay>16)&&(this.timeOfDay<8?this.dayNightMix=1-(this.timeOfDay-6)/2:this.dayNightMix=(this.timeOfDay-16)/2),this.updateCelestialPositions(),this.globe&&this.globe.material&&this.globe.material.uniforms&&(this.globe.material.uniforms.dayNightMix.value=this.dayNightMix,this.globe.material.uniforms.lightPosition.value.copy(this.sun.position))}updateCelestialPositions(){if(!this.sun)return;const t=this.timeOfDay/24*Math.PI*2-Math.PI/2,e=150,n=e*Math.cos(t),i=20*Math.sin(t),r=e*Math.sin(t);if(this.sun.position.set(n,i,r),this.sun.children.length>0&&this.sun.children[0]instanceof Oa){const a=this.sun.children[0];this.timeOfDay<6||this.timeOfDay>18?a.intensity=.2:a.intensity=1.5}}animate(){if(this.isInitialized){if(requestAnimationFrame(this.animate.bind(this)),this.clouds&&(this.clouds.rotation.y+=5e-4),this.skybox&&(this.skybox.rotation.y+=1e-4),this.moon&&(this.moonRotation+=this.moonOrbitSpeed,this.updateMoonPosition(),this.moon.rotation.y+=.001),this.sun&&(this.sun.rotation.y+=2e-4),this.controls.update(),this.autoTimeUpdate){const t=new Date(this.date.getTime()+1e3*this.timeMultiplier);this.date=t,this.updateTimeDisplay(),this.updateTimeOfDay(),Math.floor(this.date.getTime()/6e4)!==Math.floor(new Date().getTime()/6e4)&&this.loadFlightData(),this.date.getMinutes()===0&&this.date.getSeconds()<5&&this.loadWeatherData()}this.renderer.render(this.scene,this.camera)}}logLoadedTextures(t=!1){const e={},n=(i,r)=>{var c,h;if(!i)return{name:r,isProcedural:!1,source:"Non définie"};const a=!!i.isProcedural,o=((h=(c=i.source)==null?void 0:c.data)==null?void 0:h.src)||i.url||null,l=i.image?`${i.image.width}x${i.image.height}`:null;return{name:r,isProcedural:a,source:o?l?`${o.split("/").pop()} (${l})`:o.split("/").pop():a?"Procédurale":"Source inconnue"}};if(this.globe&&this.globe.material&&this.globe.material.uniforms){const i=this.globe.material.uniforms;e.earth_daymap=n(i.dayTexture.value,"earth_daymap"),e.earth_bumpmap=n(i.bumpMap.value,"earth_bumpmap"),e.earth_specularmap=n(i.specularMap.value,"earth_specularmap"),e.earth_nightlights=n(i.nightTexture.value,"earth_nightlights")}return this.clouds&&this.clouds.material.map&&(e.earth_clouds=n(this.clouds.material.map,"earth_clouds")),this.skybox&&this.skybox.material.map&&(e.skybox=n(this.skybox.material.map,"skybox")),t||(console.log("===== TEXTURES CHARGÉES ====="),Object.entries(e).forEach(([i,r])=>{console.log(`${i}: ${r.isProcedural?"(procédurale)":""} ${r.source}`)}),console.log("============================")),e}showTextureStatus(){const t=this.logLoadedTextures(!0);let e=document.getElementById("texture-diagnostic-panel");if(!e){e=document.createElement("div"),e.id="texture-diagnostic-panel",e.style.position="absolute",e.style.top="20px",e.style.left="20px",e.style.backgroundColor="rgba(0, 0, 0, 0.8)",e.style.color="white",e.style.padding="15px",e.style.borderRadius="5px",e.style.fontFamily="Arial, sans-serif",e.style.maxWidth="400px",e.style.maxHeight="80vh",e.style.overflowY="auto",e.style.zIndex="1000";const c=document.createElement("button");c.textContent="X",c.style.position="absolute",c.style.top="5px",c.style.right="5px",c.style.background="none",c.style.border="none",c.style.color="white",c.style.fontSize="16px",c.style.cursor="pointer",c.addEventListener("click",()=>{e.remove()}),e.appendChild(c),document.body.appendChild(e)}e.innerHTML="";const n=document.createElement("h3");n.textContent="Diagnostic des textures",n.style.marginTop="0",e.appendChild(n);const i=document.createElement("div");let r=0,a=0;Object.entries(t).forEach(([c,h])=>{const u=document.createElement("div");u.style.marginBottom="5px";const d=document.createElement("span");d.textContent=h.isProcedural?"⚠️":"✅",u.appendChild(d);const m=document.createElement("span");if(m.textContent=` ${c}`,m.style.fontWeight="bold",u.appendChild(m),h.source){const _=document.createElement("div");_.textContent=h.source,_.style.fontSize="12px",_.style.marginLeft="20px",_.style.color="#aaa",u.appendChild(_)}i.appendChild(u),h.isProcedural?r++:a++});const o=document.createElement("div");o.style.marginTop="10px",o.style.borderTop="1px solid #666",o.style.paddingTop="10px",o.innerHTML=`
      <strong>Total:</strong> ${Object.keys(t).length} texture(s)<br>
      <strong>Procédurales:</strong> ${r}<br>
      <strong>Locales/CDN:</strong> ${a}
    `;const l=document.createElement("button");if(l.textContent="Rafraîchir",l.style.marginTop="10px",l.style.padding="5px 10px",l.style.background="#444",l.style.color="white",l.style.border="none",l.style.borderRadius="3px",l.style.cursor="pointer",l.addEventListener("click",()=>{this.showTextureStatus()}),e.appendChild(i),e.appendChild(o),e.appendChild(l),t.earth_specularmap&&t.earth_specularmap.isProcedural){const c=document.createElement("button");c.textContent="Corriger earth_specularmap.tif",c.style.marginTop="10px",c.style.padding="5px 10px",c.style.background="#664400",c.style.color="white",c.style.border="none",c.style.borderRadius="3px",c.style.cursor="pointer",c.addEventListener("click",()=>{this.fixSpecularTexture()}),e.appendChild(c)}if(t.earth_nightlights&&t.earth_nightlights.isProcedural){const c=document.createElement("button");c.textContent="Corriger night_lights.jpg",c.style.marginTop="10px",c.style.marginLeft="10px",c.style.padding="5px 10px",c.style.background="#664400",c.style.color="white",c.style.border="none",c.style.borderRadius="3px",c.style.cursor="pointer",c.addEventListener("click",()=>{this.fixNightTexture()}),e.appendChild(c)}return t}async fixSpecularTexture(){console.log("🔧 Tentative de correction de la texture earth_specularmap.tif");try{const t=await It.loadTexture("earth_specularmap.jpg",!1);this.globe&&this.globe.material&&this.globe.material.uniforms&&(this.globe.material.uniforms.specularMap.value=t,console.log("✅ Texture specular corrigée avec succès!"),this.showTextureStatus())}catch(t){console.error("❌ Échec de la correction de la texture specular:",t)}}async fixNightTexture(){console.log("🔧 Tentative de correction de la texture night_lights.jpg");const t=["earth-night.jpg","earth_nightlights.jpg","night_lights.jpg"];for(const e of t)try{const n=await It.loadTexture(e,!1);if(this.globe&&this.globe.material&&this.globe.material.uniforms){this.globe.material.uniforms.nightTexture.value=n,console.log(`✅ Texture de nuit corrigée avec succès via ${e}!`),this.showTextureStatus();return}}catch(n){console.warn(`Échec du chargement de ${e}:`,n)}console.error("❌ Échec de la correction de la texture de nuit")}}async function yx(){const s=[{name:"Paris",lat:48.8566,lng:2.3522,type:"capital",description:"Capitale de la France"},{name:"New York",lat:40.7128,lng:-74.006,type:"city",description:"La ville qui ne dort jamais"},{name:"Tokyo",lat:35.6762,lng:139.6503,type:"capital",description:"Capitale du Japon"},{name:"Sydney",lat:-33.8688,lng:151.2093,type:"city",description:"Plus grande ville d'Australie"},{name:"Le Caire",lat:30.0444,lng:31.2357,type:"capital",description:"Capitale de l'Égypte"},{name:"Rio de Janeiro",lat:-22.9068,lng:-43.1729,type:"city",description:"Ville célèbre du Brésil"},{name:"Moscou",lat:55.7558,lng:37.6173,type:"capital",description:"Capitale de la Russie"},{name:"Pékin",lat:39.9042,lng:116.4074,type:"capital",description:"Capitale de la Chine"},{name:"Cape Town",lat:-33.9249,lng:18.4241,type:"city",description:"Ville d'Afrique du Sud"},{name:"Mexico",lat:19.4326,lng:-99.1332,type:"capital",description:"Capitale du Mexique"}],t=[{name:"Parc national de Yellowstone",lat:44.428,lng:-110.5885,type:"event",description:"Premier parc national au monde"},{name:"Grande barrière de corail",lat:-18.2871,lng:147.6992,type:"event",description:"Plus grand récif corallien du monde"},{name:"Mont Everest",lat:27.9881,lng:86.925,type:"event",description:"Plus haute montagne du monde"},{name:"Grand Canyon",lat:36.1069,lng:-112.1126,type:"event",description:"Formation géologique spectaculaire"},{name:"Machu Picchu",lat:-13.1631,lng:-72.545,type:"event",description:"Ancienne cité inca"}];return{points:[...s,...t]}}class Mx{constructor(){this.cdnTextures=It.cdnTextures,this.downloadQueue=[]}createDownloadUI(){const t=document.createElement("button");t.textContent="📥 Télécharger les textures",t.style.position="absolute",t.style.top="20px",t.style.left="20px",t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.color="white",t.style.border="none",t.style.borderRadius="5px",t.style.padding="10px 15px",t.style.fontSize="14px",t.style.cursor="pointer",t.style.zIndex="1000",t.addEventListener("click",()=>{this.showDownloadInstructions()}),document.body.appendChild(t)}showDownloadInstructions(){const t=document.createElement("div");t.style.position="fixed",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.width="80%",t.style.maxWidth="800px",t.style.maxHeight="80vh",t.style.backgroundColor="#333",t.style.color="white",t.style.borderRadius="10px",t.style.boxShadow="0 5px 15px rgba(0,0,0,0.5)",t.style.padding="20px",t.style.zIndex="1001",t.style.overflowY="auto";const e=document.createElement("h2");e.textContent="Instructions de téléchargement des textures",e.style.marginTop="0",t.appendChild(e);const n=document.createElement("div");n.innerHTML=`
      <p>Pour télécharger les textures nécessaires au globe, suivez ces étapes:</p>
      <ol>
        <li>Créez un dossier <code>assets/textures</code> à la racine du projet s'il n'existe pas déjà</li>
        <li>Téléchargez les textures suivantes et placez-les dans ce dossier:</li>
      </ol>
    `,t.appendChild(n);const i=document.createElement("ul");i.style.listStyleType="none",i.style.padding="0",i.style.marginBottom="20px",Object.entries(this.cdnTextures).forEach(([c,h])=>{const u=document.createElement("li");u.style.marginBottom="10px",u.style.padding="10px",u.style.backgroundColor="rgba(255,255,255,0.1)",u.style.borderRadius="5px",u.innerHTML=`
        <div><strong>${c}</strong></div>
        <div style="word-break: break-all; margin: 5px 0;"><a href="${h}" target="_blank" style="color: #4db8ff;">${h}</a></div>
        <button class="download-btn" data-name="${c}" data-url="${h}" style="background-color: #4CAF50; border: none; color: white; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Télécharger</button>
      `,i.appendChild(u)}),t.appendChild(i);const r=document.createElement("button");r.textContent="Télécharger toutes les textures (ZIP)",r.style.backgroundColor="#4CAF50",r.style.color="white",r.style.border="none",r.style.padding="10px 15px",r.style.borderRadius="5px",r.style.cursor="pointer",r.style.marginBottom="20px",r.style.width="100%",r.addEventListener("click",()=>{this.generateTextureScript()}),t.appendChild(r);const a=document.createElement("div");a.style.backgroundColor="rgba(255, 200, 0, 0.2)",a.style.padding="10px",a.style.borderRadius="5px",a.style.marginBottom="20px",a.innerHTML=`
      <h3 style="margin-top: 0;">⚠️ Avertissement CORS</h3>
      <p>Certaines textures peuvent être bloquées par la politique CORS lorsqu'elles sont chargées depuis des domaines externes. 
      C'est pourquoi il est recommandé de les télécharger et de les utiliser localement.</p>
    `,t.appendChild(a);const o=document.createElement("button");o.textContent="Fermer",o.style.backgroundColor="#f44336",o.style.color="white",o.style.border="none",o.style.padding="10px 15px",o.style.borderRadius="5px",o.style.cursor="pointer",o.style.float="right",o.addEventListener("click",()=>{document.body.removeChild(t),document.body.removeChild(l)}),t.appendChild(o);const l=document.createElement("div");l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.backgroundColor="rgba(0, 0, 0, 0.7)",l.style.zIndex="1000",document.body.appendChild(l),document.body.appendChild(t),document.querySelectorAll(".download-btn").forEach(c=>{c.addEventListener("click",h=>{const u=h.target.getAttribute("data-name"),d=h.target.getAttribute("data-url");this.downloadTexture(d,u)})})}downloadTexture(t,e){const n=document.createElement("a");n.href=t,n.download=e,n.target="_blank",n.rel="noopener noreferrer",document.body.appendChild(n),n.click(),document.body.removeChild(n),console.log(`Téléchargement de ${e} depuis ${t}`)}generateTextureScript(){let t=`#!/bin/bash

`;t+=`# Script de téléchargement des textures pour le globe
`,t+=`# Créé automatiquement par TextureDownloader.js

`,t+=`# Créer le répertoire textures s'il n'existe pas
`,t+=`mkdir -p assets/textures

`,t+=`# Télécharger les textures
`,t+=`echo "Téléchargement des textures..."

`,Object.entries(this.cdnTextures).forEach(([o,l])=>{t+=`echo "Téléchargement de ${o}..."
`,t+=`curl -L "${l}" -o "assets/textures/${o}"
`}),t+=`
echo "Téléchargement terminé!"
`;const e=new Blob([t],{type:"text/plain"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download="download_textures.sh",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(n.href),console.log("Script de téléchargement généré");let i=`@echo off

`;i+=`REM Script de téléchargement des textures pour le globe
`,i+=`REM Créé automatiquement par TextureDownloader.js

`,i+=`REM Créer le répertoire textures s'il n'existe pas
`,i+=`if not exist assets\\textures mkdir assets\\textures

`,i+=`REM Télécharger les textures
`,i+=`echo Téléchargement des textures...

`,Object.entries(this.cdnTextures).forEach(([o,l])=>{i+=`echo Téléchargement de ${o}...
`,i+=`curl -L "${l}" -o "assets\\textures\\${o}"
`}),i+=`
echo Téléchargement terminé!
`,i+=`pause
`;const r=new Blob([i],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(r),a.download="download_textures.bat",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href),console.log("Script de téléchargement Windows généré")}}const Sx=new Mx;typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{Sx.createDownloadUI()});document.addEventListener("DOMContentLoaded",async()=>{const s=document.getElementById("globe-container"),t=document.getElementById("loading");console.log("Chemin d'accès attendu pour les textures:",new URL("./assets/textures/",window.location.href).href);try{It.preferProceduralFallbacks=!1;const n=await(async()=>{const a="earth_daymap.jpg",o=["./assets/textures/","/assets/textures/","../assets/textures/","assets/textures/"];console.log("Vérification de l'accès aux textures locales...");for(const l of o)try{if((await fetch(`${l}${a}`,{method:"HEAD"})).ok)return console.log(`✅ Textures accessibles via le chemin: ${l}`),l}catch{console.log(`❌ Échec d'accès via: ${l}`)}return console.warn("⚠️ Aucun chemin d'accès aux textures n'a fonctionné!"),null})();n&&It.baseUrls.unshift(n);const i=await yx(),r=new vx(s,i);await r.init(),r.animate(),t.style.opacity=0,setTimeout(()=>{t.style.display="none"},500),Ne.checkCachedTextures(),Ex(r)}catch(e){console.error("Erreur lors de l'initialisation du globe:",e),t.textContent="Erreur lors du chargement. Veuillez réessayer."}});function Ex(s){const t=document.getElementById("show-sun"),e=document.getElementById("show-moon"),n=document.getElementById("show-stars");t.addEventListener("change",i=>{s.sun&&(s.sun.visible=i.target.checked)}),e.addEventListener("change",i=>{s.moon&&(s.moon.visible=i.target.checked)}),n.addEventListener("change",i=>{s.skybox&&(s.skybox.visible=i.target.checked)})}
