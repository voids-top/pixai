import{iG as U,iH as L,e as b,iI as A,iJ as E,ag as x,j as r,ai as c,bL as D,ae as C,af as w,iK as $,W as y,ak as K,iL as R,Y as k,am as T,an as N,iM as X,iN as z,iO as W,J as B}from"./index-BTMYyhc6.js";import{e as O}from"./TableRow-qxF9QOyo.js";import{i as H}from"./baseline-keyboard-arrow-right-BlgxAuax.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6f078c95-fdd3-4278-998f-2da848897528",t._sentryDebugIdIdentifier="sentry-dbid-6f078c95-fdd3-4278-998f-2da848897528")}catch{}})();{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};f._sentryModuleMetadata=f._sentryModuleMetadata||{},f._sentryModuleMetadata[new Error().stack]=Object.assign({},f._sentryModuleMetadata[new Error().stack],{"_sentryBundlerPluginAppKey:pixai-web-app-key":!0})}const J=["className","component"];function q(t={}){const{themeId:e,defaultTheme:o,defaultClassName:s="MuiBox-root",generateClassName:a}=t,n=U("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(L);return b.forwardRef(function(d,g){const u=A(o),h=E(d),{className:m,component:v="div"}=h,F=x(h,J);return r.jsx(n,c({as:v,ref:g,className:D(m,a?a(s):s),theme:e&&u[e]||u},F))})}function V(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Y(t){return parseFloat(t)}function Q(t){return w("MuiSkeleton",t)}C("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Z=["animation","className","component","height","style","variant","width"];let p=t=>t,M,_,j,P;const G=t=>{const{classes:e,variant:o,animation:s,hasChildren:a,width:n,height:l}=t;return N({root:["root",o,s,a&&"withChildren",a&&!n&&"fitContent",a&&!l&&"heightAuto"]},Q,e)},I=$(M||(M=p`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ee=$(_||(_=p`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),te=y("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.animation!==!1&&e[o.animation],o.hasChildren&&e.withChildren,o.hasChildren&&!o.width&&e.fitContent,o.hasChildren&&!o.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const o=V(t.shape.borderRadius)||"px",s=Y(t.shape.borderRadius);return c({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:K(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${o}/${Math.round(s/.6*10)/10}${o}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&R(j||(j=p`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),I),({ownerState:t,theme:e})=>t.animation==="wave"&&R(P||(P=p`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),ee,(e.vars||e).palette.action.hover)),Ce=b.forwardRef(function(e,o){const s=k({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:n,component:l="span",height:i,style:d,variant:g="text",width:u}=s,h=x(s,Z),m=c({},s,{animation:a,component:l,variant:g,hasChildren:!!h.children}),v=G(m);return r.jsx(te,c({as:l,ref:o,className:T(v.root,n),ownerState:m},h,{style:c({width:u,height:i},d)}))});function oe(t){return w("MuiTableContainer",t)}C("MuiTableContainer",["root"]);const se=["className","component"],ae=t=>{const{classes:e}=t;return N({root:["root"]},oe,e)},ne=y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,e)=>e.root})({width:"100%",overflowX:"auto"}),ge=b.forwardRef(function(e,o){const s=k({props:e,name:"MuiTableContainer"}),{className:a,component:n="div"}=s,l=x(s,se),i=c({},s,{component:n}),d=ae(i);return r.jsx(ne,c({ref:o,as:n,className:T(d.root,a),ownerState:i},l))});function re(t){return w("MuiTableFooter",t)}C("MuiTableFooter",["root"]);const ie=["className","component"],le=t=>{const{classes:e}=t;return N({root:["root"]},re,e)},ce=y("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"table-footer-group"}),de={variant:"footer"},S="tfoot",ve=b.forwardRef(function(e,o){const s=k({props:e,name:"MuiTableFooter"}),{className:a,component:n=S}=s,l=x(s,ie),i=c({},s,{component:n}),d=le(i);return r.jsx(O.Provider,{value:de,children:r.jsx(ce,c({as:n,className:T(d.root,a),ref:o,role:n===S?null:"rowgroup",ownerState:i},l))})}),ue=C("MuiBox",["root"]),he=X(),me=q({themeId:z,defaultTheme:he,defaultClassName:ue.root,generateClassName:W.generate}),fe=t=>r.jsx("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...t,children:r.jsx("path",{fill:"currentColor",d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"})});function we(t){const{pageInfo:e,onCursorChange:o=()=>{},isPosSeq:s}=t,a=()=>{o(s?{before:e==null?void 0:e.startCursor,after:null}:{before:null,after:e==null?void 0:e.endCursor})},n=()=>{o(s?{before:null,after:e==null?void 0:e.endCursor}:{before:e==null?void 0:e.startCursor,after:null})};return r.jsxs(me,{sx:{flexShrink:0,ml:2.5},children:[r.jsx(B,{onClick:a,disabled:s?!(e!=null&&e.hasPreviousPage):!(e!=null&&e.hasNextPage),"aria-label":"previous page",children:r.jsx(fe,{className:"size-6"})}),r.jsx(B,{onClick:n,disabled:s?!(e!=null&&e.hasNextPage):!(e!=null&&e.hasPreviousPage),"aria-label":"next page",children:r.jsx(H,{className:"size-6"})})]})}const ye=t=>r.jsx("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...t,children:r.jsx("path",{fill:"currentColor",d:"m4.21 4.387l.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12L4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094z"})});export{me as B,Ce as S,ge as T,ve as a,we as b,ye as f};
//# sourceMappingURL=dismiss-24-filled-DmGl87MD.js.map
