"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[845],{4545:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(9496),l=a(5924),r=a(3849),s=a(569),o=a(9843),i=a(3467),c=a(3442),m=a(1105);function u(e){const{pathname:t}=(0,c.TH)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const d="sidebar_Q8ud",g="sidebarItemTitle_aYTg",p="sidebarItemList_xkXr",h="sidebarItem_uRX8",f="sidebarItemLink_IKV6",E="sidebarItemLinkActive_jdAj";function b(e){let{sidebar:t}=e;const a=u(t.items);return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(d,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(g,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(p,"clean-list")},a.map((e=>n.createElement("li",{key:e.permalink,className:h},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:E},e.title)))))))}var v=a(3914);function _(e){let{sidebar:t}=e;const a=u(t.items);return n.createElement("ul",{className:"menu__list"},a.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function N(e){return n.createElement(v.Zo,{component:_,props:e})}function P(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?n.createElement(N,{sidebar:t}):n.createElement(b,{sidebar:t}):null}function Z(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(P,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},309:(e,t,a)=>{a.d(t,{Z:()=>$});var n=a(9496),l=a(5924),r=a(1886),s=a(6694);function o(e){let{children:t,className:a}=e;const{frontMatter:l,assets:o}=(0,r.C)(),{withBaseUrl:i}=(0,s.C)(),c=o.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(9843);const c="title_vZnj";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:o,title:m}=a,u=s?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},s?m:n.createElement(i.Z,{itemProp:"url",to:o},m))}var u=a(3467),d=a(6591);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function f(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function E(){const e=f();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}const b="container_koky";function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=E();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function _(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function N(){return n.createElement(n.Fragment,null," \xb7 ")}function P(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:o,readingTime:i}=a;return n.createElement("div",{className:(0,l.Z)(b,"margin-vert--md",t)},n.createElement(_,{date:s,formattedDate:o}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(N,null),n.createElement(v,{readingTime:i})))}function Z(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function k(e){let{author:t,className:a}=e;const{name:r,title:s,url:o,imageURL:i,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(Z,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(Z,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),s&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const T="authorCol_wpsZ",C="imageOnlyAuthorRow_iaPx",y="imageOnlyAuthorCol_HmsH";function w(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?C:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?y:T),key:t},n.createElement(k,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function I(){return n.createElement("header",null,n.createElement(m,null),n.createElement(P,null),n.createElement(w,null))}var M=a(2946),F=a(4064);function x(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return n.createElement("div",{id:s?M.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(F.Z,null,t))}var B=a(9406),L=a(2456),R=a(7161);function U(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function j(e){const{blogPostTitle:t,...a}=e;return n.createElement(i.Z,(0,R.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(U,null))}const A="blogPostFooterDetailsFull_hifb";function D(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:o,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||o?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&A)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(L.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(B.Z,{editUrl:o})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(j,{blogPostTitle:s,to:e.permalink}))):null}function $(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o,{className:(0,l.Z)(s,a)},n.createElement(I,null),n.createElement(x,null,t),n.createElement(D,null))}},9406:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(9496),l=a(3467),r=a(8241),s=a(7161),o=a(5924);const i="iconEdit_IyjR";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9738:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9496),l=a(5924),r=a(9843);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},2456:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(9496),l=a(5924),r=a(3467),s=a(9843);const o="tag_iqfv",i="tagRegular_eLjS",c="tagWithCount_vuh9";function m(e){let{permalink:t,label:a,count:r}=e;return n.createElement(s.Z,{href:t,className:(0,l.Z)(o,r?c:i)},a,r&&n.createElement("span",null,r))}const u="tags_aFdl",d="tag_YKF8";function g(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:d},n.createElement(m,{label:t,permalink:a}))}))))}},1886:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>s});var n=a(9496),l=a(1977);const r=n.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:s},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},6269:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[l]=e.split(/[#?]/),r="/"===l||l===n?l:(s=l,a?function(e){return e.endsWith("/")?e:`${e}/`}(s):function(e){return e.endsWith("/")?e.slice(0,-1):e}(s));var s;return e.replace(l,r)}},2946:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var l=a(6269);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(l).default}})}}]);