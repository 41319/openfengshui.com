"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[293],{791:function(e,t,r){r.d(t,{A:function(){return P}});var a=r(8168),n=r(8587),l=r(6942),i=r.n(l),o=r(6540),c=r(3608),s=r(2471),m=r(268),d=r(2797),u=o.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,s=e.variant,m=e.as,d=void 0===m?"img":m,u=(0,n.A)(e,["bsPrefix","className","variant","as"]),v=(0,c.oU)(r,"card-img");return o.createElement(d,(0,a.A)({ref:t,className:i()(s?v+"-"+s:v,l)},u))}));u.displayName="CardImg",u.defaultProps={variant:null};var v=u,b=(0,m.A)("h5"),f=(0,m.A)("h6"),p=(0,s.A)("card-body"),E=(0,s.A)("card-title",{Component:b}),A=(0,s.A)("card-subtitle",{Component:f}),N=(0,s.A)("card-link",{Component:"a"}),g=(0,s.A)("card-text",{Component:"p"}),y=(0,s.A)("card-header"),h=(0,s.A)("card-footer"),x=(0,s.A)("card-img-overlay"),k=o.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,s=e.bg,m=e.text,u=e.border,v=e.body,b=e.children,f=e.as,E=void 0===f?"div":f,A=(0,n.A)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=(0,c.oU)(r,"card"),g=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return o.createElement(d.A.Provider,{value:g},o.createElement(E,(0,a.A)({ref:t},A,{className:i()(l,N,s&&"bg-"+s,m&&"text-"+m,u&&"border-"+u)}),v?o.createElement(p,null,b):b))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=v,k.Title=E,k.Subtitle=A,k.Body=p,k.Link=N,k.Text=g,k.Header=y,k.Footer=h,k.ImgOverlay=x;var P=k},5995:function(e,t,r){var a=r(6540),n=r(791),l=r(7753);r(6784);t.A=e=>{let{cover:t,avatar:r,title:i,text:o,subtitle:c,topContent:s,onButtonClick:m,buttonText:d}=e;return a.createElement(n.A,{border:"light",className:"text-center p-0 mb-4"},!s&&a.createElement("div",{style:{backgroundImage:`url(${t})`},className:"profile-cover rounded-top"}),a.createElement(n.A.Body,{className:"pt-0 pb-5 px-0"},s,r&&a.createElement(n.A.Img,{src:r,alt:"Neil Portrait",className:"user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"}),a.createElement(n.A.Title,null,i),a.createElement(n.A.Subtitle,{className:"fw-normal"}," ",c),a.createElement(n.A.Text,{className:"text-gray mb-4"},o),a.createElement(l.A,{variant:"primary",size:"sm",className:"me-2",onClick:()=>m&&m()},d),""))}},1249:function(e,t,r){var a=r(6540);t.A=e=>{let{children:t,classes:r="col-12"}=e;return a.createElement("div",{className:`${r}`},t)}},5909:function(e,t,r){r.d(t,{A:function(){return b}});var a=r(6540),n=r.t(a,2),l=(r(4794),r(5995),r(4230),r(7528),r(8168)),i=r(8587),o=r(6942),c=r.n(o),s=r(3608),m=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,o=e.animation,m=e.size,d=e.children,u=e.as,v=void 0===u?"div":u,b=e.className,f=(0,i.A)(e,["bsPrefix","variant","animation","size","children","as","className"]),p=(r=(0,s.oU)(r,"spinner"))+"-"+o;return a.createElement(v,(0,l.A)({ref:t},f,{className:c()(b,p,m&&p+"-"+m,n&&"text-"+n)}),d)}));m.displayName="Spinner";var d=m,u=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.striped,m=e.bordered,d=e.borderless,u=e.hover,v=e.size,b=e.variant,f=e.responsive,p=(0,i.A)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=(0,s.oU)(r,"table"),A=c()(n,E,b&&E+"-"+b,v&&E+"-"+v,o&&E+"-striped",m&&E+"-bordered",d&&E+"-borderless",u&&E+"-hover"),N=a.createElement("table",(0,l.A)({},p,{className:A,ref:t}));if(f){var g=E+"-responsive";return"string"==typeof f&&(g=g+"-"+f),a.createElement("div",{className:g},N)}return N}));r(1249),r(6784),r(3660),r(6462);const{useState:v}=n;var b=e=>{let{items:t,onItem:r,isLoading:n,cols:l,renderItem:i}=e;return n?a.createElement("div",{className:"text-center p-2"},a.createElement(d,{animation:"border",variant:"primary"})):a.createElement(u,null,a.createElement("thead",{className:"thead-light"},a.createElement("tr",null,null==l?void 0:l.map((e=>a.createElement("th",{className:"border-0 align-middle"}," ",e.label," "))))),a.createElement("tbody",null,null==t?void 0:t.map(((e,t)=>a.createElement("tr",{key:t},null==l?void 0:l.map((t=>a.createElement("td",{className:"border-0  align-middle"},t.onRender?t.onRender(e):e[t.key]))))))))}},7528:function(e,t,r){var a=r(6540),n=r(4794);t.A=function(e){var t,r;let{description:l,title:i,children:o}=e;const{site:c}=(0,n.useStaticQuery)("63159454"),s=l||c.siteMetadata.description,m=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?`${i} | ${m}`:i),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r?void 0:r.author)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:s}),o)}},9639:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o}});var a=r(6540),n=(r(5995),r(4230)),l=r(7528),i=(r(1249),r(4794));r(6784),r(3660),r(6462),r(5909),r(5750);const o=()=>a.createElement(l.A,{title:"Home"});t.default=()=>a.createElement(n.A,null,a.createElement("h3",null,"Welcome to OpenFengShui. To Look For Mobile Number. Please click ",a.createElement(i.Link,{to:"/numberFinder"},"here")))}}]);
//# sourceMappingURL=component---src-pages-index-js-161daf3c4f4d23f3f7cd.js.map