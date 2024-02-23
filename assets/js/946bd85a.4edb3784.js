"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[610],{7759:(e,a,n)=>{n.d(a,{A:()=>M});var t=n(9474);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const m=()=>d++;function p(e){let{field:a,value:n,data:l,lastElement:s,openBracket:o,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,t.useRef)(!1),[p,_,h]=function(e){const[a,n]=(0,t.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>i(c,n,a)));(0,t.useEffect)((()=>{d.current?h(i(c,n,a)):d.current=!0}),[i]);const v=p?u.collapseIcon:u.expandIcon,b=p?"collapse JSON":"expand JSON",f=function(){const e=(0,t.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),N=c+1,E=l.length-1,g=e=>{" "===e.key&&_()};return(0,t.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,t.createElement)("span",{className:v,onClick:_,onKeyDown:g,role:"button",tabIndex:0,"aria-label":b,"aria-expanded":p,"aria-controls":p?f:void 0}),a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:u.punctuation},o),p?(0,t.createElement)("div",{id:f},l.map(((e,a)=>(0,t.createElement)(x,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===E,level:N,shouldExpandNode:i})))):(0,t.createElement)("span",{className:u.collapsedContent,onClick:_,onKeyDown:g,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":b,"aria-expanded":p}),(0,t.createElement)("span",{className:u.punctuation},r),!s&&(0,t.createElement)("span",{className:u.punctuation},","))}function _(e){let{field:a,value:n,style:t,lastElement:l,shouldExpandNode:s,level:o}=e;return p({field:a,value:n,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,data:Object.keys(n).map((e=>[e,n[e]]))})}function h(e){let{field:a,value:n,style:t,lastElement:l,level:s,shouldExpandNode:o}=e;return p({field:a,value:n,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,data:n.map((e=>[void 0,e]))})}function v(e){let{field:a,value:n,style:u,lastElement:i}=e,d=n,m=u.otherValue;return null===n?(d="null",m=u.nullValue):void 0===n?(d="undefined",m=u.undefinedValue):c(n)?(d=`"${n}"`,m=u.stringValue):l(n)?(d=n?"true":"false",m=u.booleanValue):s(n)?(d=n.toString(),m=u.numberValue):o(n)?(d=`${n.toString()}n`,m=u.numberValue):d=r(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,t.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:m},d),!i&&(0,t.createElement)("span",{className:u.punctuation},","))}function x(e){const a=e.value;return u(a)?(0,t.createElement)(h,Object.assign({},e)):i(a)&&!r(a)?(0,t.createElement)(_,Object.assign({},e)):(0,t.createElement)(v,Object.assign({},e))}var b="_2bkNM";const f={container:"_2IvMF _GzYRV",basicChildStyle:b,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti"},N=()=>!0,E=e=>{let{data:a,style:n=f,shouldExpandNode:l=N}=e;return(0,t.createElement)("div",{className:n.container},(0,t.createElement)(x,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:l}))},g="containerParaiso_bL0s",j="basicElementParaiso_wE5M",y="labelParaiso_Jpy5",V="nullValueParaiso_LxoN",k="undefinedValueParaiso_KW3N",I="stringValueParaiso_sRg0",C="booleanValueParaiso__1Ko",S="numberValueParaiso_BuG4",P="otherValueParaiso_qFvV",A="punctuationParaiso_r66f",O="expandIconParaiso_fmlI",B="collapseIconParaiso_Qo_0",D="collapseContentParaiso_ODiT";var R=n(3274);const L={container:g,basicChildStyle:j,label:y,nullValue:V,undefinedValue:k,stringValue:I,booleanValue:C,numberValue:S,otherValue:P,punctuation:A,collapseIcon:B,expandIcon:O,collapsedContent:D};function M(e){let{src:a,collapseDepth:n}=e;return(0,R.jsx)(E,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:L})}},6913:(e,a,n)=>{n.d(a,{A:()=>c});n(9474);var t=n(6045),l=n(7575);const s={container:"container_xiCr",nav:"nav__pZD",navlink:"navlink_J0LN",active:"active_mQ13"};var o=n(3274);function r(e){let{to:a,children:n}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function c(e){let{children:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:a})]})]})}},545:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});n(9474);var t=n(5081),l=n(6913),s=n(7759);const o={listItem:"listItem_CgLt",route:"route_D4QS",routeName:"routeName_Oc4o"};var r=n(3274);function c(){return(0,r.jsxs)(l.A,{children:[(0,r.jsx)("h2",{children:"Routes"}),(0,r.jsx)("ul",{className:"clean-list",children:t.A.map((e=>{let{path:a,exact:n,routes:t}=e;return(0,r.jsxs)("li",{className:o.listItem,children:[(0,r.jsx)("div",{className:o.route,children:(0,r.jsx)("code",{className:o.routeName,children:a})}),(0,r.jsxs)("div",{children:["Is exact: ",(0,r.jsx)("code",{children:String(Boolean(n))})]}),t&&(0,r.jsxs)("div",{children:["Child Routes:",(0,r.jsx)(s.A,{src:t})]})]},a)}))})]})}}}]);