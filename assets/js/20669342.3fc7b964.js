"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[823],{8519:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(216),i=r(8875),a=r(3950),s=r(5456);const o={title:"Partie 2 - L'\xe9cran de chargement, et l'\xe9cran de connexion"},l=void 0,c={id:"p2",title:"Partie 2 - L'\xe9cran de chargement, et l'\xe9cran de connexion",description:"Introduction",source:"@site/versioned_docs/version-Helios/p2.mdx",sourceDirName:".",slug:"/p2",permalink:"/docs/helios/p2",draft:!1,unlisted:!1,editUrl:"https://github.com/geekcornergh/docs/edit/master/versioned_docs/version-Helios/p2.mdx",tags:[],version:"Helios",frontMatter:{title:"Partie 2 - L'\xe9cran de chargement, et l'\xe9cran de connexion"},sidebar:"tutorialSidebar",previous:{title:"Partie 1 - Les d\xe9buts",permalink:"/docs/helios/p1"},next:{title:"Partie 3 - L'\xe9cran d'accueil",permalink:"/docs/helios/p3"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Vid\xe9o",id:"vid\xe9o",level:2},{value:"Changement du logo de chargement",id:"changement-du-logo-de-chargement",level:2},{value:"Personalisation de l&#39;\xe9cran de connexion Mojang",id:"personalisation-de-l\xe9cran-de-connexion-mojang",level:2},{value:"Les images de l&#39;\xe9cran de chargement",id:"les-images-de-l\xe9cran-de-chargement",level:2},{value:"Tester les modifications",id:"tester-les-modifications",level:2},{value:"Envoyer les modifications sur GitHub",id:"envoyer-les-modifications-sur-github",level:2}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Depuis l'enregistrement de la vid\xe9o, la connexion via Microsoft est arriv\xe9.\nRetrouvez les d\xe9tails pour configurer cette \xe9tape en partie 4 (arrive bient\xf4t)"})}),"\n",(0,t.jsx)(n.h2,{id:"vid\xe9o",children:"Vid\xe9o"}),"\n",(0,t.jsx)(n.p,{children:"Ce tutoriel est bas\xe9 sur la vid\xe9o ci-dessous"}),"\n",(0,t.jsx)("iframe",{width:"713",height:"412",src:"https://www.youtube-nocookie.com/embed/WeCx3j1IglE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"changement-du-logo-de-chargement",children:"Changement du logo de chargement"}),"\n",(0,t.jsxs)(n.p,{children:["Sous GitHub Desktop, allez sour ",(0,t.jsx)(n.code,{children:"Repository--\x3eShow in Explorer"}),". Naviguez ensuite dans ",(0,t.jsx)(n.code,{children:"app/assets/images"}),". ",(0,t.jsx)(n.code,{children:"LoadingSeal.png"})," sera l'image qui restera en fond, tandis que ",(0,t.jsx)(n.code,{children:"LoadingText.png"})," sera l'image qui tourne. Assurez-vous que vos images soient au format carr\xe9, afin d'\xe9viter que le design du launcher rencontre des probl\xe8mes au niveau du design.",(0,t.jsx)(n.br,{}),"\n","Remplacez donc les 2 images susmentionn\xe9es, par les votres, c'est aussi simple que cel\xe0"]}),"\n",(0,t.jsx)(n.h2,{id:"personalisation-de-l\xe9cran-de-connexion-mojang",children:"Personalisation de l'\xe9cran de connexion Mojang"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"La connexion via Mojang n'est propos\xe9e qu'\xe0 des fins de r\xe9trocompatibilit\xe9."})}),"\n",(0,t.jsxs)(n.p,{children:["Sous ",(0,t.jsx)(n.code,{children:"app/login.ejs"}),", vous allez pouvoir personnaliser comme ci-dessous:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ejs",metastring:"showLineNumbers {5,11,18,19,27,28,32,36,42,59,60}",children:'<div id="loginContainer" style="display: none;">\n    <div id="loginCancelContainer" style="display: none;">\n        <button id="loginCancelButton">\n            <div id="loginCancelIcon">X</div>\n            <span id="loginCancelText">Annuler</span>\n        </button>\n    </div>\n    <div id="loginContent">\n        <form id="loginForm">\n            <img id="loginImageSeal" src="assets/images/SealCircle.png"/>\n            <span id="loginSubheader">CONNEXION VIA MOJANG</span>\n            <div class="loginFieldContainer">\n                <svg id="profileSVG" class="loginSVG" viewBox="40 37 65.36 61.43">\n                    <g>\n                        <path d="M86.77,58.12A13.79,13.79,0,1,0,73,71.91,13.79,13.79,0,0,0,86.77,58.12M97,103.67a3.41,3.41,0,0,0,3.39-3.84,27.57,27.57,0,0,0-54.61,0,3.41,3.41,0,0,0,3.39,3.84Z"/>\n                    </g>\n                </svg>\n                <span class="loginErrorSpan" id="loginEmailError">* Valeur invalide</span>\n                <input id="loginUsername" class="loginField" type="text" placeholder="EMAIL OU NOM D\'UTILISATEUR"/>\n            </div>\n            <div class="loginFieldContainer">\n                <svg id="lockSVG" class="loginSVG" viewBox="40 32 60.36 70.43">\n                    <g>\n                        <path d="M86.16,54a16.38,16.38,0,1,0-32,0H44V102.7H96V54Zm-25.9-3.39a9.89,9.89,0,1,1,19.77,0A9.78,9.78,0,0,1,79.39,54H60.89A9.78,9.78,0,0,1,60.26,50.59ZM70,96.2a6.5,6.5,0,0,1-6.5-6.5,6.39,6.39,0,0,1,3.1-5.4V67h6.5V84.11a6.42,6.42,0,0,1,3.39,5.6A6.5,6.5,0,0,1,70,96.2Z"/>\n                    </g>\n                </svg>\n                <span class="loginErrorSpan" id="loginPasswordError">* Requis</span>\n                <input id="loginPassword" class="loginField" type="password" placeholder="MOT DE PASSE"/>\n            </div>\n            <div id="loginOptions">\n                <span class="loginSpanDim">\n                    <a href="https://minecraft.net/password/forgot/">mot de passe oubli\xe9?</a>\n                </span>\n                <label id="checkmarkContainer">\n                    <input id="loginRememberOption" type="checkbox" checked>\n                    <span id="loginRememberText" class="loginSpanDim">rester connect\xe9?</span>\n                    <span class="loginCheckmark"></span>\n                </label>\n            </div>\n            <button id="loginButton" disabled>\n                <div id="loginButtonContent">\n                    CONNEXION\n                    <svg id="loginSVG" viewBox="0 0 24.87 13.97">\n                        <defs>\n                            <style>.arrowLine{fill:none;stroke:#FFF;stroke-width:2px;transition: 0.25s ease;}</style>\n                        </defs>\n                        <polyline class="arrowLine" points="0.71 13.26 12.56 1.41 24.16 13.02"/>\n                    </svg>\n                    <div class="circle-loader">\n                        <div class="checkmark draw"></div>\n                    </div>\n                    \x3c!--<div class="spinningCircle" id="loginSpinner"></div>--\x3e\n                </div>\n            </button>\n            <div id="loginDisclaimer">\n                <span class="loginSpanDim" id="loginRegisterSpan">\n                    <a href="https://minecraft.net/store/minecraft-java-edition/">Vous n\'avez pas de compte Minecraft?</a>\n                </span>\n                <p class="loginDisclaimerText">Votre mot de passe est directement envoy\xe9 de manni\xe8re s\xe9curis\xe9e sur les serveurs de Mojang, sans interm\xe9diaire.</p>\n                <p class="loginDisclaimerText">Mon Launcher n\'est pas affili\xe9 avec Mojang Studios.</p>\n            </div>\n        </form>\n    </div>\n    <script src="./assets/js/scripts/login.js"><\/script>\n</div>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Rendez-vous ensuite dans ",(0,t.jsx)(n.code,{children:"app/assets/lang/en_US.json"})," puis traduisez selon vos besoins"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {3,8,9,11,12,15,16,19,20,23,24,27,28,31,32,35,38-41,45}",children:'{\n    "html": {\n        "avatarOverlay": "Modifier"\n    },\n    "js": {\n        "login": {\n            "error": {\n                "invalidValue": "* Valeur invalide",\n                "requiredValue": "* Requis",\n                "userMigrated": {\n                    "title": "Erreur durant la connexion:<br>Identifiants invalides",\n                    "desc": "Vous avez essay\xe9 de vous connecter avec un compte migr\xe9 vers Mojang. Essayez de vous connecter avec l\'email \xe0 la place du nom d\'utilisateur."\n                },\n                "invalidCredentials": {\n                    "title": "Erreur durant la connexion:<br>Identifiants invalides",\n                    "desc": "L\'e-mail ou le mot de passe que vous avez entr\xe9 est incorrect. Veuillez r\xe9essayer."\n                },\n                "rateLimit": {\n                   "title": "Erreur lors de la connexion:<br>Trop de tentatives",\n                    "desc": "Il y a eu trop de tentatives de connexion avec ce compte r\xe9cemment. Veuillez r\xe9essayer plus tard."\n                },\n                "noInternet": {\n                    "title": "Erreur lors de la connexion:<br>Pas de connexion Internet",\n                    "desc": "Vous devez \xeatre connect\xe9 \xe0 Internet pour vous connecter. Veuillez vous connecter et r\xe9essayer."\n                },\n                "authDown": {\n                    "title": "Erreur lors de la connexion:<br>Serveur d\'authentification hors ligne",\n                    "desc": "Le serveur d\'authentification de Mojang est actuellement hors ligne ou inaccessible. Veuillez patienter un peu et r\xe9essayer."\n                },\n                "notPaid": {\n                    "title": "Erreur lors de la connexion:<br>Jeu non achet\xe9",\n                    "desc": "Le compte avec lequel vous essayez de vous connecter n\'a pas achet\xe9 de copie de Minecraft.<br>Vous pouvez acheter une copie sur <a href=\\"https://minecraft.net/\\">Minecraft.net</a>."\n                },\n                "unknown": {\n                    "title": "Erreur lors de la connexion:<br>Erreur inconnue"\n                }\n            },\n            "login": "CONNEXION",\n            "loggingIn": "CONNEXION EN COURS",\n            "success": "CONNECT\xc9",\n            "tryAgain": "Veuillez r\xe9essayer"\n        },\n        "landing": {\n            "launch": {\n                "pleaseWait": "Veuillez patienter..."\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Lors de l'enregistrement de la vid\xe9o, j'avais une extension qui corrigait le texte entr\xe9, ce qui explique que mon fichier \xe9tait rempli d'erreurs. Normalement, le fichier devrait \xeatre valide quand m\xeame."})}),"\n",(0,t.jsx)(n.h2,{id:"les-images-de-l\xe9cran-de-chargement",children:"Les images de l'\xe9cran de chargement"}),"\n",(0,t.jsxs)(n.p,{children:["Dans GitHub Desktop, pressez Repository--\x3eShow in explorer.\nOuvrez ensuite le dossier ",(0,t.jsx)(n.code,{children:"app/assets/images"}),". Vous avez 2 fichiers: ",(0,t.jsx)(n.code,{children:"LoadingSeal.png"})," et ",(0,t.jsx)(n.code,{children:"LoadingText.png"}),". La premi\xe8re image servira de fond fixe \xe0 la 2\xe8me qui quand \xe0 elle tournera.\nAfin de mettre \xe0 bien cette \xe9tape, il vous suffit juste de supprimer les 2 images et de les remplacer par celles de votre choix.\nSi vous souhaitez supprimer LoadingText.png, vous pouvez t\xe9l\xe9charger ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(6819).A+"",children:"cette image"})," (faites clic droit---\x3e",(0,t.jsx)(n.code,{children:"Enregistrer l'image sous"})," si l'image ne se t\xe9l\xe9charge pas toute seule quand vous ouvrez le lien)."]}),"\n",(0,t.jsx)(n.h2,{id:"tester-les-modifications",children:"Tester les modifications"}),"\n",(0,t.jsx)(n.p,{children:"Lancez"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(s.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm start\n"})})}),(0,t.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})})}),(0,t.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm start\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Si vous pouvez toujours vous connecter via Mojang, vous pouvez vous connecter au launcher. Sinon, on verra comment configurer Microsoft en partie 4."}),"\n",(0,t.jsx)(n.h2,{id:"envoyer-les-modifications-sur-github",children:"Envoyer les modifications sur GitHub"}),"\n",(0,t.jsxs)(n.p,{children:["Retournez sur GitHub Desktop, et remplissez en bas \xe0 gauche le formulaire, en indiquant les changements effectu\xe9s (ou pas, mais c'est \xe0 la base la raison d'\xeatre de ces champs), puis pressez ",(0,t.jsx)(n.code,{children:"Commit to master"}),". Ensuite, pressez en haut ",(0,t.jsx)(n.code,{children:"Push origin"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8875:(e,n,r)=>{r.d(n,{RP:()=>c});var t=r(6372);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(g,s(s({ref:n},d),{},{components:r})):t.createElement(g,s({ref:n},d))}));d.displayName="MDXCreateElement"},5456:(e,n,r)=>{r.d(n,{A:()=>s});r(6372);var t=r(3394);const i={tabItem:"tabItem_fpJe"};var a=r(216);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},3950:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6372),i=r(3394),a=r(5251),s=r(9551),o=r(4678),l=r(8612),c=r(8541),u=r(2967);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=g({queryString:r,groupId:i}),[h,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),f=(()=>{const e=c??h;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(9646);const f={tabList:"tabList_jJGg",tabItem:"tabItem_IQ0O"};var b=r(216);function x(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),i=o[r].value;i!==t&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=h(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},6819:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/files/LoadingText-813044b737c569b1b051633fc2435d82.png"}}]);