"use strict";(self.webpackChunkgatsby_redux_material_ui_boilerplate=self.webpackChunkgatsby_redux_material_ui_boilerplate||[]).push([[882],{61564:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(59713),i=n.n(r),a=n(63038),o=n.n(a),c=n(6479),s=n.n(c),u=n(87462),l=n(63366),d=n(67294),p=n(85505),f=n(90600),h=n(43656),m=n(47761),x=n(49240),y=n(62717);function S(e){return(0,y.Z)("MuiIcon",e)}(0,n(35495).Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=n(85893),j=["baseClassName","className","color","component","fontSize"],v=(0,h.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat((0,x.Z)(n.color))],t["fontSize".concat((0,x.Z)(n.fontSize))]]}})((function(e){var t=e.theme,n=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:t.typography.pxToRem(20),medium:t.typography.pxToRem(24),large:t.typography.pxToRem(36)}[n.fontSize],color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[n.color]}})),b=d.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiIcon"}),r=n.baseClassName,i=void 0===r?"material-icons":r,a=n.className,o=n.color,c=void 0===o?"inherit":o,s=n.component,d=void 0===s?"span":s,h=n.fontSize,y=void 0===h?"medium":h,b=(0,l.Z)(n,j),w=(0,u.Z)({},n,{baseClassName:i,color:c,component:d,fontSize:y}),Z=function(e){var t=e.color,n=e.fontSize,r=e.classes,i={root:["root","inherit"!==t&&"color".concat((0,x.Z)(t)),"fontSize".concat((0,x.Z)(n))]};return(0,f.Z)(i,S,r)}(w);return(0,g.jsx)(v,(0,u.Z)({as:d,className:(0,p.default)(i,"notranslate",Z.root,a),ownerState:w,"aria-hidden":!0,ref:t},b))}));b.muiName="Icon";var w=b,Z=n(11521),C=n(66449),k=n(17951),z=n(22647),P=n(22840),I=(n(319),n(82374)),D=(0,h.ZP)(Z.Z)((function(){return{fontSize:"26px"}})),O=function(e){var t=e.onRefresh,n=(e.min,e.max,e.hidePagination),r=e.content2,i=e.renderItem,a=(e.showPrice,e.hideCopy,e.isLoading),c=e.dataArr,s=e.pageSize,u=void 0===s?15:s,l=(e.unmask,e.unmaskValue,e.handleClick,e.mask,e.displaySource,e.hideAuto),p=e.hideDl,f=((0,P.Z)("(min-width:600px)"),(0,C.Z)().palette,(0,d.useState)(c)),h=o()(f,2),m=(h[0],h[1],(0,d.useState)([])),x=o()(m,2),y=x[0],S=x[1],j=(0,d.useState)([]),v=o()(j,2),b=(v[0],v[1],(0,d.useState)(0)),w=o()(b,2),Z=(w[0],w[1],(0,d.useState)(0)),z=o()(Z,2),O=z[0],N=z[1],_=(0,d.useState)(!1),A=o()(_,2),E=A[0],R=A[1],M=(0,d.useState)(5),q=o()(M,2),F=q[0],L=(q[1],(0,d.useState)(0)),W=o()(L,2),T=W[0],V=W[1],$=(0,d.useState)(88),G=o()($,2),H=(G[0],G[1],(0,d.useState)(0)),X=o()(H,2),B=X[0],J=X[1],K=function(e){N(O+e)};(0,d.useEffect)((function(){t&&t(B)}),[B]);(0,d.useEffect)((function(){S(function(e,t){for(var n=[],r=0,i=e.length;r<i;)n.push(e.slice(r,r+=t));return n}(c,u)),N(0)}),[c,u]),(0,d.useEffect)((function(){if(E){var e=setInterval((function(){V((function(e){var t=e+1;return console.log(t),t}))}),1e3);return function(){clearInterval(e)}}V(0)}),[y,E]),(0,d.useEffect)((function(){T%F==0&&N((function(e){return e<y.length-1?e+1:0}))}),[T]);return(0,g.jsxs)(d.Fragment,{children:[(0,g.jsx)(k.Z,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:r}),(0,g.jsx)(k.Z,{gap:"30px",display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:y.map((function(e,t){return t===O&&e.map((function(e){return i&&i(e)}))}))}),(0,g.jsx)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:a?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(I.Z,{})}):(0,g.jsx)(k.Z,{height:"40px"})}),!n&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:[(0,g.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){return K(-1)},disabled:0===O,children:"Prev"}),"Page ".concat(y.length?O+1:0," of ").concat(y.length),(0,g.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){return K(1)},disabled:O>=y.length-1,children:"Next"}),!l&&(0,g.jsxs)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){return R(!E)},children:[" ",E?"".concat(T%F," sec"):"Auto"]}),!p&&(0,g.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){J((function(e){return e+1}))},children:" Refresh Price"}),!p&&(0,g.jsx)(D,{variant:"outlined","aria-haspopup":"true",onClick:function(){},children:" Download"})]}),(0,g.jsx)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:(0,g.jsxs)("h5",{children:[" ",c.length," result found"]})})]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})]})},N=["min","max","crazySale","showPrice","hideCopy","isLoading","dataArr","pageSize","unmask","unmaskValue","handleClick","mask","displaySource","hideAuto","hideDl"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=(0,h.ZP)(Z.Z)((function(){return{fontSize:"26px"}})),R=function(e){var t=e.min,n=e.max,r=e.crazySale,i=(e.showPrice,e.hideCopy),a=e.isLoading,c=e.dataArr,u=e.pageSize,l=(e.unmask,e.unmaskValue,e.handleClick),p=e.mask,f=void 0===p?"yyyyyyyy":p,h=e.displaySource,m=(e.hideAuto,e.hideDl),x=s()(e,N),y=((0,P.Z)("(min-width:600px)"),(0,C.Z)().palette,(0,d.useState)([])),S=o()(y,2),j=S[0],v=S[1],b=(0,d.useState)([]),Z=o()(b,2),I=(Z[0],Z[1],(0,d.useState)([])),D=o()(I,2),_=(D[0],D[1],(0,d.useState)(0)),R=o()(_,2),M=(R[0],R[1],(0,d.useState)(0)),q=o()(M,2),F=(q[0],q[1],(0,d.useState)(!1)),L=o()(F,2),W=(L[0],L[1],(0,d.useState)(5)),T=o()(W,2),V=(T[0],T[1],(0,d.useState)(0)),$=o()(V,2),G=($[0],$[1],(0,d.useState)(88)),H=o()(G,2),X=(H[0],H[1],function(e,t){var r=Math.floor(Math.random()*n)+e;return"$".concat(r)}),B=function(e){return e&&e.map?e.map((function(e){return A(A({},e),{},{crazyPrice:"$"+X(Number(t),Number(n))})})):[]};(0,d.useEffect)((function(){v(B(c))}),[c]);var J={Gomo:"directions",Starhub:"star",Singtel:"music_note",M1:"brightness_7",MyRepublic:"domain",Simba:"title","singtel-changeNumber":"music_note"};return(0,g.jsx)(d.Fragment,{children:(0,g.jsx)(k.Z,{children:(0,g.jsx)(O,A(A({hideDl:m,hideAuto:!r},x),{},{pageSize:u,isLoading:a,dataArr:j,onRefresh:function(){v(B(c))},renderItem:function(e){return(0,g.jsx)(E,{title:null==e?void 0:e.title,variant:e.active?"contained":"outlined","aria-haspopup":"true",onClick:function(){return l&&l(e)},children:(0,g.jsxs)(k.Z,{children:[f.padEnd(e.num.length,"y").split("").map((function(t,n){return"x"===t?"X":e.num[n]})),"",h&&(0,g.jsx)(w,{style:{fontSize:"14px"},children:J[e.sourceId]}),!i&&(0,g.jsx)(z.Z,{onClick:function(t){t.stopPropagation(),navigator.clipboard.writeText(e.num)},children:(0,g.jsx)(w,{children:"content_copy"})})]})})}}))})})}},48885:function(e,t,n){n.r(t);var r=n(48926),i=n.n(r),a=n(63038),o=n.n(a),c=n(87757),s=n.n(c),u=n(67294),l=(n(36176),n(17951)),d=n(90174),p=n(24251),f=(n(38538),n(23490)),h=n(81595),m=(n(92492),n(8359),n(22840)),x=n(17216),y=n(66449),S=(n(27591),n(49308)),g=(n(48767),n(61564)),j=n(11521),v=(n(36916),n(69360)),b=(n(57154),n(80206)),w=n(4320),Z=n(85893),C=u.useEffect,k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};t.default=function(){var e=(0,u.useState)(""),t=o()(e,2),n=t[0],r=t[1],a=(0,u.useState)(""),c=o()(a,2),z=(c[0],c[1],(0,u.useState)("")),P=o()(z,2),I=(P[0],P[1],(0,u.useState)("")),D=o()(I,2),O=(D[0],D[1],(0,u.useState)(null)),N=o()(O,2),_=(N[0],N[1],(0,u.useState)([])),A=o()(_,2),E=(A[0],A[1],(0,u.useState)([])),R=o()(E,2),M=R[0],q=R[1],F=(0,u.useState)(!1),L=o()(F,2),W=L[0],T=L[1],V=(0,u.useState)(null),$=o()(V,2),G=$[0],H=$[1],X=(0,u.useState)(0),B=o()(X,2),J=B[0],K=B[1],Q=(0,y.Z)(),U=((0,m.Z)(Q.breakpoints.up("sm")),u.useState(!1)),Y=o()(U,2),ee=Y[0],te=Y[1],ne=function(){var e=i()(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.Z.Cloud.run("queryNumbers",{query:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=i()(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.Z.Cloud.run("queryCount",{query:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=i()(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.Z.Cloud.run("querySpecificNumber",{_id:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return C(i()(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return isNaN(n)||ne(n),e.next=3,re();case 3:t=e.sent,K(t);case 5:case"end":return e.stop()}}),e)}))),[]),C((function(){}),[]),(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)(w.ZP,{item:!0,xs:12,lg:6,children:[(0,Z.jsx)(p.Z,{title:"Home"}),(0,Z.jsx)(l.Z,{display:"flex",justifyContent:"center",flexDirection:"column",children:(0,Z.jsxs)(f._,{dateAdapter:h.y,children:[(0,Z.jsx)(l.Z,{sx:{textAlign:"center"},justifyContent:"center",children:(0,Z.jsxs)("h2",{children:[(0,Z.jsx)("a",{style:{color:"#25D366",textDecoration:"none"},href:"https://api.whatsapp.com/send?phone=6587413159&text=I want to see the full number",children:"Whatsapp"})," us to find out how to see the full number."]})}),(0,Z.jsxs)(l.Z,{display:"flex",justifyContent:"center",flexDirection:"row",children:[(0,Z.jsx)(x.Z,{id:"outlined-basic",label:"3 - 5 digits",variant:"outlined",onChange:function(e){return r(e.target.value)}}),(0,Z.jsx)(j.Z,{onClick:i()(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,ne(n);case 3:t=e.sent,q(t),T(!1);case 6:case"end":return e.stop()}}),e)}))),children:"Find"})]})]})}),(0,Z.jsxs)(l.Z,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:[(0,Z.jsx)("h2",{children:"".concat(J," query left for this month. ")}),!!M.length&&(0,Z.jsx)("h2",{children:"".concat(M.length," number Found. ")})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)(g.Z,{displaySource:!1,isLoading:W,hideDl:!0,dataArr:M,hideCopy:!0,handleClick:function(){var e=i()(s().mark((function e(t){var n,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(t._id);case 2:null!=(n=e.sent)&&n.answer?H({title:null==n||null===(r=n.answer)||void 0===r?void 0:r.num,content:(0,Z.jsxs)("h2",{children:["The number can be found from ",null==n||null===(i=n.answer)||void 0===i?void 0:i.sourceId]})}):H({title:t.num,content:(0,Z.jsxs)("h2",{children:[(0,Z.jsx)("a",{style:{color:"#25D366",textDecoration:"none"},href:"https://api.whatsapp.com/send?phone=6587413159&text=I want to see the full number",children:"Whatsapp"})," us to find out how to see the full number."]})}),te(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,Z.jsx)(b.Z,{open:ee,onClose:function(){return te(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsxs)(l.Z,{sx:k,children:[(0,Z.jsx)(S.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:null==G?void 0:G.title}),(0,Z.jsx)(S.Z,{id:"modal-modal-description",sx:{mt:2},children:null==G?void 0:G.content})]})})]})})}}}]);
//# sourceMappingURL=component---src-pages-find-mobile-number-js-443b113ff4ee99e1336f.js.map