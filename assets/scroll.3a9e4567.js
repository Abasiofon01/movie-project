import{c as f}from"./index.6eb63ca5.js";import{k as u,l as w}from"./QBtn.3bf1f636.js";const v={dark:{type:Boolean,default:null}};function y(o,t){return f(()=>o.dark===null?t.dark.isActive:o.dark)}const m=[null,document,document.body,document.scrollingElement,document.documentElement];function b(o,t){let n=w(t);if(n===void 0){if(o==null)return window;n=o.closest(".scroll,.scroll-y,.overflow-auto")}return m.includes(n)?window:n}function p(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function S(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}function a(o,t,n=0){const e=arguments[3]===void 0?performance.now():arguments[3],l=p(o);if(n<=0){l!==t&&r(o,t);return}requestAnimationFrame(c=>{const s=c-e,d=l+(t-l)/Math.max(s,n)*s;r(o,d),d!==t&&a(o,t,n-s,c)})}function r(o,t){if(o===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}o.scrollTop=t}function E(o,t,n){if(n){a(o,t,n);return}r(o,t)}let i;function x(){if(i!==void 0)return i;const o=document.createElement("p"),t=document.createElement("div");u(o,{width:"100%",height:"200px"}),u(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const n=o.offsetWidth;t.style.overflow="scroll";let e=o.offsetWidth;return n===e&&(e=t.clientWidth),t.remove(),i=n-e,i}function L(o,t=!0){return!o||o.nodeType!==Node.ELEMENT_NODE?!1:t?o.scrollHeight>o.clientHeight&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-y"])):o.scrollWidth>o.clientWidth&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-x"]))}export{y as a,p as b,b as c,x as d,S as g,L as h,E as s,v as u};
