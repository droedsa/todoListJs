!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=5)}([function(e,t,n){"use strict";var l,o={},a=function(){return void 0===l&&(l=Boolean(window&&document&&document.all&&!window.atob)),l},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function r(e,t){for(var n=[],l={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],r={css:a[1],media:a[2],sourceMap:a[3]};l[i]?l[i].parts.push(r):n.push(l[i]={id:i,parts:[r]})}return n}function s(e,t){for(var n=0;n<e.length;n++){var l=e[n],a=o[l.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](l.parts[i]);for(;i<l.parts.length;i++)a.parts.push(y(l.parts[i],t))}else{for(var r=[];i<l.parts.length;i++)r.push(y(l.parts[i],t));o[l.id]={id:l.id,refs:1,parts:r}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var l=n.nc;l&&(e.attributes.nonce=l)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,l){var o=n?"":l.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function v(e,t,n){var l=n.css,o=n.media,a=n.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=l;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(l))}}var m=null,f=0;function y(e,t){var n,l,o;if(t.singleton){var a=f++;n=m||(m=c(t)),l=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=c(t),l=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return l(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;l(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=r(e,t);return s(n,t),function(e){for(var l=[],a=0;a<n.length;a++){var i=n[a],c=o[i.id];c&&(c.refs--,l.push(c))}e&&s(r(e,t),t);for(var u=0;u<l.length;u++){var d=l[u];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete o[d.id]}}}}},function(e,t,n){var l=n(2);"string"==typeof l&&(l=[[e.i,l,""]]);var o={insert:"head",singleton:!1};n(0)(l,o);l.locals&&(e.exports=l.locals)},function(e,t,n){},function(e,t,n){var l=n(4);"string"==typeof l&&(l=[[e.i,l,""]]);var o={insert:"head",singleton:!1};n(0)(l,o);l.locals&&(e.exports=l.locals)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(3);var l=document.getElementById("container"),o=function(e,t,n,o,a){var i=document.createElement("div");i.classList.add("openList","DivId".concat(a));var r=document.createElement("h3");r.textContent=t,i.appendChild(r);var s=document.createElement("p");s.textContent=n,i.appendChild(s);var c=document.createElement("div");c.textContent=o,c.classList.add("secondDivClass"),i.appendChild(c);var u=document.createElement("select");u.setAttribute("class","selectBtnBarStyle"),u.setAttribute("class","DivId".concat(a));var d=document.createElement("option");d.setAttribute("value",""),d.textContent="...";var p=document.createElement("option");p.setAttribute("value","Dell"),p.textContent="Dell";var v=document.createElement("option");v.setAttribute("value","Done"),v.textContent="Done";var m=document.createElement("option");m.setAttribute("value","Edit"),m.textContent="Edit",u.prepend(d),u.appendChild(p),u.appendChild(v),u.appendChild(m),i.appendChild(u),l.prepend(i)},a=document.getElementById("textPopupChange"),i=document.getElementById("TextDescriptionChange"),r=document.getElementById("popupPriorityChange"),s=document.getElementById("container"),c=function(e,t,n){switch(t){case"Dell":for(var l=0;l<e.list.length;l++){if(n==="DivId"+e.list[l][0])return document.getElementsByClassName(n)[0].remove(),e.list.splice(l,1)}break;case"Edit":for(var o=0;o<e.list.length;o++)n==="DivId".concat(e.list[o][0])&&(L(),a.value=e.list[o][1],i.value=e.list[o][2],r.value=e.list[o][3],e.list[o][5]=!0);break;case"Done":for(var c=0;c<e.list.length;c++)if(n==="DivId"+e.list[c][0]){var u=document.getElementsByClassName(n);return u[0].classList.add("doneList"),u[1].value="",s.appendChild(u[0]),e.list[c][4]="done"}}},u=document.getElementById("processed"),d=document.getElementById("priority"),p=document.getElementById("searchBar"),v=function(e,t){"all"===t&&"all"!==u.value&&(t=u.value),"all"===t&&"all"!==d.value&&(t=d.value);var n=p.value;switch(t){case"all":for(var l=0;l<e.list.length;l++)"all"===u.value&&"all"===d.value&&e.list[l][1].includes(n)?document.querySelector(".DivId".concat(e.list[l][0])).style.display="block":document.querySelector(".DivId".concat(e.list[l][0])).style.display="none";break;case"open":case"done":for(var o=0;o<e.list.length;o++)t!==e.list[o][4]||d.value!==e.list[o][3]&&"all"!==d.value||!e.list[o][1].includes(n)?document.querySelector(".DivId".concat(e.list[o][0])).style.display="none":document.querySelector(".DivId".concat(e.list[o][0])).style.display="block";break;case"normal":case"low":case"hight":for(var a=0;a<e.list.length;a++)t!==e.list[a][3]||u.value!==e.list[a][4]&&"all"!==u.value||!e.list[a][1].includes(n)?document.querySelector(".DivId".concat(e.list[a][0])).style.display="none":document.querySelector(".DivId".concat(e.list[a][0])).style.display="block";break;case"searchBar":for(var i=0;i<e.list.length;i++)""===n?document.querySelector(".DivId".concat(e.list[i][0])).style.display="block":!e.list[i][1].includes(n)||(u.value!==e.list[i][4]||d.value!==e.list[i][3]&&"all"!==d.value)&&(d.value!==e.list[i][3]||u.value!==e.list[i][4]&&"all"!==u.value)?"all"===u.value&&"all"===d.value&&e.list[i][1].includes(n)?document.querySelector(".DivId".concat(e.list[i][0])).style.display="block":document.querySelector(".DivId".concat(e.list[i][0])).style.display="none":document.querySelector(".DivId".concat(e.list[i][0])).style.display="block"}},m=document.getElementById("textPopupChange"),f=document.getElementById("TextDescriptionChange"),y=document.getElementById("popupPriorityChange");n.d(t,"openPopUpWindow",(function(){return k})),n.d(t,"closePopUpWindow",(function(){return w})),n.d(t,"closePopUpChangeWindow",(function(){return P})),n.d(t,"openPopUpChangeWindow",(function(){return L}));var g=document.getElementById("createBtn"),h=document.getElementById("textPopup"),b=document.getElementById("TextDescription"),E=document.getElementById("popupPriority"),I=document.getElementById("createPopupBtn"),B=document.getElementById("createPopupBtnChange"),C=document.getElementById("container"),D=document.querySelector(".menu"),x={list:[]},S=0,k=function(){document.getElementById("popupWindow").style.display="block",document.getElementById("fonts").style.display="block"},w=function(){document.getElementById("popupWindow").style.display="none",document.getElementById("fonts").style.display="none"},P=function(){document.getElementById("popupChange").style.display="none",document.getElementById("fontsChange").style.display="none";for(var e=0;e<x.list.length;e++){!0===x.list[e][5]&&(x.list[e][5]=!1),document.getElementsByClassName("DivId".concat(x.list[e][0]))[1].value=""}},L=function(){document.getElementById("popupChange").style.display="block",document.getElementById("fontsChange").style.display="block"};g.addEventListener("click",k),document.getElementById("cancelPopupBtn").addEventListener("click",w),document.getElementById("cancelPopupBtnChange").addEventListener("click",P),I.addEventListener("click",(function(){!function(e,t,n,l,o){var a=[o,t,n,l,"open",!1];e.list.push(a)}(x,h.value,b.value,E.value,S),o(0,h.value,b.value,E.value,S),w(),h.value=b.value="",E.value="hight",S+=1})),C.addEventListener("change",(function(e){if(!e.target.matches("select"))return null;c(x,e.target.value,e.target.className)})),D.addEventListener("change",(function(e){e.target.matches("select")?v(x,e.target.value):e.target.matches("input")&&v(x,e.target.id)})),B.addEventListener("click",(function(){!function(e){for(var t=0;t<e.list.length;t++){if(!0===e.list[t][5])return e.list[t][1]=m.value,e.list[t][2]=f.value,e.list[t][3]=y.value,e.list[t][4]="open",document.getElementsByClassName("DivId".concat(e.list[t][0]))[0].remove(),o(0,e.list[t][1],e.list[t][2],e.list[t][3],e.list[t][0]),P(),e.list[t][5]=!1}}(x)}))}]);