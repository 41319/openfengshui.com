(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[69],{324:function(e,a,t){"use strict";t.r(a);t(0),t(646);var c=t(464),n=(t(477),t(469)),r=t(468),o=t(26),s=t(454),i=t(455),l=(t(453),t(501)),b=t(162),u=t(14);a.default=function(){var e="Home",a=Object(b.b)();a.loginWithRedirect,a.logout,a.isAuthenticated;return Object(l.a)({layout:o.b.Boxed}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{title:e,description:""}),Object(u.jsxs)("div",{className:"page-title-container",children:[Object(u.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(u.jsx)(i.a,{items:[]})]}),Object(u.jsx)("div",{className:"mb-5",children:Object(u.jsxs)(n.a,{className:"row-cols-1 row-cols-lg-3 g-2",children:[Object(u.jsx)(r.a,{}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(c.a,{className:"h-100 hover-scale-up",children:Object(u.jsx)(c.a.Body,{className:"pb-0",children:Object(u.jsxs)("p",{className:"text-alternate mb-4",children:["Access our Feng Shui Plotter ",Object(u.jsx)("a",{href:"/#/dashboards/default",children:"here."}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"the software is best using a tablet/laptop/desktop."]})})}),""]}),Object(u.jsx)(r.a,{})]})})]})}},454:function(e,a,t){"use strict";var c=t(148),n=(t(0),t(14));a.a=function(e){var a=e.title,t=void 0===a?"":a,r=e.description,o=void 0===r?"":r,s=e.children,i=void 0===s?null:s;return Object(n.jsxs)(c.a,{children:[t&&Object(n.jsx)("title",{children:t}),o&&Object(n.jsx)("meta",{name:"description",content:o}),i&&i]})}},455:function(e,a,t){"use strict";t(0);var c=t(1246),n=t(92),r=t(3),o=t(14);a.a=function(e){var a=e.items,t=void 0===a?[{to:"/",text:"Home"}]:a,s=e.basePath,i=void 0===s?r.a.APP:s;return Object(o.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:t.map((function(e,a){return Object(o.jsx)(c.a.Item,{linkAs:n.b,linkProps:{to:"".concat(i).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(a))}))})}},457:function(e,a,t){"use strict";var c=t(0),n=c.createContext(null);n.displayName="CardHeaderContext",a.a=n},464:function(e,a,t){"use strict";var c=t(6),n=t(449),r=t(448),o=t.n(r),s=t(0),i=t(450),l=t(456),b=t(462),u=t(14),d=["bsPrefix","className","variant","as"],j=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.variant,l=e.as,b=void 0===l?"img":l,j=Object(n.a)(e,d),O=Object(i.c)(t,"card-img");return Object(u.jsx)(b,Object(c.a)({ref:a,className:o()(s?"".concat(O,"-").concat(s):O,r)},j))}));j.displayName="CardImg";var O=j,v=t(457),f=["bsPrefix","className","as"],m=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,b=void 0===l?"div":l,d=Object(n.a)(e,f),j=Object(i.c)(t,"card-header"),O=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(u.jsx)(v.a.Provider,{value:O,children:Object(u.jsx)(b,Object(c.a)(Object(c.a)({ref:a},d),{},{className:o()(r,j)}))})}));m.displayName="CardHeader";var p=m,x=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),N=Object(b.a)("h6"),y=Object(l.a)("card-body"),g=Object(l.a)("card-title",{Component:h}),C=Object(l.a)("card-subtitle",{Component:N}),P=Object(l.a)("card-link",{Component:"a"}),k=Object(l.a)("card-text",{Component:"p"}),w=Object(l.a)("card-footer"),A=Object(l.a)("card-img-overlay"),E=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.bg,l=e.text,b=e.border,d=e.body,j=void 0!==d&&d,O=e.children,v=e.as,f=void 0===v?"div":v,m=Object(n.a)(e,x),p=Object(i.c)(t,"card");return Object(u.jsx)(f,Object(c.a)(Object(c.a)({ref:a},m),{},{className:o()(r,p,s&&"bg-".concat(s),l&&"text-".concat(l),b&&"border-".concat(b)),children:j?Object(u.jsx)(y,{children:O}):O}))}));E.displayName="Card";a.a=Object.assign(E,{Img:O,Title:g,Subtitle:C,Body:y,Link:P,Text:k,Header:p,Footer:w,ImgOverlay:A})},468:function(e,a,t){"use strict";var c=t(115),n=t(6),r=t(449),o=t(448),s=t.n(o),i=t(0),l=t(450),b=t(14),u=["as","bsPrefix","className"],d=["className"];var j=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,o=Object(r.a)(e,u);t=Object(l.c)(t,"col");var i=Object(l.a)(),b=Object(l.b)(),d=[],j=[];return i.forEach((function(e){var a,c,n,r=o[e];delete o[e],"object"===typeof r&&null!=r?(a=r.span,c=r.offset,n=r.order):a=r;var s=e!==b?"-".concat(e):"";a&&d.push(!0===a?"".concat(t).concat(s):"".concat(t).concat(s,"-").concat(a)),null!=n&&j.push("order".concat(s,"-").concat(n)),null!=c&&j.push("offset".concat(s,"-").concat(c))})),[Object(n.a)(Object(n.a)({},o),{},{className:s.a.apply(void 0,[c].concat(d,j))}),{as:a,bsPrefix:t,spans:d}]}(e),o=Object(c.a)(t,2),i=o[0],j=i.className,O=Object(r.a)(i,d),v=o[1],f=v.as,m=void 0===f?"div":f,p=v.bsPrefix,x=v.spans;return Object(b.jsx)(m,Object(n.a)(Object(n.a)({},O),{},{ref:a,className:s()(j,!x.length&&p)}))}));j.displayName="Col",a.a=j},469:function(e,a,t){"use strict";var c=t(6),n=t(449),r=t(448),o=t.n(r),s=t(0),i=t(450),l=t(14),b=["bsPrefix","className","as"],u=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,u=void 0===s?"div":s,d=Object(n.a)(e,b),j=Object(i.c)(t,"row"),O=Object(i.a)(),v=Object(i.b)(),f="".concat(j,"-cols"),m=[];return O.forEach((function(e){var a,t=d[e];delete d[e],a=null!=t&&"object"===typeof t?t.cols:t;var c=e!==v?"-".concat(e):"";null!=a&&m.push("".concat(f).concat(c,"-").concat(a))})),Object(l.jsx)(u,Object(c.a)(Object(c.a)({ref:a},d),{},{className:o.a.apply(void 0,[r,j].concat(m))}))}));u.displayName="Row",a.a=u},477:function(e,a,t){"use strict";var c=t(6),n=t(115),r=t(449),o=t(448),s=t.n(o),i=t(0),l=t(470),b=t(450),u=t(14),d=["as","bsPrefix","variant","size","active","disabled","className"],j=i.forwardRef((function(e,a){var t=e.as,o=e.bsPrefix,i=e.variant,j=void 0===i?"primary":i,O=e.size,v=e.active,f=void 0!==v&&v,m=e.disabled,p=void 0!==m&&m,x=e.className,h=Object(r.a)(e,d),N=Object(b.c)(o,"btn"),y=Object(l.b)(Object(c.a)({tagName:t,disabled:p},h)),g=Object(n.a)(y,2),C=g[0],P=g[1].tagName;return Object(u.jsx)(P,Object(c.a)(Object(c.a)(Object(c.a)({},C),h),{},{ref:a,disabled:p,className:s()(x,N,f&&"active",j&&"".concat(N,"-").concat(j),O&&"".concat(N,"-").concat(O),h.href&&p&&"disabled")}))}));j.displayName="Button",a.a=j},501:function(e,a,t){"use strict";var c=t(0),n=t(93),r=t(150),o=t(151);a.a=function(e){var a=e.placement,t=void 0===a?null:a,s=e.behaviour,i=void 0===s?null:s,l=e.layout,b=void 0===l?null:l,u=e.radius,d=void 0===u?null:u,j=e.color,O=void 0===j?null:j,v=e.navColor,f=void 0===v?null:v,m=e.useSidebar,p=void 0===m?null:m,x=e.pinEnable,h=void 0===x?null:x,N=e.fullpage,y=void 0===N?null:N,g=e.breakpoints,C=void 0===g?null:g,P=Object(n.b)(),k=Object(n.c)((function(e){return e.menu})),w=k.placement,A=k.behaviour,E=k.breakpoints,R=k.pinButtonEnable,S=k.useSidebar,B=Object(n.c)((function(e){return e.settings})),H=B.layout,I=B.radius,K=B.color,F=B.navColor,z={placement:t||w,behaviour:i||A,layout:b||H,radius:d||I,color:O||K,navColor:f||F,breakpoints:C||E,useSidebar:p||S};return Object(c.useEffect)((function(){var e={placement:!1,behaviour:!1,layout:!1,radius:!1,color:!1,navColor:!1,breakpoints:!1,pinEnable:!1,useSidebar:!1};return t&&(e.placement=!0,P(Object(r.k)(t))),i&&(e.behaviour=!0,P(Object(r.d)(i))),b&&(e.layout=!0,P(Object(o.d)(b))),d&&(e.radius=!0,P(Object(o.f)(d))),O&&(e.color=!0,P(Object(o.c)(O))),f&&(e.navColor=!0,P(Object(o.e)(f))),C&&(e.breakpoints=!0,P(Object(r.f)(C))),null!==h&&(e.pinEnable=!0,P(Object(r.j)(h))),null!==p&&(e.useSidebar=!0,P(Object(r.m)(p))),null!==y&&(e.fullpage=!0,document.documentElement.setAttribute("data-fullpage",y)),function(){e.placement&&P(Object(r.k)(w)),e.behaviour&&P(Object(r.d)(A)),e.layout&&P(Object(o.g)()),e.radius&&P(Object(o.f)(I)),e.color&&P(Object(o.c)(K)),e.navColor&&P(Object(o.e)(F)),e.breakpoints&&P(Object(r.n)()),e.pinEnable&&P(Object(r.j)(R)),e.useSidebar&&P(Object(r.o)()),e.fullpage&&document.documentElement.removeAttribute("data-fullpage")}}),[]),z}},605:function(e,a,t){"use strict";t.d(a,"b",(function(){return n}));var c=t(0);function n(e,a){return Array.isArray(e)?e.includes(a):e===a}var r=c.createContext({});r.displayName="AccordionContext",a.a=r},606:function(e,a,t){"use strict";var c=t(0),n=c.createContext({eventKey:""});n.displayName="AccordionItemContext",a.a=n},646:function(e,a,t){"use strict";t.d(a,"b",(function(){return O}));var c=t(6),n=t(449),r=t(8),o=t(0),s=t(448),i=t.n(s),l=t(605),b=t(606),u=t(450),d=t(14),j=["as","bsPrefix","className","onClick"];function O(e,a){var t=Object(o.useContext)(l.a),c=t.activeEventKey,n=t.onSelect,s=t.alwaysOpen;return function(t){var o=e===c?null:e;s&&(o=Array.isArray(c)?c.includes(e)?c.filter((function(a){return a!==e})):[].concat(Object(r.a)(c),[e]):[e]),null==n||n(o,t),null==a||a(t)}}var v=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,s=e.bsPrefix,v=e.className,f=e.onClick,m=Object(n.a)(e,j);s=Object(u.c)(s,"accordion-button");var p=Object(o.useContext)(b.a).eventKey,x=O(p,f),h=Object(o.useContext)(l.a).activeEventKey;return"button"===r&&(m.type="button"),Object(d.jsx)(r,Object(c.a)(Object(c.a)({ref:a,onClick:x},m),{},{"aria-expanded":Array.isArray(h)?h.includes(p):p===h,className:i()(v,s,!Object(l.b)(h,p)&&"collapsed")}))}));v.displayName="AccordionButton",a.a=v}}]);