"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[335],{4974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>I,default:()=>V,frontMatter:()=>S,metadata:()=>L,toc:()=>A});var r=t(3274),a=t(8124),o=t(9474),s=t(8923),i=t(9379),l=t(241),c=t(5398),d=t(4244),h=t(2893),u=t(1911);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,h.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=m(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=f({queryString:t,groupId:r}),[h,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),j=(()=>{const e=l??h;return g({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,a]),tabValues:a}}var x=t(6158);const b={tabList:"tabList_lxD4",tabItem:"tabItem_hP6a"};function w(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==a&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,r.jsx)(w,{...e,...n}),(0,r.jsx)(v,{...e,...n})]})}function k(e){const n=(0,x.A)();return(0,r.jsx)(y,{...e,children:p(e.children)},String(n))}const T={tabItem:"tabItem_WTRM"};function C(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(T.tabItem,a),hidden:t,children:n})}const S={title:"Part 1 - Introduction"},I=void 0,L={id:"p1",title:"Part 1 - Introduction",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-Helios/p1.mdx",sourceDirName:".",slug:"/p1",permalink:"/en/docs/helios/p1",draft:!1,unlisted:!1,editUrl:"https://github.com/geekcornergh/docs/edit/master/versioned_docs/version-Helios/p1.mdx",tags:[],version:"Helios",frontMatter:{title:"Part 1 - Introduction"},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/en/docs/helios/intro"},next:{title:"Part 2 - The loading screen, and the login screen",permalink:"/en/docs/helios/p2"}},N={},A=[{value:"Introduction",id:"introduction",level:2},{value:"Video",id:"video",level:2},{value:"Licence",id:"licence",level:2},{value:"Getting started: Creating a project fork",id:"getting-started-creating-a-project-fork",level:2},{value:"Change the launcher name on GitHub",id:"change-the-launcher-name-on-github",level:2},{value:"Install these programs in order to modify the source code",id:"install-these-programs-in-order-to-modify-the-source-code",level:2},{value:"Node.JS",id:"nodejs",level:3},{value:"GitHub Desktop",id:"github-desktop",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Download the fork",id:"download-the-fork",level:2},{value:"Modify the fork",id:"modify-the-fork",level:2},{value:"Edit launcher metadata",id:"edit-launcher-metadata",level:3},{value:"Change the name of the launcher",id:"change-the-name-of-the-launcher",level:3},{value:"Change logos",id:"change-logos",level:3},{value:"Change the welcome text",id:"change-the-welcome-text",level:3},{value:"Change the launcher data folder",id:"change-the-launcher-data-folder",level:3},{value:"Test the changes",id:"test-the-changes",level:2},{value:"Send changes to GitHub",id:"send-changes-to-github",level:2}];function H(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"For this first tutorial dedicated to the development of the Helios Launcher, we will modify the welcome page, change the logo, the name of the folder where the data are stored and the name of the launcher. We will also create the Helios Launcher fork and install the software required to properly develop the Helios Launcher."}),"\n",(0,r.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial is based on the video you can watch below (",(0,r.jsx)(n.strong,{children:"in French"}),"):"]}),"\n",(0,r.jsx)("iframe",{width:"713",height:"412",src:"https://www.youtube-nocookie.com/embed/YeLf8wJVlVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,r.jsx)(n.h2,{id:"licence",children:"Licence"}),"\n",(0,r.jsxs)(n.p,{children:["There was a time when the launcher was under custom license, now it is available under ",(0,r.jsx)("a",{href:"https://fr.wikipedia.org/wiki/Licence_MIT",target:"_blank",children:"Licence MIT"})]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started-creating-a-project-fork",children:"Getting started: Creating a project fork"}),"\n",(0,r.jsxs)(n.p,{children:["Start by creating a ",(0,r.jsx)("a",{href:"https://github.com/join",target:"_BLANK",children:"GitHub account"}),", then go to the ",(0,r.jsx)("a",{href:"https://github.com/dscalzi/helioslauncher",children:"project page"}),"."]}),"\n",(0,r.jsx)("img",{src:"/img/helios-p1/Fork.jpg",width:"70%"}),"\n",(0,r.jsxs)(n.p,{children:["You then click on the ",(0,r.jsx)(n.code,{children:"Fork"})," button."]}),"\n",(0,r.jsx)("img",{src:"/img/helios-p1/Fork-2.jpg",width:"70%"}),"\n",(0,r.jsx)(n.p,{children:"Wait a few moments for GitHub to clone the Helios Launcher repo to your account.\nThis step should not take more than 1 minute.\nSo we can move on."}),"\n",(0,r.jsx)(n.h2,{id:"change-the-launcher-name-on-github",children:"Change the launcher name on GitHub"}),"\n",(0,r.jsx)(n.p,{children:"We are going to change the name of the GitHub fork, because we don't necessarily all want it to be called HeliosLauncher\nTo avoid this, go to your repository settings:"}),"\n",(0,r.jsx)("img",{src:"/img/helios-p1/settings.jpg",width:"70%"}),"\n",(0,r.jsx)(n.p,{children:"You can change the name of your launcher by clicking on Rename"}),"\n",(0,r.jsx)("img",{src:"/img/helios-p1/rename.jpg",width:"70%"}),"\n",(0,r.jsx)(n.h2,{id:"install-these-programs-in-order-to-modify-the-source-code",children:"Install these programs in order to modify the source code"}),"\n",(0,r.jsx)(n.p,{children:"We will have to use 3 programs:"}),"\n",(0,r.jsx)(n.h3,{id:"nodejs",children:"Node.JS"}),"\n",(0,r.jsxs)(n.p,{children:["This software is used to execute the launcher code. It is to the launcher what the engine is to the car.\nTo download it, go to ",(0,r.jsx)("a",{href:"https://nodejs.org",target:"_BLANK",children:"the official website"})," and download the latest LTS version for your computer."]}),"\n",(0,r.jsx)(n.h3,{id:"github-desktop",children:"GitHub Desktop"}),"\n",(0,r.jsxs)(n.p,{children:['It will be used to "push" the modifications on GitHub. Go to ',(0,r.jsx)("a",{href:"https://desktop.github.com",target:"_BLANK",children:"here"})," to download it. You'll then need to log into GitHub."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you prefer, you can use another Git client, like ",(0,r.jsx)("a",{href:"https://git-scm.com",target:"_blank",children:"Git"}),", ",(0,r.jsx)("a",{href:"https://www.gitkraken.com/",children:"GitKraken"}),", or ",(0,r.jsx)("a",{href:"https://www.sourcetreeapp.com/",children:"Sourcetree"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,r.jsxs)(n.p,{children:["It is used to modify the source code of our launcher. You can download it for free from ",(0,r.jsx)("a",{href:"https://code.visualstudio.com",target:"_BLANK",children:"Microsoft's website"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you prefer to use another code editor like ",(0,r.jsx)("a",{href:"https://www.sublimetext.com",children:"Sublime Text"})," or ",(0,r.jsx)("a",{href:"https://www.jetbrains.com/webstorm/",children:"WebStorm"}),", feel free."]})}),"\n",(0,r.jsx)(n.h2,{id:"download-the-fork",children:"Download the fork"}),"\n",(0,r.jsxs)(n.p,{children:["We have created our fork, but we need to download it locally, so we will use GitHub Desktop.\nStart the repository, then log in if you haven't already. Then press the ",(0,r.jsx)(n.code,{children:"Clone a repository from the internet"})," button and select your fork.\nChange the download location if necessary. Then press the ",(0,r.jsx)(n.code,{children:"Clone"})," button"]}),"\n",(0,r.jsx)(n.p,{children:'A popup will ask you how you want to use your fork. Answer with "For my own purposes", then validate.'}),"\n",(0,r.jsx)("img",{src:"/img/helios-p1/usefork.jpg",width:"70%"}),"\n",(0,r.jsx)(n.h2,{id:"modify-the-fork",children:"Modify the fork"}),"\n",(0,r.jsx)(n.h3,{id:"edit-launcher-metadata",children:"Edit launcher metadata"}),"\n",(0,r.jsxs)(n.p,{children:["Click on ",(0,r.jsx)(n.code,{children:"Open with Visual Studio Code"}),", then on the left, open the package.json file. Modify it to suit your needs. Below is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="package.json" showLineNumbers {2,3,4,5,6,8,10,52}',children:'{\n  "name": "mylauncher",\n  "version": "1.9.0",\n  "productName": "My Launcher",\n  "description": "Launcher to access My Server",\n  "author": "Daniel Scalzi (https://github.com/dscalzi/) + yourname",\n  "license": "UNLICENSED",\n  "homepage": "https://github.com/pseudogithub/mylauncher",\n  "bugs": {\n    "url": "https://github.com/pseudogithub/mylauncher/issues"\n  },\n  "private": true,\n  "main": "index.js",\n  "scripts": {\n    "start": "electron .",\n    "dist": "electron-builder build",\n    "dist:win": "npm run dist -- -w",\n    "dist:mac": "npm run dist -- -m",\n    "dist:linux": "npm run dist -- -l",\n    "lint": "eslint --config .eslintrc.json ."\n  },\n  "engines": {\n    "node": "16.x.x"\n  },\n  "dependencies": {\n    "@electron/remote": "^2.0.8",\n    "adm-zip": "^0.5.9",\n    "async": "^3.2.4",\n    "discord-rpc-patch": "^4.0.1",\n    "ejs": "^3.1.8",\n    "ejs-electron": "^2.1.1",\n    "electron-updater": "^5.3.0",\n    "fs-extra": "^10.1.0",\n    "github-syntax-dark": "^0.5.0",\n    "got": "^11.8.5",\n    "helios-core": "~0.1.2",\n    "jquery": "^3.6.1",\n    "node-disk-info": "^1.3.0",\n    "node-stream-zip": "^1.15.0",\n    "request": "^2.88.2",\n    "semver": "^7.3.8",\n    "tar-fs": "^2.1.1",\n    "winreg": "^1.2.4"\n  },\n  "devDependencies": {\n    "electron": "^21.3.1",\n    "electron-builder": "^23.6.0",\n    "eslint": "^8.28.0"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/pseudogithub/mylauncher.git"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once the modification is done, install the dependencies via a Terminal window (Terminal --\x3e New Terminal)"}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(C,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i\n"})})}),(0,r.jsx)(C,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,r.jsx)(C,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm i\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Each time you modify the ",(0,r.jsx)(n.code,{children:"package.json"})," file, you will have to run the command again:"]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(C,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i\n"})})}),(0,r.jsx)(C,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,r.jsx)(C,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm i\n"})})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"change-the-name-of-the-launcher",children:"Change the name of the launcher"}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"app/frame.ejs"}),' and around line 16, change "Helios Launcher" to the name of your launcher.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'{3,4} title="app/frame.ejs"',children:'            <div id="frameContentWin">\n                <div id="frameTitleDock">\n-                <span id="frameTitleText">Helios Launcher</span>\n+                <span id="frameTitleText">My Launcher</span>\n                </div>\n                <div id="frameButtonDockWin">`\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then under ",(0,r.jsx)(n.code,{children:"app/app.ejs"}),", change the text in the ",(0,r.jsx)(n.code,{children:"<title>"})," tag:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="app/app.ejs" {3,4}',children:'<head>\n    <meta charset="utf-8" http-equiv="Content-Security-Policy" content="script-src \'self\' \'sha256-In6B8teKZQll5heMl9bS7CESTbGvuAt3VVV86BUQBDk=\'"/>\n-    <title>Helios Launcher</title>\n+    <title>My Launcher</title>\n    <script src="./assets/js/scripts/uicore.js"><\/script>\n    <script src="./assets/js/scripts/uibinder.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"change-logos",children:"Change logos"}),"\n",(0,r.jsxs)(n.p,{children:["On GitHub Desktop, click on ",(0,r.jsx)(n.code,{children:"Repository --\x3e Show in explorer"}),"\nOpen the folder ",(0,r.jsx)(n.code,{children:"app/assets/images/"}),". SealCircle.png is the logo in the background of the loading page.\nFinally, go back to the root of your launcher, under ",(0,r.jsx)(n.code,{children:"build"}),", replace the ",(0,r.jsx)(n.code,{children:"icon.png"})," logo by your logo."]}),"\n",(0,r.jsx)(n.h3,{id:"change-the-welcome-text",children:"Change the welcome text"}),"\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.code,{children:"app/welcome.ejs"}),", change the welcome text:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="app/welcome.ejs" {3-6,8,9,12,13}',children:'    <div id="welcomeContent">\n        <img id="welcomeImageSeal" src="assets/images/SealCircle.png"/>\n-        <span id="welcomeHeader">WELCOME TO WESTEROSCRAFT</span>\n+        <span id="welcomeHeader">WELCOME TO MY SERVER</span>\n-        <span id="welcomeDescription">Our mission is to recreate the universe imagined by author George RR Martin in his fantasy series, A Song of Ice and Fire.  Through the collaborative effort of thousands of community members, we have sought to create Westeros as accurately and precisely as possible within Minecraft.  The world we are creating is yours to explore.  Journey from Dorne to Castle Black, and if you aren\u2019t afraid, beyond the Wall itself, but best not delay.  As the words of House Stark ominously warn: Winter is Coming.</span>\n+        <span id="welcomeDescription">We wish you a good time on the server</span>\n        <br>\n-        <span id="welcomeDescCTA">You are just a few clicks away from Westeros.</span>\n+        <span id="welcomeDescCTA">Get ready for an unforgettable adventure.</span>\n        <button id="welcomeButton">\n            <div id="welcomeButtonContent">\n-                CONTINUER\n+                CONTINUE\n                <svg id="welcomeSVG" viewBox="0 0 24.87 13.97">\n                    <defs>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"change-the-launcher-data-folder",children:"Change the launcher data folder"}),"\n",(0,r.jsx)(n.p,{children:'By default, Helios launcher will store its data in the ".helioslauncher" folder located at the following location:'}),"\n",(0,r.jsxs)(k,{defaultValue:"windows",groupId:"operating-systems",children:[(0,r.jsx)(C,{value:"windows",label:"Windows",children:(0,r.jsx)("code",{children:"%APPDATA%.helioslauncher"})}),(0,r.jsx)(C,{value:"macos",label:"macOS",children:(0,r.jsx)("code",{children:"~/Library/Application Support/.helioslauncher"})}),(0,r.jsx)(C,{value:"linux",label:"Linux",children:(0,r.jsx)("code",{children:"~/.helioslauncher"})})]}),"\n",(0,r.jsxs)(n.p,{children:["To change this, just change one line in ",(0,r.jsx)(n.code,{children:"app/assets/js/configmanager.js"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="app/assets/js/configmanager.js" {3,4}',children:"const sysRoot = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME)\n// TODO change\n- const dataPath = path.join(sysRoot, '.helioslauncher')\n+ const dataPath = path.join(sysRoot, '.mylauncher')\n\n// Forked processes do not have access to electron, so we have this workaround.\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you have already launched your launcher, you will have to delete the folder with the name of your launcher, as below"}),"\n",(0,r.jsxs)(k,{defaultValue:"windows",groupId:"operating-systems",children:[(0,r.jsx)(C,{value:"windows",label:"Windows",children:(0,r.jsx)("code",{children:"%APPDATA%\\My Launcher"})}),(0,r.jsx)(C,{value:"macos",label:"macOS",children:(0,r.jsx)("code",{children:"~/Library/Application Support/My Launcher"})}),(0,r.jsxs)(C,{value:"linux",label:"Linux",children:[(0,r.jsx)("code",{children:"$XDG_CONFIG_HOME/Helios Launcher"})," or ",(0,r.jsx)("code",{children:"~/.config/Helios Launcher"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"test-the-changes",children:"Test the changes"}),"\n",(0,r.jsx)(n.p,{children:"Launch"}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(C,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm start\n"})})}),(0,r.jsx)(C,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})})}),(0,r.jsx)(C,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm start\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"and see if the changes are applied"}),"\n",(0,r.jsx)(n.h2,{id:"send-changes-to-github",children:"Send changes to GitHub"}),"\n",(0,r.jsxs)(n.p,{children:["Go back to GitHub Desktop, and fill in the form at the bottom left, indicating what changes you've made (or not, but that's basically what these fields are for), then press ",(0,r.jsx)(n.code,{children:"Commit to master"}),". Then press ",(0,r.jsx)(n.code,{children:"Push origin"})," at the top."]})]})}function V(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(H,{...e})}):H(e)}},8124:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(9474);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);