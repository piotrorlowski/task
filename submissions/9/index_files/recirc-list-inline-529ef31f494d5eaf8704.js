(window.webpackJsonp_gp_web_frontend=window.webpackJsonp_gp_web_frontend||[]).push([["recirc-list-inline"],{"./src/ts/components/recirc/recirc-list-inline.ts":(e,t,n)=>{"use strict";n.r(t),n.d(t,{RecircListInline:()=>g,init:()=>p});var i=n("../shared-types/frontend/core/store.ts"),r=n("../shared-types/frontend/utils/discover.ts"),s=n("./src/ts/utils/discover.ts");var o=n("./src/ts/utils/recirc.ts"),c=n("./src/ts/utils/request.ts");const l={},a=({data:e,size:t,storageName:n,resolve:i})=>{const r=(0,o.G4)(n),s=e.splice(0,t+r.length);i(function(e){const t=[...e];for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}((0,o.mO)(t,(0,o.G4)(n),s)))},d=e=>{e.listeners.forEach(t=>t(e.data)),e.listeners=[]},u=({size:e=4,storageName:t="",uid:n="",request:i={url:"",headers:{}}})=>{const r={...i},s=r.url.replace(/(size=)\d+/,"size=20");return r.url=s,(0,o.TG)(t,n),new Promise((n,i)=>{var o,u,m;const g=null!==(o=l[s])&&void 0!==o&&o;g||(l[s]={isReady:!1,data:[],listeners:[i=>a({data:i,size:e,storageName:t,resolve:n})]},(0,c.A_)(r).then(({body:e})=>{l[s].isReady=!0,l[s].data=e,d(l[s])}).catch(i));const p=null!==(m=null===(u=null==l?void 0:l[s])||void 0===u?void 0:u.isReady)&&void 0!==m&&m;g&&!p&&l[s].listeners.push(i=>a({data:i,size:e,storageName:t,resolve:n})),p&&(l[s].listeners.push(i=>a({data:i,size:e,storageName:t,resolve:n})),d(l[s]))})};var m=n("./src/ts/utils/inview.ts");const g=()=>{const e={isTrackingLoaded:!1,buildTemplate:(e,t,n)=>{const i=e.querySelector("template"),r=e.querySelector(".js_recirc_list_items");i&&r&&r.insertAdjacentHTML("beforeend",(0,s.Ec)({data:t,template:i.content,trackingUID:`recirc_inline_recommended_4::${n+1}::`,aspectRatio:"16-9"}))},generateTemplate:(t,n)=>{if(!n.length)return;const r=document.querySelectorAll(".inline-clone[data-component=recirc-list-inline]");if(!r.length)return;let s=0;r.forEach((r,o)=>{if(!r.classList.contains("recirc-ready")){const c=4*s,l=4*(s+1),a=n.slice(c,l);if(a.length&&4==a.length){e.buildTemplate(r,a,o),r.querySelector(".js_recirc_content").classList.remove("hide");const n="recirculation - [label]".replace(/\[label\]/g,r.querySelector(".js_heading").textContent.toLowerCase());(0,m.W0)(r).then(()=>{t.dispatch({type:i.U.RecircListInlineInview,payload:{events:["event229"],pev2:"recircinview_inline_recommended_4::"+(o+1),timestamp:Date.now()}}),t.dispatch({type:i.U.DataLayerPush,payload:{action:"zone - recirc-list-inline",label:n,event:"in-view",category:"GP Impression"}})}).catch(e=>{console.error(e)}),s++}}})},getPositionCards:()=>{const e=[...document.querySelectorAll(".zoneItems >.tile")].filter(e=>null===e.querySelector(".js-ecom_widget")),t=e.length-5;let n=0;return e.reduce((e,i,r)=>(r>=9&&r<=t&&(9===r||29===n?(e.push(i),n=0):n++),e),[])},positionElements:t=>{const{rootElement:n}=t;n&&e.getPositionCards().forEach((e,t)=>{const i=e.nextElementSibling;if(!i||i&&!i.classList.contains("inline-clone")){const i=n.cloneNode(!0);i.classList.add("inline-clone","inline-clone-"+(t+1)),e.insertAdjacentElement("afterend",i),e.classList.add("list-card-recirc-inline")}})},render:(t,n,r)=>{if(r.length&&!(r.length<2))return e.positionElements(t),e.generateTemplate(n,r),document.querySelectorAll(".inline-clone[data-module=recirc_list_2]").forEach(e=>{e.classList.add("recirc-ready")}),e.isTrackingLoaded||(n.dispatch({type:i.U.RecircListInlineLoaded,payload:{events:["event229"],pev2:"recircloaded_inline_recommended_4"}}),e.isTrackingLoaded=!0),{}},getData:async(t,n)=>{var i;try{const o="Content-Page-"+(null!==(i=t.rootElement.dataset.hostUid)&&void 0!==i?i:""),c=e.getPositionCards().filter(e=>!e.classList.contains("list-card-recirc-inline")).length;if(0===c)return Promise.reject("Recirc inline: list cards not matching requirements");const l=4*c,a=await u({size:l,storageName:"to_recirc_visited_history",uid:o,request:(0,s.fg)({uid:o,size:l,filters:[r.v.ORContentTypePage,r.v.ANDCommercialFalse],sorters:[r.R.PublishedAtDesc]})});return e.render(t,n,a),a}catch(e){console.error(e)}},bindEvents:(t,n)=>{if(!1===window._TO.shouldLoadRecirc)return{};const i=(e=>({rootElement:e,template:e.querySelector("template"),content:e.querySelector(".js_recirc_content"),wrap:e.querySelector(".js_recirc_list_items"),heading:void 0}))(t);return e.getData(i,n),{}}};return e},p=(e,t)=>{const n=Math.floor(1e4*Math.random());return{listeners:g().bindEvents(e,t),componentId:"recirc-list-inline-"+n}}},"./src/ts/config/config.ts":(e,t,n)=>{"use strict";n.d(t,{p:()=>s,u:()=>o});var i=n("./src/ts/utils/config-utils.ts");let r={};const s=()=>{const e=(0,i.P)(),t=e.site||"uk-london",[n,s]=t.split("-"),o=e.locale||"en-GB",c=e.currency_symbol||"£",l=e.current_commit||null,a=e.graffiti||null,d=e.discover||null,u=e.auth||null,m=e.pageUID||null;return r={...r,site:t,city:s,country:n,locale:o,currencySymbol:c,currentCommit:l,graffiti:a,discover:d,auth:u,pageUid:m},r},o=e=>{var t;return null!==(t=r[e])&&void 0!==t?t:null}},"./src/ts/utils/config-utils.ts":(e,t,n)=>{"use strict";n.d(t,{P:()=>i,R:()=>r});const i=()=>{const e={};return document.querySelectorAll("meta").forEach(t=>{const n=t.name?t.name:t.getAttribute("property")||!1;n&&(e[n]=t.content?t.content:t.dataset)}),e},r=(e=document)=>e.querySelector("body").dataset.pageType},"./src/ts/utils/inview.ts":(e,t,n)=>{"use strict";n.d(t,{oe:()=>i,oO:()=>r,W0:()=>s});const i=e=>{if(!e)return!1;const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,r=t.top<=n&&t.top+t.height>=0,s=t.left<=i&&t.left+t.width>=0;return r&&s};function r({element:e,observerOptions:t={},isInViewportCallback:n,isNotInViewportCallback:i}){new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&n&&(i||t.unobserve(e.target),n(e)),!e.isIntersecting&&i&&(n||t.unobserve(e.target),i(e))})},t).observe(e)}function s(e,t){return e?new Promise(n=>{r({element:e,observerOptions:t,isInViewportCallback:n})}):Promise.reject()}},"./src/ts/utils/recirc.ts":(e,t,n)=>{"use strict";n.d(t,{G4:()=>i,TG:()=>r,mO:()=>s});const i=(e="")=>window.sessionStorage&&window.sessionStorage.getItem(e)&&JSON.parse(window.sessionStorage.getItem(e))||[],r=(e="",t="")=>{if(!window.sessionStorage)return;const n=i(e);return n.includes(t)||(n.push(t),sessionStorage.setItem(e,JSON.stringify(n))),t},s=(e=0,t=[],n=[],i)=>{const r=n.filter(e=>!t.includes(e.uid)),s=i?i(r,e):r;return s.length>e?s.slice(0,e):s}},"./src/ts/utils/responsive-image.ts":(e,t,n)=>{"use strict";var i;n.d(t,{J:()=>s}),function(e){e["4-3"]="auto",e["16-9"]="auto"}(i||(i={}));const r={"4-3":[[380,285],[750,562],[1024,768],[1372,1029]],"16-9":[[400,225],[750,422],[1024,576],[1372,772]]},s=({pattern:e="{width}/{height}",aspectRatioKey:t="4-3",title:n="",alt:s="",imageClass:o=""})=>{const c=((e="{width}/{height}",t="4-3")=>r[t].map(t=>`${e.replace("{width}",t[0].toString()).replace("{height}",t[1].toString())} ${t[0]}w`).join(","))(e,t),[,[l,a]]=r[t];return`<img\n        src="${e.replace("{width}",""+l).replace("{height}",""+a)}"\n        srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n        data-sizes="${i[t]}"\n        data-srcset="${c}"\n        class="lazyload ${o} aspect-ratio-${t}"\n        title="${n}"\n        alt="${s}"\n    />`}}}]);