"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[34],{791:function(e,a,r){r.d(a,{A:function(){return I}});var t=r(8168),i=r(8587),l=r(6942),n=r.n(l),s=r(6540),o=r(3608),c=r(2471),d=r(268),m=r(2797),f=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,c=e.variant,d=e.as,m=void 0===d?"img":d,f=(0,i.A)(e,["bsPrefix","className","variant","as"]),u=(0,o.oU)(r,"card-img");return s.createElement(m,(0,t.A)({ref:a,className:n()(c?u+"-"+c:u,l)},f))}));f.displayName="CardImg",f.defaultProps={variant:null};var u=f,v=(0,d.A)("h5"),p=(0,d.A)("h6"),b=(0,c.A)("card-body"),A=(0,c.A)("card-title",{Component:v}),N=(0,c.A)("card-subtitle",{Component:p}),y=(0,c.A)("card-link",{Component:"a"}),x=(0,c.A)("card-text",{Component:"p"}),h=(0,c.A)("card-header"),P=(0,c.A)("card-footer"),E=(0,c.A)("card-img-overlay"),w=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,c=e.bg,d=e.text,f=e.border,u=e.body,v=e.children,p=e.as,A=void 0===p?"div":p,N=(0,i.A)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,o.oU)(r,"card"),x=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.createElement(m.A.Provider,{value:x},s.createElement(A,(0,t.A)({ref:a},N,{className:n()(l,y,c&&"bg-"+c,d&&"text-"+d,f&&"border-"+f)}),u?s.createElement(b,null,v):v))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=u,w.Title=A,w.Subtitle=N,w.Body=b,w.Link=y,w.Text=x,w.Header=h,w.Footer=P,w.ImgOverlay=E;var I=w},2797:function(e,a,r){var t=r(6540).createContext(null);t.displayName="CardContext",a.A=t},9906:function(e,a,r){r.d(a,{A:function(){return O}});var t=r(8168),i=r(8587),l=r(6942),n=r.n(l),s=r(6540),o=r(5556),c=r.n(o),d={type:c().string,tooltip:c().bool,as:c().elementType},m=s.forwardRef((function(e,a){var r=e.as,l=void 0===r?"div":r,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,f=void 0!==m&&m,u=(0,i.A)(e,["as","className","type","tooltip"]);return s.createElement(l,(0,t.A)({},u,{ref:a,className:n()(o,d+"-"+(f?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=d;var f=m,u=r(5240),v=r(5189),p=r(3608),b=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,o=e.htmlFor,c=(0,i.A)(e,["bsPrefix","className","htmlFor"]),d=(0,s.useContext)(v.A).controlId;return r=(0,p.oU)(r,"form-check-label"),s.createElement("label",(0,t.A)({},c,{ref:a,htmlFor:o||d,className:n()(l,r)}))}));b.displayName="FormCheckLabel";var A=b,N=s.forwardRef((function(e,a){var r=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,c=e.inline,d=void 0!==c&&c,m=e.disabled,b=void 0!==m&&m,N=e.isValid,y=void 0!==N&&N,x=e.isInvalid,h=void 0!==x&&x,P=e.feedbackTooltip,E=void 0!==P&&P,w=e.feedback,I=e.className,C=e.style,k=e.title,g=void 0===k?"":k,F=e.type,R=void 0===F?"checkbox":F,z=e.label,U=e.children,S=e.as,T=void 0===S?"input":S,V=(0,i.A)(e,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"]);l=(0,p.oU)(l,"form-check"),o=(0,p.oU)(o,"form-switch");var O=(0,s.useContext)(v.A).controlId,L=(0,s.useMemo)((function(){return{controlId:r||O}}),[O,r]),_=null!=z&&!1!==z&&!U,G=s.createElement(u.A,(0,t.A)({},V,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:h,disabled:b,as:T}));return s.createElement(v.A.Provider,{value:L},s.createElement("div",{style:C,className:n()(I,z&&l,d&&l+"-inline","switch"===R&&o)},U||s.createElement(s.Fragment,null,G,_&&s.createElement(A,{title:g},z),(y||h)&&s.createElement(f,{type:y?"valid":"invalid",tooltip:E},w))))}));N.displayName="FormCheck",N.Input=u.A,N.Label=A;var y=N,x=(r(9771),s.forwardRef((function(e,a){var r,l,o,c=e.bsPrefix,d=e.type,m=e.size,f=e.htmlSize,u=e.id,b=e.className,A=e.isValid,N=void 0!==A&&A,y=e.isInvalid,x=void 0!==y&&y,h=e.plaintext,P=e.readOnly,E=e.as,w=void 0===E?"input":E,I=(0,i.A)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=(0,s.useContext)(v.A).controlId;(c=(0,p.oU)(c,"form-control"),h)?((l={})[c+"-plaintext"]=!0,r=l):((o={})[c]=!0,o[c+"-"+m]=m,r=o);return s.createElement(w,(0,t.A)({},I,{type:d,size:f,ref:a,readOnly:P,id:u||C,className:n()(b,r,N&&"is-valid",x&&"is-invalid","color"===d&&c+"-color")}))})));x.displayName="FormControl";var h=Object.assign(x,{Feedback:f}),P=s.forwardRef((function(e,a){var r=e.children,l=e.controlId,n=e.as,o=void 0===n?"div":n,c=(0,i.A)(e,["children","controlId","as"]),d=(0,s.useMemo)((function(){return{controlId:l}}),[l]);return s.createElement(v.A.Provider,{value:d},s.createElement(o,(0,t.A)({},c,{ref:a}),r))}));P.displayName="FormGroup";var E=P,w=r(3014),I=s.forwardRef((function(e,a){var r=e.as,l=void 0===r?"label":r,o=e.bsPrefix,c=e.column,d=e.srOnly,m=e.className,f=e.htmlFor,u=(0,i.A)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),b=(0,s.useContext)(v.A).controlId;o=(0,p.oU)(o,"form-label");var A="col-form-label";"string"==typeof c&&(A=A+" "+A+"-"+c);var N=n()(m,o,d&&"sr-only",c&&A);return f=f||b,c?s.createElement(w.A,(0,t.A)({as:"label",className:N,htmlFor:f},u)):s.createElement(l,(0,t.A)({ref:a,className:N,htmlFor:f},u))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var C=I,k=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,o=(0,i.A)(e,["bsPrefix","className"]);return r=(0,p.oU)(r,"form-range"),s.createElement("input",(0,t.A)({},o,{type:"range",ref:a,className:n()(l,r)}))}));k.displayName="FormRange";var g=k,F=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.size,o=e.htmlSize,c=e.className,d=e.isValid,m=void 0!==d&&d,f=e.isInvalid,u=void 0!==f&&f,v=(0,i.A)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid"]);return r=(0,p.oU)(r,"form-select"),s.createElement("select",(0,t.A)({},v,{size:o,ref:a,className:n()(c,r,l&&r+"-"+l,m&&"is-valid",u&&"is-invalid")}))}));F.displayName="FormSelect";var R=F,z=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,m=(0,i.A)(e,["bsPrefix","className","as","muted"]);return r=(0,p.oU)(r,"form-text"),s.createElement(c,(0,t.A)({},m,{ref:a,className:n()(l,r,d&&"text-muted")}))}));z.displayName="FormText";var U=z,S=s.forwardRef((function(e,a){return s.createElement(y,(0,t.A)({},e,{ref:a,type:"switch"}))}));S.displayName="Switch",S.Input=y.Input,S.Label=y.Label;var T=S,V=s.forwardRef((function(e,a){var r=e.className,l=e.validated,o=e.as,c=void 0===o?"form":o,d=(0,i.A)(e,["className","validated","as"]);return s.createElement(c,(0,t.A)({},d,{ref:a,className:n()(r,l&&"was-validated")}))}));V.displayName="Form",V.Group=E,V.Control=h,V.Check=y,V.Switch=T,V.Label=C,V.Text=U,V.Range=g,V.Select=R;var O=V},5240:function(e,a,r){var t=r(8168),i=r(8587),l=r(6942),n=r.n(l),s=r(6540),o=r(5189),c=r(3608),d=s.forwardRef((function(e,a){var r=e.id,l=e.bsPrefix,d=e.className,m=e.type,f=void 0===m?"checkbox":m,u=e.isValid,v=void 0!==u&&u,p=e.isInvalid,b=void 0!==p&&p,A=e.as,N=void 0===A?"input":A,y=(0,i.A)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),x=(0,s.useContext)(o.A).controlId;return l=(0,c.oU)(l,"form-check-input"),s.createElement(N,(0,t.A)({},y,{ref:a,type:f,id:r||x,className:n()(d,l,v&&"is-valid",b&&"is-invalid")}))}));d.displayName="FormCheckInput",a.A=d},5189:function(e,a,r){var t=r(6540).createContext({controlId:void 0});a.A=t},7009:function(e,a,r){var t=r(8587),i=r(8168),l=r(6942),n=r.n(l),s=r(6540),o=r(2471),c=r(3608),d=r(5240),m=(0,o.A)("input-group-text",{Component:"span"}),f=s.forwardRef((function(e,a){var r=e.bsPrefix,l=e.size,o=e.className,d=e.as,m=void 0===d?"div":d,f=(0,t.A)(e,["bsPrefix","size","className","as"]);return r=(0,c.oU)(r,"input-group"),s.createElement(m,(0,i.A)({ref:a},f,{className:n()(o,r,l&&r+"-"+l)}))}));f.displayName="InputGroup";var u=(0,i.A)({},f,{Text:m,Radio:function(e){return s.createElement(m,null,s.createElement(d.A,(0,i.A)({type:"radio"},e)))},Checkbox:function(e){return s.createElement(m,null,s.createElement(d.A,(0,i.A)({type:"checkbox"},e)))}});a.A=u},268:function(e,a,r){var t=r(8168),i=r(6540),l=r(6942),n=r.n(l);a.A=function(e){return i.forwardRef((function(a,r){return i.createElement("div",(0,t.A)({},a,{ref:r,className:n()(a.className,e)}))}))}},5750:function(e,a,r){var t=r(6540),i=r(5887);a.A=()=>(0,t.useContext)(i.A)},9976:function(e,a,r){a.A=r.p+"static/signin-454f944b6a4061b0ac2932fc2ba2de17.svg"}}]);
//# sourceMappingURL=80a0cf133c7b388026fdbb61973f1447b7201e20-0bcae5acb941812e057d.js.map