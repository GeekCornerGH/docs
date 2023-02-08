"use strict";(self.webpackChunkgeek_docs=self.webpackChunkgeek_docs||[]).push([[115],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=i,v=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return t?a.createElement(v,o(o({ref:n},c),{},{components:t})):a.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7161),i=(t(9496),t(9613));const r={title:"Deel 2 - Het laadscherm, en het inlogscherm"},o=void 0,l={unversionedId:"p2",id:"version-Helios/p2",title:"Deel 2 - Het laadscherm, en het inlogscherm",description:"Introductie",source:"@site/i18n/nl/docusaurus-plugin-content-docs/version-Helios/p2.mdx",sourceDirName:".",slug:"/p2",permalink:"/nl/docs/helios/p2",draft:!1,unlisted:!1,editUrl:"https://github.com/geekcornergh/docs/edit/master/versioned_docs/version-Helios/p2.mdx",tags:[],version:"Helios",frontMatter:{title:"Deel 2 - Het laadscherm, en het inlogscherm"},sidebar:"tutorialSidebar",previous:{title:"Deel 1 - Introductie",permalink:"/nl/docs/helios/p1"},next:{title:"Deel 3 - Het beginscherm",permalink:"/nl/docs/helios/p3"}},s={},d=[{value:"Introductie",id:"introductie",level:2},{value:"Video",id:"video",level:2},{value:"Het veranderen van het laadlogo",id:"het-veranderen-van-het-laadlogo",level:2},{value:"Mojang login scherm aanpassing",id:"mojang-login-scherm-aanpassing",level:2},{value:"De beelden van het laadscherm",id:"de-beelden-van-het-laadscherm",level:2},{value:"Test de veranderingen",id:"test-de-veranderingen",level:2},{value:"Stuur wijzigingen naar GitHub",id:"stuur-wijzigingen-naar-github",level:2}],c={toc:d};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introductie"},"Introductie"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Sinds de opname van de video is de verbinding via Microsoft aangekomen.\nDe details om deze stap te configureren vindt u in deel 4 (verschijnt binnenkort)")),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("p",null,"Deze handleiding is gebaseerd op de onderstaande video (",(0,i.kt)("strong",{parentName:"p"},"in het Frans"),")"),(0,i.kt)("iframe",{width:"713",height:"412",src:"https://www.youtube-nocookie.com/embed/WeCx3j1IglE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"het-veranderen-van-het-laadlogo"},"Het veranderen van het laadlogo"),(0,i.kt)("p",null,"Onder GitHub Desktop, ga naar ",(0,i.kt)("inlineCode",{parentName:"p"},"Repository--\x3eToon in Verkenner"),". Navigeer dan naar ",(0,i.kt)("inlineCode",{parentName:"p"},"app/assets/images"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadingSeal.png")," zal de afbeelding zijn die op de achtergrond blijft, terwijl ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadingText.png")," de afbeelding zal zijn die draait. Zorg ervoor dat u afbeeldingen in vierkant formaat zijn, zodat het ontwerp van de launcher niet op problemen stuit.",(0,i.kt)("br",{parentName:"p"}),"\n","Vervang de 2 bovenstaande foto's door de uwe, zo simpel is het."),(0,i.kt)("h2",{id:"mojang-login-scherm-aanpassing"},"Mojang login scherm aanpassing"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"De verbinding via Mojang wordt alleen aangeboden voor achterwaartse compatibiliteit.")),(0,i.kt)("p",null,"Onder ",(0,i.kt)("inlineCode",{parentName:"p"},"app/login.ejs"),", kunt u zich aanpassen zoals hieronder (Dit voorbeeld is veranderd in het Frans):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers {5,11,18,19,27,28,32,36,42,59,60}",showLineNumbers:!0,"{5,11,18,19,27,28,32,36,42,59,60}":!0},'<div id="loginContainer" style="display: none;">\n    <div id="loginCancelContainer" style="display: none;">\n        <button id="loginCancelButton">\n            <div id="loginCancelIcon">X</div>\n            <span id="loginCancelText">Annuler</span>\n        </button>\n    </div>\n    <div id="loginContent">\n        <form id="loginForm">\n            <img id="loginImageSeal" src="assets/images/SealCircle.png"/>\n            <span id="loginSubheader">CONNEXION VIA MOJANG</span>\n            <div class="loginFieldContainer">\n                <svg id="profileSVG" class="loginSVG" viewBox="40 37 65.36 61.43">\n                    <g>\n                        <path d="M86.77,58.12A13.79,13.79,0,1,0,73,71.91,13.79,13.79,0,0,0,86.77,58.12M97,103.67a3.41,3.41,0,0,0,3.39-3.84,27.57,27.57,0,0,0-54.61,0,3.41,3.41,0,0,0,3.39,3.84Z"/>\n                    </g>\n                </svg>\n                <span class="loginErrorSpan" id="loginEmailError">* Valeur invalide</span>\n                <input id="loginUsername" class="loginField" type="text" placeholder="EMAIL OU NOM D\'UTILISATEUR"/>\n            </div>\n            <div class="loginFieldContainer">\n                <svg id="lockSVG" class="loginSVG" viewBox="40 32 60.36 70.43">\n                    <g>\n                        <path d="M86.16,54a16.38,16.38,0,1,0-32,0H44V102.7H96V54Zm-25.9-3.39a9.89,9.89,0,1,1,19.77,0A9.78,9.78,0,0,1,79.39,54H60.89A9.78,9.78,0,0,1,60.26,50.59ZM70,96.2a6.5,6.5,0,0,1-6.5-6.5,6.39,6.39,0,0,1,3.1-5.4V67h6.5V84.11a6.42,6.42,0,0,1,3.39,5.6A6.5,6.5,0,0,1,70,96.2Z"/>\n                    </g>\n                </svg>\n                <span class="loginErrorSpan" id="loginPasswordError">* Requis</span>\n                <input id="loginPassword" class="loginField" type="password" placeholder="MOT DE PASSE"/>\n            </div>\n            <div id="loginOptions">\n                <span class="loginSpanDim">\n                    <a href="https://minecraft.net/password/forgot/">mot de passe oubli\xe9?</a>\n                </span>\n                <label id="checkmarkContainer">\n                    <input id="loginRememberOption" type="checkbox" checked>\n                    <span id="loginRememberText" class="loginSpanDim">rester connect\xe9?</span>\n                    <span class="loginCheckmark"></span>\n                </label>\n            </div>\n            <button id="loginButton" disabled>\n                <div id="loginButtonContent">\n                    CONNEXION\n                    <svg id="loginSVG" viewBox="0 0 24.87 13.97">\n                        <defs>\n                            <style>.arrowLine{fill:none;stroke:#FFF;stroke-width:2px;transition: 0.25s ease;}</style>\n                        </defs>\n                        <polyline class="arrowLine" points="0.71 13.26 12.56 1.41 24.16 13.02"/>\n                    </svg>\n                    <div class="circle-loader">\n                        <div class="checkmark draw"></div>\n                    </div>\n                    \x3c!--<div class="spinningCircle" id="loginSpinner"></div>--\x3e\n                </div>\n            </button>\n            <div id="loginDisclaimer">\n                <span class="loginSpanDim" id="loginRegisterSpan">\n                    <a href="https://minecraft.net/store/minecraft-java-edition/">Vous n\'avez pas de compte Minecraft?</a>\n                </span>\n                <p class="loginDisclaimerText">Votre mot de passe est directement envoy\xe9 de manni\xe8re s\xe9curis\xe9e sur les serveurs de Mojang, sans interm\xe9diaire.</p>\n                <p class="loginDisclaimerText">Mon Launcher n\'est pas affili\xe9 avec Mojang Studios.</p>\n            </div>\n        </form>\n    </div>\n    <script src="./assets/js/scripts/login.js"><\/script>\n</div>\n')),(0,i.kt)("p",null,"Ga dan naar ",(0,i.kt)("inlineCode",{parentName:"p"},"app/assets/lang/en_US.json")," en vertaal indien nodig (onderstaand voorbeeld is vertaald van Engels naar Frans)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {3,8,9,11,12,15,16,19,20,23,24,27,28,31,32,35,38-41,45}",showLineNumbers:!0,"{3,8,9,11,12,15,16,19,20,23,24,27,28,31,32,35,38-41,45}":!0},'{\n    "html": {\n        "avatarOverlay": "Modifier"\n    },\n    "js": {\n        "login": {\n            "error": {\n                "invalidValue": "* Valeur invalide",\n                "requiredValue": "* Requis",\n                "userMigrated": {\n                    "title": "Erreur durant la connexion:<br>Identifiants invalides",\n                    "desc": "Vous avez essay\xe9 de vous connecter avec un compte migr\xe9 vers Mojang. Essayez de vous connecter avec l\'email \xe0 la place du nom d\'utilisateur."\n                },\n                "invalidCredentials": {\n                    "title": "Erreur durant la connexion:<br>Identifiants invalides",\n                    "desc": "L\'e-mail ou le mot de passe que vous avez entr\xe9 est incorrect. Veuillez r\xe9essayer."\n                },\n                "rateLimit": {\n                   "title": "Erreur lors de la connexion:<br>Trop de tentatives",\n                    "desc": "Il y a eu trop de tentatives de connexion avec ce compte r\xe9cemment. Veuillez r\xe9essayer plus tard."\n                },\n                "noInternet": {\n                    "title": "Erreur lors de la connexion:<br>Pas de connexion Internet",\n                    "desc": "Vous devez \xeatre connect\xe9 \xe0 Internet pour vous connecter. Veuillez vous connecter et r\xe9essayer."\n                },\n                "authDown": {\n                    "title": "Erreur lors de la connexion:<br>Serveur d\'authentification hors ligne",\n                    "desc": "Le serveur d\'authentification de Mojang est actuellement hors ligne ou inaccessible. Veuillez patienter un peu et r\xe9essayer."\n                },\n                "notPaid": {\n                    "title": "Erreur lors de la connexion:<br>Jeu non achet\xe9",\n                    "desc": "Le compte avec lequel vous essayez de vous connecter n\'a pas achet\xe9 de copie de Minecraft.<br>Vous pouvez acheter une copie sur <a href=\\"https://minecraft.net/\\">Minecraft.net</a>."\n                },\n                "unknown": {\n                    "title": "Erreur lors de la connexion:<br>Erreur inconnue"\n                }\n            },\n            "login": "CONNEXION",\n            "loggingIn": "CONNEXION EN COURS",\n            "success": "CONNECT\xc9",\n            "tryAgain": "Veuillez r\xe9essayer"\n        },\n        "landing": {\n            "launch": {\n                "pleaseWait": "Veuillez patienter..."\n            }\n        }\n    }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Bij het opnemen van de video had ik een extensie die de ingevoerde tekst corrigeerde, vandaar dat mijn bestand vol fouten zat. Normaal zou het bestand toch geldig moeten zijn.")),(0,i.kt)("h2",{id:"de-beelden-van-het-laadscherm"},"De beelden van het laadscherm"),(0,i.kt)("p",null,"In GitHub Desktop, druk op Repository--\x3eToon in verkenner.\nOpen dan de map ",(0,i.kt)("inlineCode",{parentName:"p"},"app/assets/images"),". U hebt 2 bestanden: ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadingSeal.png")," en ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadingText.png"),". De eerste afbeelding wordt gebruikt als vaste achtergrond voor de tweede die zal roteren.\nOm deze stap te voltooien, hoeft u slechts de 2 afbeeldingen te verwijderen en te vervangen door die van uw keuze.\nAls u LoadingText.png wilt verwijderen, kun u ",(0,i.kt)("a",{target:"_blank",href:t(4663).Z},"deze afbeelding")," downloaden (rechtsklik---\x3e",(0,i.kt)("inlineCode",{parentName:"p"},"Beeld opslaan als")," als de afbeelding zichzelf niet downloadt als u de link opent)."),(0,i.kt)("h2",{id:"test-de-veranderingen"},"Test de veranderingen"),(0,i.kt)("p",null,"Start "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm start\n")),(0,i.kt)("p",null,"Als u nog steeds verbinding kunt maken via Mojang, kunt u verbinding maken met de launcher. Anders zullen we in deel 4 zien hoe we Microsoft kunnen configureren."),(0,i.kt)("h2",{id:"stuur-wijzigingen-naar-github"},"Stuur wijzigingen naar GitHub"),(0,i.kt)("p",null,"Ga terug naar GitHub Desktop, en vul het formulier linksonder in, en geef aan welke veranderingen u gemaakt hebt (of niet, maar daar zijn deze velden in principe voor), en druk dan op ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit to master"),". Druk dan op ",(0,i.kt)("inlineCode",{parentName:"p"},"Push origin")," bovenaan."))}p.isMDXComponent=!0},4663:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/LoadingText-813044b737c569b1b051633fc2435d82.png"}}]);