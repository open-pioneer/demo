import"./modulepreload-polyfill-ec808ebb.js";import{u as Mt,b as Bt,r as l,d as At,e as n,A as ct,m as Fe,f as R,w as Te,T as et,g as Ht,h as Le,i as le,k as S,l as he,o as ie,n as m,p as X,q as E,s as ae,t as T,v as Ue,x as Lt,y as qt,z as dt,B as zt,C as $t,D as jt,E as Kt,F as Vt,G as ve,H as ce,I as Gt,M as Wt,J as ut,K as Ut,L as Xt,N as Be,O as Yt,P as Jt,Q as pt,R as tt,j as v,S as ft,c as Qt,U as ht,V as Zt,W as eo,X as to,Y as oo,Z as no,_ as me,$ as ro,a0 as so,a1 as ao,a2 as lo,a3 as io,a as co}from"./ObservableBox-4be0abba.js";import{C as uo,H as vt,T as po,S as mt,B}from"./chunk-SRMZVY4F-38eb6a5d.js";function fo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var ho=fo();function vo(e){const{theme:t}=Mt(),o=Bt();return l.useMemo(()=>At(t.direction,{...o,...e}),[e,t.direction,o])}var mo={enter:({transition:e,transitionEnd:t,delay:o}={})=>{var r;return{opacity:1,transition:(r=e?.enter)!=null?r:Te.enter(et.enter,o),transitionEnd:t?.enter}},exit:({transition:e,transitionEnd:t,delay:o}={})=>{var r;return{opacity:0,transition:(r=e?.exit)!=null?r:Te.exit(et.exit,o),transitionEnd:t?.exit}}},yt={initial:"exit",animate:"enter",exit:"exit",variants:mo},yo=l.forwardRef(function(t,o){const{unmountOnExit:r,in:s,className:a,transition:i,transitionEnd:p,delay:c,...d}=t,u=s||r?"enter":"exit",h=r?s&&r:!0,b={transition:i,transitionEnd:p,delay:c};return n(ct,{custom:b,children:h&&n(Fe.div,{ref:o,className:R("chakra-fade",a),custom:b,...yt,animate:u,...d})})});yo.displayName="Fade";var ot={exit:{duration:.15,ease:Ht.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},bo={exit:({direction:e,transition:t,transitionEnd:o,delay:r})=>{var s;const{exit:a}=Le({direction:e});return{...a,transition:(s=t?.exit)!=null?s:Te.exit(ot.exit,r),transitionEnd:o?.exit}},enter:({direction:e,transitionEnd:t,transition:o,delay:r})=>{var s;const{enter:a}=Le({direction:e});return{...a,transition:(s=o?.enter)!=null?s:Te.enter(ot.enter,r),transitionEnd:t?.enter}}},bt=l.forwardRef(function(t,o){const{direction:r="right",style:s,unmountOnExit:a,in:i,className:p,transition:c,transitionEnd:d,delay:u,motionProps:h,...b}=t,g=Le({direction:r}),F=Object.assign({position:"fixed"},g.position,s),x=a?i&&a:!0,f=i||a?"enter":"exit",N={transitionEnd:d,transition:c,direction:r,delay:u};return n(ct,{custom:N,children:x&&n(Fe.div,{...b,ref:o,initial:"exit",className:R("chakra-slide",p),animate:f,exit:"exit",custom:N,variants:bo,style:F,...h})})});bt.displayName="Slide";var[go,Co]=le({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[Po,Xe]=le({strict:!1,name:"FormControlContext"});function ko(e){const{id:t,isRequired:o,isInvalid:r,isDisabled:s,isReadOnly:a,...i}=e,p=l.useId(),c=t||`field-${p}`,d=`${c}-label`,u=`${c}-feedback`,h=`${c}-helptext`,[b,g]=l.useState(!1),[F,x]=l.useState(!1),[f,N]=l.useState(!1),I=l.useCallback((P={},w=null)=>({id:h,...P,ref:X(w,M=>{M&&x(!0)})}),[h]),H=l.useCallback((P={},w=null)=>{var M,G;return{...P,ref:w,"data-focus":E(f),"data-disabled":E(s),"data-invalid":E(r),"data-readonly":E(a),id:(M=P.id)!=null?M:d,htmlFor:(G=P.htmlFor)!=null?G:c}},[c,s,f,r,a,d]),D=l.useCallback((P={},w=null)=>({id:u,...P,ref:X(w,M=>{M&&g(!0)}),"aria-live":"polite"}),[u]),y=l.useCallback((P={},w=null)=>({...P,...i,ref:w,role:"group"}),[i]),C=l.useCallback((P={},w=null)=>({...P,ref:w,role:"presentation","aria-hidden":!0,children:P.children||"*"}),[]);return{isRequired:!!o,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!s,isFocused:!!f,onFocus:()=>N(!0),onBlur:()=>N(!1),hasFeedbackText:b,setHasFeedbackText:g,hasHelpText:F,setHasHelpText:x,id:c,labelId:d,feedbackId:u,helpTextId:h,htmlProps:i,getHelpTextProps:I,getErrorMessageProps:D,getRootProps:y,getLabelProps:H,getRequiredIndicatorProps:C}}var _o=S(function(t,o){const r=he("Form",t),s=ie(t),{getRootProps:a,htmlProps:i,...p}=ko(s),c=R("chakra-form-control",t.className);return n(Po,{value:p,children:n(go,{value:r,children:n(m.div,{...a({},o),className:c,__css:r.container})})})});_o.displayName="FormControl";var So=S(function(t,o){const r=Xe(),s=Co(),a=R("chakra-form__helper-text",t.className);return n(m.div,{...r?.getHelpTextProps(t,o),__css:s.helperText,className:a})});So.displayName="FormHelperText";function wo(e){const{isDisabled:t,isInvalid:o,isReadOnly:r,isRequired:s,...a}=xo(e);return{...a,disabled:t,readOnly:r,required:s,"aria-invalid":ae(o),"aria-required":ae(s),"aria-readonly":ae(r)}}function xo(e){var t,o,r;const s=Xe(),{id:a,disabled:i,readOnly:p,required:c,isRequired:d,isInvalid:u,isReadOnly:h,isDisabled:b,onFocus:g,onBlur:F,...x}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return s?.hasFeedbackText&&s?.isInvalid&&f.push(s.feedbackId),s?.hasHelpText&&f.push(s.helpTextId),{...x,"aria-describedby":f.join(" ")||void 0,id:a??s?.id,isDisabled:(t=i??b)!=null?t:s?.isDisabled,isReadOnly:(o=p??h)!=null?o:s?.isReadOnly,isRequired:(r=c??d)!=null?r:s?.isRequired,isInvalid:u??s?.isInvalid,onFocus:T(s?.onFocus,g),onBlur:T(s?.onBlur,F)}}var nt=!1,ye=null,J=!1,qe=!1,ze=new Set;function Ye(e,t){ze.forEach(o=>o(e,t))}var No=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function To(e){return!(e.metaKey||!No&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function rt(e){J=!0,To(e)&&(ye="keyboard",Ye("keyboard",e))}function re(e){if(ye="pointer",e.type==="mousedown"||e.type==="pointerdown"){J=!0;const t=e.composedPath?e.composedPath()[0]:e.target;let o=!1;try{o=t.matches(":focus-visible")}catch{}if(o)return;Ye("pointer",e)}}function Fo(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function Ro(e){Fo(e)&&(J=!0,ye="virtual")}function Eo(e){e.target===window||e.target===document||(!J&&!qe&&(ye="virtual",Ye("virtual",e)),J=!1,qe=!1)}function Oo(){J=!1,qe=!0}function st(){return ye!=="pointer"}function Io(){if(typeof window>"u"||nt)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...o){J=!0,e.apply(this,o)},document.addEventListener("keydown",rt,!0),document.addEventListener("keyup",rt,!0),document.addEventListener("click",Ro,!0),window.addEventListener("focus",Eo,!0),window.addEventListener("blur",Oo,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",re,!0),document.addEventListener("pointermove",re,!0),document.addEventListener("pointerup",re,!0)):(document.addEventListener("mousedown",re,!0),document.addEventListener("mousemove",re,!0),document.addEventListener("mouseup",re,!0)),nt=!0}function Do(e){Io(),e(st());const t=()=>e(st());return ze.add(t),()=>{ze.delete(t)}}function Mo(e){return"current"in e}var gt=()=>typeof window<"u";function Bo(){var e;const t=navigator.userAgentData;return(e=t?.platform)!=null?e:navigator.platform}var Ao=e=>gt()&&e.test(navigator.vendor),Ho=e=>gt()&&e.test(Bo()),Lo=()=>Ho(/mac|iphone|ipad|ipod/i),qo=()=>Lo()&&Ao(/apple/i);function zo(e){const{ref:t,elements:o,enabled:r}=e,s=()=>{var a,i;return(i=(a=t.current)==null?void 0:a.ownerDocument)!=null?i:document};Ue(s,"pointerdown",a=>{if(!qo()||!r)return;const i=a.target,c=(o??[t]).some(d=>{const u=Mo(d)?d.current:d;return u?.contains(i)||u===i});s().activeElement!==i&&c&&(a.preventDefault(),i.focus())})}var $o=ho?l.useLayoutEffect:l.useEffect;function at(e,t=[]){const o=l.useRef(e);return $o(()=>{o.current=e}),l.useCallback((...r)=>{var s;return(s=o.current)==null?void 0:s.call(o,...r)},t)}function jo(e,t){const o=l.useId();return l.useMemo(()=>e||[t,o].filter(Boolean).join("-"),[e,t,o])}function Ko(e,t){const o=e!==void 0;return[o,o&&typeof e<"u"?e:t]}function Je(e={}){const{onClose:t,onOpen:o,isOpen:r,id:s}=e,a=at(o),i=at(t),[p,c]=l.useState(e.defaultIsOpen||!1),[d,u]=Ko(r,p),h=jo(s,"disclosure"),b=l.useCallback(()=>{d||c(!1),i?.()},[d,i]),g=l.useCallback(()=>{d||c(!0),a?.()},[d,a]),F=l.useCallback(()=>{(u?b:g)()},[u,g,b]);return{isOpen:!!u,onOpen:g,onClose:b,onToggle:F,isControlled:d,getButtonProps:(x={})=>({...x,"aria-expanded":u,"aria-controls":h,onClick:Lt(x.onClick,F)}),getDisclosureProps:(x={})=>({...x,hidden:!u,id:h})}}var Ct=e=>n(m.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});Ct.displayName="StackDivider";var A=m("div");A.displayName="Box";var Pt=S(function(t,o){const{size:r,centerContent:s=!0,...a}=t;return n(A,{ref:o,boxSize:r,__css:{...s?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});Pt.displayName="Square";var Vo=S(function(t,o){const{size:r,...s}=t;return n(Pt,{size:r,ref:o,borderRadius:"9999px",...s})});Vo.displayName="Circle";var kt=S(function(t,o){const r=qt("Link",t),{className:s,isExternal:a,...i}=ie(t);return n(m.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:o,className:R("chakra-link",s),...i,__css:r})});kt.displayName="Link";function Go(e){const t=e.current;if(!t)return!1;const o=jt(t);return!o||t.contains(o)?!1:!!Kt(o)}function Wo(e,t){const{shouldFocus:o,visible:r,focusRef:s}=t,a=o&&!r;dt(()=>{if(!a||Go(e))return;const i=s?.current||e.current;i&&requestAnimationFrame(()=>{i.focus()})},[a,e,s])}var Uo={preventScroll:!0,shouldFocus:!1};function Xo(e,t=Uo){const{focusRef:o,preventScroll:r,shouldFocus:s,visible:a}=t,i=Yo(e)?e.current:e,p=s&&a,c=l.useRef(p),d=l.useRef(a);zt(()=>{!d.current&&a&&(c.current=p),d.current=a},[a,p]);const u=l.useCallback(()=>{if(!(!a||!i||!c.current)&&(c.current=!1,!i.contains(document.activeElement)))if(o?.current)requestAnimationFrame(()=>{var h;(h=o.current)==null||h.focus({preventScroll:r})});else{const h=$t(i);h.length>0&&requestAnimationFrame(()=>{h[0].focus({preventScroll:r})})}},[a,r,i,o]);dt(()=>{u()},[u]),Ue(i,"transitionend",u)}function Yo(e){return"current"in e}function Jo(e){const{isOpen:t,ref:o}=e,[r,s]=l.useState(t),[a,i]=l.useState(!1);return l.useEffect(()=>{a||(s(t),i(!0))},[t,a,r]),Ue(()=>o.current,"animationend",()=>{s(t)}),{present:!(t?!1:!r),onComplete(){var c;const d=Vt(o.current),u=new d.CustomEvent("animationend",{bubbles:!0});(c=o.current)==null||c.dispatchEvent(u)}}}function Qo(e){const{wasSelected:t,enabled:o,isSelected:r,mode:s="unmount"}=e;return!!(!o||r||s==="keepMounted"&&t)}var Zo=m(bt),_t=S((e,t)=>{const{className:o,children:r,motionProps:s,containerProps:a,...i}=e,{getDialogProps:p,getDialogContainerProps:c,isOpen:d}=ve(),u=p(i,t),h=c(a),b=R("chakra-modal__content",o),g=ce(),F={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...g.dialog},x={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...g.dialogContainer},{placement:f}=Gt();return n(Wt,{children:n(m.div,{...h,className:"chakra-modal__content-container",__css:x,children:n(Zo,{motionProps:s,direction:f,in:d,className:b,...u,__css:F,children:r})})})});_t.displayName="DrawerContent";var Re=S((e,t)=>{const{className:o,...r}=e,s=R("chakra-modal__footer",o),i={display:"flex",alignItems:"center",justifyContent:"flex-end",...ce().footer};return n(m.footer,{ref:t,...r,__css:i,className:s})});Re.displayName="ModalFooter";var Ee=S((e,t)=>{const{className:o,...r}=e,{headerId:s,setHeaderMounted:a}=ve();l.useEffect(()=>(a(!0),()=>a(!1)),[a]);const i=R("chakra-modal__header",o),c={flex:0,...ce().header};return n(m.header,{ref:t,className:i,id:s,...r,__css:c})});Ee.displayName="ModalHeader";var en=m(Fe.div),Oe=S((e,t)=>{const{className:o,transition:r,motionProps:s,...a}=e,i=R("chakra-modal__overlay",o),c={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...ce().overlay},{motionPreset:d}=ve();return n(en,{...s||(d==="none"?{}:yt),__css:c,ref:t,className:i,...a})});Oe.displayName="ModalOverlay";var Ie=S((e,t)=>{const{className:o,...r}=e,{bodyId:s,setBodyMounted:a}=ve();l.useEffect(()=>(a(!0),()=>a(!1)),[a]);const i=R("chakra-modal__body",o),p=ce();return n(m.div,{ref:t,className:i,id:s,...r,__css:p.body})});Ie.displayName="ModalBody";var Qe=S((e,t)=>{const{onClick:o,className:r,...s}=e,{onClose:a}=ve(),i=R("chakra-modal__close-btn",r),p=ce();return n(ut,{ref:t,__css:p.closeButton,className:i,onClick:T(o,c=>{c.stopPropagation(),a()}),...s})});Qe.displayName="ModalCloseButton";var[tn,Q]=le({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[on,de]=le({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),$e=S(function(t,o){const{getHeaderProps:r}=Q(),s=de();return n(m.header,{...r(t,o),className:R("chakra-popover__header",t.className),__css:s.header})});$e.displayName="PopoverHeader";function je(e){const t=l.Children.only(e.children),{getTriggerProps:o}=Q();return l.cloneElement(t,o(t.props,t.ref))}je.displayName="PopoverTrigger";var se={click:"click",hover:"hover"};function nn(e={}){const{closeOnBlur:t=!0,closeOnEsc:o=!0,initialFocusRef:r,id:s,returnFocusOnClose:a=!0,autoFocus:i=!0,arrowSize:p,arrowShadowColor:c,trigger:d=se.click,openDelay:u=200,closeDelay:h=200,isLazy:b,lazyBehavior:g="unmount",computePositionOnMount:F,...x}=e,{isOpen:f,onClose:N,onOpen:I,onToggle:H}=Ut(e),D=l.useRef(null),y=l.useRef(null),C=l.useRef(null),P=l.useRef(!1),w=l.useRef(!1);f&&(w.current=!0);const[M,G]=l.useState(!1),[z,Z]=l.useState(!1),Y=l.useId(),ee=s??Y,[te,L,oe,ne]=["popover-trigger","popover-content","popover-header","popover-body"].map(_=>`${_}-${ee}`),{referenceRef:W,getArrowProps:$,getPopperProps:pe,getArrowInnerProps:be,forceUpdate:ge}=Xt({...x,enabled:f||!!F}),Ce=Jo({isOpen:f,ref:C});zo({enabled:f,ref:y}),Wo(C,{focusRef:y,visible:f,shouldFocus:a&&d===se.click}),Xo(C,{focusRef:r,visible:f,shouldFocus:i&&d===se.click});const fe=Qo({wasSelected:w.current,enabled:b,mode:g,isSelected:Ce.present}),Pe=l.useCallback((_={},q=null)=>{const O={..._,style:{..._.style,transformOrigin:Be.transformOrigin.varRef,[Be.arrowSize.var]:p?`${p}px`:void 0,[Be.arrowShadowColor.var]:c},ref:X(C,q),children:fe?_.children:null,id:L,tabIndex:-1,role:"dialog",onKeyDown:T(_.onKeyDown,K=>{o&&K.key==="Escape"&&N()}),onBlur:T(_.onBlur,K=>{const Se=lt(K),Me=Ae(C.current,Se),Dt=Ae(y.current,Se);f&&t&&(!Me&&!Dt)&&N()}),"aria-labelledby":M?oe:void 0,"aria-describedby":z?ne:void 0};return d===se.hover&&(O.role="tooltip",O.onMouseEnter=T(_.onMouseEnter,()=>{P.current=!0}),O.onMouseLeave=T(_.onMouseLeave,K=>{K.nativeEvent.relatedTarget!==null&&(P.current=!1,setTimeout(()=>N(),h))})),O},[fe,L,M,oe,z,ne,d,o,N,f,t,h,c,p]),De=l.useCallback((_={},q=null)=>pe({..._,style:{visibility:f?"visible":"hidden",..._.style}},q),[f,pe]),Ze=l.useCallback((_,q=null)=>({..._,ref:X(q,D,W)}),[D,W]),U=l.useRef(),ke=l.useRef(),k=l.useCallback(_=>{D.current==null&&W(_)},[W]),j=l.useCallback((_={},q=null)=>{const O={..._,ref:X(y,q,k),id:te,"aria-haspopup":"dialog","aria-expanded":f,"aria-controls":L};return d===se.click&&(O.onClick=T(_.onClick,H)),d===se.hover&&(O.onFocus=T(_.onFocus,()=>{U.current===void 0&&I()}),O.onBlur=T(_.onBlur,K=>{const Se=lt(K),Me=!Ae(C.current,Se);f&&t&&Me&&N()}),O.onKeyDown=T(_.onKeyDown,K=>{K.key==="Escape"&&N()}),O.onMouseEnter=T(_.onMouseEnter,()=>{P.current=!0,U.current=window.setTimeout(()=>I(),u)}),O.onMouseLeave=T(_.onMouseLeave,()=>{P.current=!1,U.current&&(clearTimeout(U.current),U.current=void 0),ke.current=window.setTimeout(()=>{P.current===!1&&N()},h)})),O},[te,f,L,d,k,H,I,t,N,u,h]);l.useEffect(()=>()=>{U.current&&clearTimeout(U.current),ke.current&&clearTimeout(ke.current)},[]);const _e=l.useCallback((_={},q=null)=>({..._,id:oe,ref:X(q,O=>{G(!!O)})}),[oe]),It=l.useCallback((_={},q=null)=>({..._,id:ne,ref:X(q,O=>{Z(!!O)})}),[ne]);return{forceUpdate:ge,isOpen:f,onAnimationComplete:Ce.onComplete,onClose:N,getAnchorProps:Ze,getArrowProps:$,getArrowInnerProps:be,getPopoverPositionerProps:De,getPopoverProps:Pe,getTriggerProps:j,getHeaderProps:_e,getBodyProps:It}}function Ae(e,t){return e===t||e?.contains(t)}function lt(e){var t;const o=e.currentTarget.ownerDocument.activeElement;return(t=e.relatedTarget)!=null?t:o}function Ke(e){const t=he("Popover",e),{children:o,...r}=ie(e),s=Yt(),a=nn({...r,direction:s.direction});return n(tn,{value:a,children:n(on,{value:t,children:Jt(o,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})})})}Ke.displayName="Popover";function Ve(e){var t;const{bg:o,bgColor:r,backgroundColor:s,shadow:a,boxShadow:i}=e,{getArrowProps:p,getArrowInnerProps:c}=Q(),d=de(),u=(t=o??r)!=null?t:s,h=a??i;return n(m.div,{...p(),className:"chakra-popover__arrow-positioner",children:n(m.div,{className:R("chakra-popover__arrow",e.className),...c(e),__css:{"--popper-arrow-bg":u?`colors.${u}, ${u}`:void 0,"--popper-arrow-shadow":h?`shadows.${h}, ${h}`:void 0,...d.arrow}})})}Ve.displayName="PopoverArrow";var xe=S(function(t,o){const{getBodyProps:r}=Q(),s=de();return n(m.div,{...r(t,o),className:R("chakra-popover__body",t.className),__css:s.body})});xe.displayName="PopoverBody";var Ge=S(function(t,o){const{onClose:r}=Q(),s=de();return n(ut,{size:"sm",onClick:r,className:R("chakra-popover__close-btn",t.className),__css:s.closeButton,ref:o,...t})});Ge.displayName="PopoverCloseButton";function rn(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var sn={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},an=m(Fe.section),St=S(function(t,o){const{variants:r=sn,...s}=t,{isOpen:a}=Q();return n(an,{ref:o,variants:rn(r),initial:!1,animate:a?"enter":"exit",...s})});St.displayName="PopoverTransition";var We=S(function(t,o){const{rootProps:r,motionProps:s,...a}=t,{getPopoverProps:i,getPopoverPositionerProps:p,onAnimationComplete:c}=Q(),d=de(),u={position:"relative",display:"flex",flexDirection:"column",...d.content};return n(m.div,{...p(r),__css:d.popper,className:"chakra-popover__popper",children:n(St,{...s,...i(a,o),onAnimationComplete:pt(c,a.onAnimationComplete),className:R("chakra-popover__content",t.className),__css:u})})});We.displayName="PopoverContent";function wt(e){const t=de();return n(m.footer,{...e,className:R("chakra-popover__footer",e.className),__css:t.footer})}wt.displayName="PopoverFooter";function ln(e){return e&&tt(e)&&tt(e.target)}function cn(e={}){const{onChange:t,value:o,defaultValue:r,name:s,isDisabled:a,isFocusable:i,isNative:p,...c}=e,[d,u]=l.useState(r||""),h=typeof o<"u",b=h?o:d,g=l.useRef(null),F=l.useCallback(()=>{const y=g.current;if(!y)return;let C="input:not(:disabled):checked";const P=y.querySelector(C);if(P){P.focus();return}C="input:not(:disabled)";const w=y.querySelector(C);w?.focus()},[]),f=`radio-${l.useId()}`,N=s||f,I=l.useCallback(y=>{const C=ln(y)?y.target.value:y;h||u(C),t?.(String(C))},[t,h]),H=l.useCallback((y={},C=null)=>({...y,ref:X(C,g),role:"radiogroup"}),[]),D=l.useCallback((y={},C=null)=>({...y,ref:C,name:N,[p?"checked":"isChecked"]:b!=null?y.value===b:void 0,onChange(w){I(w)},"data-radiogroup":!0}),[p,N,I,b]);return{getRootProps:H,getRadioProps:D,name:N,ref:g,focus:F,setValue:u,value:b,onChange:I,isDisabled:a,isFocusable:i,htmlProps:c}}var[dn,xt]=le({name:"RadioGroupContext",strict:!1}),Nt=S((e,t)=>{const{colorScheme:o,size:r,variant:s,children:a,className:i,isDisabled:p,isFocusable:c,...d}=e,{value:u,onChange:h,getRootProps:b,name:g,htmlProps:F}=cn(d),x=l.useMemo(()=>({name:g,size:r,onChange:h,colorScheme:o,value:u,variant:s,isDisabled:p,isFocusable:c}),[g,r,h,o,u,s,p,c]);return n(dn,{value:x,children:n(m.div,{...b(F,t),className:R("chakra-radio-group",i),children:a})})});Nt.displayName="RadioGroup";var un={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function pn(e={}){const{defaultChecked:t,isChecked:o,isFocusable:r,isDisabled:s,isReadOnly:a,isRequired:i,onChange:p,isInvalid:c,name:d,value:u,id:h,"data-radiogroup":b,"aria-describedby":g,...F}=e,x=`radio-${l.useId()}`,f=Xe(),I=!!xt()||!!b;let D=!!f&&!I?f.id:x;D=h??D;const y=s??f?.isDisabled,C=a??f?.isReadOnly,P=i??f?.isRequired,w=c??f?.isInvalid,[M,G]=l.useState(!1),[z,Z]=l.useState(!1),[Y,ee]=l.useState(!1),[te,L]=l.useState(!1),[oe,ne]=l.useState(Boolean(t)),W=typeof o<"u",$=W?o:oe;l.useEffect(()=>Do(G),[]);const pe=l.useCallback(k=>{if(C||y){k.preventDefault();return}W||ne(k.target.checked),p?.(k)},[W,y,C,p]),be=l.useCallback(k=>{k.key===" "&&L(!0)},[L]),ge=l.useCallback(k=>{k.key===" "&&L(!1)},[L]),Ce=l.useCallback((k={},j=null)=>({...k,ref:j,"data-active":E(te),"data-hover":E(Y),"data-disabled":E(y),"data-invalid":E(w),"data-checked":E($),"data-focus":E(z),"data-focus-visible":E(z&&M),"data-readonly":E(C),"aria-hidden":!0,onMouseDown:T(k.onMouseDown,()=>L(!0)),onMouseUp:T(k.onMouseUp,()=>L(!1)),onMouseEnter:T(k.onMouseEnter,()=>ee(!0)),onMouseLeave:T(k.onMouseLeave,()=>ee(!1))}),[te,Y,y,w,$,z,C,M]),{onFocus:fe,onBlur:Pe}=f??{},De=l.useCallback((k={},j=null)=>{const _e=y&&!r;return{...k,id:D,ref:j,type:"radio",name:d,value:u,onChange:T(k.onChange,pe),onBlur:T(Pe,k.onBlur,()=>Z(!1)),onFocus:T(fe,k.onFocus,()=>Z(!0)),onKeyDown:T(k.onKeyDown,be),onKeyUp:T(k.onKeyUp,ge),checked:$,disabled:_e,readOnly:C,required:P,"aria-invalid":ae(w),"aria-disabled":ae(_e),"aria-required":ae(P),"data-readonly":E(C),"aria-describedby":g,style:un}},[y,r,D,d,u,pe,Pe,fe,be,ge,$,C,P,w,g]);return{state:{isInvalid:w,isFocused:z,isChecked:$,isActive:te,isHovered:Y,isDisabled:y,isReadOnly:C,isRequired:P},getCheckboxProps:Ce,getInputProps:De,getLabelProps:(k={},j=null)=>({...k,ref:j,onMouseDown:T(k.onMouseDown,it),onTouchStart:T(k.onTouchStart,it),"data-disabled":E(y),"data-checked":E($),"data-invalid":E(w)}),getRootProps:(k,j=null)=>({...k,ref:j,"data-disabled":E(y),"data-checked":E($),"data-invalid":E(w)}),htmlProps:F}}function it(e){e.preventDefault(),e.stopPropagation()}function fn(e,t){const o={},r={};for(const[s,a]of Object.entries(e))t.includes(s)?o[s]=a:r[s]=a;return[o,r]}var Ne=S((e,t)=>{var o;const r=xt(),{onChange:s,value:a}=e,i=he("Radio",{...r,...e}),p=ie(e),{spacing:c="0.5rem",children:d,isDisabled:u=r?.isDisabled,isFocusable:h=r?.isFocusable,inputProps:b,...g}=p;let F=e.isChecked;r?.value!=null&&a!=null&&(F=r.value===a);let x=s;r?.onChange&&a!=null&&(x=pt(r.onChange,s));const f=(o=e?.name)!=null?o:r?.name,{getInputProps:N,getCheckboxProps:I,getLabelProps:H,getRootProps:D,htmlProps:y}=pn({...g,isChecked:F,isFocusable:h,isDisabled:u,onChange:x,name:f}),[C,P]=fn(y,ft),w=I(P),M=N(b,t),G=H(),z=Object.assign({},C,D()),Z={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...i.container},Y={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...i.control},ee={userSelect:"none",marginStart:c,...i.label};return v(m.label,{className:"chakra-radio",...z,__css:Z,children:[n("input",{className:"chakra-radio__input",...M}),n(m.span,{className:"chakra-radio__control",...w,__css:Y}),d&&n(m.span,{className:"chakra-radio__label",...G,__css:ee,children:d})]})});Ne.displayName="Radio";var Tt=S(function(t,o){const{children:r,placeholder:s,className:a,...i}=t;return v(m.select,{...i,ref:o,className:R("chakra-select",a),children:[s&&n("option",{value:"",children:s}),r]})});Tt.displayName="SelectField";function hn(e,t){const o={},r={};for(const[s,a]of Object.entries(e))t.includes(s)?o[s]=a:r[s]=a;return[o,r]}var Ft=S((e,t)=>{var o;const r=he("Select",e),{rootProps:s,placeholder:a,icon:i,color:p,height:c,h:d,minH:u,minHeight:h,iconColor:b,iconSize:g,...F}=ie(e),[x,f]=hn(F,ft),N=wo(f),I={width:"100%",height:"fit-content",position:"relative",color:p},H={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...(o=r.field)==null?void 0:o._focus}};return v(m.div,{className:"chakra-select__wrapper",__css:I,...x,...s,children:[n(Tt,{ref:t,height:d??c,minH:u??h,placeholder:a,...N,__css:H,children:e.children}),n(Rt,{"data-disabled":E(N.disabled),...(b||p)&&{color:b||p},__css:r.icon,...g&&{fontSize:g},children:i})]})});Ft.displayName="Select";var vn=e=>n("svg",{viewBox:"0 0 24 24",...e,children:n("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),mn=m("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Rt=e=>{const{children:t=n(vn,{}),...o}=e,r=l.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return n(mn,{...o,className:"chakra-select__icon-wrapper",children:l.isValidElement(t)?r:null})};Rt.displayName="SelectIcon";var[yn,ue]=le({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),Et=S((e,t)=>{const o=he("Table",e),{className:r,layout:s,...a}=ie(e);return n(yn,{value:o,children:n(m.table,{ref:t,__css:{tableLayout:s,...o.table},className:R("chakra-table",r),...a})})});Et.displayName="Table";var bn=S((e,t)=>{const o=ue();return n(m.thead,{...e,ref:t,__css:o.thead})}),we=S((e,t)=>{const o=ue();return n(m.tr,{...e,ref:t,__css:o.tr})}),Ot=S((e,t)=>{const{placement:o="bottom",...r}=e,s=ue();return n(m.caption,{...r,ref:t,__css:{...s.caption,captionSide:o}})});Ot.displayName="TableCaption";var gn=S((e,t)=>{var o;const{overflow:r,overflowX:s,className:a,...i}=e;return n(m.div,{ref:t,className:R("chakra-table__container",a),...i,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(o=r??s)!=null?o:"auto",overflowY:"hidden",maxWidth:"100%"}})}),Cn=S((e,t)=>{const o=ue();return n(m.tbody,{...e,ref:t,__css:o.tbody})}),V=S(({isNumeric:e,...t},o)=>{const r=ue();return n(m.td,{...t,ref:o,__css:r.td,"data-is-numeric":e})}),He=S(({isNumeric:e,...t},o)=>{const r=ue();return n(m.th,{...t,ref:o,__css:r.th,"data-is-numeric":e})});const Pn={},kn="",_n=Qt(kn),Sn=Object.freeze(Object.defineProperty({__proto__:null,packages:Pn,styles:_n},Symbol.toStringTag,{value:"Module"}));function wn(){return n(gn,{sx:{border:"solid"},children:v(Et,{variant:"striped",colorScheme:"teal",children:[n(Ot,{children:"This is the table cation"}),n(bn,{children:v(we,{children:[n(He,{children:"First"}),n(He,{children:"Test"}),n(He,{isNumeric:!0,children:"Third (numeric)"})]})}),v(Cn,{children:[v(we,{children:[n(V,{children:"one"}),n(V,{children:"bla"}),n(V,{isNumeric:!0,children:"22,3"})]}),v(we,{children:[n(V,{children:"two"}),n(V,{children:"blub"}),n(V,{isNumeric:!0,children:"23.4"})]}),v(we,{children:[n(V,{children:"three"}),n(V,{children:"blob"}),n(V,{isNumeric:!0,children:"12"})]})]})]})})}function xn(){return n("div",{style:{overflow:"auto",height:"100%",width:"100%"},children:v(uo,{children:[n(vt,{mb:5,children:"chakra technical demo"}),n(Nn,{}),n(Tn,{}),n(wn,{}),n(Hn,{})]})})}function Nn(){return v(po,{children:["This is a"," ",n(kt,{href:"https://chakra-ui.com",isExternal:!0,color:"yellow.500",children:"link to Chakra's Design system"})]})}function Tn(){return v(mt,{mb:5,mt:5,divider:n(Ct,{borderColor:"gray.200"}),spacing:"24px",align:"stretch",children:[n(A,{children:n(Fn,{})}),n(A,{children:n(Rn,{})}),n(A,{children:n(En,{})}),n(A,{children:n(On,{})}),n(A,{children:n(In,{})}),n(A,{children:n(Dn,{})}),n(A,{children:n(Mn,{})}),n(A,{children:n(Bn,{})}),n(A,{bg:"yellow.100",children:n(An,{})})]})}function Fn(){return v(A,{bg:"yellow.100",children:[n(vt,{size:"sm",children:"Portal Example: "}),"This is box and displayed here. Scroll/Look down to see the portal that is added at the end of document.body. The Portal is part of this Box.",n(ht,{children:"This is the portal content!"})]})}function Rn(){return n(Zt,{hasArrow:!0,label:"Button Tooltip","aria-label":"A tooltip",placement:"top",children:n(B,{colorScheme:"teal",children:"Button with a tooltip"})})}function En(){const e=vo();return n(B,{colorScheme:"teal",onClick:()=>e({title:"Account created.",description:"We've created your account for you.",status:"success",duration:9e3,position:"bottom-left",isClosable:!0}),children:"Show Toast"})}function On(){return v(eo,{status:"error",children:[n(to,{}),n(oo,{children:"Test Alert!"}),n(no,{children:"This is a test alert (error)"})]})}function In(){const{isOpen:e,onOpen:t,onClose:o}=Je(),r=l.useRef(null);return v(me,{children:[n(B,{onClick:t,colorScheme:"teal",children:"Open Alert"}),n(ro,{isOpen:e,leastDestructiveRef:r,onClose:o,children:n(Oe,{children:v(so,{children:[n(Ee,{fontSize:"lg",fontWeight:"bold",children:"Altert Titel"}),n(Ie,{children:"This is the text in the alert dialog body."}),v(Re,{children:[n(B,{ref:r,onClick:o,children:"Cancel"}),n(B,{colorScheme:"green",onClick:o,ml:3,children:"Okay"})]})]})})})]})}function Dn(){const{isOpen:e,onOpen:t,onClose:o}=Je();return v(me,{children:[n(B,{onClick:t,colorScheme:"teal",children:"Show Modal"}),v(ao,{closeOnOverlayClick:!1,isOpen:e,onClose:o,children:[n(Oe,{}),v(lo,{children:[n(Ee,{children:"This is a modal"}),n(Qe,{}),n(Ie,{pb:6,children:"This is a modal text!"}),v(Re,{children:[n(B,{colorScheme:"green",mr:2,children:"Got it"}),n(B,{onClick:o,children:"Cancel"})]})]})]})]})}function Mn(){const{isOpen:e,onOpen:t,onClose:o}=Je(),r=l.useRef(null);return v(me,{children:[n(B,{ref:r,colorScheme:"teal",onClick:t,children:"Open Drawer"}),v(io,{isOpen:e,placement:"left",onClose:o,finalFocusRef:r,isFullHeight:!1,children:[n(Oe,{}),v(_t,{children:[n(Qe,{}),n(Ee,{children:"This is the drawer header"}),n(Ie,{children:"This is the body."}),v(Re,{children:[n(B,{variant:"outline",mr:3,onClick:o,children:"Cancel"}),n(B,{colorScheme:"green",children:"Got it"})]})]})]})]})}function Bn(){return v(me,{children:[v(Ke,{children:[n(je,{children:n(B,{colorScheme:"teal",children:"Show Popover"})}),v(We,{children:[n(Ve,{}),n(Ge,{}),n($e,{children:"Popover!"}),n(xe,{children:"This is a very important Popover"})]})]}),v(Ke,{children:[n(je,{children:n(B,{ml:5,colorScheme:"teal",children:"Show Popover rendered in an portal"})}),n(ht,{children:v(We,{children:[n(Ve,{}),n($e,{children:"Header"}),n(Ge,{}),n(xe,{children:n(xe,{children:"This is a very important Popover"})}),n(wt,{children:"This is the footer"})]})})]})]})}function An(){const[e,t]=l.useState("2");return v(me,{children:[n(Nt,{onChange:t,value:e,children:v(mt,{spacing:4,direction:"row",children:[n(Ne,{size:"sm",value:"1",isDisabled:!0,children:"Radio 1 (Disabled)"}),n(Ne,{size:"md",value:"2",children:"Radio 2"}),n(Ne,{size:"lg",value:"3",children:"Radio 3"})]})}),n("p",{children:"Checked radio: "+e})]})}function Hn(){return v(Ft,{m:5,placeholder:"Select an item",children:[n("option",{value:"item1",children:"Item 1"}),n("option",{value:"item2",children:"Item 2"}),n("option",{value:"item3",children:"Item 3"})]})}const Ln=co({component:xn,appMetadata:Sn});customElements.define("chakra-app",Ln);
