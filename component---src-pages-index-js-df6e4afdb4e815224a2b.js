"use strict";(self.webpackChunkgatsby_redux_material_ui_boilerplate=self.webpackChunkgatsby_redux_material_ui_boilerplate||[]).push([[678],{28527:function(t,e,n){n.r(e),n.d(e,{default:function(){return Zt}});var r=n(59713),a=n.n(r),i=n(48926),o=n.n(i),u=n(63038),s=n.n(u),c=n(87757),l=n.n(c),d=n(67294),f=(n(36176),n(17951)),h=(n(90174),n(24251),n(38538),n(92492),n(8359),n(22840)),m=n(68152),v=n(66449),g=(n(27591),n(48767),n(36916),n(44325),n(89493),n(69360)),w=(n(20332),n(4320)),b=(n(59263),n(57154),n(26651)),p=n(35313),y=n(31825),M=n(15966),k=n(21846),P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var S={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function D(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var j={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:D({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:D({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:D({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:D({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:D({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function W(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?T(s,(function(t){return t.test(u)})):C(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(u.length);return{value:o,rest:l}}}function C(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function T(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Y,E={ordinalNumber:(Y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Y.matchPattern);if(!n)return null;var r=n[0],a=t.match(Y.parsePattern);if(!a)return null;var i=Y.valueCallback?Y.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:W({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:W({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:W({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:W({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},N={code:"en-US",formatDistance:function(t,e,n){var r,a=P[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:S,formatRelative:function(t,e,n,r){return O[t]},localize:j,match:E,options:{weekStartsOn:0,firstWeekContainsDate:1}},q={};function F(){return q}var A=n(29439),H=(Math.pow(10,8),6048e5),L=Symbol.for("constructDateFrom");function z(t,e){if(e)return e(t);var n=Object.prototype.toString.call(t);return"object"==typeof t&&L in t?t[L](t):t instanceof Date||"object"==typeof t&&"[object Date]"===n?new t.constructor(+t):"number"==typeof t||"[object Number]"===n||"string"==typeof t||"[object String]"===n?new Date(t):new Date(NaN)}function Q(t){var e=z(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Z(t,e){return"function"==typeof t?t(e):"object"==typeof t&&L in t?t[L](e):t instanceof Date?new t.constructor(e):new Date(e)}function B(t,e){var n=z(t,null==e?void 0:e.in);return n.setHours(0,0,0,0),n}function G(t,e,n){var r=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=t||Z.bind(null,n.find((function(t){return"object"==typeof t})));return n.map(a)}(null==n?void 0:n.in,t,e),a=(0,A.Z)(r,2),i=a[0],o=a[1],u=B(i),s=B(o),c=+u-Q(u),l=+s-Q(s);return Math.round((c-l)/864e5)}function X(t,e){var n=z(t,null==e?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function I(t,e){var n=z(t,null==e?void 0:e.in);return G(n,X(n))+1}var J=n(4942);function _(t,e){var n,r,a,i,o,u,s,c,l=F(),d=null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0,f=z(t,null==e?void 0:e.in),h=f.getDay(),m=(h<d?7:0)+h-d;return f.setDate(f.getDate()-m),f.setHours(0,0,0,0),f}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){(0,J.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $(t,e){return _(t,U(U({},e),{},{weekStartsOn:1}))}function V(t,e){var n=z(t,null==e?void 0:e.in),r=n.getFullYear(),a=Z(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);var i=$(a),o=Z(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);var u=$(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function K(t,e){var n=V(t,e),r=Z((null==e?void 0:e.in)||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),$(r)}function tt(t,e){var n=z(t,null==e?void 0:e.in),r=+$(n)-+K(n);return Math.round(r/H)+1}function et(t,e){var n,r,a,i,o,u,s,c,l=z(t,null==e?void 0:e.in),d=l.getFullYear(),f=F(),h=null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(s=f.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1,m=Z((null==e?void 0:e.in)||t,0);m.setFullYear(d+1,0,h),m.setHours(0,0,0,0);var v=_(m,e),g=Z((null==e?void 0:e.in)||t,0);g.setFullYear(d,0,h),g.setHours(0,0,0,0);var w=_(g,e);return+l>=+v?d+1:+l>=+w?d:d-1}function nt(t,e){var n,r,a,i,o,u,s,c,l=F(),d=null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1,f=et(t,e),h=Z((null==e?void 0:e.in)||t,0);return h.setFullYear(f,0,d),h.setHours(0,0,0,0),_(h,e)}function rt(t,e){var n=z(t,null==e?void 0:e.in),r=+_(n,e)-+nt(n,e);return Math.round(r/H)+1}function at(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}var it=function(t,e){var n=t.getFullYear(),r=n>0?n:1-n;return at("yy"===e?r%100:r,e.length)},ot=function(t,e){var n=t.getMonth();return"M"===e?String(n+1):at(n+1,2)},ut=function(t,e){return at(t.getDate(),e.length)},st=function(t,e){return at(t.getHours()%12||12,e.length)},ct=function(t,e){return at(t.getHours(),e.length)},lt=function(t,e){return at(t.getMinutes(),e.length)},dt=function(t,e){return at(t.getSeconds(),e.length)},ft=function(t,e){var n=e.length,r=t.getMilliseconds();return at(Math.trunc(r*Math.pow(10,n-3)),e.length)},ht="midnight",mt="noon",vt="morning",gt="afternoon",wt="evening",bt="night",pt={G:function(t,e,n){var r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return it(t,e)},Y:function(t,e,n,r){var a=et(t,r),i=a>0?a:1-a;return"YY"===e?at(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):at(i,e.length)},R:function(t,e){return at(V(t),e.length)},u:function(t,e){return at(t.getFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return at(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return at(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getMonth();switch(e){case"M":case"MM":return ot(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return at(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=rt(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):at(a,e.length)},I:function(t,e,n){var r=tt(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):at(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):ut(t,e)},D:function(t,e,n){var r=I(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):at(r,e.length)},E:function(t,e,n){var r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return at(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return at(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return at(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getHours();switch(r=12===a?mt:0===a?ht:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getHours();switch(r=a>=17?wt:a>=12?gt:a>=4?vt:bt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return st(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):ct(t,e)},K:function(t,e,n){var r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):at(r,e.length)},k:function(t,e,n){var r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):at(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):lt(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):dt(t,e)},S:function(t,e){return ft(t,e)},X:function(t,e,n){var r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Mt(r);case"XXXX":case"XX":return kt(r);default:return kt(r,":")}},x:function(t,e,n){var r=t.getTimezoneOffset();switch(e){case"x":return Mt(r);case"xxxx":case"xx":return kt(r);default:return kt(r,":")}},O:function(t,e,n){var r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+yt(r,":");default:return"GMT"+kt(r,":")}},z:function(t,e,n){var r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+yt(r,":");default:return"GMT"+kt(r,":")}},t:function(t,e,n){return at(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return at(t.getTime(),e.length)}};function yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return 0===i?n+String(a):n+String(a)+e+at(i,2)}function Mt(t,e){return t%60==0?(t>0?"-":"+")+at(Math.abs(t)/60,2):kt(t,e)}function kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),a=at(Math.trunc(r/60),2),i=at(r%60,2);return n+a+e+i}var Pt=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},xt=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},St={p:xt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return Pt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Pt(a,e)).replace("{{time}}",xt(i,e))}},Ot=/^D+$/,Dt=/^Y+$/,jt=["D","DD","YY","YYYY"];function Wt(t){return t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function Ct(t){return!(!Wt(t)&&"number"!=typeof t||isNaN(+z(t)))}var Tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Et=/^'([^]*?)'?$/,Nt=/''/g,qt=/[a-zA-Z]/;function Ft(t,e,n){var r,a,i,o,u,s,c,l,d,f,h,m,v,g,w,b,p,y,M=F(),k=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:M.locale)&&void 0!==r?r:N,P=null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:M.firstWeekContainsDate)&&void 0!==o?o:null===(d=M.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1,x=null!==(h=null!==(m=null!==(v=null!==(g=null==n?void 0:n.weekStartsOn)&&void 0!==g?g:null==n||null===(w=n.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==v?v:M.weekStartsOn)&&void 0!==m?m:null===(p=M.locale)||void 0===p||null===(y=p.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==h?h:0,S=z(t);if(!Ct(S))throw new RangeError("Invalid time value");var O=e.match(Yt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,St[e])(t,k.formatLong):t})).join("").match(Tt).map((function(t){if("''"===t)return{isToken:!1,value:"'"};var e=t[0];if("'"===e)return{isToken:!1,value:At(t)};if(pt[e])return{isToken:!0,value:t};if(e.match(qt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));k.localize.preprocessor&&(O=k.localize.preprocessor(S,O));var D={firstWeekContainsDate:P,weekStartsOn:x,locale:k};return O.map((function(r){if(!r.isToken)return r.value;var a=r.value;return(null!=n&&n.useAdditionalWeekYearTokens||!function(t){return Dt.test(t)}(a))&&(null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return Ot.test(t)}(a))||function(t,e,n){var r=function(t,e,n){var r="Y"===t[0]?"years":"days of the month";return"Use `".concat(t.toLowerCase(),"` instead of `").concat(t,"` (in `").concat(e,"`) for formatting ").concat(r," to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")}(t,e,n);if(console.warn(r),jt.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,pt[a[0]])(S,a,k.localize,D)})).join("")}function At(t){var e=t.match(Et);return e?e[1].replace(Nt,"'"):t}function Ht(t,e){var n=t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);return z(n?Date.UTC(+n[1],+n[2]-1,+n[3],+n[4]-(+n[9]||0)*("-"==n[8]?-1:1),+n[5]-(+n[10]||0)*("-"==n[8]?-1:1),+n[6],+((n[7]||"0")+"00").substring(0,3)):NaN,null==e?void 0:e.in)}var Lt=n(85893);function zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var Qt=d.useEffect,Zt=((0,m.Z)({}),function(t){t.data;var e,n,r=t.location,i=new URLSearchParams(r.search),u=i.get("o"),c=i.get("e");Qt((function(){u&&c&&g.Z.Cloud.run("verifyEmailAddress",{email:c,otp:u})}),[u,c]);var m=(0,b.Z)(),P=m.isAuth,x=(m.env,(0,d.useState)([])),S=s()(x,2),O=S[0],D=S[1],j=(0,d.useState)(""),W=s()(j,2),C=(W[0],W[1],(0,d.useState)("")),T=s()(C,2),Y=(T[0],T[1],(0,d.useState)("")),E=s()(Y,2),N=(E[0],E[1],(0,d.useState)("")),q=s()(N,2),F=(q[0],q[1],(0,d.useState)("")),A=s()(F,2),H=(A[0],A[1],(0,d.useState)(null)),L=s()(H,2),z=(L[0],L[1],(0,d.useState)([])),Q=s()(z,2),Z=(Q[0],Q[1],(0,v.Z)()),B=(0,d.useState)(),G=s()(B,2),X=(G[0],G[1],(0,h.Z)(Z.breakpoints.up("sm")),(0,d.useState)()),I=s()(X,2),J=(I[0],I[1],(0,d.useState)({})),_=s()(J,2),R=_[0],U=_[1],$=function(){var t=o()(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.Z.Cloud.run("queryItems",{type:"post"});case 2:e=t.sent,D(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=o()(l().mark((function t(e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.Z.Cloud.run("post",{title:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Qt(o()(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$();case 1:case"end":return t.stop()}}),t)}))),[]);var K=function(){var t=o()(l().mark((function t(e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,g.Z.Cloud.run("deleteItems",{ids:[e.objectId]});case 3:$();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tt=function(t){(0,p.navigate)("/post/".concat(t))},et=function(){var t=o()(l().mark((function t(e){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),!e){t.next=6;break}return t.next=4,V(e.description);case 4:(n=t.sent).slug&&tt(n.slug);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,Lt.jsxs)(w.ZP,{item:!0,xs:12,lg:6,children:[(0,Lt.jsx)(f.Z,{marginBottom:"16px",children:(0,Lt.jsx)(M.Z,{onSelected:et,placeholder:"Answers from AI + Metaphysics"})}),(0,Lt.jsx)(y.Z,{onEdit:function(t){return U(t)},cardProps:{handleDelete:K,noAvatar:!0,isAuth:"admin"===(null===(e=P())||void 0===e?void 0:e.role)},data:(null==O?void 0:O.map((function(t){var e,n;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?zt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({title:t.data.title,subheader:"".concat(Ft(Ht(t.createdAt),"yyyy-LL-dd"),"  ").concat((null==t||null===(e=t.data)||void 0===e||null===(n=e.threads)||void 0===n?void 0:n.length)||"0"," replies")},t)})))||[],onClickItem:function(t){var e;tt(null==t||null===(e=t.tag)||void 0===e?void 0:e.slug)}}),"admin"===(null===(n=P())||void 0===n?void 0:n.role)&&(0,Lt.jsx)(k.Z,{intitialContent:null!=R&&R.content?null==R?void 0:R.content:"",onPost:function(t){alert(t)}})]})})}}]);
//# sourceMappingURL=component---src-pages-index-js-df6e4afdb4e815224a2b.js.map