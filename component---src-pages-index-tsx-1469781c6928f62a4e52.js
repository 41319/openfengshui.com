(self.webpackChunkweb13=self.webpackChunkweb13||[]).push([[691],{2562:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.Link=void 0;var r=a(n(434)),i=a(n(7071)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(7294)),s=n(9402),o=n(1883),c=n(7610),u=["language","to","onClick"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var d=l.default.forwardRef((function(e,t){var n=e.language,a=e.to,m=e.onClick,d=(0,i.default)(e,u),f=(0,l.useContext)(s.I18nextContext),p=n||f.language,h=""+function(e){return f.generateDefaultLanguagePage||e!==f.defaultLanguage?"/"+e:""}(p)+a;return l.default.createElement(o.Link,(0,r.default)({},d,{to:h,innerRef:t,hrefLang:p,onClick:function(e){n&&localStorage.setItem(c.LANGUAGE_KEY,n),m&&m(e)}}))}));t.Link=d},531:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1468);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var r=n(9402);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var i=n(8112);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var l=n(2562);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}))},8112:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.useI18next=void 0;var r=a(n(434)),i=n(1468),l=n(7294),s=n(1883),o=n(9402),c=n(7610);t.useI18next=function(e,t){var n=(0,i.useTranslation)(e,t),a=n.i18n,u=n.t,m=n.ready,d=(0,l.useContext)(o.I18nextContext),f=d.routed,p=d.defaultLanguage,h=d.generateDefaultLanguagePage,g=function(e){return h||e!==p?"/"+e:""};return(0,r.default)({},d,{i18n:a,t:u,ready:m,navigate:function(e,t){var n=g(d.language),a=f?""+n+e:""+e;return(0,s.navigate)(a,t)},changeLanguage:function(e,t,n){var a=""+g(e)+(t||function(e){if(!f)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(c.LANGUAGE_KEY,e),(0,s.navigate)(a,n)}})}},7782:function(e,t,n){e.exports=n(531)},428:function(e,t,n){"use strict";var a=n(7294),r=n(7782);t.Z=e=>{let{children:t}=e;const{t:n}=(0,r.useTranslation)(),{0:i,1:l}=(0,a.useState)("");return a.createElement("div",{className:"page-wrapper"},a.createElement("header",{className:"page-header"},a.createElement("div",{className:"page-header__scroll","data-uk-sticky":!0},a.createElement("div",{className:"uk-container uk-container-xlarge"},a.createElement("div",{className:"page-header__inner"},a.createElement("div",{className:"page-header__left"},a.createElement("div",{className:"page-header__logo logo"},a.createElement("a",{className:"logo__link",href:"/"},a.createElement("h2",null,"OpenFengShui")))),a.createElement("div",{className:"page-header__right"},a.createElement("div",{className:"page-header__btn"},a.createElement("a",{className:"uk-button uk-button-danger",href:"https://mobile413.com"},"Get SG Number here")),a.createElement("div",{className:"page-header__btn-menu"},a.createElement("a",{href:"#offcanvas","data-uk-toggle":!0,"data-uk-icon":"menu"}))))))),t,a.createElement("div",{className:"section-steps",id:"disclaimer"},a.createElement("div",{className:"uk-section-large uk-container"},a.createElement("div",{className:"section-title uk-text-center"},a.createElement("span",null," ",n("dyor")),a.createElement("h3",{className:"uk-h3"}," ",n("disclaimer")," "),a.createElement("p",null,n("disclaimerText"))))),a.createElement("footer",{className:"page-footer"},a.createElement("div",{className:"page-footer__bottom"},a.createElement("div",{className:"uk-container"},a.createElement("span",null," ",n("rightsText")),a.createElement("br",null),n("oldWebsite")," Click ",a.createElement("a",{href:"http://app.openfengshui.com"},"here")))))}},3784:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var a=n(7294),r=n(5785);const i=["shengqi","tianyi","wugui","fuwei","yannian","huohai","liusha","jueming"],l={shengqi1:["14","41"],shengqi2:["67","76"],shengqi3:["39","93"],shengqi4:["28","82"],tianyi1:["13","31"],tianyi2:["68","86"],tianyi3:["49","94"],tianyi4:["27","72"],yannian1:["19","91"],yannian2:["78","87"],yannian3:["34","43"],yannian4:["26","62"],fuwei1:["11","22"],fuwei2:["88","99"],fuwei3:["66","77"],fuwei4:["33","44"],liusha1:["16","61"],liusha2:["47","74"],liusha3:["38","83"],liusha4:["29","92"],huohai1:["17","71"],huohai2:["89","98"],huohai3:["46","64"],huohai4:["23","32"],wugui1:["18","81"],wugui2:["79","97"],wugui3:["36","63"],wugui4:["24","42"],jueming1:["12","21"],jueming2:["69","96"],jueming3:["48","84"],jueming4:["37","73"],good05:["01","03","05","06","07","08","15","25","30","35","45","51","52","57","58","65","75","85","95"],bad05:["02","04","09","10","20","40","50","53","54","55","56","59","60","70","80","90"]},s=e=>e.split("").map((e=>{const t="abcdefghijklmnopqrstuvwxyz".indexOf(e.toLowerCase());return t>-1?t+1:isNaN(e)?" ":e})).join(""),o=e=>Object.keys(l).reduce(((t,n)=>{const a=""+e;return t||(l[n].includes(a)?{type:n.substr(0,n.length-1),level:n.substr(-1),num:a}:"")}),""),c=([].concat((0,r.Z)(l.shengqi1),(0,r.Z)(l.shengqi2),(0,r.Z)(l.shengqi3),(0,r.Z)(l.shengqi4),(0,r.Z)(l.tianyi1),(0,r.Z)(l.tianyi2),(0,r.Z)(l.tianyi3),(0,r.Z)(l.tianyi4),(0,r.Z)(l.yannian1),(0,r.Z)(l.yannian2),(0,r.Z)(l.yannian3),(0,r.Z)(l.yannian4),(0,r.Z)(l.fuwei1),(0,r.Z)(l.fuwei2),(0,r.Z)(l.fuwei3),(0,r.Z)(l.fuwei4)),e=>{const t=[],n=(e=>e.split("").reduce(((e,t)=>"0"!==t&&"5"!==t?e+t:e),""))(e);for(let a=0;a<n.length;a++){let e=n[a];if(["0","5"].includes(e)||a===n.length-1)continue;let r=a+1;for(;r!==n.length&&(e+=n[r],["0","5"].includes(e[e.length-1]));)r++;t.push(e)}return t});var u=n(4529),m=n(7782),d=n(428);var f=()=>{const{t:e}=(0,m.useTranslation)(),{0:t,1:n}=(0,a.useState)(""),{0:r,1:f}=(0,a.useState)([]),{0:p,1:h}=(0,a.useState)([]),g=t=>{const n=[],a=c(t),r=a[a.length-1],l=a.map((e=>o(e).type)),s=i.map((e=>({star:e,count:l.filter((t=>t===e)).length})));return(t.includes("91")||t.includes("87"))&&n.push(e("NumNoLadies")),t.includes("0")&&n.push(e("avoidZero")),["wugui","liusha","huohai","jueming"].includes(o(a[a.length-1]).type)&&n.push("Avoid "+r+" at the end."),s.forEach((t=>{t.count>2&&n.push(t.count+" "+e(t.star)+" star in the number. Too many of a certain star may not be a good thing.")})),n};a.useEffect((()=>{const e=c(s(t));f(e),h(g(t))}),[t]);const v=e=>["tianyi","yannian","shengqi"].includes(e.trim());return a.createElement(d.Z,null,a.createElement("main",{className:"page-main"},a.createElement("div",{className:"section-banner"},a.createElement("div",{className:"section-banner__bg",style:{backgroundImage:"url(assets/img/bg-banner.jpg)"}},a.createElement("div",{className:"uk-container uk-text-center"},a.createElement("div",{className:"section-banner__content"},a.createElement("div",{className:"section-banner__title"}," ",e("heroText")),a.createElement("div",{className:"section-banner__text"}," ",e("harnessWisdom")),a.createElement("div",{className:"section-banner__form"},a.createElement("form",{action:"#!"},a.createElement("div",{className:"form-search"},a.createElement("div",{className:"form-search__box"},a.createElement("input",{placeholder:e("inputPlaceholder"),autoFocus:!0,type:"text",value:t,onChange:e=>n(e.target.value)}),a.createElement("a",{className:"uk-button uk-button-danger",href:"#analysis",type:"submit"}," ",e("Check")," "))))),a.createElement("div",{className:"section-banner__bottom"},a.createElement("a",{href:"#disclaimer"}," ",e("disclaimer")),a.createElement(u.Z,null)))))),t&&!!r.length&&a.createElement("div",{className:"section-info",id:"analysis"},a.createElement("div",{className:"uk-section-large uk-container uk-container-large"},a.createElement("div",{className:"uk-grid uk-child-width@m","data-uk-grid":!0},a.createElement("div",{className:"uk-width-3-4@m "},a.createElement("div",{className:"section-content"},a.createElement("h2",null," ",e("numberEnergy")," ",t," (",s(t),") "),a.createElement("ul",{className:"info-list"},i.map(((t,n)=>{const i=r.filter((e=>o(e).type===t)).map(o);return 0===i.length?null:a.createElement("li",{key:n},a.createElement("div",{className:"info-list-item"},a.createElement("div",{className:"info-list-item__desc"},a.createElement("div",{className:"info-list-item__text"},a.createElement("h5",null,i.map((t=>e(t.type)+" ("+t.num+") Star  Lvl "+t.level)).join(" => ")),a.createElement("div",null,e(t+"_representation"))))))})))))))),a.createElement("div",{className:"section-steps"},a.createElement("div",{className:"uk-section-large uk-container"},a.createElement("div",{className:"section-title uk-text-center"},a.createElement("span",null,e("enhancementText")),a.createElement("h3",{className:"uk-h3"}," ",e("recommendation")),a.createElement("div",{className:""},0===p.length&&e("noRecommendation"),p&&p.map(((e,t)=>a.createElement("div",{key:t},t+1,"）",e,a.createElement("br",null),a.createElement("br",null)))))))),a.createElement("div",{className:"section-info"},a.createElement("div",{className:"uk-section-large uk-container"},a.createElement("div",{className:"section-title uk-text-center"},a.createElement("span",null,e("starAttributes")," "),a.createElement("h3",{className:"uk-h3"}," ",e("starChart")," "),a.createElement("div",{className:"star-chart2"},a.createElement("div",{className:"div1"}),a.createElement("div",{className:"div2"},e("band1")),a.createElement("div",{className:"div3"},e("band2")),a.createElement("div",{className:"div4"},e("band3")),a.createElement("div",{className:"div5"},e("band4"))),a.createElement("div",{className:"star-chart"},i.map(((t,n)=>a.createElement(a.Fragment,null,a.createElement("div",{className:"div"+(5*n+1)+" "+(v(t)&&"uk-color-red")}," ",e(t)," "),a.createElement("div",{className:"div"+(5*n+2)+" "+(v(t)&&"uk-color-red")}," ",l[t+"1"].join("/")," "),a.createElement("div",{className:"div"+(5*n+3)+" "+(v(t)&&"uk-color-red")}," ",l[t+"2"].join("/")),a.createElement("div",{className:"div"+(5*n+4)+" "+(v(t)&&"uk-color-red")}," ",l[t+"3"].join("/")),a.createElement("div",{className:"div"+(5*n+5)+" "+(v(t)&&"uk-color-red")}," ",l[t+"4"].join("/")))))))))))};const p=()=>a.createElement("title",null,"Is Your Number Lucky?")},4529:function(e,t,n){"use strict";var a=n(7294),r=n(239);t.Z=()=>a.createElement(r.Z.Google,{client:"ca-pub-6343289823091285",slot:"5114483936",style:{display:"block"},layout:"in-article",format:"fluid"})},8802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(7294),l=(a=i)&&a.__esModule?a:{default:a};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(l.default.Component);t.default=c},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=l(n(7294)),i=l(n(5697));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return r.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(r.default.Component);t.default=c,c.propTypes={className:i.default.string,style:i.default.object,client:i.default.string.isRequired,slot:i.default.string.isRequired,layout:i.default.string,layoutKey:i.default.string,format:i.default.string,responsive:i.default.string},c.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},239:function(e,t,n){"use strict";var a=i(n(232)),r=i(n(8802));function i(e){return e&&e.__esModule?e:{default:e}}var l={Google:a.default,Baidu:r.default};t.Z=l}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1469781c6928f62a4e52.js.map