"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[843],{6664:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(9496),l=n(7836),c=n(9785);const r={container:"container_P3l6",nav:"nav_FuT8",navlink:"navlink_jty5",active:"active_X8Cz"};function s(e){let{to:t,children:n}=e;return a.createElement(c.Z,{className:r.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)}function u(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("html",{lang:"en"}),a.createElement("title",null,"Docusaurus debug panel"),a.createElement("meta",{name:"robots",content:"noindex"})),a.createElement("div",null,a.createElement("nav",{className:r.nav},a.createElement(s,{to:"/__docusaurus/debug"},"Config"),a.createElement(s,{to:"/__docusaurus/debug/metadata"},"Metadata"),a.createElement(s,{to:"/__docusaurus/debug/registry"},"Registry"),a.createElement(s,{to:"/__docusaurus/debug/routes"},"Routes"),a.createElement(s,{to:"/__docusaurus/debug/content"},"Content"),a.createElement(s,{to:"/__docusaurus/debug/globalData"},"Global data")),a.createElement("main",{className:r.container},t)))}},7568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(9496),l=n(6355),c=n(6664);const r={sectionTitle:"sectionTitle_hpvA",listItem:"listItem_mDL4",version:"version_anv8",name:"name_rS1S"};function s(){const{siteMetadata:e}=(0,l.Z)();return a.createElement(c.Z,null,a.createElement("h2",null,"Site Metadata"),a.createElement("div",null,"Docusaurus Version: ",a.createElement("code",null,e.docusaurusVersion)),a.createElement("div",null,"Site Version:"," ",a.createElement("code",null,e.siteVersion??"No version specified")),a.createElement("h3",{className:r.sectionTitle},"Plugins and themes"),a.createElement("ul",{className:"clean-list"},Object.entries(e.pluginVersions).map((e=>{let[t,n]=e;return a.createElement("li",{key:t,className:r.listItem},"package"===n.type&&n.version&&a.createElement("div",{className:r.version},a.createElement("code",null,n.version)),a.createElement("div",{className:r.name},t),a.createElement("div",null,"Type: ",n.type))}))))}}}]);