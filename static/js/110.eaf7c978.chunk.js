(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[110],{388:function(e,t,a){"use strict";a.r(t);a(0);var c=a(467),n=a(466),r=a(463),o=a(24),i=a(452),s=a(453),l=a(506),b=a(12);t.default=function(){var e="Mobile Only Menu",t="Shows only the mobile menu";return Object(l.a)({behaviour:o.c.Pinned,breakpoints:{verticalUnpinned:1e4,verticalMobile:1e4,horizontalMobile:1e4}}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{title:e,description:t}),Object(b.jsx)(c.a,{children:Object(b.jsx)(n.a,{children:Object(b.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(b.jsxs)("div",{className:"page-title-container",children:[Object(b.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(b.jsx)(s.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/content",text:"Content"},{to:"interface/content/menu",text:"Menu"}]})]}),Object(b.jsx)(r.a,{className:"mb-5",body:!0,children:Object(b.jsx)(r.a.Text,{children:t})})]})})})]})}},452:function(e,t,a){"use strict";var c=a(147),n=(a(0),a(12));t.a=function(e){var t=e.title,a=void 0===t?"":t,r=e.description,o=void 0===r?"":r,i=e.children,s=void 0===i?null:i;return Object(n.jsxs)(c.a,{children:[a&&Object(n.jsx)("title",{children:a}),o&&Object(n.jsx)("meta",{name:"description",content:o}),s&&s]})}},453:function(e,t,a){"use strict";a(0);var c=a(1240),n=a(91),r=a(2),o=a(12);t.a=function(e){var t=e.items,a=void 0===t?[{to:"/",text:"Home"}]:t,i=e.basePath,s=void 0===i?r.a.APP:i;return Object(o.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:a.map((function(e,t){return Object(o.jsx)(c.a.Item,{linkAs:n.b,linkProps:{to:"".concat(s).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},455:function(e,t,a){"use strict";var c=a(0),n=c.createContext(null);n.displayName="CardHeaderContext",t.a=n},463:function(e,t,a){"use strict";var c=a(5),n=a(446),r=a(447),o=a.n(r),i=a(0),s=a(448),l=a(454),b=a(460),u=a(12),d=["bsPrefix","className","variant","as"],j=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,l=e.as,b=void 0===l?"img":l,j=Object(n.a)(e,d),O=Object(s.c)(a,"card-img");return Object(u.jsx)(b,Object(c.a)({ref:t,className:o()(i?"".concat(O,"-").concat(i):O,r)},j))}));j.displayName="CardImg";var O=j,f=a(455),v=["bsPrefix","className","as"],m=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.as,b=void 0===l?"div":l,d=Object(n.a)(e,v),j=Object(s.c)(a,"card-header"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(u.jsx)(f.a.Provider,{value:O,children:Object(u.jsx)(b,Object(c.a)(Object(c.a)({ref:t},d),{},{className:o()(r,j)}))})}));m.displayName="CardHeader";var p=m,x=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),N=Object(b.a)("h6"),y=Object(l.a)("card-body"),g=Object(l.a)("card-title",{Component:h}),C=Object(l.a)("card-subtitle",{Component:N}),P=Object(l.a)("card-link",{Component:"a"}),k=Object(l.a)("card-text",{Component:"p"}),w=Object(l.a)("card-footer"),E=Object(l.a)("card-img-overlay"),S=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.bg,l=e.text,b=e.border,d=e.body,j=void 0!==d&&d,O=e.children,f=e.as,v=void 0===f?"div":f,m=Object(n.a)(e,x),p=Object(s.c)(a,"card");return Object(u.jsx)(v,Object(c.a)(Object(c.a)({ref:t},m),{},{className:o()(r,p,i&&"bg-".concat(i),l&&"text-".concat(l),b&&"border-".concat(b)),children:j?Object(u.jsx)(y,{children:O}):O}))}));S.displayName="Card";t.a=Object.assign(S,{Img:O,Title:g,Subtitle:C,Body:y,Link:P,Text:k,Header:p,Footer:w,ImgOverlay:E})},466:function(e,t,a){"use strict";var c=a(115),n=a(5),r=a(446),o=a(447),i=a.n(o),s=a(0),l=a(448),b=a(12),u=["as","bsPrefix","className"],d=["className"];var j=s.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,o=Object(r.a)(e,u);a=Object(l.c)(a,"col");var s=Object(l.a)(),b=Object(l.b)(),d=[],j=[];return s.forEach((function(e){var t,c,n,r=o[e];delete o[e],"object"===typeof r&&null!=r?(t=r.span,c=r.offset,n=r.order):t=r;var i=e!==b?"-".concat(e):"";t&&d.push(!0===t?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(t)),null!=n&&j.push("order".concat(i,"-").concat(n)),null!=c&&j.push("offset".concat(i,"-").concat(c))})),[Object(n.a)(Object(n.a)({},o),{},{className:i.a.apply(void 0,[c].concat(d,j))}),{as:t,bsPrefix:a,spans:d}]}(e),o=Object(c.a)(a,2),s=o[0],j=s.className,O=Object(r.a)(s,d),f=o[1],v=f.as,m=void 0===v?"div":v,p=f.bsPrefix,x=f.spans;return Object(b.jsx)(m,Object(n.a)(Object(n.a)({},O),{},{ref:t,className:i()(j,!x.length&&p)}))}));j.displayName="Col",t.a=j},467:function(e,t,a){"use strict";var c=a(5),n=a(446),r=a(447),o=a.n(r),i=a(0),s=a(448),l=a(12),b=["bsPrefix","className","as"],u=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,d=Object(n.a)(e,b),j=Object(s.c)(a,"row"),O=Object(s.a)(),f=Object(s.b)(),v="".concat(j,"-cols"),m=[];return O.forEach((function(e){var t,a=d[e];delete d[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==f?"-".concat(e):"";null!=t&&m.push("".concat(v).concat(c,"-").concat(t))})),Object(l.jsx)(u,Object(c.a)(Object(c.a)({ref:t},d),{},{className:o.a.apply(void 0,[r,j].concat(m))}))}));u.displayName="Row",t.a=u},506:function(e,t,a){"use strict";var c=a(0),n=a(92),r=a(150),o=a(151);t.a=function(e){var t=e.placement,a=void 0===t?null:t,i=e.behaviour,s=void 0===i?null:i,l=e.layout,b=void 0===l?null:l,u=e.radius,d=void 0===u?null:u,j=e.color,O=void 0===j?null:j,f=e.navColor,v=void 0===f?null:f,m=e.useSidebar,p=void 0===m?null:m,x=e.pinEnable,h=void 0===x?null:x,N=e.fullpage,y=void 0===N?null:N,g=e.breakpoints,C=void 0===g?null:g,P=Object(n.b)(),k=Object(n.c)((function(e){return e.menu})),w=k.placement,E=k.behaviour,S=k.breakpoints,H=k.pinButtonEnable,M=k.useSidebar,R=Object(n.c)((function(e){return e.settings})),I=R.layout,A=R.radius,B=R.color,T=R.navColor,F={placement:a||w,behaviour:s||E,layout:b||I,radius:d||A,color:O||B,navColor:v||T,breakpoints:C||S,useSidebar:p||M};return Object(c.useEffect)((function(){var e={placement:!1,behaviour:!1,layout:!1,radius:!1,color:!1,navColor:!1,breakpoints:!1,pinEnable:!1,useSidebar:!1};return a&&(e.placement=!0,P(Object(r.k)(a))),s&&(e.behaviour=!0,P(Object(r.d)(s))),b&&(e.layout=!0,P(Object(o.d)(b))),d&&(e.radius=!0,P(Object(o.f)(d))),O&&(e.color=!0,P(Object(o.c)(O))),v&&(e.navColor=!0,P(Object(o.e)(v))),C&&(e.breakpoints=!0,P(Object(r.f)(C))),null!==h&&(e.pinEnable=!0,P(Object(r.j)(h))),null!==p&&(e.useSidebar=!0,P(Object(r.m)(p))),null!==y&&(e.fullpage=!0,document.documentElement.setAttribute("data-fullpage",y)),function(){e.placement&&P(Object(r.k)(w)),e.behaviour&&P(Object(r.d)(E)),e.layout&&P(Object(o.g)()),e.radius&&P(Object(o.f)(A)),e.color&&P(Object(o.c)(B)),e.navColor&&P(Object(o.e)(T)),e.breakpoints&&P(Object(r.n)()),e.pinEnable&&P(Object(r.j)(H)),e.useSidebar&&P(Object(r.o)()),e.fullpage&&document.documentElement.removeAttribute("data-fullpage")}}),[]),F}}}]);