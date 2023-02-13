import{r as o,B as z,d as p,b as i,h as d,a1 as F,i as N,k as C,o as T,j,a2 as U,N as P,X,L as q,a3 as J}from"./ObservableBox-e83865f8.js";function K(n){return o.Children.toArray(n).filter(e=>o.isValidElement(e))}var[oe,Q]=z({strict:!1,name:"ButtonGroupContext"});function Y(n){const[e,t]=o.useState(!n);return{ref:o.useCallback(r=>{r&&t(r.tagName==="BUTTON")},[]),type:e?"button":void 0}}function E(n){const{children:e,className:t,...a}=n,s=o.isValidElement(e)?o.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,r=p("chakra-button__icon",t);return i(d.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:r,children:s})}E.displayName="ButtonIcon";function W(n){const{label:e,placement:t,spacing:a="0.5rem",children:s=i(F,{color:"currentColor",width:"1em",height:"1em"}),className:r,__css:c,..._}=n,m=p("chakra-button__spinner",r),l=t==="start"?"marginEnd":"marginStart",u=o.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[l]:e?a:0,fontSize:"1em",lineHeight:"normal",...c}),[c,e,l,a]);return i(d.div,{className:m,..._,__css:u,children:s})}W.displayName="ButtonSpinner";var Z=N((n,e)=>{const t=Q(),a=C("Button",{...t,...n}),{isDisabled:s=t?.isDisabled,isLoading:r,isActive:c,children:_,leftIcon:m,rightIcon:l,loadingText:u,iconSpacing:g="0.5rem",type:b,spinner:f,spinnerPlacement:x="start",className:S,as:h,...k}=T(n),I=o.useMemo(()=>{const B={...a?._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:B}}},[a,t]),{ref:w,type:v}=Y(h),y={rightIcon:l,leftIcon:m,iconSpacing:g,children:_};return j(d.button,{ref:U(e,w),as:h,type:b??v,"data-active":P(c),"data-loading":P(r),__css:I,className:p("chakra-button",S),...k,disabled:s||r,children:[r&&x==="start"&&i(W,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:g,children:f}),r?u||i(d.span,{opacity:0,children:i(H,{...y})}):i(H,{...y}),r&&x==="end"&&i(W,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:g,children:f})]})});Z.displayName="Button";function H(n){const{leftIcon:e,rightIcon:t,children:a,iconSpacing:s}=n;return j(X,{children:[e&&i(E,{marginEnd:s,children:e}),a,t&&i(E,{marginStart:s,children:t})]})}function M(n,e){return Array.isArray(n)?n.map(t=>t===null?null:e(t)):q(n)?Object.keys(n).reduce((t,a)=>(t[a]=e(n[a]),t),{}):n!=null?e(n):null}var $=N(function(e,t){const a=C("Text",e),{className:s,align:r,decoration:c,casing:_,...m}=T(e),l=J({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i(d.p,{ref:t,className:p("chakra-text",e.className),...l,...m,__css:a})});$.displayName="Text";var G=n=>i(d.div,{className:"chakra-stack__item",...n,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...n.__css}});G.displayName="StackItem";var D="& > *:not(style) ~ *:not(style)";function ee(n){const{spacing:e,direction:t}=n,a={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return{flexDirection:t,[D]:M(t,s=>a[s])}}function te(n){const{spacing:e,direction:t}=n,a={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":M(t,s=>a[s])}}var ne=N((n,e)=>{const{isInline:t,direction:a,align:s,justify:r,spacing:c="0.5rem",wrap:_,children:m,divider:l,className:u,shouldWrapChildren:g,...b}=n,f=t?"row":a??"column",x=o.useMemo(()=>ee({direction:f,spacing:c}),[f,c]),S=o.useMemo(()=>te({spacing:c,direction:f}),[c,f]),h=!!l,k=!g&&!h,I=o.useMemo(()=>{const v=K(m);return k?v:v.map((y,B)=>{const A=typeof y.key<"u"?y.key:B,O=B+1===v.length,L=g?i(G,{children:y},A):y;if(!h)return L;const R=o.cloneElement(l,{__css:S}),V=O?null:R;return j(o.Fragment,{children:[L,V]},A)})},[l,S,h,k,g,m]),w=p("chakra-stack",u);return i(d.div,{ref:e,display:"flex",alignItems:s,justifyContent:r,flexDirection:x.flexDirection,flexWrap:_,className:w,__css:h?{}:{[D]:x[D]},...b,children:I})});ne.displayName="Stack";var ae=N(function(e,t){const a=C("Heading",e),{className:s,...r}=T(e);return i(d.h2,{ref:t,className:p("chakra-heading",e.className),...r,__css:a})});ae.displayName="Heading";var se=N(function(e,t){const{className:a,centerContent:s,...r}=T(e),c=C("Container",e);return i(d.div,{ref:t,className:p("chakra-container",a),...r,__css:{...c,...s&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});se.displayName="Container";export{Z as B,se as C,ae as H,ne as S,$ as T};
