const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Index-Ch4vQ309.js","assets/events-BflThZcZ.js","assets/Index-cS1JTKnD.css","assets/Auth-IshJw7ph.js","assets/Auth-Dnp2YNq1.css","assets/Calendar-DTmpDlV8.js","assets/Calendar-D49CX5e5.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var xl={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var WE=xl.exports,Nd;function zE(){return Nd||(Nd=1,(function(t,e){(function(n,s){t.exports=s()})(WE,function(){const n=new Map,s={set(m,l,f){n.has(m)||n.set(m,new Map);const y=n.get(m);y.has(l)||y.size===0?y.set(l,f):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`)},get:(m,l)=>n.has(m)&&n.get(m).get(l)||null,remove(m,l){if(!n.has(m))return;const f=n.get(m);f.delete(l),f.size===0&&n.delete(m)}},r="transitionend",i=m=>(m&&window.CSS&&window.CSS.escape&&(m=m.replace(/#([^\s"#']+)/g,(l,f)=>`#${CSS.escape(f)}`)),m),a=m=>m==null?`${m}`:Object.prototype.toString.call(m).match(/\s([a-z]+)/i)[1].toLowerCase(),c=m=>{m.dispatchEvent(new Event(r))},u=m=>!(!m||typeof m!="object")&&(m.jquery!==void 0&&(m=m[0]),m.nodeType!==void 0),d=m=>u(m)?m.jquery?m[0]:m:typeof m=="string"&&m.length>0?document.querySelector(i(m)):null,g=m=>{if(!u(m)||m.getClientRects().length===0)return!1;const l=getComputedStyle(m).getPropertyValue("visibility")==="visible",f=m.closest("details:not([open])");if(!f)return l;if(f!==m){const y=m.closest("summary");if(y&&y.parentNode!==f||y===null)return!1}return l},_=m=>!m||m.nodeType!==Node.ELEMENT_NODE||!!m.classList.contains("disabled")||(m.disabled!==void 0?m.disabled:m.hasAttribute("disabled")&&m.getAttribute("disabled")!=="false"),E=m=>{if(!document.documentElement.attachShadow)return null;if(typeof m.getRootNode=="function"){const l=m.getRootNode();return l instanceof ShadowRoot?l:null}return m instanceof ShadowRoot?m:m.parentNode?E(m.parentNode):null},S=()=>{},L=m=>{m.offsetHeight},q=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,G=[],J=()=>document.documentElement.dir==="rtl",K=m=>{var l;l=()=>{const f=q();if(f){const y=m.NAME,O=f.fn[y];f.fn[y]=m.jQueryInterface,f.fn[y].Constructor=m,f.fn[y].noConflict=()=>(f.fn[y]=O,m.jQueryInterface)}},document.readyState==="loading"?(G.length||document.addEventListener("DOMContentLoaded",()=>{for(const f of G)f()}),G.push(l)):l()},ee=(m,l=[],f=m)=>typeof m=="function"?m.call(...l):f,ie=(m,l,f=!0)=>{if(!f)return void ee(m);const y=(M=>{if(!M)return 0;let{transitionDuration:z,transitionDelay:ne}=window.getComputedStyle(M);const ce=Number.parseFloat(z),ue=Number.parseFloat(ne);return ce||ue?(z=z.split(",")[0],ne=ne.split(",")[0],1e3*(Number.parseFloat(z)+Number.parseFloat(ne))):0})(l)+5;let O=!1;const k=({target:M})=>{M===l&&(O=!0,l.removeEventListener(r,k),ee(m))};l.addEventListener(r,k),setTimeout(()=>{O||c(l)},y)},be=(m,l,f,y)=>{const O=m.length;let k=m.indexOf(l);return k===-1?!f&&y?m[O-1]:m[0]:(k+=f?1:-1,y&&(k=(k+O)%O),m[Math.max(0,Math.min(k,O-1))])},Ve=/[^.]*(?=\..*)\.|.*/,C=/\..*/,b=/::\d+$/,I={};let P=1;const R={mouseenter:"mouseover",mouseleave:"mouseout"},D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(m,l){return l&&`${l}::${P++}`||m.uidEvent||P++}function lt(m){const l=T(m);return m.uidEvent=l,I[l]=I[l]||{},I[l]}function Ft(m,l,f=null){return Object.values(m).find(y=>y.callable===l&&y.delegationSelector===f)}function ct(m,l,f){const y=typeof l=="string",O=y?f:l||f;let k=En(m);return D.has(k)||(k=m),[y,O,k]}function je(m,l,f,y,O){if(typeof l!="string"||!m)return;let[k,M,z]=ct(l,f,y);l in R&&(M=(Te=>function(we){if(!we.relatedTarget||we.relatedTarget!==we.delegateTarget&&!we.delegateTarget.contains(we.relatedTarget))return Te.call(this,we)})(M));const ne=lt(m),ce=ne[z]||(ne[z]={}),ue=Ft(ce,M,k?f:null);if(ue)return void(ue.oneOff=ue.oneOff&&O);const le=T(M,l.replace(Ve,"")),Ce=k?(function(ye,Te,we){return function Ie(Xe){const nt=ye.querySelectorAll(Te);for(let{target:De}=Xe;De&&De!==this;De=De.parentNode)for(const $e of nt)if($e===De)return gt(Xe,{delegateTarget:De}),Ie.oneOff&&H.off(ye,Xe.type,Te,we),we.apply(De,[Xe])}})(m,f,M):(function(ye,Te){return function we(Ie){return gt(Ie,{delegateTarget:ye}),we.oneOff&&H.off(ye,Ie.type,Te),Te.apply(ye,[Ie])}})(m,M);Ce.delegationSelector=k?f:null,Ce.callable=M,Ce.oneOff=O,Ce.uidEvent=le,ce[le]=Ce,m.addEventListener(z,Ce,k)}function Oe(m,l,f,y,O){const k=Ft(l[f],y,O);k&&(m.removeEventListener(f,k,!!O),delete l[f][k.uidEvent])}function zt(m,l,f,y){const O=l[f]||{};for(const[k,M]of Object.entries(O))k.includes(y)&&Oe(m,l,f,M.callable,M.delegationSelector)}function En(m){return m=m.replace(C,""),R[m]||m}const H={on(m,l,f,y){je(m,l,f,y,!1)},one(m,l,f,y){je(m,l,f,y,!0)},off(m,l,f,y){if(typeof l!="string"||!m)return;const[O,k,M]=ct(l,f,y),z=M!==l,ne=lt(m),ce=ne[M]||{},ue=l.startsWith(".");if(k===void 0){if(ue)for(const le of Object.keys(ne))zt(m,ne,le,l.slice(1));for(const[le,Ce]of Object.entries(ce)){const ye=le.replace(b,"");z&&!l.includes(ye)||Oe(m,ne,M,Ce.callable,Ce.delegationSelector)}}else{if(!Object.keys(ce).length)return;Oe(m,ne,M,k,O?f:null)}},trigger(m,l,f){if(typeof l!="string"||!m)return null;const y=q();let O=null,k=!0,M=!0,z=!1;l!==En(l)&&y&&(O=y.Event(l,f),y(m).trigger(O),k=!O.isPropagationStopped(),M=!O.isImmediatePropagationStopped(),z=O.isDefaultPrevented());const ne=gt(new Event(l,{bubbles:k,cancelable:!0}),f);return z&&ne.preventDefault(),M&&m.dispatchEvent(ne),ne.defaultPrevented&&O&&O.preventDefault(),ne}};function gt(m,l={}){for(const[f,y]of Object.entries(l))try{m[f]=y}catch{Object.defineProperty(m,f,{configurable:!0,get:()=>y})}return m}function Pn(m){if(m==="true")return!0;if(m==="false")return!1;if(m===Number(m).toString())return Number(m);if(m===""||m==="null")return null;if(typeof m!="string")return m;try{return JSON.parse(decodeURIComponent(m))}catch{return m}}function an(m){return m.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const mt={setDataAttribute(m,l,f){m.setAttribute(`data-bs-${an(l)}`,f)},removeDataAttribute(m,l){m.removeAttribute(`data-bs-${an(l)}`)},getDataAttributes(m){if(!m)return{};const l={},f=Object.keys(m.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of f){let O=y.replace(/^bs/,"");O=O.charAt(0).toLowerCase()+O.slice(1),l[O]=Pn(m.dataset[y])}return l},getDataAttribute:(m,l)=>Pn(m.getAttribute(`data-bs-${an(l)}`))};class ut{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,f){const y=u(f)?mt.getDataAttribute(f,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...u(f)?mt.getDataAttributes(f):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,f=this.constructor.DefaultType){for(const[y,O]of Object.entries(f)){const k=l[y],M=u(k)?"element":a(k);if(!new RegExp(O).test(M))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${M}" but expected type "${O}".`)}}}class U extends ut{constructor(l,f){super(),(l=d(l))&&(this._element=l,this._config=this._getConfig(f),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),H.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,f,y=!0){ie(l,f,y)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return s.get(d(l),this.DATA_KEY)}static getOrCreateInstance(l,f={}){return this.getInstance(l)||new this(l,typeof f=="object"?f:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const ae=m=>{let l=m.getAttribute("data-bs-target");if(!l||l==="#"){let f=m.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),l=f&&f!=="#"?f.trim():null}return l?l.split(",").map(f=>i(f)).join(","):null},F={find:(m,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,m)),findOne:(m,l=document.documentElement)=>Element.prototype.querySelector.call(l,m),children:(m,l)=>[].concat(...m.children).filter(f=>f.matches(l)),parents(m,l){const f=[];let y=m.parentNode.closest(l);for(;y;)f.push(y),y=y.parentNode.closest(l);return f},prev(m,l){let f=m.previousElementSibling;for(;f;){if(f.matches(l))return[f];f=f.previousElementSibling}return[]},next(m,l){let f=m.nextElementSibling;for(;f;){if(f.matches(l))return[f];f=f.nextElementSibling}return[]},focusableChildren(m){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(f=>`${f}:not([tabindex^="-"])`).join(",");return this.find(l,m).filter(f=>!_(f)&&g(f))},getSelectorFromElement(m){const l=ae(m);return l&&F.findOne(l)?l:null},getElementFromSelector(m){const l=ae(m);return l?F.findOne(l):null},getMultipleElementsFromSelector(m){const l=ae(m);return l?F.find(l):[]}},fe=(m,l="hide")=>{const f=`click.dismiss${m.EVENT_KEY}`,y=m.NAME;H.on(document,f,`[data-bs-dismiss="${y}"]`,function(O){if(["A","AREA"].includes(this.tagName)&&O.preventDefault(),_(this))return;const k=F.getElementFromSelector(this)||this.closest(`.${y}`);m.getOrCreateInstance(k)[l]()})},ke=".bs.alert",w=`close${ke}`,A=`closed${ke}`;class N extends U{static get NAME(){return"alert"}close(){if(H.trigger(this._element,w).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),H.trigger(this._element,A),this.dispose()}static jQueryInterface(l){return this.each(function(){const f=N.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}fe(N,"close"),K(N);const B='[data-bs-toggle="button"]';class $ extends U{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const f=$.getOrCreateInstance(this);l==="toggle"&&f[l]()})}}H.on(document,"click.bs.button.data-api",B,m=>{m.preventDefault();const l=m.target.closest(B);$.getOrCreateInstance(l).toggle()}),K($);const j=".bs.swipe",se=`touchstart${j}`,Y=`touchmove${j}`,Q=`touchend${j}`,X=`pointerdown${j}`,ge=`pointerup${j}`,oe={endCallback:null,leftCallback:null,rightCallback:null},de={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class pe extends ut{constructor(l,f){super(),this._element=l,l&&pe.isSupported()&&(this._config=this._getConfig(f),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return oe}static get DefaultType(){return de}static get NAME(){return"swipe"}dispose(){H.off(this._element,j)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),ee(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const f=l/this._deltaX;this._deltaX=0,f&&ee(f>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(H.on(this._element,X,l=>this._start(l)),H.on(this._element,ge,l=>this._end(l)),this._element.classList.add("pointer-event")):(H.on(this._element,se,l=>this._start(l)),H.on(this._element,Y,l=>this._move(l)),H.on(this._element,Q,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ee=".bs.carousel",Be=".data-api",Me="ArrowLeft",Nt="ArrowRight",ht="next",wt="prev",bt="left",Gt="right",ir=`slide${Ee}`,_t=`slid${Ee}`,Tt=`keydown${Ee}`,qr=`mouseenter${Ee}`,Ps=`mouseleave${Ee}`,tl=`dragstart${Ee}`,Wr=`load${Ee}${Be}`,nl=`click${Ee}${Be}`,Dt="carousel",zr="active",or=".active",ar=".carousel-item",ru=or+ar,iu={[Me]:Gt,[Nt]:bt},lr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ou={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class cr extends U{constructor(l,f){super(l,f),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=F.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Dt&&this.cycle()}static get Default(){return lr}static get DefaultType(){return ou}static get NAME(){return"carousel"}next(){this._slide(ht)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(wt)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?H.one(this._element,_t,()=>this.cycle()):this.cycle())}to(l){const f=this._getItems();if(l>f.length-1||l<0)return;if(this._isSliding)return void H.one(this._element,_t,()=>this.to(l));const y=this._getItemIndex(this._getActive());if(y===l)return;const O=l>y?ht:wt;this._slide(O,f[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&H.on(this._element,Tt,l=>this._keydown(l)),this._config.pause==="hover"&&(H.on(this._element,qr,()=>this.pause()),H.on(this._element,Ps,()=>this._maybeEnableCycle())),this._config.touch&&pe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const f of F.find(".carousel-item img",this._element))H.on(f,tl,y=>y.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(bt)),rightCallback:()=>this._slide(this._directionToOrder(Gt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new pe(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const f=iu[l.key];f&&(l.preventDefault(),this._slide(this._directionToOrder(f)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const f=F.findOne(or,this._indicatorsElement);f.classList.remove(zr),f.removeAttribute("aria-current");const y=F.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);y&&(y.classList.add(zr),y.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const f=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=f||this._config.defaultInterval}_slide(l,f=null){if(this._isSliding)return;const y=this._getActive(),O=l===ht,k=f||be(this._getItems(),y,O,this._config.wrap);if(k===y)return;const M=this._getItemIndex(k),z=le=>H.trigger(this._element,le,{relatedTarget:k,direction:this._orderToDirection(l),from:this._getItemIndex(y),to:M});if(z(ir).defaultPrevented||!y||!k)return;const ne=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(M),this._activeElement=k;const ce=O?"carousel-item-start":"carousel-item-end",ue=O?"carousel-item-next":"carousel-item-prev";k.classList.add(ue),L(k),y.classList.add(ce),k.classList.add(ce),this._queueCallback(()=>{k.classList.remove(ce,ue),k.classList.add(zr),y.classList.remove(zr,ue,ce),this._isSliding=!1,z(_t)},y,this._isAnimated()),ne&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return F.findOne(ru,this._element)}_getItems(){return F.find(ar,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return J()?l===bt?wt:ht:l===bt?ht:wt}_orderToDirection(l){return J()?l===wt?bt:Gt:l===wt?Gt:bt}static jQueryInterface(l){return this.each(function(){const f=cr.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}}else f.to(l)})}}H.on(document,nl,"[data-bs-slide], [data-bs-slide-to]",function(m){const l=F.getElementFromSelector(this);if(!l||!l.classList.contains(Dt))return;m.preventDefault();const f=cr.getOrCreateInstance(l),y=this.getAttribute("data-bs-slide-to");return y?(f.to(y),void f._maybeEnableCycle()):mt.getDataAttribute(this,"slide")==="next"?(f.next(),void f._maybeEnableCycle()):(f.prev(),void f._maybeEnableCycle())}),H.on(window,Wr,()=>{const m=F.find('[data-bs-ride="carousel"]');for(const l of m)cr.getOrCreateInstance(l)}),K(cr);const ss=".bs.collapse",sl=`show${ss}`,rl=`shown${ss}`,Co=`hide${ss}`,Gr=`hidden${ss}`,au=`click${ss}.data-api`,On="show",Os="collapse",Kr="collapsing",Ro=`:scope .${Os} .${Os}`,Qr='[data-bs-toggle="collapse"]',il={parent:null,toggle:!0},lu={parent:"(null|element)",toggle:"boolean"};class ks extends U{constructor(l,f){super(l,f),this._isTransitioning=!1,this._triggerArray=[];const y=F.find(Qr);for(const O of y){const k=F.getSelectorFromElement(O),M=F.find(k).filter(z=>z===this._element);k!==null&&M.length&&this._triggerArray.push(O)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return il}static get DefaultType(){return lu}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(O=>O!==this._element).map(O=>ks.getOrCreateInstance(O,{toggle:!1}))),l.length&&l[0]._isTransitioning||H.trigger(this._element,sl).defaultPrevented)return;for(const O of l)O.hide();const f=this._getDimension();this._element.classList.remove(Os),this._element.classList.add(Kr),this._element.style[f]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const y=`scroll${f[0].toUpperCase()+f.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(Os,On),this._element.style[f]="",H.trigger(this._element,rl)},this._element,!0),this._element.style[f]=`${this._element[y]}px`}hide(){if(this._isTransitioning||!this._isShown()||H.trigger(this._element,Co).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,L(this._element),this._element.classList.add(Kr),this._element.classList.remove(Os,On);for(const f of this._triggerArray){const y=F.getElementFromSelector(f);y&&!this._isShown(y)&&this._addAriaAndCollapsedClass([f],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(Os),H.trigger(this._element,Gr)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(On)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=d(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Qr);for(const f of l){const y=F.getElementFromSelector(f);y&&this._addAriaAndCollapsedClass([f],this._isShown(y))}}_getFirstLevelChildren(l){const f=F.find(Ro,this._config.parent);return F.find(l,this._config.parent).filter(y=>!f.includes(y))}_addAriaAndCollapsedClass(l,f){if(l.length)for(const y of l)y.classList.toggle("collapsed",!f),y.setAttribute("aria-expanded",f)}static jQueryInterface(l){const f={};return typeof l=="string"&&/show|hide/.test(l)&&(f.toggle=!1),this.each(function(){const y=ks.getOrCreateInstance(this,f);if(typeof l=="string"){if(y[l]===void 0)throw new TypeError(`No method named "${l}"`);y[l]()}})}}H.on(document,au,Qr,function(m){(m.target.tagName==="A"||m.delegateTarget&&m.delegateTarget.tagName==="A")&&m.preventDefault();for(const l of F.getMultipleElementsFromSelector(this))ks.getOrCreateInstance(l,{toggle:!1}).toggle()}),K(ks);var Ut="top",xt="bottom",Kt="right",Rt="left",rs="auto",gn=[Ut,xt,Kt,Rt],Hn="start",ur="end",Po="clippingParents",ki="viewport",Ns="popper",Ni="reference",Xr=gn.reduce(function(m,l){return m.concat([l+"-"+Hn,l+"-"+ur])},[]),Di=[].concat(gn,[rs]).reduce(function(m,l){return m.concat([l,l+"-"+Hn,l+"-"+ur])},[]),Oo="beforeRead",ko="read",ol="afterRead",qn="beforeMain",wn="main",hr="afterMain",fr="beforeWrite",xi="write",Qe="afterWrite",Jr=[Oo,ko,ol,qn,wn,hr,fr,xi,Qe];function Qt(m){return m?(m.nodeName||"").toLowerCase():null}function Pt(m){if(m==null)return window;if(m.toString()!=="[object Window]"){var l=m.ownerDocument;return l&&l.defaultView||window}return m}function Ds(m){return m instanceof Pt(m).Element||m instanceof Element}function ln(m){return m instanceof Pt(m).HTMLElement||m instanceof HTMLElement}function No(m){return typeof ShadowRoot<"u"&&(m instanceof Pt(m).ShadowRoot||m instanceof ShadowRoot)}const Do={name:"applyStyles",enabled:!0,phase:"write",fn:function(m){var l=m.state;Object.keys(l.elements).forEach(function(f){var y=l.styles[f]||{},O=l.attributes[f]||{},k=l.elements[f];ln(k)&&Qt(k)&&(Object.assign(k.style,y),Object.keys(O).forEach(function(M){var z=O[M];z===!1?k.removeAttribute(M):k.setAttribute(M,z===!0?"":z)}))})},effect:function(m){var l=m.state,f={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,f.popper),l.styles=f,l.elements.arrow&&Object.assign(l.elements.arrow.style,f.arrow),function(){Object.keys(l.elements).forEach(function(y){var O=l.elements[y],k=l.attributes[y]||{},M=Object.keys(l.styles.hasOwnProperty(y)?l.styles[y]:f[y]).reduce(function(z,ne){return z[ne]="",z},{});ln(O)&&Qt(O)&&(Object.assign(O.style,M),Object.keys(k).forEach(function(z){O.removeAttribute(z)}))})}},requires:["computeStyles"]};function kn(m){return m.split("-")[0]}var xs=Math.max,is=Math.min,mn=Math.round;function Vi(){var m=navigator.userAgentData;return m!=null&&m.brands&&Array.isArray(m.brands)?m.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function xo(){return!/^((?!chrome|android).)*safari/i.test(Vi())}function Vs(m,l,f){l===void 0&&(l=!1),f===void 0&&(f=!1);var y=m.getBoundingClientRect(),O=1,k=1;l&&ln(m)&&(O=m.offsetWidth>0&&mn(y.width)/m.offsetWidth||1,k=m.offsetHeight>0&&mn(y.height)/m.offsetHeight||1);var M=(Ds(m)?Pt(m):window).visualViewport,z=!xo()&&f,ne=(y.left+(z&&M?M.offsetLeft:0))/O,ce=(y.top+(z&&M?M.offsetTop:0))/k,ue=y.width/O,le=y.height/k;return{width:ue,height:le,top:ce,right:ne+ue,bottom:ce+le,left:ne,x:ne,y:ce}}function Mi(m){var l=Vs(m),f=m.offsetWidth,y=m.offsetHeight;return Math.abs(l.width-f)<=1&&(f=l.width),Math.abs(l.height-y)<=1&&(y=l.height),{x:m.offsetLeft,y:m.offsetTop,width:f,height:y}}function Vo(m,l){var f=l.getRootNode&&l.getRootNode();if(m.contains(l))return!0;if(f&&No(f)){var y=l;do{if(y&&m.isSameNode(y))return!0;y=y.parentNode||y.host}while(y)}return!1}function Xt(m){return Pt(m).getComputedStyle(m)}function cu(m){return["table","td","th"].indexOf(Qt(m))>=0}function os(m){return((Ds(m)?m.ownerDocument:m.document)||window.document).documentElement}function Li(m){return Qt(m)==="html"?m:m.assignedSlot||m.parentNode||(No(m)?m.host:null)||os(m)}function Wn(m){return ln(m)&&Xt(m).position!=="fixed"?m.offsetParent:null}function Yr(m){for(var l=Pt(m),f=Wn(m);f&&cu(f)&&Xt(f).position==="static";)f=Wn(f);return f&&(Qt(f)==="html"||Qt(f)==="body"&&Xt(f).position==="static")?l:f||(function(y){var O=/firefox/i.test(Vi());if(/Trident/i.test(Vi())&&ln(y)&&Xt(y).position==="fixed")return null;var k=Li(y);for(No(k)&&(k=k.host);ln(k)&&["html","body"].indexOf(Qt(k))<0;){var M=Xt(k);if(M.transform!=="none"||M.perspective!=="none"||M.contain==="paint"||["transform","perspective"].indexOf(M.willChange)!==-1||O&&M.willChange==="filter"||O&&M.filter&&M.filter!=="none")return k;k=k.parentNode}return null})(m)||l}function Zr(m){return["top","bottom"].indexOf(m)>=0?"x":"y"}function as(m,l,f){return xs(m,is(l,f))}function Mo(m){return Object.assign({},{top:0,right:0,bottom:0,left:0},m)}function dr(m,l){return l.reduce(function(f,y){return f[y]=m,f},{})}const pr={name:"arrow",enabled:!0,phase:"main",fn:function(m){var l,f=m.state,y=m.name,O=m.options,k=f.elements.arrow,M=f.modifiersData.popperOffsets,z=kn(f.placement),ne=Zr(z),ce=[Rt,Kt].indexOf(z)>=0?"height":"width";if(k&&M){var ue=(function(Je,Ke){return Mo(typeof(Je=typeof Je=="function"?Je(Object.assign({},Ke.rects,{placement:Ke.placement})):Je)!="number"?Je:dr(Je,gn))})(O.padding,f),le=Mi(k),Ce=ne==="y"?Ut:Rt,ye=ne==="y"?xt:Kt,Te=f.rects.reference[ce]+f.rects.reference[ne]-M[ne]-f.rects.popper[ce],we=M[ne]-f.rects.reference[ne],Ie=Yr(k),Xe=Ie?ne==="y"?Ie.clientHeight||0:Ie.clientWidth||0:0,nt=Te/2-we/2,De=ue[Ce],$e=Xe-le[ce]-ue[ye],Re=Xe/2-le[ce]/2+nt,Le=as(De,Re,$e),Ge=ne;f.modifiersData[y]=((l={})[Ge]=Le,l.centerOffset=Le-Re,l)}},effect:function(m){var l=m.state,f=m.options.element,y=f===void 0?"[data-popper-arrow]":f;y!=null&&(typeof y!="string"||(y=l.elements.popper.querySelector(y)))&&Vo(l.elements.popper,y)&&(l.elements.arrow=y)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ms(m){return m.split("-")[1]}var Lo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function it(m){var l,f=m.popper,y=m.popperRect,O=m.placement,k=m.variation,M=m.offsets,z=m.position,ne=m.gpuAcceleration,ce=m.adaptive,ue=m.roundOffsets,le=m.isFixed,Ce=M.x,ye=Ce===void 0?0:Ce,Te=M.y,we=Te===void 0?0:Te,Ie=typeof ue=="function"?ue({x:ye,y:we}):{x:ye,y:we};ye=Ie.x,we=Ie.y;var Xe=M.hasOwnProperty("x"),nt=M.hasOwnProperty("y"),De=Rt,$e=Ut,Re=window;if(ce){var Le=Yr(f),Ge="clientHeight",Je="clientWidth";Le===Pt(f)&&Xt(Le=os(f)).position!=="static"&&z==="absolute"&&(Ge="scrollHeight",Je="scrollWidth"),(O===Ut||(O===Rt||O===Kt)&&k===ur)&&($e=xt,we-=(le&&Le===Re&&Re.visualViewport?Re.visualViewport.height:Le[Ge])-y.height,we*=ne?1:-1),O!==Rt&&(O!==Ut&&O!==xt||k!==ur)||(De=Kt,ye-=(le&&Le===Re&&Re.visualViewport?Re.visualViewport.width:Le[Je])-y.width,ye*=ne?1:-1)}var Ke,vt=Object.assign({position:z},ce&&Lo),bn=ue===!0?(function(Kn,cn){var Vn=Kn.x,Mn=Kn.y,ft=cn.devicePixelRatio||1;return{x:mn(Vn*ft)/ft||0,y:mn(Mn*ft)/ft||0}})({x:ye,y:we},Pt(f)):{x:ye,y:we};return ye=bn.x,we=bn.y,ne?Object.assign({},vt,((Ke={})[$e]=nt?"0":"",Ke[De]=Xe?"0":"",Ke.transform=(Re.devicePixelRatio||1)<=1?"translate("+ye+"px, "+we+"px)":"translate3d("+ye+"px, "+we+"px, 0)",Ke)):Object.assign({},vt,((l={})[$e]=nt?we+"px":"",l[De]=Xe?ye+"px":"",l.transform="",l))}const Fo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(m){var l=m.state,f=m.options,y=f.gpuAcceleration,O=y===void 0||y,k=f.adaptive,M=k===void 0||k,z=f.roundOffsets,ne=z===void 0||z,ce={placement:kn(l.placement),variation:Ms(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:O,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,it(Object.assign({},ce,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:M,roundOffsets:ne})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,it(Object.assign({},ce,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ne})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var Fi={passive:!0};const Ui={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(m){var l=m.state,f=m.instance,y=m.options,O=y.scroll,k=O===void 0||O,M=y.resize,z=M===void 0||M,ne=Pt(l.elements.popper),ce=[].concat(l.scrollParents.reference,l.scrollParents.popper);return k&&ce.forEach(function(ue){ue.addEventListener("scroll",f.update,Fi)}),z&&ne.addEventListener("resize",f.update,Fi),function(){k&&ce.forEach(function(ue){ue.removeEventListener("scroll",f.update,Fi)}),z&&ne.removeEventListener("resize",f.update,Fi)}},data:{}};var al={left:"right",right:"left",bottom:"top",top:"bottom"};function ei(m){return m.replace(/left|right|bottom|top/g,function(l){return al[l]})}var ji={start:"end",end:"start"};function zn(m){return m.replace(/start|end/g,function(l){return ji[l]})}function Bi(m){var l=Pt(m);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function Uo(m){return Vs(os(m)).left+Bi(m).scrollLeft}function Ls(m){var l=Xt(m),f=l.overflow,y=l.overflowX,O=l.overflowY;return/auto|scroll|overlay|hidden/.test(f+O+y)}function jo(m){return["html","body","#document"].indexOf(Qt(m))>=0?m.ownerDocument.body:ln(m)&&Ls(m)?m:jo(Li(m))}function Fs(m,l){var f;l===void 0&&(l=[]);var y=jo(m),O=y===((f=m.ownerDocument)==null?void 0:f.body),k=Pt(y),M=O?[k].concat(k.visualViewport||[],Ls(y)?y:[]):y,z=l.concat(M);return O?z:z.concat(Fs(Li(M)))}function gr(m){return Object.assign({},m,{left:m.x,top:m.y,right:m.x+m.width,bottom:m.y+m.height})}function Bo(m,l,f){return l===ki?gr((function(y,O){var k=Pt(y),M=os(y),z=k.visualViewport,ne=M.clientWidth,ce=M.clientHeight,ue=0,le=0;if(z){ne=z.width,ce=z.height;var Ce=xo();(Ce||!Ce&&O==="fixed")&&(ue=z.offsetLeft,le=z.offsetTop)}return{width:ne,height:ce,x:ue+Uo(y),y:le}})(m,f)):Ds(l)?(function(y,O){var k=Vs(y,!1,O==="fixed");return k.top=k.top+y.clientTop,k.left=k.left+y.clientLeft,k.bottom=k.top+y.clientHeight,k.right=k.left+y.clientWidth,k.width=y.clientWidth,k.height=y.clientHeight,k.x=k.left,k.y=k.top,k})(l,f):gr((function(y){var O,k=os(y),M=Bi(y),z=(O=y.ownerDocument)==null?void 0:O.body,ne=xs(k.scrollWidth,k.clientWidth,z?z.scrollWidth:0,z?z.clientWidth:0),ce=xs(k.scrollHeight,k.clientHeight,z?z.scrollHeight:0,z?z.clientHeight:0),ue=-M.scrollLeft+Uo(y),le=-M.scrollTop;return Xt(z||k).direction==="rtl"&&(ue+=xs(k.clientWidth,z?z.clientWidth:0)-ne),{width:ne,height:ce,x:ue,y:le}})(os(m)))}function ti(m){var l,f=m.reference,y=m.element,O=m.placement,k=O?kn(O):null,M=O?Ms(O):null,z=f.x+f.width/2-y.width/2,ne=f.y+f.height/2-y.height/2;switch(k){case Ut:l={x:z,y:f.y-y.height};break;case xt:l={x:z,y:f.y+f.height};break;case Kt:l={x:f.x+f.width,y:ne};break;case Rt:l={x:f.x-y.width,y:ne};break;default:l={x:f.x,y:f.y}}var ce=k?Zr(k):null;if(ce!=null){var ue=ce==="y"?"height":"width";switch(M){case Hn:l[ce]=l[ce]-(f[ue]/2-y[ue]/2);break;case ur:l[ce]=l[ce]+(f[ue]/2-y[ue]/2)}}return l}function mr(m,l){l===void 0&&(l={});var f=l,y=f.placement,O=y===void 0?m.placement:y,k=f.strategy,M=k===void 0?m.strategy:k,z=f.boundary,ne=z===void 0?Po:z,ce=f.rootBoundary,ue=ce===void 0?ki:ce,le=f.elementContext,Ce=le===void 0?Ns:le,ye=f.altBoundary,Te=ye!==void 0&&ye,we=f.padding,Ie=we===void 0?0:we,Xe=Mo(typeof Ie!="number"?Ie:dr(Ie,gn)),nt=Ce===Ns?Ni:Ns,De=m.rects.popper,$e=m.elements[Te?nt:Ce],Re=(function(cn,Vn,Mn,ft){var ds=Vn==="clippingParents"?(function(Ye){var un=Fs(Li(Ye)),Ln=["absolute","fixed"].indexOf(Xt(Ye).position)>=0&&ln(Ye)?Yr(Ye):Ye;return Ds(Ln)?un.filter(function(Er){return Ds(Er)&&Vo(Er,Ln)&&Qt(Er)!=="body"}):[]})(cn):[].concat(Vn),ps=[].concat(ds,[Mn]),Gi=ps[0],Vt=ps.reduce(function(Ye,un){var Ln=Bo(cn,un,ft);return Ye.top=xs(Ln.top,Ye.top),Ye.right=is(Ln.right,Ye.right),Ye.bottom=is(Ln.bottom,Ye.bottom),Ye.left=xs(Ln.left,Ye.left),Ye},Bo(cn,Gi,ft));return Vt.width=Vt.right-Vt.left,Vt.height=Vt.bottom-Vt.top,Vt.x=Vt.left,Vt.y=Vt.top,Vt})(Ds($e)?$e:$e.contextElement||os(m.elements.popper),ne,ue,M),Le=Vs(m.elements.reference),Ge=ti({reference:Le,element:De,placement:O}),Je=gr(Object.assign({},De,Ge)),Ke=Ce===Ns?Je:Le,vt={top:Re.top-Ke.top+Xe.top,bottom:Ke.bottom-Re.bottom+Xe.bottom,left:Re.left-Ke.left+Xe.left,right:Ke.right-Re.right+Xe.right},bn=m.modifiersData.offset;if(Ce===Ns&&bn){var Kn=bn[O];Object.keys(vt).forEach(function(cn){var Vn=[Kt,xt].indexOf(cn)>=0?1:-1,Mn=[Ut,xt].indexOf(cn)>=0?"y":"x";vt[cn]+=Kn[Mn]*Vn})}return vt}function ll(m,l){l===void 0&&(l={});var f=l,y=f.placement,O=f.boundary,k=f.rootBoundary,M=f.padding,z=f.flipVariations,ne=f.allowedAutoPlacements,ce=ne===void 0?Di:ne,ue=Ms(y),le=ue?z?Xr:Xr.filter(function(Te){return Ms(Te)===ue}):gn,Ce=le.filter(function(Te){return ce.indexOf(Te)>=0});Ce.length===0&&(Ce=le);var ye=Ce.reduce(function(Te,we){return Te[we]=mr(m,{placement:we,boundary:O,rootBoundary:k,padding:M})[kn(we)],Te},{});return Object.keys(ye).sort(function(Te,we){return ye[Te]-ye[we]})}const _r={name:"flip",enabled:!0,phase:"main",fn:function(m){var l=m.state,f=m.options,y=m.name;if(!l.modifiersData[y]._skip){for(var O=f.mainAxis,k=O===void 0||O,M=f.altAxis,z=M===void 0||M,ne=f.fallbackPlacements,ce=f.padding,ue=f.boundary,le=f.rootBoundary,Ce=f.altBoundary,ye=f.flipVariations,Te=ye===void 0||ye,we=f.allowedAutoPlacements,Ie=l.options.placement,Xe=kn(Ie),nt=ne||(Xe!==Ie&&Te?(function(Ye){if(kn(Ye)===rs)return[];var un=ei(Ye);return[zn(Ye),un,zn(un)]})(Ie):[ei(Ie)]),De=[Ie].concat(nt).reduce(function(Ye,un){return Ye.concat(kn(un)===rs?ll(l,{placement:un,boundary:ue,rootBoundary:le,padding:ce,flipVariations:Te,allowedAutoPlacements:we}):un)},[]),$e=l.rects.reference,Re=l.rects.popper,Le=new Map,Ge=!0,Je=De[0],Ke=0;Ke<De.length;Ke++){var vt=De[Ke],bn=kn(vt),Kn=Ms(vt)===Hn,cn=[Ut,xt].indexOf(bn)>=0,Vn=cn?"width":"height",Mn=mr(l,{placement:vt,boundary:ue,rootBoundary:le,altBoundary:Ce,padding:ce}),ft=cn?Kn?Kt:Rt:Kn?xt:Ut;$e[Vn]>Re[Vn]&&(ft=ei(ft));var ds=ei(ft),ps=[];if(k&&ps.push(Mn[bn]<=0),z&&ps.push(Mn[ft]<=0,Mn[ds]<=0),ps.every(function(Ye){return Ye})){Je=vt,Ge=!1;break}Le.set(vt,ps)}if(Ge)for(var Gi=function(Ye){var un=De.find(function(Ln){var Er=Le.get(Ln);if(Er)return Er.slice(0,Ye).every(function(vl){return vl})});if(un)return Je=un,"break"},Vt=Te?3:1;Vt>0&&Gi(Vt)!=="break";Vt--);l.placement!==Je&&(l.modifiersData[y]._skip=!0,l.placement=Je,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function $o(m,l,f){return f===void 0&&(f={x:0,y:0}),{top:m.top-l.height-f.y,right:m.right-l.width+f.x,bottom:m.bottom-l.height+f.y,left:m.left-l.width-f.x}}function Ho(m){return[Ut,Kt,xt,Rt].some(function(l){return m[l]>=0})}const $i={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(m){var l=m.state,f=m.name,y=l.rects.reference,O=l.rects.popper,k=l.modifiersData.preventOverflow,M=mr(l,{elementContext:"reference"}),z=mr(l,{altBoundary:!0}),ne=$o(M,y),ce=$o(z,O,k),ue=Ho(ne),le=Ho(ce);l.modifiersData[f]={referenceClippingOffsets:ne,popperEscapeOffsets:ce,isReferenceHidden:ue,hasPopperEscaped:le},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":ue,"data-popper-escaped":le})}},Hi={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(m){var l=m.state,f=m.options,y=m.name,O=f.offset,k=O===void 0?[0,0]:O,M=Di.reduce(function(ue,le){return ue[le]=(function(Ce,ye,Te){var we=kn(Ce),Ie=[Rt,Ut].indexOf(we)>=0?-1:1,Xe=typeof Te=="function"?Te(Object.assign({},ye,{placement:Ce})):Te,nt=Xe[0],De=Xe[1];return nt=nt||0,De=(De||0)*Ie,[Rt,Kt].indexOf(we)>=0?{x:De,y:nt}:{x:nt,y:De}})(le,l.rects,k),ue},{}),z=M[l.placement],ne=z.x,ce=z.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=ne,l.modifiersData.popperOffsets.y+=ce),l.modifiersData[y]=M}},qi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(m){var l=m.state,f=m.name;l.modifiersData[f]=ti({reference:l.rects.reference,element:l.rects.popper,placement:l.placement})},data:{}},ni={name:"preventOverflow",enabled:!0,phase:"main",fn:function(m){var l=m.state,f=m.options,y=m.name,O=f.mainAxis,k=O===void 0||O,M=f.altAxis,z=M!==void 0&&M,ne=f.boundary,ce=f.rootBoundary,ue=f.altBoundary,le=f.padding,Ce=f.tether,ye=Ce===void 0||Ce,Te=f.tetherOffset,we=Te===void 0?0:Te,Ie=mr(l,{boundary:ne,rootBoundary:ce,padding:le,altBoundary:ue}),Xe=kn(l.placement),nt=Ms(l.placement),De=!nt,$e=Zr(Xe),Re=$e==="x"?"y":"x",Le=l.modifiersData.popperOffsets,Ge=l.rects.reference,Je=l.rects.popper,Ke=typeof we=="function"?we(Object.assign({},l.rects,{placement:l.placement})):we,vt=typeof Ke=="number"?{mainAxis:Ke,altAxis:Ke}:Object.assign({mainAxis:0,altAxis:0},Ke),bn=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,Kn={x:0,y:0};if(Le){if(k){var cn,Vn=$e==="y"?Ut:Rt,Mn=$e==="y"?xt:Kt,ft=$e==="y"?"height":"width",ds=Le[$e],ps=ds+Ie[Vn],Gi=ds-Ie[Mn],Vt=ye?-Je[ft]/2:0,Ye=nt===Hn?Ge[ft]:Je[ft],un=nt===Hn?-Je[ft]:-Ge[ft],Ln=l.elements.arrow,Er=ye&&Ln?Mi(Ln):{width:0,height:0},vl=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Ed=vl[Vn],wd=vl[Mn],El=as(0,Ge[ft],Er[ft]),LE=De?Ge[ft]/2-Vt-El-Ed-vt.mainAxis:Ye-El-Ed-vt.mainAxis,FE=De?-Ge[ft]/2+Vt+El+wd+vt.mainAxis:un+El+wd+vt.mainAxis,wu=l.elements.arrow&&Yr(l.elements.arrow),UE=wu?$e==="y"?wu.clientTop||0:wu.clientLeft||0:0,bd=(cn=bn?.[$e])!=null?cn:0,jE=ds+FE-bd,Td=as(ye?is(ps,ds+LE-bd-UE):ps,ds,ye?xs(Gi,jE):Gi);Le[$e]=Td,Kn[$e]=Td-ds}if(z){var Id,BE=$e==="x"?Ut:Rt,$E=$e==="x"?xt:Kt,ci=Le[Re],wl=Re==="y"?"height":"width",Ad=ci+Ie[BE],Sd=ci-Ie[$E],bu=[Ut,Rt].indexOf(Xe)!==-1,Cd=(Id=bn?.[Re])!=null?Id:0,Rd=bu?Ad:ci-Ge[wl]-Je[wl]-Cd+vt.altAxis,Pd=bu?ci+Ge[wl]+Je[wl]-Cd-vt.altAxis:Sd,Od=ye&&bu?(function(HE,qE,Tu){var kd=as(HE,qE,Tu);return kd>Tu?Tu:kd})(Rd,ci,Pd):as(ye?Rd:Ad,ci,ye?Pd:Sd);Le[Re]=Od,Kn[Re]=Od-ci}l.modifiersData[y]=Kn}},requiresIfExists:["offset"]};function cl(m,l,f){f===void 0&&(f=!1);var y,O,k=ln(l),M=ln(l)&&(function(le){var Ce=le.getBoundingClientRect(),ye=mn(Ce.width)/le.offsetWidth||1,Te=mn(Ce.height)/le.offsetHeight||1;return ye!==1||Te!==1})(l),z=os(l),ne=Vs(m,M,f),ce={scrollLeft:0,scrollTop:0},ue={x:0,y:0};return(k||!k&&!f)&&((Qt(l)!=="body"||Ls(z))&&(ce=(y=l)!==Pt(y)&&ln(y)?{scrollLeft:(O=y).scrollLeft,scrollTop:O.scrollTop}:Bi(y)),ln(l)?((ue=Vs(l,!0)).x+=l.clientLeft,ue.y+=l.clientTop):z&&(ue.x=Uo(z))),{x:ne.left+ce.scrollLeft-ue.x,y:ne.top+ce.scrollTop-ue.y,width:ne.width,height:ne.height}}function ul(m){var l=new Map,f=new Set,y=[];function O(k){f.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(M){if(!f.has(M)){var z=l.get(M);z&&O(z)}}),y.push(k)}return m.forEach(function(k){l.set(k.name,k)}),m.forEach(function(k){f.has(k.name)||O(k)}),y}var ls={placement:"bottom",modifiers:[],strategy:"absolute"};function qo(){for(var m=arguments.length,l=new Array(m),f=0;f<m;f++)l[f]=arguments[f];return!l.some(function(y){return!(y&&typeof y.getBoundingClientRect=="function")})}function si(m){m===void 0&&(m={});var l=m,f=l.defaultModifiers,y=f===void 0?[]:f,O=l.defaultOptions,k=O===void 0?ls:O;return function(M,z,ne){ne===void 0&&(ne=k);var ce,ue,le={placement:"bottom",orderedModifiers:[],options:Object.assign({},ls,k),modifiersData:{},elements:{reference:M,popper:z},attributes:{},styles:{}},Ce=[],ye=!1,Te={state:le,setOptions:function(Ie){var Xe=typeof Ie=="function"?Ie(le.options):Ie;we(),le.options=Object.assign({},k,le.options,Xe),le.scrollParents={reference:Ds(M)?Fs(M):M.contextElement?Fs(M.contextElement):[],popper:Fs(z)};var nt,De,$e=(function(Re){var Le=ul(Re);return Jr.reduce(function(Ge,Je){return Ge.concat(Le.filter(function(Ke){return Ke.phase===Je}))},[])})((nt=[].concat(y,le.options.modifiers),De=nt.reduce(function(Re,Le){var Ge=Re[Le.name];return Re[Le.name]=Ge?Object.assign({},Ge,Le,{options:Object.assign({},Ge.options,Le.options),data:Object.assign({},Ge.data,Le.data)}):Le,Re},{}),Object.keys(De).map(function(Re){return De[Re]})));return le.orderedModifiers=$e.filter(function(Re){return Re.enabled}),le.orderedModifiers.forEach(function(Re){var Le=Re.name,Ge=Re.options,Je=Ge===void 0?{}:Ge,Ke=Re.effect;if(typeof Ke=="function"){var vt=Ke({state:le,name:Le,instance:Te,options:Je});Ce.push(vt||function(){})}}),Te.update()},forceUpdate:function(){if(!ye){var Ie=le.elements,Xe=Ie.reference,nt=Ie.popper;if(qo(Xe,nt)){le.rects={reference:cl(Xe,Yr(nt),le.options.strategy==="fixed"),popper:Mi(nt)},le.reset=!1,le.placement=le.options.placement,le.orderedModifiers.forEach(function(Ke){return le.modifiersData[Ke.name]=Object.assign({},Ke.data)});for(var De=0;De<le.orderedModifiers.length;De++)if(le.reset!==!0){var $e=le.orderedModifiers[De],Re=$e.fn,Le=$e.options,Ge=Le===void 0?{}:Le,Je=$e.name;typeof Re=="function"&&(le=Re({state:le,options:Ge,name:Je,instance:Te})||le)}else le.reset=!1,De=-1}}},update:(ce=function(){return new Promise(function(Ie){Te.forceUpdate(),Ie(le)})},function(){return ue||(ue=new Promise(function(Ie){Promise.resolve().then(function(){ue=void 0,Ie(ce())})})),ue}),destroy:function(){we(),ye=!0}};if(!qo(M,z))return Te;function we(){Ce.forEach(function(Ie){return Ie()}),Ce=[]}return Te.setOptions(ne).then(function(Ie){!ye&&ne.onFirstUpdate&&ne.onFirstUpdate(Ie)}),Te}}var hl=si(),fl=si({defaultModifiers:[Ui,qi,Fo,Do]}),yr=si({defaultModifiers:[Ui,qi,Fo,Do,Hi,_r,ni,pr,$i]});const Jt=Object.freeze(Object.defineProperty({__proto__:null,afterMain:hr,afterRead:ol,afterWrite:Qe,applyStyles:Do,arrow:pr,auto:rs,basePlacements:gn,beforeMain:qn,beforeRead:Oo,beforeWrite:fr,bottom:xt,clippingParents:Po,computeStyles:Fo,createPopper:yr,createPopperBase:hl,createPopperLite:fl,detectOverflow:mr,end:ur,eventListeners:Ui,flip:_r,hide:$i,left:Rt,main:wn,modifierPhases:Jr,offset:Hi,placements:Di,popper:Ns,popperGenerator:si,popperOffsets:qi,preventOverflow:ni,read:ko,reference:Ni,right:Kt,start:Hn,top:Ut,variationPlacements:Xr,viewport:ki,write:xi},Symbol.toStringTag,{value:"Module"})),Wo="dropdown",cs=".bs.dropdown",us=".data-api",o="ArrowUp",h="ArrowDown",p=`hide${cs}`,v=`hidden${cs}`,x=`show${cs}`,V=`shown${cs}`,te=`click${cs}${us}`,Ae=`keydown${cs}${us}`,yt=`keyup${cs}${us}`,Fe="show",tt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Nn=`${tt}.${Fe}`,Dn=".dropdown-menu",hs=J()?"top-end":"top-start",fs=J()?"top-start":"top-end",Wi=J()?"bottom-end":"bottom-start",zo=J()?"bottom-start":"bottom-end",wv=J()?"left-start":"right-start",bv=J()?"right-start":"left-start",Tv={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Iv={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Gn extends U{constructor(l,f){super(l,f),this._popper=null,this._parent=this._element.parentNode,this._menu=F.next(this._element,Dn)[0]||F.prev(this._element,Dn)[0]||F.findOne(Dn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Tv}static get DefaultType(){return Iv}static get NAME(){return Wo}toggle(){return this._isShown()?this.hide():this.show()}show(){if(_(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!H.trigger(this._element,x,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const f of[].concat(...document.body.children))H.on(f,"mouseover",S);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Fe),this._element.classList.add(Fe),H.trigger(this._element,V,l)}}hide(){if(_(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!H.trigger(this._element,p,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const f of[].concat(...document.body.children))H.off(f,"mouseover",S);this._popper&&this._popper.destroy(),this._menu.classList.remove(Fe),this._element.classList.remove(Fe),this._element.setAttribute("aria-expanded","false"),mt.removeDataAttribute(this._menu,"popper"),H.trigger(this._element,v,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!u(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${Wo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(Jt===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:u(this._config.reference)?l=d(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const f=this._getPopperConfig();this._popper=yr(l,this._menu,f)}_isShown(){return this._menu.classList.contains(Fe)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return wv;if(l.classList.contains("dropstart"))return bv;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const f=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?f?fs:hs:f?zo:Wi}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(mt.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...ee(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:f}){const y=F.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(O=>g(O));y.length&&be(y,f,l===h,!y.includes(f)).focus()}static jQueryInterface(l){return this.each(function(){const f=Gn.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const f=F.find(Nn);for(const y of f){const O=Gn.getInstance(y);if(!O||O._config.autoClose===!1)continue;const k=l.composedPath(),M=k.includes(O._menu);if(k.includes(O._element)||O._config.autoClose==="inside"&&!M||O._config.autoClose==="outside"&&M||O._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const z={relatedTarget:O._element};l.type==="click"&&(z.clickEvent=l),O._completeHide(z)}}static dataApiKeydownHandler(l){const f=/input|textarea/i.test(l.target.tagName),y=l.key==="Escape",O=[o,h].includes(l.key);if(!O&&!y||f&&!y)return;l.preventDefault();const k=this.matches(tt)?this:F.prev(this,tt)[0]||F.next(this,tt)[0]||F.findOne(tt,l.delegateTarget.parentNode),M=Gn.getOrCreateInstance(k);if(O)return l.stopPropagation(),M.show(),void M._selectMenuItem(l);M._isShown()&&(l.stopPropagation(),M.hide(),k.focus())}}H.on(document,Ae,tt,Gn.dataApiKeydownHandler),H.on(document,Ae,Dn,Gn.dataApiKeydownHandler),H.on(document,te,Gn.clearMenus),H.on(document,yt,Gn.clearMenus),H.on(document,te,tt,function(m){m.preventDefault(),Gn.getOrCreateInstance(this).toggle()}),K(Gn);const $f="backdrop",Hf="show",qf=`mousedown.bs.${$f}`,Av={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Sv={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Wf extends ut{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return Av}static get DefaultType(){return Sv}static get NAME(){return $f}show(l){if(!this._config.isVisible)return void ee(l);this._append();const f=this._getElement();this._config.isAnimated&&L(f),f.classList.add(Hf),this._emulateAnimation(()=>{ee(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(Hf),this._emulateAnimation(()=>{this.dispose(),ee(l)})):ee(l)}dispose(){this._isAppended&&(H.off(this._element,qf),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=d(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),H.on(l,qf,()=>{ee(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){ie(l,this._getElement(),this._config.isAnimated)}}const dl=".bs.focustrap",Cv=`focusin${dl}`,Rv=`keydown.tab${dl}`,zf="backward",Pv={autofocus:!0,trapElement:null},Ov={autofocus:"boolean",trapElement:"element"};class Gf extends ut{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Pv}static get DefaultType(){return Ov}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),H.off(document,dl),H.on(document,Cv,l=>this._handleFocusin(l)),H.on(document,Rv,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,H.off(document,dl))}_handleFocusin(l){const{trapElement:f}=this._config;if(l.target===document||l.target===f||f.contains(l.target))return;const y=F.focusableChildren(f);y.length===0?f.focus():this._lastTabNavDirection===zf?y[y.length-1].focus():y[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?zf:"forward")}}const Kf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Qf=".sticky-top",pl="padding-right",Xf="margin-right";class uu{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,pl,f=>f+l),this._setElementAttributes(Kf,pl,f=>f+l),this._setElementAttributes(Qf,Xf,f=>f-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,pl),this._resetElementAttributes(Kf,pl),this._resetElementAttributes(Qf,Xf)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,f,y){const O=this.getWidth();this._applyManipulationCallback(l,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+O)return;this._saveInitialAttribute(k,f);const M=window.getComputedStyle(k).getPropertyValue(f);k.style.setProperty(f,`${y(Number.parseFloat(M))}px`)})}_saveInitialAttribute(l,f){const y=l.style.getPropertyValue(f);y&&mt.setDataAttribute(l,f,y)}_resetElementAttributes(l,f){this._applyManipulationCallback(l,y=>{const O=mt.getDataAttribute(y,f);O!==null?(mt.removeDataAttribute(y,f),y.style.setProperty(f,O)):y.style.removeProperty(f)})}_applyManipulationCallback(l,f){if(u(l))f(l);else for(const y of F.find(l,this._element))f(y)}}const xn=".bs.modal",kv=`hide${xn}`,Nv=`hidePrevented${xn}`,Jf=`hidden${xn}`,Yf=`show${xn}`,Dv=`shown${xn}`,xv=`resize${xn}`,Vv=`click.dismiss${xn}`,Mv=`mousedown.dismiss${xn}`,Lv=`keydown.dismiss${xn}`,Fv=`click${xn}.data-api`,Zf="modal-open",ed="show",hu="modal-static",Uv={backdrop:!0,focus:!0,keyboard:!0},jv={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ri extends U{constructor(l,f){super(l,f),this._dialog=F.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new uu,this._addEventListeners()}static get Default(){return Uv}static get DefaultType(){return jv}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||H.trigger(this._element,Yf,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Zf),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(H.trigger(this._element,kv).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ed),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){H.off(window,xn),H.off(this._dialog,xn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Wf({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Gf({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const f=F.findOne(".modal-body",this._dialog);f&&(f.scrollTop=0),L(this._element),this._element.classList.add(ed),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,H.trigger(this._element,Dv,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){H.on(this._element,Lv,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),H.on(window,xv,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),H.on(this._element,Mv,l=>{H.one(this._element,Vv,f=>{this._element===l.target&&this._element===f.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Zf),this._resetAdjustments(),this._scrollBar.reset(),H.trigger(this._element,Jf)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(H.trigger(this._element,Nv).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._element.style.overflowY;f==="hidden"||this._element.classList.contains(hu)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(hu),this._queueCallback(()=>{this._element.classList.remove(hu),this._queueCallback(()=>{this._element.style.overflowY=f},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._scrollBar.getWidth(),y=f>0;if(y&&!l){const O=J()?"paddingLeft":"paddingRight";this._element.style[O]=`${f}px`}if(!y&&l){const O=J()?"paddingRight":"paddingLeft";this._element.style[O]=`${f}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,f){return this.each(function(){const y=ri.getOrCreateInstance(this,l);if(typeof l=="string"){if(y[l]===void 0)throw new TypeError(`No method named "${l}"`);y[l](f)}})}}H.on(document,Fv,'[data-bs-toggle="modal"]',function(m){const l=F.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&m.preventDefault(),H.one(l,Yf,y=>{y.defaultPrevented||H.one(l,Jf,()=>{g(this)&&this.focus()})});const f=F.findOne(".modal.show");f&&ri.getInstance(f).hide(),ri.getOrCreateInstance(l).toggle(this)}),fe(ri),K(ri);const Us=".bs.offcanvas",td=".data-api",Bv=`load${Us}${td}`,nd="show",sd="showing",rd="hiding",id=".offcanvas.show",$v=`show${Us}`,Hv=`shown${Us}`,qv=`hide${Us}`,od=`hidePrevented${Us}`,ad=`hidden${Us}`,Wv=`resize${Us}`,zv=`click${Us}${td}`,Gv=`keydown.dismiss${Us}`,Kv={backdrop:!0,keyboard:!0,scroll:!1},Qv={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class js extends U{constructor(l,f){super(l,f),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Kv}static get DefaultType(){return Qv}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||H.trigger(this._element,$v,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new uu().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(sd),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(nd),this._element.classList.remove(sd),H.trigger(this._element,Hv,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(H.trigger(this._element,qv).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(rd),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(nd,rd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new uu().reset(),H.trigger(this._element,ad)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new Wf({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():H.trigger(this._element,od)}:null})}_initializeFocusTrap(){return new Gf({trapElement:this._element})}_addEventListeners(){H.on(this._element,Gv,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():H.trigger(this._element,od))})}static jQueryInterface(l){return this.each(function(){const f=js.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}H.on(document,zv,'[data-bs-toggle="offcanvas"]',function(m){const l=F.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),_(this))return;H.one(l,ad,()=>{g(this)&&this.focus()});const f=F.findOne(id);f&&f!==l&&js.getInstance(f).hide(),js.getOrCreateInstance(l).toggle(this)}),H.on(window,Bv,()=>{for(const m of F.find(id))js.getOrCreateInstance(m).show()}),H.on(window,Wv,()=>{for(const m of F.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(m).position!=="fixed"&&js.getOrCreateInstance(m).hide()}),fe(js),K(js);const ld={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xv=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Jv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Yv=(m,l)=>{const f=m.nodeName.toLowerCase();return l.includes(f)?!Xv.has(f)||!!Jv.test(m.nodeValue):l.filter(y=>y instanceof RegExp).some(y=>y.test(f))},Zv={allowList:ld,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},eE={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},tE={entry:"(string|element|function|null)",selector:"(string|element)"};class nE extends ut{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return Zv}static get DefaultType(){return eE}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[O,k]of Object.entries(this._config.content))this._setContent(l,k,O);const f=l.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&f.classList.add(...y.split(" ")),f}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[f,y]of Object.entries(l))super._typeCheckConfig({selector:f,entry:y},tE)}_setContent(l,f,y){const O=F.findOne(y,l);O&&((f=this._resolvePossibleFunction(f))?u(f)?this._putElementInTemplate(d(f),O):this._config.html?O.innerHTML=this._maybeSanitize(f):O.textContent=f:O.remove())}_maybeSanitize(l){return this._config.sanitize?(function(f,y,O){if(!f.length)return f;if(O&&typeof O=="function")return O(f);const k=new window.DOMParser().parseFromString(f,"text/html"),M=[].concat(...k.body.querySelectorAll("*"));for(const z of M){const ne=z.nodeName.toLowerCase();if(!Object.keys(y).includes(ne)){z.remove();continue}const ce=[].concat(...z.attributes),ue=[].concat(y["*"]||[],y[ne]||[]);for(const le of ce)Yv(le,ue)||z.removeAttribute(le.nodeName)}return k.body.innerHTML})(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return ee(l,[void 0,this])}_putElementInTemplate(l,f){if(this._config.html)return f.innerHTML="",void f.append(l);f.textContent=l.textContent}}const sE=new Set(["sanitize","allowList","sanitizeFn"]),fu="fade",gl="show",rE=".tooltip-inner",cd=".modal",ud="hide.bs.modal",Go="hover",du="focus",pu="click",iE={AUTO:"auto",TOP:"top",RIGHT:J()?"left":"right",BOTTOM:"bottom",LEFT:J()?"right":"left"},oE={allowList:ld,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},aE={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ii extends U{constructor(l,f){if(Jt===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,f),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return oE}static get DefaultType(){return aE}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(cd),ud,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=H.trigger(this._element,this.constructor.eventName("show")),f=(E(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!f)return;this._disposePopper();const y=this._getTipElement();this._element.setAttribute("aria-describedby",y.getAttribute("id"));const{container:O}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(O.append(y),H.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(y),y.classList.add(gl),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))H.on(k,"mouseover",S);this._queueCallback(()=>{H.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!H.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(gl),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))H.off(l,"mouseover",S);this._activeTrigger[pu]=!1,this._activeTrigger[du]=!1,this._activeTrigger[Go]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),H.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const f=this._getTemplateFactory(l).toHtml();if(!f)return null;f.classList.remove(fu,gl),f.classList.add(`bs-${this.constructor.NAME}-auto`);const y=(O=>{do O+=Math.floor(1e6*Math.random());while(document.getElementById(O));return O})(this.constructor.NAME).toString();return f.setAttribute("id",y),this._isAnimated()&&f.classList.add(fu),f}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new nE({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[rE]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(fu)}_isShown(){return this.tip&&this.tip.classList.contains(gl)}_createPopper(l){const f=ee(this._config.placement,[this,l,this._element]),y=iE[f.toUpperCase()];return yr(this._element,l,this._getPopperConfig(y))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_resolvePossibleFunction(l){return ee(l,[this._element,this._element])}_getPopperConfig(l){const f={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...f,...ee(this._config.popperConfig,[void 0,f])}}_setListeners(){const l=this._config.trigger.split(" ");for(const f of l)if(f==="click")H.on(this._element,this.constructor.eventName("click"),this._config.selector,y=>{const O=this._initializeOnDelegatedTarget(y);O._activeTrigger[pu]=!(O._isShown()&&O._activeTrigger[pu]),O.toggle()});else if(f!=="manual"){const y=f===Go?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),O=f===Go?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");H.on(this._element,y,this._config.selector,k=>{const M=this._initializeOnDelegatedTarget(k);M._activeTrigger[k.type==="focusin"?du:Go]=!0,M._enter()}),H.on(this._element,O,this._config.selector,k=>{const M=this._initializeOnDelegatedTarget(k);M._activeTrigger[k.type==="focusout"?du:Go]=M._element.contains(k.relatedTarget),M._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},H.on(this._element.closest(cd),ud,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,f){clearTimeout(this._timeout),this._timeout=setTimeout(l,f)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const f=mt.getDataAttributes(this._element);for(const y of Object.keys(f))sE.has(y)&&delete f[y];return l={...f,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:d(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[f,y]of Object.entries(this._config))this.constructor.Default[f]!==y&&(l[f]=y);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const f=ii.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}}K(ii);const lE=".popover-header",cE=".popover-body",uE={...ii.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},hE={...ii.DefaultType,content:"(null|string|element|function)"};class ml extends ii{static get Default(){return uE}static get DefaultType(){return hE}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[lE]:this._getTitle(),[cE]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const f=ml.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}}K(ml);const gu=".bs.scrollspy",fE=`activate${gu}`,hd=`click${gu}`,dE=`load${gu}.data-api`,zi="active",mu="[href]",fd=".nav-link",pE=`${fd}, .nav-item > ${fd}, .list-group-item`,gE={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},mE={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ko extends U{constructor(l,f){super(l,f),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return gE}static get DefaultType(){return mE}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=d(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(f=>Number.parseFloat(f))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(H.off(this._config.target,hd),H.on(this._config.target,hd,mu,l=>{const f=this._observableSections.get(l.target.hash);if(f){l.preventDefault();const y=this._rootElement||window,O=f.offsetTop-this._element.offsetTop;if(y.scrollTo)return void y.scrollTo({top:O,behavior:"smooth"});y.scrollTop=O}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(f=>this._observerCallback(f),l)}_observerCallback(l){const f=M=>this._targetLinks.get(`#${M.target.id}`),y=M=>{this._previousScrollData.visibleEntryTop=M.target.offsetTop,this._process(f(M))},O=(this._rootElement||document.documentElement).scrollTop,k=O>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=O;for(const M of l){if(!M.isIntersecting){this._activeTarget=null,this._clearActiveClass(f(M));continue}const z=M.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&z){if(y(M),!O)return}else k||z||y(M)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=F.find(mu,this._config.target);for(const f of l){if(!f.hash||_(f))continue;const y=F.findOne(decodeURI(f.hash),this._element);g(y)&&(this._targetLinks.set(decodeURI(f.hash),f),this._observableSections.set(f.hash,y))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(zi),this._activateParents(l),H.trigger(this._element,fE,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))F.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(zi);else for(const f of F.parents(l,".nav, .list-group"))for(const y of F.prev(f,pE))y.classList.add(zi)}_clearActiveClass(l){l.classList.remove(zi);const f=F.find(`${mu}.${zi}`,l);for(const y of f)y.classList.remove(zi)}static jQueryInterface(l){return this.each(function(){const f=Ko.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}H.on(window,dE,()=>{for(const m of F.find('[data-bs-spy="scroll"]'))Ko.getOrCreateInstance(m)}),K(Ko);const oi=".bs.tab",_E=`hide${oi}`,yE=`hidden${oi}`,vE=`show${oi}`,EE=`shown${oi}`,wE=`click${oi}`,bE=`keydown${oi}`,TE=`load${oi}`,IE="ArrowLeft",dd="ArrowRight",AE="ArrowUp",pd="ArrowDown",_u="Home",gd="End",ai="active",md="fade",yu="show",_d=".dropdown-toggle",vu=`:not(${_d})`,yd='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Eu=`.nav-link${vu}, .list-group-item${vu}, [role="tab"]${vu}, ${yd}`,SE=`.${ai}[data-bs-toggle="tab"], .${ai}[data-bs-toggle="pill"], .${ai}[data-bs-toggle="list"]`;class li extends U{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),H.on(this._element,bE,f=>this._keydown(f)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const f=this._getActiveElem(),y=f?H.trigger(f,_E,{relatedTarget:l}):null;H.trigger(l,vE,{relatedTarget:f}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(f,l),this._activate(l,f))}_activate(l,f){l&&(l.classList.add(ai),this._activate(F.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),H.trigger(l,EE,{relatedTarget:f})):l.classList.add(yu)},l,l.classList.contains(md)))}_deactivate(l,f){l&&(l.classList.remove(ai),l.blur(),this._deactivate(F.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),H.trigger(l,yE,{relatedTarget:f})):l.classList.remove(yu)},l,l.classList.contains(md)))}_keydown(l){if(![IE,dd,AE,pd,_u,gd].includes(l.key))return;l.stopPropagation(),l.preventDefault();const f=this._getChildren().filter(O=>!_(O));let y;if([_u,gd].includes(l.key))y=f[l.key===_u?0:f.length-1];else{const O=[dd,pd].includes(l.key);y=be(f,l.target,O,!0)}y&&(y.focus({preventScroll:!0}),li.getOrCreateInstance(y).show())}_getChildren(){return F.find(Eu,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,f){this._setAttributeIfNotExists(l,"role","tablist");for(const y of f)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const f=this._elemIsActive(l),y=this._getOuterElement(l);l.setAttribute("aria-selected",f),y!==l&&this._setAttributeIfNotExists(y,"role","presentation"),f||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const f=F.getElementFromSelector(l);f&&(this._setAttributeIfNotExists(f,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(f,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,f){const y=this._getOuterElement(l);if(!y.classList.contains("dropdown"))return;const O=(k,M)=>{const z=F.findOne(k,y);z&&z.classList.toggle(M,f)};O(_d,ai),O(".dropdown-menu",yu),y.setAttribute("aria-expanded",f)}_setAttributeIfNotExists(l,f,y){l.hasAttribute(f)||l.setAttribute(f,y)}_elemIsActive(l){return l.classList.contains(ai)}_getInnerElement(l){return l.matches(Eu)?l:F.findOne(Eu,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const f=li.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}H.on(document,wE,yd,function(m){["A","AREA"].includes(this.tagName)&&m.preventDefault(),_(this)||li.getOrCreateInstance(this).show()}),H.on(window,TE,()=>{for(const m of F.find(SE))li.getOrCreateInstance(m)}),K(li);const vr=".bs.toast",CE=`mouseover${vr}`,RE=`mouseout${vr}`,PE=`focusin${vr}`,OE=`focusout${vr}`,kE=`hide${vr}`,NE=`hidden${vr}`,DE=`show${vr}`,xE=`shown${vr}`,vd="hide",_l="show",yl="showing",VE={animation:"boolean",autohide:"boolean",delay:"number"},ME={animation:!0,autohide:!0,delay:5e3};class Qo extends U{constructor(l,f){super(l,f),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ME}static get DefaultType(){return VE}static get NAME(){return"toast"}show(){H.trigger(this._element,DE).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(vd),L(this._element),this._element.classList.add(_l,yl),this._queueCallback(()=>{this._element.classList.remove(yl),H.trigger(this._element,xE),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(H.trigger(this._element,kE).defaultPrevented||(this._element.classList.add(yl),this._queueCallback(()=>{this._element.classList.add(vd),this._element.classList.remove(yl,_l),H.trigger(this._element,NE)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_l),super.dispose()}isShown(){return this._element.classList.contains(_l)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,f){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=f;break;case"focusin":case"focusout":this._hasKeyboardInteraction=f}if(f)return void this._clearTimeout();const y=l.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){H.on(this._element,CE,l=>this._onInteraction(l,!0)),H.on(this._element,RE,l=>this._onInteraction(l,!1)),H.on(this._element,PE,l=>this._onInteraction(l,!0)),H.on(this._element,OE,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const f=Qo.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l](this)}})}}return fe(Qo),K(Qo),{Alert:N,Button:$,Carousel:cr,Collapse:ks,Dropdown:Gn,Modal:ri,Offcanvas:js,Popover:ml,ScrollSpy:Ko,Tab:li,Toast:Qo,Tooltip:ii}})})(xl)),xl.exports}zE();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ze={},eo=[],Es=()=>{},Gg=()=>!1,Sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nh=t=>t.startsWith("onUpdate:"),rn=Object.assign,Dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},GE=Object.prototype.hasOwnProperty,We=(t,e)=>GE.call(t,e),_e=Array.isArray,to=t=>Ua(t)==="[object Map]",bo=t=>Ua(t)==="[object Set]",Dd=t=>Ua(t)==="[object Date]",Se=t=>typeof t=="function",Ct=t=>typeof t=="string",Is=t=>typeof t=="symbol",et=t=>t!==null&&typeof t=="object",Kg=t=>(et(t)||Se(t))&&Se(t.then)&&Se(t.catch),Qg=Object.prototype.toString,Ua=t=>Qg.call(t),KE=t=>Ua(t).slice(8,-1),Xg=t=>Ua(t)==="[object Object]",xh=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,aa=kh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},QE=/-\w/g,$n=Cc(t=>t.replace(QE,e=>e.slice(1).toUpperCase())),XE=/\B([A-Z])/g,Ri=Cc(t=>t.replace(XE,"-$1").toLowerCase()),Rc=Cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Iu=Cc(t=>t?`on${Rc(t)}`:""),Or=(t,e)=>!Object.is(t,e),Vl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xd;const Pc=()=>xd||(xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vh(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ct(s)?ew(s):Vh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ct(t)||et(t))return t}const JE=/;(?![^(]*\))/g,YE=/:([^]+)/,ZE=/\/\*[^]*?\*\//g;function ew(t){const e={};return t.replace(ZE,"").split(JE).forEach(n=>{if(n){const s=n.split(YE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Oc(t){let e="";if(Ct(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const s=Oc(t[n]);s&&(e+=s+" ")}else if(et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nw=kh(tw);function Yg(t){return!!t||t===""}function sw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=vi(t[s],e[s]);return n}function vi(t,e){if(t===e)return!0;let n=Dd(t),s=Dd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Is(t),s=Is(e),n||s)return t===e;if(n=_e(t),s=_e(e),n||s)return n&&s?sw(t,e):!1;if(n=et(t),s=et(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),u=e.hasOwnProperty(a);if(c&&!u||!c&&u||!vi(t[a],e[a]))return!1}}return String(t)===String(e)}function Mh(t,e){return t.findIndex(n=>vi(n,e))}const Zg=t=>!!(t&&t.__v_isRef===!0),kc=t=>Ct(t)?t:t==null?"":_e(t)||et(t)&&(t.toString===Qg||!Se(t.toString))?Zg(t)?kc(t.value):JSON.stringify(t,em,2):String(t),em=(t,e)=>Zg(e)?em(t,e.value):to(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Au(s,i)+" =>"]=r,n),{})}:bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Au(n))}:Is(e)?Au(e):et(e)&&!_e(e)&&!Xg(e)?String(e):e,Au=(t,e="")=>{var n;return Is(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class rw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_n;try{return _n=this,e()}finally{_n=n}}}on(){++this._on===1&&(this.prevScope=_n,_n=this)}off(){this._on>0&&--this._on===0&&(_n=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function iw(){return _n}let st;const Su=new WeakSet;class tm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_n&&_n.active&&_n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Su.has(this)&&(Su.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vd(this),rm(this);const e=st,n=Yn;st=this,Yn=!0;try{return this.fn()}finally{im(this),st=e,Yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uh(e);this.deps=this.depsTail=void 0,Vd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Su.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ku(this)&&this.run()}get dirty(){return Ku(this)}}let nm=0,la,ca;function sm(t,e=!1){if(t.flags|=8,e){t.next=ca,ca=t;return}t.next=la,la=t}function Lh(){nm++}function Fh(){if(--nm>0)return;if(ca){let e=ca;for(ca=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;la;){let e=la;for(la=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function rm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function im(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Uh(s),ow(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Ku(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(om(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function om(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ta)||(t.globalVersion=Ta,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ku(t))))return;t.flags|=2;const e=t.dep,n=st,s=Yn;st=t,Yn=!0;try{rm(t);const r=t.fn(t._value);(e.version===0||Or(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=n,Yn=s,im(t),t.flags&=-3}}function Uh(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Uh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ow(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yn=!0;const am=[];function Ys(){am.push(Yn),Yn=!1}function Zs(){const t=am.pop();Yn=t===void 0?!0:t}function Vd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=st;st=void 0;try{e()}finally{st=n}}}let Ta=0;class aw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!st||!Yn||st===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==st)n=this.activeLink=new aw(st,this),st.deps?(n.prevDep=st.depsTail,st.depsTail.nextDep=n,st.depsTail=n):st.deps=st.depsTail=n,lm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=st.depsTail,n.nextDep=void 0,st.depsTail.nextDep=n,st.depsTail=n,st.deps===n&&(st.deps=s)}return n}trigger(e){this.version++,Ta++,this.notify(e)}notify(e){Lh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fh()}}}function lm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)lm(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Qu=new WeakMap,mi=Symbol(""),Xu=Symbol(""),Ia=Symbol("");function en(t,e,n){if(Yn&&st){let s=Qu.get(t);s||Qu.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new jh),r.map=s,r.key=n),r.track()}}function qs(t,e,n,s,r,i){const a=Qu.get(t);if(!a){Ta++;return}const c=u=>{u&&u.trigger()};if(Lh(),e==="clear")a.forEach(c);else{const u=_e(t),d=u&&xh(n);if(u&&n==="length"){const g=Number(s);a.forEach((_,E)=>{(E==="length"||E===Ia||!Is(E)&&E>=g)&&c(_)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),d&&c(a.get(Ia)),e){case"add":u?d&&c(a.get("length")):(c(a.get(mi)),to(t)&&c(a.get(Xu)));break;case"delete":u||(c(a.get(mi)),to(t)&&c(a.get(Xu)));break;case"set":to(t)&&c(a.get(mi));break}}Fh()}function Ki(t){const e=qe(t);return e===t?e:(en(e,"iterate",Ia),jn(t)?e:e.map($t))}function Nc(t){return en(t=qe(t),"iterate",Ia),t}const lw={__proto__:null,[Symbol.iterator](){return Cu(this,Symbol.iterator,$t)},concat(...t){return Ki(this).concat(...t.map(e=>_e(e)?Ki(e):e))},entries(){return Cu(this,"entries",t=>(t[1]=$t(t[1]),t))},every(t,e){return Bs(this,"every",t,e,void 0,arguments)},filter(t,e){return Bs(this,"filter",t,e,n=>n.map($t),arguments)},find(t,e){return Bs(this,"find",t,e,$t,arguments)},findIndex(t,e){return Bs(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bs(this,"findLast",t,e,$t,arguments)},findLastIndex(t,e){return Bs(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bs(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ru(this,"includes",t)},indexOf(...t){return Ru(this,"indexOf",t)},join(t){return Ki(this).join(t)},lastIndexOf(...t){return Ru(this,"lastIndexOf",t)},map(t,e){return Bs(this,"map",t,e,void 0,arguments)},pop(){return Xo(this,"pop")},push(...t){return Xo(this,"push",t)},reduce(t,...e){return Md(this,"reduce",t,e)},reduceRight(t,...e){return Md(this,"reduceRight",t,e)},shift(){return Xo(this,"shift")},some(t,e){return Bs(this,"some",t,e,void 0,arguments)},splice(...t){return Xo(this,"splice",t)},toReversed(){return Ki(this).toReversed()},toSorted(t){return Ki(this).toSorted(t)},toSpliced(...t){return Ki(this).toSpliced(...t)},unshift(...t){return Xo(this,"unshift",t)},values(){return Cu(this,"values",$t)}};function Cu(t,e,n){const s=Nc(t),r=s[e]();return s!==t&&!jn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const cw=Array.prototype;function Bs(t,e,n,s,r,i){const a=Nc(t),c=a!==t&&!jn(t),u=a[e];if(u!==cw[e]){const _=u.apply(t,i);return c?$t(_):_}let d=n;a!==t&&(c?d=function(_,E){return n.call(this,$t(_),E,t)}:n.length>2&&(d=function(_,E){return n.call(this,_,E,t)}));const g=u.call(a,d,s);return c&&r?r(g):g}function Md(t,e,n,s){const r=Nc(t);let i=n;return r!==t&&(jn(t)?n.length>3&&(i=function(a,c,u){return n.call(this,a,c,u,t)}):i=function(a,c,u){return n.call(this,a,$t(c),u,t)}),r[e](i,...s)}function Ru(t,e,n){const s=qe(t);en(s,"iterate",Ia);const r=s[e](...n);return(r===-1||r===!1)&&Hh(n[0])?(n[0]=qe(n[0]),s[e](...n)):r}function Xo(t,e,n=[]){Ys(),Lh();const s=qe(t)[e].apply(t,n);return Fh(),Zs(),s}const uw=kh("__proto__,__v_isRef,__isVue"),cm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Is));function hw(t){Is(t)||(t=String(t));const e=qe(this);return en(e,"has",t),e.hasOwnProperty(t)}class um{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ww:pm:i?dm:fm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=_e(e);if(!r){let u;if(a&&(u=lw[n]))return u;if(n==="hasOwnProperty")return hw}const c=Reflect.get(e,n,sn(e)?e:s);if((Is(n)?cm.has(n):uw(n))||(r||en(e,"get",n),i))return c;if(sn(c)){const u=a&&xh(n)?c:c.value;return r&&et(u)?Yu(u):u}return et(c)?r?Yu(c):ja(c):c}}class hm extends um{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const u=Vr(i);if(!jn(s)&&!Vr(s)&&(i=qe(i),s=qe(s)),!_e(e)&&sn(i)&&!sn(s))return u||(i.value=s),!0}const a=_e(e)&&xh(n)?Number(n)<e.length:We(e,n),c=Reflect.set(e,n,s,sn(e)?e:r);return e===qe(r)&&(a?Or(s,i)&&qs(e,"set",n,s):qs(e,"add",n,s)),c}deleteProperty(e,n){const s=We(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&qs(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Is(n)||!cm.has(n))&&en(e,"has",n),s}ownKeys(e){return en(e,"iterate",_e(e)?"length":mi),Reflect.ownKeys(e)}}class fw extends um{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dw=new hm,pw=new fw,gw=new hm(!0);const Ju=t=>t,bl=t=>Reflect.getPrototypeOf(t);function mw(t,e,n){return function(...s){const r=this.__v_raw,i=qe(r),a=to(i),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,d=r[t](...s),g=n?Ju:e?Jl:$t;return!e&&en(i,"iterate",u?Xu:mi),{next(){const{value:_,done:E}=d.next();return E?{value:_,done:E}:{value:c?[g(_[0]),g(_[1])]:g(_),done:E}},[Symbol.iterator](){return this}}}}function Tl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _w(t,e){const n={get(r){const i=this.__v_raw,a=qe(i),c=qe(r);t||(Or(r,c)&&en(a,"get",r),en(a,"get",c));const{has:u}=bl(a),d=e?Ju:t?Jl:$t;if(u.call(a,r))return d(i.get(r));if(u.call(a,c))return d(i.get(c));i!==a&&i.get(r)},get size(){const r=this.__v_raw;return!t&&en(qe(r),"iterate",mi),r.size},has(r){const i=this.__v_raw,a=qe(i),c=qe(r);return t||(Or(r,c)&&en(a,"has",r),en(a,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const a=this,c=a.__v_raw,u=qe(c),d=e?Ju:t?Jl:$t;return!t&&en(u,"iterate",mi),c.forEach((g,_)=>r.call(i,d(g),d(_),a))}};return rn(n,t?{add:Tl("add"),set:Tl("set"),delete:Tl("delete"),clear:Tl("clear")}:{add(r){!e&&!jn(r)&&!Vr(r)&&(r=qe(r));const i=qe(this);return bl(i).has.call(i,r)||(i.add(r),qs(i,"add",r,r)),this},set(r,i){!e&&!jn(i)&&!Vr(i)&&(i=qe(i));const a=qe(this),{has:c,get:u}=bl(a);let d=c.call(a,r);d||(r=qe(r),d=c.call(a,r));const g=u.call(a,r);return a.set(r,i),d?Or(i,g)&&qs(a,"set",r,i):qs(a,"add",r,i),this},delete(r){const i=qe(this),{has:a,get:c}=bl(i);let u=a.call(i,r);u||(r=qe(r),u=a.call(i,r)),c&&c.call(i,r);const d=i.delete(r);return u&&qs(i,"delete",r,void 0),d},clear(){const r=qe(this),i=r.size!==0,a=r.clear();return i&&qs(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=mw(r,t,e)}),n}function Bh(t,e){const n=_w(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(We(n,r)&&r in s?n:s,r,i)}const yw={get:Bh(!1,!1)},vw={get:Bh(!1,!0)},Ew={get:Bh(!0,!1)};const fm=new WeakMap,dm=new WeakMap,pm=new WeakMap,ww=new WeakMap;function bw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tw(t){return t.__v_skip||!Object.isExtensible(t)?0:bw(KE(t))}function ja(t){return Vr(t)?t:$h(t,!1,dw,yw,fm)}function gm(t){return $h(t,!1,gw,vw,dm)}function Yu(t){return $h(t,!0,pw,Ew,pm)}function $h(t,e,n,s,r){if(!et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Tw(t);if(i===0)return t;const a=r.get(t);if(a)return a;const c=new Proxy(t,i===2?s:n);return r.set(t,c),c}function no(t){return Vr(t)?no(t.__v_raw):!!(t&&t.__v_isReactive)}function Vr(t){return!!(t&&t.__v_isReadonly)}function jn(t){return!!(t&&t.__v_isShallow)}function Hh(t){return t?!!t.__v_raw:!1}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function Iw(t){return!We(t,"__v_skip")&&Object.isExtensible(t)&&Jg(t,"__v_skip",!0),t}const $t=t=>et(t)?ja(t):t,Jl=t=>et(t)?Yu(t):t;function sn(t){return t?t.__v_isRef===!0:!1}function mm(t){return _m(t,!1)}function Aw(t){return _m(t,!0)}function _m(t,e){return sn(t)?t:new Sw(t,e)}class Sw{constructor(e,n){this.dep=new jh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:qe(e),this._value=n?e:$t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||jn(e)||Vr(e);e=s?e:qe(e),Or(e,n)&&(this._rawValue=e,this._value=s?e:$t(e),this.dep.trigger())}}function pn(t){return sn(t)?t.value:t}const Cw={get:(t,e,n)=>e==="__v_raw"?t:pn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return sn(r)&&!sn(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ym(t){return no(t)?t:new Proxy(t,Cw)}class Rw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ta-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return sm(this,!0),!0}get value(){const e=this.dep.track();return om(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pw(t,e,n=!1){let s,r;return Se(t)?s=t:(s=t.get,r=t.set),new Rw(s,r,n)}const Il={},Yl=new WeakMap;let fi;function Ow(t,e=!1,n=fi){if(n){let s=Yl.get(n);s||Yl.set(n,s=[]),s.push(t)}}function kw(t,e,n=Ze){const{immediate:s,deep:r,once:i,scheduler:a,augmentJob:c,call:u}=n,d=ie=>r?ie:jn(ie)||r===!1||r===0?Ws(ie,1):Ws(ie);let g,_,E,S,L=!1,q=!1;if(sn(t)?(_=()=>t.value,L=jn(t)):no(t)?(_=()=>d(t),L=!0):_e(t)?(q=!0,L=t.some(ie=>no(ie)||jn(ie)),_=()=>t.map(ie=>{if(sn(ie))return ie.value;if(no(ie))return d(ie);if(Se(ie))return u?u(ie,2):ie()})):Se(t)?e?_=u?()=>u(t,2):t:_=()=>{if(E){Ys();try{E()}finally{Zs()}}const ie=fi;fi=g;try{return u?u(t,3,[S]):t(S)}finally{fi=ie}}:_=Es,e&&r){const ie=_,be=r===!0?1/0:r;_=()=>Ws(ie(),be)}const G=iw(),J=()=>{g.stop(),G&&G.active&&Dh(G.effects,g)};if(i&&e){const ie=e;e=(...be)=>{ie(...be),J()}}let K=q?new Array(t.length).fill(Il):Il;const ee=ie=>{if(!(!(g.flags&1)||!g.dirty&&!ie))if(e){const be=g.run();if(r||L||(q?be.some((Ve,C)=>Or(Ve,K[C])):Or(be,K))){E&&E();const Ve=fi;fi=g;try{const C=[be,K===Il?void 0:q&&K[0]===Il?[]:K,S];K=be,u?u(e,3,C):e(...C)}finally{fi=Ve}}}else g.run()};return c&&c(ee),g=new tm(_),g.scheduler=a?()=>a(ee,!1):ee,S=ie=>Ow(ie,!1,g),E=g.onStop=()=>{const ie=Yl.get(g);if(ie){if(u)u(ie,4);else for(const be of ie)be();Yl.delete(g)}},e?s?ee(!0):K=g.run():a?a(ee.bind(null,!0),!0):g.run(),J.pause=g.pause.bind(g),J.resume=g.resume.bind(g),J.stop=J,J}function Ws(t,e=1/0,n){if(e<=0||!et(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,sn(t))Ws(t.value,e,n);else if(_e(t))for(let s=0;s<t.length;s++)Ws(t[s],e,n);else if(bo(t)||to(t))t.forEach(s=>{Ws(s,e,n)});else if(Xg(t)){for(const s in t)Ws(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ws(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ba(t,e,n,s){try{return s?t(...s):t()}catch(r){Dc(r,e,n)}}function As(t,e,n,s){if(Se(t)){const r=Ba(t,e,n,s);return r&&Kg(r)&&r.catch(i=>{Dc(i,e,n)}),r}if(_e(t)){const r=[];for(let i=0;i<t.length;i++)r.push(As(t[i],e,n,s));return r}}function Dc(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ze;if(e){let c=e.parent;const u=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const g=c.ec;if(g){for(let _=0;_<g.length;_++)if(g[_](t,u,d)===!1)return}c=c.parent}if(i){Ys(),Ba(i,null,10,[t,u,d]),Zs();return}}Nw(t,n,r,s,a)}function Nw(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const dn=[];let ms=-1;const so=[];let Tr=null,Qi=0;const vm=Promise.resolve();let Zl=null;function qh(t){const e=Zl||vm;return t?e.then(this?t.bind(this):t):e}function Dw(t){let e=ms+1,n=dn.length;for(;e<n;){const s=e+n>>>1,r=dn[s],i=Aa(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Wh(t){if(!(t.flags&1)){const e=Aa(t),n=dn[dn.length-1];!n||!(t.flags&2)&&e>=Aa(n)?dn.push(t):dn.splice(Dw(e),0,t),t.flags|=1,Em()}}function Em(){Zl||(Zl=vm.then(bm))}function xw(t){_e(t)?so.push(...t):Tr&&t.id===-1?Tr.splice(Qi+1,0,t):t.flags&1||(so.push(t),t.flags|=1),Em()}function Ld(t,e,n=ms+1){for(;n<dn.length;n++){const s=dn[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;dn.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wm(t){if(so.length){const e=[...new Set(so)].sort((n,s)=>Aa(n)-Aa(s));if(so.length=0,Tr){Tr.push(...e);return}for(Tr=e,Qi=0;Qi<Tr.length;Qi++){const n=Tr[Qi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tr=null,Qi=0}}const Aa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bm(t){try{for(ms=0;ms<dn.length;ms++){const e=dn[ms];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ba(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ms<dn.length;ms++){const e=dn[ms];e&&(e.flags&=-2)}ms=-1,dn.length=0,wm(),Zl=null,(dn.length||so.length)&&bm()}}let An=null,Tm=null;function ec(t){const e=An;return An=t,Tm=t&&t.type.__scopeId||null,e}function ta(t,e=An,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&sc(-1);const i=ec(e);let a;try{a=t(...r)}finally{ec(i),s._d&&sc(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function t1(t,e){if(An===null)return t;const n=Lc(An),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,a,c,u=Ze]=e[r];i&&(Se(i)&&(i={mounted:i,updated:i}),i.deep&&Ws(a),s.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function ui(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];i&&(c.oldValue=i[a].value);let u=c.dir[s];u&&(Ys(),As(u,n,8,[t.el,c,t,e]),Zs())}}const Vw=Symbol("_vte"),Mw=t=>t.__isTeleport,Lw=Symbol("_leaveCb");function zh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Im(t,e){return Se(t)?rn({name:t.name},e,{setup:t}):t}function Am(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const tc=new WeakMap;function ua(t,e,n,s,r=!1){if(_e(t)){t.forEach((L,q)=>ua(L,e&&(_e(e)?e[q]:e),n,s,r));return}if(ha(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ua(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Lc(s.component):s.el,a=r?null:i,{i:c,r:u}=t,d=e&&e.r,g=c.refs===Ze?c.refs={}:c.refs,_=c.setupState,E=qe(_),S=_===Ze?Gg:L=>We(E,L);if(d!=null&&d!==u){if(Fd(e),Ct(d))g[d]=null,S(d)&&(_[d]=null);else if(sn(d)){d.value=null;const L=e;L.k&&(g[L.k]=null)}}if(Se(u))Ba(u,c,12,[a,g]);else{const L=Ct(u),q=sn(u);if(L||q){const G=()=>{if(t.f){const J=L?S(u)?_[u]:g[u]:u.value;if(r)_e(J)&&Dh(J,i);else if(_e(J))J.includes(i)||J.push(i);else if(L)g[u]=[i],S(u)&&(_[u]=g[u]);else{const K=[i];u.value=K,t.k&&(g[t.k]=K)}}else L?(g[u]=a,S(u)&&(_[u]=a)):q&&(u.value=a,t.k&&(g[t.k]=a))};if(a){const J=()=>{G(),tc.delete(t)};J.id=-1,tc.set(t,J),Tn(J,n)}else Fd(t),G()}}}function Fd(t){const e=tc.get(t);e&&(e.flags|=8,tc.delete(t))}Pc().requestIdleCallback;Pc().cancelIdleCallback;const ha=t=>!!t.type.__asyncLoader,Sm=t=>t.type.__isKeepAlive;function Fw(t,e){Cm(t,"a",e)}function Uw(t,e){Cm(t,"da",e)}function Cm(t,e,n=nn){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(xc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Sm(r.parent.vnode)&&jw(s,e,n,r),r=r.parent}}function jw(t,e,n,s){const r=xc(e,t,s,!0);Om(()=>{Dh(s[e],r)},n)}function xc(t,e,n=nn,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Ys();const c=$a(n),u=As(e,n,t,a);return c(),Zs(),u});return s?r.unshift(i):r.push(i),i}}const nr=t=>(e,n=nn)=>{(!Ca||t==="sp")&&xc(t,(...s)=>e(...s),n)},Bw=nr("bm"),Rm=nr("m"),$w=nr("bu"),Hw=nr("u"),Pm=nr("bum"),Om=nr("um"),qw=nr("sp"),Ww=nr("rtg"),zw=nr("rtc");function Gw(t,e=nn){xc("ec",t,e)}const Kw="components";function Qw(t,e){return Jw(Kw,t,!0,e)||t}const Xw=Symbol.for("v-ndc");function Jw(t,e,n=!0,s=!1){const r=An||nn;if(r){const i=r.type;{const c=jb(i,!1);if(c&&(c===e||c===$n(e)||c===Rc($n(e))))return i}const a=Ud(r[t]||i[t],e)||Ud(r.appContext[t],e);return!a&&s?i:a}}function Ud(t,e){return t&&(t[e]||t[$n(e)]||t[Rc($n(e))])}function Yw(t,e,n,s){let r;const i=n,a=_e(t);if(a||Ct(t)){const c=a&&no(t);let u=!1,d=!1;c&&(u=!jn(t),d=Vr(t),t=Nc(t)),r=new Array(t.length);for(let g=0,_=t.length;g<_;g++)r[g]=e(u?d?Jl($t(t[g])):$t(t[g]):t[g],g,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,i)}else if(et(t))if(t[Symbol.iterator])r=Array.from(t,(c,u)=>e(c,u,void 0,i));else{const c=Object.keys(t);r=new Array(c.length);for(let u=0,d=c.length;u<d;u++){const g=c[u];r[u]=e(t[g],g,u,i)}}else r=[];return r}const Zu=t=>t?Xm(t)?Lc(t):Zu(t.parent):null,fa=rn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zu(t.parent),$root:t=>Zu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nm(t),$forceUpdate:t=>t.f||(t.f=()=>{Wh(t.update)}),$nextTick:t=>t.n||(t.n=qh.bind(t.proxy)),$watch:t=>vb.bind(t)}),Pu=(t,e)=>t!==Ze&&!t.__isScriptSetup&&We(t,e),Zw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:a,type:c,appContext:u}=t;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Pu(s,e))return a[e]=1,s[e];if(r!==Ze&&We(r,e))return a[e]=2,r[e];if((d=t.propsOptions[0])&&We(d,e))return a[e]=3,i[e];if(n!==Ze&&We(n,e))return a[e]=4,n[e];eh&&(a[e]=0)}}const g=fa[e];let _,E;if(g)return e==="$attrs"&&en(t.attrs,"get",""),g(t);if((_=c.__cssModules)&&(_=_[e]))return _;if(n!==Ze&&We(n,e))return a[e]=4,n[e];if(E=u.config.globalProperties,We(E,e))return E[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Pu(r,e)?(r[e]=n,!0):s!==Ze&&We(s,e)?(s[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:a}},c){let u,d;return!!(n[c]||t!==Ze&&c[0]!=="$"&&We(t,c)||Pu(e,c)||(u=i[0])&&We(u,c)||We(s,c)||We(fa,c)||We(r.config.globalProperties,c)||(d=a.__cssModules)&&d[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jd(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let eh=!0;function eb(t){const e=Nm(t),n=t.proxy,s=t.ctx;eh=!1,e.beforeCreate&&Bd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:a,watch:c,provide:u,inject:d,created:g,beforeMount:_,mounted:E,beforeUpdate:S,updated:L,activated:q,deactivated:G,beforeDestroy:J,beforeUnmount:K,destroyed:ee,unmounted:ie,render:be,renderTracked:Ve,renderTriggered:C,errorCaptured:b,serverPrefetch:I,expose:P,inheritAttrs:R,components:D,directives:T,filters:lt}=e;if(d&&tb(d,s,null),a)for(const je in a){const Oe=a[je];Se(Oe)&&(s[je]=Oe.bind(n))}if(r){const je=r.call(n,n);et(je)&&(t.data=ja(je))}if(eh=!0,i)for(const je in i){const Oe=i[je],zt=Se(Oe)?Oe.bind(n,n):Se(Oe.get)?Oe.get.bind(n,n):Es,En=!Se(Oe)&&Se(Oe.set)?Oe.set.bind(n):Es,H=Fn({get:zt,set:En});Object.defineProperty(s,je,{enumerable:!0,configurable:!0,get:()=>H.value,set:gt=>H.value=gt})}if(c)for(const je in c)km(c[je],s,n,je);if(u){const je=Se(u)?u.call(n):u;Reflect.ownKeys(je).forEach(Oe=>{Ml(Oe,je[Oe])})}g&&Bd(g,t,"c");function ct(je,Oe){_e(Oe)?Oe.forEach(zt=>je(zt.bind(n))):Oe&&je(Oe.bind(n))}if(ct(Bw,_),ct(Rm,E),ct($w,S),ct(Hw,L),ct(Fw,q),ct(Uw,G),ct(Gw,b),ct(zw,Ve),ct(Ww,C),ct(Pm,K),ct(Om,ie),ct(qw,I),_e(P))if(P.length){const je=t.exposed||(t.exposed={});P.forEach(Oe=>{Object.defineProperty(je,Oe,{get:()=>n[Oe],set:zt=>n[Oe]=zt,enumerable:!0})})}else t.exposed||(t.exposed={});be&&t.render===Es&&(t.render=be),R!=null&&(t.inheritAttrs=R),D&&(t.components=D),T&&(t.directives=T),I&&Am(t)}function tb(t,e,n=Es){_e(t)&&(t=th(t));for(const s in t){const r=t[s];let i;et(r)?"default"in r?i=Zn(r.from||s,r.default,!0):i=Zn(r.from||s):i=Zn(r),sn(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[s]=i}}function Bd(t,e,n){As(_e(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function km(t,e,n,s){let r=s.includes(".")?Wm(n,s):()=>n[s];if(Ct(t)){const i=e[t];Se(i)&&Ll(r,i)}else if(Se(t))Ll(r,t.bind(n));else if(et(t))if(_e(t))t.forEach(i=>km(i,e,n,s));else{const i=Se(t.handler)?t.handler.bind(n):e[t.handler];Se(i)&&Ll(r,i,t)}}function Nm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let u;return c?u=c:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(d=>nc(u,d,a,!0)),nc(u,e,a)),et(e)&&i.set(e,u),u}function nc(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&nc(t,i,n,!0),r&&r.forEach(a=>nc(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=nb[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const nb={data:$d,props:Hd,emits:Hd,methods:na,computed:na,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:na,directives:na,watch:rb,provide:$d,inject:sb};function $d(t,e){return e?t?function(){return rn(Se(t)?t.call(this,this):t,Se(e)?e.call(this,this):e)}:e:t}function sb(t,e){return na(th(t),th(e))}function th(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function na(t,e){return t?rn(Object.create(null),t,e):e}function Hd(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:rn(Object.create(null),jd(t),jd(e??{})):e}function rb(t,e){if(!t)return e;if(!e)return t;const n=rn(Object.create(null),t);for(const s in e)n[s]=hn(t[s],e[s]);return n}function Dm(){return{app:null,config:{isNativeTag:Gg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ib=0;function ob(t,e){return function(s,r=null){Se(s)||(s=rn({},s)),r!=null&&!et(r)&&(r=null);const i=Dm(),a=new WeakSet,c=[];let u=!1;const d=i.app={_uid:ib++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$b,get config(){return i.config},set config(g){},use(g,..._){return a.has(g)||(g&&Se(g.install)?(a.add(g),g.install(d,..._)):Se(g)&&(a.add(g),g(d,..._))),d},mixin(g){return i.mixins.includes(g)||i.mixins.push(g),d},component(g,_){return _?(i.components[g]=_,d):i.components[g]},directive(g,_){return _?(i.directives[g]=_,d):i.directives[g]},mount(g,_,E){if(!u){const S=d._ceVNode||At(s,r);return S.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),t(S,g,E),u=!0,d._container=g,g.__vue_app__=d,Lc(S.component)}},onUnmount(g){c.push(g)},unmount(){u&&(As(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(g,_){return i.provides[g]=_,d},runWithContext(g){const _=ro;ro=d;try{return g()}finally{ro=_}}};return d}}let ro=null;function Ml(t,e){if(nn){let n=nn.provides;const s=nn.parent&&nn.parent.provides;s===n&&(n=nn.provides=Object.create(s)),n[t]=e}}function Zn(t,e,n=!1){const s=Vb();if(s||ro){let r=ro?ro._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Se(e)?e.call(s&&s.proxy):e}}const xm={},Vm=()=>Object.create(xm),Mm=t=>Object.getPrototypeOf(t)===xm;function ab(t,e,n,s=!1){const r={},i=Vm();t.propsDefaults=Object.create(null),Lm(t,e,r,i);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:gm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function lb(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=t,c=qe(r),[u]=t.propsOptions;let d=!1;if((s||a>0)&&!(a&16)){if(a&8){const g=t.vnode.dynamicProps;for(let _=0;_<g.length;_++){let E=g[_];if(Vc(t.emitsOptions,E))continue;const S=e[E];if(u)if(We(i,E))S!==i[E]&&(i[E]=S,d=!0);else{const L=$n(E);r[L]=nh(u,c,L,S,t,!1)}else S!==i[E]&&(i[E]=S,d=!0)}}}else{Lm(t,e,r,i)&&(d=!0);let g;for(const _ in c)(!e||!We(e,_)&&((g=Ri(_))===_||!We(e,g)))&&(u?n&&(n[_]!==void 0||n[g]!==void 0)&&(r[_]=nh(u,c,_,void 0,t,!0)):delete r[_]);if(i!==c)for(const _ in i)(!e||!We(e,_))&&(delete i[_],d=!0)}d&&qs(t.attrs,"set","")}function Lm(t,e,n,s){const[r,i]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(aa(u))continue;const d=e[u];let g;r&&We(r,g=$n(u))?!i||!i.includes(g)?n[g]=d:(c||(c={}))[g]=d:Vc(t.emitsOptions,u)||(!(u in s)||d!==s[u])&&(s[u]=d,a=!0)}if(i){const u=qe(n),d=c||Ze;for(let g=0;g<i.length;g++){const _=i[g];n[_]=nh(r,u,_,d[_],t,!We(d,_))}}return a}function nh(t,e,n,s,r,i){const a=t[n];if(a!=null){const c=We(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Se(u)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const g=$a(r);s=d[n]=u.call(null,e),g()}}else s=u;r.ce&&r.ce._setProp(n,s)}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===Ri(n))&&(s=!0))}return s}const cb=new WeakMap;function Fm(t,e,n=!1){const s=n?cb:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,a={},c=[];let u=!1;if(!Se(t)){const g=_=>{u=!0;const[E,S]=Fm(_,e,!0);rn(a,E),S&&c.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!i&&!u)return et(t)&&s.set(t,eo),eo;if(_e(i))for(let g=0;g<i.length;g++){const _=$n(i[g]);qd(_)&&(a[_]=Ze)}else if(i)for(const g in i){const _=$n(g);if(qd(_)){const E=i[g],S=a[_]=_e(E)||Se(E)?{type:E}:rn({},E),L=S.type;let q=!1,G=!0;if(_e(L))for(let J=0;J<L.length;++J){const K=L[J],ee=Se(K)&&K.name;if(ee==="Boolean"){q=!0;break}else ee==="String"&&(G=!1)}else q=Se(L)&&L.name==="Boolean";S[0]=q,S[1]=G,(q||We(S,"default"))&&c.push(_)}}const d=[a,c];return et(t)&&s.set(t,d),d}function qd(t){return t[0]!=="$"&&!aa(t)}const Gh=t=>t==="_"||t==="_ctx"||t==="$stable",Kh=t=>_e(t)?t.map(vs):[vs(t)],ub=(t,e,n)=>{if(e._n)return e;const s=ta((...r)=>Kh(e(...r)),n);return s._c=!1,s},Um=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Gh(r))continue;const i=t[r];if(Se(i))e[r]=ub(r,i,s);else if(i!=null){const a=Kh(i);e[r]=()=>a}}},jm=(t,e)=>{const n=Kh(e);t.slots.default=()=>n},Bm=(t,e,n)=>{for(const s in e)(n||!Gh(s))&&(t[s]=e[s])},hb=(t,e,n)=>{const s=t.slots=Vm();if(t.vnode.shapeFlag&32){const r=e._;r?(Bm(s,e,n),n&&Jg(s,"_",r,!0)):Um(e,s)}else e&&jm(t,e)},fb=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,a=Ze;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Bm(r,e,n):(i=!e.$stable,Um(e,r)),a=e}else e&&(jm(t,e),a={default:1});if(i)for(const c in r)!Gh(c)&&a[c]==null&&delete r[c]},Tn=Cb;function db(t){return pb(t)}function pb(t,e){const n=Pc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:a,createText:c,createComment:u,setText:d,setElementText:g,parentNode:_,nextSibling:E,setScopeId:S=Es,insertStaticContent:L}=t,q=(w,A,N,B=null,$=null,j=null,se=void 0,Y=null,Q=!!A.dynamicChildren)=>{if(w===A)return;w&&!Jo(w,A)&&(B=U(w),gt(w,$,j,!0),w=null),A.patchFlag===-2&&(Q=!1,A.dynamicChildren=null);const{type:X,ref:ge,shapeFlag:oe}=A;switch(X){case Mc:G(w,A,N,B);break;case Mr:J(w,A,N,B);break;case Fl:w==null&&K(A,N,B,se);break;case ys:D(w,A,N,B,$,j,se,Y,Q);break;default:oe&1?be(w,A,N,B,$,j,se,Y,Q):oe&6?T(w,A,N,B,$,j,se,Y,Q):(oe&64||oe&128)&&X.process(w,A,N,B,$,j,se,Y,Q,fe)}ge!=null&&$?ua(ge,w&&w.ref,j,A||w,!A):ge==null&&w&&w.ref!=null&&ua(w.ref,null,j,w,!0)},G=(w,A,N,B)=>{if(w==null)s(A.el=c(A.children),N,B);else{const $=A.el=w.el;A.children!==w.children&&d($,A.children)}},J=(w,A,N,B)=>{w==null?s(A.el=u(A.children||""),N,B):A.el=w.el},K=(w,A,N,B)=>{[w.el,w.anchor]=L(w.children,A,N,B,w.el,w.anchor)},ee=({el:w,anchor:A},N,B)=>{let $;for(;w&&w!==A;)$=E(w),s(w,N,B),w=$;s(A,N,B)},ie=({el:w,anchor:A})=>{let N;for(;w&&w!==A;)N=E(w),r(w),w=N;r(A)},be=(w,A,N,B,$,j,se,Y,Q)=>{A.type==="svg"?se="svg":A.type==="math"&&(se="mathml"),w==null?Ve(A,N,B,$,j,se,Y,Q):I(w,A,$,j,se,Y,Q)},Ve=(w,A,N,B,$,j,se,Y)=>{let Q,X;const{props:ge,shapeFlag:oe,transition:de,dirs:pe}=w;if(Q=w.el=a(w.type,j,ge&&ge.is,ge),oe&8?g(Q,w.children):oe&16&&b(w.children,Q,null,B,$,Ou(w,j),se,Y),pe&&ui(w,null,B,"created"),C(Q,w,w.scopeId,se,B),ge){for(const Be in ge)Be!=="value"&&!aa(Be)&&i(Q,Be,null,ge[Be],j,B);"value"in ge&&i(Q,"value",null,ge.value,j),(X=ge.onVnodeBeforeMount)&&gs(X,B,w)}pe&&ui(w,null,B,"beforeMount");const Ee=gb($,de);Ee&&de.beforeEnter(Q),s(Q,A,N),((X=ge&&ge.onVnodeMounted)||Ee||pe)&&Tn(()=>{X&&gs(X,B,w),Ee&&de.enter(Q),pe&&ui(w,null,B,"mounted")},$)},C=(w,A,N,B,$)=>{if(N&&S(w,N),B)for(let j=0;j<B.length;j++)S(w,B[j]);if($){let j=$.subTree;if(A===j||Gm(j.type)&&(j.ssContent===A||j.ssFallback===A)){const se=$.vnode;C(w,se,se.scopeId,se.slotScopeIds,$.parent)}}},b=(w,A,N,B,$,j,se,Y,Q=0)=>{for(let X=Q;X<w.length;X++){const ge=w[X]=Y?Ir(w[X]):vs(w[X]);q(null,ge,A,N,B,$,j,se,Y)}},I=(w,A,N,B,$,j,se)=>{const Y=A.el=w.el;let{patchFlag:Q,dynamicChildren:X,dirs:ge}=A;Q|=w.patchFlag&16;const oe=w.props||Ze,de=A.props||Ze;let pe;if(N&&hi(N,!1),(pe=de.onVnodeBeforeUpdate)&&gs(pe,N,A,w),ge&&ui(A,w,N,"beforeUpdate"),N&&hi(N,!0),(oe.innerHTML&&de.innerHTML==null||oe.textContent&&de.textContent==null)&&g(Y,""),X?P(w.dynamicChildren,X,Y,N,B,Ou(A,$),j):se||Oe(w,A,Y,null,N,B,Ou(A,$),j,!1),Q>0){if(Q&16)R(Y,oe,de,N,$);else if(Q&2&&oe.class!==de.class&&i(Y,"class",null,de.class,$),Q&4&&i(Y,"style",oe.style,de.style,$),Q&8){const Ee=A.dynamicProps;for(let Be=0;Be<Ee.length;Be++){const Me=Ee[Be],Nt=oe[Me],ht=de[Me];(ht!==Nt||Me==="value")&&i(Y,Me,Nt,ht,$,N)}}Q&1&&w.children!==A.children&&g(Y,A.children)}else!se&&X==null&&R(Y,oe,de,N,$);((pe=de.onVnodeUpdated)||ge)&&Tn(()=>{pe&&gs(pe,N,A,w),ge&&ui(A,w,N,"updated")},B)},P=(w,A,N,B,$,j,se)=>{for(let Y=0;Y<A.length;Y++){const Q=w[Y],X=A[Y],ge=Q.el&&(Q.type===ys||!Jo(Q,X)||Q.shapeFlag&198)?_(Q.el):N;q(Q,X,ge,null,B,$,j,se,!0)}},R=(w,A,N,B,$)=>{if(A!==N){if(A!==Ze)for(const j in A)!aa(j)&&!(j in N)&&i(w,j,A[j],null,$,B);for(const j in N){if(aa(j))continue;const se=N[j],Y=A[j];se!==Y&&j!=="value"&&i(w,j,Y,se,$,B)}"value"in N&&i(w,"value",A.value,N.value,$)}},D=(w,A,N,B,$,j,se,Y,Q)=>{const X=A.el=w?w.el:c(""),ge=A.anchor=w?w.anchor:c("");let{patchFlag:oe,dynamicChildren:de,slotScopeIds:pe}=A;pe&&(Y=Y?Y.concat(pe):pe),w==null?(s(X,N,B),s(ge,N,B),b(A.children||[],N,ge,$,j,se,Y,Q)):oe>0&&oe&64&&de&&w.dynamicChildren?(P(w.dynamicChildren,de,N,$,j,se,Y),(A.key!=null||$&&A===$.subTree)&&$m(w,A,!0)):Oe(w,A,N,ge,$,j,se,Y,Q)},T=(w,A,N,B,$,j,se,Y,Q)=>{A.slotScopeIds=Y,w==null?A.shapeFlag&512?$.ctx.activate(A,N,B,se,Q):lt(A,N,B,$,j,se,Q):Ft(w,A,Q)},lt=(w,A,N,B,$,j,se)=>{const Y=w.component=xb(w,B,$);if(Sm(w)&&(Y.ctx.renderer=fe),Mb(Y,!1,se),Y.asyncDep){if($&&$.registerDep(Y,ct,se),!w.el){const Q=Y.subTree=At(Mr);J(null,Q,A,N),w.placeholder=Q.el}}else ct(Y,w,A,N,$,j,se)},Ft=(w,A,N)=>{const B=A.component=w.component;if(Ab(w,A,N))if(B.asyncDep&&!B.asyncResolved){je(B,A,N);return}else B.next=A,B.update();else A.el=w.el,B.vnode=A},ct=(w,A,N,B,$,j,se)=>{const Y=()=>{if(w.isMounted){let{next:oe,bu:de,u:pe,parent:Ee,vnode:Be}=w;{const bt=Hm(w);if(bt){oe&&(oe.el=Be.el,je(w,oe,se)),bt.asyncDep.then(()=>{w.isUnmounted||Y()});return}}let Me=oe,Nt;hi(w,!1),oe?(oe.el=Be.el,je(w,oe,se)):oe=Be,de&&Vl(de),(Nt=oe.props&&oe.props.onVnodeBeforeUpdate)&&gs(Nt,Ee,oe,Be),hi(w,!0);const ht=zd(w),wt=w.subTree;w.subTree=ht,q(wt,ht,_(wt.el),U(wt),w,$,j),oe.el=ht.el,Me===null&&Sb(w,ht.el),pe&&Tn(pe,$),(Nt=oe.props&&oe.props.onVnodeUpdated)&&Tn(()=>gs(Nt,Ee,oe,Be),$)}else{let oe;const{el:de,props:pe}=A,{bm:Ee,m:Be,parent:Me,root:Nt,type:ht}=w,wt=ha(A);hi(w,!1),Ee&&Vl(Ee),!wt&&(oe=pe&&pe.onVnodeBeforeMount)&&gs(oe,Me,A),hi(w,!0);{Nt.ce&&Nt.ce._def.shadowRoot!==!1&&Nt.ce._injectChildStyle(ht);const bt=w.subTree=zd(w);q(null,bt,N,B,w,$,j),A.el=bt.el}if(Be&&Tn(Be,$),!wt&&(oe=pe&&pe.onVnodeMounted)){const bt=A;Tn(()=>gs(oe,Me,bt),$)}(A.shapeFlag&256||Me&&ha(Me.vnode)&&Me.vnode.shapeFlag&256)&&w.a&&Tn(w.a,$),w.isMounted=!0,A=N=B=null}};w.scope.on();const Q=w.effect=new tm(Y);w.scope.off();const X=w.update=Q.run.bind(Q),ge=w.job=Q.runIfDirty.bind(Q);ge.i=w,ge.id=w.uid,Q.scheduler=()=>Wh(ge),hi(w,!0),X()},je=(w,A,N)=>{A.component=w;const B=w.vnode.props;w.vnode=A,w.next=null,lb(w,A.props,B,N),fb(w,A.children,N),Ys(),Ld(w),Zs()},Oe=(w,A,N,B,$,j,se,Y,Q=!1)=>{const X=w&&w.children,ge=w?w.shapeFlag:0,oe=A.children,{patchFlag:de,shapeFlag:pe}=A;if(de>0){if(de&128){En(X,oe,N,B,$,j,se,Y,Q);return}else if(de&256){zt(X,oe,N,B,$,j,se,Y,Q);return}}pe&8?(ge&16&&ut(X,$,j),oe!==X&&g(N,oe)):ge&16?pe&16?En(X,oe,N,B,$,j,se,Y,Q):ut(X,$,j,!0):(ge&8&&g(N,""),pe&16&&b(oe,N,B,$,j,se,Y,Q))},zt=(w,A,N,B,$,j,se,Y,Q)=>{w=w||eo,A=A||eo;const X=w.length,ge=A.length,oe=Math.min(X,ge);let de;for(de=0;de<oe;de++){const pe=A[de]=Q?Ir(A[de]):vs(A[de]);q(w[de],pe,N,null,$,j,se,Y,Q)}X>ge?ut(w,$,j,!0,!1,oe):b(A,N,B,$,j,se,Y,Q,oe)},En=(w,A,N,B,$,j,se,Y,Q)=>{let X=0;const ge=A.length;let oe=w.length-1,de=ge-1;for(;X<=oe&&X<=de;){const pe=w[X],Ee=A[X]=Q?Ir(A[X]):vs(A[X]);if(Jo(pe,Ee))q(pe,Ee,N,null,$,j,se,Y,Q);else break;X++}for(;X<=oe&&X<=de;){const pe=w[oe],Ee=A[de]=Q?Ir(A[de]):vs(A[de]);if(Jo(pe,Ee))q(pe,Ee,N,null,$,j,se,Y,Q);else break;oe--,de--}if(X>oe){if(X<=de){const pe=de+1,Ee=pe<ge?A[pe].el:B;for(;X<=de;)q(null,A[X]=Q?Ir(A[X]):vs(A[X]),N,Ee,$,j,se,Y,Q),X++}}else if(X>de)for(;X<=oe;)gt(w[X],$,j,!0),X++;else{const pe=X,Ee=X,Be=new Map;for(X=Ee;X<=de;X++){const _t=A[X]=Q?Ir(A[X]):vs(A[X]);_t.key!=null&&Be.set(_t.key,X)}let Me,Nt=0;const ht=de-Ee+1;let wt=!1,bt=0;const Gt=new Array(ht);for(X=0;X<ht;X++)Gt[X]=0;for(X=pe;X<=oe;X++){const _t=w[X];if(Nt>=ht){gt(_t,$,j,!0);continue}let Tt;if(_t.key!=null)Tt=Be.get(_t.key);else for(Me=Ee;Me<=de;Me++)if(Gt[Me-Ee]===0&&Jo(_t,A[Me])){Tt=Me;break}Tt===void 0?gt(_t,$,j,!0):(Gt[Tt-Ee]=X+1,Tt>=bt?bt=Tt:wt=!0,q(_t,A[Tt],N,null,$,j,se,Y,Q),Nt++)}const ir=wt?mb(Gt):eo;for(Me=ir.length-1,X=ht-1;X>=0;X--){const _t=Ee+X,Tt=A[_t],qr=A[_t+1],Ps=_t+1<ge?qr.el||qr.placeholder:B;Gt[X]===0?q(null,Tt,N,Ps,$,j,se,Y,Q):wt&&(Me<0||X!==ir[Me]?H(Tt,N,Ps,2):Me--)}}},H=(w,A,N,B,$=null)=>{const{el:j,type:se,transition:Y,children:Q,shapeFlag:X}=w;if(X&6){H(w.component.subTree,A,N,B);return}if(X&128){w.suspense.move(A,N,B);return}if(X&64){se.move(w,A,N,fe);return}if(se===ys){s(j,A,N);for(let oe=0;oe<Q.length;oe++)H(Q[oe],A,N,B);s(w.anchor,A,N);return}if(se===Fl){ee(w,A,N);return}if(B!==2&&X&1&&Y)if(B===0)Y.beforeEnter(j),s(j,A,N),Tn(()=>Y.enter(j),$);else{const{leave:oe,delayLeave:de,afterLeave:pe}=Y,Ee=()=>{w.ctx.isUnmounted?r(j):s(j,A,N)},Be=()=>{j._isLeaving&&j[Lw](!0),oe(j,()=>{Ee(),pe&&pe()})};de?de(j,Ee,Be):Be()}else s(j,A,N)},gt=(w,A,N,B=!1,$=!1)=>{const{type:j,props:se,ref:Y,children:Q,dynamicChildren:X,shapeFlag:ge,patchFlag:oe,dirs:de,cacheIndex:pe}=w;if(oe===-2&&($=!1),Y!=null&&(Ys(),ua(Y,null,N,w,!0),Zs()),pe!=null&&(A.renderCache[pe]=void 0),ge&256){A.ctx.deactivate(w);return}const Ee=ge&1&&de,Be=!ha(w);let Me;if(Be&&(Me=se&&se.onVnodeBeforeUnmount)&&gs(Me,A,w),ge&6)mt(w.component,N,B);else{if(ge&128){w.suspense.unmount(N,B);return}Ee&&ui(w,null,A,"beforeUnmount"),ge&64?w.type.remove(w,A,N,fe,B):X&&!X.hasOnce&&(j!==ys||oe>0&&oe&64)?ut(X,A,N,!1,!0):(j===ys&&oe&384||!$&&ge&16)&&ut(Q,A,N),B&&Pn(w)}(Be&&(Me=se&&se.onVnodeUnmounted)||Ee)&&Tn(()=>{Me&&gs(Me,A,w),Ee&&ui(w,null,A,"unmounted")},N)},Pn=w=>{const{type:A,el:N,anchor:B,transition:$}=w;if(A===ys){an(N,B);return}if(A===Fl){ie(w);return}const j=()=>{r(N),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:se,delayLeave:Y}=$,Q=()=>se(N,j);Y?Y(w.el,j,Q):Q()}else j()},an=(w,A)=>{let N;for(;w!==A;)N=E(w),r(w),w=N;r(A)},mt=(w,A,N)=>{const{bum:B,scope:$,job:j,subTree:se,um:Y,m:Q,a:X}=w;Wd(Q),Wd(X),B&&Vl(B),$.stop(),j&&(j.flags|=8,gt(se,w,A,N)),Y&&Tn(Y,A),Tn(()=>{w.isUnmounted=!0},A)},ut=(w,A,N,B=!1,$=!1,j=0)=>{for(let se=j;se<w.length;se++)gt(w[se],A,N,B,$)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=E(w.anchor||w.el),N=A&&A[Vw];return N?E(N):A};let ae=!1;const F=(w,A,N)=>{w==null?A._vnode&&gt(A._vnode,null,null,!0):q(A._vnode||null,w,A,null,null,null,N),A._vnode=w,ae||(ae=!0,Ld(),wm(),ae=!1)},fe={p:q,um:gt,m:H,r:Pn,mt:lt,mc:b,pc:Oe,pbc:P,n:U,o:t};return{render:F,hydrate:void 0,createApp:ob(F)}}function Ou({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $m(t,e,n=!1){const s=t.children,r=e.children;if(_e(s)&&_e(r))for(let i=0;i<s.length;i++){const a=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=Ir(r[i]),c.el=a.el),!n&&c.patchFlag!==-2&&$m(a,c)),c.type===Mc&&c.patchFlag!==-1&&(c.el=a.el),c.type===Mr&&!c.el&&(c.el=a.el)}}function mb(t){const e=t.slice(),n=[0];let s,r,i,a,c;const u=t.length;for(s=0;s<u;s++){const d=t[s];if(d!==0){if(r=n[n.length-1],t[r]<d){e[s]=r,n.push(s);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<d?i=c+1:a=c;d<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Hm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hm(e)}function Wd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _b=Symbol.for("v-scx"),yb=()=>Zn(_b);function Ll(t,e,n){return qm(t,e,n)}function qm(t,e,n=Ze){const{immediate:s,deep:r,flush:i,once:a}=n,c=rn({},n),u=e&&s||!e&&i!=="post";let d;if(Ca){if(i==="sync"){const S=yb();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!u){const S=()=>{};return S.stop=Es,S.resume=Es,S.pause=Es,S}}const g=nn;c.call=(S,L,q)=>As(S,g,L,q);let _=!1;i==="post"?c.scheduler=S=>{Tn(S,g&&g.suspense)}:i!=="sync"&&(_=!0,c.scheduler=(S,L)=>{L?S():Wh(S)}),c.augmentJob=S=>{e&&(S.flags|=4),_&&(S.flags|=2,g&&(S.id=g.uid,S.i=g))};const E=kw(t,e,c);return Ca&&(d?d.push(E):u&&E()),E}function vb(t,e,n){const s=this.proxy,r=Ct(t)?t.includes(".")?Wm(s,t):()=>s[t]:t.bind(s,s);let i;Se(e)?i=e:(i=e.handler,n=e);const a=$a(this),c=qm(r,i.bind(s),n);return a(),c}function Wm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Eb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$n(e)}Modifiers`]||t[`${Ri(e)}Modifiers`];function wb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ze;let r=n;const i=e.startsWith("update:"),a=i&&Eb(s,e.slice(7));a&&(a.trim&&(r=n.map(g=>Ct(g)?g.trim():g)),a.number&&(r=n.map(Xl)));let c,u=s[c=Iu(e)]||s[c=Iu($n(e))];!u&&i&&(u=s[c=Iu(Ri(e))]),u&&As(u,t,6,r);const d=s[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,As(d,t,6,r)}}const bb=new WeakMap;function zm(t,e,n=!1){const s=n?bb:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let a={},c=!1;if(!Se(t)){const u=d=>{const g=zm(d,e,!0);g&&(c=!0,rn(a,g))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!c?(et(t)&&s.set(t,null),null):(_e(i)?i.forEach(u=>a[u]=null):rn(a,i),et(t)&&s.set(t,a),a)}function Vc(t,e){return!t||!Sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,Ri(e))||We(t,e))}function zd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:a,attrs:c,emit:u,render:d,renderCache:g,props:_,data:E,setupState:S,ctx:L,inheritAttrs:q}=t,G=ec(t);let J,K;try{if(n.shapeFlag&4){const ie=r||s,be=ie;J=vs(d.call(be,ie,g,_,S,E,L)),K=c}else{const ie=e;J=vs(ie.length>1?ie(_,{attrs:c,slots:a,emit:u}):ie(_,null)),K=e.props?c:Tb(c)}}catch(ie){da.length=0,Dc(ie,t,1),J=At(Mr)}let ee=J;if(K&&q!==!1){const ie=Object.keys(K),{shapeFlag:be}=ee;ie.length&&be&7&&(i&&ie.some(Nh)&&(K=Ib(K,i)),ee=uo(ee,K,!1,!0))}return n.dirs&&(ee=uo(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&zh(ee,n.transition),J=ee,ec(G),J}const Tb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sc(n))&&((e||(e={}))[n]=t[n]);return e},Ib=(t,e)=>{const n={};for(const s in t)(!Nh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ab(t,e,n){const{props:s,children:r,component:i}=t,{props:a,children:c,patchFlag:u}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Gd(s,a,d):!!a;if(u&8){const g=e.dynamicProps;for(let _=0;_<g.length;_++){const E=g[_];if(a[E]!==s[E]&&!Vc(d,E))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Gd(s,a,d):!0:!!a;return!1}function Gd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Vc(n,i))return!0}return!1}function Sb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gm=t=>t.__isSuspense;function Cb(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):xw(t)}const ys=Symbol.for("v-fgt"),Mc=Symbol.for("v-txt"),Mr=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),da=[];let Sn=null;function es(t=!1){da.push(Sn=t?null:[])}function Rb(){da.pop(),Sn=da[da.length-1]||null}let Sa=1;function sc(t,e=!1){Sa+=t,t<0&&Sn&&e&&(Sn.hasOnce=!0)}function Km(t){return t.dynamicChildren=Sa>0?Sn||eo:null,Rb(),Sa>0&&Sn&&Sn.push(t),t}function kr(t,e,n,s,r,i){return Km(re(t,e,n,s,r,i,!0))}function sh(t,e,n,s,r){return Km(At(t,e,n,s,r,!0))}function rc(t){return t?t.__v_isVNode===!0:!1}function Jo(t,e){return t.type===e.type&&t.key===e.key}const Qm=({key:t})=>t??null,Ul=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||sn(t)||Se(t)?{i:An,r:t,k:e,f:!!n}:t:null);function re(t,e=null,n=null,s=0,r=null,i=t===ys?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qm(e),ref:e&&Ul(e),scopeId:Tm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:An};return c?(Xh(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=Ct(n)?8:16),Sa>0&&!a&&Sn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Sn.push(u),u}const At=Pb;function Pb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Xw)&&(t=Mr),rc(t)){const c=uo(t,e,!0);return n&&Xh(c,n),Sa>0&&!i&&Sn&&(c.shapeFlag&6?Sn[Sn.indexOf(t)]=c:Sn.push(c)),c.patchFlag=-2,c}if(Bb(t)&&(t=t.__vccOpts),e){e=Ob(e);let{class:c,style:u}=e;c&&!Ct(c)&&(e.class=Oc(c)),et(u)&&(Hh(u)&&!_e(u)&&(u=rn({},u)),e.style=Vh(u))}const a=Ct(t)?1:Gm(t)?128:Mw(t)?64:et(t)?4:Se(t)?2:0;return re(t,e,n,s,r,a,i,!0)}function Ob(t){return t?Hh(t)||Mm(t)?rn({},t):t:null}function uo(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:a,children:c,transition:u}=t,d=e?kb(r||{},e):r,g={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Qm(d),ref:e&&e.ref?n&&i?_e(i)?i.concat(Ul(e)):[i,Ul(e)]:Ul(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ys?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&uo(t.ssContent),ssFallback:t.ssFallback&&uo(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&zh(g,u.clone(g)),g}function Qh(t=" ",e=0){return At(Mc,null,t,e)}function n1(t,e){const n=At(Fl,null,t);return n.staticCount=e,n}function Kd(t="",e=!1){return e?(es(),sh(Mr,null,t)):At(Mr,null,t)}function vs(t){return t==null||typeof t=="boolean"?At(Mr):_e(t)?At(ys,null,t.slice()):rc(t)?Ir(t):At(Mc,null,String(t))}function Ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:uo(t)}function Xh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Xh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Mm(e)?e._ctx=An:r===3&&An&&(An.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Se(e)?(e={default:e,_ctx:An},n=32):(e=String(e),s&64?(n=16,e=[Qh(e)]):n=8);t.children=e,t.shapeFlag|=n}function kb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Oc([e.class,s.class]));else if(r==="style")e.style=Vh([e.style,s.style]);else if(Sc(r)){const i=e[r],a=s[r];a&&i!==a&&!(_e(i)&&i.includes(a))&&(e[r]=i?[].concat(i,a):a)}else r!==""&&(e[r]=s[r])}return e}function gs(t,e,n,s=null){As(t,e,7,[n,s])}const Nb=Dm();let Db=0;function xb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Nb,i={uid:Db++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fm(s,r),emitsOptions:zm(s,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:s.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wb.bind(null,i),t.ce&&t.ce(i),i}let nn=null;const Vb=()=>nn||An;let ic,rh;{const t=Pc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};ic=e("__VUE_INSTANCE_SETTERS__",n=>nn=n),rh=e("__VUE_SSR_SETTERS__",n=>Ca=n)}const $a=t=>{const e=nn;return ic(t),t.scope.on(),()=>{t.scope.off(),ic(e)}},Qd=()=>{nn&&nn.scope.off(),ic(null)};function Xm(t){return t.vnode.shapeFlag&4}let Ca=!1;function Mb(t,e=!1,n=!1){e&&rh(e);const{props:s,children:r}=t.vnode,i=Xm(t);ab(t,s,i,e),hb(t,r,n||e);const a=i?Lb(t,e):void 0;return e&&rh(!1),a}function Lb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zw);const{setup:s}=n;if(s){Ys();const r=t.setupContext=s.length>1?Ub(t):null,i=$a(t),a=Ba(s,t,0,[t.props,r]),c=Kg(a);if(Zs(),i(),(c||t.sp)&&!ha(t)&&Am(t),c){if(a.then(Qd,Qd),e)return a.then(u=>{Xd(t,u)}).catch(u=>{Dc(u,t,0)});t.asyncDep=a}else Xd(t,a)}else Jm(t)}function Xd(t,e,n){Se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:et(e)&&(t.setupState=ym(e)),Jm(t)}function Jm(t,e,n){const s=t.type;t.render||(t.render=s.render||Es);{const r=$a(t);Ys();try{eb(t)}finally{Zs(),r()}}}const Fb={get(t,e){return en(t,"get",""),t[e]}};function Ub(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fb),slots:t.slots,emit:t.emit,expose:e}}function Lc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ym(Iw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fa)return fa[n](t)},has(e,n){return n in e||n in fa}})):t.proxy}function jb(t,e=!0){return Se(t)?t.displayName||t.name:t.name||e&&t.__name}function Bb(t){return Se(t)&&"__vccOpts"in t}const Fn=(t,e)=>Pw(t,e,Ca);function Ym(t,e,n){try{sc(-1);const s=arguments.length;return s===2?et(e)&&!_e(e)?rc(e)?At(t,null,[e]):At(t,e):At(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&rc(n)&&(n=[n]),At(t,e,n))}finally{sc(1)}}const $b="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ih;const Jd=typeof window<"u"&&window.trustedTypes;if(Jd)try{ih=Jd.createPolicy("vue",{createHTML:t=>t})}catch{}const Zm=ih?t=>ih.createHTML(t):t=>t,Hb="http://www.w3.org/2000/svg",qb="http://www.w3.org/1998/Math/MathML",Hs=typeof document<"u"?document:null,Yd=Hs&&Hs.createElement("template"),Wb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Hs.createElementNS(Hb,t):e==="mathml"?Hs.createElementNS(qb,t):n?Hs.createElement(t,{is:n}):Hs.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Hs.createTextNode(t),createComment:t=>Hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const a=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Yd.innerHTML=Zm(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=Yd.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zb=Symbol("_vtc");function Gb(t,e,n){const s=t[zb];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zd=Symbol("_vod"),Kb=Symbol("_vsh"),Qb=Symbol(""),Xb=/(?:^|;)\s*display\s*:/;function Jb(t,e,n){const s=t.style,r=Ct(n);let i=!1;if(n&&!r){if(e)if(Ct(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&jl(s,c,"")}else for(const a in e)n[a]==null&&jl(s,a,"");for(const a in n)a==="display"&&(i=!0),jl(s,a,n[a])}else if(r){if(e!==n){const a=s[Qb];a&&(n+=";"+a),s.cssText=n,i=Xb.test(n)}}else e&&t.removeAttribute("style");Zd in t&&(t[Zd]=i?s.display:"",t[Kb]&&(s.display="none"))}const ep=/\s*!important$/;function jl(t,e,n){if(_e(n))n.forEach(s=>jl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Yb(t,e);ep.test(n)?t.setProperty(Ri(s),n.replace(ep,""),"important"):t[s]=n}}const tp=["Webkit","Moz","ms"],ku={};function Yb(t,e){const n=ku[e];if(n)return n;let s=$n(e);if(s!=="filter"&&s in t)return ku[e]=s;s=Rc(s);for(let r=0;r<tp.length;r++){const i=tp[r]+s;if(i in t)return ku[e]=i}return e}const np="http://www.w3.org/1999/xlink";function sp(t,e,n,s,r,i=nw(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(np,e.slice(6,e.length)):t.setAttributeNS(np,e,n):n==null||i&&!Yg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Is(n)?String(n):n)}function rp(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function zs(t,e,n,s){t.addEventListener(e,n,s)}function Zb(t,e,n,s){t.removeEventListener(e,n,s)}const ip=Symbol("_vei");function eT(t,e,n,s,r=null){const i=t[ip]||(t[ip]={}),a=i[e];if(s&&a)a.value=s;else{const[c,u]=tT(e);if(s){const d=i[e]=rT(s,r);zs(t,c,d,u)}else a&&(Zb(t,c,a,u),i[e]=void 0)}}const op=/(?:Once|Passive|Capture)$/;function tT(t){let e;if(op.test(t)){e={};let s;for(;s=t.match(op);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ri(t.slice(2)),e]}let Nu=0;const nT=Promise.resolve(),sT=()=>Nu||(nT.then(()=>Nu=0),Nu=Date.now());function rT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;As(iT(s,n.value),e,5,[s])};return n.value=t,n.attached=sT(),n}function iT(t,e){if(_e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ap=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oT=(t,e,n,s,r,i)=>{const a=r==="svg";e==="class"?Gb(t,s,a):e==="style"?Jb(t,n,s):Sc(e)?Nh(e)||eT(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aT(t,e,s,a))?(rp(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sp(t,e,s,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ct(s))?rp(t,$n(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sp(t,e,s,a))};function aT(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ap(e)&&Se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ap(e)&&Ct(n)?!1:e in t}const Lr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Vl(e,n):e};function lT(t){t.target.composing=!0}function lp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn=Symbol("_assign"),cp={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Bn]=Lr(r);const i=s||r.props&&r.props.type==="number";zs(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Xl(c)),t[Bn](c)}),n&&zs(t,"change",()=>{t.value=t.value.trim()}),e||(zs(t,"compositionstart",lT),zs(t,"compositionend",lp),zs(t,"change",lp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},a){if(t[Bn]=Lr(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xl(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u))}},cT={deep:!0,created(t,e,n){t[Bn]=Lr(n),zs(t,"change",()=>{const s=t._modelValue,r=ho(t),i=t.checked,a=t[Bn];if(_e(s)){const c=Mh(s,r),u=c!==-1;if(i&&!u)a(s.concat(r));else if(!i&&u){const d=[...s];d.splice(c,1),a(d)}}else if(bo(s)){const c=new Set(s);i?c.add(r):c.delete(r),a(c)}else a(e_(t,i))})},mounted:up,beforeUpdate(t,e,n){t[Bn]=Lr(n),up(t,e,n)}};function up(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(_e(e))r=Mh(e,s.props.value)>-1;else if(bo(e))r=e.has(s.props.value);else{if(e===n)return;r=vi(e,e_(t,!0))}t.checked!==r&&(t.checked=r)}const uT={created(t,{value:e},n){t.checked=vi(e,n.props.value),t[Bn]=Lr(n),zs(t,"change",()=>{t[Bn](ho(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Bn]=Lr(s),e!==n&&(t.checked=vi(e,s.props.value))}},hT={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=bo(e);zs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Xl(ho(a)):ho(a));t[Bn](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,qh(()=>{t._assigning=!1})}),t[Bn]=Lr(s)},mounted(t,{value:e}){hp(t,e)},beforeUpdate(t,e,n){t[Bn]=Lr(n)},updated(t,{value:e}){t._assigning||hp(t,e)}};function hp(t,e){const n=t.multiple,s=_e(e);if(!(n&&!s&&!bo(e))){for(let r=0,i=t.options.length;r<i;r++){const a=t.options[r],c=ho(a);if(n)if(s){const u=typeof c;u==="string"||u==="number"?a.selected=e.some(d=>String(d)===String(c)):a.selected=Mh(e,c)>-1}else a.selected=e.has(c);else if(vi(ho(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ho(t){return"_value"in t?t._value:t.value}function e_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const s1={created(t,e,n){Al(t,e,n,null,"created")},mounted(t,e,n){Al(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Al(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Al(t,e,n,s,"updated")}};function fT(t,e){switch(t){case"SELECT":return hT;case"TEXTAREA":return cp;default:switch(e){case"checkbox":return cT;case"radio":return uT;default:return cp}}}function Al(t,e,n,s,r){const a=fT(t.tagName,n.props&&n.props.type)[r];a&&a(t,e,n,s)}const dT=["ctrl","shift","alt","meta"],pT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dT.some(n=>t[`${n}Key`]&&!e.includes(n))},r1=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let a=0;a<e.length;a++){const c=pT[e[a]];if(c&&c(r,e))return}return t(r,...i)}))},gT=rn({patchProp:oT},Wb);let fp;function mT(){return fp||(fp=db(gT))}const _T=((...t)=>{const e=mT().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=vT(s);if(!r)return;const i=e._component;!Se(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,yT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function yT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vT(t){return Ct(t)?document.querySelector(t):t}const ET="modulepreload",wT=function(t){return"/"+t},dp={},Fc=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let u=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");r=u(n.map(d=>{if(d=wT(d),d in dp)return;dp[d]=!0;const g=d.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${_}`))return;const E=document.createElement("link");if(E.rel=g?"stylesheet":ET,g||(E.as="script"),E.crossOrigin="",E.href=d,c&&E.setAttribute("nonce",c),document.head.appendChild(E),g)return new Promise((S,L)=>{E.addEventListener("load",S),E.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return r.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Xi=typeof document<"u";function t_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&t_(t.default)}const He=Object.assign;function Du(t,e){const n={};for(const s in e){const r=e[s];n[s]=ts(r)?r.map(t):t(r)}return n}const pa=()=>{},ts=Array.isArray;function pp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const n_=/#/g,TT=/&/g,IT=/\//g,AT=/=/g,ST=/\?/g,s_=/\+/g,CT=/%5B/g,RT=/%5D/g,r_=/%5E/g,PT=/%60/g,i_=/%7B/g,OT=/%7C/g,o_=/%7D/g,kT=/%20/g;function Jh(t){return t==null?"":encodeURI(""+t).replace(OT,"|").replace(CT,"[").replace(RT,"]")}function NT(t){return Jh(t).replace(i_,"{").replace(o_,"}").replace(r_,"^")}function oh(t){return Jh(t).replace(s_,"%2B").replace(kT,"+").replace(n_,"%23").replace(TT,"%26").replace(PT,"`").replace(i_,"{").replace(o_,"}").replace(r_,"^")}function DT(t){return oh(t).replace(AT,"%3D")}function xT(t){return Jh(t).replace(n_,"%23").replace(ST,"%3F")}function VT(t){return xT(t).replace(IT,"%2F")}function Ra(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const MT=/\/$/,LT=t=>t.replace(MT,"");function xu(t,e,n="/"){let s,r={},i="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return u=c>=0&&u>c?-1:u,u>=0&&(s=e.slice(0,u),i=e.slice(u,c>0?c:e.length),r=t(i.slice(1))),c>=0&&(s=s||e.slice(0,c),a=e.slice(c,e.length)),s=BT(s??e,n),{fullPath:s+i+a,path:s,query:r,hash:Ra(a)}}function FT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&fo(e.matched[s],n.matched[r])&&a_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function a_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jT(t[n],e[n]))return!1;return!0}function jT(t,e){return ts(t)?mp(t,e):ts(e)?mp(e,t):t===e}function mp(t,e){return ts(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function BT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,a,c;for(a=0;a<s.length;a++)if(c=s[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(a).join("/")}const wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ah=(function(t){return t.pop="pop",t.push="push",t})({}),Vu=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function $T(t){if(!t)if(Xi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LT(t)}const HT=/^[^#]+#/;function qT(t,e){return t.replace(HT,"#")+e}function WT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Uc=()=>({left:window.scrollX,top:window.scrollY});function zT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=WT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _p(t,e){return(history.state?history.state.position-e:-1)+t}const lh=new Map;function GT(t,e){lh.set(t,e)}function KT(t){const e=lh.get(t);return lh.delete(t),e}function QT(t){return typeof t=="string"||t&&typeof t=="object"}function l_(t){return typeof t=="string"||typeof t=="symbol"}let dt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const c_=Symbol("");dt.MATCHER_NOT_FOUND+"",dt.NAVIGATION_GUARD_REDIRECT+"",dt.NAVIGATION_ABORTED+"",dt.NAVIGATION_CANCELLED+"",dt.NAVIGATION_DUPLICATED+"";function po(t,e){return He(new Error,{type:t,[c_]:!0},e)}function $s(t,e){return t instanceof Error&&c_ in t&&(e==null||!!(t.type&e))}const XT=["params","query","hash"];function JT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of XT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function YT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(s_," "),i=r.indexOf("="),a=Ra(i<0?r:r.slice(0,i)),c=i<0?null:Ra(r.slice(i+1));if(a in e){let u=e[a];ts(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function yp(t){let e="";for(let n in t){const s=t[n];if(n=DT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ts(s)?s.map(r=>r&&oh(r)):[s&&oh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ZT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ts(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const eI=Symbol(""),vp=Symbol(""),jc=Symbol(""),Yh=Symbol(""),ch=Symbol("");function Yo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ar(t,e,n,s,r,i=a=>a()){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,u)=>{const d=E=>{E===!1?u(po(dt.NAVIGATION_ABORTED,{from:n,to:e})):E instanceof Error?u(E):QT(E)?u(po(dt.NAVIGATION_GUARD_REDIRECT,{from:e,to:E})):(a&&s.enterCallbacks[r]===a&&typeof E=="function"&&a.push(E),c())},g=i(()=>t.call(s&&s.instances[r],e,n,d));let _=Promise.resolve(g);t.length<3&&(_=_.then(d)),_.catch(E=>u(E))})}function Mu(t,e,n,s,r=i=>i()){const i=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(t_(u)){const d=(u.__vccOpts||u)[e];d&&i.push(Ar(d,n,s,a,c,r))}else{let d=u();i.push(()=>d.then(g=>{if(!g)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const _=bT(g)?g.default:g;a.mods[c]=g,a.components[c]=_;const E=(_.__vccOpts||_)[e];return E&&Ar(E,n,s,a,c,r)()}))}}return i}function tI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(d=>fo(d,c))?s.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(d=>fo(d,u))||r.push(u))}return[n,s,r]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nI=()=>location.protocol+"//"+location.host;function u_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),gp(c,"")}return gp(n,t)+s+r}function sI(t,e,n,s){let r=[],i=[],a=null;const c=({state:E})=>{const S=u_(t,location),L=n.value,q=e.value;let G=0;if(E){if(n.value=S,e.value=E,a&&a===L){a=null;return}G=q?E.position-q.position:0}else s(S);r.forEach(J=>{J(n.value,L,{delta:G,type:ah.pop,direction:G?G>0?Vu.forward:Vu.back:Vu.unknown})})};function u(){a=n.value}function d(E){r.push(E);const S=()=>{const L=r.indexOf(E);L>-1&&r.splice(L,1)};return i.push(S),S}function g(){if(document.visibilityState==="hidden"){const{history:E}=window;if(!E.state)return;E.replaceState(He({},E.state,{scroll:Uc()}),"")}}function _(){for(const E of i)E();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",g),document.removeEventListener("visibilitychange",g)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",g),document.addEventListener("visibilitychange",g),{pauseListeners:u,listen:d,destroy:_}}function Ep(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Uc():null}}function rI(t){const{history:e,location:n}=window,s={value:u_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,d,g){const _=t.indexOf("#"),E=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+u:nI()+t+u;try{e[g?"replaceState":"pushState"](d,"",E),r.value=d}catch(S){console.error(S),n[g?"replace":"assign"](E)}}function a(u,d){i(u,He({},e.state,Ep(r.value.back,u,r.value.forward,!0),d,{position:r.value.position}),!0),s.value=u}function c(u,d){const g=He({},r.value,e.state,{forward:u,scroll:Uc()});i(g.current,g,!0),i(u,He({},Ep(s.value,u,null),{position:g.position+1},d),!1),s.value=u}return{location:s,state:r,push:c,replace:a}}function iI(t){t=$T(t);const e=rI(t),n=sI(t,e.state,e.location,e.replace);function s(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=He({location:"",base:t,go:s,createHref:qT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let pi=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ot=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ot||{});const oI={type:pi.Static,value:""},aI=/[a-zA-Z0-9_]/;function lI(t){if(!t)return[[]];if(t==="/")return[[oI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${d}": ${S}`)}let n=Ot.Static,s=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let c=0,u,d="",g="";function _(){d&&(n===Ot.Static?i.push({type:pi.Static,value:d}):n===Ot.Param||n===Ot.ParamRegExp||n===Ot.ParamRegExpEnd?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:pi.Param,value:d,regexp:g,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),d="")}function E(){d+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==Ot.ParamRegExp){s=n,n=Ot.EscapeNext;continue}switch(n){case Ot.Static:u==="/"?(d&&_(),a()):u===":"?(_(),n=Ot.Param):E();break;case Ot.EscapeNext:E(),n=s;break;case Ot.Param:u==="("?n=Ot.ParamRegExp:aI.test(u)?E():(_(),n=Ot.Static,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case Ot.ParamRegExp:u===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+u:n=Ot.ParamRegExpEnd:g+=u;break;case Ot.ParamRegExpEnd:_(),n=Ot.Static,u!=="*"&&u!=="?"&&u!=="+"&&c--,g="";break;default:e("Unknown state");break}}return n===Ot.ParamRegExp&&e(`Unfinished custom RegExp for param "${d}"`),_(),a(),r}const wp="[^/]+?",cI={sensitive:!1,strict:!1,start:!0,end:!0};var fn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(fn||{});const uI=/[.+*?^${}()[\]/\\]/g;function hI(t,e){const n=He({},cI,e),s=[];let r=n.start?"^":"";const i=[];for(const d of t){const g=d.length?[]:[fn.Root];n.strict&&!d.length&&(r+="/");for(let _=0;_<d.length;_++){const E=d[_];let S=fn.Segment+(n.sensitive?fn.BonusCaseSensitive:0);if(E.type===pi.Static)_||(r+="/"),r+=E.value.replace(uI,"\\$&"),S+=fn.Static;else if(E.type===pi.Param){const{value:L,repeatable:q,optional:G,regexp:J}=E;i.push({name:L,repeatable:q,optional:G});const K=J||wp;if(K!==wp){S+=fn.BonusCustomRegExp;try{`${K}`}catch(ie){throw new Error(`Invalid custom RegExp for param "${L}" (${K}): `+ie.message)}}let ee=q?`((?:${K})(?:/(?:${K}))*)`:`(${K})`;_||(ee=G&&d.length<2?`(?:/${ee})`:"/"+ee),G&&(ee+="?"),r+=ee,S+=fn.Dynamic,G&&(S+=fn.BonusOptional),q&&(S+=fn.BonusRepeatable),K===".*"&&(S+=fn.BonusWildcard)}g.push(S)}s.push(g)}if(n.strict&&n.end){const d=s.length-1;s[d][s[d].length-1]+=fn.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function c(d){const g=d.match(a),_={};if(!g)return null;for(let E=1;E<g.length;E++){const S=g[E]||"",L=i[E-1];_[L.name]=S&&L.repeatable?S.split("/"):S}return _}function u(d){let g="",_=!1;for(const E of t){(!_||!g.endsWith("/"))&&(g+="/"),_=!1;for(const S of E)if(S.type===pi.Static)g+=S.value;else if(S.type===pi.Param){const{value:L,repeatable:q,optional:G}=S,J=L in d?d[L]:"";if(ts(J)&&!q)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const K=ts(J)?J.join("/"):J;if(!K)if(G)E.length<2&&(g.endsWith("/")?g=g.slice(0,-1):_=!0);else throw new Error(`Missing required param "${L}"`);g+=K}}return g||"/"}return{re:a,score:s,keys:i,parse:c,stringify:u}}function fI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===fn.Static+fn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===fn.Static+fn.Segment?1:-1:0}function h_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=fI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(bp(s))return 1;if(bp(r))return-1}return r.length-s.length}function bp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dI={strict:!1,end:!0,sensitive:!1};function pI(t,e,n){const s=hI(lI(t.path),n),r=He(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gI(t,e){const n=[],s=new Map;e=pp(dI,e);function r(_){return s.get(_)}function i(_,E,S){const L=!S,q=Ip(_);q.aliasOf=S&&S.record;const G=pp(e,_),J=[q];if("alias"in _){const ie=typeof _.alias=="string"?[_.alias]:_.alias;for(const be of ie)J.push(Ip(He({},q,{components:S?S.record.components:q.components,path:be,aliasOf:S?S.record:q})))}let K,ee;for(const ie of J){const{path:be}=ie;if(E&&be[0]!=="/"){const Ve=E.record.path,C=Ve[Ve.length-1]==="/"?"":"/";ie.path=E.record.path+(be&&C+be)}if(K=pI(ie,E,G),S?S.alias.push(K):(ee=ee||K,ee!==K&&ee.alias.push(K),L&&_.name&&!Ap(K)&&a(_.name)),f_(K)&&u(K),q.children){const Ve=q.children;for(let C=0;C<Ve.length;C++)i(Ve[C],K,S&&S.children[C])}S=S||K}return ee?()=>{a(ee)}:pa}function a(_){if(l_(_)){const E=s.get(_);E&&(s.delete(_),n.splice(n.indexOf(E),1),E.children.forEach(a),E.alias.forEach(a))}else{const E=n.indexOf(_);E>-1&&(n.splice(E,1),_.record.name&&s.delete(_.record.name),_.children.forEach(a),_.alias.forEach(a))}}function c(){return n}function u(_){const E=yI(_,n);n.splice(E,0,_),_.record.name&&!Ap(_)&&s.set(_.record.name,_)}function d(_,E){let S,L={},q,G;if("name"in _&&_.name){if(S=s.get(_.name),!S)throw po(dt.MATCHER_NOT_FOUND,{location:_});G=S.record.name,L=He(Tp(E.params,S.keys.filter(ee=>!ee.optional).concat(S.parent?S.parent.keys.filter(ee=>ee.optional):[]).map(ee=>ee.name)),_.params&&Tp(_.params,S.keys.map(ee=>ee.name))),q=S.stringify(L)}else if(_.path!=null)q=_.path,S=n.find(ee=>ee.re.test(q)),S&&(L=S.parse(q),G=S.record.name);else{if(S=E.name?s.get(E.name):n.find(ee=>ee.re.test(E.path)),!S)throw po(dt.MATCHER_NOT_FOUND,{location:_,currentLocation:E});G=S.record.name,L=He({},E.params,_.params),q=S.stringify(L)}const J=[];let K=S;for(;K;)J.unshift(K.record),K=K.parent;return{name:G,path:q,params:L,matched:J,meta:_I(J)}}t.forEach(_=>i(_));function g(){n.length=0,s.clear()}return{addRoute:i,resolve:d,removeRoute:a,clearRoutes:g,getRoutes:c,getRecordMatcher:r}}function Tp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ip(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:mI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function mI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ap(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _I(t){return t.reduce((e,n)=>He(e,n.meta),{})}function yI(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;h_(t,e[i])<0?s=i:n=i+1}const r=vI(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function vI(t){let e=t;for(;e=e.parent;)if(f_(e)&&h_(t,e)===0)return e}function f_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Sp(t){const e=Zn(jc),n=Zn(Yh),s=Fn(()=>{const u=pn(t.to);return e.resolve(u)}),r=Fn(()=>{const{matched:u}=s.value,{length:d}=u,g=u[d-1],_=n.matched;if(!g||!_.length)return-1;const E=_.findIndex(fo.bind(null,g));if(E>-1)return E;const S=Cp(u[d-2]);return d>1&&Cp(g)===S&&_[_.length-1].path!==S?_.findIndex(fo.bind(null,u[d-2])):E}),i=Fn(()=>r.value>-1&&TI(n.params,s.value.params)),a=Fn(()=>r.value>-1&&r.value===n.matched.length-1&&a_(n.params,s.value.params));function c(u={}){if(bI(u)){const d=e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(pa);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:s,href:Fn(()=>s.value.href),isActive:i,isExactActive:a,navigate:c}}function EI(t){return t.length===1?t[0]:t}const wI=Im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sp,setup(t,{slots:e}){const n=ja(Sp(t)),{options:s}=Zn(jc),r=Fn(()=>({[Rp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Rp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&EI(e.default(n));return t.custom?i:Ym("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),sa=wI;function bI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ts(r)||r.length!==s.length||s.some((i,a)=>i!==r[a]))return!1}return!0}function Cp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rp=(t,e,n)=>t??e??n,II=Im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Zn(ch),r=Fn(()=>t.route||s.value),i=Zn(vp,0),a=Fn(()=>{let d=pn(i);const{matched:g}=r.value;let _;for(;(_=g[d])&&!_.components;)d++;return d}),c=Fn(()=>r.value.matched[a.value]);Ml(vp,Fn(()=>a.value+1)),Ml(eI,c),Ml(ch,r);const u=mm();return Ll(()=>[u.value,c.value,t.name],([d,g,_],[E,S,L])=>{g&&(g.instances[_]=d,S&&S!==g&&d&&d===E&&(g.leaveGuards.size||(g.leaveGuards=S.leaveGuards),g.updateGuards.size||(g.updateGuards=S.updateGuards))),d&&g&&(!S||!fo(g,S)||!E)&&(g.enterCallbacks[_]||[]).forEach(q=>q(d))},{flush:"post"}),()=>{const d=r.value,g=t.name,_=c.value,E=_&&_.components[g];if(!E)return Pp(n.default,{Component:E,route:d});const S=_.props[g],L=S?S===!0?d.params:typeof S=="function"?S(d):S:null,G=Ym(E,He({},L,e,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(_.instances[g]=null)},ref:u}));return Pp(n.default,{Component:G,route:d})||G}}});function Pp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const AI=II;function SI(t){const e=gI(t.routes,t),n=t.parseQuery||YT,s=t.stringifyQuery||yp,r=t.history,i=Yo(),a=Yo(),c=Yo(),u=Aw(wr);let d=wr;Xi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Du.bind(null,U=>""+U),_=Du.bind(null,VT),E=Du.bind(null,Ra);function S(U,ae){let F,fe;return l_(U)?(F=e.getRecordMatcher(U),fe=ae):fe=U,e.addRoute(fe,F)}function L(U){const ae=e.getRecordMatcher(U);ae&&e.removeRoute(ae)}function q(){return e.getRoutes().map(U=>U.record)}function G(U){return!!e.getRecordMatcher(U)}function J(U,ae){if(ae=He({},ae||u.value),typeof U=="string"){const N=xu(n,U,ae.path),B=e.resolve({path:N.path},ae),$=r.createHref(N.fullPath);return He(N,B,{params:E(B.params),hash:Ra(N.hash),redirectedFrom:void 0,href:$})}let F;if(U.path!=null)F=He({},U,{path:xu(n,U.path,ae.path).path});else{const N=He({},U.params);for(const B in N)N[B]==null&&delete N[B];F=He({},U,{params:_(N)}),ae.params=_(ae.params)}const fe=e.resolve(F,ae),ke=U.hash||"";fe.params=g(E(fe.params));const w=FT(s,He({},U,{hash:NT(ke),path:fe.path})),A=r.createHref(w);return He({fullPath:w,hash:ke,query:s===yp?ZT(U.query):U.query||{}},fe,{redirectedFrom:void 0,href:A})}function K(U){return typeof U=="string"?xu(n,U,u.value.path):He({},U)}function ee(U,ae){if(d!==U)return po(dt.NAVIGATION_CANCELLED,{from:ae,to:U})}function ie(U){return C(U)}function be(U){return ie(He(K(U),{replace:!0}))}function Ve(U,ae){const F=U.matched[U.matched.length-1];if(F&&F.redirect){const{redirect:fe}=F;let ke=typeof fe=="function"?fe(U,ae):fe;return typeof ke=="string"&&(ke=ke.includes("?")||ke.includes("#")?ke=K(ke):{path:ke},ke.params={}),He({query:U.query,hash:U.hash,params:ke.path!=null?{}:U.params},ke)}}function C(U,ae){const F=d=J(U),fe=u.value,ke=U.state,w=U.force,A=U.replace===!0,N=Ve(F,fe);if(N)return C(He(K(N),{state:typeof N=="object"?He({},ke,N.state):ke,force:w,replace:A}),ae||F);const B=F;B.redirectedFrom=ae;let $;return!w&&UT(s,fe,F)&&($=po(dt.NAVIGATION_DUPLICATED,{to:B,from:fe}),H(fe,fe,!0,!1)),($?Promise.resolve($):P(B,fe)).catch(j=>$s(j)?$s(j,dt.NAVIGATION_GUARD_REDIRECT)?j:En(j):Oe(j,B,fe)).then(j=>{if(j){if($s(j,dt.NAVIGATION_GUARD_REDIRECT))return C(He({replace:A},K(j.to),{state:typeof j.to=="object"?He({},ke,j.to.state):ke,force:w}),ae||B)}else j=D(B,fe,!0,A,ke);return R(B,fe,j),j})}function b(U,ae){const F=ee(U,ae);return F?Promise.reject(F):Promise.resolve()}function I(U){const ae=an.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(U):U()}function P(U,ae){let F;const[fe,ke,w]=tI(U,ae);F=Mu(fe.reverse(),"beforeRouteLeave",U,ae);for(const N of fe)N.leaveGuards.forEach(B=>{F.push(Ar(B,U,ae))});const A=b.bind(null,U,ae);return F.push(A),ut(F).then(()=>{F=[];for(const N of i.list())F.push(Ar(N,U,ae));return F.push(A),ut(F)}).then(()=>{F=Mu(ke,"beforeRouteUpdate",U,ae);for(const N of ke)N.updateGuards.forEach(B=>{F.push(Ar(B,U,ae))});return F.push(A),ut(F)}).then(()=>{F=[];for(const N of w)if(N.beforeEnter)if(ts(N.beforeEnter))for(const B of N.beforeEnter)F.push(Ar(B,U,ae));else F.push(Ar(N.beforeEnter,U,ae));return F.push(A),ut(F)}).then(()=>(U.matched.forEach(N=>N.enterCallbacks={}),F=Mu(w,"beforeRouteEnter",U,ae,I),F.push(A),ut(F))).then(()=>{F=[];for(const N of a.list())F.push(Ar(N,U,ae));return F.push(A),ut(F)}).catch(N=>$s(N,dt.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function R(U,ae,F){c.list().forEach(fe=>I(()=>fe(U,ae,F)))}function D(U,ae,F,fe,ke){const w=ee(U,ae);if(w)return w;const A=ae===wr,N=Xi?history.state:{};F&&(fe||A?r.replace(U.fullPath,He({scroll:A&&N&&N.scroll},ke)):r.push(U.fullPath,ke)),u.value=U,H(U,ae,F,A),En()}let T;function lt(){T||(T=r.listen((U,ae,F)=>{if(!mt.listening)return;const fe=J(U),ke=Ve(fe,mt.currentRoute.value);if(ke){C(He(ke,{replace:!0,force:!0}),fe).catch(pa);return}d=fe;const w=u.value;Xi&&GT(_p(w.fullPath,F.delta),Uc()),P(fe,w).catch(A=>$s(A,dt.NAVIGATION_ABORTED|dt.NAVIGATION_CANCELLED)?A:$s(A,dt.NAVIGATION_GUARD_REDIRECT)?(C(He(K(A.to),{force:!0}),fe).then(N=>{$s(N,dt.NAVIGATION_ABORTED|dt.NAVIGATION_DUPLICATED)&&!F.delta&&F.type===ah.pop&&r.go(-1,!1)}).catch(pa),Promise.reject()):(F.delta&&r.go(-F.delta,!1),Oe(A,fe,w))).then(A=>{A=A||D(fe,w,!1),A&&(F.delta&&!$s(A,dt.NAVIGATION_CANCELLED)?r.go(-F.delta,!1):F.type===ah.pop&&$s(A,dt.NAVIGATION_ABORTED|dt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),R(fe,w,A)}).catch(pa)}))}let Ft=Yo(),ct=Yo(),je;function Oe(U,ae,F){En(U);const fe=ct.list();return fe.length?fe.forEach(ke=>ke(U,ae,F)):console.error(U),Promise.reject(U)}function zt(){return je&&u.value!==wr?Promise.resolve():new Promise((U,ae)=>{Ft.add([U,ae])})}function En(U){return je||(je=!U,lt(),Ft.list().forEach(([ae,F])=>U?F(U):ae()),Ft.reset()),U}function H(U,ae,F,fe){const{scrollBehavior:ke}=t;if(!Xi||!ke)return Promise.resolve();const w=!F&&KT(_p(U.fullPath,0))||(fe||!F)&&history.state&&history.state.scroll||null;return qh().then(()=>ke(U,ae,w)).then(A=>A&&zT(A)).catch(A=>Oe(A,U,ae))}const gt=U=>r.go(U);let Pn;const an=new Set,mt={currentRoute:u,listening:!0,addRoute:S,removeRoute:L,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:q,resolve:J,options:t,push:ie,replace:be,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:ct.add,isReady:zt,install(U){U.component("RouterLink",sa),U.component("RouterView",AI),U.config.globalProperties.$router=mt,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(u)}),Xi&&!Pn&&u.value===wr&&(Pn=!0,ie(r.location).catch(fe=>{}));const ae={};for(const fe in wr)Object.defineProperty(ae,fe,{get:()=>u.value[fe],enumerable:!0});U.provide(jc,mt),U.provide(Yh,gm(ae)),U.provide(ch,u);const F=U.unmount;an.add(U),U.unmount=function(){an.delete(U),an.size<1&&(d=wr,T&&T(),T=null,u.value=wr,Pn=!1,je=!1),F()}}};function ut(U){return U.reduce((ae,F)=>ae.then(()=>I(F)),Promise.resolve())}return mt}function CI(){return Zn(jc)}function RI(t){return Zn(Yh)}const PI=()=>{};var Op={};/**
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
 */const d_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},OI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],c=t[n++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},p_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,c=a?t[r+1]:0,u=r+2<t.length,d=u?t[r+2]:0,g=i>>2,_=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(E=64)),s.push(n[g],n[_],n[E],n[S])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const _=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||d==null||_==null)throw new kI;const E=i<<2|c>>4;if(s.push(E),d!==64){const S=c<<4&240|d>>2;if(s.push(S),_!==64){const L=d<<6&192|_;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NI=function(t){const e=d_(t);return p_.encodeByteArray(e,!0)},oc=function(t){return NI(t).replace(/\./g,"")},g_=function(t){try{return p_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xI=()=>DI().__FIREBASE_DEFAULTS__,VI=()=>{if(typeof process>"u"||typeof Op>"u")return;const t=Op.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&g_(t[1]);return e&&JSON.parse(e)},Bc=()=>{try{return PI()||xI()||VI()||MI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},m_=t=>Bc()?.emulatorHosts?.[t],LI=t=>{const e=m_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},__=()=>Bc()?.config,y_=t=>Bc()?.[`_${t}`];/**
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
 */class FI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function To(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function v_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function UI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[oc(JSON.stringify(n)),oc(JSON.stringify(a)),""].join(".")}const ga={};function jI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ga))ga[e]?t.emulator.push(e):t.prod.push(e);return t}function BI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kp=!1;function E_(t,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||ga[t]===e||ga[t]||kp)return;ga[t]=e;function n(E){return`__firebase__banner__${E}`}const s="__firebase__banner",i=jI().prod.length>0;function a(){const E=document.getElementById(s);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,S){E.setAttribute("width","24"),E.setAttribute("id",S),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{kp=!0,a()},E}function g(E,S){E.setAttribute("id",S),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function _(){const E=BI(s),S=n("text"),L=document.getElementById(S)||document.createElement("span"),q=n("learnmore"),G=document.getElementById(q)||document.createElement("a"),J=n("preprendIcon"),K=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const ee=E.element;c(ee),g(G,q);const ie=d();u(K,J),ee.append(K,L,G,ie),document.body.appendChild(ee)}i?(L.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function HI(){const t=Bc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const t=on();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KI(){return!HI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QI(){try{return typeof indexedDB=="object"}catch{return!1}}function XI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const JI="FirebaseError";class sr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=JI,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?YI(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new sr(r,c,s)}}function YI(t,e){return t.replace(ZI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ZI=/\{\$([^}]+)}/g;function eA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ei(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(Np(i)&&Np(a)){if(!Ei(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
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
 */function qa(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ra(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ia(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tA(t,e){const n=new nA(t,e);return n.subscribe.bind(n)}class nA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Lu),r.error===void 0&&(r.error=Lu),r.complete===void 0&&(r.complete=Lu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const di="[DEFAULT]";/**
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
 */class rA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new FI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iA(t){return t===di?void 0:t}function oA(t){return t.instantiationMode==="EAGER"}/**
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
 */class aA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const lA={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},cA=xe.INFO,uA={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},hA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=uA[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zh{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=hA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const fA=(t,e)=>e.some(n=>t instanceof n);let Dp,xp;function dA(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pA(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w_=new WeakMap,uh=new WeakMap,b_=new WeakMap,Fu=new WeakMap,ef=new WeakMap;function gA(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Nr(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&w_.set(n,t)}).catch(()=>{}),ef.set(e,t),e}function mA(t){if(uh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});uh.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||b_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _A(t){hh=t(hh)}function yA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Uu(this),e,...n);return b_.set(s,e.sort?e.sort():[e]),Nr(s)}:pA().includes(t)?function(...e){return t.apply(Uu(this),e),Nr(w_.get(this))}:function(...e){return Nr(t.apply(Uu(this),e))}}function vA(t){return typeof t=="function"?yA(t):(t instanceof IDBTransaction&&mA(t),fA(t,dA())?new Proxy(t,hh):t)}function Nr(t){if(t instanceof IDBRequest)return gA(t);if(Fu.has(t))return Fu.get(t);const e=vA(t);return e!==t&&(Fu.set(t,e),ef.set(e,t)),e}const Uu=t=>ef.get(t);function EA(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),c=Nr(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Nr(a.result),u.oldVersion,u.newVersion,Nr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const wA=["get","getKey","getAll","getAllKeys","count"],bA=["put","add","delete","clear"],ju=new Map;function Vp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=bA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wA.includes(n)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&u.done]))[0]};return ju.set(e,i),i}_A(t=>({...t,get:(e,n,s)=>Vp(e,n)||t.get(e,n,s),has:(e,n)=>!!Vp(e,n)||t.has(e,n)}));/**
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
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function IA(t){return t.getComponent()?.type==="VERSION"}const fh="@firebase/app",Mp="0.14.4";/**
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
 */const er=new Zh("@firebase/app"),AA="@firebase/app-compat",SA="@firebase/analytics-compat",CA="@firebase/analytics",RA="@firebase/app-check-compat",PA="@firebase/app-check",OA="@firebase/auth",kA="@firebase/auth-compat",NA="@firebase/database",DA="@firebase/data-connect",xA="@firebase/database-compat",VA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",FA="@firebase/installations-compat",UA="@firebase/messaging",jA="@firebase/messaging-compat",BA="@firebase/performance",$A="@firebase/performance-compat",HA="@firebase/remote-config",qA="@firebase/remote-config-compat",WA="@firebase/storage",zA="@firebase/storage-compat",GA="@firebase/firestore",KA="@firebase/ai",QA="@firebase/firestore-compat",XA="firebase",JA="12.4.0";/**
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
 */const dh="[DEFAULT]",YA={[fh]:"fire-core",[AA]:"fire-core-compat",[CA]:"fire-analytics",[SA]:"fire-analytics-compat",[PA]:"fire-app-check",[RA]:"fire-app-check-compat",[OA]:"fire-auth",[kA]:"fire-auth-compat",[NA]:"fire-rtdb",[DA]:"fire-data-connect",[xA]:"fire-rtdb-compat",[VA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[FA]:"fire-iid-compat",[UA]:"fire-fcm",[jA]:"fire-fcm-compat",[BA]:"fire-perf",[$A]:"fire-perf-compat",[HA]:"fire-rc",[qA]:"fire-rc-compat",[WA]:"fire-gcs",[zA]:"fire-gcs-compat",[GA]:"fire-fst",[QA]:"fire-fst-compat",[KA]:"fire-vertex","fire-js":"fire-js",[XA]:"fire-js-all"};/**
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
 */const Pa=new Map,ZA=new Map,ph=new Map;function Lp(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function go(t){const e=t.name;if(ph.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of Pa.values())Lp(n,t);for(const n of ZA.values())Lp(n,t);return!0}function tf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new Ha("app","Firebase",eS);/**
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
 */class tS{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Io=JA;function T_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:dh,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Dr.create("bad-app-name",{appName:String(r)});if(n||(n=__()),!n)throw Dr.create("no-options");const i=Pa.get(r);if(i){if(Ei(n,i.options)&&Ei(s,i.config))return i;throw Dr.create("duplicate-app",{appName:r})}const a=new aA(r);for(const u of ph.values())a.addComponent(u);const c=new tS(n,s,a);return Pa.set(r,c),c}function nf(t=dh){const e=Pa.get(t);if(!e&&t===dh&&__())return T_();if(!e)throw Dr.create("no-app",{appName:t});return e}function nS(){return Array.from(Pa.values())}function xr(t,e,n){let s=YA[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}go(new wi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sS="firebase-heartbeat-database",rS=1,Oa="firebase-heartbeat-store";let Bu=null;function I_(){return Bu||(Bu=EA(sS,rS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function iS(t){try{const n=(await I_()).transaction(Oa),s=await n.objectStore(Oa).get(A_(t));return await n.done,s}catch(e){if(e instanceof sr)er.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e?.message});er.warn(n.message)}}}async function Fp(t,e){try{const s=(await I_()).transaction(Oa,"readwrite");await s.objectStore(Oa).put(e,A_(t)),await s.done}catch(n){if(n instanceof sr)er.warn(n.message);else{const s=Dr.create("idb-set",{originalErrorMessage:n?.message});er.warn(s.message)}}}function A_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oS=1024,aS=30;class lS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Up();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>aS){const r=hS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){er.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Up(),{heartbeatsToSend:n,unsentEntries:s}=cS(this._heartbeatsCache.heartbeats),r=oc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return er.warn(e),""}}}function Up(){return new Date().toISOString().substring(0,10)}function cS(t,e=oS){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),jp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),jp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class uS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QI()?XI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Fp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Fp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jp(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}function hS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function fS(t){go(new wi("platform-logger",e=>new TA(e),"PRIVATE")),go(new wi("heartbeat",e=>new lS(e),"PRIVATE")),xr(fh,Mp,t),xr(fh,Mp,"esm2020"),xr("fire-js","")}fS("");var dS="firebase",pS="12.4.0";/**
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
 */xr(dS,pS,"app");function S_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=S_,C_=new Ha("auth","Firebase",S_());/**
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
 */const ac=new Zh("@firebase/auth");function mS(t,...e){ac.logLevel<=xe.WARN&&ac.warn(`Auth (${Io}): ${t}`,...e)}function Bl(t,...e){ac.logLevel<=xe.ERROR&&ac.error(`Auth (${Io}): ${t}`,...e)}/**
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
 */function ns(t,...e){throw sf(t,...e)}function ws(t,...e){return sf(t,...e)}function R_(t,e,n){const s={...gS(),[e]:n};return new Ha("auth","Firebase",s).create(e,{appName:t.name})}function Qs(t){return R_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return C_.create(t,...e)}function ve(t,e,...n){if(!t)throw sf(e,...n)}function Gs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function tr(t,e){t||Gs(e)}/**
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
 */function gh(){return typeof self<"u"&&self.location?.href||""}function _S(){return Bp()==="http:"||Bp()==="https:"}function Bp(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function yS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_S()||WI()||"connection"in navigator)?navigator.onLine:!0}function vS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=$I()||zI()}get(){return yS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rf(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class P_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ES={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bS=new Wa(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rs(t,e,n,s,r={}){return O_(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=qa({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return qI()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&To(t.emulatorConfig.host)&&(d.credentials="include"),P_.fetch()(await k_(t,t.config.apiHost,n,c),d)})}async function O_(t,e,n){t._canInitEmulator=!1;const s={...ES,...e};try{const r=new IS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Sl(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Sl(t,"user-disabled",a);const g=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw R_(t,g,d);ns(t,g)}}catch(r){if(r instanceof sr)throw r;ns(t,"network-request-failed",{message:String(r)})}}async function za(t,e,n,s,r={}){const i=await Rs(t,e,n,s,r);return"mfaPendingCredential"in i&&ns(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function k_(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?rf(t.config,r):`${t.config.apiScheme}://${r}`;return wS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function TS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ws(this.auth,"network-request-failed")),bS.get())})}}function Sl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=ws(t,e,s);return r.customData._tokenResponse=n,r}function $p(t){return t!==void 0&&t.enterprise!==void 0}class AS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SS(t,e){return Rs(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
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
 */async function CS(t,e){return Rs(t,"POST","/v1/accounts:delete",e)}async function lc(t,e){return Rs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RS(t,e=!1){const n=kt(t),s=await n.getIdToken(e),r=of(s);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:ma($u(r.auth_time)),issuedAtTime:ma($u(r.iat)),expirationTime:ma($u(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function $u(t){return Number(t)*1e3}function of(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const r=g_(n);return r?JSON.parse(r):(Bl("Failed to decode base64 JWT payload"),null)}catch(r){return Bl("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Hp(t){const e=of(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sr&&PS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function PS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(t){const e=t.auth,n=await t.getIdToken(),s=await mo(t,lc(e,{idToken:n}));ve(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?N_(r.providerUserInfo):[],a=NS(t.providerData,i),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!a?.length,d=c?u:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new mh(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function kS(t){const e=kt(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function N_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function DS(t,e){const n=await O_(t,{},async()=>{const s=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await k_(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return t.emulatorConfig&&To(t.emulatorConfig.host)&&(u.credentials="include"),P_.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xS(t,e){return Rs(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=Hp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await DS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new io;return s&&(ve(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ve(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(ve(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Gs("not implemented")}}/**
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
 */function br(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new OS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RS(this,e)}reload(){return kS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Qs(this.auth));const e=await this.getIdToken();return await mo(this,CS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:_,emailVerified:E,isAnonymous:S,providerData:L,stsTokenManager:q}=n;ve(_&&q,e,"internal-error");const G=io.fromJSON(this.name,q);ve(typeof _=="string",e,"internal-error"),br(s,e.name),br(r,e.name),ve(typeof E=="boolean",e,"internal-error"),ve(typeof S=="boolean",e,"internal-error"),br(i,e.name),br(a,e.name),br(c,e.name),br(u,e.name),br(d,e.name),br(g,e.name);const J=new Jn({uid:_,auth:e,email:r,emailVerified:E,displayName:s,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:G,createdAt:d,lastLoginAt:g});return L&&Array.isArray(L)&&(J.providerData=L.map(K=>({...K}))),u&&(J._redirectEventId=u),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new io;r.updateFromServerResponse(n);const i=new Jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await cc(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ve(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?N_(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new io;c.updateFromIdToken(s);const u=new Jn({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new mh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const qp=new Map;function Ks(t){tr(t instanceof Function,"Expected a class definition");let e=qp.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qp.set(t,e),e)}/**
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
 */class D_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D_.type="NONE";const Wp=D_;/**
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
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class oo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=$l(this.userKey,r.apiKey,i),this.fullPersistenceKey=$l("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lc(this.auth,{idToken:e}).catch(()=>{});return n?Jn._fromGetAccountInfoResponse(this.auth,n,e):null}return Jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new oo(Ks(Wp),e,s);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||Ks(Wp);const a=$l(s,e.config.apiKey,e.name);let c=null;for(const d of n)try{const g=await d._get(a);if(g){let _;if(typeof g=="string"){const E=await lc(e,{idToken:g}).catch(()=>{});if(!E)break;_=await Jn._fromGetAccountInfoResponse(e,E,g)}else _=Jn._fromJSON(e,g);d!==i&&(c=_),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new oo(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new oo(i,e,s))}}/**
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
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U_(e))return"Blackberry";if(j_(e))return"Webos";if(V_(e))return"Safari";if((e.includes("chrome/")||M_(e))&&!e.includes("edge/"))return"Chrome";if(F_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function x_(t=on()){return/firefox\//i.test(t)}function V_(t=on()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M_(t=on()){return/crios\//i.test(t)}function L_(t=on()){return/iemobile/i.test(t)}function F_(t=on()){return/android/i.test(t)}function U_(t=on()){return/blackberry/i.test(t)}function j_(t=on()){return/webos/i.test(t)}function af(t=on()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VS(t=on()){return af(t)&&!!window.navigator?.standalone}function MS(){return GI()&&document.documentMode===10}function B_(t=on()){return af(t)||F_(t)||j_(t)||U_(t)||/windows phone/i.test(t)||L_(t)}/**
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
 */function $_(t,e=[]){let n;switch(t){case"Browser":n=zp(on());break;case"Worker":n=`${zp(on())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Io}/${s}`}/**
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
 */class LS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function FS(t,e={}){return Rs(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const US=6;class jS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??US,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class BS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gp(this),this.idTokenSubscription=new Gp(this),this.beforeStateQueue=new LS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ks(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lc(this,{idToken:e}),s=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Un(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(Qs(this));const n=e?kt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Qs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(Qs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ks(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FS(this),n=new jS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xS(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ks(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[Ks(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&mS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $r(t){return kt(t)}class Gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=tA(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $S(t){$c=t}function H_(t){return $c.loadJS(t)}function HS(){return $c.recaptchaEnterpriseScript}function qS(){return $c.gapiScript}function WS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zS{constructor(){this.enterprise=new GS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class GS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const KS="recaptcha-enterprise",q_="NO_RECAPTCHA";class QS{constructor(e){this.type=KS,this.auth=$r(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{SS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new AS(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function r(i,a,c){const u=window.grecaptcha;$p(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(q_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zS().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!n&&$p(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=HS();u.length!==0&&(u+=c),H_(u).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Kp(t,e,n,s=!1,r=!1){const i=new QS(t);let a;if(r)a=q_;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function uc(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kp(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kp(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(i)})}/**
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
 */function XS(t,e){const n=tf(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ei(i,e??{}))return r;ns(r,"already-initialized")}return n.initialize({options:e})}function JS(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Ks);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function YS(t,e,n){const s=$r(t);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=W_(e),{host:a,port:c}=ZS(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Ei(d,s.config.emulator)&&Ei(g,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=g,s.settings.appVerificationDisabledForTesting=!0,To(a)?(v_(`${i}//${a}${u}`),E_("Auth",!0)):eC()}function W_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZS(t){const e=W_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Qp(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Qp(a)}}}function Qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gs("not implemented")}_getIdTokenResponse(e){return Gs("not implemented")}_linkToIdToken(e,n){return Gs("not implemented")}_getReauthenticationResolver(e){return Gs("not implemented")}}async function tC(t,e){return Rs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nC(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}async function z_(t,e){return Rs(t,"POST","/v1/accounts:sendOobCode",rr(t,e))}async function sC(t,e){return z_(t,e)}async function rC(t,e){return z_(t,e)}/**
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
 */async function iC(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function oC(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
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
 */class ka extends lf{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ka(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ka(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,n,"signInWithPassword",nC);case"emailLink":return iC(e,{email:this._email,oobCode:this._password});default:ns(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,s,"signUpPassword",tC);case"emailLink":return oC(e,{idToken:n,email:this._email,oobCode:this._password});default:ns(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ao(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const aC="http://localhost";class bi extends lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ns("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const a=new bi(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ao(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:aC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
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
 */function lC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cC(t){const e=ra(ia(t)).link,n=e?ra(ia(e)).deep_link_id:null,s=ra(ia(t)).deep_link_id;return(s?ra(ia(s)).link:null)||s||n||e||t}class cf{constructor(e){const n=ra(ia(e)),s=n.apiKey??null,r=n.oobCode??null,i=lC(n.mode??null);ve(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=cC(e);try{return new cf(n)}catch{return null}}}/**
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
 */class Ao{constructor(){this.providerId=Ao.PROVIDER_ID}static credential(e,n){return ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=cf.parseLink(n);return ve(s,"argument-error"),ka._fromEmailAndCode(e,s.code,s.tenantId)}}Ao.PROVIDER_ID="password";Ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class G_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends Ga{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class Cr extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
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
 */class Rr extends Ga{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
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
 */class Pr extends Ga{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Pr.credential(n,s)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
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
 */async function uC(t,e){return za(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Jn._fromIdTokenResponse(e,s,r),a=Xp(s);return new Ti({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Xp(s);return new Ti({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Xp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hc extends sr{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new hc(e,n,s,r)}}function K_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,i,e,s):i})}async function hC(t,e,n=!1){const s=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",s)}/**
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
 */async function fC(t,e,n=!1){const{auth:s}=t;if(Un(s.app))return Promise.reject(Qs(s));const r="reauthenticate";try{const i=await mo(t,K_(s,r,e,t),n);ve(i.idToken,s,"internal-error");const a=of(i.idToken);ve(a,s,"internal-error");const{sub:c}=a;return ve(t.uid===c,s,"user-mismatch"),Ti._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&ns(s,"user-mismatch"),i}}/**
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
 */async function Q_(t,e,n=!1){if(Un(t.app))return Promise.reject(Qs(t));const s="signIn",r=await K_(t,s,e),i=await Ti._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function dC(t,e){return Q_($r(t),e)}/**
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
 */async function X_(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pC(t,e,n){const s=$r(t);await uc(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",rC)}async function gC(t,e,n){if(Un(t.app))return Promise.reject(Qs(t));const s=$r(t),a=await uc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&X_(t),u}),c=await Ti._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function J_(t,e,n){return Un(t.app)?Promise.reject(Qs(t)):dC(kt(t),Ao.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&X_(t),s})}async function uf(t,e){const n=kt(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await sC(n.auth,r);i!==t.email&&await t.reload()}/**
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
 */async function mC(t,e){return Rs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _C(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=kt(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await mo(s,mC(s.auth,i));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}/**
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
 */function yC(t,e){return kt(t).setPersistence(e)}function vC(t,e,n,s){return kt(t).onIdTokenChanged(e,n,s)}function EC(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}function Y_(t,e,n,s){return kt(t).onAuthStateChanged(e,n,s)}function Hc(t){return kt(t).signOut()}const fc="__sak";/**
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
 */class Z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wC=1e3,bC=10;class ey extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);MS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,bC):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ey.type="LOCAL";const ty=ey;/**
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
 */class ny extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ny.type="SESSION";const hf=ny;/**
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
 */function TC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(n.origin,i)),u=await TC(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function ff(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=ff("",20);r.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(_){const E=_;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function bs(){return window}function AC(t){bs().location.href=t}/**
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
 */function sy(){return typeof bs().WorkerGlobalScope<"u"&&typeof bs().importScripts=="function"}async function SC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CC(){return navigator?.serviceWorker?.controller||null}function RC(){return sy()?self:null}/**
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
 */const ry="firebaseLocalStorageDb",PC=1,dc="firebaseLocalStorage",iy="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function OC(){const t=indexedDB.deleteDatabase(ry);return new Ka(t).toPromise()}function _h(){const t=indexedDB.open(ry,PC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(dc,{keyPath:iy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(dc)?e(s):(s.close(),await OC(),e(await _h()))})})}async function Jp(t,e,n){const s=Wc(t,!0).put({[iy]:e,value:n});return new Ka(s).toPromise()}async function kC(t,e){const n=Wc(t,!1).get(e),s=await new Ka(n).toPromise();return s===void 0?null:s.value}function Yp(t,e){const n=Wc(t,!0).delete(e);return new Ka(n).toPromise()}const NC=800,DC=3;class oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>DC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(RC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await SC(),!this.activeServiceWorker)return;this.sender=new IC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _h();return await Jp(e,fc,"1"),await Yp(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Wc(r,!1).getAll();return new Ka(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oy.type="LOCAL";const xC=oy;new Wa(3e4,6e4);/**
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
 */function VC(t,e){return e?Ks(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class df extends lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MC(t){return Q_(t.auth,new df(t),t.bypassAuthState)}function LC(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),fC(n,new df(t),t.bypassAuthState)}async function FC(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),hC(n,new df(t),t.bypassAuthState)}/**
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
 */class ay{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MC;case"linkViaPopup":case"linkViaRedirect":return FC;case"reauthViaPopup":case"reauthViaRedirect":return LC;default:ns(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UC=new Wa(2e3,1e4);class Zi extends ay{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ws(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ws(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ws(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UC.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const jC="pendingRedirect",Hl=new Map;class BC extends ay{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hl.get(this.auth._key());if(!e){try{const s=await $C(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hl.set(this.auth._key(),e)}return this.bypassAuthState||Hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $C(t,e){const n=WC(e),s=qC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function HC(t,e){Hl.set(t._key(),e)}function qC(t){return Ks(t._redirectPersistence)}function WC(t){return $l(jC,t.config.apiKey,t.name)}async function zC(t,e,n=!1){if(Un(t.app))return Promise.reject(Qs(t));const s=$r(t),r=VC(s,e),a=await new BC(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const GC=600*1e3;class KC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ly(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ws(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zp(e))}saveEventToCache(e){this.cachedEventUids.add(Zp(e)),this.lastProcessedEventTime=Date.now()}}function Zp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ly({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function QC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ly(t);default:return!1}}/**
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
 */async function XC(t,e={}){return Rs(t,"GET","/v1/projects",e)}/**
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
 */const JC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YC=/^https?/;async function ZC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XC(t);for(const n of e)try{if(e0(n))return}catch{}ns(t,"unauthorized-domain")}function e0(t){const e=gh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!YC.test(n))return!1;if(JC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const t0=new Wa(3e4,6e4);function eg(){const t=bs().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n0(t){return new Promise((e,n)=>{function s(){eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eg(),n(ws(t,"network-request-failed"))},timeout:t0.get()})}if(bs().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(bs().gapi?.load)s();else{const r=WS("iframefcb");return bs()[r]=()=>{gapi.load?s():n(ws(t,"network-request-failed"))},H_(`${qS()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw ql=null,e})}let ql=null;function s0(t){return ql=ql||n0(t),ql}/**
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
 */const r0=new Wa(5e3,15e3),i0="__/auth/iframe",o0="emulator/auth/iframe",a0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c0(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rf(e,o0):`https://${t.config.authDomain}/${i0}`,s={apiKey:e.apiKey,appName:t.name,v:Io},r=l0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qa(s).slice(1)}`}async function u0(t){const e=await s0(t),n=bs().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:c0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=ws(t,"network-request-failed"),c=bs().setTimeout(()=>{i(a)},r0.get());function u(){bs().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const h0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f0=500,d0=600,p0="_blank",g0="http://localhost";class tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m0(t,e,n,s=f0,r=d0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...h0,width:s.toString(),height:r.toString(),top:i,left:a},d=on().toLowerCase();n&&(c=M_(d)?p0:n),x_(d)&&(e=e||g0,u.scrollbars="yes");const g=Object.entries(u).reduce((E,[S,L])=>`${E}${S}=${L},`,"");if(VS(d)&&c!=="_self")return _0(e||"",c),new tg(null);const _=window.open(e||"",c,g);ve(_,t,"popup-blocked");try{_.focus()}catch{}return new tg(_)}function _0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const y0="__/auth/handler",v0="emulator/auth/handler",E0=encodeURIComponent("fac");async function ng(t,e,n,s,r,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Io,eventId:r};if(e instanceof G_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",eA(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries({}))a[g]=_}if(e instanceof Ga){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await t._getAppCheckToken(),d=u?`#${E0}=${encodeURIComponent(u)}`:"";return`${w0(t)}?${qa(c).slice(1)}${d}`}function w0({config:t}){return t.emulator?rf(t,v0):`https://${t.authDomain}/${y0}`}/**
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
 */const Hu="webStorageSupport";class b0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hf,this._completeRedirectFn=zC,this._overrideRedirectResult=HC}async _openPopup(e,n,s,r){tr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ng(e,n,s,gh(),r);return m0(e,i,ff())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ng(e,n,s,gh(),r);return AC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(tr(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await u0(e),s=new KC(e);return n.register("authEvent",r=>(ve(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},r=>{const i=r?.[0]?.[Hu];i!==void 0&&n(!!i),ns(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B_()||V_()||af()}}const T0=b0;var sg="@firebase/auth",rg="1.11.0";/**
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
 */class I0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function S0(t){go(new wi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ve(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(t)},d=new BS(s,r,i,u);return JS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),go(new wi("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(s=>new I0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(sg,rg,A0(t)),xr(sg,rg,"esm2020")}/**
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
 */const C0=300,R0=y_("authIdTokenMaxAge")||C0;let ig=null;const P0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>R0)return;const r=n?.token;ig!==r&&(ig=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function O0(t=nf()){const e=tf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XS(t,{popupRedirectResolver:T0,persistence:[xC,ty,hf]}),s=y_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=P0(i.toString());EC(n,a,()=>a(n.currentUser)),vC(n,c=>a(c))}}const r=m_("auth");return r&&YS(n,`http://${r}`),n}function k0(){return document.getElementsByTagName("head")?.[0]??document}$S({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=ws("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",k0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});S0("Browser");var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,b){function I(){}I.prototype=b.prototype,C.F=b.prototype,C.prototype=new I,C.prototype.constructor=C,C.D=function(P,R,D){for(var T=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)T[lt-2]=arguments[lt];return b.prototype[R].apply(P,T)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(C,b,I){I||(I=0);const P=Array(16);if(typeof b=="string")for(var R=0;R<16;++R)P[R]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(R=0;R<16;++R)P[R]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=C.g[0],I=C.g[1],R=C.g[2];let D=C.g[3],T;T=b+(D^I&(R^D))+P[0]+3614090360&4294967295,b=I+(T<<7&4294967295|T>>>25),T=D+(R^b&(I^R))+P[1]+3905402710&4294967295,D=b+(T<<12&4294967295|T>>>20),T=R+(I^D&(b^I))+P[2]+606105819&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(b^R&(D^b))+P[3]+3250441966&4294967295,I=R+(T<<22&4294967295|T>>>10),T=b+(D^I&(R^D))+P[4]+4118548399&4294967295,b=I+(T<<7&4294967295|T>>>25),T=D+(R^b&(I^R))+P[5]+1200080426&4294967295,D=b+(T<<12&4294967295|T>>>20),T=R+(I^D&(b^I))+P[6]+2821735955&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(b^R&(D^b))+P[7]+4249261313&4294967295,I=R+(T<<22&4294967295|T>>>10),T=b+(D^I&(R^D))+P[8]+1770035416&4294967295,b=I+(T<<7&4294967295|T>>>25),T=D+(R^b&(I^R))+P[9]+2336552879&4294967295,D=b+(T<<12&4294967295|T>>>20),T=R+(I^D&(b^I))+P[10]+4294925233&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(b^R&(D^b))+P[11]+2304563134&4294967295,I=R+(T<<22&4294967295|T>>>10),T=b+(D^I&(R^D))+P[12]+1804603682&4294967295,b=I+(T<<7&4294967295|T>>>25),T=D+(R^b&(I^R))+P[13]+4254626195&4294967295,D=b+(T<<12&4294967295|T>>>20),T=R+(I^D&(b^I))+P[14]+2792965006&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(b^R&(D^b))+P[15]+1236535329&4294967295,I=R+(T<<22&4294967295|T>>>10),T=b+(R^D&(I^R))+P[1]+4129170786&4294967295,b=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(b^I))+P[6]+3225465664&4294967295,D=b+(T<<9&4294967295|T>>>23),T=R+(b^I&(D^b))+P[11]+643717713&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^b&(R^D))+P[0]+3921069994&4294967295,I=R+(T<<20&4294967295|T>>>12),T=b+(R^D&(I^R))+P[5]+3593408605&4294967295,b=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(b^I))+P[10]+38016083&4294967295,D=b+(T<<9&4294967295|T>>>23),T=R+(b^I&(D^b))+P[15]+3634488961&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^b&(R^D))+P[4]+3889429448&4294967295,I=R+(T<<20&4294967295|T>>>12),T=b+(R^D&(I^R))+P[9]+568446438&4294967295,b=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(b^I))+P[14]+3275163606&4294967295,D=b+(T<<9&4294967295|T>>>23),T=R+(b^I&(D^b))+P[3]+4107603335&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^b&(R^D))+P[8]+1163531501&4294967295,I=R+(T<<20&4294967295|T>>>12),T=b+(R^D&(I^R))+P[13]+2850285829&4294967295,b=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(b^I))+P[2]+4243563512&4294967295,D=b+(T<<9&4294967295|T>>>23),T=R+(b^I&(D^b))+P[7]+1735328473&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^b&(R^D))+P[12]+2368359562&4294967295,I=R+(T<<20&4294967295|T>>>12),T=b+(I^R^D)+P[5]+4294588738&4294967295,b=I+(T<<4&4294967295|T>>>28),T=D+(b^I^R)+P[8]+2272392833&4294967295,D=b+(T<<11&4294967295|T>>>21),T=R+(D^b^I)+P[11]+1839030562&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^b)+P[14]+4259657740&4294967295,I=R+(T<<23&4294967295|T>>>9),T=b+(I^R^D)+P[1]+2763975236&4294967295,b=I+(T<<4&4294967295|T>>>28),T=D+(b^I^R)+P[4]+1272893353&4294967295,D=b+(T<<11&4294967295|T>>>21),T=R+(D^b^I)+P[7]+4139469664&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^b)+P[10]+3200236656&4294967295,I=R+(T<<23&4294967295|T>>>9),T=b+(I^R^D)+P[13]+681279174&4294967295,b=I+(T<<4&4294967295|T>>>28),T=D+(b^I^R)+P[0]+3936430074&4294967295,D=b+(T<<11&4294967295|T>>>21),T=R+(D^b^I)+P[3]+3572445317&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^b)+P[6]+76029189&4294967295,I=R+(T<<23&4294967295|T>>>9),T=b+(I^R^D)+P[9]+3654602809&4294967295,b=I+(T<<4&4294967295|T>>>28),T=D+(b^I^R)+P[12]+3873151461&4294967295,D=b+(T<<11&4294967295|T>>>21),T=R+(D^b^I)+P[15]+530742520&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^b)+P[2]+3299628645&4294967295,I=R+(T<<23&4294967295|T>>>9),T=b+(R^(I|~D))+P[0]+4096336452&4294967295,b=I+(T<<6&4294967295|T>>>26),T=D+(I^(b|~R))+P[7]+1126891415&4294967295,D=b+(T<<10&4294967295|T>>>22),T=R+(b^(D|~I))+P[14]+2878612391&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~b))+P[5]+4237533241&4294967295,I=R+(T<<21&4294967295|T>>>11),T=b+(R^(I|~D))+P[12]+1700485571&4294967295,b=I+(T<<6&4294967295|T>>>26),T=D+(I^(b|~R))+P[3]+2399980690&4294967295,D=b+(T<<10&4294967295|T>>>22),T=R+(b^(D|~I))+P[10]+4293915773&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~b))+P[1]+2240044497&4294967295,I=R+(T<<21&4294967295|T>>>11),T=b+(R^(I|~D))+P[8]+1873313359&4294967295,b=I+(T<<6&4294967295|T>>>26),T=D+(I^(b|~R))+P[15]+4264355552&4294967295,D=b+(T<<10&4294967295|T>>>22),T=R+(b^(D|~I))+P[6]+2734768916&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~b))+P[13]+1309151649&4294967295,I=R+(T<<21&4294967295|T>>>11),T=b+(R^(I|~D))+P[4]+4149444226&4294967295,b=I+(T<<6&4294967295|T>>>26),T=D+(I^(b|~R))+P[11]+3174756917&4294967295,D=b+(T<<10&4294967295|T>>>22),T=R+(b^(D|~I))+P[2]+718787259&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~b))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+b&4294967295,C.g[1]=C.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,C.g[2]=C.g[2]+R&4294967295,C.g[3]=C.g[3]+D&4294967295}s.prototype.v=function(C,b){b===void 0&&(b=C.length);const I=b-this.blockSize,P=this.C;let R=this.h,D=0;for(;D<b;){if(R==0)for(;D<=I;)r(this,C,D),D+=this.blockSize;if(typeof C=="string"){for(;D<b;)if(P[R++]=C.charCodeAt(D++),R==this.blockSize){r(this,P),R=0;break}}else for(;D<b;)if(P[R++]=C[D++],R==this.blockSize){r(this,P),R=0;break}}this.h=R,this.o+=b},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var b=1;b<C.length-8;++b)C[b]=0;b=this.o*8;for(var I=C.length-8;I<C.length;++I)C[I]=b&255,b/=256;for(this.v(C),C=Array(16),b=0,I=0;I<4;++I)for(let P=0;P<32;P+=8)C[b++]=this.g[I]>>>P&255;return C};function i(C,b){var I=c;return Object.prototype.hasOwnProperty.call(I,C)?I[C]:I[C]=b(C)}function a(C,b){this.h=b;const I=[];let P=!0;for(let R=C.length-1;R>=0;R--){const D=C[R]|0;P&&D==b||(I[R]=D,P=!1)}this.g=I}var c={};function u(C){return-128<=C&&C<128?i(C,function(b){return new a([b|0],b<0?-1:0)}):new a([C|0],C<0?-1:0)}function d(C){if(isNaN(C)||!isFinite(C))return _;if(C<0)return G(d(-C));const b=[];let I=1;for(let P=0;C>=I;P++)b[P]=C/I|0,I*=4294967296;return new a(b,0)}function g(C,b){if(C.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(C.charAt(0)=="-")return G(g(C.substring(1),b));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=d(Math.pow(b,8));let P=_;for(let D=0;D<C.length;D+=8){var R=Math.min(8,C.length-D);const T=parseInt(C.substring(D,D+R),b);R<8?(R=d(Math.pow(b,R)),P=P.j(R).add(d(T))):(P=P.j(I),P=P.add(d(T)))}return P}var _=u(0),E=u(1),S=u(16777216);t=a.prototype,t.m=function(){if(q(this))return-G(this).m();let C=0,b=1;for(let I=0;I<this.g.length;I++){const P=this.i(I);C+=(P>=0?P:4294967296+P)*b,b*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(L(this))return"0";if(q(this))return"-"+G(this).toString(C);const b=d(Math.pow(C,6));var I=this;let P="";for(;;){const R=ie(I,b).g;I=J(I,R.j(b));let D=((I.g.length>0?I.g[0]:I.h)>>>0).toString(C);if(I=R,L(I))return D+P;for(;D.length<6;)D="0"+D;P=D+P}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function L(C){if(C.h!=0)return!1;for(let b=0;b<C.g.length;b++)if(C.g[b]!=0)return!1;return!0}function q(C){return C.h==-1}t.l=function(C){return C=J(this,C),q(C)?-1:L(C)?0:1};function G(C){const b=C.g.length,I=[];for(let P=0;P<b;P++)I[P]=~C.g[P];return new a(I,~C.h).add(E)}t.abs=function(){return q(this)?G(this):this},t.add=function(C){const b=Math.max(this.g.length,C.g.length),I=[];let P=0;for(let R=0;R<=b;R++){let D=P+(this.i(R)&65535)+(C.i(R)&65535),T=(D>>>16)+(this.i(R)>>>16)+(C.i(R)>>>16);P=T>>>16,D&=65535,T&=65535,I[R]=T<<16|D}return new a(I,I[I.length-1]&-2147483648?-1:0)};function J(C,b){return C.add(G(b))}t.j=function(C){if(L(this)||L(C))return _;if(q(this))return q(C)?G(this).j(G(C)):G(G(this).j(C));if(q(C))return G(this.j(G(C)));if(this.l(S)<0&&C.l(S)<0)return d(this.m()*C.m());const b=this.g.length+C.g.length,I=[];for(var P=0;P<2*b;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<C.g.length;R++){const D=this.i(P)>>>16,T=this.i(P)&65535,lt=C.i(R)>>>16,Ft=C.i(R)&65535;I[2*P+2*R]+=T*Ft,K(I,2*P+2*R),I[2*P+2*R+1]+=D*Ft,K(I,2*P+2*R+1),I[2*P+2*R+1]+=T*lt,K(I,2*P+2*R+1),I[2*P+2*R+2]+=D*lt,K(I,2*P+2*R+2)}for(C=0;C<b;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=b;C<2*b;C++)I[C]=0;return new a(I,0)};function K(C,b){for(;(C[b]&65535)!=C[b];)C[b+1]+=C[b]>>>16,C[b]&=65535,b++}function ee(C,b){this.g=C,this.h=b}function ie(C,b){if(L(b))throw Error("division by zero");if(L(C))return new ee(_,_);if(q(C))return b=ie(G(C),b),new ee(G(b.g),G(b.h));if(q(b))return b=ie(C,G(b)),new ee(G(b.g),b.h);if(C.g.length>30){if(q(C)||q(b))throw Error("slowDivide_ only works with positive integers.");for(var I=E,P=b;P.l(C)<=0;)I=be(I),P=be(P);var R=Ve(I,1),D=Ve(P,1);for(P=Ve(P,2),I=Ve(I,2);!L(P);){var T=D.add(P);T.l(C)<=0&&(R=R.add(I),D=T),P=Ve(P,1),I=Ve(I,1)}return b=J(C,R.j(b)),new ee(R,b)}for(R=_;C.l(b)>=0;){for(I=Math.max(1,Math.floor(C.m()/b.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),D=d(I),T=D.j(b);q(T)||T.l(C)>0;)I-=P,D=d(I),T=D.j(b);L(D)&&(D=E),R=R.add(D),C=J(C,T)}return new ee(R,C)}t.B=function(C){return ie(this,C).h},t.and=function(C){const b=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<b;P++)I[P]=this.i(P)&C.i(P);return new a(I,this.h&C.h)},t.or=function(C){const b=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<b;P++)I[P]=this.i(P)|C.i(P);return new a(I,this.h|C.h)},t.xor=function(C){const b=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<b;P++)I[P]=this.i(P)^C.i(P);return new a(I,this.h^C.h)};function be(C){const b=C.g.length+1,I=[];for(let P=0;P<b;P++)I[P]=C.i(P)<<1|C.i(P-1)>>>31;return new a(I,C.h)}function Ve(C,b){const I=b>>5;b%=32;const P=C.g.length-I,R=[];for(let D=0;D<P;D++)R[D]=b>0?C.i(D+I)>>>b|C.i(D+I+1)<<32-b:C.i(D+I);return new a(R,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,pf=a}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cy,oa,uy,Wl,yh,hy,fy,dy;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var h=0;h<o.length;++h){var p=o[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(o,h){if(h)e:{var p=s;o=o.split(".");for(var v=0;v<o.length-1;v++){var x=o[v];if(!(x in p))break e;p=p[x]}o=o[o.length-1],v=p[o],h=h(v),h!=v&&h!=null&&e(p,o,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(h){var p=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&p.push([v,h[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function u(o,h,p){return o.call.apply(o.bind,arguments)}function d(o,h,p){return d=u,d.apply(null,arguments)}function g(o,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function _(o,h){function p(){}p.prototype=h.prototype,o.Z=h.prototype,o.prototype=new p,o.prototype.constructor=o,o.Ob=function(v,x,V){for(var te=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)te[Ae-2]=arguments[Ae];return h.prototype[x].apply(v,te)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const h=o.length;if(h>0){const p=Array(h);for(let v=0;v<h;v++)p[v]=o[v];return p}return[]}function L(o,h){for(let v=1;v<arguments.length;v++){const x=arguments[v];var p=typeof x;if(p=p!="object"?p:x?Array.isArray(x)?"array":p:"null",p=="array"||p=="object"&&typeof x.length=="number"){p=o.length||0;const V=x.length||0;o.length=p+V;for(let te=0;te<V;te++)o[p+te]=x[te]}else o.push(x)}}class q{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function G(o){a.setTimeout(()=>{throw o},0)}function J(){var o=C;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class K{constructor(){this.h=this.g=null}add(h,p){const v=ee.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ee=new q(()=>new ie,o=>o.reset());class ie{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Ve=!1,C=new K,b=()=>{const o=Promise.resolve(void 0);be=()=>{o.then(I)}};function I(){for(var o;o=J();){try{o.h.call(o.g)}catch(p){G(p)}var h=ee;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}Ve=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return o})();function T(o){return/^[\s\xa0]*$/.test(o)}function lt(o,h){R.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}_(lt,R),lt.prototype.init=function(o,h){const p=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(p=="mouseover"?h=o.fromElement:p=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&lt.Z.h.call(this)},lt.prototype.h=function(){lt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ft="closure_listenable_"+(Math.random()*1e6|0),ct=0;function je(o,h,p,v,x){this.listener=o,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=x,this.key=++ct,this.da=this.fa=!1}function Oe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function zt(o,h,p){for(const v in o)h.call(p,o[v],v,o)}function En(o,h){for(const p in o)h.call(void 0,o[p],p,o)}function H(o){const h={};for(const p in o)h[p]=o[p];return h}const gt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pn(o,h){let p,v;for(let x=1;x<arguments.length;x++){v=arguments[x];for(p in v)o[p]=v[p];for(let V=0;V<gt.length;V++)p=gt[V],Object.prototype.hasOwnProperty.call(v,p)&&(o[p]=v[p])}}function an(o){this.src=o,this.g={},this.h=0}an.prototype.add=function(o,h,p,v,x){const V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);const te=ut(o,h,v,x);return te>-1?(h=o[te],p||(h.fa=!1)):(h=new je(h,this.src,V,!!v,x),h.fa=p,o.push(h)),h};function mt(o,h){const p=h.type;if(p in o.g){var v=o.g[p],x=Array.prototype.indexOf.call(v,h,void 0),V;(V=x>=0)&&Array.prototype.splice.call(v,x,1),V&&(Oe(h),o.g[p].length==0&&(delete o.g[p],o.h--))}}function ut(o,h,p,v){for(let x=0;x<o.length;++x){const V=o[x];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==v)return x}return-1}var U="closure_lm_"+(Math.random()*1e6|0),ae={};function F(o,h,p,v,x){if(Array.isArray(h)){for(let V=0;V<h.length;V++)F(o,h[V],p,v,x);return null}return p=se(p),o&&o[Ft]?o.J(h,p,c(v)?!!v.capture:!1,x):fe(o,h,p,!1,v,x)}function fe(o,h,p,v,x,V){if(!h)throw Error("Invalid event type");const te=c(x)?!!x.capture:!!x;let Ae=$(o);if(Ae||(o[U]=Ae=new an(o)),p=Ae.add(h,p,v,te,V),p.proxy)return p;if(v=ke(),p.proxy=v,v.src=o,v.listener=p,o.addEventListener)D||(x=te),x===void 0&&(x=!1),o.addEventListener(h.toString(),v,x);else if(o.attachEvent)o.attachEvent(N(h.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ke(){function o(p){return h.call(o.src,o.listener,p)}const h=B;return o}function w(o,h,p,v,x){if(Array.isArray(h))for(var V=0;V<h.length;V++)w(o,h[V],p,v,x);else v=c(v)?!!v.capture:!!v,p=se(p),o&&o[Ft]?(o=o.i,V=String(h).toString(),V in o.g&&(h=o.g[V],p=ut(h,p,v,x),p>-1&&(Oe(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete o.g[V],o.h--)))):o&&(o=$(o))&&(h=o.g[h.toString()],o=-1,h&&(o=ut(h,p,v,x)),(p=o>-1?h[o]:null)&&A(p))}function A(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Ft])mt(h.i,o);else{var p=o.type,v=o.proxy;h.removeEventListener?h.removeEventListener(p,v,o.capture):h.detachEvent?h.detachEvent(N(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=$(h))?(mt(p,o),p.h==0&&(p.src=null,h[U]=null)):Oe(o)}}}function N(o){return o in ae?ae[o]:ae[o]="on"+o}function B(o,h){if(o.da)o=!0;else{h=new lt(h,this);const p=o.listener,v=o.ha||o.src;o.fa&&A(o),o=p.call(v,h)}return o}function $(o){return o=o[U],o instanceof an?o:null}var j="__closure_events_fn_"+(Math.random()*1e9>>>0);function se(o){return typeof o=="function"?o:(o[j]||(o[j]=function(h){return o.handleEvent(h)}),o[j])}function Y(){P.call(this),this.i=new an(this),this.M=this,this.G=null}_(Y,P),Y.prototype[Ft]=!0,Y.prototype.removeEventListener=function(o,h,p,v){w(this,o,h,p,v)};function Q(o,h){var p,v=o.G;if(v)for(p=[];v;v=v.G)p.push(v);if(o=o.M,v=h.type||h,typeof h=="string")h=new R(h,o);else if(h instanceof R)h.target=h.target||o;else{var x=h;h=new R(v,o),Pn(h,x)}x=!0;let V,te;if(p)for(te=p.length-1;te>=0;te--)V=h.g=p[te],x=X(V,v,!0,h)&&x;if(V=h.g=o,x=X(V,v,!0,h)&&x,x=X(V,v,!1,h)&&x,p)for(te=0;te<p.length;te++)V=h.g=p[te],x=X(V,v,!1,h)&&x}Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const p=o.g[h];for(let v=0;v<p.length;v++)Oe(p[v]);delete o.g[h],o.h--}}this.G=null},Y.prototype.J=function(o,h,p,v){return this.i.add(String(o),h,!1,p,v)},Y.prototype.K=function(o,h,p,v){return this.i.add(String(o),h,!0,p,v)};function X(o,h,p,v){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let V=0;V<h.length;++V){const te=h[V];if(te&&!te.da&&te.capture==p){const Ae=te.listener,yt=te.ha||te.src;te.fa&&mt(o.i,te),x=Ae.call(yt,v)!==!1&&x}}return x&&!v.defaultPrevented}function ge(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function oe(o){o.g=ge(()=>{o.g=null,o.i&&(o.i=!1,oe(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class de extends P{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:oe(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(o){P.call(this),this.h=o,this.g={}}_(pe,P);var Ee=[];function Be(o){zt(o.g,function(h,p){this.g.hasOwnProperty(p)&&A(h)},o),o.g={}}pe.prototype.N=function(){pe.Z.N.call(this),Be(this)},pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Me=a.JSON.stringify,Nt=a.JSON.parse,ht=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function wt(){}function bt(){}var Gt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ir(){R.call(this,"d")}_(ir,R);function _t(){R.call(this,"c")}_(_t,R);var Tt={},qr=null;function Ps(){return qr=qr||new Y}Tt.Ia="serverreachability";function tl(o){R.call(this,Tt.Ia,o)}_(tl,R);function Wr(o){const h=Ps();Q(h,new tl(h))}Tt.STAT_EVENT="statevent";function nl(o,h){R.call(this,Tt.STAT_EVENT,o),this.stat=h}_(nl,R);function Dt(o){const h=Ps();Q(h,new nl(h,o))}Tt.Ja="timingevent";function zr(o,h){R.call(this,Tt.Ja,o),this.size=h}_(zr,R);function or(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function ar(){this.g=!0}ar.prototype.ua=function(){this.g=!1};function ru(o,h,p,v,x,V){o.info(function(){if(o.g)if(V){var te="",Ae=V.split("&");for(let Fe=0;Fe<Ae.length;Fe++){var yt=Ae[Fe].split("=");if(yt.length>1){const tt=yt[0];yt=yt[1];const Nn=tt.split("_");te=Nn.length>=2&&Nn[1]=="type"?te+(tt+"="+yt+"&"):te+(tt+"=redacted&")}}}else te=null;else te=V;return"XMLHTTP REQ ("+v+") [attempt "+x+"]: "+h+`
`+p+`
`+te})}function iu(o,h,p,v,x,V,te){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+x+"]: "+h+`
`+p+`
`+V+" "+te})}function lr(o,h,p,v){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+cr(o,p)+(v?" "+v:"")})}function ou(o,h){o.info(function(){return"TIMEOUT: "+h})}ar.prototype.info=function(){};function cr(o,h){if(!o.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(o=0;o<V.length;o++)if(Array.isArray(V[o])){var p=V[o];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var x=v[0];if(x!="noop"&&x!="stop"&&x!="close")for(let te=1;te<v.length;te++)v[te]=""}}}}return Me(V)}catch{return h}}var ss={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rl;function Co(){}_(Co,wt),Co.prototype.g=function(){return new XMLHttpRequest},rl=new Co;function Gr(o){return encodeURIComponent(String(o))}function au(o){var h=1;o=o.split(":");const p=[];for(;h>0&&o.length;)p.push(o.shift()),h--;return o.length&&p.push(o.join(":")),p}function On(o,h,p,v){this.j=o,this.i=h,this.l=p,this.S=v||1,this.V=new pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Os}function Os(){this.i=null,this.g="",this.h=!1}var Kr={},Ro={};function Qr(o,h,p){o.M=1,o.A=Jr(wn(h)),o.u=p,o.R=!0,il(o,null)}function il(o,h){o.F=Date.now(),xt(o),o.B=wn(o.A);var p=o.B,v=o.S;Array.isArray(v)||(v=[String(v)]),Mi(p.i,"t",v),o.C=0,p=o.j.L,o.h=new Os,o.g=hl(o.j,p?h:null,!o.u),o.P>0&&(o.O=new de(d(o.Y,o,o.g),o.P)),h=o.V,p=o.g,v=o.ba;var x="readystatechange";Array.isArray(x)||(x&&(Ee[0]=x.toString()),x=Ee);for(let V=0;V<x.length;V++){const te=F(p,x[V],v||h.handleEvent,!1,h.h||h);if(!te)break;h.g[te.key]=te}h=o.J?H(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),Wr(),ru(o.i,o.v,o.B,o.l,o.S,o.u)}On.prototype.ba=function(o){o=o.target;const h=this.O;h&&zn(o)==3?h.j():this.Y(o)},On.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=zn(this.g),yt=this.g.ya(),Fe=this.g.ca();if(!(Ae<3)&&(Ae!=3||this.g&&(this.h.h||this.g.la()||Bi(this.g)))){this.K||Ae!=4||yt==7||(yt==8||Fe<=0?Wr(3):Wr(2)),Rt(this);var h=this.g.ca();this.X=h;var p=lu(this);if(this.o=h==200,iu(this.i,this.v,this.B,this.l,this.S,Ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,x=this.g;if((v=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var V=v;break t}}V=null}if(o=V)lr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hn(this,o);else{this.o=!1,this.m=3,Dt(12),gn(this),rs(this);break e}}if(this.R){o=!0;let tt;for(;!this.K&&this.C<p.length;)if(tt=Ut(this,p),tt==Ro){Ae==4&&(this.m=4,Dt(14),o=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Kr){this.m=4,Dt(15),lr(this.i,this.l,p,"[Invalid Chunk]"),o=!1;break}else lr(this.i,this.l,tt,null),Hn(this,tt);if(ks(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||p.length!=0||this.h.h||(this.m=1,Dt(16),o=!1),this.o=this.o&&o,!o)lr(this.i,this.l,p,"[Invalid Chunked Response]"),gn(this),rs(this);else if(p.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Hi(te),te.P=!0,Dt(11))}}else lr(this.i,this.l,p,null),Hn(this,p);Ae==4&&gn(this),this.o&&!this.K&&(Ae==4?cl(this.j,this):(this.o=!1,xt(this)))}else Uo(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Dt(12)):(this.m=0,Dt(13)),gn(this),rs(this)}}}catch{}finally{}};function lu(o){if(!ks(o))return o.g.la();const h=Bi(o.g);if(h==="")return"";let p="";const v=h.length,x=zn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return gn(o),rs(o),"";o.h.i=new a.TextDecoder}for(let V=0;V<v;V++)o.h.h=!0,p+=o.h.i.decode(h[V],{stream:!(x&&V==v-1)});return h.length=0,o.h.g+=p,o.C=0,o.h.g}function ks(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ut(o,h){var p=o.C,v=h.indexOf(`
`,p);return v==-1?Ro:(p=Number(h.substring(p,v)),isNaN(p)?Kr:(v+=1,v+p>h.length?Ro:(h=h.slice(v,v+p),o.C=v+p,h)))}On.prototype.cancel=function(){this.K=!0,gn(this)};function xt(o){o.T=Date.now()+o.H,Kt(o,o.H)}function Kt(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=or(d(o.aa,o),h)}function Rt(o){o.D&&(a.clearTimeout(o.D),o.D=null)}On.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(ou(this.i,this.B),this.M!=2&&(Wr(),Dt(17)),gn(this),this.m=2,rs(this)):Kt(this,this.T-o)};function rs(o){o.j.I==0||o.K||cl(o.j,o)}function gn(o){Rt(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,Be(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function Hn(o,h){try{var p=o.j;if(p.I!=0&&(p.g==o||Ni(p.h,o))){if(!o.L&&Ni(p.h,o)&&p.I==3){try{var v=p.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var x=v;if(x[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<o.F)ni(p),gr(p);else break e;$i(p),Dt(18)}}else p.xa=x[1],0<p.xa-p.K&&x[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=or(d(p.Va,p),6e3));Ns(p.h)<=1&&p.ta&&(p.ta=void 0)}else ls(p,11)}else if((o.L||p.g==o)&&ni(p),!T(h))for(x=p.Ba.g.parse(h),h=0;h<x.length;h++){let Fe=x[h];const tt=Fe[0];if(!(tt<=p.K))if(p.K=tt,Fe=Fe[1],p.I==2)if(Fe[0]=="c"){p.M=Fe[1],p.ba=Fe[2];const Nn=Fe[3];Nn!=null&&(p.ka=Nn,p.j.info("VER="+p.ka));const Dn=Fe[4];Dn!=null&&(p.za=Dn,p.j.info("SVER="+p.za));const hs=Fe[5];hs!=null&&typeof hs=="number"&&hs>0&&(v=1.5*hs,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const fs=o.g;if(fs){const Wi=fs.g?fs.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wi){var V=v.h;V.g||Wi.indexOf("spdy")==-1&&Wi.indexOf("quic")==-1&&Wi.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Xr(V,V.h),V.h=null))}if(v.G){const zo=fs.g?fs.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(v.wa=zo,Qe(v.J,v.G,zo))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-o.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var te=o;if(v.na=si(v,v.L?v.ba:null,v.W),te.L){Di(v.h,te);var Ae=te,yt=v.O;yt&&(Ae.H=yt),Ae.D&&(Rt(Ae),xt(Ae)),v.g=te}else Ho(v);p.i.length>0&&ti(p)}else Fe[0]!="stop"&&Fe[0]!="close"||ls(p,7);else p.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?ls(p,7):Fs(p):Fe[0]!="noop"&&p.l&&p.l.qa(Fe),p.A=0)}}Wr(4)}catch{}}var ur=class{constructor(o,h){this.g=o,this.map=h}};function Po(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ki(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ns(o){return o.h?1:o.g?o.g.size:0}function Ni(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Xr(o,h){o.g?o.g.add(h):o.h=h}function Di(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Po.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Oo(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const p of o.g.values())h=h.concat(p.G);return h}return S(o.i)}var ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ol(o,h){if(o){o=o.split("&");for(let p=0;p<o.length;p++){const v=o[p].indexOf("=");let x,V=null;v>=0?(x=o[p].substring(0,v),V=o[p].substring(v+1)):x=o[p],h(x,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function qn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof qn?(this.l=o.l,hr(this,o.j),this.o=o.o,this.g=o.g,fr(this,o.u),this.h=o.h,xi(this,Vo(o.i)),this.m=o.m):o&&(h=String(o).match(ko))?(this.l=!1,hr(this,h[1]||"",!0),this.o=Qt(h[2]||""),this.g=Qt(h[3]||"",!0),fr(this,h[4]),this.h=Qt(h[5]||"",!0),xi(this,h[6]||"",!0),this.m=Qt(h[7]||"")):(this.l=!1,this.i=new is(null,this.l))}qn.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(Pt(h,ln,!0),":");var p=this.g;return(p||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Pt(h,ln,!0),"@"),o.push(Gr(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&o.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Pt(p,p.charAt(0)=="/"?Do:No,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Pt(p,xs)),o.join("")},qn.prototype.resolve=function(o){const h=wn(this);let p=!!o.j;p?hr(h,o.j):p=!!o.o,p?h.o=o.o:p=!!o.g,p?h.g=o.g:p=o.u!=null;var v=o.h;if(p)fr(h,o.u);else if(p=!!o.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var x=h.h.lastIndexOf("/");x!=-1&&(v=h.h.slice(0,x+1)+v)}if(x=v,x==".."||x==".")v="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){v=x.lastIndexOf("/",0)==0,x=x.split("/");const V=[];for(let te=0;te<x.length;){const Ae=x[te++];Ae=="."?v&&te==x.length&&V.push(""):Ae==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),v&&te==x.length&&V.push("")):(V.push(Ae),v=!0)}v=V.join("/")}else v=x}return p?h.h=v:p=o.i.toString()!=="",p?xi(h,Vo(o.i)):p=!!o.m,p&&(h.m=o.m),h};function wn(o){return new qn(o)}function hr(o,h,p){o.j=p?Qt(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function fr(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function xi(o,h,p){h instanceof is?(o.i=h,cu(o.i,o.l)):(p||(h=Pt(h,kn)),o.i=new is(h,o.l))}function Qe(o,h,p){o.i.set(h,p)}function Jr(o){return Qe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Qt(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Pt(o,h,p){return typeof o=="string"?(o=encodeURI(o).replace(h,Ds),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ds(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ln=/[#\/\?@]/g,No=/[#\?:]/g,Do=/[#\?]/g,kn=/[#\?@]/g,xs=/#/g;function is(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function mn(o){o.g||(o.g=new Map,o.h=0,o.i&&ol(o.i,function(h,p){o.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=is.prototype,t.add=function(o,h){mn(this),this.i=null,o=Xt(this,o);let p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(h),this.h+=1,this};function Vi(o,h){mn(o),h=Xt(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function xo(o,h){return mn(o),h=Xt(o,h),o.g.has(h)}t.forEach=function(o,h){mn(this),this.g.forEach(function(p,v){p.forEach(function(x){o.call(h,x,v,this)},this)},this)};function Vs(o,h){mn(o);let p=[];if(typeof h=="string")xo(o,h)&&(p=p.concat(o.g.get(Xt(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)p=p.concat(o[h]);return p}t.set=function(o,h){return mn(this),this.i=null,o=Xt(this,o),xo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=Vs(this,o),o.length>0?String(o[0]):h):h};function Mi(o,h,p){Vi(o,h),p.length>0&&(o.i=null,o.g.set(Xt(o,h),S(p)),o.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var p=h[v];const x=Gr(p);p=Vs(this,p);for(let V=0;V<p.length;V++){let te=x;p[V]!==""&&(te+="="+Gr(p[V])),o.push(te)}}return this.i=o.join("&")};function Vo(o){const h=new is;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function Xt(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function cu(o,h){h&&!o.j&&(mn(o),o.i=null,o.g.forEach(function(p,v){const x=v.toLowerCase();v!=x&&(Vi(this,v),Mi(this,x,p))},o)),o.j=h}function os(o,h){const p=new ar;if(a.Image){const v=new Image;v.onload=g(Wn,p,"TestLoadImage: loaded",!0,h,v),v.onerror=g(Wn,p,"TestLoadImage: error",!1,h,v),v.onabort=g(Wn,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=g(Wn,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else h(!1)}function Li(o,h){const p=new ar,v=new AbortController,x=setTimeout(()=>{v.abort(),Wn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:v.signal}).then(V=>{clearTimeout(x),V.ok?Wn(p,"TestPingServer: ok",!0,h):Wn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Wn(p,"TestPingServer: error",!1,h)})}function Wn(o,h,p,v,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),v(p)}catch{}}function Yr(){this.g=new ht}function Zr(o){this.i=o.Sb||null,this.h=o.ab||!1}_(Zr,wt),Zr.prototype.g=function(){return new as(this.i,this.h)};function as(o,h){Y.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(as,Y),t=as.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,pr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,dr(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Mo(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Mo(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?dr(this):pr(this),this.readyState==3&&Mo(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,dr(this))},t.Na=function(o){this.g&&(this.response=o,dr(this))},t.ga=function(){this.g&&dr(this)};function dr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,pr(o)}t.setRequestHeader=function(o,h){this.A.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=h.next();return o.join(`\r
`)};function pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ms(o){let h="";return zt(o,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function Lo(o,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Ms(p),typeof o=="string"?p!=null&&Gr(p):Qe(o,h,p))}function it(o){Y.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(it,Y);var Fo=/^https?$/i,Fi=["POST","PUT"];t=it.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rl.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(V){Ui(this,V);return}if(o=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var x in v)p.set(x,v[x]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())p.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Fi,h,void 0)>=0)||v||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,te]of p)this.g.setRequestHeader(V,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(V){Ui(this,V)}};function Ui(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,al(o),ji(o)}function al(o){o.A||(o.A=!0,Q(o,"complete"),Q(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Q(this,"complete"),Q(this,"abort"),ji(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),it.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ei(this):this.Xa())},t.Xa=function(){ei(this)};function ei(o){if(o.h&&typeof i<"u"){if(o.v&&zn(o)==4)setTimeout(o.Ca.bind(o),0);else if(Q(o,"readystatechange"),zn(o)==4){o.h=!1;try{const V=o.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=V===0){let te=String(o.D).match(ko)[1]||null;!te&&a.self&&a.self.location&&(te=a.self.location.protocol.slice(0,-1)),v=!Fo.test(te?te.toLowerCase():"")}p=v}if(p)Q(o,"complete"),Q(o,"success");else{o.o=6;try{var x=zn(o)>2?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.ca()+"]",al(o)}}finally{ji(o)}}}}function ji(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const p=o.g;o.g=null,h||Q(o,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Nt(h)}};function Bi(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Uo(o){const h={};o=(o.g&&zn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(T(o[v]))continue;var p=au(o[v]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[x]||[];h[x]=V,V.push(p)}En(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(o,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||h}function jo(o){this.za=0,this.i=[],this.j=new ar,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ls("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ls("baseRetryDelayMs",5e3,o),this.Za=Ls("retryDelaySeedMs",1e4,o),this.Ta=Ls("forwardChannelMaxRetries",2,o),this.va=Ls("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Po(o&&o.concurrentRequestLimit),this.Ba=new Yr,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=jo.prototype,t.ka=8,t.I=1,t.connect=function(o,h,p,v){Dt(0),this.W=o,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=si(this,null,this.W),ti(this)};function Fs(o){if(Bo(o),o.I==3){var h=o.V++,p=wn(o.J);if(Qe(p,"SID",o.M),Qe(p,"RID",h),Qe(p,"TYPE","terminate"),_r(o,p),h=new On(o,o.j,h),h.M=2,h.A=Jr(wn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.A,p=!0),p||(h.g=hl(h.j,null),h.g.ea(h.A)),h.F=Date.now(),xt(h)}qo(o)}function gr(o){o.g&&(Hi(o),o.g.cancel(),o.g=null)}function Bo(o){gr(o),o.v&&(a.clearTimeout(o.v),o.v=null),ni(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ti(o){if(!ki(o.h)&&!o.m){o.m=!0;var h=o.Ea;be||b(),Ve||(be(),Ve=!0),C.add(h,o),o.D=0}}function mr(o,h){return Ns(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=or(d(o.Ea,o,h),ul(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const x=new On(this,this.j,o);let V=this.o;if(this.U&&(V?(V=H(V),Pn(V,this.U)):V=this.U),this.u!==null||this.R||(x.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=$o(this,x,h),p=wn(this.J),Qe(p,"RID",o),Qe(p,"CVER",22),this.G&&Qe(p,"X-HTTP-Session-Id",this.G),_r(this,p),V&&(this.R?h="headers="+Gr(Ms(V))+"&"+h:this.u&&Lo(p,this.u,V)),Xr(this.h,x),this.Ra&&Qe(p,"TYPE","init"),this.S?(Qe(p,"$req",h),Qe(p,"SID","null"),x.U=!0,Qr(x,p,null)):Qr(x,p,h),this.I=2}}else this.I==3&&(o?ll(this,o):this.i.length==0||ki(this.h)||ll(this))};function ll(o,h){var p;h?p=h.l:p=o.V++;const v=wn(o.J);Qe(v,"SID",o.M),Qe(v,"RID",p),Qe(v,"AID",o.K),_r(o,v),o.u&&o.o&&Lo(v,o.u,o.o),p=new On(o,o.j,p,o.D+1),o.u===null&&(p.J=o.o),h&&(o.i=h.G.concat(o.i)),h=$o(o,p,1e3),p.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Xr(o.h,p),Qr(p,v,h)}function _r(o,h){o.H&&zt(o.H,function(p,v){Qe(h,v,p)}),o.l&&zt({},function(p,v){Qe(h,v,p)})}function $o(o,h,p){p=Math.min(o.i.length,p);const v=o.l?d(o.l.Ka,o.l,o):null;e:{var x=o.i;let Ae=-1;for(;;){const yt=["count="+p];Ae==-1?p>0?(Ae=x[0].g,yt.push("ofs="+Ae)):Ae=0:yt.push("ofs="+Ae);let Fe=!0;for(let tt=0;tt<p;tt++){var V=x[tt].g;const Nn=x[tt].map;if(V-=Ae,V<0)Ae=Math.max(0,x[tt].g-100),Fe=!1;else try{V="req"+V+"_"||"";try{var te=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Dn,hs]of te){let fs=hs;c(hs)&&(fs=Me(hs)),yt.push(V+Dn+"="+encodeURIComponent(fs))}}catch(Dn){throw yt.push(V+"type="+encodeURIComponent("_badmap")),Dn}}catch{v&&v(Nn)}}if(Fe){te=yt.join("&");break e}}te=void 0}return o=o.i.splice(0,p),h.G=o,te}function Ho(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;be||b(),Ve||(be(),Ve=!0),C.add(h,o),o.A=0}}function $i(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=or(d(o.Da,o),ul(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,qi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=or(d(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Dt(10),gr(this),qi(this))};function Hi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function qi(o){o.g=new On(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=wn(o.na);Qe(h,"RID","rpc"),Qe(h,"SID",o.M),Qe(h,"AID",o.K),Qe(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&Qe(h,"TO",o.ia),Qe(h,"TYPE","xmlhttp"),_r(o,h),o.u&&o.o&&Lo(h,o.u,o.o),o.O&&(o.g.H=o.O);var p=o.g;o=o.ba,p.M=1,p.A=Jr(wn(h)),p.u=null,p.R=!0,il(p,o)}t.Va=function(){this.C!=null&&(this.C=null,gr(this),$i(this),Dt(19))};function ni(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function cl(o,h){var p=null;if(o.g==h){ni(o),Hi(o),o.g=null;var v=2}else if(Ni(o.h,h))p=h.G,Di(o.h,h),v=1;else return;if(o.I!=0){if(h.o)if(v==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var x=o.D;v=Ps(),Q(v,new zr(v,p)),ti(o)}else Ho(o);else if(x=h.m,x==3||x==0&&h.X>0||!(v==1&&mr(o,h)||v==2&&$i(o)))switch(p&&p.length>0&&(h=o.h,h.i=h.i.concat(p)),x){case 1:ls(o,5);break;case 4:ls(o,10);break;case 3:ls(o,6);break;default:ls(o,2)}}}function ul(o,h){let p=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(p*=2),p*h}function ls(o,h){if(o.j.info("Error code "+h),h==2){var p=d(o.bb,o),v=o.Ua;const x=!v;v=new qn(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hr(v,"https"),Jr(v),x?os(v.toString(),p):Li(v.toString(),p)}else Dt(2);o.I=0,o.l&&o.l.pa(h),qo(o),Bo(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function qo(o){if(o.I=0,o.ja=[],o.l){const h=Oo(o.h);(h.length!=0||o.i.length!=0)&&(L(o.ja,h),L(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function si(o,h,p){var v=p instanceof qn?wn(p):new qn(p);if(v.g!="")h&&(v.g=h+"."+v.g),fr(v,v.u);else{var x=a.location;v=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const V=new qn(null);v&&hr(V,v),h&&(V.g=h),x&&fr(V,x),p&&(V.h=p),v=V}return p=o.G,h=o.wa,p&&h&&Qe(v,p,h),Qe(v,"VER",o.ka),_r(o,v),v}function hl(o,h,p){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new it(new Zr({ab:p})):new it(o.ma),h.Fa(o.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fl(){}t=fl.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function yr(){}yr.prototype.g=function(o,h){return new Jt(o,h)};function Jt(o,h){Y.call(this),this.g=new jo(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!T(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new us(this)}_(Jt,Y),Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){Fs(this.g)},Jt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.v&&(p={},p.__data__=Me(o),o=p);h.i.push(new ur(h.Ya++,o)),h.I==3&&ti(h)},Jt.prototype.N=function(){this.g.l=null,delete this.j,Fs(this.g),delete this.g,Jt.Z.N.call(this)};function Wo(o){ir.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const p in h){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}_(Wo,ir);function cs(){_t.call(this),this.status=1}_(cs,_t);function us(o){this.g=o}_(us,fl),us.prototype.ra=function(){Q(this.g,"a")},us.prototype.qa=function(o){Q(this.g,new Wo(o))},us.prototype.pa=function(o){Q(this.g,new cs)},us.prototype.oa=function(){Q(this.g,"b")},yr.prototype.createWebChannel=yr.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,dy=function(){return new yr},fy=function(){return Ps()},hy=Tt,yh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,Wl=ss,sl.COMPLETE="complete",uy=sl,bt.EventType=Gt,Gt.OPEN="a",Gt.CLOSE="b",Gt.ERROR="c",Gt.MESSAGE="d",Y.prototype.listen=Y.prototype.J,oa=bt,it.prototype.listenOnce=it.prototype.K,it.prototype.getLastError=it.prototype.Ha,it.prototype.getLastErrorCode=it.prototype.ya,it.prototype.getStatus=it.prototype.ca,it.prototype.getResponseJson=it.prototype.La,it.prototype.getResponseText=it.prototype.la,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Fa,cy=it}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const ag="@firebase/firestore",lg="4.9.2";/**
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
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
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
 */let So="12.3.0";/**
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
 */const Ii=new Zh("@firebase/firestore");function Ji(){return Ii.logLevel}function he(t,...e){if(Ii.logLevel<=xe.DEBUG){const n=e.map(gf);Ii.debug(`Firestore (${So}): ${t}`,...n)}}function Ai(t,...e){if(Ii.logLevel<=xe.ERROR){const n=e.map(gf);Ii.error(`Firestore (${So}): ${t}`,...n)}}function zc(t,...e){if(Ii.logLevel<=xe.WARN){const n=e.map(gf);Ii.warn(`Firestore (${So}): ${t}`,...n)}}function gf(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function Ne(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,py(t,s,n)}function py(t,e,n){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ai(s),new Error(s)}function pt(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||py(e,r,s)}function rt(t,e){return t}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class gy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Zt.UNAUTHENTICATED)))}shutdown(){}}class D0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class x0{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pt(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _i,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},c=u=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _i)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pt(typeof s.accessToken=="string",31837,{l:s}),new gy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pt(e===null||typeof e=="string",2055,{h:e}),new Zt(e)}}class V0{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class M0{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new V0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pt(this.o===void 0,3512);const s=i=>{i.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,he("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(pt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cg(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function F0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class mf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=F0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function ze(t,e){return t<e?-1:t>e?1:0}function vh(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return qu(r)===qu(i)?ze(r,i):qu(r)?1:-1}return ze(t.length,e.length)}const U0=55296,j0=57343;function qu(t){const e=t.charCodeAt(0);return e>=U0&&e<=j0}function _o(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
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
 */const ug="__name__";class _s{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ne(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ne(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _s?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=_s.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return ze(e.length,n.length)}static compareSegments(e,n){const s=_s.isNumericId(e),r=_s.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?_s.extractNumericId(e).compare(_s.extractNumericId(n)):vh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pf.fromString(e.substring(4,e.length-2))}}class Et extends _s{construct(e,n,s){return new Et(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Et(n)}static emptyPath(){return new Et([])}}const B0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends _s{construct(e,n,s){return new Ht(e,n,s)}static isValidIdentifier(e){return B0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ug}static keyField(){return new Ht([ug])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new me(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new me(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new me(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new me(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
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
 */class Pe{constructor(e){this.path=e}static fromPath(e){return new Pe(Et.fromString(e))}static fromName(e){return new Pe(Et.fromString(e).popFirst(5))}static empty(){return new Pe(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Pe(new Et(e.slice()))}}/**
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
 */function $0(t,e,n){if(!n)throw new me(Z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function H0(t,e,n,s){if(e===!0&&s===!0)throw new me(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hg(t){if(!Pe.isDocumentKey(t))throw new me(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function my(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _f(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ne(12329,{type:typeof t})}function Na(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new me(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_f(t);throw new me(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function St(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qa(t,e){if(!my(t))throw new me(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new me(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const fg=-62135596800,dg=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*dg);return new at(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fg)throw new me(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dg}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:St("string",at._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class ot{static fromTimestamp(e){return new ot(e)}static min(){return new ot(new at(0,0))}static max(){return new ot(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Da=-1;function q0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ot.fromTimestamp(s===1e9?new at(n+1,0):new at(n,s));return new Fr(r,Pe.empty(),e)}function W0(t){return new Fr(t.readTime,t.key,Da)}class Fr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fr(ot.min(),Pe.empty(),Da)}static max(){return new Fr(ot.max(),Pe.empty(),Da)}}function z0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Pe.comparator(t.documentKey,e.documentKey),n!==0?n:ze(t.largestBatchId,e.largestBatchId))}/**
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
 */const G0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function yf(t){if(t.code!==Z.FAILED_PRECONDITION||t.message!==G0)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):W.reject(n)}static resolve(e){return new W(((n,s)=>{n(e)}))}static reject(e){return new W(((n,s)=>{s(e)}))}static waitFor(e){return new W(((n,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&n()}),(u=>s(u)))})),a=!0,i===r&&n()}))}static or(e){let n=W.resolve(!1);for(const s of e)n=n.next((r=>r?W.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new W(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next((g=>{a[d]=g,++c,c===i&&s(a)}),(g=>r(g)))}}))}static doWhile(e,n){return new W(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function Q0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vf.ce=-1;/**
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
 */const Ef=-1;function wf(t){return t==null}function pc(t){return t===0&&1/t==-1/0}function X0(t){return typeof t=="number"&&Number.isInteger(t)&&!pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const _y="";function J0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pg(e)),e=Y0(t.get(n),e);return pg(e)}function Y0(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case _y:n+="";break;default:n+=i}}return n}function pg(t){return t+_y+""}/**
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
 */function gg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class vn{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new vn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new vn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rl(this.root,e,this.comparator,!0)}}class Rl{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??jt.RED,this.left=r??jt.EMPTY,this.right=i??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new jt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return jt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new jt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Wt{constructor(e){this.comparator=e,this.data=new vn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Wt(this.comparator);return n.data=e,n}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Wt(Ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Z0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ss{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Z0("Invalid base64 string: "+i):i}})(e);return new Ss(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Ss(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ss.EMPTY_BYTE_STRING=new Ss("");const eR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(t){if(pt(!!t,39018),typeof t=="string"){let e=0;const n=eR.exec(t);if(pt(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Bt(t.seconds),nanos:Bt(t.nanos)}}function Bt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yo(t){return typeof t=="string"?Ss.fromBase64String(t):Ss.fromUint8Array(t)}/**
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
 */const vy="server_timestamp",Ey="__type__",wy="__previous_value__",by="__local_write_time__";function bf(t){return(t?.mapValue?.fields||{})[Ey]?.stringValue===vy}function Tf(t){const e=t.mapValue.fields[wy];return bf(e)?Tf(e):e}function gc(t){const e=Si(t.mapValue.fields[by].timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class tR{constructor(e,n,s,r,i,a,c,u,d,g){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=g}}const mc="(default)";class _c{constructor(e,n){this.projectId=e,this.database=n||mc}static empty(){return new _c("","")}get isDefaultDatabase(){return this.database===mc}isEqual(e){return e instanceof _c&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ty="__type__",nR="__max__",Pl={mapValue:{}},Iy="__vector__",Eh="value";function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bf(t)?4:rR(t)?9007199254740991:sR(t)?10:11:Ne(28295,{value:t})}function Cs(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gc(t).isEqual(gc(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Si(r.timestampValue),c=Si(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return yo(r.bytesValue).isEqual(yo(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return Bt(r.geoPointValue.latitude)===Bt(i.geoPointValue.latitude)&&Bt(r.geoPointValue.longitude)===Bt(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return Bt(r.integerValue)===Bt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=Bt(r.doubleValue),c=Bt(i.doubleValue);return a===c?pc(a)===pc(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Cs);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(gg(a)!==gg(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Cs(a[u],c[u])))return!1;return!0})(t,e);default:return Ne(52216,{left:t})}}function xa(t,e){return(t.values||[]).find((n=>Cs(n,e)))!==void 0}function vo(t,e){if(t===e)return 0;const n=Ci(t),s=Ci(e);if(n!==s)return ze(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Bt(i.integerValue||i.doubleValue),u=Bt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(t,e);case 3:return _g(t.timestampValue,e.timestampValue);case 4:return _g(gc(t),gc(e));case 5:return vh(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=yo(i),u=yo(a);return c.compareTo(u)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const g=ze(c[d],u[d]);if(g!==0)return g}return ze(c.length,u.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ze(Bt(i.latitude),Bt(a.latitude));return c!==0?c:ze(Bt(i.longitude),Bt(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return yg(t.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},d=c[Eh]?.arrayValue,g=u[Eh]?.arrayValue,_=ze(d?.values?.length||0,g?.values?.length||0);return _!==0?_:yg(d,g)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Pl.mapValue&&a===Pl.mapValue)return 0;if(i===Pl.mapValue)return 1;if(a===Pl.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let _=0;_<u.length&&_<g.length;++_){const E=vh(u[_],g[_]);if(E!==0)return E;const S=vo(c[u[_]],d[g[_]]);if(S!==0)return S}return ze(u.length,g.length)})(t.mapValue,e.mapValue);default:throw Ne(23264,{he:n})}}function _g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ze(t,e);const n=Si(t),s=Si(e),r=ze(n.seconds,s.seconds);return r!==0?r:ze(n.nanos,s.nanos)}function yg(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=vo(n[r],s[r]);if(i)return i}return ze(n.length,s.length)}function Eo(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Si(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return yo(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return Pe.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=wh(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${wh(n.fields[a])}`;return r+"}"})(t.mapValue):Ne(61005,{value:t})}function zl(t){switch(Ci(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tf(t);return e?16+zl(e):16;case 5:return 2*t.stringValue.length;case 6:return yo(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+zl(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return Pi(s.fields,((i,a)=>{r+=i.length+zl(a)})),r})(t.mapValue);default:throw Ne(13486,{value:t})}}function bh(t){return!!t&&"integerValue"in t}function If(t){return!!t&&"arrayValue"in t}function Gl(t){return!!t&&"mapValue"in t}function sR(t){return(t?.mapValue?.fields||{})[Ty]?.stringValue===Iy}function _a(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=_a(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return{...t}}function rR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nR}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=Ht.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=c.popLast()}a?s[c.lastSegment()]=_a(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Gl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Pi(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new In(_a(this.value))}}function Ay(t){const e=[];return Pi(t.fields,((n,s)=>{const r=new Ht([n]);if(Gl(s)){const i=Ay(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new Cn(e)}/**
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
 */class Qn{constructor(e,n,s,r,i,a,c){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Qn(e,0,ot.min(),ot.min(),ot.min(),In.empty(),0)}static newFoundDocument(e,n,s,r){return new Qn(e,1,n,ot.min(),s,r,0)}static newNoDocument(e,n){return new Qn(e,2,n,ot.min(),ot.min(),In.empty(),0)}static newUnknownDocument(e,n){return new Qn(e,3,n,ot.min(),ot.min(),In.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yc{constructor(e,n){this.position=e,this.inclusive=n}}function vg(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(i.field.isKeyField()?s=Pe.comparator(Pe.fromName(a.referenceValue),n.key):s=vo(a,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cs(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vc{constructor(e,n="asc"){this.field=e,this.dir=n}}function iR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Sy{}class Lt extends Sy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new aR(e,n,s):n==="array-contains"?new uR(e,s):n==="in"?new hR(e,s):n==="not-in"?new fR(e,s):n==="array-contains-any"?new dR(e,s):new Lt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new lR(e,s):new cR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vo(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ur extends Sy{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ur(e,n)}matches(e){return Cy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Cy(t){return t.op==="and"}function Ry(t){return oR(t)&&Cy(t)}function oR(t){for(const e of t.filters)if(e instanceof Ur)return!1;return!0}function Th(t){if(t instanceof Lt)return t.field.canonicalString()+t.op.toString()+Eo(t.value);if(Ry(t))return t.filters.map((e=>Th(e))).join(",");{const e=t.filters.map((n=>Th(n))).join(",");return`${t.op}(${e})`}}function Py(t,e){return t instanceof Lt?(function(s,r){return r instanceof Lt&&s.op===r.op&&s.field.isEqual(r.field)&&Cs(s.value,r.value)})(t,e):t instanceof Ur?(function(s,r){return r instanceof Ur&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&Py(a,r.filters[c])),!0):!1})(t,e):void Ne(19439)}function Oy(t){return t instanceof Lt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Eo(n.value)}`})(t):t instanceof Ur?(function(n){return n.op.toString()+" {"+n.getFilters().map(Oy).join(" ,")+"}"})(t):"Filter"}class aR extends Lt{constructor(e,n,s){super(e,n,s),this.key=Pe.fromName(s.referenceValue)}matches(e){const n=Pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class lR extends Lt{constructor(e,n){super(e,"in",n),this.keys=ky("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class cR extends Lt{constructor(e,n){super(e,"not-in",n),this.keys=ky("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function ky(t,e){return(e.arrayValue?.values||[]).map((n=>Pe.fromName(n.referenceValue)))}class uR extends Lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return If(n)&&xa(n.arrayValue,this.value)}}class hR extends Lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xa(this.value.arrayValue,n)}}class fR extends Lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!xa(this.value.arrayValue,n)}}class dR extends Lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!If(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>xa(this.value.arrayValue,s)))}}/**
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
 */class pR{constructor(e,n=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function wg(t,e=null,n=[],s=[],r=null,i=null,a=null){return new pR(t,e,n,s,r,i,a)}function Af(t){const e=rt(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Th(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),wf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Eo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Eo(s))).join(",")),e.Te=n}return e.Te}function Sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Eg(t.startAt,e.startAt)&&Eg(t.endAt,e.endAt)}/**
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
 */class Gc{constructor(e,n=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function gR(t,e,n,s,r,i,a,c){return new Gc(t,e,n,s,r,i,a,c)}function mR(t){return new Gc(t)}function bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _R(t){return t.collectionGroup!==null}function ya(t){const e=rt(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Wt(Ht.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new vc(i,s))})),n.has(Ht.keyField().canonicalString())||e.Ie.push(new vc(Ht.keyField(),s))}return e.Ie}function yi(t){const e=rt(t);return e.Ee||(e.Ee=yR(e,ya(t))),e.Ee}function yR(t,e){if(t.limitType==="F")return wg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new vc(r.field,i)}));const n=t.endAt?new yc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new yc(t.startAt.position,t.startAt.inclusive):null;return wg(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Ih(t,e,n){return new Gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ny(t,e){return Sf(yi(t),yi(e))&&t.limitType===e.limitType}function Dy(t){return`${Af(yi(t))}|lt:${t.limitType}`}function Zo(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>Oy(r))).join(", ")}]`),wf(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Eo(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Eo(r))).join(",")),`Target(${s})`})(yi(t))}; limitType=${t.limitType})`}function Cf(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Pe.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of ya(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,u){const d=vg(a,c,u);return a.inclusive?d<=0:d<0})(s.startAt,ya(s),r)||s.endAt&&!(function(a,c,u){const d=vg(a,c,u);return a.inclusive?d>=0:d>0})(s.endAt,ya(s),r))})(t,e)}function vR(t){return(e,n)=>{let s=!1;for(const r of ya(t)){const i=ER(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ER(t,e,n){const s=t.field.isKeyField()?Pe.comparator(e.key,n.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?vo(u,d):Ne(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ne(19790,{direction:t.dir})}}/**
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
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return yy(this.inner)}size(){return this.innerSize}}/**
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
 */const wR=new vn(Pe.comparator);function Ec(){return wR}const xy=new vn(Pe.comparator);function Ol(...t){let e=xy;for(const n of t)e=e.insert(n.key,n);return e}function Vy(t){let e=xy;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function gi(){return va()}function My(){return va()}function va(){return new Oi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const bR=new vn(Pe.comparator),TR=new Wt(Pe.comparator);function tn(...t){let e=TR;for(const n of t)e=e.add(n);return e}const IR=new Wt(ze);function AR(){return IR}/**
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
 */function Rf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function Ly(t){return{integerValue:""+t}}function SR(t,e){return X0(e)?Ly(e):Rf(t,e)}/**
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
 */class Kc{constructor(){this._=void 0}}function CR(t,e,n){return t instanceof Va?(function(r,i){const a={fields:{[Ey]:{stringValue:vy},[by]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bf(i)&&(i=Tf(i)),i&&(a.fields[wy]=i),{mapValue:a}})(n,e):t instanceof Ma?Uy(t,e):t instanceof La?jy(t,e):(function(r,i){const a=Fy(r,i),c=Tg(a)+Tg(r.Ae);return bh(a)&&bh(r.Ae)?Ly(c):Rf(r.serializer,c)})(t,e)}function RR(t,e,n){return t instanceof Ma?Uy(t,e):t instanceof La?jy(t,e):n}function Fy(t,e){return t instanceof wc?(function(s){return bh(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Va extends Kc{}class Ma extends Kc{constructor(e){super(),this.elements=e}}function Uy(t,e){const n=By(e);for(const s of t.elements)n.some((r=>Cs(r,s)))||n.push(s);return{arrayValue:{values:n}}}class La extends Kc{constructor(e){super(),this.elements=e}}function jy(t,e){let n=By(e);for(const s of t.elements)n=n.filter((r=>!Cs(r,s)));return{arrayValue:{values:n}}}class wc extends Kc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Tg(t){return Bt(t.integerValue||t.doubleValue)}function By(t){return If(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class PR{constructor(e,n){this.field=e,this.transform=n}}function OR(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Ma&&r instanceof Ma||s instanceof La&&r instanceof La?_o(s.elements,r.elements,Cs):s instanceof wc&&r instanceof wc?Cs(s.Ae,r.Ae):s instanceof Va&&r instanceof Va})(t.transform,e.transform)}class kR{constructor(e,n){this.version=e,this.transformResults=n}}class Ts{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ts}static exists(e){return new Ts(void 0,e)}static updateTime(e){return new Ts(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qc{}function $y(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qy(t.key,Ts.none()):new Ja(t.key,t.data,Ts.none());{const n=t.data,s=In.empty();let r=new Wt(Ht.comparator);for(let i of e.fields)if(!r.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Hr(t.key,s,new Cn(r.toArray()),Ts.none())}}function NR(t,e,n){t instanceof Ja?(function(r,i,a){const c=r.value.clone(),u=Ag(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Hr?(function(r,i,a){if(!Kl(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ag(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Hy(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(t,e,n):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function Ea(t,e,n,s){return t instanceof Ja?(function(i,a,c,u){if(!Kl(i.precondition,a))return c;const d=i.value.clone(),g=Sg(i.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(t,e,n,s):t instanceof Hr?(function(i,a,c,u){if(!Kl(i.precondition,a))return c;const d=Sg(i.fieldTransforms,u,a),g=a.data;return g.setAll(Hy(i)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((_=>_.field)))})(t,e,n,s):(function(i,a,c){return Kl(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function DR(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Fy(s.transform,r||null);i!=null&&(n===null&&(n=In.empty()),n.set(s.field,i))}return n||null}function Ig(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&_o(s,r,((i,a)=>OR(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends Qc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Hr extends Qc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hy(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Ag(t,e,n){const s=new Map;pt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,RR(a,c,n[r]))}return s}function Sg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,a=n.data.field(r.field);s.set(r.field,CR(i,a,e))}return s}class qy extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xR extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VR{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&NR(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ea(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ea(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=My();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(r.key)?null:c;const u=$y(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(ot.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),tn())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((n,s)=>Ig(n,s)))&&_o(this.baseMutations,e.baseMutations,((n,s)=>Ig(n,s)))}}class Pf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return bR})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Pf(e,n,s,r)}}/**
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
 */class MR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var It,Ue;function LR(t){switch(t){case Z.OK:return Ne(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Ne(15467,{code:t})}}function FR(t){if(t===void 0)return Ai("GRPC error has no .code"),Z.UNKNOWN;switch(t){case It.OK:return Z.OK;case It.CANCELLED:return Z.CANCELLED;case It.UNKNOWN:return Z.UNKNOWN;case It.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case It.INTERNAL:return Z.INTERNAL;case It.UNAVAILABLE:return Z.UNAVAILABLE;case It.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case It.NOT_FOUND:return Z.NOT_FOUND;case It.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case It.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case It.ABORTED:return Z.ABORTED;case It.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case It.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case It.DATA_LOSS:return Z.DATA_LOSS;default:return Ne(39323,{code:t})}}(Ue=It||(It={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new pf([4294967295,4294967295],0);class UR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ah(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BR(t,e){return Ah(t,e.toTimestamp())}function lo(t){return pt(!!t,49232),ot.fromTimestamp((function(n){const s=Si(n);return new at(s.seconds,s.nanos)})(t))}function Wy(t,e){return Sh(t,e).canonicalString()}function Sh(t,e){const n=(function(r){return new Et(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function $R(t){const e=Et.fromString(t);return pt(XR(e),10190,{key:e.toString()}),e}function Ch(t,e){return Wy(t.databaseId,e.path)}function HR(t){const e=$R(t);return e.length===4?Et.emptyPath():WR(e)}function qR(t){return new Et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WR(t){return pt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cg(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function zR(t,e){let n;if(e instanceof Ja)n={update:Cg(t,e.key,e.value)};else if(e instanceof qy)n={delete:Ch(t,e.key)};else if(e instanceof Hr)n={update:Cg(t,e.key,e.data),updateMask:QR(e.fieldMask)};else{if(!(e instanceof xR))return Ne(16599,{Vt:e.type});n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof Va)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ma)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof La)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wc)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Ne(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:BR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ne(27497)})(t,e.precondition)),n}function GR(t,e){return t&&t.length>0?(pt(e!==void 0,14353),t.map((n=>(function(r,i){let a=r.updateTime?lo(r.updateTime):lo(i);return a.isEqual(ot.min())&&(a=lo(i)),new kR(a,r.transformResults||[])})(n,e)))):[]}function KR(t){let e=HR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pt(s===1,65062);const g=n.from[0];g.allDescendants?r=g.collectionId:e=e.child(g.collectionId)}let i=[];n.where&&(i=(function(_){const E=zy(_);return E instanceof Ur&&Ry(E)?E.getFilters():[E]})(n.where));let a=[];n.orderBy&&(a=(function(_){return _.map((E=>(function(L){return new vc(Yi(L.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(E)))})(n.orderBy));let c=null;n.limit&&(c=(function(_){let E;return E=typeof _=="object"?_.value:_,wf(E)?null:E})(n.limit));let u=null;n.startAt&&(u=(function(_){const E=!!_.before,S=_.values||[];return new yc(S,E)})(n.startAt));let d=null;return n.endAt&&(d=(function(_){const E=!_.before,S=_.values||[];return new yc(S,E)})(n.endAt)),gR(e,r,a,i,c,"F",u,d)}function zy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Yi(n.unaryFilter.field);return Lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Yi(n.unaryFilter.field);return Lt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yi(n.unaryFilter.field);return Lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yi(n.unaryFilter.field);return Lt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Lt.create(Yi(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Ur.create(n.compositeFilter.filters.map((s=>zy(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}})(n.compositeFilter.op))})(t):Ne(30097,{filter:t})}function Yi(t){return Ht.fromServerFormat(t.fieldPath)}function QR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function XR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class JR{constructor(e){this.yt=e}}function YR(t){const e=KR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
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
 */class ZR{constructor(){this.Cn=new eP}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Fr.min())}updateCollectionGroup(e,n,s){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class eP{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Wt(Et.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Wt(Et.comparator)).toArray()}}/**
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
 */const Rg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gy=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(Gy,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
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
 */class wo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new wo(0)}static cr(){return new wo(-1)}}/**
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
 */const Pg="LruGarbageCollector",tP=1048576;function Og([t,e],[n,s]){const r=ze(t,n);return r===0?ze(e,s):r}class nP{constructor(e){this.Ir=e,this.buffer=new Wt(Og),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Og(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sP{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(Pg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xa(n)?he(Pg,"Ignoring IndexedDB error during garbage collection: ",n):await yf(n)}await this.Vr(3e5)}))}}class rP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return W.resolve(vf.ce);const s=new nP(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Rg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rg):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,a,c,u,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((_=>(_>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,a=Date.now(),this.nthSequenceNumber(e,r)))).next((_=>(s=_,c=Date.now(),this.removeTargets(e,s,n)))).next((_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((_=>(d=Date.now(),Ji()<=xe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-g}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:_}))))}}function iP(t,e){return new rP(t,e)}/**
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
 */class oP{constructor(){this.changes=new Oi((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lP{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&Ea(s.mutation,r,Cn.empty(),at.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,tn()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=tn()){const r=gi();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let a=Ol();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const s=gi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,tn())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,s,r){let i=Ec();const a=va(),c=(function(){return va()})();return n.forEach(((u,d)=>{const g=s.get(d.key);r.has(d.key)&&(g===void 0||g.mutation instanceof Hr)?i=i.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Ea(g.mutation,d,g.mutation.getFieldMask(),at.now())):a.set(d.key,Cn.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,g)=>a.set(d,g))),n.forEach(((d,g)=>c.set(d,new aP(g,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,n){const s=va();let r=new vn(((a,c)=>a-c)),i=tn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=n.get(u);if(d===null)return;let g=s.get(u)||Cn.empty();g=c.applyToLocalView(d,g),s.set(u,g);const _=(r.get(c.batchId)||tn()).add(u);r=r.insert(c.batchId,_)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,g=u.value,_=My();g.forEach((E=>{if(!i.has(E)){const S=$y(n.get(E),s.get(E));S!==null&&_.set(E,S),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return W.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(a){return Pe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_R(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):W.resolve(gi());let c=Da,u=i;return a.next((d=>W.forEach(d,((g,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(g)?W.resolve():this.remoteDocumentCache.getEntry(e,g).next((E=>{u=u.insert(g,E)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,tn()))).next((g=>({batchId:c,changes:Vy(g)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Pe(n)).next((s=>{let r=Ol();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let a=Ol();return this.indexManager.getCollectionParents(e,i).next((c=>W.forEach(c,(u=>{const d=(function(_,E){return new Gc(E,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((g=>{g.forEach(((_,E)=>{a=a.insert(_,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((a=>{i.forEach(((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Qn.newInvalidDocument(g)))}));let c=Ol();return a.forEach(((u,d)=>{const g=i.get(u);g!==void 0&&Ea(g.mutation,d,Cn.empty(),at.now()),Cf(n,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class cP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:lo(r.createTime)}})(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:YR(r.bundledQuery),readTime:lo(r.readTime)}})(n)),W.resolve()}}/**
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
 */class uP{constructor(){this.overlays=new vn(Pe.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gi();return W.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),W.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,n,s){const r=gi(),i=n.length+1,a=new Pe(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return W.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new vn(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>s){let g=i.get(d.largestBatchId);g===null&&(g=gi(),i=i.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=gi(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=r)););return W.resolve(c)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new MR(n,s));let i=this.qr.get(n);i===void 0&&(i=tn(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class hP{constructor(){this.sessionToken=Ss.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class Of{constructor(){this.Qr=new Wt(Mt.$r),this.Ur=new Wt(Mt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Mt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Mt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new Pe(new Et([])),s=new Mt(n,e),r=new Mt(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Pe(new Et([])),s=new Mt(n,e),r=new Mt(n,e+1);let i=tn();return this.Ur.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Mt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Mt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Pe.comparator(e.key,n.key)||ze(e.Yr,n.Yr)}static Kr(e,n){return ze(e.Yr,n.Yr)||Pe.comparator(e.key,n.key)}}/**
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
 */class fP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Wt(Mt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new VR(i,n,s,r);this.mutationQueue.push(a);for(const c of r)this.Zr=this.Zr.add(new Mt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return W.resolve(a)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Ef:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Mt(n,0),r=new Mt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(a=>{const c=this.Xr(a.Yr);i.push(c)})),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Wt(ze);return n.forEach((r=>{const i=new Mt(r,0),a=new Mt(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{s=s.add(c.Yr)}))})),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Pe.isDocumentKey(i)||(i=i.child(""));const a=new Mt(new Pe(i),0);let c=new Wt(ze);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(u.Yr)),!0)}),a),W.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){pt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(n.mutations,(r=>{const i=new Mt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Mt(n,0),r=this.Zr.firstAfterOrEqual(s);return W.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dP{constructor(e){this.ri=e,this.docs=(function(){return new vn(Pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,a=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():Qn.newInvalidDocument(n))}getEntries(e,n){let s=Ec();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qn.newInvalidDocument(r))})),W.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ec();const a=n.path,c=new Pe(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||z0(W0(g),s)<=0||(r.has(g.key)||Cf(n,g))&&(i=i.insert(g.key,g.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Ne(9500)}ii(e,n){return W.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new pP(this)}getSize(e){return W.resolve(this.size)}}class pP extends oP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class gP{constructor(e){this.persistence=e,this.si=new Oi((n=>Af(n)),Sf),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.oi=0,this._i=new Of,this.targetCount=0,this.ai=wo.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),W.waitFor(i).next((()=>r))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return W.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),W.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return W.resolve(s)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
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
 */class Ky{constructor(e,n){this.ui={},this.overlays={},this.ci=new vf(0),this.li=!1,this.li=!0,this.hi=new hP,this.referenceDelegate=e(this),this.Pi=new gP(this),this.indexManager=new ZR,this.remoteDocumentCache=(function(r){return new dP(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new JR(n),this.Ii=new cP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new fP(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){he("MemoryPersistence","Starting transaction:",e);const r=new mP(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return W.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class mP extends K0{constructor(e){super(),this.currentSequenceNumber=e}}class kf{constructor(e){this.persistence=e,this.Ri=new Of,this.Vi=null}static mi(e){return new kf(e)}get fi(){if(this.Vi)return this.Vi;throw Ne(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),W.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(s=>{const r=Pe.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,ot.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class bc{constructor(e,n){this.persistence=e,this.pi=new Oi((s=>J0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=iP(this,n)}static mi(e,n){return new bc(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return W.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?W.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,n).next((c=>{c||(s++,i.removeEntry(a,ot.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zl(e.data.value)),n}br(e,n,s){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return W.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Nf{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=tn(),r=tn();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Nf(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class _P{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return KI()?8:Q0(on())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new _P;return this.Ss(e,n,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,a,c.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(Ji()<=xe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Zo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Ji()<=xe.DEBUG&&he("QueryEngine","Query:",Zo(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(Ji()<=xe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Zo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yi(n))):W.resolve())}ys(e,n){if(bg(n))return W.resolve(null);let s=yi(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=Ih(n,null,"F"),s=yi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=tn(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.Ds(n,c);return this.Cs(n,d,a,u.readTime)?this.ys(e,Ih(n,null,"F")):this.vs(e,d,n,u)}))))})))))}ws(e,n,s,r){return bg(n)||r.isEqual(ot.min())?W.resolve(null):this.ps.getDocuments(e,s).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,s,r)?W.resolve(null):(Ji()<=xe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zo(n)),this.vs(e,a,n,q0(r,Da)).next((c=>c)))}))}Ds(e,n){let s=new Wt(vR(e));return n.forEach(((r,i)=>{Cf(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return Ji()<=xe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Zo(n)),this.ps.getDocumentsMatchingQuery(e,n,Fr.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const vP="LocalStore";class EP{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new vn(ze),this.xs=new Oi((i=>Af(i)),Sf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function wP(t,e,n,s){return new EP(t,e,n,s)}async function Qy(t,e){const n=rt(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let u=tn();for(const d of r){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of i){c.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return n.localDocuments.getDocuments(s,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function bP(t,e){const n=rt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,g){const _=d.batch,E=_.keys();let S=W.resolve();return E.forEach((L=>{S=S.next((()=>g.getEntry(u,L))).next((q=>{const G=d.docVersions.get(L);pt(G!==null,48541),q.version.compareTo(G)<0&&(_.applyToRemoteDocument(q,d),q.isValidDocument()&&(q.setReadTime(d.commitVersion),g.addEntry(q)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(u,_)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let u=tn();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function TP(t){const e=rt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function IP(t,e){const n=rt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ef),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}class kg{constructor(){this.activeTargetIds=AR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AP{constructor(){this.Mo=new kg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new kg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SP{Oo(e){}shutdown(){}}/**
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
 */const Ng="ConnectivityMonitor";class Dg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(Ng,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(Ng,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let kl=null;function Rh(){return kl===null?kl=(function(){return 268435456+Math.round(2147483648*Math.random())})():kl++,"0x"+kl.toString(16)}/**
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
 */const Wu="RestConnection",CP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===mc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const a=Rh(),c=this.zo(e,n.toUriEncodedString());he(Wu,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,r,i);const{host:d}=new URL(c),g=To(d);return this.Jo(e,c,u,s,g).then((_=>(he(Wu,`Received RPC '${e}' ${a}: `,_),_)),(_=>{throw zc(Wu,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",s),_}))}Ho(e,n,s,r,i,a){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=CP[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class PP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Yt="WebChannelConnection";class OP extends RP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const a=Rh();return new Promise(((c,u)=>{const d=new cy;d.setWithCredentials(!0),d.listenOnce(uy.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Wl.NO_ERROR:const _=d.getResponseJson();he(Yt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case Wl.TIMEOUT:he(Yt,`RPC '${e}' ${a} timed out`),u(new me(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const E=d.getStatus();if(he(Yt,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const L=S?.error;if(L&&L.status&&L.message){const q=(function(J){const K=J.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(K)>=0?K:Z.UNKNOWN})(L.status);u(new me(q,L.message))}else u(new me(Z.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new me(Z.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{he(Yt,`RPC '${e}' ${a} completed.`)}}));const g=JSON.stringify(r);he(Yt,`RPC '${e}' ${a} sending request:`,r),d.send(n,"POST",g,s,15)}))}T_(e,n,s){const r=Rh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dy(),c=fy(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const g=i.join("");he(Yt,`Creating RPC '${e}' stream ${r}: ${g}`,u);const _=a.createWebChannel(g,u);this.I_(_);let E=!1,S=!1;const L=new PP({Yo:G=>{S?he(Yt,`Not sending because RPC '${e}' stream ${r} is closed:`,G):(E||(he(Yt,`Opening RPC '${e}' stream ${r} transport.`),_.open(),E=!0),he(Yt,`RPC '${e}' stream ${r} sending:`,G),_.send(G))},Zo:()=>_.close()}),q=(G,J,K)=>{G.listen(J,(ee=>{try{K(ee)}catch(ie){setTimeout((()=>{throw ie}),0)}}))};return q(_,oa.EventType.OPEN,(()=>{S||(he(Yt,`RPC '${e}' stream ${r} transport opened.`),L.o_())})),q(_,oa.EventType.CLOSE,(()=>{S||(S=!0,he(Yt,`RPC '${e}' stream ${r} transport closed`),L.a_(),this.E_(_))})),q(_,oa.EventType.ERROR,(G=>{S||(S=!0,zc(Yt,`RPC '${e}' stream ${r} transport errored. Name:`,G.name,"Message:",G.message),L.a_(new me(Z.UNAVAILABLE,"The operation could not be completed")))})),q(_,oa.EventType.MESSAGE,(G=>{if(!S){const J=G.data[0];pt(!!J,16349);const K=J,ee=K?.error||K[0]?.error;if(ee){he(Yt,`RPC '${e}' stream ${r} received error:`,ee);const ie=ee.status;let be=(function(b){const I=It[b];if(I!==void 0)return FR(I)})(ie),Ve=ee.message;be===void 0&&(be=Z.INTERNAL,Ve="Unknown error status: "+ie+" with message "+ee.message),S=!0,L.a_(new me(be,Ve)),_.close()}else he(Yt,`RPC '${e}' stream ${r} received:`,J),L.u_(J)}})),q(c,hy.STAT_EVENT,(G=>{G.stat===yh.PROXY?he(Yt,`RPC '${e}' stream ${r} detected buffering proxy`):G.stat===yh.NOPROXY&&he(Yt,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{L.__()}),0),L}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function zu(){return typeof document<"u"?document:null}/**
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
 */function Xc(t){return new UR(t,!0)}/**
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
 */class Xy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&he("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const xg="PersistentStream";class kP{constructor(e,n,s,r,i,a,c,u){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Ai(n.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new me(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(xg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(he(xg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class NP extends kP{constructor(e,n,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=GR(e.writeResults,e.commitTime),s=lo(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=qR(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>zR(this.serializer,s)))};this.q_(n)}}/**
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
 */class DP{}class xP extends DP{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new me(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,Sh(n,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new me(Z.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,Sh(n,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new me(Z.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class VP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ai(n),this.aa=!1):he("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ya="RemoteStore";class MP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{el(this)&&(he(Ya,"Restarting streams for network reachability change."),await(async function(u){const d=rt(u);d.Ea.add(4),await Za(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Jc(d)})(this))}))})),this.Ra=new VP(s,r)}}async function Jc(t){if(el(t))for(const e of t.da)await e(!0)}async function Za(t){for(const e of t.da)await e(!1)}function el(t){return rt(t).Ea.size===0}async function Jy(t,e,n){if(!Xa(e))throw e;t.Ea.add(1),await Za(t),t.Ra.set("Offline"),n||(n=()=>TP(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{he(Ya,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Jc(t)}))}function Yy(t,e){return e().catch((n=>Jy(t,n,e)))}async function Yc(t){const e=rt(t),n=jr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ef;for(;LP(e);)try{const r=await IP(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,FP(e,r)}catch(r){await Jy(e,r)}Zy(e)&&ev(e)}function LP(t){return el(t)&&t.Ta.length<10}function FP(t,e){t.Ta.push(e);const n=jr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Zy(t){return el(t)&&!jr(t).x_()&&t.Ta.length>0}function ev(t){jr(t).start()}async function UP(t){jr(t).ra()}async function jP(t){const e=jr(t);for(const n of t.Ta)e.ea(n.mutations)}async function BP(t,e,n){const s=t.Ta.shift(),r=Pf.from(s,e,n);await Yy(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Yc(t)}async function $P(t,e){e&&jr(t).X_&&await(async function(s,r){if((function(a){return LR(a)&&a!==Z.ABORTED})(r.code)){const i=s.Ta.shift();jr(s).B_(),await Yy(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Yc(s)}})(t,e),Zy(t)&&ev(t)}async function Vg(t,e){const n=rt(t);n.asyncQueue.verifyOperationInProgress(),he(Ya,"RemoteStore received new credentials");const s=el(n);n.Ea.add(3),await Za(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Jc(n)}async function HP(t,e){const n=rt(t);e?(n.Ea.delete(2),await Jc(n)):e||(n.Ea.add(2),await Za(n),n.Ra.set("Unknown"))}function jr(t){return t.fa||(t.fa=(function(n,s,r){const i=rt(n);return i.sa(),new NP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:UP.bind(null,t),r_:$P.bind(null,t),ta:jP.bind(null,t),na:BP.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Yc(t)):(await t.fa.stop(),t.Ta.length>0&&(he(Ya,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Df{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const a=Date.now()+s,c=new Df(e,n,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tv(t,e){if(Ai("AsyncQueue",`${e}: ${t}`),Xa(t))return new me(Z.UNAVAILABLE,`${e}: ${t}`);throw t}class qP{constructor(){this.queries=Mg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=rt(n),i=r.queries;r.queries=Mg(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(s)}))})(this,new me(Z.ABORTED,"Firestore shutting down"))}}function Mg(){return new Oi((t=>Dy(t)),Ny)}function WP(t){t.Ca.forEach((e=>{e.next()}))}var Lg,Fg;(Fg=Lg||(Lg={})).Ma="default",Fg.Cache="cache";const zP="SyncEngine";class GP{constructor(e,n,s,r,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Oi((c=>Dy(c)),Ny),this.Iu=new Map,this.Eu=new Set,this.du=new vn(Pe.comparator),this.Au=new Map,this.Ru=new Of,this.Vu={},this.mu=new Map,this.fu=wo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function KP(t,e,n){const s=YP(t);try{const r=await(function(a,c){const u=rt(a),d=at.now(),g=c.reduce(((S,L)=>S.add(L.key)),tn());let _,E;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let L=Ec(),q=tn();return u.Ns.getEntries(S,g).next((G=>{L=G,L.forEach(((J,K)=>{K.isValidDocument()||(q=q.add(J))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,L))).next((G=>{_=G;const J=[];for(const K of c){const ee=DR(K,_.get(K.key).overlayedDocument);ee!=null&&J.push(new Hr(K.key,ee,Ay(ee.value.mapValue),Ts.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,J,c)})).next((G=>{E=G;const J=G.applyToLocalDocumentSet(_,q);return u.documentOverlayCache.saveOverlays(S,G.batchId,J)}))})).then((()=>({batchId:E.batchId,changes:Vy(_)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new vn(ze)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d})(s,r.batchId,n),await Zc(s,r.changes),await Yc(s.remoteStore)}catch(r){const i=tv(r,"Failed to persist write");n.reject(i)}}function Ug(t,e,n){const s=rt(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const u=rt(a);u.onlineState=c;let d=!1;u.queries.forEach(((g,_)=>{for(const E of _.Sa)E.va(c)&&(d=!0)})),d&&WP(u)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function QP(t,e){const n=rt(t),s=e.batch.batchId;try{const r=await bP(n.localStore,e);sv(n,s,null),nv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zc(n,r)}catch(r){await yf(r)}}async function XP(t,e,n){const s=rt(t);try{const r=await(function(a,c){const u=rt(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return u.mutationQueue.lookupMutationBatch(d,c).next((_=>(pt(_!==null,37113),g=_.keys(),u.mutationQueue.removeMutationBatch(d,_)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>u.localDocuments.getDocuments(d,g)))}))})(s.localStore,e);sv(s,e,n),nv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zc(s,r)}catch(r){await yf(r)}}function nv(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function sv(t,e,n){const s=rt(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}async function Zc(t,e,n){const s=rt(t),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{a.push(s.pu(u,e,n).then((d=>{if((d||n)&&s.isPrimaryClient){const g=d?!d.fromCache:n?.targetChanges.get(u.targetId)?.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){r.push(d);const g=Nf.As(u.targetId,d);i.push(g)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(u,d){const g=rt(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(_=>W.forEach(d,(E=>W.forEach(E.Es,(S=>g.persistence.referenceDelegate.addReference(_,E.targetId,S))).next((()=>W.forEach(E.ds,(S=>g.persistence.referenceDelegate.removeReference(_,E.targetId,S)))))))))}catch(_){if(!Xa(_))throw _;he(vP,"Failed to update sequence numbers: "+_)}for(const _ of d){const E=_.targetId;if(!_.fromCache){const S=g.Ms.get(E),L=S.snapshotVersion,q=S.withLastLimboFreeSnapshotVersion(L);g.Ms=g.Ms.insert(E,q)}}})(s.localStore,i))}async function JP(t,e){const n=rt(t);if(!n.currentUser.isEqual(e)){he(zP,"User change. New user:",e.toKey());const s=await Qy(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new me(Z.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zc(n,s.Ls)}}function YP(t){const e=rt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XP.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new Ky(kf.mi,this.serializer)}Du(e){return new AP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class ZP extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pt(this.persistence.referenceDelegate instanceof bc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new sP(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new Ky((s=>bc.mi(s,n)),this.serializer)}}class Ph{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ug(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JP.bind(null,this.syncEngine),await HP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new qP})()}createDatastore(e){const n=Xc(e.databaseInfo.databaseId),s=(function(i){return new OP(i)})(e.databaseInfo);return(function(i,a,c,u){return new xP(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,a,c){return new MP(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Ug(this.syncEngine,n,0)),(function(){return Dg.v()?new Dg:new SP})())}createSyncEngine(e,n){return(function(r,i,a,c,u,d,g){const _=new GP(r,i,a,c,u,d);return g&&(_.gu=!0),_})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=rt(n);he(Ya,"RemoteStore shutting down."),s.Ea.add(5),await Za(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ph.provider={build:()=>new Ph};/**
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
 */const Br="FirestoreClient";class eO{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Zt.UNAUTHENTICATED,this.clientId=mf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{he(Br,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(he(Br,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=tv(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Gu(t,e){t.asyncQueue.verifyOperationInProgress(),he(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Qy(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tO(t);he(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Vg(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>Vg(e.remoteStore,r))),t._onlineComponents=e}async function tO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(Br,"Using user provided OfflineComponentProvider");try{await Gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===Z.FAILED_PRECONDITION||r.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;zc("Error using user provided cache. Falling back to memory cache: "+n),await Gu(t,new Tc)}}else he(Br,"Using default OfflineComponentProvider"),await Gu(t,new ZP(void 0));return t._offlineComponents}async function nO(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(Br,"Using user provided OnlineComponentProvider"),await jg(t,t._uninitializedComponentsProvider._online)):(he(Br,"Using default OnlineComponentProvider"),await jg(t,new Ph))),t._onlineComponents}function sO(t){return nO(t).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bg=new Map;/**
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
 */const iv="firestore.googleapis.com",$g=!0;class Hg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iv,this.ssl=$g}else this.host=e.host,this.ssl=e.ssl??$g;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tP)throw new me(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new me(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new me(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new me(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xf{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new N0;switch(s.type){case"firstParty":return new M0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Bg.get(n);s&&(he("ComponentProvider","Removing Datastore"),Bg.delete(n),s.terminate())})(this),Promise.resolve()}}function rO(t,e,n,s={}){t=Na(t,xf);const r=To(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;r&&(v_(`https://${c}`),E_("Firestore",!0)),i.host!==iv&&i.host!==c&&zc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:r,emulatorOptions:s};if(!Ei(u,a)&&(t._setSettings(u),s.mockUserToken)){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=Zt.MOCK_USER;else{d=UI(s.mockUserToken,t._app?.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new me(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Zt(_)}t._authCredentials=new D0(new gy(d,g))}}/**
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
 */class Vf{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vf(this.firestore,e,this._query)}}class qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}toJSON(){return{type:qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Qa(n,qt._jsonSchema))return new qt(e,s||null,new Pe(Et.fromString(n.referencePath)))}}qt._jsonSchemaVersion="firestore/documentReference/1.0",qt._jsonSchema={type:St("string",qt._jsonSchemaVersion),referencePath:St("string")};class Fa extends Vf{constructor(e,n,s){super(e,n,mR(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new Pe(e))}withConverter(e){return new Fa(this.firestore,e,this._path)}}function ov(t,e,...n){if(t=kt(t),arguments.length===1&&(e=mf.newId()),$0("doc","path",e),t instanceof xf){const s=Et.fromString(e,...n);return hg(s),new qt(t,null,new Pe(s))}{if(!(t instanceof qt||t instanceof Fa))throw new me(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Et.fromString(e,...n));return hg(s),new qt(t.firestore,t instanceof Fa?t.converter:null,new Pe(s))}}/**
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
 */const qg="AsyncQueue";class Wg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xy(this,"async_queue_retry"),this._c=()=>{const s=zu();s&&he(qg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=zu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new _i;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xa(e))throw e;he(qg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ai("INTERNAL UNHANDLED ERROR: ",zg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Df.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&Ne(47125,{Pc:zg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function zg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Mf extends xf{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Wg,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wg(e),this._firestoreClient=void 0,await e}}}function iO(t,e){const n=typeof t=="object"?t:nf(),s=typeof t=="string"?t:mc,r=tf(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=LI("firestore");i&&rO(r,...i)}return r}function oO(t){if(t._terminated)throw new me(Z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aO(t),t._firestoreClient}function aO(t){const e=t._freezeSettings(),n=(function(r,i,a,c){return new tR(r,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,rv(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new eO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Ss.fromBase64String(e))}catch(n){throw new me(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(Ss.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:St("string",Xn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class eu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tu{constructor(e){this._methodName=e}}/**
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
 */class Xs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xs._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,Xs._jsonSchema))return new Xs(e.latitude,e.longitude)}}Xs._jsonSchemaVersion="firestore/geoPoint/1.0",Xs._jsonSchema={type:St("string",Xs._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Js{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Js._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,Js._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Js(e.vectorValues);throw new me(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Js._jsonSchemaVersion="firestore/vectorValue/1.0",Js._jsonSchema={type:St("string",Js._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const lO=/^__.*__$/;class cO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}class av{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne(40011,{Ac:t})}}class Lf{constructor(e,n,s,r,i,a){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ic(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(lv(this.Ac)&&lO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class uO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Xc(e)}Cc(e,n,s,r=!1){return new Lf({Ac:e,methodName:n,Dc:s,path:Ht.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cv(t){const e=t._freezeSettings(),n=Xc(t._databaseId);return new uO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hO(t,e,n,s,r,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);Uf("Data must be an object, but it was:",a,s);const c=uv(s,a);let u,d;if(i.merge)u=new Cn(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const g=[];for(const _ of i.mergeFields){const E=Oh(e,_,n);if(!a.contains(E))throw new me(Z.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);fv(g,E)||g.push(E)}u=new Cn(g),d=a.fieldTransforms.filter((_=>u.covers(_.field)))}else u=null,d=a.fieldTransforms;return new cO(new In(c),u,d)}class nu extends tu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nu}}class Ff extends tu{_toFieldTransform(e){return new PR(e.path,new Va)}isEqual(e){return e instanceof Ff}}function fO(t,e,n,s){const r=t.Cc(1,e,n);Uf("Data must be an object, but it was:",r,s);const i=[],a=In.empty();Pi(s,((u,d)=>{const g=jf(e,u,n);d=kt(d);const _=r.yc(g);if(d instanceof nu)i.push(g);else{const E=su(d,_);E!=null&&(i.push(g),a.set(g,E))}}));const c=new Cn(i);return new av(a,c,r.fieldTransforms)}function dO(t,e,n,s,r,i){const a=t.Cc(1,e,n),c=[Oh(e,s,n)],u=[r];if(i.length%2!=0)throw new me(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(Oh(e,i[E])),u.push(i[E+1]);const d=[],g=In.empty();for(let E=c.length-1;E>=0;--E)if(!fv(d,c[E])){const S=c[E];let L=u[E];L=kt(L);const q=a.yc(S);if(L instanceof nu)d.push(S);else{const G=su(L,q);G!=null&&(d.push(S),g.set(S,G))}}const _=new Cn(d);return new av(g,_,a.fieldTransforms)}function su(t,e){if(hv(t=kt(t)))return Uf("Unsupported field value:",e,t),uv(t,e);if(t instanceof tu)return(function(s,r){if(!lv(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let u=su(c,r.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SR(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=at.fromDate(s);return{timestampValue:Ah(r.serializer,i)}}if(s instanceof at){const i=new at(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ah(r.serializer,i)}}if(s instanceof Xs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xn)return{bytesValue:jR(r.serializer,s._byteString)};if(s instanceof qt){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wy(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Js)return(function(a,c){return{mapValue:{fields:{[Ty]:{stringValue:Iy},[Eh]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Rf(c.serializer,d)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${_f(s)}`)})(t,e)}function uv(t,e){const n={};return yy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,((s,r)=>{const i=su(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function hv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Xs||t instanceof Xn||t instanceof qt||t instanceof tu||t instanceof Js)}function Uf(t,e,n){if(!hv(n)||!my(n)){const s=_f(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function Oh(t,e,n){if((e=kt(e))instanceof eu)return e._internalPath;if(typeof e=="string")return jf(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const pO=new RegExp("[~\\*/\\[\\]]");function jf(t,e,n){if(e.search(pO)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eu(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new me(Z.INVALID_ARGUMENT,c+t+u)}function fv(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class dv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gO extends dv{data(){return super.data()}}function pv(t,e){return typeof e=="string"?jf(t,e):e instanceof eu?e._internalPath:e._delegate._internalPath}/**
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
 */function mO(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class Nl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class co extends dv{constructor(e,n,s,r,i,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=co._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}co._jsonSchemaVersion="firestore/documentSnapshot/1.0",co._jsonSchema={type:St("string",co._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class Ql extends co{data(e={}){return super.data(e)}}class wa{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Nl(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Ql(this._firestore,this._userDataWriter,s.key,s,new Nl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const u=new Ql(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Nl(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Ql(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Nl(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:_O(c.type),doc:u,oldIndex:d,newIndex:g}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _O(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:t})}}wa._jsonSchemaVersion="firestore/querySnapshot/1.0",wa._jsonSchema={type:St("string",wa._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};function yO(t,e,n){t=Na(t,qt);const s=Na(t.firestore,Mf),r=mO(t.converter,e);return gv(s,[hO(cv(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ts.none())])}function vO(t,e,n,...s){t=Na(t,qt);const r=Na(t.firestore,Mf),i=cv(r);let a;return a=typeof(e=kt(e))=="string"||e instanceof eu?dO(i,"updateDoc",t._key,e,n,s):fO(i,"updateDoc",t._key,e),gv(r,[a.toMutation(t._key,Ts.exists(!0))])}function gv(t,e){return(function(s,r){const i=new _i;return s.asyncQueue.enqueueAndForget((async()=>KP(await sO(s),r,i))),i.promise})(oO(t),e)}function Ac(){return new Ff("serverTimestamp")}(function(e,n=!0){(function(r){So=r})(Io),go(new wi("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Mf(new x0(s.getProvider("auth-internal")),new L0(a,s.getProvider("app-check-internal")),(function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new me(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _c(d.options.projectId,g)})(a,r),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),xr(ag,lg,e),xr(ag,lg,"esm2020")})();const EO={apiKey:"AIzaSyDvJe-P_cND8HtHXSy-2JiE4GTv0HjISVQ",authDomain:"touch-grass-77c7c.firebaseapp.com",projectId:"touch-grass-77c7c",storageBucket:"touch-grass-77c7c.appspot.com",messagingSenderId:"274431894037",appId:"1:274431894037:web:51d11404b04f90fa63641c"},mv=nS().length?nf():T_(EO),Rn=O0(mv),_v=iO(mv);let Dl;function wO(){return Dl||(Dl=new Promise(t=>{const e=Y_(Rn,n=>{e(),t(n)})}),Dl)}async function o1(t,e,n={}){const s=!!n.remember;await yC(Rn,s?ty:hf);const r=await J_(Rn,t,e);if(!r.user.emailVerified){try{await uf(r.user)}catch{}try{await Hc(Rn)}catch{}const i=new Error("Please verify your email before signing in.");throw i.code="auth/unverified-email",i}try{await vO(ov(_v,"users",r.user.uid),{lastLoginAt:Ac(),updatedAt:Ac()})}catch{}return r}async function a1(t,e,n=""){const s=await gC(Rn,t,e);if(n)try{await _C(s.user,{displayName:n})}catch{}try{await yO(ov(_v,"users",s.user.uid),{uid:s.user.uid,email:t,displayName:n,createdAt:Ac(),updatedAt:Ac()})}catch{}try{await uf(s.user)}catch{}try{await Hc(Rn)}catch{}return s}async function l1(t){return pC(Rn,t)}async function c1(t,e){const n=await J_(Rn,t,e);try{await uf(n.user)}finally{try{await Hc(Rn)}catch{}}}async function bO(){await Hc(Rn)}const TO=()=>Fc(()=>import("./Index-Ch4vQ309.js"),__vite__mapDeps([0,1,2])),IO=()=>Fc(()=>import("./Auth-IshJw7ph.js"),__vite__mapDeps([3,4])),AO=()=>Fc(()=>import("./Calendar-DTmpDlV8.js"),__vite__mapDeps([5,1,6])),SO=()=>Fc(()=>import("./Itinerary-Cyh4olcZ.js"),[]),CO=[{path:"/",component:TO},{path:"/login",component:IO,meta:{guestOnly:!0,hideChrome:!0}},{path:"/calendar",component:AO,meta:{requiresAuth:!0}},{path:"/itinerary",component:SO,meta:{requiresAuth:!0}}],yv=SI({history:iI(),routes:CO});yv.beforeEach(async t=>{const e=Rn.currentUser??await wO();if(t.meta?.requiresAuth&&!e)return{path:"/login",query:{redirect:t.fullPath}};if(t.meta?.guestOnly&&e)return{path:t.query.redirect?.toString()||"/"}});let RO=0;const ba=ja([]);function vv(t){const e=ba.findIndex(n=>n.id===t);if(e!==-1){const n=ba[e];n.timeoutId&&clearTimeout(n.timeoutId),ba.splice(e,1)}}function ea({message:t,type:e="info",duration:n=3500}){const r=new Set(["success","error","warning","info"]).has(e)?e:"info",i=++RO,a=setTimeout(()=>vv(i),n);return ba.push({id:i,message:t,type:r,timeoutId:a}),i}const Ev={show:(t,e)=>ea({message:t,duration:e}),success:(t,e)=>ea({message:t,type:"success",duration:e}),error:(t,e)=>ea({message:t,type:"error",duration:e}),warn:(t,e)=>ea({message:t,type:"warning",duration:e}),info:(t,e)=>ea({message:t,type:"info",duration:e}),dismiss:vv},PO={class:"navbar navbar-expand-lg navbar-touchgrass","aria-label":"Touch Grass main navigation"},OO={class:"container"},kO={class:"collapse navbar-collapse",id:"tgNav"},NO={class:"navbar-nav ms-auto align-items-lg-center gap-lg-2"},DO={class:"nav-item"},xO={class:"nav-item"},VO={key:0,class:"nav-item"},MO={key:1,class:"nav-item dropdown"},LO={class:"nav-link dropdown-toggle d-flex align-items-center gap-2",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},FO={class:"d-inline d-lg-none d-xl-inline"},UO={__name:"Navbar",setup(t){const e=CI(),n=mm(Rn.currentUser);let s;Rm(()=>{s=Y_(Rn,u=>n.value=u)}),Pm(()=>{s&&s()});const r=Fn(()=>n.value?.displayName||n.value?.email||"");function i(){const u=document.getElementById("tgNav");window.bootstrap?.Collapse?new window.bootstrap.Collapse(u,{toggle:!0}):u?.classList.remove("show")}async function a(){await bO(),Ev.success("Signed out"),i(),e.push("/")}function c(){i(),e.push("/profile")}return(u,d)=>(es(),kr("nav",PO,[re("div",OO,[At(pn(sa),{class:"navbar-brand d-flex align-items-center gap-2",to:"/",onClick:i},{default:ta(()=>[...d[0]||(d[0]=[re("svg",{class:"grass-logo",viewBox:"0 0 64 64",role:"img","aria-label":"Touch Grass logo"},[re("rect",{x:"0",y:"44",width:"64",height:"6",fill:"white"}),re("path",{d:"M8 44 q2-10 6-16 q-2 8 2 16 Z",fill:"white"}),re("path",{d:"M16 44 q2-12 8-20 q-3 10 1 20 Z",fill:"white"}),re("path",{d:"M24 44 q3-14 10-24 q-4 12 0 24 Z",fill:"white"}),re("path",{d:"M32 44 q2-12 8-20 q-3 10 0 20 Z",fill:"white"}),re("path",{d:"M40 44 q3-14 10-24 q-4 12 0 24 Z",fill:"white"}),re("path",{d:"M48 44 q2-10 6-16 q-2 8 2 16 Z",fill:"white"})],-1),re("span",null,"Touch Grass",-1)])]),_:1}),d[5]||(d[5]=re("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#tgNav","aria-controls":"tgNav","aria-expanded":"false","aria-label":"Toggle navigation"},[re("span",{class:"navbar-toggler-icon"})],-1)),re("div",kO,[re("ul",NO,[re("li",DO,[At(pn(sa),{class:"nav-link d-flex align-items-center gap-2",to:"/calendar",onClick:i},{default:ta(()=>[...d[1]||(d[1]=[re("i",{class:"bi bi-calendar fs-5"},null,-1),re("span",{class:"d-inline d-lg-none d-xl-inline"},"Calendar",-1)])]),_:1})]),re("li",xO,[At(pn(sa),{class:"nav-link d-flex align-items-center gap-2",to:"/itinerary",onClick:i},{default:ta(()=>[...d[2]||(d[2]=[re("i",{class:"bi bi-signpost-2 fs-5"},null,-1),re("span",{class:"d-inline d-lg-none d-xl-inline"},"Itinerary",-1)])]),_:1})]),n.value?(es(),kr("li",MO,[re("a",LO,[d[4]||(d[4]=re("i",{class:"bi bi-person-circle fs-5"},null,-1)),re("span",FO,kc(r.value),1)]),re("ul",{class:"dropdown-menu dropdown-menu-end"},[re("li",null,[re("button",{class:"dropdown-item",onClick:c},"Profile")]),re("li",null,[re("button",{class:"dropdown-item",onClick:a},"Sign out")])])])):(es(),kr("li",VO,[At(pn(sa),{class:"nav-link d-flex align-items-center gap-2",to:"/login",onClick:i},{default:ta(()=>[...d[3]||(d[3]=[re("i",{class:"bi bi-person-circle fs-5"},null,-1),re("span",{class:"d-inline d-lg-none d-xl-inline"},"Login",-1)])]),_:1})]))])])])]))}},Bf=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},jO={class:"footer-tg border-top pt-5 mt-5"},BO={class:"container"},$O={class:"d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 pb-4 small"},HO={class:"text-secondary"},qO={__name:"Footer",setup(t){const e=new Date().getFullYear();function n(){window.scrollTo({top:0,behavior:"smooth"})}return(s,r)=>(es(),kr("footer",jO,[re("div",BO,[r[1]||(r[1]=re("div",{class:"row gy-5 align-items-start"},[re("div",{class:"col-12 col-lg-6"},[re("div",{class:"d-flex align-items-center gap-2 mb-3"},[re("svg",{class:"grass-logo",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Touch Grass logo"},[re("rect",{x:"0",y:"44",width:"64",height:"6",fill:"#2d5016"}),re("path",{d:"M8 44 q2-10 6-16 q-2 8 2 16 Z",fill:"#2d5016"}),re("path",{d:"M16 44 q2-12 8-20 q-3 10 1 20 Z",fill:"#2d5016"}),re("path",{d:"M24 44 q3-14 10-24 q-4 12 0 24 Z",fill:"#2d5016"}),re("path",{d:"M32 44 q2-12 8-20 q-3 10 0 20 Z",fill:"#2d5016"}),re("path",{d:"M40 44 q3-14 10-24 q-4 12 0 24 Z",fill:"#2d5016"}),re("path",{d:"M48 44 q2-10 6-16 q-2 8 2 16 Z",fill:"#2d5016"})]),re("span",{class:"fw-semibold fs-5"},"Touch Grass")]),re("p",{class:"text-secondary small mb-3"}," Event discovery for the outdoorsy in Singapore — parks, trails, markets, and community fests. "),re("div",{class:"d-flex align-items-center gap-3 mt-3"},[re("a",{class:"btn btn-icon",href:"https://www.instagram.com","aria-label":"Instagram"},[re("i",{class:"bi bi-instagram","aria-hidden":"true"})]),re("a",{class:"btn btn-icon",href:"https://www.tiktok.com","aria-label":"TikTok"},[re("i",{class:"bi bi-tiktok","aria-hidden":"true"})]),re("a",{class:"btn btn-icon",href:"https://www.youtube.com","aria-label":"YouTube"},[re("i",{class:"bi bi-youtube","aria-hidden":"true"})])])]),re("div",{class:"col-12 col-lg-6"},[re("h6",{class:"fw-semibold mb-3"},"Members"),re("ul",{class:"list-unstyled small row row-cols-2 row-cols-sm-3 row-cols-md-3 g-2"},[re("li",null,[re("a",{class:"link-body-emphasis",href:"https://github.com/ewvnn/"},"Ewen")]),re("li",null,[re("a",{class:"link-body-emphasis",href:"#"},"Jia Le")]),re("li",null,[re("a",{class:"link-body-emphasis",href:"#"},"Boone")]),re("li",null,[re("a",{class:"link-body-emphasis",href:"#"},"Xiao Thong")]),re("li",null,[re("a",{class:"link-body-emphasis",href:"#"},"Fazil")]),re("li",null,[re("a",{class:"link-body-emphasis",href:"#"},"Wasil")])])])],-1)),r[2]||(r[2]=re("hr",{class:"my-4 opacity-25"},null,-1)),re("div",$O,[re("span",HO,"© "+kc(pn(e))+" Touch Grass. All rights reserved.",1),re("button",{type:"button",class:"btn btn-link p-0 link-body-emphasis",onClick:n,"aria-label":"Back to top"},[...r[0]||(r[0]=[Qh(" Back to top ",-1),re("i",{class:"bi bi-arrow-up-short","aria-hidden":"true"},null,-1)])])])])]))}},WO=Bf(qO,[["__scopeId","data-v-80a988d9"]]),zO={class:"toast-zone position-fixed start-50 translate-middle-x p-3",style:{"z-index":"1080",top:"1rem","pointer-events":"none"},"aria-live":"polite","aria-atomic":"true"},GO={class:"d-flex align-items-center"},KO={class:"toast-body fw-medium"},QO=["onClick"],XO={__name:"Toaster",setup(t){function e(n){const s={success:"bg-success-subtle text-success-emphasis border border-success-subtle",error:"bg-danger-subtle  text-danger-emphasis  border border-danger-subtle",warning:"bg-warning-subtle text-warning-emphasis border border-warning-subtle",info:"bg-primary-subtle text-primary-emphasis border border-primary-subtle"};return s[n]||s.info}return(n,s)=>(es(),kr("div",zO,[(es(!0),kr(ys,null,Yw(pn(ba),r=>(es(),kr("div",{key:r.id,class:Oc(["toast show shadow-lg rounded-3 mb-2",e(r.type)]),role:"status",style:{"pointer-events":"auto","min-width":"280px","max-width":"min(420px, 92vw)"},"<!--":"","viewport-safe":"","--":""},[s[0]||(s[0]=Qh(" > ",-1)),re("div",GO,[re("div",KO,kc(r.message),1),re("button",{type:"button",class:"btn-close me-2 m-auto","aria-label":"Close",onClick:i=>pn(Ev).dismiss(r.id)},null,8,QO)])],2))),128))]))}},JO=Bf(XO,[["__scopeId","data-v-f7256f92"]]),YO={id:"app"},ZO={__name:"App",setup(t){const e=RI();return(n,s)=>{const r=Qw("router-view");return es(),kr("div",YO,[pn(e).meta?.hideChrome?Kd("",!0):(es(),sh(UO,{key:0})),At(r),pn(e).meta?.hideChrome?Kd("",!0):(es(),sh(WO,{key:1})),At(JO)])}}},e1=Bf(ZO,[["__scopeId","data-v-32899415"]]);_T(e1).use(yv).mount("#app");export{CI as A,RI as B,o1 as C,a1 as D,l1 as E,ys as F,Bf as _,Om as a,re as b,kr as c,Yw as d,es as e,Kd as f,Qh as g,Oc as h,t1 as i,hT as j,n1 as k,At as l,Fn as m,Vh as n,Rm as o,ta as p,Qw as q,mm as r,s1 as s,kc as t,cT as u,cp as v,r1 as w,qh as x,c1 as y,Ev as z};
