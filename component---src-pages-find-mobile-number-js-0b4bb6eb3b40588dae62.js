"use strict";(self.webpackChunkgatsby_redux_material_ui_boilerplate=self.webpackChunkgatsby_redux_material_ui_boilerplate||[]).push([[882],{61564:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(59713),i=t.n(r),a=t(63038),o=t.n(a),c=t(6479),u=t.n(c),s=t(87462),l=t(63366),d=t(67294),p=t(85505),f=t(90600),h=t(43656),m=t(47761),x=t(49240),y=t(62717);function v(e){return(0,y.Z)("MuiIcon",e)}(0,t(35495).Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var j=t(85893),S=["baseClassName","className","color","component","fontSize"],g=(0,h.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,x.Z)(t.color))],n["fontSize".concat((0,x.Z)(t.fontSize))]]}})((function(e){var n=e.theme,t=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:n.typography.pxToRem(20),medium:n.typography.pxToRem(24),large:n.typography.pxToRem(36)}[t.fontSize],color:{primary:n.palette.primary.main,secondary:n.palette.secondary.main,info:n.palette.info.main,success:n.palette.success.main,warning:n.palette.warning.main,action:n.palette.action.active,error:n.palette.error.main,disabled:n.palette.action.disabled,inherit:void 0}[t.color]}})),b=d.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiIcon"}),r=t.baseClassName,i=void 0===r?"material-icons":r,a=t.className,o=t.color,c=void 0===o?"inherit":o,u=t.component,d=void 0===u?"span":u,h=t.fontSize,y=void 0===h?"medium":h,b=(0,l.Z)(t,S),w=(0,s.Z)({},t,{baseClassName:i,color:c,component:d,fontSize:y}),Z=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,x.Z)(n)),"fontSize".concat((0,x.Z)(t))]};return(0,f.Z)(i,v,r)}(w);return(0,j.jsx)(g,(0,s.Z)({as:d,className:(0,p.default)(i,"notranslate",Z.root,a),ownerState:w,"aria-hidden":!0,ref:n},b))}));b.muiName="Icon";var w=b,Z=t(11521),C=t(66449),k=t(17951),z=t(22647),P=t(22840),I=(t(319),t(82374)),D=(0,h.ZP)(Z.Z)((function(){return{fontSize:"26px"}})),O=function(e){var n=e.onRefresh,t=(e.min,e.max,e.hidePagination),r=e.content2,i=e.renderItem,a=(e.showPrice,e.hideCopy,e.isLoading),c=e.dataArr,u=e.pageSize,s=void 0===u?15:u,l=(e.unmask,e.unmaskValue,e.handleClick,e.mask,e.displaySource,e.hideAuto),p=e.hideDl,f=((0,P.Z)("(min-width:600px)"),(0,C.Z)().palette,(0,d.useState)(c)),h=o()(f,2),m=(h[0],h[1],(0,d.useState)([])),x=o()(m,2),y=x[0],v=x[1],S=(0,d.useState)([]),g=o()(S,2),b=(g[0],g[1],(0,d.useState)(0)),w=o()(b,2),Z=(w[0],w[1],(0,d.useState)(0)),z=o()(Z,2),O=z[0],N=z[1],_=(0,d.useState)(!1),A=o()(_,2),E=A[0],R=A[1],M=(0,d.useState)(5),L=o()(M,2),F=L[0],q=(L[1],(0,d.useState)(0)),T=o()(q,2),W=T[0],V=T[1],U=(0,d.useState)(88),$=o()(U,2),G=($[0],$[1],(0,d.useState)(0)),H=o()(G,2),X=H[0],B=H[1],J=function(e){N(O+e)};(0,d.useEffect)((function(){n&&n(X)}),[X]);(0,d.useEffect)((function(){v(function(e,n){for(var t=[],r=0,i=e.length;r<i;)t.push(e.slice(r,r+=n));return t}(c,s)),N(0)}),[c,s]),(0,d.useEffect)((function(){if(E){var e=setInterval((function(){V((function(e){var n=e+1;return console.log(n),n}))}),1e3);return function(){clearInterval(e)}}V(0)}),[y,E]),(0,d.useEffect)((function(){W%F==0&&N((function(e){return e<y.length-1?e+1:0}))}),[W]);return(0,j.jsxs)(d.Fragment,{children:[(0,j.jsx)(k.Z,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:r}),(0,j.jsx)(k.Z,{gap:"30px",display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:y.map((function(e,n){return n===O&&e.map((function(e){return i&&i(e)}))}))}),(0,j.jsx)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:a?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(I.Z,{})}):(0,j.jsx)(k.Z,{height:"40px"})}),!t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:[(0,j.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){return J(-1)},disabled:0===O,children:"Prev"}),"Page ".concat(y.length?O+1:0," of ").concat(y.length),(0,j.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){return J(1)},disabled:O>=y.length-1,children:"Next"}),!l&&(0,j.jsxs)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){return R(!E)},children:[" ",E?"".concat(W%F," sec"):"Auto"]}),!p&&(0,j.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){B((function(e){return e+1}))},children:" Refresh Price"}),!p&&(0,j.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){},children:" Download"})]}),(0,j.jsx)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:(0,j.jsxs)("h5",{children:[" ",c.length," result found"]})})]}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{})]})},N=["min","max","crazySale","showPrice","hideCopy","isLoading","dataArr","pageSize","unmask","unmaskValue","handleClick","mask","displaySource","hideAuto","hideDl"];function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=(0,h.ZP)(Z.Z)((function(){return{fontSize:"26px"}})),R=function(e){var n=e.min,t=e.max,r=e.crazySale,i=(e.showPrice,e.hideCopy),a=e.isLoading,c=e.dataArr,s=e.pageSize,l=(e.unmask,e.unmaskValue,e.handleClick),p=e.mask,f=void 0===p?"yyyyyyyy":p,h=e.displaySource,m=(e.hideAuto,e.hideDl),x=u()(e,N),y=((0,P.Z)("(min-width:600px)"),(0,C.Z)().palette,(0,d.useState)([])),v=o()(y,2),S=v[0],g=v[1],b=(0,d.useState)([]),Z=o()(b,2),I=(Z[0],Z[1],(0,d.useState)([])),D=o()(I,2),_=(D[0],D[1],(0,d.useState)(0)),R=o()(_,2),M=(R[0],R[1],(0,d.useState)(0)),L=o()(M,2),F=(L[0],L[1],(0,d.useState)(!1)),q=o()(F,2),T=(q[0],q[1],(0,d.useState)(5)),W=o()(T,2),V=(W[0],W[1],(0,d.useState)(0)),U=o()(V,2),$=(U[0],U[1],(0,d.useState)(88)),G=o()($,2),H=(G[0],G[1],function(e,n){var r=Math.floor(Math.random()*t)+e;return"$".concat(r)}),X=function(e){return e&&e.map?e.map((function(e){return A(A({},e),{},{crazyPrice:"$"+H(Number(n),Number(t))})})):[]};(0,d.useEffect)((function(){g(X(c))}),[c]);var B={Gomo:"directions",Starhub:"star",Singtel:"music_note",M1:"brightness_7",MyRepublic:"domain",Simba:"title","singtel-changeNumber":"music_note"};return(0,j.jsx)(d.Fragment,{children:(0,j.jsx)(k.Z,{children:(0,j.jsx)(O,A(A({hideDl:m,hideAuto:!r},x),{},{pageSize:s,isLoading:a,dataArr:S,onRefresh:function(){g(X(c))},renderItem:function(e){return(0,j.jsx)(E,{title:null==e?void 0:e.title,variant:e.active?"contained":"outlined","aria-haspopup":"true",onClick:function(){return l&&l(e)},children:(0,j.jsxs)(k.Z,{children:[f.padEnd(e.num.length,"y").split("").map((function(n,t){return"x"===n?"X":e.num[t]})),"",h&&(0,j.jsx)(w,{style:{fontSize:"14px"},children:B[e.sourceId]}),!i&&(0,j.jsx)(z.Z,{onClick:function(n){n.stopPropagation(),navigator.clipboard.writeText(e.num)},children:(0,j.jsx)(w,{children:"content_copy"})})]})})}}))})})}},48885:function(e,n,t){t.r(n);var r=t(48926),i=t.n(r),a=t(63038),o=t.n(a),c=t(87757),u=t.n(c),s=t(67294),l=(t(36176),t(17951)),d=t(90174),p=t(24251),f=(t(38538),t(23490)),h=t(81595),m=(t(92492),t(8359),t(22840)),x=t(17216),y=t(66449),v=(t(27591),t(49308)),j=(t(48767),t(61564)),S=t(11521),g=(t(36916),t(69360)),b=(t(57154),t(80206)),w=t(4320),Z=t(85893),C=s.useEffect,k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};n.default=function(){var e=(0,s.useState)(""),n=o()(e,2),t=n[0],r=n[1],a=(0,s.useState)(""),c=o()(a,2),z=(c[0],c[1],(0,s.useState)("")),P=o()(z,2),I=(P[0],P[1],(0,s.useState)("")),D=o()(I,2),O=(D[0],D[1],(0,s.useState)(null)),N=o()(O,2),_=(N[0],N[1],(0,s.useState)("")),A=o()(_,2),E=A[0],R=A[1],M=(0,s.useState)([]),L=o()(M,2),F=L[0],q=L[1],T=(0,s.useState)(!1),W=o()(T,2),V=W[0],U=W[1],$=(0,s.useState)(null),G=o()($,2),H=G[0],X=G[1],B=(0,s.useState)(0),J=o()(B,2),K=(J[0],J[1]),Q=(0,y.Z)(),Y=((0,m.Z)(Q.breakpoints.up("sm")),s.useState(!1)),ee=o()(Y,2),ne=ee[0],te=ee[1],re=function(){var e=i()(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.Z.Cloud.run("queryNumbers",{query:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ie=function(){var e=i()(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.Z.Cloud.run("queryCount",{query:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ae=function(){var e=i()(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.Z.Cloud.run("querySpecificNumber",{_id:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();C((function(){var e=function(){var e=i()(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return isNaN(t)||re(t),e.next=3,ie();case 3:n=e.sent,K(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),C((function(){var e=function(){var e=i()(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("");case 2:n=e.sent,q((null==n?void 0:n.data)||[]),R(null==n?void 0:n.lastUpdatedDate);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var oe=function(){return(0,Z.jsxs)("h2",{children:[(0,Z.jsx)("a",{style:{color:"#25D366",textDecoration:"none"},href:"https://api.whatsapp.com/send?phone=6587413159&text=I want to see the full number",children:"Whatsapp"})," us to see the full number."]})};return(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)(w.ZP,{item:!0,xs:12,lg:6,children:[(0,Z.jsx)(p.Z,{title:"Home"}),(0,Z.jsx)(l.Z,{display:"flex",justifyContent:"center",flexDirection:"column",children:(0,Z.jsxs)(f._,{dateAdapter:h.y,children:[(0,Z.jsxs)(l.Z,{sx:{textAlign:"center"},justifyContent:"center",children:[(0,Z.jsx)(oe,{}),(0,Z.jsxs)("h2",{children:["Last Updated: ",E]})]}),(0,Z.jsxs)(l.Z,{display:"flex",justifyContent:"center",flexDirection:"row",children:[(0,Z.jsx)(x.Z,{id:"outlined-basic",label:"3 - 5 digits",variant:"outlined",onChange:function(e){return r(e.target.value)}}),(0,Z.jsx)(S.Z,{onClick:i()(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,re(t);case 3:n=e.sent,q((null==n?void 0:n.data)||[]),U(!1);case 6:case"end":return e.stop()}}),e)}))),children:"Find"})]})]})}),(0,Z.jsx)(l.Z,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:!!F.length&&(0,Z.jsx)("h2",{children:"".concat(F.length," number Found. ")})}),(0,Z.jsx)("br",{}),(0,Z.jsx)(j.Z,{displaySource:!1,isLoading:V,hideDl:!0,dataArr:F,hideCopy:!0,handleClick:function(){var e=i()(u().mark((function e(n){var t,r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(n._id);case 2:null!=(t=e.sent)&&t.answer?X({title:null==t||null===(r=t.answer)||void 0===r?void 0:r.num,content:(0,Z.jsxs)("h2",{children:["The number can be found from ",null==t||null===(i=t.answer)||void 0===i?void 0:i.sourceId]})}):X({title:n.num,content:(0,Z.jsx)("h2",{children:(0,Z.jsx)(oe,{})})}),te(!0);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),(0,Z.jsx)(b.Z,{open:ne,onClose:function(){return te(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsxs)(l.Z,{sx:k,children:[(0,Z.jsx)(v.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:null==H?void 0:H.title}),(0,Z.jsx)(v.Z,{id:"modal-modal-description",sx:{mt:2},children:null==H?void 0:H.content})]})})]})})}}}]);