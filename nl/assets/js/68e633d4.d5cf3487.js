"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[843],{3685:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(5170),l=n(5708),c=n(3530);const s={container:"container_oLlY",nav:"nav_WHxo",navlink:"navlink_SwCd",active:"active_ICDJ"};function r(e){let{to:t,children:n}=e;return a.createElement(c.Z,{className:s.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)}function u(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("html",{lang:"en"}),a.createElement("title",null,"Docusaurus debug panel"),a.createElement("meta",{name:"robots",content:"noindex"})),a.createElement("div",null,a.createElement("nav",{className:s.nav},a.createElement(r,{to:"/__docusaurus/debug"},"Config"),a.createElement(r,{to:"/__docusaurus/debug/metadata"},"Metadata"),a.createElement(r,{to:"/__docusaurus/debug/registry"},"Registry"),a.createElement(r,{to:"/__docusaurus/debug/routes"},"Routes"),a.createElement(r,{to:"/__docusaurus/debug/content"},"Content"),a.createElement(r,{to:"/__docusaurus/debug/globalData"},"Global data")),a.createElement("main",{className:s.container},t)))}},6268:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(5170),l=n(3650),c=n(3685);const s={sectionTitle:"sectionTitle_LUiX",listItem:"listItem__IqQ",version:"version_Enpk",name:"name_EI_3"};function r(){const{siteMetadata:e}=(0,l.Z)();return a.createElement(c.Z,null,a.createElement("h2",null,"Site Metadata"),a.createElement("div",null,"Docusaurus Version: ",a.createElement("code",null,e.docusaurusVersion)),a.createElement("div",null,"Site Version:"," ",a.createElement("code",null,e.siteVersion??"No version specified")),a.createElement("h3",{className:s.sectionTitle},"Plugins and themes"),a.createElement("ul",{className:"clean-list"},Object.entries(e.pluginVersions).map((e=>{let[t,n]=e;return a.createElement("li",{key:t,className:s.listItem},"package"===n.type&&n.version&&a.createElement("div",{className:s.version},a.createElement("code",null,n.version)),a.createElement("div",{className:s.name},t),a.createElement("div",null,"Type: ",n.type))}))))}}}]);