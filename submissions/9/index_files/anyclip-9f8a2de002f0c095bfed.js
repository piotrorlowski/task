(window.webpackJsonp_gp_web_frontend=window.webpackJsonp_gp_web_frontend||[]).push([["anyclip"],{"./src/ts/components/anyclip/anyclip.ts":(t,e,n)=>{"use strict";n.r(e),n.d(e,{getCMPState:()=>c,anyclipComponent:()=>a,init:()=>l});var i=n("./src/ts/utils/dom.ts"),o=n("./src/ts/utils/inview.ts");const r={"New York":"001w000001Y8Vax_1455",London:"001w000001Y8Vax_1456",Madrid:"001w000001Y8Vax_6423",Lisboa:"001w000001Y8Vax_6422",Porto:"001w000001Y8Vax_6422",Worldwide:"001w000001Y8Vax_7252","United States":"001w000001Y8Vax_1455"};let s={tcString:""};const c=()=>s,a=t=>{const e={shouldInitialise:()=>!(!window.digitalData||window.abTestShortVideo)&&document.querySelectorAll('script[src^="https://player.anyclip.com"]').length<=0,widgetConfig:()=>{const{pageType:e}=t.dataset;if(!e)return;let n;const{digitalData:{page:{pageInfo:{city:i}}}}=window;switch(e){case"blog_post":return n=r[i],{pubName:"timeoutcomnewyork",widgetName:n};default:return{pubName:"timeoutcomnewyork",widgetName:n}}},createContainer:()=>{const t=document.querySelectorAll("#content p"),[,e]=t[Symbol.iterator]();if(!e)return;const n=document.createElement("div");return n.classList.add("anyclip-container"),e.insertAdjacentElement("afterend",n),n},createAnyclipScript:(t,e)=>{const n=document.createElement("script");return n.src="https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre.js",n.setAttribute("pubname",t),n.setAttribute("widgetname",e),n},setObservers:()=>{(0,i.tq)()&&(0,o.oO)({element:document.querySelector('[data-component="sticky-header"]'),observerOptions:{root:null,rootMargin:"0px",threshold:0},isInViewportCallback:()=>{const[t]=document.getElementsByClassName("ac-floated-player");t&&t.setAttribute("style","top: 152px !important")},isNotInViewportCallback:()=>{const[t]=document.getElementsByClassName("ac-floated-player");t&&t.removeAttribute("style")}})},initialise:()=>{if(!e.shouldInitialise())return;const t=e.createContainer();if(!t)return;e.setObservers();const{pubName:n,widgetName:i}=e.widgetConfig();n&&i&&window.gpStore.subscribe(()=>{const o=window.gpStore.getState();if(o.cmp&&o.cmp.tcString!==c().tcString&&["useractioncomplete","tcloaded"].includes(o.cmp.eventStatus)){s=o.cmp;const r=e.createAnyclipScript(n,i);t.appendChild(r)}})},bindEvents:()=>(e.initialise(),{initialise:e.initialise})};return e},l=t=>{const e=Math.floor(1e4*Math.random());return{listeners:a(t).bindEvents(),componentId:"anyclip-"+e}}},"./src/ts/utils/dom.ts":(t,e,n)=>{"use strict";function i(t,e){const n=[];for(;t=t.previousSibling;)1!=t.nodeType||e&&!t.matches(e)||n.push(t);return n}n.d(e,{oj:()=>i,tq:()=>o,xU:()=>r,is:()=>s,Vq:()=>c});const o=()=>window.matchMedia("screen and (max-width: 767px)").matches,r=()=>document.cookie.replace(/(?:(?:^|.*;\s*)_TO_AB_Testing\s*\=\s*([^;]*).*$)|^.*$/,"$1")||"0";function s(t,e){var n;const i=null!==(n=e.dataset[t])&&void 0!==n?n:"";return i&&e.setAttribute(t,i),e}function c(t,e="",n){var i,o;const r=null!==(o=null===(i=null==t?void 0:t.dataset)||void 0===i?void 0:i[e])&&void 0!==o?o:n;if("string"==typeof r&&r.match(/^({).*(})$|^(\[).*(\])$/))try{return JSON.parse(r)}catch(t){console.error(t)}return r}},"./src/ts/utils/inview.ts":(t,e,n)=>{"use strict";n.d(e,{oe:()=>i,oO:()=>o,W0:()=>r});const i=t=>{if(!t)return!1;const e=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,o=e.top<=n&&e.top+e.height>=0,r=e.left<=i&&e.left+e.width>=0;return o&&r};function o({element:t,observerOptions:e={},isInViewportCallback:n,isNotInViewportCallback:i}){new IntersectionObserver((t,e)=>{t.forEach(t=>{t.isIntersecting&&n&&(i||e.unobserve(t.target),n(t)),!t.isIntersecting&&i&&(n||e.unobserve(t.target),i(t))})},e).observe(t)}function r(t,e){return t?new Promise(n=>{o({element:t,observerOptions:e,isInViewportCallback:n})}):Promise.reject()}}}]);