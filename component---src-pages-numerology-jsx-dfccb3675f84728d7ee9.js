"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[437],{2589:function(e,t,l){var n;l.r(t);var a=l(7294),i=l(4647),o=l(2059),r=(l(177),l(1606),l(4865),l(1643),l(6582),l(4774),l(682)),u=l(2086),s=l(7916),Z=l(392),c=l(1006),d=l(4051),v=l(1555),f=(l(7936),l(4848),l(84)),m=(l(915),l(722),l(8036)),h=l(4292),p=l(4565),b=(l(4066),l(7782)),y=l(917);const{useCallback:g}=n||(n=l.t(a,2)),N=e=>e?(0,y.tZ)("i",{className:"icofont-tick-boxed"}):(0,y.tZ)("i",{className:"icofont-error"}),{useState:k,useEffect:w}=n||(n=l.t(a,2));t.default=e=>{var t,l,n,x,C,K;let{location:E}=e;const{t:G}=(0,b.useTranslation)(),A=new URLSearchParams(E.search).get("number"),[P,H]=k(new Date),[B,D]=k(A||""),[M,Y]=k([]),[S,T]=k([]),[z,L]=k(null),[R,_]=k("m"),j=g((e=>{e&&e.focus()}),[]);w((()=>{const e=(0,m.L9)(B).map((e=>({number:e,star:(0,m.wG)(e)})));if(Y(e),(null==B?void 0:B.length)>1){const e=(0,m.SK)(B),{main:t,process:l,outcome:n}=e;L(e)}else L(null)}),[B]),w((()=>{const e=[];B.includes("0")&&e.push("Avoid 0 in the number. 避开0号");!!["87","78","91","19"].filter((e=>B.includes(e))).length&&e.push("Avoid 87, 91, 19, 78 for ladies. 87, 91, 19, 79 女生不宜"),M.forEach((e=>{}),[]);const t=M[M.length-1];t&&["wugui","liusha","huohai","jueming"].includes(t.star.type)&&e.push("Avoid "+t.star.type+" at the end. 避开"+m.Qe[t.star.type]+"尾数"),M.map((e=>e.type)),T(e)}),[M]);const[F,I]=k(f.If[13]),[Q,J]=k(null);return(0,y.tZ)(i.Z,null,(0,y.tZ)(o.Z,{title:"Home",pathname:"/"}),(0,y.tZ)(r.Z,null,(0,y.tZ)("h3",null,G("Is Your Mobile Number Lucky?")),(0,y.tZ)(h.l0,{action:"#"},(0,y.tZ)(h.hd,{type:"text",placeholder:G(" Enter Your Number"),onChange:e=>D(e.target.value),value:B,ref:j,type:"number"}),(0,y.tZ)(u.Z,{"aria-label":"Basic example",className:"w-100 mt-3"},(0,y.tZ)(s.Z,{onClick:()=>_("m"),variant:"m"===R?"success":"secondary"}," ",G("Male")," "),(0,y.tZ)(s.Z,{onClick:()=>_("f"),variant:"f"===R?"success":"secondary"}," ",G("Female")," "))),(0,y.tZ)("br",null),(0,y.tZ)("br",null),z&&(0,y.tZ)(Z.Z,{defaultActiveKey:"0"},(0,y.tZ)(c.Z,null,(0,y.tZ)(c.Z.Header,null,(0,y.tZ)(Z.Z.Toggle,{eventKey:"0"},(0,y.tZ)("h3",null," ",G("Lucky Number Checklist")," "))),(0,y.tZ)(Z.Z.Collapse,{eventKey:"0"},(0,y.tZ)(c.Z.Body,null,(0,y.tZ)("h4",null," ",G("Yi Jing Number Method (Method 1)")," "),(0,y.tZ)("ol",null,(0,y.tZ)("li",null," ",G("Avoid Zero"),"  ",N(!B.includes("0"))),(0,y.tZ)("li",null,G("Avoid Negative Number at the last")," ",N(!["wugui","liusha","huohai","jueming"].includes(M[M.length-1]))," "),(0,y.tZ)("li",null,G("Have TianYi"),"  ",N(M.find((e=>"tianyi"===e.star.type)))),(0,y.tZ)("li",null,G("Have ShengQi"),"  ",N(M.find((e=>"shengqi"===e.star.type)))),(0,y.tZ)("li",null,G("Have YanNian"),"  ",N(M.find((e=>"yannian"===e.star.type)))),"f"===R&&(0,y.tZ)("li",null,G("Avoid 91, 19, 87, 78")," ",N(!["87","78","91","19"].filter((e=>B.includes(e))).length))),(0,y.tZ)("h4",null," ",G("Yi Jing Gua Method (Method 2)")," "),(0,y.tZ)("ol",null,(0,y.tZ)("li",null,G("本卦 should be Good"),"  ",N("Good"===(null==z||null===(t=z.main)||void 0===t?void 0:t.info))," "),(0,y.tZ)("li",null,G("互卦 should be Good"),"  ",N("Good"===(null==z||null===(l=z.process)||void 0===l?void 0:l.info))),(0,y.tZ)("li",null,G("变卦 should be Good"),"  ",N("Good"===(null==z||null===(n=z.outcome)||void 0===n?void 0:n.info))))))),(0,y.tZ)(c.Z,null,(0,y.tZ)(c.Z.Header,null,(0,y.tZ)(Z.Z.Toggle,{eventKey:"1"},(0,y.tZ)("h3",null," ",G("Number Energy Flow")," "))),(0,y.tZ)(Z.Z.Collapse,{eventKey:"1"},(0,y.tZ)(c.Z.Body,null,(0,y.tZ)(a.Fragment,null,null==M?void 0:M.map((e=>e.star.type+" "+m.Qe[e.star.type]+" "+e.star.level)).join(" => "))))),(0,y.tZ)(c.Z,null,(0,y.tZ)(c.Z.Header,null,(0,y.tZ)(Z.Z.Toggle,{eventKey:"2"},(0,y.tZ)("h3",null," ",G("Number Gua")))),(0,y.tZ)(Z.Z.Collapse,{eventKey:"2"},(0,y.tZ)(c.Z.Body,null,(0,y.tZ)(d.Z,null,(0,y.tZ)(v.Z,{xs:3},(0,y.tZ)(p.Z,{trigram:null==z?void 0:z.main.binary,title:"本卦 "+(null==z||null===(x=z.main)||void 0===x?void 0:x.info)})),(0,y.tZ)(v.Z,{xs:1}),(0,y.tZ)(v.Z,{xs:3},(0,y.tZ)(p.Z,{trigram:null==z?void 0:z.process.binary,title:"互卦 "+(null==z||null===(C=z.process)||void 0===C?void 0:C.info)})),(0,y.tZ)(v.Z,{xs:1}),(0,y.tZ)(v.Z,{xs:3},(0,y.tZ)(p.Z,{trigram:null==z?void 0:z.outcome.binary,title:"变卦 "+(null==z||null===(K=z.outcome)||void 0===K?void 0:K.info)})))))))))}},7916:function(e,t,l){l.d(t,{Z:function(){return h}});var n=l(7462),a=l(3366),i=l(4184),o=l.n(i),r=l(7294),u=l(6792),s=l(6833),Z=["as","disabled","onKeyDown"];function c(e){return!e||"#"===e.trim()}var d=r.forwardRef((function(e,t){var l=e.as,i=void 0===l?"a":l,o=e.disabled,u=e.onKeyDown,d=(0,a.Z)(e,Z),v=function(e){var t=d.href,l=d.onClick;(o||c(t))&&e.preventDefault(),o?e.stopPropagation():l&&l(e)};return c(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),o&&(d.tabIndex=-1,d["aria-disabled"]=!0),r.createElement(i,(0,n.Z)({ref:t},d,{onClick:v,onKeyDown:(0,s.Z)((function(e){" "===e.key&&(e.preventDefault(),v(e))}),u)}))}));d.displayName="SafeAnchor";var v=d,f=["bsPrefix","variant","size","active","className","block","type","as"],m=r.forwardRef((function(e,t){var l=e.bsPrefix,i=e.variant,s=e.size,Z=e.active,c=e.className,d=e.block,m=e.type,h=e.as,p=(0,a.Z)(e,f),b=(0,u.vE)(l,"btn"),y=o()(c,b,Z&&"active",i&&b+"-"+i,d&&b+"-block",s&&b+"-"+s);if(p.href)return r.createElement(v,(0,n.Z)({},p,{as:h,ref:t,className:o()(y,p.disabled&&"disabled")}));t&&(p.ref=t),m?p.type=m:h||(p.type="button");var g=h||"button";return r.createElement(g,(0,n.Z)({},p,{className:y}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var h=m},2086:function(e,t,l){var n=l(7462),a=l(3366),i=l(4184),o=l.n(i),r=l(7294),u=l(6792),s=["bsPrefix","size","toggle","vertical","className","as"],Z=r.forwardRef((function(e,t){var l=e.bsPrefix,i=e.size,Z=e.toggle,c=e.vertical,d=e.className,v=e.as,f=void 0===v?"div":v,m=(0,a.Z)(e,s),h=(0,u.vE)(l,"btn-group"),p=h;return c&&(p=h+"-vertical"),r.createElement(f,(0,n.Z)({},m,{ref:t,className:o()(d,p,i&&h+"-"+i,Z&&h+"-toggle")}))}));Z.displayName="ButtonGroup",Z.defaultProps={vertical:!1,toggle:!1,role:"group"},t.Z=Z}}]);
//# sourceMappingURL=component---src-pages-numerology-jsx-dfccb3675f84728d7ee9.js.map