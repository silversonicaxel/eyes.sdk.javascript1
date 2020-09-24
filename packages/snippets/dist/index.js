exports.addPageMarker=function(arg){
var s=function(){"use strict";return function(){var e=document.createElement("div"),t=document.createElement("div");return e.setAttribute("data-applitools-marker-id",""),e.append(t),document.body.append(e),e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="3px",e.style.height="9px",e.style.border="1px solid rgb(127,127,127)",e.style.background="rgb(0,0,0)",e.style.zIndex="999999999",t.style.width="3px",t.style.height="3px",t.style.margin="3px 0",t.style.background="rgb(255,255,255)",{offset:1*window.devicePixelRatio,size:3*window.devicePixelRatio,mask:[0,1,0]}}}();
return s(arg)
}
exports.blurElement=function(arg){
var s=function(){"use strict";return function(t){var n=(void 0===t?[]:t)[0],r=void 0===n?document.activeElement:n;return r&&r.blur(),r}}();
return s(arg)
}
exports.cleanupElementIds=function(arg){
var s=function(){"use strict";return function(t){t[0].forEach((function(t){t.removeAttribute("data-eyes-selector")}))}}();
return s(arg)
}
exports.cleanupPageMarker=function(arg){
var s=function(){"use strict";return function(){var e=document.querySelector("[data-applitools-marker-id]");document.body.removeChild(e)}}();
return s(arg)
}
exports.focusElement=function(arg){
var s=function(){"use strict";return function(n){var r=(void 0===n?[]:n)[0];r&&r.focus()}}();
return s(arg)
}
exports.getChildFramesInfo=function(arg){
var s=function(){"use strict";return function(){var r=document.querySelectorAll("frame, iframe");return Array.prototype.map.call(r,(function(r){return[r,!r.contentDocument,r.src]}))}}();
return s(arg)
}
exports.getContextInfo=function(arg){
var s=function(){"use strict";var t=function(t){var n=(void 0===t?[]:t)[0],e="",r=n.ownerDocument;if(!r)return e;for(var o=n;o!==r;){var a=Array.prototype.filter.call(o.parentNode.childNodes,(function(t){return t.tagName===o.tagName})).indexOf(o);e="/"+o.tagName+"["+(a+1)+"]"+e,o=o.parentNode}return e};return function(){var n,e,r;try{n=window.top.document===window.document}catch(t){n=!1}try{e=!window.parent.document===window.document}catch(t){e=!0}if(!e)try{r=t([window.frameElement])}catch(t){r=null}return[document.documentElement,r,n,e]}}();
return s(arg)
}
exports.getDocumentSize=function(arg){
var s=function(){"use strict";return function(){var t=document.documentElement.scrollWidth,e=document.documentElement.scrollHeight,n=document.documentElement.clientHeight,c=document.body.scrollWidth,o=document.body.scrollHeight,d=document.body.clientHeight;return{width:Math.max(t,c),height:Math.max(n,e,d,o)}}}();
return s(arg)
}
exports.getElementComputedStyleProperties=function(arg){
var s=function(){"use strict";return function(t){var e=void 0===t?[]:t,n=e[0],o=e[1],r=void 0===o?[]:o,u=window.getComputedStyle(n);return console.log(n),u?r.map((function(t){return u.getPropertyValue(t)})):[]}}();
return s(arg)
}
exports.getElementContentSize=function(arg){
var s=function(){"use strict";return function(t){var i=(void 0===t?[]:t)[0];return{width:Math.max(i.clientWidth,i.scrollWidth),height:Math.max(i.clientHeight,i.scrollHeight)}}}();
return s(arg)
}
exports.getElementFixedAncestor=function(arg){
var s=function(){"use strict";return function(t){for(var e=(void 0===t?[]:t)[0];e.offsetParent&&e.offsetParent!==document.body&&e.offsetParent!==document.documentElement;)e=e.offsetParent;return"fixed"===window.getComputedStyle(e).getPropertyValue("position")?e:null}}();
return s(arg)
}
exports.getElementInnerOffset=function(arg){
var s=function(){"use strict";var r=function(r){var n=(void 0===r?[]:r)[0];return n?{x:n.scrollLeft,y:n.scrollTop}:{x:window.scrollX||window.pageXOffset,y:window.scrollY||window.pageYOffset}};var n=function(r){var n=void 0===r?[]:r,t=n[0],o=n[1];return(void 0===o?[]:o).reduce((function(r,n){return r[n]=t.style[n],r}),{})};var t=function(r){var t=(void 0===r?[]:r)[0],o=void 0===t?document.scrollingElement||document.documentElement:t,e=n([o,["transform","webkitTransform"]]),i=Object.keys(e).reduce((function(r,n){if(e[n]){var t=e[n].match(/^translate\s*\(\s*(\-?[\d, \.]+)px\s*(,\s*(-?[\d, \.]+)px)?\s*\)/);if(!t)throw new Error("Can't parse CSS transition: "+e[n]+"!");var o=t[1],i=void 0!==t[3]?t[3]:0;r.push({x:Math.round(-parseFloat(o)),y:Math.round(-parseFloat(i))})}return r}),[]);if(!i.every((function(r){return i[0].x===r.x||i[0].y===r.y})))throw new Error("Got different css positions!");return i[0]||{x:0,y:0}};return function(n){var o=(void 0===n?[]:n)[0],e=r([o]),i=t([o]);return{x:e.x+i.x,y:e.y+i.y}}}();
return s(arg)
}
exports.getElementProperties=function(arg){
var s=function(){"use strict";return function(r){var n=void 0===r?[]:r,t=n[0],u=n[1];return(void 0===u?[]:u).reduce((function(r,n){return r[n]=t[n],r}),{})}}();
return s(arg)
}
exports.getElementRect=function(arg){
var s=function(){"use strict";var t=function(t){for(var e=(void 0===t?[]:t)[0];e.offsetParent&&e.offsetParent!==document.body&&e.offsetParent!==document.documentElement;)e=e.offsetParent;return"fixed"===window.getComputedStyle(e).getPropertyValue("position")?e:null};var e=function(t){var e=(void 0===t?[]:t)[0];return e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight};var r=function(t){var e=(void 0===t?[]:t)[0];return e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX||window.pageXOffset,y:window.scrollY||window.pageYOffset}};var n=function(t){var e=void 0===t?[]:t,r=e[0],n=e[1];return(void 0===n?[]:n).reduce((function(t,e){return t[e]=r.style[e],t}),{})};var o=function(t){var e=(void 0===t?[]:t)[0],r=void 0===e?document.scrollingElement||document.documentElement:e,o=n([r,["transform","webkitTransform"]]),i=Object.keys(o).reduce((function(t,e){if(o[e]){var r=o[e].match(/^translate\s*\(\s*(\-?[\d, \.]+)px\s*(,\s*(-?[\d, \.]+)px)?\s*\)/);if(!r)throw new Error("Can't parse CSS transition: "+o[e]+"!");var n=r[1],i=void 0!==r[3]?r[3]:0;t.push({x:Math.round(-parseFloat(n)),y:Math.round(-parseFloat(i))})}return t}),[]);if(!i.every((function(t){return i[0].x===t.x||i[0].y===t.y})))throw new Error("Got different css positions!");return i[0]||{x:0,y:0}};var i=function(t){var e=(void 0===t?[]:t)[0],n=r([e]),i=o([e]);return{x:n.x+i.x,y:n.y+i.y}};return function(r){var n=void 0===r?[]:r,o=n[0],a=n[1],d=void 0!==a&&a,u=o.getBoundingClientRect(),s={x:u.left,y:u.top,width:u.width,height:u.height};if(d){var f=window.getComputedStyle(o);s.x+=parseInt(f.getPropertyValue("border-left-width")),s.y+=parseInt(f.getPropertyValue("border-top-width")),s.width=o.clientWidth,s.height=o.clientHeight}var l=t([o]);if(l){var c=e([l]);if(l!==o&&c){var v=i([l]);s.x+=v.x,s.y+=v.y}}else{var y=i();s.x+=y.x,s.y+=y.y}return s}}();
return s(arg)
}
exports.getElementScrollOffset=function(arg){
var s=function(){"use strict";return function(o){var r=(void 0===o?[]:o)[0];return r?{x:r.scrollLeft,y:r.scrollTop}:{x:window.scrollX||window.pageXOffset,y:window.scrollY||window.pageYOffset}}}();
return s(arg)
}
exports.getElementStyleProperties=function(arg){
var s=function(){"use strict";return function(r){var n=void 0===r?[]:r,t=n[0],u=n[1];return(void 0===u?[]:u).reduce((function(r,n){return r[n]=t.style[n],r}),{})}}();
return s(arg)
}
exports.getElementTranslateOffset=function(arg){
var s=function(){"use strict";var r=function(r){var t=void 0===r?[]:r,n=t[0],e=t[1];return(void 0===e?[]:e).reduce((function(r,t){return r[t]=n.style[t],r}),{})};return function(t){var n=(void 0===t?[]:t)[0],e=void 0===n?document.scrollingElement||document.documentElement:n,o=r([e,["transform","webkitTransform"]]),s=Object.keys(o).reduce((function(r,t){if(o[t]){var n=o[t].match(/^translate\s*\(\s*(\-?[\d, \.]+)px\s*(,\s*(-?[\d, \.]+)px)?\s*\)/);if(!n)throw new Error("Can't parse CSS transition: "+o[t]+"!");var e=n[1],s=void 0!==n[3]?n[3]:0;r.push({x:Math.round(-parseFloat(e)),y:Math.round(-parseFloat(s))})}return r}),[]);if(!s.every((function(r){return s[0].x===r.x||s[0].y===r.y})))throw new Error("Got different css positions!");return s[0]||{x:0,y:0}}}();
return s(arg)
}
exports.getElementXpath=function(arg){
var s=function(){"use strict";return function(r){var e=(void 0===r?[]:r)[0],t="",n=e.ownerDocument;if(!n)return t;for(var a=e;a!==n;){var o=Array.prototype.filter.call(a.parentNode.childNodes,(function(r){return r.tagName===a.tagName})).indexOf(a);t="/"+a.tagName+"["+(o+1)+"]"+t,a=a.parentNode}return t}}();
return s(arg)
}
exports.getPixelRatio=function(arg){
var s=function(){"use strict";return function(){return window.devicePixelRatio}}();
return s(arg)
}
exports.getUserAgent=function(arg){
var s=function(){"use strict";return function(){return window.navigator.userAgent}}();
return s(arg)
}
exports.getViewportSize=function(arg){
var s=function(){"use strict";return function(){var e=0,t=0;return window.innerHeight?t=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?t=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(t=document.body.clientHeight),window.innerWidth?e=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?e=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(e=document.body.clientWidth),{width:e,height:t}}}();
return s(arg)
}
exports.isElementScrollable=function(arg){
var s=function(){"use strict";return function(t){var i=(void 0===t?[]:t)[0];return i.scrollWidth>i.clientWidth||i.scrollHeight>i.clientHeight}}();
return s(arg)
}
exports.markElements=function(arg){
var s=function(){"use strict";return function(t){var e=t[0],r=t[1];e.forEach((function(t,e){t.setAttribute("data-eyes-selector",r[e])}))}}();
return s(arg)
}
exports.scrollTo=function(arg){
var s=function(){"use strict";return function(o){var l=void 0===o?[]:o,r=l[0],c=l[1];return(r=r||document.documentElement).scrollTo?r.scrollTo(c.x,c.y):(r.scrollLeft=c.x,r.scrollTop=c.y),{x:r.scrollLeft,y:r.scrollTop}}}();
return s(arg)
}
exports.setElementAttributes=function(arg){
var s=function(){"use strict";return function(t){var e=void 0===t?[]:t,r=e[0],u=e[1];return Object.keys(u).reduce((function(t,e){return t[e]=r.getAttribute(e),r.setAttribute(e,u[e]),t}),{})}}();
return s(arg)
}
exports.setElementStyleProperties=function(arg){
var s=function(){"use strict";return function(t){var e=void 0===t?[]:t,r=e[0],n=e[1];return Object.keys(n).reduce((function(t,e){return t[e]=r.style[e],r.style[e]=n[e],t}),{})}}();
return s(arg)
}
exports.translateTo=function(arg){
var s=function(){"use strict";var r=function(r){var t=void 0===r?[]:r,n=t[0],e=t[1];return Object.keys(e).reduce((function(r,t){return r[t]=n.style[t],n.style[t]=e[t],r}),{})};return function(t){var n=void 0===t?[]:t,e=n[0],u=n[1];e=e||document.documentElement;var o="translate("+-u.x+"px, "+-u.y+"px)";return r([e,{transform:o,webkitTransform:o}]),u}}();
return s(arg)
}