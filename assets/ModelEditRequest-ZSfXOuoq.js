import{j as e,bi as D,bY as U,e as x,u as R,f as S,b as Q,h as W,i as T,bQ as V,b_ as L,t as y,aI as _,ab as A,ac as H,J,a8 as K,E as Y,U as P,cq as F,jb as $,fF as X,l as Z,bD as G,B as M,Q as ee,T as C}from"./index-BTMYyhc6.js";import{U as q}from"./UploadImage-DewQdK81.js";import{N as O}from"./NotLogin-6OH84l9f.js";import{i as se}from"./baseline-edit-CrCwmctU.js";import{o as te}from"./omitBy-8uwoqLo8.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[l]="041b5394-7d6e-4533-b191-5b12256d4d41",s._sentryDebugIdIdentifier="sentry-dbid-041b5394-7d6e-4533-b191-5b12256d4d41")}catch{}})();{var k=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};k._sentryModuleMetadata=k._sentryModuleMetadata||{},k._sentryModuleMetadata[new Error().stack]=Object.assign({},k._sentryModuleMetadata[new Error().stack],{"_sentryBundlerPluginAppKey:pixai-web-app-key":!0})}const ae=s=>e.jsx("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s,children:e.jsx("path",{fill:"currentColor",d:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"})}),ie=s=>e.jsx("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s,children:e.jsx("path",{fill:"currentColor",d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4l2 3l3-4l4 5H5z"})}),le=s=>e.jsx("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s,children:e.jsx("path",{fill:"currentColor",d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4s4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2c2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"})});function re(s){const[l,r]=x.useState(""),{modelId:t,onComplete:c}=s,{t:n}=R(["market"]),[m,g]=x.useState([]),[w,j]=x.useState(!1),{data:N,isValidating:I}=S();Q();const[d,z]=W(async a=>{try{const o=await T.report({refId:t,refType:V.Model,reason:L.ClaimModel,extra:{mediaIds:m.map(u=>u.id),statement:a}});y.success(n("market:model.claim.notice.submit-success")),c==null||c()}catch(o){y.error(n("market:model.claim.notice.submit-failed")+", "+o.message)}},[m,t]);if(!N)return I?e.jsx(_,{}):e.jsx(O,{});const h=(a,o)=>g(!a&&o?u=>[...u,o]:u=>{const v=u.findIndex(b=>b.id===a),f=[...u];return o?f.splice(v,1,o):f.splice(v,1),f});return e.jsxs(e.Fragment,{children:[e.jsxs(A,{className:"pb-1 flex items-center gap-2 font-semibold",children:[e.jsx(ae,{className:"size-6"})," ",n("market:model.claim.claim-model")]}),e.jsxs(H,{className:"pt-2",children:[e.jsxs("form",{onSubmit:a=>{a.preventDefault(),z(l)},action:"",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsxs("div",{className:"inline-flex gap-2 shrink-0",children:[m.map(a=>e.jsxs("div",{className:"relative",children:[e.jsx(q,{className:"!w-[100px] !h-[100px] !text-xs",value:a,onChange:o=>h(a.id,o),onUpload:j},a.id),e.jsx(J,{onClick:()=>h(a.id),size:"small",className:"absolute right-0 top-0 translate-x-2 -translate-y-2 bg-white",children:e.jsx(K,{className:"text-sm"})})]},a.id)),m.length<4&&e.jsx(q,{className:"!w-[100px] !h-[100px] !text-xs",value:void 0,onChange:a=>h(void 0,a),onUpload:j,placeholderElement:e.jsx("div",{children:e.jsx(ie,{className:"size-6"})})})]}),m.length<2&&e.jsx("p",{className:"text-sm shrink-1",children:n("market:model.claim.claim-description")})]}),e.jsx(Y,{className:"mt-4 w-full",multiline:!0,minRows:3,maxRows:6,placeholder:n("market:model.claim.claim-placeholder"),value:l,onChange:a=>r(a.target.value),inputProps:{maxLength:2e3},required:!0}),e.jsx(P,{size:"large",variant:"filled",type:"submit",busy:d,disabled:w,className:"mx-auto my-4 font-bold",children:e.jsx("span",{children:n("market:model.claim.submit-claim")})})]}),e.jsx(F,{children:"or"}),e.jsxs("div",{className:"flex font-semibold text-xl items-center gap-2 mb-2 mt-2",children:[e.jsx(le,{}),e.jsx("p",{children:n("market:model.claim.invite-to-claim")})]}),e.jsx($,{className:"w-full",link:X(t)})]})]})}const ne=async s=>{const l=await D({children:e.jsx(re,{modelId:s,onComplete:()=>{var r;(r=l.current)==null||r.close()}}),fullWidth:!0,maxWidth:"sm",classes:{paper:"rounded-xl"},TransitionComponent:U})};function de({modelId:s,onComplete:l,previouslyFilledValues:r}){var v,f,b,B;const{t}=R(["market","action"]),{values:c,handleChange:n,setValues:m}=Z({title:"",mediaId:"",extra:{description:"",triggerWords:""}}),g=x.useRef(!1),[w,j]=x.useState(!1),[N,I]=x.useState(),{data:d,isValidating:z}=G(s),{data:h,isValidating:a}=S(),[o,u]=W(async()=>{try{await T.report({refId:s,refType:V.Model,reason:L.RequestEditModel,extra:{requestEditContent:te(c,i=>i==="")}}),y.success(t("market:model.request-edit.notice.submit-success")),l==null||l()}catch(i){y.error(t("market:model.request-edit.notice.submit-failed")+", "+i.message)}},[c,s]);return x.useEffect(()=>{var i,p;d&&!g.current&&(m({title:d.title,mediaId:d.mediaId,extra:{description:(i=d.extra)==null?void 0:i.description,triggerWords:(p=d.extra)==null?void 0:p.triggerWords}}),g.current=!0)},[d]),z&&!d||a&&!h?e.jsx("div",{className:"py-12 mx-auto",children:e.jsx(_,{})}):!h&&!a?e.jsx(O,{}):e.jsxs(e.Fragment,{children:[e.jsxs(A,{className:"pb-1 flex items-center gap-2 font-semibold",children:[e.jsx(se,{className:"size-6"})," ",t("market:model.request-edit.request-edit")]}),e.jsxs(H,{className:"pt-2",children:[r&&e.jsxs("div",{className:"text-neutral-800 dark:text-neutral-300 border border-solid border-slate-300 p-4 rounded-lg mb-4",children:[e.jsx("h1",{className:"font-bold text-lg mb-2",children:t("market:model.request-edit.previously-filled.title")}),e.jsx("p",{children:t("market:model.request-edit.previously-filled.description")}),e.jsxs("div",{className:"mt-2 space-x-2",children:[e.jsx(M,{component:ee,to:`https://pixai.art/model/${s}`,variant:"contained",onClick:()=>l==null?void 0:l(),children:t("market:submit.file-exists.go")}),e.jsx(M,{variant:"contained",onClick:()=>{ne(s)},children:t("market:model.claim.claim-this-model")})]}),e.jsx(F,{className:"my-4"}),e.jsx("ul",{className:"space-y-2 mt-2",children:[{key:"title",label:t("market:submit.model-form.name"),value:r.title},{key:"extra.description",label:t("market:model.description.title"),value:(v=r.extra)==null?void 0:v.description},{key:"extra.triggerWords",label:t("market:model.trigger-words"),value:(f=r.extra)==null?void 0:f.triggerWords}].filter(i=>!!i.value).map(({key:i,label:p,value:E})=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{children:e.jsx(M,{variant:"outlined",size:"small",onClick:()=>n(i)(E),disabled:o,className:"whitespace-nowrap",children:t("market:model.request-edit.previously-filled.use")})}),e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold",children:[p,": "]}),e.jsx("span",{children:E})]})]},i))})]}),e.jsxs("form",{className:"flex flex-col",onSubmit:i=>{i.preventDefault(),u()},action:"",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-start",children:[e.jsx("div",{className:"flex md:w-1/3 justify-center w-full",children:e.jsx(q,{value:N||(d==null?void 0:d.media),onChange:i=>{I(i),m(p=>({...p,mediaId:i==null?void 0:i.id}))},onUpload:j})}),e.jsxs("div",{className:"flex flex-col gap-4 grow w-full",children:[e.jsx(C,{label:t("market:submit.model-form.name"),value:c.title,onChange:n("title")}),e.jsx(C,{label:t("market:model.description.title"),value:(b=c.extra)==null?void 0:b.description,onChange:n("extra.description"),multiline:!0,rows:3}),e.jsx(C,{label:t("market:model.trigger-words"),value:(B=c.extra)==null?void 0:B.triggerWords,onChange:n("extra.triggerWords")})]})]}),e.jsx(P,{size:"large",variant:"filled",type:"submit",busy:o,disabled:w,className:"mx-auto my-4 font-bold self-center",children:e.jsx("span",{children:t("market:model.request-edit.submit")})})]})]})]})}const he=async(s,l)=>{const r=await D({children:e.jsx(de,{modelId:s,previouslyFilledValues:l,onComplete:()=>{var t;(t=r.current)==null||t.close()}}),responsive:!0,fullWidth:!0,maxWidth:"md",classes:{paper:"rounded-xl"},TransitionComponent:U})};export{ne as a,he as d,ae as i};
//# sourceMappingURL=ModelEditRequest-ZSfXOuoq.js.map
