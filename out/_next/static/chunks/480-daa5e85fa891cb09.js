"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{1036:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},3584:function(e,n,t){t.d(n,{B:function(){return i}});var r=t(7425),u=t(9656),o=t(7309),l=t(611);function i(e){let n=e+"CollectionProvider",[t,i]=(0,u.b)(n),[c,a]=t(n,{collectionRef:{current:null},itemMap:new Map}),f=e+"CollectionSlot",s=r.forwardRef((e,n)=>{let{scope:t,children:u}=e,i=a(f,t),c=(0,o.e)(n,i.collectionRef);return r.createElement(l.g7,{ref:c},u)}),d=e+"CollectionItemSlot",m="data-radix-collection-item",p=r.forwardRef((e,n)=>{let{scope:t,children:u,...i}=e,c=r.useRef(null),f=(0,o.e)(n,c),s=a(d,t);return r.useEffect(()=>(s.itemMap.set(c,{ref:c,...i}),()=>void s.itemMap.delete(c))),r.createElement(l.g7,{[m]:"",ref:f},u)});return[{Provider:e=>{let{scope:n,children:t}=e,u=r.useRef(null),o=r.useRef(new Map).current;return r.createElement(c,{scope:n,itemMap:o,collectionRef:u},t)},Slot:s,ItemSlot:p},function(n){let t=a(e+"CollectionConsumer",n),u=r.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let n=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(t.itemMap.values()),u=r.sort((e,t)=>n.indexOf(e.ref.current)-n.indexOf(t.ref.current));return u},[t.collectionRef,t.itemMap]);return u},i]}},9656:function(e,n,t){t.d(n,{b:function(){return o},k:function(){return u}});var r=t(7425);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),l=t.length;function i(n){let{scope:t,children:u,...i}=n,c=(null==t?void 0:t[e][l])||o,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(c.Provider,{value:a},u)}return t=[...t,u],i.displayName=n+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][l])||o,a=(0,r.useContext)(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e),o=u[`__scope${r}`];return{...n,...o}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},7517:function(e,n,t){t.d(n,{gm:function(){return o}});var r=t(7425);let u=(0,r.createContext)(void 0);function o(e){let n=(0,r.useContext)(u);return e||n||"ltr"}},9389:function(e,n,t){t.d(n,{M:function(){return c}});var r,u=t(7425),o=t(9544);let l=(r||(r=t.t(u,2)))["useId".toString()]||(()=>void 0),i=0;function c(e){let[n,t]=u.useState(l());return(0,o.b)(()=>{e||t(e=>null!=e?e:String(i++))},[e]),e||(n?`radix-${n}`:"")}},7466:function(e,n,t){t.d(n,{z:function(){return i}});var r=t(7425),u=t(5413),o=t(7309),l=t(9544);let i=e=>{let{present:n,children:t}=e,i=function(e){var n;let[t,o]=(0,r.useState)(),i=(0,r.useRef)({}),a=(0,r.useRef)(e),f=(0,r.useRef)("none"),s=e?"mounted":"unmounted",[d,m]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},s));return(0,r.useEffect)(()=>{let e=c(i.current);f.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let n=i.current,t=a.current,r=t!==e;if(r){let r=f.current,u=c(n);e?m("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?m("UNMOUNT"):t&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),a.current=e}},[e,m]),(0,l.b)(()=>{if(t){let e=e=>{let n=c(i.current),r=n.includes(e.animationName);e.target===t&&r&&(0,u.flushSync)(()=>m("ANIMATION_END"))},n=e=>{e.target===t&&(f.current=c(i.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}m("ANIMATION_END")},[t,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(n),a="function"==typeof t?t({present:i.isPresent}):r.Children.only(t),f=(0,o.e)(i.ref,a.ref),s="function"==typeof t;return s||i.isPresent?(0,r.cloneElement)(a,{ref:f}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},9053:function(e,n,t){t.d(n,{WV:function(){return i},jH:function(){return c}});var r=t(9678),u=t(7425),o=t(5413),l=t(611);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let Node=(0,u.forwardRef)((e,t)=>{let{asChild:o,...i}=e,c=o?l.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,r.Z)({},i,{ref:t}))});return Node.displayName=`Primitive.${n}`,{...e,[n]:Node}},{});function c(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},4343:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(7425);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},9579:function(e,n,t){t.d(n,{T:function(){return o}});var r=t(7425),u=t(4343);function o({prop:e,defaultProp:n,onChange:t=()=>{}}){let[o,l]=function({defaultProp:e,onChange:n}){let t=(0,r.useState)(e),[o]=t,l=(0,r.useRef)(o),i=(0,u.W)(n);return(0,r.useEffect)(()=>{l.current!==o&&(i(o),l.current=o)},[o,l,i]),t}({defaultProp:n,onChange:t}),i=void 0!==e,c=i?e:o,a=(0,u.W)(t),f=(0,r.useCallback)(n=>{if(i){let t="function"==typeof n?n(e):n;t!==e&&a(t)}else l(n)},[i,e,l,a]);return[c,f]}},9544:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(7425);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);