"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[73],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>z,frontMatter:()=>y,metadata:()=>C,toc:()=>T});var r=n(7161),o=n(9496),a=n(9613),i=n(5924),s=n(3442),l=n(6790),u=n(1977),c=n(6639),p=n(3331),d=n(7128);const m="tabList_HcZ5",h="tabItem_KcC8";function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.TH)(),a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1!==t){if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n}}({queryString:t,groupId:n});return{get:(0,o.useCallback)((()=>{if(i)return new URLSearchParams(r.search).get(i)}),[i,r.search]),set:(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.search);t.set(i,e),a.replace({...r,search:t.toString()})}),[i,a,r])}}function v(e){const{lazy:t,block:n,defaultValue:a,values:s,groupId:d,className:v,queryString:f=!1}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=g({queryString:f,groupId:d}),y=s??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),w=(0,l.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);if(null!=a&&!y.some((e=>e.value===a)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{ready:C,tabGroupChoices:N,setTabGroupChoices:T}=(0,c.U)(),j=void 0!==a?a:k.find((e=>e.props.default))?.props.value??k[0].props.value,[z,x]=(0,o.useState)(j),S=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)(),O=(0,u.zX)((()=>{if(C){const e=b.get()??(d&&N[d]);e&&y.some((t=>t.value===e))&&x(e)}}));(0,o.useEffect)((()=>{C&&O()}),[C,O]);const L=e=>{const t=e.currentTarget,n=S.indexOf(t),r=y[n].value;r!==z&&(E(t),x(r),b.set(r),null!=d&&T(d,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},v)},y.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>S.push(e),onKeyDown:I,onClick:L},a,{className:(0,i.Z)("tabs__item",h,a?.className,{"tabs__item--active":z===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function f(e){const t=(0,d.Z)();return o.createElement(v,(0,r.Z)({key:String(t)},e))}const k="tabItem_FhZX";function b(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(k,r),hidden:n},t)}const y={title:"Partie 1 - Les d\xe9buts"},w=void 0,C={unversionedId:"p1",id:"version-Helios/p1",title:"Partie 1 - Les d\xe9buts",description:"Introduction",source:"@site/versioned_docs/version-Helios/p1.mdx",sourceDirName:".",slug:"/p1",permalink:"/docs/helios/p1",draft:!1,unlisted:!1,editUrl:"https://github.com/geekcornergh/docs/edit/master/versioned_docs/version-Helios/p1.mdx",tags:[],version:"Helios",frontMatter:{title:"Partie 1 - Les d\xe9buts"},sidebar:"tutorialSidebar",previous:{title:"Bienvenue",permalink:"/docs/helios/intro"},next:{title:"Partie 2 - L'\xe9cran de chargement, et l'\xe9cran de connexion",permalink:"/docs/helios/p2"}},N={},T=[{value:"Introduction",id:"introduction",level:2},{value:"Video",id:"video",level:2},{value:"Licence",id:"licence",level:2},{value:"D\xe9buter: Cr\xe9er un fork du projet",id:"d\xe9buter-cr\xe9er-un-fork-du-projet",level:2},{value:"Changer le nom du launcher sur GitHub",id:"changer-le-nom-du-launcher-sur-github",level:2},{value:"Installer les programmes pour modifier le code source",id:"installer-les-programmes-pour-modifier-le-code-source",level:2},{value:"Node.JS",id:"nodejs",level:3},{value:"GitHub Desktop",id:"github-desktop",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"T\xe9l\xe9charger le fork",id:"t\xe9l\xe9charger-le-fork",level:2},{value:"Modifier le fork",id:"modifier-le-fork",level:2},{value:"Modifier les m\xe9tadonn\xe9es du launcher",id:"modifier-les-m\xe9tadonn\xe9es-du-launcher",level:3},{value:"Changer le nom du launcher",id:"changer-le-nom-du-launcher",level:3},{value:"Changer les logos",id:"changer-les-logos",level:3},{value:"Changer le texte de bienvenue",id:"changer-le-texte-de-bienvenue",level:3},{value:"Changer le dossier de donn\xe9es du launcher",id:"changer-le-dossier-de-donn\xe9es-du-launcher",level:3},{value:"Tester les modifications",id:"tester-les-modifications",level:2},{value:"Envoyer les modifications sur GitHub",id:"envoyer-les-modifications-sur-github",level:2}],j={toc:T};function z(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Pour ce premier tuto consacr\xe9 au d\xe9veloppement du Helios Launcher, nous allons modifier la page de bienvenue, changer le logo, le nom du dossier o\xf9 sont stock\xe9es les donn\xe9es et le nom du launcher. Nous allons aussi cr\xe9er le fork du Helios Launcher et installer les logiciels requis pour d\xe9velopper correctement le Helios Launcher."),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("p",null,"Ce tutoriel adapt\xe9 \xe0 partir de la vid\xe9o que vous pouvez regardez ci-dessous: "),(0,a.kt)("iframe",{width:"713",height:"412",src:"https://www.youtube-nocookie.com/embed/YeLf8wJVlVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"licence"},"Licence"),(0,a.kt)("p",null,"Il fut un temps o\xf9 le launcher \xe9tait sous licence personalis\xe9e, maintenant il est disponible sous ",(0,a.kt)("a",{href:"https://fr.wikipedia.org/wiki/Licence_MIT",target:"_blank"},"Licence MIT")),(0,a.kt)("h2",{id:"d\xe9buter-cr\xe9er-un-fork-du-projet"},"D\xe9buter: Cr\xe9er un fork du projet"),(0,a.kt)("p",null,"Commencez par cr\xe9er un ",(0,a.kt)("a",{href:"https://github.com/join",target:"_BLANK"},"compte GitHub"),", puis rendez-vous sur la ",(0,a.kt)("a",{href:"https://github.com/dscalzi/helioslauncher"},"page du projet"),".  "),(0,a.kt)("img",{src:"/img/helios-p1/Fork.jpg",width:"70%"}),(0,a.kt)("p",null,"Vous allez ensuite pouvoir cliquez sur le bouton ",(0,a.kt)("inlineCode",{parentName:"p"},"Fork"),"."),(0,a.kt)("img",{src:"/img/helios-p1/Fork-2.jpg",width:"70%"}),(0,a.kt)("p",null,"Attendez quelques instants le temps que GitHub clone le r\xe9po du Helios Launcher sur votre compte.\nCette \xe9tape ne devrait pas durer plus de 1 minute.\nNous allons donc pouvoir passer \xe0 la suite."),(0,a.kt)("h2",{id:"changer-le-nom-du-launcher-sur-github"},"Changer le nom du launcher sur GitHub"),(0,a.kt)("p",null,"Nous allons changer le nom du fork GitHub, car nous n'avons pas forc\xe9ment tous envie qu'il s'appelle HeliosLauncher\nPour \xe9viter cela, allez dans les r\xe9glages de votre r\xe9f\xe9rentiel:"),(0,a.kt)("img",{src:"/img/helios-p1/settings.jpg",width:"70%"}),(0,a.kt)("p",null,"Vous pourrez changer le nom de votre launcher puis cliquer sur Rename"),(0,a.kt)("img",{src:"/img/helios-p1/rename.jpg",width:"70%"}),(0,a.kt)("h2",{id:"installer-les-programmes-pour-modifier-le-code-source"},"Installer les programmes pour modifier le code source"),(0,a.kt)("p",null,"Nous allons devoir utiliser 3 programmes:"),(0,a.kt)("h3",{id:"nodejs"},"Node.JS"),(0,a.kt)("p",null,"Ce logiciel sert \xe0 executer le code du launcher. Il est au launcher ce qu'est le moteur \xe0 la voiture.\nPour le t\xe9l\xe9charger, rendez vous ",(0,a.kt)("a",{href:"https://nodejs.org",target:"_BLANK"},"le site officiel")," et t\xe9l\xe9chargez la derni\xe8re version LTS pour votre ordinateur."),(0,a.kt)("h3",{id:"github-desktop"},"GitHub Desktop"),(0,a.kt)("p",null,'Il servira \xe0 "pousser" les modifications sur GitHub. Rendez vous ',(0,a.kt)("a",{href:"https://desktop.github.com",target:"_BLANK"},"ici")," pour le t\xe9l\xe9chargez. Vous devrez ensuite vous connecter sur GitHub."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Si vous pr\xe9f\xe9rez, vous pouvez utiliser un autre client Git, comme ",(0,a.kt)("a",{href:"https://git-scm.com",target:"_blank"},"Git"),", ",(0,a.kt)("a",{href:"https://www.gitkraken.com/"},"GitKraken"),", ou ",(0,a.kt)("a",{href:"https://www.sourcetreeapp.com/"},"Sourcetree"),".")),(0,a.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,a.kt)("p",null,"Il sert \xe0 modifier le code source de notre launcher. Vous pouvez le t\xe9l\xe9charger gratuitement sur ",(0,a.kt)("a",{href:"https://code.visualstudio.com",target:"_BLANK"},"le site de Microsoft"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Si vous pr\xe9f\xe9rez utiliser un autre \xe9diteur de code comme ",(0,a.kt)("a",{href:"https://www.sublimetext.com"},"Sublime Text")," ou ",(0,a.kt)("a",{href:"https://www.jetbrains.com/webstorm/"},"WebStorm"),", sentez-vous libre.")),(0,a.kt)("h2",{id:"t\xe9l\xe9charger-le-fork"},"T\xe9l\xe9charger le fork"),(0,a.kt)("p",null,"Nous avons cr\xe9e notre fork, mais il faut le t\xe9l\xe9charger localement, donc nous allons utiliser GitHub Desktop.\nD\xe9marrez ce dernier, puis connectez-vous si ce n'est pas d\xe9j\xe0 fait. Ensuite, pressez le bouton ",(0,a.kt)("inlineCode",{parentName:"p"},"Clone a repository from the internet")," puis s\xe9l\xe9ctionnez votre fork.\nChangez \xe9ventuellement l'emplacement de t\xe9l\xe9chargement. Puis pressez le bouton ",(0,a.kt)("inlineCode",{parentName:"p"},"Clone")),(0,a.kt)("p",null,'Un popup vous demandera comment vous souhaitez utiliser votre fork. R\xe9pondez par "For my own purposes", puis validez.'),(0,a.kt)("img",{src:"/img/helios-p1/usefork.jpg",width:"70%"}),(0,a.kt)("h2",{id:"modifier-le-fork"},"Modifier le fork"),(0,a.kt)("h3",{id:"modifier-les-m\xe9tadonn\xe9es-du-launcher"},"Modifier les m\xe9tadonn\xe9es du launcher"),(0,a.kt)("p",null,"Cliquez sur ",(0,a.kt)("inlineCode",{parentName:"p"},"Open with Visual Studio Code"),", puis sur la gauche, ouvrez le fichier package.json. Modifiez-le pour qu'il corresponde \xe0 vos besoins. Ci-dessous, un exemple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" showLineNumbers {2,3,4,5,6,8,10,52}',title:'"package.json"',showLineNumbers:!0,"{2,3,4,5,6,8,10,52}":!0},'{\n  "name": "monlauncher",\n  "version": "1.9.0",\n  "productName": "Mon Launcher",\n  "description": "Launcher pour acc\xe9der \xe0 Mon Serveur",\n  "author": "Daniel Scalzi (https://github.com/dscalzi/) + votrenomici",\n  "license": "UNLICENSED",\n  "homepage": "https://github.com/pseudogithub/monlauncher",\n  "bugs": {\n    "url": "https://github.com/pseudogithub/monlauncher/issues"\n  },\n  "private": true,\n  "main": "index.js",\n  "scripts": {\n    "start": "electron .",\n    "dist": "electron-builder build",\n    "dist:win": "npm run dist -- -w",\n    "dist:mac": "npm run dist -- -m",\n    "dist:linux": "npm run dist -- -l",\n    "lint": "eslint --config .eslintrc.json ."\n  },\n  "engines": {\n    "node": "16.x.x"\n  },\n  "dependencies": {\n    "@electron/remote": "^2.0.8",\n    "adm-zip": "^0.5.9",\n    "async": "^3.2.4",\n    "discord-rpc-patch": "^4.0.1",\n    "ejs": "^3.1.8",\n    "ejs-electron": "^2.1.1",\n    "electron-updater": "^5.3.0",\n    "fs-extra": "^10.1.0",\n    "github-syntax-dark": "^0.5.0",\n    "got": "^11.8.5",\n    "helios-core": "~0.1.2",\n    "jquery": "^3.6.1",\n    "node-disk-info": "^1.3.0",\n    "node-stream-zip": "^1.15.0",\n    "request": "^2.88.2",\n    "semver": "^7.3.8",\n    "tar-fs": "^2.1.1",\n    "winreg": "^1.2.4"\n  },\n  "devDependencies": {\n    "electron": "^21.3.1",\n    "electron-builder": "^23.6.0",\n    "eslint": "^8.28.0"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/pseudogithub/monlauncher.git"\n  }\n}\n')),(0,a.kt)("p",null,"Une fois la modification effectu\xe9e, lancez ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i")," dans un Terminal (Terminal --\x3e Nouveau Terminal)"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Chaque fois que vous modifierez le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", vous devrez relancer la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i"),".")),(0,a.kt)("h3",{id:"changer-le-nom-du-launcher"},"Changer le nom du launcher"),(0,a.kt)("p",null,"Ouvrez ",(0,a.kt)("inlineCode",{parentName:"p"},"app/frame.ejs"),' puis aux alentours de la ligne 16, modifiez "Helios Launcher" par le nom de votre launcher.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'{3,4} title="app/frame.ejs"',"{3,4}":!0,title:'"app/frame.ejs"'},'            <div id="frameContentWin">\n                <div id="frameTitleDock">\n-                <span id="frameTitleText">Helios Launcher</span>\n+                <span id="frameTitleText">Mon Launcher</span>\n                </div>\n                <div id="frameButtonDockWin">`\n')),(0,a.kt)("p",null,"Puis sous ",(0,a.kt)("inlineCode",{parentName:"p"},"app/app.ejs"),", changer le texte dans la balise ",(0,a.kt)("inlineCode",{parentName:"p"},"<title>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/app.ejs" {3,4}',title:'"app/app.ejs"',"{3,4}":!0},'<head>\n    <meta charset="utf-8" http-equiv="Content-Security-Policy" content="script-src \'self\' \'sha256-In6B8teKZQll5heMl9bS7CESTbGvuAt3VVV86BUQBDk=\'"/>\n-    <title>Helios Launcher</title>\n+    <title>Mon Launcher</title>\n    <script src="./assets/js/scripts/uicore.js"><\/script>\n    <script src="./assets/js/scripts/uibinder.js"><\/script>\n')),(0,a.kt)("h3",{id:"changer-les-logos"},"Changer les logos"),(0,a.kt)("p",null,"Sur GitHub Desktop, cliquez sur ",(0,a.kt)("inlineCode",{parentName:"p"},"Repository --\x3e Show in explorer"),"\nOuvrez le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"app/assets/images/"),". SealCircle.png correspond au logo en arri\xe8re plan de la page de chargement.\nEnfin, retournez \xe0 la racine de votre launcher, sous ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),", remplacez le logo ",(0,a.kt)("inlineCode",{parentName:"p"},"icon.png")," par votre logo."),(0,a.kt)("h3",{id:"changer-le-texte-de-bienvenue"},"Changer le texte de bienvenue"),(0,a.kt)("p",null,"Sous ",(0,a.kt)("inlineCode",{parentName:"p"},"app/welcome.ejs"),", changez le texte de bienvenue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/welcome.ejs {3-6,8,9,12,13}"',title:'"app/welcome.ejs','{3-6,8,9,12,13}"':!0},'    <div id="welcomeContent">\n        <img id="welcomeImageSeal" src="assets/images/SealCircle.png"/>\n-        <span id="welcomeHeader">WELCOME TO WESTEROSCRAFT</span>\n+        <span id="welcomeHeader">BIENVENUE SUR MON SERVEUR</span>\n-        <span id="welcomeDescription">Our mission is to recreate the universe imagined by author George RR Martin in his fantasy series, A Song of Ice and Fire.  Through the collaborative effort of thousands of community members, we have sought to create Westeros as accurately and precisely as possible within Minecraft.  The world we are creating is yours to explore.  Journey from Dorne to Castle Black, and if you aren\u2019t afraid, beyond the Wall itself, but best not delay.  As the words of House Stark ominously warn: Winter is Coming.</span>\n+        <span id="welcomeDescription">Nous vous souhaitons de passer un bon moment sur le serveur</span>\n        <br>\n-        <span id="welcomeDescCTA">You are just a few clicks away from Westeros.</span>\n+        <span id="welcomeDescCTA">Soyez pr\xeat(e) \xe0 vivre une aventure inoubliable.</span>\n        <button id="welcomeButton">\n            <div id="welcomeButtonContent">\n-                CONTINUE\n+                CONTINUER\n                <svg id="welcomeSVG" viewBox="0 0 24.87 13.97">\n                    <defs>\n')),(0,a.kt)("h3",{id:"changer-le-dossier-de-donn\xe9es-du-launcher"},"Changer le dossier de donn\xe9es du launcher"),(0,a.kt)("p",null,'Par d\xe9faut, Helios launcher va stocker ses donn\xe9es dans le dossier ".helioslauncher" se trouvant \xe0 l\'emplacement suivant:'),(0,a.kt)(f,{defaultValue:"windows",groupId:"operating-systems",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(b,{value:"windows",mdxType:"TabItem"},(0,a.kt)("code",null,"%APPDATA%\\.helioslauncher\\")),(0,a.kt)(b,{value:"macos",mdxType:"TabItem"},(0,a.kt)("code",null,"~/Library/Application Support/.helioslauncher/")),(0,a.kt)(b,{value:"linux",mdxType:"TabItem"},(0,a.kt)("code",null,"~/.helioslauncher/"))),"Pour changer cel\xe0, il suffit de changer une ligne, dans `app/assets/js/configmanager.js`",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="app/assets/js/configmanager.js" {3,4}',title:'"app/assets/js/configmanager.js"',"{3,4}":!0},"const sysRoot = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME)\n// TODO change\n- const dataPath = path.join(sysRoot, '.helioslauncher')\n+ const dataPath = path.join(sysRoot, '.monlauncher')\n\n// Forked processes do not have access to electron, so we have this workaround.\n")),(0,a.kt)("p",null,"Si vous avez d\xe9j\xe0 lanc\xe9 votre launcher, vous devrez supprimer le dossier portant le nom de votre launcher, comme ci-dessous"),(0,a.kt)(f,{groupId:"operating-systems",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(b,{value:"windows",mdxType:"TabItem"},(0,a.kt)("code",null,"%APPDATA%\\Mon Launcher\\")),(0,a.kt)(b,{value:"macos",mdxType:"TabItem"},(0,a.kt)("code",null,"~/Library/Application Support/Mon Launcher/")),(0,a.kt)(b,{value:"linux",mdxType:"TabItem"},(0,a.kt)("code",null,"$XDG_CONFIG_HOME/Helios Launcher/")," ou ",(0,a.kt)("code",null,"~/.config/Helios Launcher/"))),(0,a.kt)("h2",{id:"tester-les-modifications"},"Tester les modifications"),(0,a.kt)("p",null,"Lancez"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm start\n")),(0,a.kt)("p",null,"et regardez si les changements sont appliqu\xe9s"),(0,a.kt)("h2",{id:"envoyer-les-modifications-sur-github"},"Envoyer les modifications sur GitHub"),(0,a.kt)("p",null,"Retournez sur GitHub Desktop, et remplissez en bas \xe0 gauche le formulaire, en indiquant les changements effectu\xe9s (ou pas, mais c'est \xe0 la base la raison d'\xeatre de ces champs), puis pressez ",(0,a.kt)("inlineCode",{parentName:"p"},"Commit to master"),". Ensuite, pressez en haut ",(0,a.kt)("inlineCode",{parentName:"p"},"Push origin"),"."))}z.isMDXComponent=!0}}]);