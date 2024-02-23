"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[7],{7649:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>L,contentTitle:()=>T,default:()=>I,frontMatter:()=>D,metadata:()=>V,toc:()=>H});var a=r(3274),t=r(8124),i=r(9474),s=r(8923),o=r(9379),l=r(241),d=r(5398),c=r(4244),u=r(2893),h=r(1911);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,t=m(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[l,c]=j({queryString:r,groupId:a}),[u,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,h.Dv)(r);return[a,(0,i.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),v=(()=>{const e=l??u;return g({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),p(e)}),[c,p,t]),tabValues:t}}var x=r(6158);const b={tabList:"tabList_lxD4",tabItem:"tabItem_hP6a"};function f(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=d.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=v(e);return(0,a.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,a.jsx)(f,{...e,...n}),(0,a.jsx)(w,{...e,...n})]})}function y(e){const n=(0,x.A)();return(0,a.jsx)(k,{...e,children:p(e.children)},String(n))}const z={tabItem:"tabItem_WTRM"};function S(e){let{children:n,hidden:r,className:t}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(z.tabItem,t),hidden:r,children:n})}const D={title:"Deel 1 - Introductie"},T=void 0,V={id:"p1",title:"Deel 1 - Introductie",description:"Introductie",source:"@site/i18n/nl/docusaurus-plugin-content-docs/version-Helios/p1.mdx",sourceDirName:".",slug:"/p1",permalink:"/nl/docs/helios/p1",draft:!1,unlisted:!1,editUrl:"https://github.com/geekcornergh/docs/edit/master/versioned_docs/version-Helios/p1.mdx",tags:[],version:"Helios",frontMatter:{title:"Deel 1 - Introductie"},sidebar:"tutorialSidebar",previous:{title:"Welkom",permalink:"/nl/docs/helios/intro"},next:{title:"Deel 2 - Het laadscherm, en het inlogscherm",permalink:"/nl/docs/helios/p2"}},L={},H=[{value:"Introductie",id:"introductie",level:2},{value:"Video",id:"video",level:2},{value:"Licentie",id:"licentie",level:2},{value:"Aan de slag: de Helios Launcher fork maken",id:"aan-de-slag-de-helios-launcher-fork-maken",level:2},{value:"Verander de launcher naam op GitHub",id:"verander-de-launcher-naam-op-github",level:2},{value:"Installeer deze programma&#39;s om de broncode te wijzigen",id:"installeer-deze-programmas-om-de-broncode-te-wijzigen",level:2},{value:"Node.JS",id:"nodejs",level:3},{value:"GitHub Desktop",id:"github-desktop",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Download de fork",id:"download-de-fork",level:2},{value:"Wijzig de fork",id:"wijzig-de-fork",level:2},{value:"Bewerk de launcher metadata",id:"bewerk-de-launcher-metadata",level:3},{value:"Verander de naam van de launcher",id:"verander-de-naam-van-de-launcher",level:3},{value:"Verander logo&#39;s",id:"verander-logos",level:3},{value:"Change the welcome text",id:"change-the-welcome-text",level:3},{value:"Verander de launcher data folder",id:"verander-de-launcher-data-folder",level:3},{value:"Test de veranderingen",id:"test-de-veranderingen",level:2},{value:"Stuur wijzigingen naar GitHub",id:"stuur-wijzigingen-naar-github",level:2}];function A(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introductie",children:"Introductie"}),"\n",(0,a.jsx)(n.p,{children:"Voor deze eerste tutorial gewijd aan de ontwikkeling van de Helios Launcher, zullen we de welkomstpagina aanpassen, het logo, de naam van de map waar de gegevens worden opgeslagen en de naam van de launcher. We zullen ook de Helios Launcher fork aanmaken en de software installeren die nodig is om de Helios Launcher goed te ontwikkelen."}),"\n",(0,a.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,a.jsxs)(n.p,{children:["Deze tutorial is gebaseerd op de video die u hieronder kunt bekijken (",(0,a.jsx)(n.strong,{children:"in het Frans"}),"):"]}),"\n",(0,a.jsx)("iframe",{width:"713",height:"412",src:"https://www.youtube-nocookie.com/embed/YeLf8wJVlVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,a.jsx)(n.h2,{id:"licentie",children:"Licentie"}),"\n",(0,a.jsxs)(n.p,{children:["Er was een tijd dat de launcher onder aangepaste licentie was, nu is het beschikbaar onder ",(0,a.jsx)("a",{href:"https://fr.wikipedia.org/wiki/Licence_MIT",target:"_blank",children:"MIT Licentie"})]}),"\n",(0,a.jsx)(n.h2,{id:"aan-de-slag-de-helios-launcher-fork-maken",children:"Aan de slag: de Helios Launcher fork maken"}),"\n",(0,a.jsxs)(n.p,{children:["Begin met het aanmaken van een ",(0,a.jsx)("a",{href:"https://github.com/join",target:"_BLANK",children:"GitHub-account"}),", ga dan naar de ",(0,a.jsx)("a",{href:"https://github.com/dscalzi/helioslauncher",children:"projectpagina"}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/helios-p1/Fork.jpg",width:"70%"}),"\n",(0,a.jsxs)(n.p,{children:["U klikt dan op de ",(0,a.jsx)(n.code,{children:"Fork"})," knop."]}),"\n",(0,a.jsx)("img",{src:"/img/helios-p1/Fork-2.jpg",width:"70%"}),"\n",(0,a.jsx)(n.p,{children:"Wacht even tot GitHub de Helios Launcher repo naar u account heeft gekloond.\nDeze stap zou niet meer dan 1 minuut moeten duren.\nDus we kunnen verder."}),"\n",(0,a.jsx)(n.h2,{id:"verander-de-launcher-naam-op-github",children:"Verander de launcher naam op GitHub"}),"\n",(0,a.jsx)(n.p,{children:"We gaan de naam van de GitHub fork veranderen, omdat we niet per se allemaal willen dat het HeliosLauncher heet.\nOm dit te voorkomen ga u naar de instellingen van u archief:"}),"\n",(0,a.jsx)("img",{src:"/img/helios-p1/settings.jpg",width:"70%"}),"\n",(0,a.jsx)(n.p,{children:"U kunt de naam van uw launcher veranderen door te klikken op Rename"}),"\n",(0,a.jsx)("img",{src:"/img/helios-p1/rename.jpg",width:"70%"}),"\n",(0,a.jsx)(n.h2,{id:"installeer-deze-programmas-om-de-broncode-te-wijzigen",children:"Installeer deze programma's om de broncode te wijzigen"}),"\n",(0,a.jsx)(n.p,{children:"We zullen 3 programma's moeten gebruiken:"}),"\n",(0,a.jsx)(n.h3,{id:"nodejs",children:"Node.JS"}),"\n",(0,a.jsxs)(n.p,{children:["Deze software wordt gebruikt om de Launcher-code uit te voeren. Het is voor de launcher wat de motor is voor de auto.\nGa om het te downloaden naar ",(0,a.jsx)("a",{href:"https://nodejs.org",target:"_BLANK",children:"de offici\xeble website"})," en download de laatste LTS-versie voor uw computer."]}),"\n",(0,a.jsx)(n.h3,{id:"github-desktop",children:"GitHub Desktop"}),"\n",(0,a.jsxs)(n.p,{children:['Het zal worden gebruikt om de wijzigingen op GitHub te "pushen". Ga naar ',(0,a.jsx)("a",{href:"https://desktop.github.com",target:"_BLANK",children:"deze website"})," om het te downloaden. U moet dan inloggen op GitHub."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Desgewenst kun u een andere Git client gebruiken, zoals ",(0,a.jsx)("a",{href:"https://git-scm.com",target:"_blank",children:"Git"}),", ",(0,a.jsx)("a",{href:"https://www.gitkraken.com/",children:"GitKraken"}),", of ",(0,a.jsx)("a",{href:"https://www.sourcetreeapp.com/",children:"Sourcetree"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,a.jsxs)(n.p,{children:["Het wordt gebruikt om de broncode van onze launcher aan te passen. U kunt het gratis downloaden van ",(0,a.jsx)("a",{href:"https://code.visualstudio.com",target:"_BLANK",children:"Microsoft's website"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Mocht u liever een andere code editor gebruiken, zoals ",(0,a.jsx)("a",{href:"https://www.sublimetext.com",children:"Sublime Text"})," of ",(0,a.jsx)("a",{href:"https://www.jetbrains.com/webstorm/",children:"WebStorm"}),", voel u vrij."]})}),"\n",(0,a.jsx)(n.h2,{id:"download-de-fork",children:"Download de fork"}),"\n",(0,a.jsxs)(n.p,{children:["We hebben onze fork gemaakt, maar we moeten hem lokaal downloaden, dus we zullen GitHub Desktop gebruiken.\nStart de repository, log dan in als u dat nog niet gedaan hebt. Druk dan op de ",(0,a.jsx)(n.code,{children:"Clone a repository from the internet"})," knop en selecteer u fork.\nVerander de download locatie indien nodig. Druk dan op de ",(0,a.jsx)(n.code,{children:"Clone"})," knop"]}),"\n",(0,a.jsx)(n.p,{children:'Een popup zal u vragen hoe u uw vork wilt gebruiken. Antwoord met "Voor mijn eigen doeleinden (For my own purposes)" en valideer dan.'}),"\n",(0,a.jsx)("img",{src:"/img/helios-p1/usefork.jpg",width:"70%"}),"\n",(0,a.jsx)(n.h2,{id:"wijzig-de-fork",children:"Wijzig de fork"}),"\n",(0,a.jsx)(n.h3,{id:"bewerk-de-launcher-metadata",children:"Bewerk de launcher metadata"}),"\n",(0,a.jsxs)(n.p,{children:["Klik op ",(0,a.jsx)(n.code,{children:"Openen met Visual Studio Code"}),", open dan links het package.json bestand. Wijzig het naar wens. Hieronder staat een voorbeeld:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="package.json" showLineNumbers {2,3,4,5,6,8,10,52}',children:'{\n  "name": "mijnlauncher",\n  "version": "1.9.0",\n  "productName": "Mijn Launcher",\n  "description": "Launcher om op mijn server te komen",\n  "author": "Daniel Scalzi (https://github.com/dscalzi/) + uw naam",\n  "license": "UNLICENSED",\n  "homepage": "https://github.com/pseudogithub/mijnlauncher",\n  "bugs": {\n    "url": "https://github.com/pseudogithub/mijnlauncher/issues"\n  },\n  "private": true,\n  "main": "index.js",\n  "scripts": {\n    "start": "electron .",\n    "dist": "electron-builder build",\n    "dist:win": "npm run dist -- -w",\n    "dist:mac": "npm run dist -- -m",\n    "dist:linux": "npm run dist -- -l",\n    "lint": "eslint --config .eslintrc.json ."\n  },\n  "engines": {\n    "node": "16.x.x"\n  },\n  "dependencies": {\n    "@electron/remote": "^2.0.8",\n    "adm-zip": "^0.5.9",\n    "async": "^3.2.4",\n    "discord-rpc-patch": "^4.0.1",\n    "ejs": "^3.1.8",\n    "ejs-electron": "^2.1.1",\n    "electron-updater": "^5.3.0",\n    "fs-extra": "^10.1.0",\n    "github-syntax-dark": "^0.5.0",\n    "got": "^11.8.5",\n    "helios-core": "~0.1.2",\n    "jquery": "^3.6.1",\n    "node-disk-info": "^1.3.0",\n    "node-stream-zip": "^1.15.0",\n    "request": "^2.88.2",\n    "semver": "^7.3.8",\n    "tar-fs": "^2.1.1",\n    "winreg": "^1.2.4"\n  },\n  "devDependencies": {\n    "electron": "^21.3.1",\n    "electron-builder": "^23.6.0",\n    "eslint": "^8.28.0"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/pseudogithub/mijnlauncher.git"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Zodra de wijziging is gedaan, installeert u de dependencies via een Terminal-venster (Terminal --\x3e Nieuwe Terminal)"}),"\n",(0,a.jsxs)(y,{children:[(0,a.jsx)(S,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i\n"})})}),(0,a.jsx)(S,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,a.jsx)(S,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm i\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["Telkens wanneer u het bestand ",(0,a.jsx)(n.code,{children:"package.json"})," wijzigt, moet u de volgende command opnieuw uitvoeren:"]}),(0,a.jsxs)(y,{children:[(0,a.jsx)(S,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i\n"})})}),(0,a.jsx)(S,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,a.jsx)(S,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm i\n"})})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"verander-de-naam-van-de-launcher",children:"Verander de naam van de launcher"}),"\n",(0,a.jsxs)(n.p,{children:["Open ",(0,a.jsx)(n.code,{children:"app/frame.ejs"}),' en verander rond regel 16 "Helios Launcher" in de naam van u launcher.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'{3,4} title="app/frame.ejs"',children:'            <div id="frameContentWin">\n                <div id="frameTitleDock">\n-                <span id="frameTitleText">Helios Launcher</span>\n+                <span id="frameTitleText">Mijn Launcher</span>\n                </div>\n                <div id="frameButtonDockWin">`\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Verander dan onder ",(0,a.jsx)(n.code,{children:"app/app.ejs"})," de tekst in de ",(0,a.jsx)(n.code,{children:"<title>"})," tag:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="app/app.ejs" {3,4}',children:'<head>\n    <meta charset="utf-8" http-equiv="Content-Security-Policy" content="script-src \'self\' \'sha256-In6B8teKZQll5heMl9bS7CESTbGvuAt3VVV86BUQBDk=\'"/>\n-    <title>Helios Launcher</title>\n+    <title>Mijn Launcher</title>\n    <script src="./assets/js/scripts/uicore.js"><\/script>\n    <script src="./assets/js/scripts/uibinder.js"><\/script>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"verander-logos",children:"Verander logo's"}),"\n",(0,a.jsxs)(n.p,{children:["Op GitHub Desktop, klik op ",(0,a.jsx)(n.code,{children:"Repository --\x3e Toon in verkenner"}),".\nOpen de map ",(0,a.jsx)(n.code,{children:"app/assets/images/"}),". SealCircle.png is het logo op de achtergrond van de laadpagina.\nGa tenslotte terug naar de root van u launcher, onder ",(0,a.jsx)(n.code,{children:"build"}),", vervang het ",(0,a.jsx)(n.code,{children:"icon.png"})," logo door uw logo."]}),"\n",(0,a.jsx)(n.h3,{id:"change-the-welcome-text",children:"Change the welcome text"}),"\n",(0,a.jsxs)(n.p,{children:["Under ",(0,a.jsx)(n.code,{children:"app/welcome.ejs"}),", change the welcome text:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="app/welcome.ejs" {3-6,8,9,12,13}',children:'    <div id="welcomeContent">\n        <img id="welcomeImageSeal" src="assets/images/SealCircle.png"/>\n-        <span id="welcomeHeader">WELCOME TO WESTEROSCRAFT</span>\n+        <span id="welcomeHeader">WELKOM OP MIJN SERVER</span>\n-        <span id="welcomeDescription">Our mission is to recreate the universe imagined by author George RR Martin in his fantasy series, A Song of Ice and Fire.  Through the collaborative effort of thousands of community members, we have sought to create Westeros as accurately and precisely as possible within Minecraft.  The world we are creating is yours to explore.  Journey from Dorne to Castle Black, and if you aren\u2019t afraid, beyond the Wall itself, but best not delay.  As the words of House Stark ominously warn: Winter is Coming.</span>\n+        <span id="welcomeDescription">Wij wensen u een goede tijd op de server</span>\n        <br>\n-        <span id="welcomeDescCTA">You are just a few clicks away from Westeros.</span>\n+        <span id="welcomeDescCTA">Maak u klaar voor een onvergetelijk avontuur.</span>\n        <button id="welcomeButton">\n            <div id="welcomeButtonContent">\n-                CONTINUE\n+                DOORGAAN\n                <svg id="welcomeSVG" viewBox="0 0 24.87 13.97">\n                    <defs>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"verander-de-launcher-data-folder",children:"Verander de launcher data folder"}),"\n",(0,a.jsx)(n.p,{children:'Standaard zal Helios launcher zijn gegevens opslaan in de map ".helioslauncher" op de volgende locatie:'}),"\n",(0,a.jsxs)(y,{defaultValue:"windows",groupId:"operating-systems",children:[(0,a.jsx)(S,{value:"windows",label:"Windows",children:(0,a.jsx)("code",{children:"%APPDATA%.helioslauncher"})}),(0,a.jsx)(S,{value:"macos",label:"macOS",children:(0,a.jsx)("code",{children:"~/Library/Application Support/.helioslauncher"})}),(0,a.jsx)(S,{value:"linux",label:"Linux",children:(0,a.jsx)("code",{children:"~/.helioslauncher"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Om dit te veranderen, verander gewoon \xe9\xe9n regel in ",(0,a.jsx)(n.code,{children:"app/assets/js/configmanager.js"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="app/assets/js/configmanager.js" {3,4}',children:"const sysRoot = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME)\n// TODO change\n- const dataPath = path.join(sysRoot, '.helioslauncher')\n+ const dataPath = path.join(sysRoot, '.mijnlauncher')\n\n// Forked processes do not have access to electron, so we have this workaround.\n"})}),"\n",(0,a.jsx)(n.p,{children:"Als u u launcher al hebt gestart, moet u de map met de naam van u launcher verwijderen, zoals hieronder"}),"\n",(0,a.jsxs)(y,{defaultValue:"windows",groupId:"operating-systems",children:[(0,a.jsx)(S,{value:"windows",label:"Windows",children:(0,a.jsx)("code",{children:"%APPDATA%\\Mijn Launcher"})}),(0,a.jsx)(S,{value:"macos",label:"macOS",children:(0,a.jsx)("code",{children:"~/Library/Application Support/Mijn Launcher"})}),(0,a.jsxs)(S,{value:"linux",label:"Linux",children:[(0,a.jsx)("code",{children:"$XDG_CONFIG_HOME/Helios Launcher"})," or ",(0,a.jsx)("code",{children:"~/.config/Helios Launcher"})]})]}),"\n",(0,a.jsx)(n.h2,{id:"test-de-veranderingen",children:"Test de veranderingen"}),"\n",(0,a.jsx)(n.p,{children:"Start"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm start\n"})}),"\n",(0,a.jsx)(n.p,{children:"en kijk of de veranderingen zijn toegepast"}),"\n",(0,a.jsx)(n.h2,{id:"stuur-wijzigingen-naar-github",children:"Stuur wijzigingen naar GitHub"}),"\n",(0,a.jsxs)(n.p,{children:["Ga terug naar GitHub Desktop, en vul het formulier linksonder in, en geef aan welke veranderingen u gemaakt hebt (of niet, maar daar zijn deze velden in principe voor), en druk dan op ",(0,a.jsx)(n.code,{children:"Commit to master"}),". Druk dan op ",(0,a.jsx)(n.code,{children:"Push origin"})," bovenaan."]})]})}function I(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},8124:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var a=r(9474);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);