/*! For license information please see navigation-bar-b8830c973e6377e6ef9a.js.LICENSE.txt */
(window.webpackJsonp_gp_web_frontend=window.webpackJsonp_gp_web_frontend||[]).push([["navigation-bar"],{"../../node_modules/classnames/index.js":(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var u=o.apply(null,n);u&&t.push(u)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&t.push(s)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},"./src/ts/components/navigation-bar/navigation-bar.ts":(t,e,n)=>{"use strict";n.r(e),n.d(e,{getClientWidth:()=>a,columnsCount:()=>p,hasOverflowed:()=>f,retrieve:()=>d,setup:()=>y,setupWithSeparator:()=>h,init:()=>m});var r=n("../react-components/dist/components/global/header/navigation-bar/navigation-bar.css.json"),o=n("../shared-types/frontend/core/store.ts"),i=n("../utils/dist/bounce/bounce.js"),u=n("../../node_modules/classnames/index.js"),s=n.n(u),c=n("../../node_modules/ts-option/index.js"),l=n("./src/ts/utils/dom.ts");const a=t=>t.documentElement.clientWidth,p=t=>s()({[r.Om]:t>=1&&t<6,[r.Qk]:t>=6&&t<13,[r.Ot]:t>=13}),f=(t,e)=>{const{overflowed:n}=t.reduce(({width:t,overflowed:n},r,o)=>{const i=t+r;return{width:i,overflowed:i>e?n.match({none:()=>(0,c.some)(o),some:t=>(0,c.some)(t)}):n}},{width:0,overflowed:c.none});return n},d=(t,e)=>{const n=t.map(t=>t.getBoundingClientRect().width);return f(n,e).match({none:()=>[],some:e=>t.slice(e)})},y=(t,e)=>{if(!e.length)return;t.removeAttribute("hidden");const n=t.querySelector("ul");for(const t of e)n.appendChild(t);n.classList.add(p(n.querySelectorAll("li").length))},h=(t,e)=>{t.removeAttribute("hidden");const n=t.querySelector("ul");if(e.length){for(const t of e){const[e]=Array.from(n.childNodes||[]);e?n.insertBefore(t,e):n.appendChild(t)}n.classList.add(p(n.querySelectorAll("li").length))}else n.classList.add(p(n.querySelectorAll("li").length))},g=(t,e)=>{const n=(0,i.r)(()=>{if(a(document)<768)return;const e=t.querySelector("ul"),n=Array.from(e.querySelectorAll(":scope > li")),r=n[n.length-1],o=r.getBoundingClientRect().width,i=e.getBoundingClientRect().width-o;n.findIndex(t=>"Separator"===t.textContent.trim())>-1?h(r,d(n.slice(0,n.length-2),i)):y(r,d(n.slice(0,n.length-1),i))},500);return n(),window.addEventListener("resize",n),t.addEventListener("click",t=>{((t,e)=>{const n=t.target;if(!n.matches("."+r.Hc))return;const i=n.textContent.trim(),u=(0,l.oj)(n.parentNode,`.${r.li}:not(.${r.kr})`).length+1,s=n.closest("."+r.rX)?"yes":"no";e.dispatch({type:o.U.NavigationTracking,payload:{events:["event225"],pev2:"Click on Primary Nav header",prop13:`${i}::${u}::${s}`}})})(t,e)}),{resizeListener:n}},m=(t,e)=>{const n=Math.floor(1e4*Math.random());return{listeners:g(t,e),componentId:"navigation-"+n}}},"./src/ts/utils/dom.ts":(t,e,n)=>{"use strict";function r(t,e){const n=[];for(;t=t.previousSibling;)1!=t.nodeType||e&&!t.matches(e)||n.push(t);return n}n.d(e,{oj:()=>r,tq:()=>o,xU:()=>i,is:()=>u,Vq:()=>s});const o=()=>window.matchMedia("screen and (max-width: 767px)").matches,i=()=>document.cookie.replace(/(?:(?:^|.*;\s*)_TO_AB_Testing\s*\=\s*([^;]*).*$)|^.*$/,"$1")||"0";function u(t,e){var n;const r=null!==(n=e.dataset[t])&&void 0!==n?n:"";return r&&e.setAttribute(t,r),e}function s(t,e="",n){var r,o;const i=null!==(o=null===(r=null==t?void 0:t.dataset)||void 0===r?void 0:r[e])&&void 0!==o?o:n;if("string"==typeof i&&i.match(/^({).*(})$|^(\[).*(\])$/))try{return JSON.parse(i)}catch(t){console.error(t)}return i}},"../../node_modules/ts-option/index.js":function(t,e){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(){};e.Option=o;var i=function(t){function n(e){var n=t.call(this)||this;return n.value=e,n}return r(n,t),n.prototype.exists=function(t){return t(this.value)},n.prototype.filter=function(t){return t(this.value)?this:e.none},n.prototype.filterNot=function(t){return t(this.value)?e.none:this},n.prototype.flatMap=function(t){return t(this.value)},n.prototype.fold=function(){var t=this;return function(e){return e(t.value)}},n.prototype.forAll=function(t){return t(this.value)},n.prototype.forComprehension=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=this,r=0;r<t.length-1;++r)n=n.flatMap(t[r]);return n.map(t[t.length-1])},n.prototype.forEach=function(t){return t(this.value)},Object.defineProperty(n.prototype,"get",{get:function(){return this.value},enumerable:!0,configurable:!0}),n.prototype.getOrElse=function(){return this.value},n.prototype.getOrElseValue=function(){return this.value},Object.defineProperty(n.prototype,"isDefined",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isEmpty",{get:function(){return!1},enumerable:!0,configurable:!0}),n.prototype.map=function(t){return s(t(this.value))},n.prototype.match=function(t){return t.some(this.value)},Object.defineProperty(n.prototype,"nonEmpty",{get:function(){return!0},enumerable:!0,configurable:!0}),n.prototype.orElse=function(){return this},n.prototype.orElseValue=function(){return this},Object.defineProperty(n.prototype,"orNull",{get:function(){return this.value},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"orUndefined",{get:function(){return this.value},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"toArray",{get:function(){return[this.value]},enumerable:!0,configurable:!0}),n.prototype.toString=function(){return"Some("+this.value+")"},n}(o);e.Some=i;var u=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.exists=function(){return!1},n.prototype.filter=function(){return this},n.prototype.filterNot=function(){return this},n.prototype.flatMap=function(){return e.none},n.prototype.fold=function(t){return function(){return t()}},n.prototype.forAll=function(){return!0},n.prototype.forComprehension=function(){return e.none},n.prototype.forEach=function(){},Object.defineProperty(n.prototype,"get",{get:function(){throw new Error("No such element.")},enumerable:!0,configurable:!0}),n.prototype.getOrElse=function(t){return t()},n.prototype.getOrElseValue=function(t){return t},Object.defineProperty(n.prototype,"isDefined",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isEmpty",{get:function(){return!0},enumerable:!0,configurable:!0}),n.prototype.map=function(){return e.none},n.prototype.match=function(t){return t.none()},Object.defineProperty(n.prototype,"nonEmpty",{get:function(){return!1},enumerable:!0,configurable:!0}),n.prototype.orElse=function(t){return t()},n.prototype.orElseValue=function(t){return t},Object.defineProperty(n.prototype,"orNull",{get:function(){return null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"orUndefined",{get:function(){},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"toArray",{get:function(){return[]},enumerable:!0,configurable:!0}),n.prototype.toString=function(){return"None"},n}(o);function s(t){return new i(t)}e.None=u,e.some=s,e.none=new u,e.option=function(t){return null==t?e.none:s(t)}},"../react-components/dist/components/global/header/navigation-bar/navigation-bar.css.json":t=>{"use strict";t.exports=JSON.parse('{"li":"_li_93rt9_22","rX":"_hasSubNav_93rt9_23","Hc":"_navItem_93rt9_28","kr":"_separator_93rt9_80","Om":"_subNavCol1_93rt9_161","Qk":"_subNavCol2_93rt9_165","Ot":"_subNavCol3_93rt9_169"}')},"../utils/dist/bounce/bounce.js":(t,e)=>{"use strict";e.r=void 0,e.r=(t,e)=>{let n=null;return()=>{n&&clearTimeout(n),n=setTimeout(t,e)}}}}]);