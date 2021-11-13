"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7349],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(4137)),o=["components"],s={sidebar_position:1},l="Glossary",c={unversionedId:"reference/glossary",id:"reference/glossary",isDocsHomePage:!1,title:"Glossary",description:"Module",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/glossary.md",sourceDirName:"reference",slug:"/reference/glossary",permalink:"/en/docs/reference/glossary",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/reference/glossary.md",tags:[],version:"current",lastUpdatedAt:1636831708,formattedLastUpdatedAt:"11/13/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"\ud83d\udcda Reference",permalink:"/en/docs/reference"},next:{title:"Overview",permalink:"/en/docs/reference/layers/overview"}},p=[{value:"Module",id:"module",children:[],level:2},{value:"Layer",id:"layer",children:[],level:2},{value:"Slice",id:"slice",children:[],level:2},{value:"Segment",id:"segment",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("h2",{id:"module"},"Module"),(0,i.kt)("p",null,"Structural unit of the project"),(0,i.kt)("p",null,"A module usually means a specific file or directory ",(0,i.kt)("em",{parentName:"p"},"(an abstraction in the context of a structure)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"authorization module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"page module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"the module of the component in the feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"action module in the entity model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"etc."))),(0,i.kt)("h2",{id:"layer"},(0,i.kt)("a",{parentName:"h2",href:"/docs/reference/layers/overview"},"Layer")),(0,i.kt)("p",null,"Each of the directories located at the topmost level of the application."),(0,i.kt)("p",null,"This level defines the ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-layers"},"scope of responsibility of modules"),", as well as the level of danger of changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Representatives"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/app"},(0,i.kt)("inlineCode",{parentName:"a"},"app")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/processes"},(0,i.kt)("inlineCode",{parentName:"a"},"processes")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/pages"},(0,i.kt)("inlineCode",{parentName:"a"},"pages")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/widgets"},(0,i.kt)("inlineCode",{parentName:"a"},"widgets")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/features"},(0,i.kt)("inlineCode",{parentName:"a"},"features")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/entities"},(0,i.kt)("inlineCode",{parentName:"a"},"entities")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/shared"},(0,i.kt)("inlineCode",{parentName:"a"},"shared")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 app/                    # Initializing application logic\n    \u251c\u2500\u2500 processes/              # (Optional) Application processes running over pages\n    \u251c\u2500\u2500 pages/                  # Application Pages\n    \u251c\u2500\u2500 features/               # Crucial functionality of the application\n    \u251c\u2500\u2500 entities/               # Business entities\n    \u2514\u2500\u2500 shared/                 # Reused modules\n")),(0,i.kt)("h2",{id:"slice"},"Slice"),(0,i.kt)("p",null,"Each of the elements located at the top level of the layers"),(0,i.kt)("p",null,"This level is ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-slices"},"poorly regulated")," is a methodology, but a lot depends on the specific project, stack and team"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Representatives (from each layer)")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/processes"},(0,i.kt)("inlineCode",{parentName:"a"},"process")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/pages"},(0,i.kt)("inlineCode",{parentName:"a"},"page")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/widgets"},(0,i.kt)("inlineCode",{parentName:"a"},"widget")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/features"},(0,i.kt)("inlineCode",{parentName:"a"},"feature")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/entities"},(0,i.kt)("inlineCode",{parentName:"a"},"entity")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 app/\n|   # Does not have specific slices, \n|   # Because it contains meta-logic on the project and its initialization\n\u251c\u2500\u2500 processes/\n|   # Slices for implementing processes on pages\n|   \u251c\u2500\u2500 payment\n|   \u251c\u2500\u2500 auth\n|   \u251c\u2500\u2500 quick-tour\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 pages/\n|   # Slices for implementing application pages\n|   # At the same time, due to the specifics of routing, they can be invested in each other\n|   \u251c\u2500\u2500 profile\n|   \u251c\u2500\u2500 sign-up\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 features/\n|   # Slices for implementing specific functionality on pages\n|   \u251c\u2500\u2500 auth-by-phone\n|   \u251c\u2500\u2500 inline-post\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 entities/\n|   # Slices of business entities for implementing a more complex BL\n|   \u251c\u2500\u2500 viewer\n|   \u251c\u2500\u2500 posts\n|   \u251c\u2500\u2500 i18n\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 shared/\n|   # Does not have specific slices\n|   # is rather a set of commonly used segments, without binding to the BL\n")),(0,i.kt)("h2",{id:"segment"},(0,i.kt)("a",{parentName:"h2",href:"/docs/reference/segments"},"Segment")),(0,i.kt)("p",null,"Each of the modules located at the top level of each slice"),(0,i.kt)("p",null,"This level determines ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-segments"},"the purpose of modules in the code and implementation"),", according to classical design models"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Representatives"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/segments#ui"},(0,i.kt)("inlineCode",{parentName:"a"},"ui")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/segments#model"},(0,i.kt)("inlineCode",{parentName:"a"},"model")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/segments#lib"},(0,i.kt)("inlineCode",{parentName:"a"},"lib")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/segments#api"},(0,i.kt)("inlineCode",{parentName:"a"},"api")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/segments#config"},(0,i.kt)("inlineCode",{parentName:"a"},"config")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # UI-logic (components, ui-widgets, ...)\n    |   \u251c\u2500\u2500 model/                  # Business logic (store, actions, effects, reducers, ...)\n    |   \u251c\u2500\u2500 lib/                    # Infrastructure logic (utils/helpers)\n    |   \u251c\u2500\u2500 config/                 # Application configuration (env-vars, ...)\n    |   \u2514\u2500\u2500 api/                    # Logic of API requests (api instances, requests, ...)\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since not every layer explicitly uses slices (app, shared)"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Segments can be arranged according to their own rules ",(0,i.kt)("inlineCode",{parentName:"li"},"shared/{api, config}")),(0,i.kt)("li",{parentName:"ul"},"Or not to use ",(0,i.kt)("inlineCode",{parentName:"li"},"app/{providers, styles}")," at all")))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/app-splitting"},"Abstraction levels by methodology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/layers/overview"},"Layers in the methodology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/segments"},"Segments in the methodology"))))}u.isMDXComponent=!0}}]);