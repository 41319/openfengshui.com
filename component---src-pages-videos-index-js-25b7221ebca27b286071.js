(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{J79s:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return g}));var a=t("q1tI"),l=t.n(a),i=t("otPn"),r=t("vOnD"),o=t("Wbzz"),c=t("cl0r"),u=t("510Z"),d=t("yIWr"),m=(t("cr+I"),t("LpKc")),s=r.default.div.withConfig({displayName:"videos__ImageContainer",componentId:"sc-140yipe-0"})(["cursor:pointer;"]);n.default=function(e){var n=e.data,t=(e.location,function(e,n){return l.a.createElement(s,null,l.a.createElement(i.a,null,l.a.createElement(u.a,{src:e.image,imageProps:{onClick:function(){Object(o.b)("/videos/view?id="+e.videoId)},fit:"cover",fill:"true"}}),l.a.createElement(i.a,{direction:"row",gap:"small",justify:"center"},l.a.createElement("a",{href:"/videos/channel?id="+e.channelId},"More From Channel")),e.title," ",l.a.createElement("br",null)))}),r=new Date(Date.now()-6048e5),g=Object(a.useState)([]),h=g[0],f=g[1],v=Object(a.useState)([]),p=(v[0],v[1]),b=Object(a.useState)([]),E=b[0],I=b[1];return Object(a.useEffect)((function(){var e=n.allAggVideo.edges,t=e.map((function(e){var n,t,a=e.node;return console.log(a),{id:a.key,image:null==a||null===(n=a.thumbnails)||void 0===n||null===(t=n.high)||void 0===t?void 0:t.url,title:a.title,publishTime:a.publishTime,channelId:a.channelId,videoId:a.key}})).filter((function(e){return e.publishTime>r.toISOString()})),a=n.allChannel.edges.map((function(e){return n.allAggVideo.edges.find((function(n){return n.node.channelId===e.node.channelId}))})).map((function(e){var n=e.node;return Object.assign({},n)})).map((function(n){var t,a,l,i=e.find((function(e){var t=e.node;return n.channelId===t.channelId}));return Object.assign({},n,{videoId:i.node.key,image:null===(t=i.node)||void 0===t||null===(a=t.thumbnails)||void 0===a||null===(l=a.high)||void 0===l?void 0:l.url})}));p(n.allChannel),f(a),I(t)}),[n.allAggVideo.edges]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{max:"100%"},l.a.createElement(i.a,{gap:"small"},E.length>0&&l.a.createElement("h3",null,"Recent Video"),l.a.createElement(d.a,{dataList:E,render:t}),l.a.createElement(m.a,null),l.a.createElement("p",null,"Feng Shui Channel (Source From Youtube) (Add/Remove Listing, Please Contact ",l.a.createElement("a",{href:"mailto:openfengshui@gmail.com"},"OpenFengShui"),")"),l.a.createElement(d.a,{dataList:h,render:t}))))};var g="1957305226"}}]);
//# sourceMappingURL=component---src-pages-videos-index-js-25b7221ebca27b286071.js.map