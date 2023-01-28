"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[368],{9904:(e,t,a)=>{a.r(t),a.d(t,{default:()=>fe});var n=a(9496),l=a(5924),o=a(7557),i=a(8241),r=a(7508),c=a(7379),s=a(3467),d=a(3331),m=a(7024);const u="backToTopButton_aDbA",b="backToTopButtonShow_M17i";function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:i,cancelScroll:r}=(0,d.Ct)();return(0,d.RF)(((e,a)=>{let{scrollY:n}=e;const i=a?.scrollY;i&&(o.current?o.current=!1:n>=i?(r(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,m.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>i(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",i.k.common.backToTopButton,u,e&&b),type:"button",onClick:t})}var h=a(3442),E=a(569),f=a(6387),g=a(126),k=a(7161);function _(e){return n.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const v="collapseSidebarButton_scBO",C="collapseSidebarButtonIcon_J6ye";function S(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",v),onClick:t},n.createElement(_,{className:C}))}var N=a(4570),I=a(1977);const Z=Symbol("EmptyContext"),T=n.createContext(Z);function y(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(T.Provider,{value:o},t)}var x=a(3275),L=a(1105),w=a(9843),A=a(7128);function B(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,s.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,f.L)(),g=function(e){const t=(0,A.Z)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.LM)(e):void 0),[e,t])}(t),_=(0,r._F)(t,o),v=(0,L.Mg)(h,o),{collapsed:C,setCollapsed:S}=(0,x.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:N,setExpandedItem:y}=function(){const e=(0,n.useContext)(T);if(e===Z)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),H=function(e){void 0===e&&(e=!C),y(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,I.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:_,collapsed:C,updateCollapsed:H}),(0,n.useEffect)((()=>{b&&null!=N&&N!==s&&E&&S(!0)}),[b,N,s,S,E]),n.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},n.createElement(w.Z,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":_}),onClick:b?e=>{a?.(t),h?H(!1):(e.preventDefault(),H())}:()=>{a?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!C:void 0,href:b?g??"#":g},d),u),h&&b&&n.createElement(B,{categoryLabel:u,onClick:e=>{e.preventDefault(),H()}})),n.createElement(x.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(G,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:o,level:c+1})))}var M=a(3919),P=a(8261);const F="menuExternalLink_pmqc";function W(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,r._F)(t,o),E=(0,M.Z)(m);return n.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(w.Z,(0,k.Z)({className:(0,l.Z)("menu__link",!E&&F,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(P.Z,null)))}const R="menuHtmlItem_tgvb";function D(e){let{item:t,level:a,index:o}=e;const{value:r,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),c&&[R,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:r}})}function V(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(H,(0,k.Z)({item:t},a));case"html":return n.createElement(D,(0,k.Z)({item:t},a));default:return n.createElement(W,(0,k.Z)({item:t},a))}}function z(e){let{items:t,...a}=e;const l=(0,r.f)(t,a.activePath);return n.createElement(y,null,l.map(((e,t)=>n.createElement(V,(0,k.Z)({key:t,item:e,index:t},a)))))}const G=(0,n.memo)(z),U="menu_oXt3",O="menuWithAnnouncementBar_P8GW";function Y(e){let{path:t,sidebar:a,className:o}=e;const r=function(){const{isActive:e}=(0,N.nT)(),[t,a]=(0,n.useState)(e);return(0,d.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,s.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",U,r&&O,o)},n.createElement("ul",{className:(0,l.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(G,{items:a,activePath:t,level:1})))}const j="sidebar_EwLi",q="sidebarWithHideableNavbar_Cwji",K="sidebarHidden_ijCh",J="sidebarLogo_g3xf";function X(e){let{path:t,sidebar:a,onCollapse:o,isHidden:i}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:c}}}=(0,f.L)();return n.createElement("div",{className:(0,l.Z)(j,r&&q,i&&K)},r&&n.createElement(g.Z,{tabIndex:-1,className:J}),n.createElement(Y,{path:t,sidebar:a}),c&&n.createElement(S,{onClick:o}))}const Q=n.memo(X);var $=a(3914),ee=a(3911);const te=e=>{let{sidebar:t,path:a}=e;const o=(0,ee.e)();return n.createElement("ul",{className:(0,l.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(G,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ae(e){return n.createElement($.Zo,{component:te,props:e})}const ne=n.memo(ae);function le(e){const t=(0,E.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Q,e),l&&n.createElement(ne,e))}const oe="expandButton_udBf",ie="expandButtonIcon_KOSh";function re(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:oe,title:(0,s.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(_,{className:ie}))}const ce={docSidebarContainer:"docSidebarContainer_kdRl",docSidebarContainerHidden:"docSidebarContainerHidden_Hf5W",sidebarViewport:"sidebarViewport_PWnG"};function se(e){let{children:t}=e;const a=(0,c.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:r}=(0,h.TH)(),[c,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return n.createElement("aside",{className:(0,l.Z)(i.k.docs.docSidebarContainer,ce.docSidebarContainer,a&&ce.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce.docSidebarContainer)&&a&&s(!0)}},n.createElement(se,null,n.createElement("div",{className:(0,l.Z)(ce.sidebarViewport,c&&ce.sidebarViewportHidden)},n.createElement(le,{sidebar:t,path:r,onCollapse:d,isHidden:c}),c&&n.createElement(re,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_HNuf",docMainContainerEnhanced:"docMainContainerEnhanced_vPVW",docItemWrapperEnhanced:"docItemWrapperEnhanced_FB2r"};function ue(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,c.V)();return n.createElement("main",{className:(0,l.Z)(me.docMainContainer,(t||!o)&&me.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},a))}const be="docRoot_TzqB",pe="docsWrapper_Gr4C";function he(e){let{children:t}=e;const a=(0,c.V)(),[l,o]=(0,n.useState)(!1);return n.createElement("div",{className:pe},n.createElement(p,null),n.createElement("div",{className:be},a&&n.createElement(de,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(ue,{hiddenSidebarContainer:l},t)))}var Ee=a(1163);function fe(e){const t=(0,r.SN)(e);if(!t)return n.createElement(Ee.Z,null);const{docElement:a,sidebarName:s,sidebarItems:d}=t;return n.createElement(o.FG,{className:(0,l.Z)(i.k.page.docsDocPage)},n.createElement(c.b,{name:s,items:d},n.createElement(he,null,a)))}},1163:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),l=a(5924),o=a(3467);function i(e){let{className:t}=e;return n.createElement("main",{className:(0,l.Z)("container margin-vert--xl",t)},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);