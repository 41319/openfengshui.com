(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[145],{354:function(e,a,c){"use strict";c.r(a);c(0);var t=c(471),s=c(469),r=c(465),n=c(92),i=c(455),o=c(456),l=c(454),d=c(14);a.default=function(){var e="Profile",a="Layouts for settings and social aspects of a user page.";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{title:e,description:a}),Object(d.jsx)(t.a,{children:Object(d.jsx)(s.a,{children:Object(d.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(d.jsxs)("div",{className:"page-title-container",children:[Object(d.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(d.jsx)(o.a,{items:[{to:"",text:"Home"},{to:"pages",text:"Pages"}]})]}),Object(d.jsx)(r.a,{className:"mb-5",body:!0,children:Object(d.jsx)(r.a.Text,{children:a})})]})})}),Object(d.jsxs)(t.a,{xs:"1",sm:"2",xl:"3",className:"g-2",children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{className:"h-100",children:Object(d.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(l.a,{icon:"user",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(n.c,{to:"/pages/profile/standard",className:"heading stretched-link d-block",children:"Standard"}),Object(d.jsx)("div",{className:"text-muted",children:"User profile page with tab navigation featuring stats, charts and so on."})]})]})})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(r.a,{className:"h-100",children:Object(d.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(l.a,{icon:"settings-2",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(n.c,{to:"/pages/profile/settings",className:"heading stretched-link d-block",children:"Settings"}),Object(d.jsx)("div",{className:"text-muted",children:"Settings page with a menu and categorized inputs."})]})]})})})]})]})}},455:function(e,a,c){"use strict";var t=c(148),s=(c(0),c(14));a.a=function(e){var a=e.title,c=void 0===a?"":a,r=e.description,n=void 0===r?"":r,i=e.children,o=void 0===i?null:i;return Object(s.jsxs)(t.a,{children:[c&&Object(s.jsx)("title",{children:c}),n&&Object(s.jsx)("meta",{name:"description",content:n}),o&&o]})}},456:function(e,a,c){"use strict";c(0);var t=c(1250),s=c(92),r=c(3),n=c(14);a.a=function(e){var a=e.items,c=void 0===a?[{to:"/",text:"Home"}]:a,i=e.basePath,o=void 0===i?r.a.APP:i;return Object(n.jsx)(t.a,{className:"breadcrumb-container d-inline-block",children:c.map((function(e,a){return Object(n.jsx)(t.a.Item,{linkAs:s.b,linkProps:{to:"".concat(o).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(a))}))})}},458:function(e,a,c){"use strict";var t=c(0),s=t.createContext(null);s.displayName="CardHeaderContext",a.a=s},465:function(e,a,c){"use strict";var t=c(6),s=c(450),r=c(449),n=c.n(r),i=c(0),o=c(451),l=c(457),d=c(463),b=c(14),j=["bsPrefix","className","variant","as"],O=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,i=e.variant,l=e.as,d=void 0===l?"img":l,O=Object(s.a)(e,j),x=Object(o.c)(c,"card-img");return Object(b.jsx)(d,Object(t.a)({ref:a,className:n()(i?"".concat(x,"-").concat(i):x,r)},O))}));O.displayName="CardImg";var x=O,m=c(458),u=["bsPrefix","className","as"],f=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,l=e.as,d=void 0===l?"div":l,j=Object(s.a)(e,u),O=Object(o.c)(c,"card-header"),x=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O}}),[O]);return Object(b.jsx)(m.a.Provider,{value:x,children:Object(b.jsx)(d,Object(t.a)(Object(t.a)({ref:a},j),{},{className:n()(r,O)}))})}));f.displayName="CardHeader";var h=f,v=["bsPrefix","className","bg","text","border","body","children","as"],p=Object(d.a)("h5"),N=Object(d.a)("h6"),g=Object(l.a)("card-body"),y=Object(l.a)("card-title",{Component:p}),P=Object(l.a)("card-subtitle",{Component:N}),w=Object(l.a)("card-link",{Component:"a"}),C=Object(l.a)("card-text",{Component:"p"}),k=Object(l.a)("card-footer"),H=Object(l.a)("card-img-overlay"),R=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,i=e.bg,l=e.text,d=e.border,j=e.body,O=void 0!==j&&j,x=e.children,m=e.as,u=void 0===m?"div":m,f=Object(s.a)(e,v),h=Object(o.c)(c,"card");return Object(b.jsx)(u,Object(t.a)(Object(t.a)({ref:a},f),{},{className:n()(r,h,i&&"bg-".concat(i),l&&"text-".concat(l),d&&"border-".concat(d)),children:O?Object(b.jsx)(g,{children:x}):x}))}));R.displayName="Card";a.a=Object.assign(R,{Img:x,Title:y,Subtitle:P,Body:g,Link:w,Text:C,Header:h,Footer:k,ImgOverlay:H})},469:function(e,a,c){"use strict";var t=c(115),s=c(6),r=c(450),n=c(449),i=c.n(n),o=c(0),l=c(451),d=c(14),b=["as","bsPrefix","className"],j=["className"];var O=o.forwardRef((function(e,a){var c=function(e){var a=e.as,c=e.bsPrefix,t=e.className,n=Object(r.a)(e,b);c=Object(l.c)(c,"col");var o=Object(l.a)(),d=Object(l.b)(),j=[],O=[];return o.forEach((function(e){var a,t,s,r=n[e];delete n[e],"object"===typeof r&&null!=r?(a=r.span,t=r.offset,s=r.order):a=r;var i=e!==d?"-".concat(e):"";a&&j.push(!0===a?"".concat(c).concat(i):"".concat(c).concat(i,"-").concat(a)),null!=s&&O.push("order".concat(i,"-").concat(s)),null!=t&&O.push("offset".concat(i,"-").concat(t))})),[Object(s.a)(Object(s.a)({},n),{},{className:i.a.apply(void 0,[t].concat(j,O))}),{as:a,bsPrefix:c,spans:j}]}(e),n=Object(t.a)(c,2),o=n[0],O=o.className,x=Object(r.a)(o,j),m=n[1],u=m.as,f=void 0===u?"div":u,h=m.bsPrefix,v=m.spans;return Object(d.jsx)(f,Object(s.a)(Object(s.a)({},x),{},{ref:a,className:i()(O,!v.length&&h)}))}));O.displayName="Col",a.a=O},471:function(e,a,c){"use strict";var t=c(6),s=c(450),r=c(449),n=c.n(r),i=c(0),o=c(451),l=c(14),d=["bsPrefix","className","as"],b=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,i=e.as,b=void 0===i?"div":i,j=Object(s.a)(e,d),O=Object(o.c)(c,"row"),x=Object(o.a)(),m=Object(o.b)(),u="".concat(O,"-cols"),f=[];return x.forEach((function(e){var a,c=j[e];delete j[e],a=null!=c&&"object"===typeof c?c.cols:c;var t=e!==m?"-".concat(e):"";null!=a&&f.push("".concat(u).concat(t,"-").concat(a))})),Object(l.jsx)(b,Object(t.a)(Object(t.a)({ref:a},j),{},{className:n.a.apply(void 0,[r,O].concat(f))}))}));b.displayName="Row",a.a=b}}]);