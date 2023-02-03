import"./modulepreload-polyfill-ec808ebb.js";import{r as c,d as M,e as _,a as r,f as p,S as R,g as z,u as A,o as D,j as x,h as k,F as G,c as O}from"./CustomElement-46ff49ad.js";function F(e,n){if(e!=null){if(typeof e=="function"){e(n);return}try{e.current=n}catch{throw new Error(`Cannot assign value '${n}' to ref '${e}'`)}}}function H(...e){return n=>{e.forEach(t=>{F(t,n)})}}function U(...e){return c.useMemo(()=>H(...e),e)}var[Y,$]=M({strict:!1,name:"ButtonGroupContext"});function L(e){const[n,t]=c.useState(!e);return{ref:c.useCallback(s=>{s&&t(s.tagName==="BUTTON")},[]),type:n?"button":void 0}}function g(e){const{children:n,className:t,...a}=e,o=c.isValidElement(n)?c.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,s=_("chakra-button__icon",t);return r(p.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s,children:o})}g.displayName="ButtonIcon";function h(e){const{label:n,placement:t,spacing:a="0.5rem",children:o=r(R,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:l,...d}=e,m=_("chakra-button__spinner",s),u=t==="start"?"marginEnd":"marginStart",i=c.useMemo(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[u]:n?a:0,fontSize:"1em",lineHeight:"normal",...l}),[l,n,u,a]);return r(p.div,{className:m,...d,__css:i,children:o})}h.displayName="ButtonSpinner";var C=z((e,n)=>{const t=$(),a=A("Button",{...t,...e}),{isDisabled:o=t?.isDisabled,isLoading:s,isActive:l,children:d,leftIcon:m,rightIcon:u,loadingText:i,iconSpacing:f="0.5rem",type:y,spinner:b,spinnerPlacement:S="start",className:I,as:B,...E}=D(e),P=c.useMemo(()=>{const w={...a?._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:w}}},[a,t]),{ref:T,type:j}=L(B),N={rightIcon:u,leftIcon:m,iconSpacing:f,children:d};return x(p.button,{ref:U(n,T),as:B,type:y??j,"data-active":k(l),"data-loading":k(s),__css:P,className:_("chakra-button",I),...E,disabled:o||s,children:[s&&S==="start"&&r(h,{className:"chakra-button__spinner--start",label:i,placement:"start",spacing:f,children:b}),s?i||r(p.span,{opacity:0,children:r(v,{...N})}):r(v,{...N}),s&&S==="end"&&r(h,{className:"chakra-button__spinner--end",label:i,placement:"end",spacing:f,children:b})]})});C.displayName="Button";function v(e){const{leftIcon:n,rightIcon:t,children:a,iconSpacing:o}=e;return x(G,{children:[n&&r(g,{marginEnd:o,children:n}),a,t&&r(g,{marginStart:o,children:t})]})}const V={},q="",J=Object.freeze(Object.defineProperty({__proto__:null,packages:V,styles:q},Symbol.toStringTag,{value:"Module"}));function K(){return r(C,{children:"Hi"})}const Q=O({component:K,...J});customElements.define("chakra-app",Q);
