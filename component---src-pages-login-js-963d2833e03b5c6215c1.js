"use strict";(self.webpackChunkgatsby_redux_material_ui_boilerplate=self.webpackChunkgatsby_redux_material_ui_boilerplate||[]).push([[875],{17467:function(e,r,n){n.r(r);var a=n(48926),i=n.n(a),s=n(63038),t=n.n(s),l=n(87757),o=n.n(l),d=n(1649),u=n(30664),c=n(4320),m=n(17216),h=n(41939),p=n(16961),x=n(48377),f=(n(57154),n(75708)),g=n(67294),w=n(36637),v=n(69360),b=n(3840),Z=n(35313),j=n(26651),y=n(90174),k=n(85893),_=(0,h.Z)(p.Z)((function(){return{display:"flex",alignItems:"center"}})),P=(0,h.Z)(_)((function(){return{justifyContent:"center"}})),C=(0,h.Z)(p.Z)((function(){return{height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"}})),S=((0,h.Z)(P)((function(){return{background:"#1A2038",minHeight:"100% !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}})),{email:"",password:"",remember:!0}),B=w.Ry().shape({password:w.Z_().min(6,"Password must be 6 character length").required("Password is required!"),email:w.Z_().email("Invalid Email address").required("Email is required!")});r.default=function(){(0,x.Z)();var e,r,n=(0,g.useState)(!1),a=t()(n,2),s=a[0],l=a[1],h=new URLSearchParams("undefined"!=typeof window&&(null===(e=window)||void 0===e||null===(r=e.location)||void 0===r?void 0:r.search)),p=h.get("o"),w=h.get("e"),E=(0,j.Z)(),q=E.login,L=E.setMessage,R=((0,b.useDispatch)(),function(){var e=i()(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,q(null==r?void 0:r.email,null==r?void 0:r.password);case 4:(0,Z.navigate)("/"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),L(e.t0.message),l(!1);case 11:l(!1);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(r){return e.apply(this,arguments)}}());return(0,g.useEffect)(i()(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p||!w){e.next=5;break}return e.next=3,v.Z.Cloud.run("verifyEmailAddress",{email:w,otp:p});case 3:r=e.sent,console.log(r);case 5:case"end":return e.stop()}}),e)}))),[p&&w]),(0,k.jsx)(y.Z,{children:(0,k.jsx)(u.Z,{className:"card",children:(0,k.jsxs)(c.ZP,{container:!0,children:[(0,k.jsx)(c.ZP,{item:!0,sm:6,xs:12,children:(0,k.jsx)(P,{p:4,height:"100%",sx:{minWidth:320}})}),(0,k.jsx)(c.ZP,{item:!0,sm:12,xs:12,children:(0,k.jsx)(C,{children:(0,k.jsx)(f.J9,{onSubmit:R,initialValues:S,validationSchema:B,children:function(e){var r=e.values,n=e.errors,a=e.touched,i=e.handleChange,t=e.handleBlur,l=e.handleSubmit;return(0,k.jsxs)("form",{onSubmit:l,children:[(0,k.jsx)(m.Z,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:t,value:r.email,onChange:i,helperText:a.email&&n.email,error:Boolean(n.email&&a.email),sx:{mb:3}}),(0,k.jsx)(m.Z,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:t,value:r.password,onChange:i,helperText:a.password&&n.password,error:Boolean(n.password&&a.password),sx:{mb:1.5}}),(0,k.jsxs)(_,{justifyContent:"space-between",children:[(0,k.jsx)(Z.Link,{to:"/register",children:"Register"}),(0,k.jsx)(Z.Link,{to:"/forgotPassword",children:"Forget Password"})]}),(0,k.jsx)(d.Z,{type:"submit",color:"primary",loading:s,variant:"contained",sx:{my:2},children:"Login"})]})}})})})]})})})}}}]);
//# sourceMappingURL=component---src-pages-login-js-963d2833e03b5c6215c1.js.map