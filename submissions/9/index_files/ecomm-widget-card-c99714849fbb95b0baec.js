(window.webpackJsonp_gp_web_frontend=window.webpackJsonp_gp_web_frontend||[]).push([["ecomm-widget-card"],{"./src/ts/components/ecomm-widget/ecomm-widget-card.ts":(e,t,n)=>{"use strict";n.r(t),n.d(t,{init:()=>r});var s=n("./src/ts/utils/inview.ts"),o=n("../shared-types/frontend/core/store.ts");const i=e=>{const t=document.querySelector(".js-ecom_widget");if(!t)return{};const n=t.closest(".zone"),i=document.querySelectorAll(".tile");return i.length<1||(i[Math.min(2,i.length-1)].insertAdjacentElement("afterend",t.closest(".tile")),t.classList.contains("js-moved")||(t.classList.add("js-moved"),n.classList.add("xs-hide")),(0,s.W0)(t).then(()=>{e.dispatch({type:o.U.TrackEvent,payload:{pev2:"ecommerce widget view",events:["event197"]}})})),{}},r=(...[,e])=>{const t=Math.floor(1e4*Math.random());return{listeners:i(e),componentId:"ecomm-widget-card-"+t}}},"./src/ts/utils/inview.ts":(e,t,n)=>{"use strict";n.d(t,{oe:()=>s,oO:()=>o,W0:()=>i});const s=e=>{if(!e)return!1;const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,o=t.top<=n&&t.top+t.height>=0,i=t.left<=s&&t.left+t.width>=0;return o&&i};function o({element:e,observerOptions:t={},isInViewportCallback:n,isNotInViewportCallback:s}){new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&n&&(s||t.unobserve(e.target),n(e)),!e.isIntersecting&&s&&(n||t.unobserve(e.target),s(e))})},t).observe(e)}function i(e,t){return e?new Promise(n=>{o({element:e,observerOptions:t,isInViewportCallback:n})}):Promise.reject()}}}]);