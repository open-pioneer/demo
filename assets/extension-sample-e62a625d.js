var g=(n,i,e)=>{if(!i.has(n))throw TypeError("Cannot "+e)};var s=(n,i,e)=>(g(n,i,"read from private field"),e?e.call(n):i.get(n)),l=(n,i,e)=>{if(i.has(n))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(n):i.set(n,e)};import"./modulepreload-polyfill-ec808ebb.js";import{c as A,b as o,j as a,a as f}from"./ObservableBox-e83865f8.js";import{u as h}from"./hooks-849347d9.js";import{V as u}from"./chunk-MUMUYFOI-3f88befa.js";import{B as w,C as x,H as p,T as d}from"./chunk-SRMZVY4F-89077eda.js";var t;class P{constructor(i){l(this,t,new Map);const e=s(this,t),r=i.references.providers;for(const m of r){const v=m.createActions();for(const c of v){if(e.has(c.id))throw new Error(`Action '${c.id}' was defined twice.`);e.set(c.id,c)}}}getActionInfo(){const i=Array.from(s(this,t).values()).map(e=>({id:e.id,text:e.text}));return i.sort((e,r)=>e.text.localeCompare(r.text)),i}triggerAction(i){const e=s(this,t).get(i);if(!e)throw new Error(`Action '${i}' was not defined.`);e.trigger()}}t=new WeakMap;class b{createActions(){return[{id:"logging-action",text:"Log a message",trigger(){console.info("Logging a message!")}}]}}class S{createActions(){return[{id:"clear-browser-action",text:"Clear browser",trigger(){document.body.innerHTML=""}},{id:"refresh-browser-action",text:"Refresh browser",trigger(){window.location.reload()}}]}}class y{createActions(){return[{id:"open-window-action",text:"Open window",trigger(){window.open("https://www.conterra.de")}}]}}const I={"extension-app":{name:"extension-app",services:{ActionServiceImpl:{name:"ActionServiceImpl",clazz:P,provides:[{name:"extension-app.ActionService",qualifier:void 0}],references:{providers:{name:"extension-app.ActionProvider",qualifier:void 0,all:!0}}},LoggingActionProvider:{name:"LoggingActionProvider",clazz:b,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},MultiActionProvider:{name:"MultiActionProvider",clazz:S,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}},OpenWindowActionProvider:{name:"OpenWindowActionProvider",clazz:y,provides:[{name:"extension-app.ActionProvider",qualifier:void 0}],references:{}}},ui:{references:[{name:"extension-app.ActionService",qualifier:void 0,all:!1}]},properties:{}}},z="",E=A(z),M=Object.freeze(Object.defineProperty({__proto__:null,packages:I,styles:E},Symbol.toStringTag,{value:"Module"})),T="extension-app",C=h.bind(void 0,T);function q(){const n=C("extension-app.ActionService"),i=n.getActionInfo().map(({id:e,text:r})=>o(w,{onClick:()=>n.triggerAction(e),children:r},e));return a(x,{maxW:"3xl",py:2,children:[o(p,{as:"h1",size:"4xl",mb:4,children:"Extension Example"}),o(d,{my:2,children:"This example demonstrates how to provide an extensible API with services and 1-to-N dependencies."}),a(d,{my:2,children:["Individual ",o("code",{children:"ActionProvider"})," instances can provide a number of actions, which are then gathered and indexed by the ",o("code",{children:"ActionService"}),", which depends on all ActionProviders. The UI references the ",o("code",{children:"ActionService"})," and renders the provided actions as buttons. When a button is clicked, the appropriate action will be triggered."]}),a(d,{my:2,children:["To add a new action, simply add new implementation of"," ",o("code",{children:'"extension-app.ActionProvider"'}),". The"," ",o("code",{children:"ActionService"})," will pick it up automatically."]}),a(p,{as:"h4",size:"xl",children:["Buttons from ",o("code",{children:"ActionService"}),":"]}),o(u,{align:"start",children:i})]})}const B=f({component:q,appMetadata:M});customElements.define("extension-app",B);
