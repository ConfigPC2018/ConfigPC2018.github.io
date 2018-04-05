window.Modernizr=function(R,aa,ag){function ad(a){Q.cssText=a}function af(b,a){return typeof b===a}function A(b,a){return !!~(""+b).indexOf(a)}function I(c,a){for(var b in c){var d=c[b];if(!A(d,"-")&&Q[d]!==ag){return"pfx"==a?d:!0}}return !1}function G(a,d,e){for(var b in a){var c=d[a[b]];if(c!==ag){return e===!1?a[b]:af(c,"function")?c.bind(e||d):c}}return !1}function ab(d,c,e){var b=d.charAt(0).toUpperCase()+d.slice(1),a=(d+" "+V.join(b+" ")+b).split(" ");return af(c,"string")||af(c,"undefined")?I(a,c):(a=(d+" "+ac.join(b+" ")+b).split(" "),G(a,c,e))}var Y,ai,O,D="2.8.2",ae={},ah=!0,B=aa.documentElement,W="modernizr",L=aa.createElement(W),Q=L.style,H=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),Z="Webkit Moz O ms",V=Z.split(" "),ac=Z.toLowerCase().split(" "),J={svg:"http://www.w3.org/2000/svg"},q={},U=[],K=U.slice,aj=function(d,j,h,i){var a,e,b,g,f=aa.createElement("div"),k=aa.body,c=k||aa.createElement("body");if(parseInt(h,10)){for(;h--;){b=aa.createElement("div"),b.id=i?i[h]:W+(h+1),f.appendChild(b)}}return a=["&#173;",'<style id="s',W,'">',d,"</style>"].join(""),f.id=W,(k?f:c).innerHTML+=a,c.appendChild(f),k||(c.style.background="",c.style.overflow="hidden",g=B.style.overflow,B.style.overflow="hidden",B.appendChild(c)),e=j(f,d),k?f.parentNode.removeChild(f):(c.parentNode.removeChild(c),B.style.overflow=g),!!e},M=function(){function b(e,d){d=d||aa.createElement(a[e]||"div"),e="on"+e;var c=e in d;return c||(d.setAttribute||(d=aa.createElement("div")),d.setAttribute&&d.removeAttribute&&(d.setAttribute(e,""),c=af(d[e],"function"),af(d[e],"undefined")||(d[e]=ag),d.removeAttribute(e))),d=null,c}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return b}(),X={}.hasOwnProperty;O=af(X,"undefined")||af(X.call,"undefined")?function(b,a){return a in b&&af(b.constructor.prototype[a],"undefined")}:function(b,a){return X.call(b,a)},Function.prototype.bind||(Function.prototype.bind=function(c){var a=this;if("function"!=typeof a){throw new TypeError}var d=K.call(arguments,1),b=function(){if(this instanceof b){var g=function(){};g.prototype=a.prototype;var f=new g,e=a.apply(f,d.concat(K.call(arguments)));return Object(e)===e?e:f}return a.apply(c,d.concat(K.call(arguments)))};return b}),q.touch=function(){var a;return"ontouchstart" in R||R.DocumentTouch&&aa instanceof DocumentTouch?a=!0:aj(["@media (",H.join("touch-enabled),("),W,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop}),a},q.rgba=function(){return ad("background-color:rgba(150,255,150,.5)"),A(Q.backgroundColor,"rgba")},q.backgroundsize=function(){return ab("backgroundSize")},q.borderimage=function(){return ab("borderImage")},q.borderradius=function(){return ab("borderRadius")},q.csstransforms=function(){return !!ab("transform")},q.csstransforms3d=function(){var a=!!ab("perspective");return a&&"webkitPerspective" in B.style&&aj("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},q.csstransitions=function(){return ab("transition")},q.svg=function(){return !!aa.createElementNS&&!!aa.createElementNS(J.svg,"svg").createSVGRect};for(var P in q){O(q,P)&&(ai=P.toLowerCase(),ae[ai]=q[P](),U.push((ae[ai]?"":"no-")+ai))}return ae.addTest=function(c,a){if("object"==typeof c){for(var b in c){O(c,b)&&ae.addTest(b,c[b])}}else{if(c=c.toLowerCase(),ae[c]!==ag){return ae}a="function"==typeof a?a():a,"undefined"!=typeof ah&&ah&&(B.className+=" "+(a?"":"no-")+c),ae[c]=a}return ae},ad(""),L=Y=null,function(g,n){function m(w,x){var v=w.createElement("p"),u=w.getElementsByTagName("head")[0]||w.documentElement;return v.innerHTML="x<style>"+x+"</style>",u.insertBefore(v.lastChild,u.firstChild)}function p(){var u=a.elements;return"string"==typeof u?u.split(" "):u}function l(u){var v=e[u[c]];return v||(v={},b++,u[c]=b,e[b]=v),v}function s(w,v,u){if(v||(v=n),t){return v.createElement(w)}u||(u=l(v));var x;return x=u.cache[w]?u.cache[w].cloneNode():r.test(w)?(u.cache[w]=u.createElem(w)).cloneNode():u.createElem(w),!x.canHaveChildren||k.test(w)||x.tagUrn?x:u.frag.appendChild(x)}function j(y,z){if(y||(y=n),t){return y.createDocumentFragment()}z=z||l(y);for(var v=z.frag.cloneNode(),u=0,x=p(),w=x.length;w>u;u++){v.createElement(x[u])}return v}function i(u,v){v.cache||(v.cache={},v.createElem=u.createElement,v.createFrag=u.createDocumentFragment,v.frag=v.createFrag()),u.createElement=function(w){return a.shivMethods?s(w,u,v):v.createElem(w)},u.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+p().join().replace(/[\w\-]+/g,function(w){return v.createElem(w),v.frag.createElement(w),'c("'+w+'")'})+");return n}")(a,v.frag)}function o(u){u||(u=n);var v=l(u);return a.shivCSS&&!d&&!v.hasCSS&&(v.hasCSS=!!m(u,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),t||i(u,v),u}var d,t,f="3.7.0",h=g.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,c="_html5shiv",b=0,e={};!function(){try{var v=n.createElement("a");v.innerHTML="<xyz></xyz>",d="hidden" in v,t=1==v.childNodes.length||function(){n.createElement("a");var w=n.createDocumentFragment();return"undefined"==typeof w.cloneNode||"undefined"==typeof w.createDocumentFragment||"undefined"==typeof w.createElement}()}catch(u){d=!0,t=!0}}();var a={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:h.shivCSS!==!1,supportsUnknownElements:t,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:o,createElement:s,createDocumentFragment:j};g.html5=a,o(n)}(this,aa),ae._version=D,ae._prefixes=H,ae._domPrefixes=ac,ae._cssomPrefixes=V,ae.hasEvent=M,ae.testProp=function(a){return I([a])},ae.testAllProps=ab,ae.testStyles=aj,ae.prefixed=function(b,a,c){return a?ab(b,a,c):ab(b,"pfx")},B.className=B.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ah?" js "+U.join(" "):""),ae}(this,this.document),function(ad,L,U){function Q(a){return"[object Function]"==G.call(a)}function T(a){return"string"==typeof a}function Z(){}function K(a){return !a||"loaded"==a||"complete"==a||"uninitialized"==a}function z(){var a=ab.shift();A=1,a?a.t?V(function(){("c"==a.t?q.injectCss:q.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),z()):A=0}function M(b,a,i,l,d,j,h){function c(n){if(!k&&K(f.readyState)&&(e.r=k=1,!A&&z(),f.onload=f.onreadystatechange=null,n)){"img"!=b&&V(function(){F.removeChild(f)},50);for(var m in P[a]){P[a].hasOwnProperty(m)&&P[a][m].onload()}}}var h=h||q.errorTimeout,f=L.createElement(b),k=0,g=0,e={t:i,s:a,e:d,a:j,x:h};1===P[a]&&(g=1,P[a]=[]),"object"==b?f.data=a:(f.src=a,f.type=b),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){c.call(this,g)},ab.splice(l,0,e),"img"!=b&&(g||2===P[a]?(F.insertBefore(f,J?null:aa),V(c,h)):P[a].push(f))}function I(e,b,a,c,d){return A=0,b=b||"j",T(e)?M("c"==b?B:O,e,b,this.i++,a,c,d):(ab.splice(this.i++,0,e),1==ab.length&&z()),this}function W(){var a=q;return a.loader={load:I,i:0},a}var ac,q,R=L.documentElement,V=ad.setTimeout,aa=L.getElementsByTagName("script")[0],G={}.toString,ab=[],A=0,H="MozAppearance" in R.style,J=H&&!!L.createRange().compareNode,F=J?R:aa.parentNode,R=ad.opera&&"[object Opera]"==G.call(ad.opera),R=!!L.attachEvent&&!R,O=H?"object":R?"script":"img",B=R?"script":O,Y=Array.isArray||function(a){return"[object Array]"==G.call(a)},D=[],P={},X={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};q=function(a){function c(n){var k,j,l,n=n.split("!"),i=D.length,h=n.pop(),m=n.length,h={url:h,origUrl:h,prefixes:n};for(j=0;m>j;j++){l=n[j].split("="),(k=X[l.shift()])&&(h=k(h,l))}for(j=0;i>j;j++){h=D[j](h)}return h}function d(n,i,l,h,j){var m=c(n),k=m.autoCallback;m.url.split(".").pop().split("?").shift(),m.bypass||(i&&(i=Q(i)?i:i[n]||i[h]||i[n.split("/").pop().split("?")[0]]),m.instead?m.instead(n,i,l,h,j):(P[m.url]?m.noexec=!0:P[m.url]=1,l.load(m.url,m.forceCSS||!m.forceJS&&"css"==m.url.split(".").pop().split("?").shift()?"c":U,m.noexec,m.attrs,m.timeout),(Q(i)||Q(k))&&l.load(function(){W(),i&&i(m.origUrl,j,h),k&&k(m.origUrl,j,h),P[m.url]=2})))}function f(i,p){function n(s,t){if(s){if(T(s)){t||(r=function(){var u=[].slice.call(arguments);j.apply(this,u),l()}),d(s,r,p,0,m)}else{if(Object(s)===s){for(h in k=function(){var u,v=0;for(u in s){s.hasOwnProperty(u)&&v++}return v}(),s){s.hasOwnProperty(h)&&(!t&&!--k&&(Q(r)?r=function(){var u=[].slice.call(arguments);j.apply(this,u),l()}:r[h]=function(u){return function(){var v=[].slice.call(arguments);u&&u.apply(this,v),l()}}(j[h])),d(s[h],r,p,h,m))}}}}else{!t&&l()}}var k,h,m=!!i.test,o=i.load||i.both,r=i.callback||Z,j=r,l=i.complete||Z;n(m?i.yep:i.nope,!!o),o&&n(o)}var e,b,g=this.yepnope.loader;if(T(a)){d(a,0,g,0)}else{if(Y(a)){for(e=0;e<a.length;e++){b=a[e],T(b)?d(b,0,g,0):Y(b)?q(b):Object(b)===b&&f(b,g)}}else{Object(a)===a&&f(a,g)}}},q.addPrefix=function(a,b){X[a]=b},q.addFilter=function(a){D.push(a)},q.errorTimeout=10000,null==L.readyState&&L.addEventListener&&(L.readyState="loading",L.addEventListener("DOMContentLoaded",ac=function(){L.removeEventListener("DOMContentLoaded",ac,0),L.readyState="complete"},0)),ad.yepnope=W(),ad.yepnope.executeStack=z,ad.yepnope.injectJs=function(d,i,f,h,b,e){var a,c,g=L.createElement("script"),h=h||q.errorTimeout;g.src=d;for(c in f){g.setAttribute(c,f[c])}i=e?z:i||Z,g.onreadystatechange=g.onload=function(){!a&&K(g.readyState)&&(a=1,i(),g.onload=g.onreadystatechange=null)},V(function(){a||(a=1,i(1))},h),b?g.onload():aa.parentNode.insertBefore(g,aa)},ad.yepnope.injectCss=function(g,f,e,a,d,c){var b,a=L.createElement("link"),f=c?z:f||Z;a.href=g,a.rel="stylesheet",a.type="text/css";for(b in e){a.setAttribute(b,e[b])}d||(aa.parentNode.insertBefore(a,aa),V(f,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};