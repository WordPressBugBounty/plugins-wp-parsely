!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};!function(){var t=window.wp.domReady,r=e.n(t);function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var i=function e(t,r){function i(e,i,a){if("undefined"!=typeof document){"number"==typeof(a=n({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var d in a)a[d]&&(o+="; "+d,!0!==a[d]&&(o+="="+a[d].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+o}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},i=0;i<r.length;i++){var a=r[i].split("="),o=a.slice(1).join("=");try{var d=decodeURIComponent(a[0]);if(n[d]=t.read(o,d),e===d)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){i(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),a="_parsely_visitor";function o(e,t,r){if(r){var n=null===(o=function(){var e=i.get(a);if(e){var t=unescape(e);try{return JSON.parse(t)}catch(e){return}}}())||void 0===o?void 0:o.id;if(n)return"".concat(e,"&uuid=").concat(encodeURIComponent(n))}var o;return"".concat(e,"&url=").concat(encodeURIComponent(t))}r()((function(){var e=document.querySelectorAll(".parsely-recommended-widget"),t=Array.from(e).map((function(e){return function(e){var t,r,n=null!==(t=e.getAttribute("data-parsely-widget-api-url"))&&void 0!==t?t:"",i=null!==(r=e.getAttribute("data-parsely-widget-permalink"))&&void 0!==r?r:"",a="true"===e.getAttribute("data-parsely-widget-personalized");return{outerDiv:e,url:o(n,i,a),displayAuthor:"true"===e.getAttribute("data-parsely-widget-display-author"),displayDirection:e.getAttribute("data-parsely-widget-display-direction"),imgDisplay:e.getAttribute("data-parsely-widget-img-display"),widgetId:e.getAttribute("data-parsely-widget-id")}}(e)})).reduce((function(e,t){return e[t.url]||(e[t.url]=[]),e[t.url].push(t),e}),{});Object.entries(t).forEach((function(e){var t=e[0],r=e[1];fetch(t).then((function(e){return e.json()})).then((function(e){r.forEach((function(t){!function(e,t){var r,n=t.outerDiv,i=t.displayAuthor,a=t.displayDirection,o=t.imgDisplay,d=t.widgetId;"none"!==o&&n.classList.add("display-thumbnail"),a&&n.classList.add("list-"+a);var c=document.createElement("ul");c.className="parsely-recommended-widget",n.appendChild(c);for(var u=0,l=Object.entries(e.data);u<l.length;u++){var s=l[u],p=s[0],m=s[1],f=document.createElement("li");f.className="parsely-recommended-widget-entry",f.setAttribute("id","parsely-recommended-widget-item"+p);var v=document.createElement("div");v.className="parsely-text-wrapper";var g=document.createElement("img");"parsely_thumb"===o?g.setAttribute("src",m.thumb_url_medium):"original"===o&&g.setAttribute("src",m.image_url),f.appendChild(g);var y="?itm_campaign=".concat(d),h="&itm_content=widget_item-"+p,w=m.url+y+"&itmMedium=site_widget&itmSource=parsely_recommended_widget"+h,b=document.createElement("div");b.className="parsely-recommended-widget-title";var C=document.createElement("a");if(C.setAttribute("href",w),C.textContent=m.title,b.appendChild(C),v.appendChild(b),i){var A=document.createElement("div");A.className="parsely-recommended-widget-author",A.textContent=m.author,v.appendChild(A)}f.appendChild(v),c.appendChild(f)}n.appendChild(c),null===(r=n.closest(".widget.Recommended_Widget"))||void 0===r||r.classList.remove("parsely-recommended-widget-hidden")}(e,t)}))}))}))}))}()}();