(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[162],{347:function(e,t,a){"use strict";a.r(t);a(0);var c=a(463),r=a(452),n=a(453),s=a(12);t.default=function(){var e="Empty";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r.a,{title:e,description:"Empty"}),Object(s.jsxs)("div",{className:"page-title-container",children:[Object(s.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(s.jsx)(n.a,{items:[{to:"",text:"Home"},{to:"pages",text:"Pages"},{to:"pages/miscellaneous",text:"Miscellaneous"}]})]}),Object(s.jsx)("h2",{className:"small-title",children:"Content Title"}),Object(s.jsx)(c.a,{children:Object(s.jsx)(c.a.Body,{children:"Content"})})]})}},452:function(e,t,a){"use strict";var c=a(147),r=(a(0),a(12));t.a=function(e){var t=e.title,a=void 0===t?"":t,n=e.description,s=void 0===n?"":n,i=e.children,o=void 0===i?null:i;return Object(r.jsxs)(c.a,{children:[a&&Object(r.jsx)("title",{children:a}),s&&Object(r.jsx)("meta",{name:"description",content:s}),o&&o]})}},453:function(e,t,a){"use strict";a(0);var c=a(1240),r=a(91),n=a(2),s=a(12);t.a=function(e){var t=e.items,a=void 0===t?[{to:"/",text:"Home"}]:t,i=e.basePath,o=void 0===i?n.a.APP:i;return Object(s.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:a.map((function(e,t){return Object(s.jsx)(c.a.Item,{linkAs:r.b,linkProps:{to:"".concat(o).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},455:function(e,t,a){"use strict";var c=a(0),r=c.createContext(null);r.displayName="CardHeaderContext",t.a=r},463:function(e,t,a){"use strict";var c=a(5),r=a(446),n=a(447),s=a.n(n),i=a(0),o=a(448),d=a(454),b=a(460),l=a(12),j=["bsPrefix","className","variant","as"],m=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.variant,d=e.as,b=void 0===d?"img":d,m=Object(r.a)(e,j),O=Object(o.c)(a,"card-img");return Object(l.jsx)(b,Object(c.a)({ref:t,className:s()(i?"".concat(O,"-").concat(i):O,n)},m))}));m.displayName="CardImg";var O=m,u=a(455),x=["bsPrefix","className","as"],f=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,d=e.as,b=void 0===d?"div":d,j=Object(r.a)(e,x),m=Object(o.c)(a,"card-header"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return Object(l.jsx)(u.a.Provider,{value:O,children:Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s()(n,m)}))})}));f.displayName="CardHeader";var v=f,p=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),N=Object(b.a)("h6"),g=Object(d.a)("card-body"),y=Object(d.a)("card-title",{Component:h}),C=Object(d.a)("card-subtitle",{Component:N}),P=Object(d.a)("card-link",{Component:"a"}),k=Object(d.a)("card-text",{Component:"p"}),H=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),I=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.bg,d=e.text,b=e.border,j=e.body,m=void 0!==j&&j,O=e.children,u=e.as,x=void 0===u?"div":u,f=Object(r.a)(e,p),v=Object(o.c)(a,"card");return Object(l.jsx)(x,Object(c.a)(Object(c.a)({ref:t},f),{},{className:s()(n,v,i&&"bg-".concat(i),d&&"text-".concat(d),b&&"border-".concat(b)),children:m?Object(l.jsx)(g,{children:O}):O}))}));I.displayName="Card";t.a=Object.assign(I,{Img:O,Title:y,Subtitle:C,Body:g,Link:P,Text:k,Header:v,Footer:H,ImgOverlay:w})}}]);