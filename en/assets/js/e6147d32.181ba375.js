"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[545],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>v,default:()=>x,frontMatter:()=>w,metadata:()=>T,toc:()=>j});var a=n(7161),o=n(9496),r=n(9613),i=n(5924),l=n(3442),s=n(6790),c=n(1977),u=n(6639),d=n(3331),p=n(7128);const h="tabList_HcZ5",m="tabItem_KcC8";function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.TH)(),r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1!==t){if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n}}({queryString:t,groupId:n});return{get:(0,o.useCallback)((()=>{if(i)return new URLSearchParams(a.search).get(i)}),[i,a.search]),set:(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.search);t.set(i,e),r.replace({...a,search:t.toString()})}),[i,r,a])}}function f(e){const{lazy:t,block:n,defaultValue:r,values:l,groupId:p,className:f,queryString:k=!1}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=g({queryString:k,groupId:p}),w=l??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(w,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);if(null!=r&&!w.some((e=>e.value===r)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{ready:T,tabGroupChoices:C,setTabGroupChoices:j}=(0,u.U)(),N=void 0!==r?r:b.find((e=>e.props.default))?.props.value??b[0].props.value,[x,S]=(0,o.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)(),I=(0,c.zX)((()=>{if(T){const e=y.get()??(p&&C[p]);e&&w.some((t=>t.value===e))&&S(e)}}));(0,o.useEffect)((()=>{T&&I()}),[T,I]);const L=e=>{const t=e.currentTarget,n=O.indexOf(t),a=w[n].value;a!==x&&(E(t),S(a),y.set(a),null!=p&&j(p,String(a)))},D=e=>{let t=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",h)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:D,onClick:L},r,{className:(0,i.Z)("tabs__item",m,r?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,p.Z)();return o.createElement(f,(0,a.Z)({key:String(t)},e))}const b="tabItem_FhZX";function y(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(b,a),hidden:n},t)}const w={title:"Part 1 - Introduction"},v=void 0,T={unversionedId:"p1",id:"version-Helios/p1",title:"Part 1 - Introduction",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-Helios/p1.mdx",sourceDirName:".",slug:"/p1",permalink:"/en/docs/helios/p1",draft:!1,unlisted:!1,editUrl:"https://github.com/geekcornergh/docs/edit/master/versioned_docs/version-Helios/p1.mdx",tags:[],version:"Helios",frontMatter:{title:"Part 1 - Introduction"},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/en/docs/helios/intro"},next:{title:"Part 2 - The loading screen, and the login screen",permalink:"/en/docs/helios/p2"}},C={},j=[{value:"Introduction",id:"introduction",level:2},{value:"Video",id:"video",level:2},{value:"Licence",id:"licence",level:2},{value:"Getting started: Creating a project fork",id:"getting-started-creating-a-project-fork",level:2},{value:"Change the launcher name on GitHub",id:"change-the-launcher-name-on-github",level:2},{value:"Install these programs in order to modify the source code",id:"install-these-programs-in-order-to-modify-the-source-code",level:2},{value:"Node.JS",id:"nodejs",level:3},{value:"GitHub Desktop",id:"github-desktop",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Download the fork",id:"download-the-fork",level:2},{value:"Modify the fork",id:"modify-the-fork",level:2},{value:"Edit launcher metadata",id:"edit-launcher-metadata",level:3},{value:"Change the name of the launcher",id:"change-the-name-of-the-launcher",level:3},{value:"Change logos",id:"change-logos",level:3},{value:"Change the welcome text",id:"change-the-welcome-text",level:3},{value:"Change the launcher data folder",id:"change-the-launcher-data-folder",level:3},{value:"Test the changes",id:"test-the-changes",level:2},{value:"Send changes to GitHub",id:"send-changes-to-github",level:2}],N={toc:j};function x(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"For this first tutorial dedicated to the development of the Helios Launcher, we will modify the welcome page, change the logo, the name of the folder where the data are stored and the name of the launcher. We will also create the Helios Launcher fork and install the software required to properly develop the Helios Launcher."),(0,r.kt)("h2",{id:"video"},"Video"),(0,r.kt)("p",null,"This tutorial is based on the video you can watch below (",(0,r.kt)("strong",{parentName:"p"},"in French"),"): "),(0,r.kt)("iframe",{width:"713",height:"412",src:"https://www.youtube-nocookie.com/embed/YeLf8wJVlVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"licence"},"Licence"),(0,r.kt)("p",null,"There was a time when the launcher was under custom license, now it is available under ",(0,r.kt)("a",{href:"https://fr.wikipedia.org/wiki/Licence_MIT",target:"_blank"},"Licence MIT")),(0,r.kt)("h2",{id:"getting-started-creating-a-project-fork"},"Getting started: Creating a project fork"),(0,r.kt)("p",null,"Start by creating a ",(0,r.kt)("a",{href:"https://github.com/join",target:"_BLANK"},"GitHub account"),", then go to the ",(0,r.kt)("a",{href:"https://github.com/dscalzi/helioslauncher"},"project page"),".  "),(0,r.kt)("img",{src:"/img/helios-p1/Fork.jpg",width:"70%"}),(0,r.kt)("p",null,"You then click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fork")," button."),(0,r.kt)("img",{src:"/img/helios-p1/Fork-2.jpg",width:"70%"}),(0,r.kt)("p",null,"Wait a few moments for GitHub to clone the Helios Launcher repo to your account.\nThis step should not take more than 1 minute.\nSo we can move on."),(0,r.kt)("h2",{id:"change-the-launcher-name-on-github"},"Change the launcher name on GitHub"),(0,r.kt)("p",null,"We are going to change the name of the GitHub fork, because we don't necessarily all want it to be called HeliosLauncher\nTo avoid this, go to your repository settings:"),(0,r.kt)("img",{src:"/img/helios-p1/settings.jpg",width:"70%"}),(0,r.kt)("p",null,"You can change the name of your launcher by clicking on Rename"),(0,r.kt)("img",{src:"/img/helios-p1/rename.jpg",width:"70%"}),(0,r.kt)("h2",{id:"install-these-programs-in-order-to-modify-the-source-code"},"Install these programs in order to modify the source code"),(0,r.kt)("p",null,"We will have to use 3 programs:"),(0,r.kt)("h3",{id:"nodejs"},"Node.JS"),(0,r.kt)("p",null,"This software is used to execute the launcher code. It is to the launcher what the engine is to the car.\nTo download it, go to ",(0,r.kt)("a",{href:"https://nodejs.org",target:"_BLANK"},"the official website")," and download the latest LTS version for your computer."),(0,r.kt)("h3",{id:"github-desktop"},"GitHub Desktop"),(0,r.kt)("p",null,'It will be used to "push" the modifications on GitHub. Go to ',(0,r.kt)("a",{href:"https://desktop.github.com",target:"_BLANK"},"here")," to download it. You'll then need to log into GitHub."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer, you can use another Git client, like ",(0,r.kt)("a",{href:"https://git-scm.com",target:"_blank"},"Git"),", ",(0,r.kt)("a",{href:"https://www.gitkraken.com/"},"GitKraken"),", or ",(0,r.kt)("a",{href:"https://www.sourcetreeapp.com/"},"Sourcetree"),".")),(0,r.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,r.kt)("p",null,"It is used to modify the source code of our launcher. You can download it for free from ",(0,r.kt)("a",{href:"https://code.visualstudio.com",target:"_BLANK"},"Microsoft's website"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer to use another code editor like ",(0,r.kt)("a",{href:"https://www.sublimetext.com"},"Sublime Text")," or ",(0,r.kt)("a",{href:"https://www.jetbrains.com/webstorm/"},"WebStorm"),", feel free.")),(0,r.kt)("h2",{id:"download-the-fork"},"Download the fork"),(0,r.kt)("p",null,"We have created our fork, but we need to download it locally, so we will use GitHub Desktop.\nStart the repository, then log in if you haven't already. Then press the ",(0,r.kt)("inlineCode",{parentName:"p"},"Clone a repository from the internet")," button and select your fork.\nChange the download location if necessary. Then press the ",(0,r.kt)("inlineCode",{parentName:"p"},"Clone")," button"),(0,r.kt)("p",null,'A popup will ask you how you want to use your fork. Answer with "For my own purposes", then validate.'),(0,r.kt)("img",{src:"/img/helios-p1/usefork.jpg",width:"70%"}),(0,r.kt)("h2",{id:"modify-the-fork"},"Modify the fork"),(0,r.kt)("h3",{id:"edit-launcher-metadata"},"Edit launcher metadata"),(0,r.kt)("p",null,"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Open with Visual Studio Code"),", then on the left, open the package.json file. Modify it to suit your needs. Below is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" showLineNumbers {2,3,4,5,6,8,10,52}',title:'"package.json"',showLineNumbers:!0,"{2,3,4,5,6,8,10,52}":!0},'{\n  "name": "mylauncher",\n  "version": "1.9.0",\n  "productName": "My Launcher",\n  "description": "Launcher to access My Server",\n  "author": "Daniel Scalzi (https://github.com/dscalzi/) + yourname",\n  "license": "UNLICENSED",\n  "homepage": "https://github.com/pseudogithub/mylauncher",\n  "bugs": {\n    "url": "https://github.com/pseudogithub/mylauncher/issues"\n  },\n  "private": true,\n  "main": "index.js",\n  "scripts": {\n    "start": "electron .",\n    "dist": "electron-builder build",\n    "dist:win": "npm run dist -- -w",\n    "dist:mac": "npm run dist -- -m",\n    "dist:linux": "npm run dist -- -l",\n    "lint": "eslint --config .eslintrc.json ."\n  },\n  "engines": {\n    "node": "16.x.x"\n  },\n  "dependencies": {\n    "@electron/remote": "^2.0.8",\n    "adm-zip": "^0.5.9",\n    "async": "^3.2.4",\n    "discord-rpc-patch": "^4.0.1",\n    "ejs": "^3.1.8",\n    "ejs-electron": "^2.1.1",\n    "electron-updater": "^5.3.0",\n    "fs-extra": "^10.1.0",\n    "github-syntax-dark": "^0.5.0",\n    "got": "^11.8.5",\n    "helios-core": "~0.1.2",\n    "jquery": "^3.6.1",\n    "node-disk-info": "^1.3.0",\n    "node-stream-zip": "^1.15.0",\n    "request": "^2.88.2",\n    "semver": "^7.3.8",\n    "tar-fs": "^2.1.1",\n    "winreg": "^1.2.4"\n  },\n  "devDependencies": {\n    "electron": "^21.3.1",\n    "electron-builder": "^23.6.0",\n    "eslint": "^8.28.0"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/pseudogithub/mylauncher.git"\n  }\n}\n')),(0,r.kt)("p",null,"Once the change is made, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i")," in a Terminal (Terminal --\x3e New Terminal)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Each time you modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, you will have to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i")," command again.")),(0,r.kt)("h3",{id:"change-the-name-of-the-launcher"},"Change the name of the launcher"),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"app/frame.ejs"),' and around line 16, change "Helios Launcher" to the name of your launcher.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'{3,4} title="app/frame.ejs"',"{3,4}":!0,title:'"app/frame.ejs"'},'            <div id="frameContentWin">\n                <div id="frameTitleDock">\n-                <span id="frameTitleText">Helios Launcher</span>\n+                <span id="frameTitleText">My Launcher</span>\n                </div>\n                <div id="frameButtonDockWin">`\n')),(0,r.kt)("p",null,"Then under ",(0,r.kt)("inlineCode",{parentName:"p"},"app/app.ejs"),", change the text in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/app.ejs" {3,4}',title:'"app/app.ejs"',"{3,4}":!0},'<head>\n    <meta charset="utf-8" http-equiv="Content-Security-Policy" content="script-src \'self\' \'sha256-In6B8teKZQll5heMl9bS7CESTbGvuAt3VVV86BUQBDk=\'"/>\n-    <title>Helios Launcher</title>\n+    <title>My Launcher</title>\n    <script src="./assets/js/scripts/uicore.js"><\/script>\n    <script src="./assets/js/scripts/uibinder.js"><\/script>\n')),(0,r.kt)("h3",{id:"change-logos"},"Change logos"),(0,r.kt)("p",null,"On GitHub Desktop, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository --\x3e Show in explorer"),"\nOpen the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"app/assets/images/"),". SealCircle.png is the logo in the background of the loading page.\nFinally, go back to the root of your launcher, under ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),", replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"icon.png")," logo by your logo."),(0,r.kt)("h3",{id:"change-the-welcome-text"},"Change the welcome text"),(0,r.kt)("p",null,"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"app/welcome.ejs"),", change the welcome text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/welcome.ejs {3-6,8,9,12,13}"',title:'"app/welcome.ejs','{3-6,8,9,12,13}"':!0},'    <div id="welcomeContent">\n        <img id="welcomeImageSeal" src="assets/images/SealCircle.png"/>\n-        <span id="welcomeHeader">WELCOME TO WESTEROSCRAFT</span>\n+        <span id="welcomeHeader">WELCOME TO MY SERVER</span>\n-        <span id="welcomeDescription">Our mission is to recreate the universe imagined by author George RR Martin in his fantasy series, A Song of Ice and Fire.  Through the collaborative effort of thousands of community members, we have sought to create Westeros as accurately and precisely as possible within Minecraft.  The world we are creating is yours to explore.  Journey from Dorne to Castle Black, and if you aren\u2019t afraid, beyond the Wall itself, but best not delay.  As the words of House Stark ominously warn: Winter is Coming.</span>\n+        <span id="welcomeDescription">We wish you a good time on the server</span>\n        <br>\n-        <span id="welcomeDescCTA">You are just a few clicks away from Westeros.</span>\n+        <span id="welcomeDescCTA">Get ready for an unforgettable adventure.</span>\n        <button id="welcomeButton">\n            <div id="welcomeButtonContent">\n                CONTINUE\n                <svg id="welcomeSVG" viewBox="0 0 24.87 13.97">\n                    <defs>\n')),(0,r.kt)("h3",{id:"change-the-launcher-data-folder"},"Change the launcher data folder"),(0,r.kt)("p",null,'By default, Helios launcher will store its data in the ".helioslauncher" folder located at the following location:'),(0,r.kt)(k,{defaultValue:"windows",groupId:"operating-systems",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(y,{value:"windows",mdxType:"TabItem"},(0,r.kt)("code",null,"%APPDATA%\\.helioslauncher\\")),(0,r.kt)(y,{value:"macos",mdxType:"TabItem"},(0,r.kt)("code",null,"~/Library/Application Support/.helioslauncher/")),(0,r.kt)(y,{value:"linux",mdxType:"TabItem"},(0,r.kt)("code",null,"~/.helioslauncher/"))),"To change this, just change one line in `app/assets/js/configmanager.js`",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/assets/js/configmanager.js" {3,4}',title:'"app/assets/js/configmanager.js"',"{3,4}":!0},"const sysRoot = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME)\n// TODO change\n- const dataPath = path.join(sysRoot, '.helioslauncher')\n+ const dataPath = path.join(sysRoot, '.mylauncher')\n\n// Forked processes do not have access to electron, so we have this workaround.\n")),(0,r.kt)("p",null,"If you have already launched your launcher, you will have to delete the folder with the name of your launcher, as below"),(0,r.kt)(k,{groupId:"operating-systems",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(y,{value:"windows",mdxType:"TabItem"},(0,r.kt)("code",null,"%APPDATA%\\My Launcher\\")),(0,r.kt)(y,{value:"macos",mdxType:"TabItem"},(0,r.kt)("code",null,"~/Library/Application Support/My Launcher/")),(0,r.kt)(y,{value:"linux",mdxType:"TabItem"},(0,r.kt)("code",null,"$XDG_CONFIG_HOME/Helios Launcher/")," or ",(0,r.kt)("code",null,"~/.config/Helios Launcher/"))),(0,r.kt)("h2",{id:"test-the-changes"},"Test the changes"),(0,r.kt)("p",null,"Launch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm start\n")),(0,r.kt)("p",null,"and see if the changes are applied"),(0,r.kt)("h2",{id:"send-changes-to-github"},"Send changes to GitHub"),(0,r.kt)("p",null,"Go back to GitHub Desktop, and fill in the form at the bottom left, indicating what changes you've made (or not, but that's basically what these fields are for), then press ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit to master"),". Then press ",(0,r.kt)("inlineCode",{parentName:"p"},"Push origin")," at the top."))}x.isMDXComponent=!0}}]);