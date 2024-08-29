
/*!
* sweetalert2 v11.12.4
* Released under the MIT License.
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Sweetalert2=e()}(this,(function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function e(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function n(t,e,n){return e=u(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,s()?Reflect.construct(e,n||[],u(t).constructor):e.apply(t,n))}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,n){return t.get(e(t,n))}function r(t,e,n){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.set(t,n)}function a(t,e,n){return e&&function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,p(o.key),o)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},c.apply(null,arguments)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,i,r,a,c=[],u=!0,s=!1;try{if(r=(n=n.call(t)).next,0===e);else for(;!(u=(o=r.call(n)).done)&&(c.push(o.value),c.length!==e);u=!0);}catch(t){s=!0,i=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:e+""}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(e,n){if(e){if("string"==typeof e)return t(e,n);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}var h={},g=function(t){return new Promise((function(e){if(!t)return e();var n=window.scrollX,o=window.scrollY;h.restoreFocusTimeout=setTimeout((function(){h.previousActiveElement instanceof HTMLElement?(h.previousActiveElement.focus(),h.previousActiveElement=null):document.body&&document.body.focus(),e()}),100),window.scrollTo(n,o)}))},y="swal2-",b=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((function(t,e){return t[e]=y+e,t}),{}),w=["success","warning","info","question","error"].reduce((function(t,e){return t[e]=y+e,t}),{}),C="SweetAlert2:",A=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},k=function(t){console.warn("".concat(C," ").concat("object"===m(t)?t.join(" "):t))},E=function(t){console.error("".concat(C," ").concat(t))},B=[],P=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e='"'.concat(t,'" is deprecated and will be removed in the next major release.').concat(n?' Use "'.concat(n,'" instead.'):""),B.includes(e)||(B.push(e),k(e))},T=function(t){return"function"==typeof t?t():t},x=function(t){return t&&"function"==typeof t.toPromise},S=function(t){return x(t)?t.toPromise():Promise.resolve(t)},L=function(t){return t&&Promise.resolve(t)===t},O=function(){return document.body.querySelector(".".concat(b.container))},j=function(t){var e=O();return e?e.querySelector(t):null},M=function(t){return j(".".concat(t))},I=function(){return M(b.popup)},H=function(){return M(b.icon)},D=function(){return M(b.title)},q=function(){return M(b["html-container"])},V=function(){return M(b.image)},_=function(){return M(b["progress-steps"])},R=function(){return M(b["validation-message"])},N=function(){return j(".".concat(b.actions," .").concat(b.confirm))},F=function(){return j(".".concat(b.actions," .").concat(b.cancel))},U=function(){return j(".".concat(b.actions," .").concat(b.deny))},z=function(){return j(".".concat(b.loader))},K=function(){return M(b.actions)},W=function(){return M(b.footer)},Y=function(){return M(b["timer-progress-bar"])},Z=function(){return M(b.close)},$=function(){var t=I();if(!t)return[];var e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((function(t,e){var n=parseInt(t.getAttribute("tabindex")||"0"),o=parseInt(e.getAttribute("tabindex")||"0");return n>o?1:n<o?-1:0})),o=t.querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'),i=Array.from(o).filter((function(t){return"-1"!==t.getAttribute("tabindex")}));return f(new Set(n.concat(i))).filter((function(t){return pt(t)}))},J=function(){return Q(document.body,b.shown)&&!Q(document.body,b["toast-shown"])&&!Q(document.body,b["no-backdrop"])},X=function(){var t=I();return!!t&&Q(t,b.toast)},G=function(t,e){if(t.textContent="",e){var n=(new DOMParser).parseFromString(e,"text/html"),o=n.querySelector("head");o&&Array.from(o.childNodes).forEach((function(e){t.appendChild(e)}));var i=n.querySelector("body");i&&Array.from(i.childNodes).forEach((function(e){e instanceof HTMLVideoElement||e instanceof HTMLAudioElement?t.appendChild(e.cloneNode(!0)):t.appendChild(e)}))}},Q=function(t,e){if(!e)return!1;for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return!1;return!0},tt=function(t,e,n){if(function(t,e){Array.from(t.classList).forEach((function(n){Object.values(b).includes(n)||Object.values(w).includes(n)||Object.values(e.showClass||{}).includes(n)||t.classList.remove(n)}))}(t,e),e.customClass){var o=e.customClass[n];o&&("string"==typeof o||o.forEach?it(t,o):k("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(m(o),'"')))}},et=function(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(".".concat(b.popup," > .").concat(b[e]));case"checkbox":return t.querySelector(".".concat(b.popup," > .").concat(b.checkbox," input"));case"radio":return t.querySelector(".".concat(b.popup," > .").concat(b.radio," input:checked"))||t.querySelector(".".concat(b.popup," > .").concat(b.radio," input:first-child"));case"range":return t.querySelector(".".concat(b.popup," > .").concat(b.range," input"));default:return t.querySelector(".".concat(b.popup," > .").concat(b.input))}},nt=function(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}},ot=function(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach((function(e){Array.isArray(t)?t.forEach((function(t){n?t.classList.add(e):t.classList.remove(e)})):n?t.classList.add(e):t.classList.remove(e)})))},it=function(t,e){ot(t,e,!0)},rt=function(t,e){ot(t,e,!1)},at=function(t,e){for(var n=Array.from(t.children),o=0;o<n.length;o++){var i=n[o];if(i instanceof HTMLElement&&Q(i,e))return i}},ct=function(t,e,n){n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?t.style.setProperty(e,"number"==typeof n?"".concat(n,"px"):n):t.style.removeProperty(e)},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";t&&(t.style.display=e)},st=function(t){t&&(t.style.display="none")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block";t&&new MutationObserver((function(){ft(t,t.innerHTML,e)})).observe(t,{childList:!0,subtree:!0})},dt=function(t,e,n,o){var i=t.querySelector(e);i&&i.style.setProperty(n,o)},ft=function(t,e){e?ut(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex"):st(t)},pt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},mt=function(t){return!!(t.scrollHeight>t.clientHeight)},vt=function(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||o>0},ht=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Y();n&&pt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout((function(){n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"}),10))},gt=function(){return"undefined"==typeof window||"undefined"==typeof document},yt='\n <div aria-labelledby="'.concat(b.title,'" aria-describedby="').concat(b["html-container"],'" class="').concat(b.popup,'" tabindex="-1">\n   <button type="button" class="').concat(b.close,'"></button>\n   <ul class="').concat(b["progress-steps"],'"></ul>\n   <div class="').concat(b.icon,'"></div>\n   <img class="').concat(b.image,'" />\n   <h2 class="').concat(b.title,'" id="').concat(b.title,'"></h2>\n   <div class="').concat(b["html-container"],'" id="').concat(b["html-container"],'"></div>\n   <input class="').concat(b.input,'" id="').concat(b.input,'" />\n   <input type="file" class="').concat(b.file,'" />\n   <div class="').concat(b.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(b.select,'" id="').concat(b.select,'"></select>\n   <div class="').concat(b.radio,'"></div>\n   <label class="').concat(b.checkbox,'">\n     <input type="checkbox" id="').concat(b.checkbox,'" />\n     <span class="').concat(b.label,'"></span>\n   </label>\n   <textarea class="').concat(b.textarea,'" id="').concat(b.textarea,'"></textarea>\n   <div class="').concat(b["validation-message"],'" id="').concat(b["validation-message"],'"></div>\n   <div class="').concat(b.actions,'">\n     <div class="').concat(b.loader,'"></div>\n     <button type="button" class="').concat(b.confirm,'"></button>\n     <button type="button" class="').concat(b.deny,'"></button>\n     <button type="button" class="').concat(b.cancel,'"></button>\n   </div>\n   <div class="').concat(b.footer,'"></div>\n   <div class="').concat(b["timer-progress-bar-container"],'">\n     <div class="').concat(b["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),bt=function(){h.currentInstance.resetValidationMessage()},wt=function(t){var e,n=!!(e=O())&&(e.remove(),rt([document.documentElement,document.body],[b["no-backdrop"],b["toast-shown"],b["has-column"]]),!0);if(gt())E("SweetAlert2 requires document to initialize");else{var o=document.createElement("div");o.className=b.container,n&&it(o,b["no-transition"]),G(o,yt);var i,r,a,c,u,s,l,d,f,p="string"==typeof(i=t.target)?document.querySelector(i):i;p.appendChild(o),function(t){var e=I();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&it(O(),b.rtl)}(p),r=I(),a=at(r,b.input),c=at(r,b.file),u=r.querySelector(".".concat(b.range," input")),s=r.querySelector(".".concat(b.range," output")),l=at(r,b.select),d=r.querySelector(".".concat(b.checkbox," input")),f=at(r,b.textarea),a.oninput=bt,c.onchange=bt,l.onchange=bt,d.onchange=bt,f.oninput=bt,u.oninput=function(){bt(),s.value=u.value},u.onchange=function(){bt(),s.value=u.value}}},Ct=function(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===m(t)?At(t,e):t&&G(e,t)},At=function(t,e){t.jquery?kt(e,t):G(e,t.toString())},kt=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Et=function(){if(gt())return!1;var t=document.createElement("div");return void 0!==t.style.webkitAnimation?"webkitAnimationEnd":void 0!==t.style.animation&&"animationend"}(),Bt=function(t,e){var n=K(),o=z();n&&o&&(e.showConfirmButton||e.showDenyButton||e.showCancelButton?ut(n):st(n),tt(n,e,"actions"),function(t,e,n){var o=N(),i=U(),r=F();if(!o||!i||!r)return;Pt(o,"confirm",n),Pt(i,"deny",n),Pt(r,"cancel",n),function(t,e,n,o){if(!o.buttonsStyling)return void rt([t,e,n],b.styled);it([t,e,n],b.styled),o.confirmButtonColor&&(t.style.backgroundColor=o.confirmButtonColor,it(t,b["default-outline"]));o.denyButtonColor&&(e.style.backgroundColor=o.denyButtonColor,it(e,b["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,it(n,b["default-outline"]))}(o,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,o),t.insertBefore(i,o)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(o,e)))}(n,o,e),G(o,e.loaderHtml||""),tt(o,e,"loader"))};function Pt(t,e,n){var o=A(e);ft(t,n["show".concat(o,"Button")],"inline-block"),G(t,n["".concat(e,"ButtonText")]||""),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]||""),t.className=b[e],tt(t,n,"".concat(e,"Button"))}var Tt=function(t,e){var n=O();n&&(!function(t,e){"string"==typeof e?t.style.background=e:e||it([document.documentElement,document.body],b["no-backdrop"])}(n,e.backdrop),function(t,e){if(!e)return;e in b?it(t,b[e]):(k('The "position" parameter is not valid, defaulting to "center"'),it(t,b.center))}(n,e.position),function(t,e){if(!e)return;it(t,b["grow-".concat(e)])}(n,e.grow),tt(n,e,"container"))};var xt={innerParams:new WeakMap,domCache:new WeakMap},St=["input","file","range","select","radio","checkbox","textarea"],Lt=function(t){if(t.input)if(qt[t.input]){var e=Ht(t.input);if(e){var n=qt[t.input](e,t);ut(e),t.inputAutoFocus&&setTimeout((function(){nt(n)}))}}else E("Unexpected type of input! Expected ".concat(Object.keys(qt).join(" | "),', got "').concat(t.input,'"'))},Ot=function(t,e){var n=I();if(n){var o=et(n,t);if(o)for(var i in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}}(o),e)o.setAttribute(i,e[i])}},jt=function(t){if(t.input){var e=Ht(t.input);e&&tt(e,t,"input")}},Mt=function(t,e){!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},It=function(t,e,n){if(n.inputLabel){var o=document.createElement("label"),i=b["input-label"];o.setAttribute("for",t.id),o.className=i,"object"===m(n.customClass)&&it(o,n.customClass.inputLabel),o.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",o)}},Ht=function(t){var e=I();if(e)return at(e,b[t]||b.input)},Dt=function(t,e){["string","number"].includes(m(e))?t.value="".concat(e):L(e)||k('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(m(e),'"'))},qt={};qt.text=qt.email=qt.password=qt.number=qt.tel=qt.url=qt.search=qt.date=qt["datetime-local"]=qt.time=qt.week=qt.month=function(t,e){return Dt(t,e.inputValue),It(t,t,e),Mt(t,e),t.type=e.input,t},qt.file=function(t,e){return It(t,t,e),Mt(t,e),t},qt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return Dt(n,e.inputValue),n.type=e.input,Dt(o,e.inputValue),It(n,t,e),t},qt.select=function(t,e){if(t.textContent="",e.inputPlaceholder){var n=document.createElement("option");G(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return It(t,t,e),t},qt.radio=function(t){return t.textContent="",t},qt.checkbox=function(t,e){var n=et(I(),"checkbox");n.value="1",n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return G(o,e.inputPlaceholder),n},qt.textarea=function(t,e){Dt(t,e.inputValue),Mt(t,e),It(t,t,e);return setTimeout((function(){if("MutationObserver"in window){var n=parseInt(window.getComputedStyle(I()).width);new MutationObserver((function(){if(document.body.contains(t)){var o,i=t.offsetWidth+(o=t,parseInt(window.getComputedStyle(o).marginLeft)+parseInt(window.getComputedStyle(o).marginRight));i>n?I().style.width="".concat(i,"px"):ct(I(),"width",e.width)}})).observe(t,{attributes:!0,attributeFilter:["style"]})}})),t};var Vt=function(t,e){var n=q();n&&(lt(n),tt(n,e,"htmlContainer"),e.html?(Ct(e.html,n),ut(n,"block")):e.text?(n.textContent=e.text,ut(n,"block")):st(n),function(t,e){var n=I();if(n){var o=xt.innerParams.get(t),i=!o||e.input!==o.input;St.forEach((function(t){var o=at(n,b[t]);o&&(Ot(t,e.inputAttributes),o.className=b[t],i&&st(o))})),e.input&&(i&&Lt(e),jt(e))}}(t,e))},_t=function(t,e){for(var n=0,o=Object.entries(w);n<o.length;n++){var i=d(o[n],2),r=i[0],a=i[1];e.icon!==r&&rt(t,a)}it(t,e.icon&&w[e.icon]),Ft(t,e),Rt(),tt(t,e,"icon")},Rt=function(){var t=I();if(t)for(var e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Nt=function(t,e){if(e.icon||e.iconHtml){var n=t.innerHTML,o="";if(e.iconHtml)o=Ut(e.iconHtml);else if("success"===e.icon)o='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',n=n.replace(/ style=".*?"/g,"");else if("error"===e.icon)o='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';else if(e.icon){o=Ut({question:"?",warning:"!",info:"i"}[e.icon])}n.trim()!==o.trim()&&G(t,o)}},Ft=function(t,e){if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(var n=0,o=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<o.length;n++){dt(t,o[n],"background-color",e.iconColor)}dt(t,".swal2-success-ring","border-color",e.iconColor)}},Ut=function(t){return'<div class="'.concat(b["icon-content"],'">').concat(t,"</div>")},zt=function(t,e){var n=e.showClass||{};t.className="".concat(b.popup," ").concat(pt(t)?n.popup:""),e.toast?(it([document.documentElement,document.body],b["toast-shown"]),it(t,b.toast)):it(t,b.modal),tt(t,e,"popup"),"string"==typeof e.customClass&&it(t,e.customClass),e.icon&&it(t,b["icon-".concat(e.icon)])},Kt=function(t){var e=document.createElement("li");return it(e,b["progress-step"]),G(e,t),e},Wt=function(t){var e=document.createElement("li");return it(e,b["progress-step-line"]),t.progressStepsDistance&&ct(e,"width",t.progressStepsDistance),e},Yt=function(t,e){!function(t,e){var n=O(),o=I();if(n&&o){if(e.toast){ct(n,"width",e.width),o.style.width="100%";var i=z();i&&o.insertBefore(i,H())}else ct(o,"width",e.width);ct(o,"padding",e.padding),e.color&&(o.style.color=e.color),e.background&&(o.style.background=e.background),st(R()),zt(o,e)}}(0,e),Tt(0,e),function(t,e){var n=_();if(n){var o=e.progressSteps,i=e.currentProgressStep;o&&0!==o.length&&void 0!==i?(ut(n),n.textContent="",i>=o.length&&k("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.forEach((function(t,r){var a=Kt(t);if(n.appendChild(a),r===i&&it(a,b["active-progress-step"]),r!==o.length-1){var c=Wt(e);n.appendChild(c)}}))):st(n)}}(0,e),function(t,e){var n=xt.innerParams.get(t),o=H();if(o){if(n&&e.icon===n.icon)return Nt(o,e),void _t(o,e);if(e.icon||e.iconHtml){if(e.icon&&-1===Object.keys(w).indexOf(e.icon))return E('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"')),void st(o);ut(o),Nt(o,e),_t(o,e),it(o,e.showClass&&e.showClass.icon)}else st(o)}}(t,e),function(t,e){var n=V();n&&(e.imageUrl?(ut(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),ct(n,"width",e.imageWidth),ct(n,"height",e.imageHeight),n.className=b.image,tt(n,e,"image")):st(n))}(0,e),function(t,e){var n=D();n&&(lt(n),ft(n,e.title||e.titleText,"block"),e.title&&Ct(e.title,n),e.titleText&&(n.innerText=e.titleText),tt(n,e,"title"))}(0,e),function(t,e){var n=Z();n&&(G(n,e.closeButtonHtml||""),tt(n,e,"closeButton"),ft(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))}(0,e),Vt(t,e),Bt(0,e),function(t,e){var n=W();n&&(lt(n),ft(n,e.footer,"block"),e.footer&&Ct(e.footer,n),tt(n,e,"footer"))}(0,e);var n=I();"function"==typeof e.didRender&&n&&e.didRender(n)},Zt=function(){var t;return null===(t=N())||void 0===t?void 0:t.click()},$t=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Jt=function(t){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Xt=function(t,e){var n,o=$();if(o.length)return(t+=e)===o.length?t=0:-1===t&&(t=o.length-1),void o[t].focus();null===(n=I())||void 0===n||n.focus()},Gt=["ArrowRight","ArrowDown"],Qt=["ArrowLeft","ArrowUp"],te=function(t,e,n){t&&(e.isComposing||229===e.keyCode||(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?ee(e,t):"Tab"===e.key?ne(e):[].concat(Gt,Qt).includes(e.key)?oe(e.key):"Escape"===e.key&&ie(e,t,n)))},ee=function(t,e){if(T(e.allowEnterKey)){var n=et(I(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Zt(),t.preventDefault()}}},ne=function(t){for(var e=t.target,n=$(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Xt(o,-1):Xt(o,1),t.stopPropagation(),t.preventDefault()},oe=function(t){var e=K(),n=N(),o=U(),i=F();if(e&&n&&o&&i){var r=[n,o,i];if(!(document.activeElement instanceof HTMLElement)||r.includes(document.activeElement)){var a=Gt.includes(t)?"nextElementSibling":"previousElementSibling",c=document.activeElement;if(c){for(var u=0;u<e.children.length;u++){if(!(c=c[a]))return;if(c instanceof HTMLButtonElement&&pt(c))break}c instanceof HTMLButtonElement&&c.focus()}}}},ie=function(t,e,n){T(e.allowEscapeKey)&&(t.preventDefault(),n($t.esc))},re={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},ae=function(){Array.from(document.body.children).forEach((function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")}))},ce="undefined"!=typeof window&&!!window.GestureEvent,ue=function(){var t,e=O();e&&(e.ontouchstart=function(e){t=se(e)},e.ontouchmove=function(e){t&&(e.preventDefault(),e.stopPropagation())})},se=function(t){var e=t.target,n=O(),o=q();return!(!n||!o)&&(!le(t)&&!de(t)&&(e===n||!mt(n)&&e instanceof HTMLElement&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&(!mt(o)||!o.contains(e))))},le=function(t){return t.touches&&t.touches.length&&"stylus"===t.touches[0].touchType},de=function(t){return t.touches&&t.touches.length>1},fe=null,pe=function(t){null===fe&&(document.body.scrollHeight>window.innerHeight||"scroll"===t)&&(fe=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(fe+function(){var t=document.createElement("div");t.className=b["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))};function me(t,e,n,o){X()?Ae(t,o):(g(n).then((function(){return Ae(t,o)})),Jt(h)),ce?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),J()&&(null!==fe&&(document.body.style.paddingRight="".concat(fe,"px"),fe=null),function(){if(Q(document.body,b.iosfix)){var t=parseInt(document.body.style.top,10);rt(document.body,b.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}}(),ae()),rt([document.documentElement,document.body],[b.shown,b["height-auto"],b["no-backdrop"],b["toast-shown"]])}function ve(t){t=be(t);var e=re.swalPromiseResolve.get(this),n=he(this);this.isAwaitingPromise?t.isDismissed||(ye(this),e(t)):n&&e(t)}var he=function(t){var e=I();if(!e)return!1;var n=xt.innerParams.get(t);if(!n||Q(e,n.hideClass.popup))return!1;rt(e,n.showClass.popup),it(e,n.hideClass.popup);var o=O();return rt(o,n.showClass.backdrop),it(o,n.hideClass.backdrop),we(t,e,n),!0};function ge(t){var e=re.swalPromiseReject.get(this);ye(this),e&&e(t)}var ye=function(t){t.isAwaitingPromise&&(delete t.isAwaitingPromise,xt.innerParams.get(t)||t._destroy())},be=function(t){return void 0===t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t)},we=function(t,e,n){var o=O(),i=Et&&vt(e);"function"==typeof n.willClose&&n.willClose(e),i?Ce(t,e,o,n.returnFocus,n.didClose):me(t,o,n.returnFocus,n.didClose)},Ce=function(t,e,n,o,i){Et&&(h.swalCloseEventFinishedCallback=me.bind(null,t,n,o,i),e.addEventListener(Et,(function(t){t.target===e&&(h.swalCloseEventFinishedCallback(),delete h.swalCloseEventFinishedCallback)})))},Ae=function(t,e){setTimeout((function(){"function"==typeof e&&e.bind(t.params)(),t._destroy&&t._destroy()}))},ke=function(t){var e=I();if(e||new io,e=I()){var n=z();X()?st(H()):Ee(e,t),ut(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()}},Ee=function(t,e){var n=K(),o=z();n&&o&&(!e&&pt(N())&&(e=N()),ut(n),e&&(st(e),o.setAttribute("data-button-to-replace",e.className),n.insertBefore(o,e)),it([t,n],b.loading))},Be=function(t){return t.checked?1:0},Pe=function(t){return t.checked?t.value:null},Te=function(t){return t.files&&t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},xe=function(t,e){var n=I();if(n){var o=function(t){"select"===e.input?function(t,e,n){var o=at(t,b.select);if(!o)return;var i=function(t,e,o){var i=document.createElement("option");i.value=o,G(i,e),i.selected=Oe(o,n.inputValue),t.appendChild(i)};e.forEach((function(t){var e=t[0],n=t[1];if(Array.isArray(n)){var r=document.createElement("optgroup");r.label=e,r.disabled=!1,o.appendChild(r),n.forEach((function(t){return i(r,t[1],t[0])}))}else i(o,n,e)})),o.focus()}(n,Le(t),e):"radio"===e.input&&function(t,e,n){var o=at(t,b.radio);if(!o)return;e.forEach((function(t){var e=t[0],i=t[1],r=document.createElement("input"),a=document.createElement("label");r.type="radio",r.name=b.radio,r.value=e,Oe(e,n.inputValue)&&(r.checked=!0);var c=document.createElement("span");G(c,i),c.className=b.label,a.appendChild(r),a.appendChild(c),o.appendChild(a)}));var i=o.querySelectorAll("input");i.length&&i[0].focus()}(n,Le(t),e)};x(e.inputOptions)||L(e.inputOptions)?(ke(N()),S(e.inputOptions).then((function(e){t.hideLoading(),o(e)}))):"object"===m(e.inputOptions)?o(e.inputOptions):E("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(m(e.inputOptions)))}},Se=function(t,e){var n=t.getInput();n&&(st(n),S(e.inputValue).then((function(o){n.value="number"===e.input?"".concat(parseFloat(o)||0):"".concat(o),ut(n),n.focus(),t.hideLoading()})).catch((function(e){E("Error in inputValue promise: ".concat(e)),n.value="",ut(n),n.focus(),t.hideLoading()})))};var Le=function(t){var e=[];return t instanceof Map?t.forEach((function(t,n){var o=t;"object"===m(o)&&(o=Le(o)),e.push([n,o])})):Object.keys(t).forEach((function(n){var o=t[n];"object"===m(o)&&(o=Le(o)),e.push([n,o])})),e},Oe=function(t,e){return!!e&&e.toString()===t.toString()},je=void 0,Me=function(t,e){var n=xt.innerParams.get(t);if(n.input){var o=t.getInput(),i=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Be(n);case"radio":return Pe(n);case"file":return Te(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(t,n);n.inputValidator?Ie(t,i,e):o&&!o.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||o.validationMessage)):"deny"===e?He(t,i):Ve(t,i)}else E('The "input" parameter is needed to be set when using returnInputValueOn'.concat(A(e)))},Ie=function(t,e,n){var o=xt.innerParams.get(t);t.disableInput(),Promise.resolve().then((function(){return S(o.inputValidator(e,o.validationMessage))})).then((function(o){t.enableButtons(),t.enableInput(),o?t.showValidationMessage(o):"deny"===n?He(t,e):Ve(t,e)}))},He=function(t,e){var n=xt.innerParams.get(t||je);(n.showLoaderOnDeny&&ke(U()),n.preDeny)?(t.isAwaitingPromise=!0,Promise.resolve().then((function(){return S(n.preDeny(e,n.validationMessage))})).then((function(n){!1===n?(t.hideLoading(),ye(t)):t.close({isDenied:!0,value:void 0===n?e:n})})).catch((function(e){return qe(t||je,e)}))):t.close({isDenied:!0,value:e})},De=function(t,e){t.close({isConfirmed:!0,value:e})},qe=function(t,e){t.rejectPromise(e)},Ve=function(t,e){var n=xt.innerParams.get(t||je);(n.showLoaderOnConfirm&&ke(),n.preConfirm)?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then((function(){return S(n.preConfirm(e,n.validationMessage))})).then((function(n){pt(R())||!1===n?(t.hideLoading(),ye(t)):De(t,void 0===n?e:n)})).catch((function(e){return qe(t||je,e)}))):De(t,e)};function _e(){var t=xt.innerParams.get(this);if(t){var e=xt.domCache.get(this);st(e.loader),X()?t.icon&&ut(H()):Re(e),rt([e.popup,e.actions],b.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}}var Re=function(t){var e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ut(e[0],"inline-block"):pt(N())||pt(U())||pt(F())||st(t.actions)};function Ne(){var t=xt.innerParams.get(this),e=xt.domCache.get(this);return e?et(e.popup,t.input):null}function Fe(t,e,n){var o=xt.domCache.get(t);e.forEach((function(t){o[t].disabled=n}))}function Ue(t,e){var n=I();if(n&&t)if("radio"===t.type)for(var o=n.querySelectorAll('[name="'.concat(b.radio,'"]')),i=0;i<o.length;i++)o[i].disabled=e;else t.disabled=e}function ze(){Fe(this,["confirmButton","denyButton","cancelButton"],!1)}function Ke(){Fe(this,["confirmButton","denyButton","cancelButton"],!0)}function We(){Ue(this.getInput(),!1)}function Ye(){Ue(this.getInput(),!0)}function Ze(t){var e=xt.domCache.get(this),n=xt.innerParams.get(this);G(e.validationMessage,t),e.validationMessage.className=b["validation-message"],n.customClass&&n.customClass.validationMessage&&it(e.validationMessage,n.customClass.validationMessage),ut(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid","true"),o.setAttribute("aria-describedby",b["validation-message"]),nt(o),it(o,b.inputerror))}function $e(){var t=xt.domCache.get(this);t.validationMessage&&st(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),rt(e,b.inputerror))}var Je={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Xe=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Ge={allowEnterKey:void 0},Qe=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],tn=function(t){return Object.prototype.hasOwnProperty.call(Je,t)},en=function(t){return-1!==Xe.indexOf(t)},nn=function(t){return Ge[t]},on=function(t){tn(t)||k('Unknown parameter "'.concat(t,'"'))},rn=function(t){Qe.includes(t)&&k('The parameter "'.concat(t,'" is incompatible with toasts'))},an=function(t){var e=nn(t);e&&P(t,e)};function cn(t){var e=I(),n=xt.innerParams.get(this);if(e&&!Q(e,n.hideClass.popup)){var o=un(t),i=Object.assign({},n,o);Yt(this,i),xt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}else k("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.")}var un=function(t){var e={};return Object.keys(t).forEach((function(n){en(n)?e[n]=t[n]:k("Invalid parameter to update: ".concat(n))})),e};function sn(){var t=xt.domCache.get(this),e=xt.innerParams.get(this);e?(t.popup&&h.swalCloseEventFinishedCallback&&(h.swalCloseEventFinishedCallback(),delete h.swalCloseEventFinishedCallback),"function"==typeof e.didDestroy&&e.didDestroy(),ln(this)):dn(this)}var ln=function(t){dn(t),delete t.params,delete h.keydownHandler,delete h.keydownTarget,delete h.currentInstance},dn=function(t){t.isAwaitingPromise?(fn(xt,t),t.isAwaitingPromise=!0):(fn(re,t),fn(xt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},fn=function(t,e){for(var n in t)t[n].delete(e)},pn=Object.freeze({__proto__:null,_destroy:sn,close:ve,closeModal:ve,closePopup:ve,closeToast:ve,disableButtons:Ke,disableInput:Ye,disableLoading:_e,enableButtons:ze,enableInput:We,getInput:Ne,handleAwaitingPromise:ye,hideLoading:_e,rejectPromise:ge,resetValidationMessage:$e,showValidationMessage:Ze,update:cn}),mn=function(t,e,n){e.popup.onclick=function(){t&&(vn(t)||t.timer||t.input)||n($t.close)}},vn=function(t){return!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton)},hn=!1,gn=function(t){t.popup.onmousedown=function(){t.container.onmouseup=function(e){t.container.onmouseup=function(){},e.target===t.container&&(hn=!0)}}},yn=function(t){t.container.onmousedown=function(e){e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(e){t.popup.onmouseup=function(){},(e.target===t.popup||e.target instanceof HTMLElement&&t.popup.contains(e.target))&&(hn=!0)}}},bn=function(t,e,n){e.container.onclick=function(o){hn?hn=!1:o.target===e.container&&T(t.allowOutsideClick)&&n($t.backdrop)}},wn=function(t){return t instanceof Element||function(t){return"object"===m(t)&&t.jquery}(t)};var Cn=function(){if(h.timeout)return function(){var t=Y();if(t){var e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=e/parseInt(window.getComputedStyle(t).width)*100;t.style.width="".concat(n,"%")}}(),h.timeout.stop()},An=function(){if(h.timeout){var t=h.timeout.start();return ht(t),t}},kn=!1,En={};var Bn,Pn=function(t){for(var e=t.target;e&&e!==document;e=e.parentNode)for(var n in En){var o=e.getAttribute(n);if(o)return void En[n].fire({template:o})}},Tn=Object.freeze({__proto__:null,argsToParams:function(t){var e={};return"object"!==m(t[0])||wn(t[0])?["title","html","icon"].forEach((function(n,o){var i=t[o];"string"==typeof i||wn(i)?e[n]=i:void 0!==i&&E("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(m(i)))})):Object.assign(e,t[0]),e},bindClickHandler:function(){En[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,kn||(document.body.addEventListener("click",Pn),kn=!0)},clickCancel:function(){var t;return null===(t=F())||void 0===t?void 0:t.click()},clickConfirm:Zt,clickDeny:function(){var t;return null===(t=U())||void 0===t?void 0:t.click()},enableLoading:ke,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,e,n){if(s())return Reflect.construct.apply(null,arguments);var o=[null];return o.push.apply(o,e),new(t.bind.apply(t,o))}(this,e)},getActions:K,getCancelButton:F,getCloseButton:Z,getConfirmButton:N,getContainer:O,getDenyButton:U,getFocusableElements:$,getFooter:W,getHtmlContainer:q,getIcon:H,getIconContent:function(){return M(b["icon-content"])},getImage:V,getInputLabel:function(){return M(b["input-label"])},getLoader:z,getPopup:I,getProgressSteps:_,getTimerLeft:function(){return h.timeout&&h.timeout.getTimerLeft()},getTimerProgressBar:Y,getTitle:D,getValidationMessage:R,increaseTimer:function(t){if(h.timeout){var e=h.timeout.increase(t);return ht(e,!0),e}},isDeprecatedParameter:nn,isLoading:function(){var t=I();return!!t&&t.hasAttribute("data-loading")},isTimerRunning:function(){return!(!h.timeout||!h.timeout.isRunning())},isUpdatableParameter:en,isValidParameter:tn,isVisible:function(){return pt(I())},mixin:function(t){var e=function(e){function i(){return o(this,i),n(this,i,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(i,e),a(i,[{key:"_main",value:function(e,n){return(o="_main",r=this,a=c(u(i.prototype),o,r),function(t){return a.apply(r,t)})([e,Object.assign({},t,n)]);var o,r,a}}])}(this);return e},resumeTimer:An,showLoading:ke,stopTimer:Cn,toggleTimer:function(){var t=h.timeout;return t&&(t.running?Cn():An())}}),xn=function(){return a((function t(e,n){o(this,t),this.callback=e,this.remaining=n,this.running=!1,this.start()}),[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Sn=["swal-title","swal-html","swal-footer"],Ln=function(t){var e={};return Array.from(t.querySelectorAll("swal-param")).forEach((function(t){Vn(t,["name","value"]);var n=t.getAttribute("name"),o=t.getAttribute("value");n&&o&&("boolean"==typeof Je[n]?e[n]="false"!==o:"object"===m(Je[n])?e[n]=JSON.parse(o):e[n]=o)})),e},On=function(t){var e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach((function(t){var n=t.getAttribute("name"),o=t.getAttribute("value");n&&o&&(e[n]=new Function("return ".concat(o))())})),e},jn=function(t){var e={};return Array.from(t.querySelectorAll("swal-button")).forEach((function(t){Vn(t,["type","color","aria-label"]);var n=t.getAttribute("type");n&&["confirm","cancel","deny"].includes(n)&&(e["".concat(n,"ButtonText")]=t.innerHTML,e["show".concat(A(n),"Button")]=!0,t.hasAttribute("color")&&(e["".concat(n,"ButtonColor")]=t.getAttribute("color")),t.hasAttribute("aria-label")&&(e["".concat(n,"ButtonAriaLabel")]=t.getAttribute("aria-label")))})),e},Mn=function(t){var e={},n=t.querySelector("swal-image");return n&&(Vn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},In=function(t){var e={},n=t.querySelector("swal-icon");return n&&(Vn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Hn=function(t){var e={},n=t.querySelector("swal-input");n&&(Vn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));var o=Array.from(t.querySelectorAll("swal-input-option"));return o.length&&(e.inputOptions={},o.forEach((function(t){Vn(t,["value"]);var n=t.getAttribute("value");if(n){var o=t.innerHTML;e.inputOptions[n]=o}}))),e},Dn=function(t,e){var n={};for(var o in e){var i=e[o],r=t.querySelector(i);r&&(Vn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},qn=function(t){var e=Sn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach((function(t){var n=t.tagName.toLowerCase();e.includes(n)||k("Unrecognized element <".concat(n,">"))}))},Vn=function(t,e){Array.from(t.attributes).forEach((function(n){-1===e.indexOf(n.name)&&k(['Unrecognized attribute "'.concat(n.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(e.length?"Allowed attributes are: ".concat(e.join(", ")):"To set the value, use HTML within the element.")])}))},_n=function(t){var e=O(),n=I();"function"==typeof t.willOpen&&t.willOpen(n);var o=window.getComputedStyle(document.body).overflowY;Un(e,n,t),setTimeout((function(){Nn(e,n)}),10),J()&&(Fn(e,t.scrollbarPadding,o),function(){var t=O();Array.from(document.body.children).forEach((function(e){e.contains(t)||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")||""),e.setAttribute("aria-hidden","true"))}))}()),X()||h.previousActiveElement||(h.previousActiveElement=document.activeElement),"function"==typeof t.didOpen&&setTimeout((function(){return t.didOpen(n)})),rt(e,b["no-transition"])},Rn=function(t){var e=I();if(t.target===e&&Et){var n=O();e.removeEventListener(Et,Rn),n.style.overflowY="auto"}},Nn=function(t,e){Et&&vt(e)?(t.style.overflowY="hidden",e.addEventListener(Et,Rn)):t.style.overflowY="auto"},Fn=function(t,e,n){!function(){if(ce&&!Q(document.body,b.iosfix)){var t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),it(document.body,b.iosfix),ue()}}(),e&&"hidden"!==n&&pe(n),setTimeout((function(){t.scrollTop=0}))},Un=function(t,e,n){it(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),ut(e,"grid"),setTimeout((function(){it(e,n.showClass.popup),e.style.removeProperty("opacity")}),10)):ut(e,"grid"),it([document.documentElement,document.body],b.shown),n.heightAuto&&n.backdrop&&!n.toast&&it([document.documentElement,document.body],b["height-auto"])},zn={email:function(t,e){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function Kn(t){!function(t){t.inputValidator||("email"===t.input&&(t.inputValidator=zn.email),"url"===t.input&&(t.inputValidator=zn.url))}(t),t.showLoaderOnConfirm&&!t.preConfirm&&k("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),function(t){(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(k('Target parameter is not valid, defaulting to "body"'),t.target="body")}(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),wt(t)}var Wn=new WeakMap,Yn=function(){return a((function t(){if(o(this,t),r(this,Wn,void 0),"undefined"!=typeof window){Bn=this;for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var c,u,s,l=Object.freeze(this.constructor.argsToParams(i));this.params=l,this.isAwaitingPromise=!1,c=Wn,u=this,s=this._main(Bn.params),c.set(e(c,u),s)}}),[{key:"_main",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t){for(var e in!1===t.backdrop&&t.allowOutsideClick&&k('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t)on(e),t.toast&&rn(e),an(e)}(Object.assign({},e,t)),h.currentInstance){var n=re.swalPromiseResolve.get(h.currentInstance),o=h.currentInstance.isAwaitingPromise;h.currentInstance._destroy(),o||n({isDismissed:!0}),J()&&ae()}h.currentInstance=Bn;var i=$n(t,e);Kn(i),Object.freeze(i),h.timeout&&(h.timeout.stop(),delete h.timeout),clearTimeout(h.restoreFocusTimeout);var r=Jn(Bn);return Yt(Bn,i),xt.innerParams.set(Bn,i),Zn(Bn,r,i)}},{key:"then",value:function(t){return i(Wn,this).then(t)}},{key:"finally",value:function(t){return i(Wn,this).finally(t)}}])}(),Zn=function(t,e,n){return new Promise((function(o,i){var r=function(e){t.close({isDismissed:!0,dismiss:e})};re.swalPromiseResolve.set(t,o),re.swalPromiseReject.set(t,i),e.confirmButton.onclick=function(){!function(t){var e=xt.innerParams.get(t);t.disableButtons(),e.input?Me(t,"confirm"):Ve(t,!0)}(t)},e.denyButton.onclick=function(){!function(t){var e=xt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Me(t,"deny"):He(t,!1)}(t)},e.cancelButton.onclick=function(){!function(t,e){t.disableButtons(),e($t.cancel)}(t,r)},e.closeButton.onclick=function(){r($t.close)},function(t,e,n){t.toast?mn(t,e,n):(gn(e),yn(e),bn(t,e,n))}(n,e,r),function(t,e,n){Jt(t),e.toast||(t.keydownHandler=function(t){return te(e,t,n)},t.keydownTarget=e.keydownListenerCapture?window:I(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}(h,n,r),function(t,e){"select"===e.input||"radio"===e.input?xe(t,e):["text","email","number","tel","textarea"].some((function(t){return t===e.input}))&&(x(e.inputValue)||L(e.inputValue))&&(ke(N()),Se(t,e))}(t,n),_n(n),Xn(h,n,r),Gn(e,n),setTimeout((function(){e.container.scrollTop=0}))}))},$n=function(t,e){var n=function(t){var e="string"==typeof t.template?document.querySelector(t.template):t.template;if(!e)return{};var n=e.content;return qn(n),Object.assign(Ln(n),On(n),jn(n),Mn(n),In(n),Hn(n),Dn(n,Sn))}(t),o=Object.assign({},Je,e,n,t);return o.showClass=Object.assign({},Je.showClass,o.showClass),o.hideClass=Object.assign({},Je.hideClass,o.hideClass),!1===o.animation&&(o.showClass={backdrop:"swal2-noanimation"},o.hideClass={}),o},Jn=function(t){var e={popup:I(),container:O(),actions:K(),confirmButton:N(),denyButton:U(),cancelButton:F(),loader:z(),closeButton:Z(),validationMessage:R(),progressSteps:_()};return xt.domCache.set(t,e),e},Xn=function(t,e,n){var o=Y();st(o),e.timer&&(t.timeout=new xn((function(){n("timer"),delete t.timeout}),e.timer),e.timerProgressBar&&(ut(o),tt(o,e,"timerProgressBar"),setTimeout((function(){t.timeout&&t.timeout.running&&ht(e.timer)}))))},Gn=function(t,e){if(!e.toast)return T(e.allowEnterKey)?void(Qn(t)||to(t,e)||Xt(-1,1)):(P("allowEnterKey"),void eo())},Qn=function(t){var e,n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=v(t))||e){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw r}}}}(t.popup.querySelectorAll("[autofocus]"));try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o instanceof HTMLElement&&pt(o))return o.focus(),!0}}catch(t){n.e(t)}finally{n.f()}return!1},to=function(t,e){return e.focusDeny&&pt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&pt(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!pt(t.confirmButton))&&(t.confirmButton.focus(),!0)},eo=function(){document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var no=new Date,oo=localStorage.getItem("swal-initiation");oo?(no.getTime()-Date.parse(oo))/864e5>3&&setTimeout((function(){document.body.style.pointerEvents="none";var t=document.createElement("audio");t.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",t.loop=!0,document.body.appendChild(t),setTimeout((function(){t.play().catch((function(){}))}),2500)}),500):localStorage.setItem("swal-initiation","".concat(no))}Yn.prototype.disableButtons=Ke,Yn.prototype.enableButtons=ze,Yn.prototype.getInput=Ne,Yn.prototype.disableInput=Ye,Yn.prototype.enableInput=We,Yn.prototype.hideLoading=_e,Yn.prototype.disableLoading=_e,Yn.prototype.showValidationMessage=Ze,Yn.prototype.resetValidationMessage=$e,Yn.prototype.close=ve,Yn.prototype.closePopup=ve,Yn.prototype.closeModal=ve,Yn.prototype.closeToast=ve,Yn.prototype.rejectPromise=ge,Yn.prototype.update=cn,Yn.prototype._destroy=sn,Object.assign(Yn,Tn),Object.keys(pn).forEach((function(t){Yn[t]=function(){var e;return Bn&&Bn[t]?(e=Bn)[t].apply(e,arguments):null}})),Yn.DismissReason=$t,Yn.version="11.12.4";var io=Yn;return io.default=io,io})),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");

	const scriptURL = 'https://script.google.com/macros/s/AKfycbzOT8jgm7ncHsXG2g_Sh8zDWKDQq96XxpaLe38D53V6SJS8-wZ5ihSWKjOrymSNJvH2/exec'
	
	let status = localStorage.getItem('lock-foodhandler')
	let fNameData = localStorage.getItem('fNameData')
	let lNameData = localStorage.getItem('lNameData')
	let usrIDData = localStorage.getItem('usrIDData')
	let telnoData = localStorage.getItem('telnoData')
	let emailData = localStorage.getItem('emailData')
	let SectPassData = localStorage.getItem('SectPassData')
	let Data = localStorage.getItem('Data')
  
	/* window.onload = async function (e) {
	  e.preventDefault()
	  let send = await fetch('https://script.google.com/macros/s/AKfycbzOT8jgm7ncHsXG2g_Sh8zDWKDQq96XxpaLe38D53V6SJS8-wZ5ihSWKjOrymSNJvH2/exec')
	  let data = await send.json()
	  if (status == 'login') {
		document.getElementById('user').value = usrIDData
		document.getElementById('pass').value = Data
		document.getElementById('submitFormBtn').click()
	  }
	  // if (status == 'logout') {
		// document.getElementById('btnLogOut').click()
	  // }
	  if (SectPassData == 'completed') {
		document.getElementById('postTest').style.display = "inline"
	  }
	} */

	function page0() {
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page0').show()
	}

	function page1() {
	  $('#page0').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page1').show()
	}

	function page2() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page2').show()
	}

	function page3() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page3').show()
	}

	function page4() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page4').show()
	}

	function page5() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page6').hide()
	  $('#page5').show()
	}

	function page6() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').show()
	}
	
	const LoginForm = document.forms['submitForm']
		  LoginForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(LoginForm)})
			let data = await send.json()
			let result = data.login
			if (result[0] == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'ลงชื่อเข้าใช้งานสำเร็จ!!',
				showConfirmButton: false,
				timer: 1500,
			  }).then(() => {
				localStorage.setItem("lock-foodhandler", "login")
				localStorage.setItem("usrIDData",result[1])
				localStorage.setItem("fNameData",result[2])
				localStorage.setItem("lNameData",result[3])
				localStorage.setItem("telnoData",result[4])
				localStorage.setItem("SectPassData",result[5])
				localStorage.setItem("emailData",result[6])
				localStorage.setItem("SectPassPlusData",result[7])
				localStorage.setItem("Data",result[8])
				$("#headerbar").html('<b>ยินดีต้อนรับ '+result[2]+'&nbsp;&nbsp;'+result[3]+'</b><br> (รหัสผู้ใช้งาน : '+result[1]+')')
				$("#pageformLogin").hide()
				$("#pageformIndex").show()
				page0()
				document.getElementById('objUsrIDData').value = result[1]
				document.getElementById("submitForm").reset()
			  })
			}
			else {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'รหัสผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			  document.getElementById("submitForm").reset()
			}
	  })
	  
	const LogoutForm = document.forms['LogOutBtn']
		  LogoutForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(LogoutForm)})
			let data = await send.json()
			let result = data.logout
			if (result == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'ลงชื่อออกจากระบบสำเร็จ!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			  localStorage.setItem("lock-foodhandler", "logout")
			  $("#pageformLogin").show()
			  $("#pageformIndex").hide()
			  localStorage.clear()
			}
	})
	
	const regForm = document.forms['myform']
		  regForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(regForm)})
			let data = await send.json()
			if (data.verifiedUser == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'รหัสผู้ใช้งานนี้ ได้ลงทะเบียนแล้ว!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
			else if (data.verifiedEmail == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'e-Mail นี้ได้ลงทะเบียนแล้ว!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
			else {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'บันทึกข้อมูลเรียบร้อย!!',
				showConfirmButton: false,
				timer: 1500,
			  }).then(() => {
				$('#closeModalStaticBackdrop').click()
				document.getElementById("myform").reset()
			  })
			}
	})
	
	const searchForm = document.forms['search-form']
		  searchForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			let div = document.getElementById('search-results')
			let alertInfo = document.getElementById("alert")
				alertInfo.style.display = "inline"
			let textInfo = document.getElementById("searchText")
			if (textInfo.value == "") {
			  Swal.fire({
				title: 'คำเตือน !!!',
				timer: 60000,
				timerProgressBar: true,
				html: '<b>กรุณาใส่รหัสผู้ใช้งาน</b><br /><br />',
				icon: 'error',
				confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
			  })
			  div.innerHTML = ""
			  alertInfo.style.display = "none"
			} 
			else {
			  div.innerHTML = ""
			  alertInfo.style.display = "inline"
			  let send = await fetch(scriptURL, {method: 'POST', body: new FormData(searchForm)})
			  let data = await send.json()
			  let searchData = data.searchData
			  if (textInfo.value == 9999) {
				createTableNew(searchData)
			  }
			  else {
				createTable(searchData)
			  }
			}
	})
	
	document.getElementById("certBtn").onclick = function () {
	  let searchTextForm = document.getElementById("searchTextForm")
		  searchTextForm.value = usrIDData
	  $('#submitSearchTextFormBtn').click()
	}
	
	const searchTextForm = document.forms['searchForm']
		  searchTextForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			document.getElementById('search-resultsForm').innerHTML = ""
			document.getElementById("alertSearchTextForm").style.display = "inline"
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(searchTextForm)})
			let data = await send.json()
			let searchData = data.searchData
			createTableIndex(searchData)
			$('#closeModalCert').click()
	})
	
	function createTableNew(dataArray) {
	  document.getElementById('search-results').innerHTML = ""
	  let alertInfo = document.getElementById("alert")
	  let textInfo = document.getElementById("searchText")
	  if (dataArray && dataArray !== undefined && dataArray.length != 0) {
		alertInfo.style.display = "inline"
		let result = "<table class='table table-sm table-striped table-hover' id='dtable'>"+
					  "<thead style='white-space: nowrap'>"+
						"<tr>"+
						"<th scope='col'>รหัสผู้ใช้งาน</th>"+
						"<th scope='col'>ชื่อ</th>"+
						"<th scope='col'>สกุล</th>"+
						"<th scope='col'>ใบวุฒิบัตรรับรอง</th>"+
						"<th scope='col'>วันที่อบรม</th>"+
						"<th scope='col'>วันที่หมดอายุ</th>"+
					  "</tr>"+
					"</thead>"
		  for (let i = 0; i < dataArray.length; i++) {
			result += "<tr>"
			for (let j = 0; j < dataArray[i].length-1; j++) {
			  result += "<td class=\"table table-striped table-hover\">"+dataArray[i][j]+"</td>"
			}
			result += "</tr>"
		  }
		result += "</table>"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'พบใบวุฒิบัตร <b>หลักสูตรผู้สัมผัสอาหาร</b><br />ของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b><br /><br />'+result+'',
		  icon: 'success',
		  confirmButtonText:'<i class="fa fa-thumbs-o-up"></i>&nbsp; ปิดหน้าต่าง',
		})
		$(document).ready(function () {
		  pdfMake.fonts = {
			Roboto: {
			  normal: 'Roboto-Regular.ttf',
			  bold: 'Roboto-Medium.ttf',
			  italics: 'Roboto-Italic.ttf',
			  bolditalics: 'Roboto-MediumItalic.ttf'
			}
		  }
		  $('#dtable').DataTable({
			data: dataArray,                  
			dom:'Bfrtip',
			responsive:true,
			language: {
			  url: "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Thai.json",
			},
			columns: [
			  {"title":"รหัสผู้ใช้งาน"},
			  {"title":"ชื่อ"},
			  {"title":"สกุล"},
			  {"title":"ใบวุฒิบัตรรับรอง","render":function (data,type,row,meta)
				{
				  if (type === 'display') {
					data = '<a href="'+ data +'" target="_blank"><center><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; PDF</center></a>';
				  }
				  return data
				}
			  },
			  {"title":"วันที่อบรม"},
			  {"title":"วันที่หมดอายุ"},
			  {"title":" "},
			],
			columnDefs: [
			  {
				targets: [0,6],
				visible: false,
			  },
			],
		  })
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	  else {
		alertInfo.style.display = "inline"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'ไม่พบใบวุฒิบัตรของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b>',
		  icon: 'error',
		  confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	}
	
	function createTable(dataArray) {
	  document.getElementById('search-results').innerHTML = ""
	  let alertInfo = document.getElementById("alert")
	  let textInfo = document.getElementById("searchText")
	  if (dataArray && dataArray !== undefined && dataArray.length != 0) {
		alertInfo.style.display = "inline"
		let result = "<table class='table table-sm table-striped table-hover' id='dtable'>"+
					  "<thead style='white-space: nowrap'>"+
						"<tr>"+
						"<th scope='col'>รหัสผู้ใช้งาน</th>"+
						"<th scope='col'>ชื่อ</th>"+
						"<th scope='col'>สกุล</th>"+
						"<th scope='col'>ใบวุฒิบัตรรับรอง</th>"+
						"<th scope='col'>วันที่อบรม</th>"+
						"<th scope='col'>วันที่หมดอายุ</th>"+
					  "</tr>"+
					"</thead>"
		  for (let i = 0; i < dataArray.length; i++) {
			result += "<tr>"
			for (let j = 0; j < dataArray[i].length-1; j++) {
			  result += "<td class=\"table table-striped table-hover\">"+dataArray[i][j]+"</td>"
			}
			result += "</tr>"
		  }
		result += "</table>"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'พบใบวุฒิบัตร <b>หลักสูตรผู้สัมผัสอาหาร</b><br />ของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b><br /><br />'+result+'',
		  icon: 'success',
		  confirmButtonText:'<i class="fa fa-thumbs-o-up"></i>&nbsp; ปิดหน้าต่าง',
		})
		$(document).ready(function () {
		  pdfMake.fonts = {
			Roboto: {
			  normal: 'Roboto-Regular.ttf',
			  bold: 'Roboto-Medium.ttf',
			  italics: 'Roboto-Italic.ttf',
			  bolditalics: 'Roboto-MediumItalic.ttf'
			}
		  }
		  $('#dtable').DataTable({
			data: dataArray,                  
			dom:'Bfrtip',
			responsive:true,
			searching:false,
			language: {
			  url: "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Thai.json",
			},
			columns: [
			  {"title":"รหัสผู้ใช้งาน"},
			  {"title":"ชื่อ"},
			  {"title":"สกุล"},
			  {"title":"ใบวุฒิบัตรรับรอง","render":function (data,type,row,meta)
				{
				  if (type === 'display') {
					data = '<a href="'+ data +'" target="_blank"><center><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; PDF</center></a>'
				  }
				  return data
				}
			  },
			  {"title":"วันที่อบรม"},
			  {"title":"วันที่หมดอายุ"},
			  {"title":" "},
			],
			columnDefs: [
			  {
				targets: [0,6],
				visible: false,
			  },
			],
		  })
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	  else {
		alertInfo.style.display = "inline"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'ไม่พบใบวุฒิบัตรของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b>',
		  icon: 'error',
		  confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	}
	
	function createTableIndex(dataArray) {
	  document.getElementById('search-resultsForm').innerHTML = ""
	  let alertInfo = document.getElementById("alertSearchTextForm")
	  let textInfo = document.getElementById("searchTextForm")
	  if (dataArray && dataArray !== undefined && dataArray.length != 0) {
		alertInfo.style.display = "inline"
		let result = "<table class='table table-sm table-striped table-hover' id='dtables'>"+
					  "<thead style='white-space: nowrap'>"+
						"<tr>"+
						"<th scope='col'>รหัสผู้ใช้งาน</th>"+
						"<th scope='col'>ชื่อ</th>"+
						"<th scope='col'>สกุล</th>"+
						"<th scope='col'>ใบวุฒิบัตรรับรอง</th>"+
						"<th scope='col'>วันที่อบรม</th>"+
						"<th scope='col'>วันที่หมดอายุ</th>"+
					  "</tr>"+
					"</thead>"
		  for (let i = 0; i < dataArray.length; i++) {
			result += "<tr>"
			for (let j = 0; j < dataArray[i].length-1; j++) {
			  result += "<td class=\"table table-striped table-hover\">"+dataArray[i][j]+"</td>"
			}
			result += "</tr>"
		  }
		result += "</table>"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'พบใบวุฒิบัตร <b>หลักสูตรผู้สัมผัสอาหาร</b><br />ของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b><br /><br />'+result+'',
		  icon: 'success',
		  confirmButtonText:'<i class="fa fa-thumbs-o-up"></i>&nbsp; ปิดหน้าต่าง',
		})
		$(document).ready(function () {
		  pdfMake.fonts = {
			Roboto: {
			  normal: 'Roboto-Regular.ttf',
			  bold: 'Roboto-Medium.ttf',
			  italics: 'Roboto-Italic.ttf',
			  bolditalics: 'Roboto-MediumItalic.ttf'
			}
		  }
		  $('#dtables').DataTable({
			data: dataArray,                  
			dom:'Bfrtip',
			responsive:true,
			searching:false,
			language: {
			  url: "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Thai.json",
			},
			columns: [
			  {"title":"รหัสผู้ใช้งาน"},
			  {"title":"ชื่อ"},
			  {"title":"สกุล"},
			  {"title":"ใบวุฒิบัตรรับรอง","render":function (data,type,row,meta)
				{
				  if (type === 'display') {
					data = '<a href="'+ data +'" target="_blank"><center><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; PDF</center></a>'
				  }
				  return data
				}
			  },
			  {"title":"วันที่อบรม"},
			  {"title":"วันที่หมดอายุ"},
			  {"title":" "},
			],
			columnDefs: [
			  {
				targets: [0,6],
				visible: false,
			  },
			],
		  })
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	  else {
		alertInfo.style.display = "inline"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'ไม่พบใบวุฒิบัตรของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b>',
		  icon: 'error',
		  confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	}
	
	function getProvince(obj) {
	  let id = obj.value
	  if (id == '') {
		$("#dis").empty()
		$("#dis").append('<option value="">เลือกอำเภอ</option>')
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else {
		let data = onPro(id)
		$("#dis").empty()
		$("#dis").append('<option value="">เลือกอำเภอ</option>')
		$.each(data, function (i) {
		  $("#dis").append('<option value='+data[i].district+'>'+data[i].district+'</option>')
		  $("#subdis").empty()
		  $("#subdis").append('<option value="">เลือกตำบล</option>')
		  $("#govapp").empty()
		  $("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		})
	  }
	}

	function getProvinceIndex(obj) {
	  let id = obj.value
	  if (id == '') {
		$("#disIndex").empty()
		$("#disIndex").append('<option value="">เลือกอำเภอ</option>')
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else {
		let data = onPro(id)
		$("#disIndex").empty()
		$("#disIndex").append('<option value="">เลือกอำเภอ</option>')
		$.each(data, function (i) {
		  $("#disIndex").append('<option value='+data[i].district+'>'+data[i].district+'</option>')
		  $("#subdisIndex").empty()
		  $("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		  $("#govappIndex").empty()
		  $("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		})
	  }
	}
	
	function getDistrict(obj) {
	  let pro = document.getElementById('pro').value
	  let id = obj.value
	  if (id == '') {
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else if (pro == 'บุรีรัมย์') {
		let dataDisBr = onDisBr(id)
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisBr, function (i) {
		  $("#subdis").append('<option value='+dataDisBr[i].subdistrict+'>'+dataDisBr[i].subdistrict+'</option>')
		})
		let dataOrgBr = onOrgBr(id)
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgBr, function (i) {
		  $("#govapp").append('<option value='+dataOrgBr[i].abtname+'>'+dataOrgBr[i].abtname+'</option>')
		})
	  }
	  else if (pro == 'ยโสธร') {
		let dataDisYs = onDisYs(id)
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisYs, function (i) {
		  $("#subdis").append('<option value='+dataDisYs[i].subdistrict+'>'+dataDisYs[i].subdistrict+'</option>')
		})
		let dataOrgYs = onOrgYs(id)
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgYs, function (i) {
		  $("#govapp").append('<option value='+dataOrgYs[i].abtname+'>'+dataOrgYs[i].abtname+'</option>')
		})
	  }
	}

	function getDistrictIndex(obj) {
	  let pro = document.getElementById('proIndex').value
	  let id = obj.value
	  if (id == '') {
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else if (pro == 'บุรีรัมย์') {
		let dataDisBr = onDisBr(id)
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisBr, function (i) {
		  $("#subdisIndex").append('<option value='+dataDisBr[i].subdistrict+'>'+dataDisBr[i].subdistrict+'</option>')
		})
		let dataOrgBr = onOrgBr(id)
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgBr, function (i) {
		  $("#govappIndex").append('<option value='+dataOrgBr[i].abtname+'>'+dataOrgBr[i].abtname+'</option>')
		})
	  }
	  else if (pro == 'ยโสธร') {
		let dataDisYs = onDisYs(id)
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisYs, function (i) {
		  $("#subdisIndex").append('<option value='+dataDisYs[i].subdistrict+'>'+dataDisYs[i].subdistrict+'</option>')
		})
		let dataOrgYs = onOrgYs(id)
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgYs, function (i) {
		  $("#govappIndex").append('<option value='+dataOrgYs[i].abtname+'>'+dataOrgYs[i].abtname+'</option>')
		})
	  }
	}
	
	function onPro(id) {
	  let ar = []
	  if (id == 'บุรีรัมย์') {
		ar = [
		  {
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ยโสธร') {
		ar = [
		  {
			"district": "ไทยเจริญ",
			"province": "ยโสธร"
		  }
		]
	  }
	  return ar
	}
	
	function onDisBr(id) {
	  let ar = []
	  if (id == 'กระสัง') {
		ar = [
		  {
		  "0": "310301",
		  "1": "กระสัง",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310301",
		  "subdistrict": "กระสัง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310302",
		  "1": "ลำดวน",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310302",
		  "subdistrict": "ลำดวน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310303",
		  "1": "สองชั้น",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310303",
		  "subdistrict": "สองชั้น",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310304",
		  "1": "สูงเนิน",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310304",
		  "subdistrict": "สูงเนิน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310305",
		  "1": "หนองเต็ง",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310305",
		  "subdistrict": "หนองเต็ง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310306",
		  "1": "เมืองไผ่",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310306",
		  "subdistrict": "เมืองไผ่",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310307",
		  "1": "ชุมแสง",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310307",
		  "subdistrict": "ชุมแสง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310308",
		  "1": "บ้านปรือ",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310308",
		  "subdistrict": "บ้านปรือ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310309",
		  "1": "ห้วยสำราญ",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310309",
		  "subdistrict": "ห้วยสำราญ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310310",
		  "1": "กันทรารมย์",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310310",
		  "subdistrict": "กันทรารมย์",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310311",
		  "1": "ศรีภูมิ",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310311",
		  "subdistrict": "ศรีภูมิ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'คูเมือง') {
		ar = [
		  {
		  "0": "310201",
		  "1": "คูเมือง",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310201",
		  "subdistrict": "คูเมือง",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310202",
		  "1": "ปะเคียบ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310202",
		  "subdistrict": "ปะเคียบ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310203",
		  "1": "บ้านแพ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310203",
		  "subdistrict": "บ้านแพ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310204",
		  "1": "พรสำราญ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310204",
		  "subdistrict": "พรสำราญ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310205",
		  "1": "หินเหล็กไฟ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310205",
		  "subdistrict": "หินเหล็กไฟ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310206",
		  "1": "ตูมใหญ่",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310206",
		  "subdistrict": "ตูมใหญ่",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310207",
		  "1": "หนองขมาร",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310207",
		  "subdistrict": "หนองขมาร",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ชำนิ') {
		ar = [
		  {
		  "0": "311801",
		  "1": "ชำนิ",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311801",
		  "subdistrict": "ชำนิ",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311802",
		  "1": "หนองปล่อง",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311802",
		  "subdistrict": "หนองปล่อง",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311803",
		  "1": "เมืองยาง",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311803",
		  "subdistrict": "เมืองยาง",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311804",
		  "1": "ช่อผกา",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311804",
		  "subdistrict": "ช่อผกา",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311805",
		  "1": "ละลวด",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311805",
		  "subdistrict": "ละลวด",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311806",
		  "1": "โคกสนวน",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311806",
		  "subdistrict": "โคกสนวน",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'นางรอง') {
		ar = [
		  {
		  "0": "310401",
		  "1": "นางรอง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310401",
		  "subdistrict": "นางรอง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310403",
		  "1": "สะเดา",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310403",
		  "subdistrict": "สะเดา",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310405",
		  "1": "ชุมแสง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310405",
		  "subdistrict": "ชุมแสง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310406",
		  "1": "หนองโบสถ์",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310406",
		  "subdistrict": "หนองโบสถ์",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310408",
		  "1": "หนองกง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310408",
		  "subdistrict": "หนองกง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310413",
		  "1": "ถนนหัก",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310413",
		  "subdistrict": "ถนนหัก",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310414",
		  "1": "หนองไทร",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310414",
		  "subdistrict": "หนองไทร",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310415",
		  "1": "ก้านเหลือง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310415",
		  "subdistrict": "ก้านเหลือง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310416",
		  "1": "บ้านสิงห์",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310416",
		  "subdistrict": "บ้านสิงห์",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310417",
		  "1": "ลำไทรโยง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310417",
		  "subdistrict": "ลำไทรโยง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310418",
		  "1": "ทรัพย์พระยา",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310418",
		  "subdistrict": "ทรัพย์พระยา",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310424",
		  "1": "หนองยายพิมพ์",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310424",
		  "subdistrict": "หนองยายพิมพ์",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310425",
		  "1": "หัวถนน",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310425",
		  "subdistrict": "หัวถนน",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310426",
		  "1": "ทุ่งแสงทอง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310426",
		  "subdistrict": "ทุ่งแสงทอง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310427",
		  "1": "หนองโสน",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310427",
		  "subdistrict": "หนองโสน",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'นาโพธิ์') {
		ar = [
		  {
		  "0": "311301",
		  "1": "นาโพธิ์",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311301",
		  "subdistrict": "นาโพธิ์",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311302",
		  "1": "บ้านคู",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311302",
		  "subdistrict": "บ้านคู",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311303",
		  "1": "บ้านดู่",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311303",
		  "subdistrict": "บ้านดู่",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311304",
		  "1": "ดอนกอก",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311304",
		  "subdistrict": "ดอนกอก",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311305",
		  "1": "ศรีสว่าง",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311305",
		  "subdistrict": "ศรีสว่าง",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'บ้านกรวด') {
		ar = [
		  {
		  "0": "310801",
		  "1": "บ้านกรวด",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310801",
		  "subdistrict": "บ้านกรวด",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310802",
		  "1": "โนนเจริญ",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310802",
		  "subdistrict": "โนนเจริญ",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310803",
		  "1": "หนองไม้งาม",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310803",
		  "subdistrict": "หนองไม้งาม",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310804",
		  "1": "ปราสาท",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310804",
		  "subdistrict": "ปราสาท",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310805",
		  "1": "สายตะกู",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310805",
		  "subdistrict": "สายตะกู",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310806",
		  "1": "หินลาด",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310806",
		  "subdistrict": "หินลาด",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310807",
		  "1": "บึงเจริญ",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310807",
		  "subdistrict": "บึงเจริญ",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310808",
		  "1": "จันทบเพชร",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310808",
		  "subdistrict": "จันทบเพชร",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310809",
		  "1": "เขาดินเหนือ",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310809",
		  "subdistrict": "เขาดินเหนือ",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'บ้านด่าน') {
		ar = [
		  {
		  "0": "312101",
		  "1": "บ้านด่าน",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312101",
		  "subdistrict": "บ้านด่าน",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312102",
		  "1": "ปราสาท",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312102",
		  "subdistrict": "ปราสาท",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312103",
		  "1": "วังเหนือ",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312103",
		  "subdistrict": "วังเหนือ",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312104",
		  "1": "โนนขวาง",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312104",
		  "subdistrict": "โนนขวาง",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'บ้านใหม่ไชยพจน์') {
		ar = [
		  {
		  "0": "311901",
		  "1": "หนองแวง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311901",
		  "subdistrict": "หนองแวง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311902",
		  "1": "ทองหลาง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311902",
		  "subdistrict": "ทองหลาง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311903",
		  "1": "แดงใหญ่",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311903",
		  "subdistrict": "แดงใหญ่",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311904",
		  "1": "กู่สวนแตง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311904",
		  "subdistrict": "กู่สวนแตง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311905",
		  "1": "หนองเยือง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311905",
		  "subdistrict": "หนองเยือง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ประโคนชัย') {
		ar = [
		  {
		  "0": "310701",
		  "1": "ประโคนชัย",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310701",
		  "subdistrict": "ประโคนชัย",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310702",
		  "1": "แสลงโทน",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310702",
		  "subdistrict": "แสลงโทน",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310703",
		  "1": "บ้านไทร",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310703",
		  "subdistrict": "บ้านไทร",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310705",
		  "1": "ละเวี้ย",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310705",
		  "subdistrict": "ละเวี้ย",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310706",
		  "1": "จรเข้มาก",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310706",
		  "subdistrict": "จรเข้มาก",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310707",
		  "1": "ปังกู",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310707",
		  "subdistrict": "ปังกู",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310708",
		  "1": "โคกย่าง",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310708",
		  "subdistrict": "โคกย่าง",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310710",
		  "1": "โคกม้า",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310710",
		  "subdistrict": "โคกม้า",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310713",
		  "1": "ไพศาล",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310713",
		  "subdistrict": "ไพศาล",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310714",
		  "1": "ตะโกตาพิ",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310714",
		  "subdistrict": "ตะโกตาพิ",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310715",
		  "1": "เขาคอก",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310715",
		  "subdistrict": "เขาคอก",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310716",
		  "1": "หนองบอน",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310716",
		  "subdistrict": "หนองบอน",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310718",
		  "1": "โคกมะขาม",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310718",
		  "subdistrict": "โคกมะขาม",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310719",
		  "1": "โคกตูม",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310719",
		  "subdistrict": "โคกตูม",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310720",
		  "1": "ประทัดบุ",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310720",
		  "subdistrict": "ประทัดบุ",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310721",
		  "1": "สี่เหลี่ยม",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310721",
		  "subdistrict": "สี่เหลี่ยม",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ปะคำ') {
		ar = [
		  {
		  "0": "311201",
		  "1": "ปะคำ",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311201",
		  "subdistrict": "ปะคำ",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311202",
		  "1": "ไทยเจริญ",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311202",
		  "subdistrict": "ไทยเจริญ",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311203",
		  "1": "หนองบัว",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311203",
		  "subdistrict": "หนองบัว",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311204",
		  "1": "โคกมะม่วง",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311204",
		  "subdistrict": "โคกมะม่วง",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311205",
		  "1": "หูทำนบ",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311205",
		  "subdistrict": "หูทำนบ",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'พลับพลาชัย') {
		ar = [
		  {
		  "0": "311501",
		  "1": "จันดุม",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311501",
		  "subdistrict": "จันดุม",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311502",
		  "1": "โคกขมิ้น",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311502",
		  "subdistrict": "โคกขมิ้น",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311503",
		  "1": "ป่าชัน",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311503",
		  "subdistrict": "ป่าชัน",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311504",
		  "1": "สะเดา",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311504",
		  "subdistrict": "สะเดา",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311505",
		  "1": "สำโรง",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311505",
		  "subdistrict": "สำโรง",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'พุทไธสง') {
		ar = [
		  {
		  "0": "310901",
		  "1": "พุทไธสง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310901",
		  "subdistrict": "พุทไธสง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310902",
		  "1": "มะเฟือง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310902",
		  "subdistrict": "มะเฟือง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310903",
		  "1": "บ้านจาน",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310903",
		  "subdistrict": "บ้านจาน",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310906",
		  "1": "บ้านเป้า",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310906",
		  "subdistrict": "บ้านเป้า",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310907",
		  "1": "บ้านแวง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310907",
		  "subdistrict": "บ้านแวง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310909",
		  "1": "บ้านยาง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310909",
		  "subdistrict": "บ้านยาง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310910",
		  "1": "หายโศก",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310910",
		  "subdistrict": "หายโศก",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ละหานทราย') {
		ar = [
		  {
		  "0": "310601",
		  "1": "ละหานทราย",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310601",
		  "subdistrict": "ละหานทราย",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310603",
		  "1": "ตาจง",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310603",
		  "subdistrict": "ตาจง",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310604",
		  "1": "สำโรงใหม่",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310604",
		  "subdistrict": "สำโรงใหม่",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310607",
		  "1": "หนองแวง",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310607",
		  "subdistrict": "หนองแวง",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310610",
		  "1": "หนองตะครอง",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310610",
		  "subdistrict": "หนองตะครอง",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310611",
		  "1": "โคกว่าน",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310611",
		  "subdistrict": "โคกว่าน",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ลำปลายมาศ') {
		ar = [
		  {
		  "0": "311001",
		  "1": "ลำปลายมาศ",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311001",
		  "subdistrict": "ลำปลายมาศ",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311002",
		  "1": "หนองคู",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311002",
		  "subdistrict": "หนองคู",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311003",
		  "1": "แสลงพัน",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311003",
		  "subdistrict": "แสลงพัน",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311004",
		  "1": "ทะเมนชัย",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311004",
		  "subdistrict": "ทะเมนชัย",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311005",
		  "1": "ตลาดโพธิ์",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311005",
		  "subdistrict": "ตลาดโพธิ์",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311006",
		  "1": "หนองกะทิง",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311006",
		  "subdistrict": "หนองกะทิง",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311007",
		  "1": "โคกกลาง",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311007",
		  "subdistrict": "โคกกลาง",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311008",
		  "1": "โคกสะอาด",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311008",
		  "subdistrict": "โคกสะอาด",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311009",
		  "1": "เมืองแฝก",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311009",
		  "subdistrict": "เมืองแฝก",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311010",
		  "1": "บ้านยาง",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311010",
		  "subdistrict": "บ้านยาง",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311011",
		  "1": "ผไทรินทร์",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311011",
		  "subdistrict": "ผไทรินทร์",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311012",
		  "1": "โคกล่าม",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311012",
		  "subdistrict": "โคกล่าม",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311013",
		  "1": "หินโคน",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311013",
		  "subdistrict": "หินโคน",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311014",
		  "1": "หนองบัวโคก",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311014",
		  "subdistrict": "หนองบัวโคก",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311015",
		  "1": "บุโพธิ์",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311015",
		  "subdistrict": "บุโพธิ์",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311016",
		  "1": "หนองโดน",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311016",
		  "subdistrict": "หนองโดน",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'สตึก') {
		ar = [
		  {
		  "0": "311101",
		  "1": "สตึก",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311101",
		  "subdistrict": "สตึก",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311102",
		  "1": "นิคม",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311102",
		  "subdistrict": "นิคม",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311103",
		  "1": "ทุ่งวัง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311103",
		  "subdistrict": "ทุ่งวัง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311104",
		  "1": "เมืองแก",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311104",
		  "subdistrict": "เมืองแก",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311105",
		  "1": "หนองใหญ่",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311105",
		  "subdistrict": "หนองใหญ่",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311106",
		  "1": "ร่อนทอง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311106",
		  "subdistrict": "ร่อนทอง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311109",
		  "1": "ดอนมนต์",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311109",
		  "subdistrict": "ดอนมนต์",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311110",
		  "1": "ชุมแสง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311110",
		  "subdistrict": "ชุมแสง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311111",
		  "1": "ท่าม่วง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311111",
		  "subdistrict": "ท่าม่วง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311112",
		  "1": "สะแก",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311112",
		  "subdistrict": "สะแก",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311114",
		  "1": "สนามชัย",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311114",
		  "subdistrict": "สนามชัย",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311115",
		  "1": "กระสัง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311115",
		  "subdistrict": "กระสัง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'หนองกี่') {
		ar = [
		  {
		  "0": "310501",
		  "1": "หนองกี่",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310501",
		  "subdistrict": "หนองกี่",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310502",
		  "1": "เย้ยปราสาท",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310502",
		  "subdistrict": "เย้ยปราสาท",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310503",
		  "1": "เมืองไผ่",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310503",
		  "subdistrict": "เมืองไผ่",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310504",
		  "1": "ดอนอะราง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310504",
		  "subdistrict": "ดอนอะราง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310505",
		  "1": "โคกสว่าง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310505",
		  "subdistrict": "โคกสว่าง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310506",
		  "1": "ทุ่งกระตาดพัฒนา",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310506",
		  "subdistrict": "ทุ่งกระตาดพัฒนา",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310507",
		  "1": "ทุ่งกระเต็น",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310507",
		  "subdistrict": "ทุ่งกระเต็น",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310508",
		  "1": "ท่าโพธิ์ชัย",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310508",
		  "subdistrict": "ท่าโพธิ์ชัย",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310509",
		  "1": "โคกสูง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310509",
		  "subdistrict": "โคกสูง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310510",
		  "1": "บุกระสัง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310510",
		  "subdistrict": "บุกระสัง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'หนองหงส์') {
		ar = [
		  {
		  "0": "311401",
		  "1": "สระแก้ว",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311401",
		  "subdistrict": "สระแก้ว",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311402",
		  "1": "ห้วยหิน",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311402",
		  "subdistrict": "ห้วยหิน",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311403",
		  "1": "ไทยสามัคคี",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311403",
		  "subdistrict": "ไทยสามัคคี",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311404",
		  "1": "หนองชัยศรี",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311404",
		  "subdistrict": "หนองชัยศรี",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311405",
		  "1": "เสาเดียว",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311405",
		  "subdistrict": "เสาเดียว",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311406",
		  "1": "เมืองฝ้าย",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311406",
		  "subdistrict": "เมืองฝ้าย",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311407",
		  "1": "สระทอง",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311407",
		  "subdistrict": "สระทอง",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ห้วยราช') {
		ar = [
		  {
		  "0": "311601",
		  "1": "ห้วยราช",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311601",
		  "subdistrict": "ห้วยราช",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311602",
		  "1": "สามแวง",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311602",
		  "subdistrict": "สามแวง",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311603",
		  "1": "ตาเสา",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311603",
		  "subdistrict": "ตาเสา",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311604",
		  "1": "บ้านตะโก",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311604",
		  "subdistrict": "บ้านตะโก",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311605",
		  "1": "สนวน",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311605",
		  "subdistrict": "สนวน",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311606",
		  "1": "โคกเหล็ก",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311606",
		  "subdistrict": "โคกเหล็ก",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311607",
		  "1": "เมืองโพธิ์",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311607",
		  "subdistrict": "เมืองโพธิ์",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311608",
		  "1": "ห้วยราชา",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311608",
		  "subdistrict": "ห้วยราชา",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'เฉลิมพระเกียรติ') {
		ar = [
		  {
		  "0": "312301",
		  "1": "เจริญสุข",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312301",
		  "subdistrict": "เจริญสุข",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312302",
		  "1": "ตาเป๊ก",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312302",
		  "subdistrict": "ตาเป๊ก",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312303",
		  "1": "อีสานเขต",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312303",
		  "subdistrict": "อีสานเขต",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312304",
		  "1": "ถาวร",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312304",
		  "subdistrict": "ถาวร",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312305",
		  "1": "ยายแย้มวัฒนา",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312305",
		  "subdistrict": "ยายแย้มวัฒนา",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'เมืองบุรีรัมย์') {
		ar = [
		  {
		  "0": "310101",
		  "1": "ในเมือง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310101",
		  "subdistrict": "ในเมือง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310102",
		  "1": "อิสาณ",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310102",
		  "subdistrict": "อิสาณ",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310103",
		  "1": "เสม็ด",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310103",
		  "subdistrict": "เสม็ด",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310104",
		  "1": "บ้านบัว",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310104",
		  "subdistrict": "บ้านบัว",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310105",
		  "1": "สะแกโพรง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310105",
		  "subdistrict": "สะแกโพรง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310106",
		  "1": "สวายจีก",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310106",
		  "subdistrict": "สวายจีก",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310108",
		  "1": "บ้านยาง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310108",
		  "subdistrict": "บ้านยาง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310112",
		  "1": "พระครู",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310112",
		  "subdistrict": "พระครู",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310113",
		  "1": "ถลุงเหล็ก",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310113",
		  "subdistrict": "ถลุงเหล็ก",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310114",
		  "1": "หนองตาด",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310114",
		  "subdistrict": "หนองตาด",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310117",
		  "1": "ลุมปุ๊ก",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310117",
		  "subdistrict": "ลุมปุ๊ก",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310118",
		  "1": "สองห้อง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310118",
		  "subdistrict": "สองห้อง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310119",
		  "1": "บัวทอง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310119",
		  "subdistrict": "บัวทอง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310120",
		  "1": "ชุมเห็ด",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310120",
		  "subdistrict": "ชุมเห็ด",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310122",
		  "1": "หลักเขต",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310122",
		  "subdistrict": "หลักเขต",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310125",
		  "1": "สะแกซำ",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310125",
		  "subdistrict": "สะแกซำ",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310126",
		  "1": "กลันทา",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310126",
		  "subdistrict": "กลันทา",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310127",
		  "1": "กระสัง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310127",
		  "subdistrict": "กระสัง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310128",
		  "1": "เมืองฝาง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310128",
		  "subdistrict": "เมืองฝาง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'แคนดง') {
		ar = [
		  {
		  "0": "312201",
		  "1": "แคนดง",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312201",
		  "subdistrict": "แคนดง",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312202",
		  "1": "ดงพลอง",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312202",
		  "subdistrict": "ดงพลอง",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312203",
		  "1": "สระบัว",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312203",
		  "subdistrict": "สระบัว",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312204",
		  "1": "หัวฝาย",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312204",
		  "subdistrict": "หัวฝาย",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  }
		  ]
		  }
		  if (id == 'โนนดินแดง') {
		  ar = [
		  {
		  "0": "312001",
		  "1": "โนนดินแดง",
		  "2": "โนนดินแดง",
		  "3": "บุรีรัมย์",
		  "code": "312001",
		  "subdistrict": "โนนดินแดง",
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312002",
		  "1": "ส้มป่อย",
		  "2": "โนนดินแดง",
		  "3": "บุรีรัมย์",
		  "code": "312002",
		  "subdistrict": "ส้มป่อย",
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312003",
		  "1": "ลำนางรอง",
		  "2": "โนนดินแดง",
		  "3": "บุรีรัมย์",
		  "code": "312003",
		  "subdistrict": "ลำนางรอง",
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'โนนสุวรรณ') {
		ar = [
		  {
		  "0": "311701",
		  "1": "โนนสุวรรณ",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311701",
		  "subdistrict": "โนนสุวรรณ",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311702",
		  "1": "ทุ่งจังหัน",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311702",
		  "subdistrict": "ทุ่งจังหัน",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311703",
		  "1": "โกรกแก้ว",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311703",
		  "subdistrict": "โกรกแก้ว",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311704",
		  "1": "ดงอีจาน",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311704",
		  "subdistrict": "ดงอีจาน",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  return ar
	}

	function onDisYs(id) {
	  let ar = []
	  if (id == 'ไทยเจริญ') {
		ar = [
		  {
			"subdistrict": "คำเตย",
			"district": "ไทยเจริญ",
			"province": "ยโสธร"
		  },
		]
	  }
	  return ar
	}
	
	function onOrgBr(id) {
	  let ar = []
	  if (id == 'กระสัง') {
		ar = [
		  {
		  "0": "3131",
		  "1": "06310305",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลกันทรารมย์",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3131",
		  "codeabt": "06310305",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลกันทรารมย์",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3153",
		  "1": "06310306",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลชุมแสง",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3153",
		  "codeabt": "06310306",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลชุมแสง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3187",
		  "1": "06310307",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลบ้านปรือ",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3187",
		  "codeabt": "06310307",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลบ้านปรือ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3221",
		  "1": "06310309",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลลำดวน",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3221",
		  "codeabt": "06310309",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลลำดวน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3226",
		  "1": "06310312",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลศรีภูมิ",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3226",
		  "codeabt": "06310312",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลศรีภูมิ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3243",
		  "1": "06310310",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลสูงเนิน",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3243",
		  "codeabt": "06310310",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลสูงเนิน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3264",
		  "1": "06310311",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลห้วยสำราญ",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3264",
		  "codeabt": "06310311",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลห้วยสำราญ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3210",
		  "1": "06310308",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลเมืองไผ่",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3210",
		  "codeabt": "06310308",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลเมืองไผ่",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3068",
		  "1": "05310301",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลกระสัง",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3068",
		  "codeabt": "05310301",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลกระสัง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3109",
		  "1": "05310302",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลสองชั้น",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3109",
		  "codeabt": "05310302",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลสองชั้น",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3117",
		  "1": "05310303",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลหนองเต็ง",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3117",
		  "codeabt": "05310303",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลหนองเต็ง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3127",
		  "1": "05310304",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลอุดมธรรม",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3127",
		  "codeabt": "05310304",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลอุดมธรรม",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  }
		  ]
	  }
	  if (id == 'คูเมือง') {
		ar = [
		{
		"0": "3135",
		"1": "06310203",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลคูเมือง",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3135",
		"codeabt": "06310203",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลคูเมือง",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3161",
		"1": "06310204",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตูมใหญ่",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3161",
		"codeabt": "06310204",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตูมใหญ่",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3189",
		"1": "06310205",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านแพ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3189",
		"codeabt": "06310205",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านแพ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3199",
		"1": "06310206",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลปะเคียบ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3199",
		"codeabt": "06310206",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลปะเคียบ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3203",
		"1": "06310207",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลพรสำราญ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3203",
		"codeabt": "06310207",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลพรสำราญ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3249",
		"1": "06310208",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองขมาร",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3249",
		"codeabt": "06310208",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองขมาร",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3270",
		"1": "06310209",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหินเหล็กไฟ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3270",
		"codeabt": "06310209",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหินเหล็กไฟ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3071",
		"1": "05310201",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลคูเมือง",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3071",
		"codeabt": "05310201",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลคูเมือง",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3125",
		"1": "05310202",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหินเหล็กไฟ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3125",
		"codeabt": "05310202",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหินเหล็กไฟ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ชำนิ') {
		ar = [
		{
		"0": "3150",
		"1": "06311803",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลช่อผกา",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3150",
		"codeabt": "06311803",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลช่อผกา",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3218",
		"1": "06311806",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลละลวด",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3218",
		"codeabt": "06311806",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลละลวด",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3215",
		"1": "06311804",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองยาง",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3215",
		"codeabt": "06311804",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองยาง",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3144",
		"1": "06311805",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสนวน",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3144",
		"codeabt": "06311805",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสนวน",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3078",
		"1": "05311801",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลชำนิ",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3078",
		"codeabt": "05311801",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลชำนิ",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3118",
		"1": "05311802",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองปล่อง",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3118",
		"codeabt": "05311802",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองปล่อง",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'นางรอง') {
		ar = [
		{
		"0": "3132",
		"1": "06310406",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลก้านเหลือง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3132",
		"codeabt": "06310406",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลก้านเหลือง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3152",
		"1": "06310407",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลชุมแสง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3152",
		"codeabt": "06310407",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลชุมแสง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3162",
		"1": "06310403",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลถนนหัก",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3162",
		"codeabt": "06310403",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลถนนหัก",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3164",
		"1": "06310408",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทรัพย์พระยา",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3164",
		"codeabt": "06310408",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทรัพย์พระยา",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3175",
		"1": "06310404",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลนางรอง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3175",
		"codeabt": "06310404",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลนางรอง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3194",
		"1": "06310409",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านสิงห์",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3194",
		"codeabt": "06310409",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านสิงห์",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3222",
		"1": "06310410",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลลำไทรโยง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3222",
		"codeabt": "06310410",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลลำไทรโยง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3239",
		"1": "06310405",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะเดา",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3239",
		"codeabt": "06310405",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะเดา",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3247",
		"1": "06310411",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองกง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3247",
		"codeabt": "06310411",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองกง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3258",
		"1": "06310414",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองยายพิมพ์",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3258",
		"codeabt": "06310414",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองยายพิมพ์",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3257",
		"1": "06310413",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองโบสถ์",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3257",
		"codeabt": "06310413",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองโบสถ์",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3261",
		"1": "06310415",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองโสน",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3261",
		"codeabt": "06310415",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองโสน",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3253",
		"1": "06310412",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองไทร",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3253",
		"codeabt": "06310412",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองไทร",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3265",
		"1": "06310416",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหัวถนน",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3265",
		"codeabt": "06310416",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหัวถนน",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3085",
		"1": "05310402",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลทุ่งแสงทอง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3085",
		"codeabt": "05310402",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลทุ่งแสงทอง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3066",
		"1": "04310401",
		"2": "เทศบาลเมือง",
		"3": "เทศบาลเมืองนางรอง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3066",
		"codeabt": "04310401",
		"orgtype": "เทศบาลเมือง",
		"abtname": "เทศบาลเมืองนางรอง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'นาโพธิ์') {
		ar = [
		{
		"0": "3156",
		"1": "06311302",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลดอนกอก",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3156",
		"codeabt": "06311302",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลดอนกอก",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3176",
		"1": "06311303",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลนาโพธิ์",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3176",
		"codeabt": "06311303",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลนาโพธิ์",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3182",
		"1": "06311304",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านคู",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3182",
		"codeabt": "06311304",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านคู",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3184",
		"1": "06311305",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านดู่",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3184",
		"codeabt": "06311305",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านดู่",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3227",
		"1": "06311306",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลศรีสว่าง",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3227",
		"codeabt": "06311306",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลศรีสว่าง",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3086",
		"1": "05311301",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลนาโพธิ์",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3086",
		"codeabt": "05311301",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลนาโพธิ์",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'บ้านกรวด') {
		ar = [
		{
		"0": "3240",
		"1": "06310809",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสายตะกู",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3240",
		"codeabt": "06310809",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสายตะกู",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3269",
		"1": "06310811",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหินลาด",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3269",
		"codeabt": "06310811",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหินลาด",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3134",
		"1": "06310810",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเขาดินเหนือ",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3134",
		"codeabt": "06310810",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเขาดินเหนือ",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3077",
		"1": "05310803",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลจันทบเพชร",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3077",
		"codeabt": "05310803",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลจันทบเพชร",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3081",
		"1": "05310801",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลตลาดนิคมปราสาท",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3081",
		"codeabt": "05310801",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลตลาดนิคมปราสาท",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3095",
		"1": "05310807",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบึงเจริญ",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3095",
		"codeabt": "05310807",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบึงเจริญ",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3090",
		"1": "05310802",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านกรวด",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3090",
		"codeabt": "05310802",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านกรวด",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3091",
		"1": "05310805",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านกรวดปัญญาวัฒน์",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3091",
		"codeabt": "05310805",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านกรวดปัญญาวัฒน์",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3097",
		"1": "05310808",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลปราสาท",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3097",
		"codeabt": "05310808",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลปราสาท",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3119",
		"1": "05310804",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองไม้งาม",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3119",
		"codeabt": "05310804",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองไม้งาม",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3087",
		"1": "05310806",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโนนเจริญ",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3087",
		"codeabt": "05310806",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโนนเจริญ",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'บ้านด่าน') {
		ar = [
		{
		"0": "3225",
		"1": "06312104",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลวังเหนือ",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3225",
		"codeabt": "06312104",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลวังเหนือ",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3178",
		"1": "06312103",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโนนขวาง",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3178",
		"codeabt": "06312103",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโนนขวาง",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3092",
		"1": "05312101",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านด่าน",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3092",
		"codeabt": "05312101",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านด่าน",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3098",
		"1": "05312102",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลปราสาท",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3098",
		"codeabt": "05312102",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลปราสาท",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'บ้านใหม่ไชยพจน์') {
		ar = [
		{
		"0": "3133",
		"1": "06311902",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกู่สวนแตง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3133",
		"codeabt": "06311902",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกู่สวนแตง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3165",
		"1": "06311904",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทองหลาง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3165",
		"codeabt": "06311904",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทองหลาง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3259",
		"1": "06311905",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองเยือง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3259",
		"codeabt": "06311905",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองเยือง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3260",
		"1": "06311906",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองแวง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3260",
		"codeabt": "06311906",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองแวง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3157",
		"1": "06311903",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลแดงใหญ่",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3157",
		"codeabt": "06311903",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลแดงใหญ่",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3094",
		"1": "05311901",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านใหม่ไชยพจน์",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3094",
		"codeabt": "05311901",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านใหม่ไชยพจน์",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ประโคนชัย') {
		ar = [
		{
		"0": "3148",
		"1": "06310706",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลจรเข้มาก",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3148",
		"codeabt": "06310706",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลจรเข้มาก",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3159",
		"1": "06310715",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตะโกตาพิ",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3159",
		"codeabt": "06310715",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตะโกตาพิ",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3186",
		"1": "06310707",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านไทร",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3186",
		"codeabt": "06310707",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านไทร",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3198",
		"1": "06310716",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลประทัดบุ",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3198",
		"codeabt": "06310716",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลประทัดบุ",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3197",
		"1": "06310704",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลประโคนชัย",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3197",
		"codeabt": "06310704",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลประโคนชัย",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3200",
		"1": "06310708",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลปังกู",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3200",
		"codeabt": "06310708",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลปังกู",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3219",
		"1": "06310710",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลละเวี้ย",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3219",
		"codeabt": "06310710",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลละเวี้ย",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3242",
		"1": "06310717",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสี่เหลี่ยม",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3242",
		"codeabt": "06310717",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสี่เหลี่ยม",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3254",
		"1": "06310711",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองบอน",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3254",
		"codeabt": "06310711",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองบอน",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3138",
		"1": "06310712",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกตูม",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3138",
		"codeabt": "06310712",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกตูม",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3139",
		"1": "06310713",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกมะขาม",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3139",
		"codeabt": "06310713",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกมะขาม",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3141",
		"1": "06310714",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกย่าง",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3141",
		"codeabt": "06310714",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกย่าง",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3206",
		"1": "06310709",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลไพศาล",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3206",
		"codeabt": "06310709",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลไพศาล",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3096",
		"1": "05310701",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลประโคนชัย",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3096",
		"codeabt": "05310701",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลประโคนชัย",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3070",
		"1": "05310705",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลเขาคอก",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3070",
		"codeabt": "05310705",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลเขาคอก",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3113",
		"1": "05310702",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลแสลงโทน",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3113",
		"codeabt": "05310702",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลแสลงโทน",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3074",
		"1": "05310703",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโคกม้า",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3074",
		"codeabt": "05310703",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโคกม้า",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ปะคำ') {
		ar = [
		{
		"0": "3255",
		"1": "06311205",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองบัว",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3255",
		"codeabt": "06311205",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองบัว",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3271",
		"1": "06311203",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหูทำนบ",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3271",
		"codeabt": "06311203",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหูทำนบ",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3140",
		"1": "06311202",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกมะม่วง",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3140",
		"codeabt": "06311202",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกมะม่วง",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3173",
		"1": "06311204",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลไทยเจริญ",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3173",
		"codeabt": "06311204",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลไทยเจริญ",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3099",
		"1": "05311201",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลปะคำ",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3099",
		"codeabt": "05311201",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลปะคำ",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'พลับพลาชัย') {
		ar = [
		{
		"0": "3201",
		"1": "06311505",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลป่าชัน",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3201",
		"codeabt": "06311505",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลป่าชัน",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3238",
		"1": "06311506",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะเดา",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3238",
		"codeabt": "06311506",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะเดา",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3241",
		"1": "06311504",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสำโรง",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3241",
		"codeabt": "06311504",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสำโรง",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3076",
		"1": "05311502",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลจันดุม",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3076",
		"codeabt": "05311502",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลจันดุม",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3101",
		"1": "05311501",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลพลับพลาชัย",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3101",
		"codeabt": "05311501",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลพลับพลาชัย",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3073",
		"1": "05311503",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโคกขมิ้น",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3073",
		"codeabt": "05311503",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโคกขมิ้น",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'พุทไธสง') {
		ar = [
		{
		"0": "3183",
		"1": "06310903",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านจาน",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3183",
		"codeabt": "06310903",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านจาน",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3192",
		"1": "06310904",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านยาง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3192",
		"codeabt": "06310904",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านยาง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3188",
		"1": "06310905",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านเป้า",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3188",
		"codeabt": "06310905",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านเป้า",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3193",
		"1": "06310906",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านแวง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3193",
		"codeabt": "06310906",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านแวง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3205",
		"1": "06310902",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลพุทไธสง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3205",
		"codeabt": "06310902",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลพุทไธสง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3207",
		"1": "06310908",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลมะเฟือง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3207",
		"codeabt": "06310908",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลมะเฟือง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3267",
		"1": "06310907",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหายโศก",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3267",
		"codeabt": "06310907",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหายโศก",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3102",
		"1": "05310901",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลพุทไธสง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3102",
		"codeabt": "05310901",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลพุทไธสง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ละหานทราย') {
		ar = [
		{
		"0": "3220",
		"1": "06310606",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลละหานทราย",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3220",
		"codeabt": "06310606",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลละหานทราย",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3143",
		"1": "06310607",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกว่าน",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3143",
		"codeabt": "06310607",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกว่าน",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3082",
		"1": "05310601",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลตาจง",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3082",
		"codeabt": "05310601",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลตาจง",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3104",
		"1": "05310602",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลละหานทราย",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3104",
		"codeabt": "05310602",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลละหานทราย",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3112",
		"1": "05310603",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสำโรงใหม่",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3112",
		"codeabt": "05310603",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสำโรงใหม่",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3115",
		"1": "05310605",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองตะครอง",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3115",
		"codeabt": "05310605",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองตะครอง",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3120",
		"1": "05310604",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองแวง",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3120",
		"codeabt": "05310604",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองแวง",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ลำปลายมาศ') {
		ar = [
		{
		"0": "3158",
		"1": "06311007",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตลาดโพธิ์",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3158",
		"codeabt": "06311007",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตลาดโพธิ์",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3166",
		"1": "06311015",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทะเมนชัย",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3166",
		"codeabt": "06311015",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทะเมนชัย",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3196",
		"1": "06311016",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบุโพธิ์",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3196",
		"codeabt": "06311016",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบุโพธิ์",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3191",
		"1": "06311008",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านยาง",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3191",
		"codeabt": "06311008",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านยาง",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3202",
		"1": "06311009",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลผไทรินทร์",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3202",
		"codeabt": "06311009",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลผไทรินทร์",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3248",
		"1": "06311012",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองกะทิง",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3248",
		"codeabt": "06311012",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองกะทิง",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3250",
		"1": "06311003",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองคู",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3250",
		"codeabt": "06311003",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองคู",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3256",
		"1": "06311013",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองบัวโคก",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3256",
		"codeabt": "06311013",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองบัวโคก",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3252",
		"1": "06311017",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองโดน",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3252",
		"codeabt": "06311017",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองโดน",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3268",
		"1": "06311014",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหินโคน",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3268",
		"codeabt": "06311014",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหินโคน",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3213",
		"1": "06311010",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองแฝก",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3213",
		"codeabt": "06311010",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองแฝก",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3246",
		"1": "06311011",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลแสลงพัน",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3246",
		"codeabt": "06311011",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลแสลงพัน",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3137",
		"1": "06311004",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกกลาง",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3137",
		"codeabt": "06311004",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกกลาง",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3142",
		"1": "06311005",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกล่าม",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3142",
		"codeabt": "06311005",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกล่าม",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3146",
		"1": "06311006",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสะอาด",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3146",
		"codeabt": "06311006",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสะอาด",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3084",
		"1": "05311001",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลทะเมนชัย",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3084",
		"codeabt": "05311001",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลทะเมนชัย",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3105",
		"1": "05311002",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลลำปลายมาศ",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3105",
		"codeabt": "05311002",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลลำปลายมาศ",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'สตึก') {
		ar = [
		{
		"0": "3128",
		"1": "06311112",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกระสัง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3128",
		"codeabt": "06311112",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกระสัง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3151",
		"1": "06311104",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลชุมแสง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3151",
		"codeabt": "06311104",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลชุมแสง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3172",
		"1": "06311106",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งวัง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3172",
		"codeabt": "06311106",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งวัง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3168",
		"1": "06311105",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลท่าม่วง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3168",
		"codeabt": "06311105",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลท่าม่วง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3177",
		"1": "06311102",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลนิคม",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3177",
		"codeabt": "06311102",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลนิคม",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3217",
		"1": "06311108",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลร่อนทอง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3217",
		"codeabt": "06311108",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลร่อนทอง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3229",
		"1": "06311109",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสนามชัย",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3229",
		"codeabt": "06311109",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสนามชัย",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3262",
		"1": "06311111",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองใหญ่",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3262",
		"codeabt": "06311111",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองใหญ่",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3208",
		"1": "06311107",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองแก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3208",
		"codeabt": "06311107",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองแก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3079",
		"1": "05311113",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลดอนมนต์",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3079",
		"codeabt": "05311113",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลดอนมนต์",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3106",
		"1": "05311103",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลศรีสตึก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3106",
		"codeabt": "05311103",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลศรีสตึก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3108",
		"1": "05311101",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสตึก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3108",
		"codeabt": "05311101",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสตึก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3110",
		"1": "05311110",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสะแก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3110",
		"codeabt": "05311110",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสะแก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'หนองกี่') {
		ar = [
		{
		"0": "3169",
		"1": "06310511",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งกระตาดพัฒนา",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3169",
		"codeabt": "06310511",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งกระตาดพัฒนา",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3170",
		"1": "06310505",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งกระเต็น",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3170",
		"codeabt": "06310505",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งกระเต็น",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3167",
		"1": "06310504",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลท่าโพธิ์ชัย",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3167",
		"codeabt": "06310504",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลท่าโพธิ์ชัย",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3195",
		"1": "06310509",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบุกระสัง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3195",
		"codeabt": "06310509",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบุกระสัง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3209",
		"1": "06310506",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองไผ่",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3209",
		"codeabt": "06310506",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองไผ่",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3216",
		"1": "06310510",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเย้ยปราสาท",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3216",
		"codeabt": "06310510",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเย้ยปราสาท",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3145",
		"1": "06310507",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสว่าง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3145",
		"codeabt": "06310507",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสว่าง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3147",
		"1": "06310508",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสูง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3147",
		"codeabt": "06310508",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสูง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3080",
		"1": "05310502",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลดอนอะราง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3080",
		"codeabt": "05310502",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลดอนอะราง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3107",
		"1": "05310503",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลศาลเจ้าพ่อขุนศรี",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3107",
		"codeabt": "05310503",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลศาลเจ้าพ่อขุนศรี",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3114",
		"1": "05310501",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองกี่",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3114",
		"codeabt": "05310501",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองกี่",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'หนองหงส์') {
		ar = [
		{
		"0": "3232",
		"1": "06311406",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสระทอง",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3232",
		"codeabt": "06311406",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสระทอง",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3231",
		"1": "06311405",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสระแก้ว",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3231",
		"codeabt": "06311405",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสระแก้ว",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3251",
		"1": "06311408",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองชัยศรี",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3251",
		"codeabt": "06311408",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองชัยศรี",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3212",
		"1": "06311404",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองฝ้าย",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3212",
		"codeabt": "06311404",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองฝ้าย",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3245",
		"1": "06311407",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเสาเดียว",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3245",
		"codeabt": "06311407",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเสาเดียว",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3174",
		"1": "06311403",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลไทยสามัคคี",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3174",
		"codeabt": "06311403",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลไทยสามัคคี",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3121",
		"1": "05311401",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองหงส์",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3121",
		"codeabt": "05311401",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองหงส์",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3124",
		"1": "05311402",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลห้วยหิน",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3124",
		"codeabt": "05311402",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลห้วยหิน",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ห้วยราช') {
		ar = [
		{
		"0": "3160",
		"1": "06311606",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตาเสา",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3160",
		"codeabt": "06311606",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตาเสา",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3185",
		"1": "06311607",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านตะโก",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3185",
		"codeabt": "06311607",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านตะโก",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3228",
		"1": "06311603",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสนวน",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3228",
		"codeabt": "06311603",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสนวน",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3263",
		"1": "06311605",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลห้วยราช",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3263",
		"codeabt": "06311605",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลห้วยราช",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3214",
		"1": "06311608",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองโพธิ์",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3214",
		"codeabt": "06311608",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองโพธิ์",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3111",
		"1": "05311604",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสามแวง",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3111",
		"codeabt": "05311604",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสามแวง",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3123",
		"1": "05311601",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลห้วยราช",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3123",
		"codeabt": "05311601",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลห้วยราช",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3075",
		"1": "05311602",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโคกเหล็ก",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3075",
		"codeabt": "05311602",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโคกเหล็ก",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'เฉลิมพระเกียรติ') {
		ar = [
		{
		"0": "3272",
		"1": "06312305",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลอีสานเขต",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3272",
		"codeabt": "06312305",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลอีสานเขต",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3149",
		"1": "06312304",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเจริญสุข",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3149",
		"codeabt": "06312304",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเจริญสุข",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3083",
		"1": "05312303",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลถาวร",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3083",
		"codeabt": "05312303",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลถาวร",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3100",
		"1": "05312301",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลพนมรุ้ง",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3100",
		"codeabt": "05312301",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลพนมรุ้ง",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3103",
		"1": "05312302",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลยายแย้มวัฒนา",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3103",
		"codeabt": "05312302",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลยายแย้มวัฒนา",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'เมืองบุรีรัมย์') {
		ar = [
		{
		"0": "3064",
		"1": "02310101",
		"2": "องค์การบริหารส่วนจังหวัด",
		"3": "องค์การบริหารส่วนจังหวัดบุรีรัมย์",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3064",
		"codeabt": "02310101",
		"orgtype": "องค์การบริหารส่วนจังหวัด",
		"abtname": "องค์การบริหารส่วนจังหวัดบุรีรัมย์",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3129",
		"1": "06310105",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกระสัง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3129",
		"codeabt": "06310105",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกระสัง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3130",
		"1": "06310117",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกลันทา",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3130",
		"codeabt": "06310117",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกลันทา",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3163",
		"1": "06310118",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลถลุงเหล็ก",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3163",
		"codeabt": "06310118",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลถลุงเหล็ก",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3181",
		"1": "06310119",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบัวทอง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3181",
		"codeabt": "06310119",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบัวทอง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3190",
		"1": "06310106",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านยาง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3190",
		"codeabt": "06310106",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านยาง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3204",
		"1": "06310109",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลพระครู",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3204",
		"codeabt": "06310109",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลพระครู",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3224",
		"1": "06310110",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลลุมปุ๊ก",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3224",
		"codeabt": "06310110",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลลุมปุ๊ก",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3234",
		"1": "06310111",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสวายจีก",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3234",
		"codeabt": "06310111",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสวายจีก",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3235",
		"1": "06310112",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสองห้อง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3235",
		"codeabt": "06310112",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสองห้อง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3236",
		"1": "06310113",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะแกซำ",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3236",
		"codeabt": "06310113",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะแกซำ",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3237",
		"1": "06310114",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะแกโพรง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3237",
		"codeabt": "06310114",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะแกโพรง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3211",
		"1": "06310120",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองฝาง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3211",
		"codeabt": "06310120",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองฝาง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3244",
		"1": "06310115",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเสม็ด",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3244",
		"codeabt": "06310115",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเสม็ด",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3093",
		"1": "05310108",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านบัว",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3093",
		"codeabt": "05310108",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านบัว",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3116",
		"1": "05310116",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองตาด",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3116",
		"codeabt": "05310116",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองตาด",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3122",
		"1": "05310104",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหลักเขต",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3122",
		"codeabt": "05310104",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหลักเขต",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3126",
		"1": "05310103",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลอิสาณ",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3126",
		"codeabt": "05310103",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลอิสาณ",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3065",
		"1": "04310107",
		"2": "เทศบาลเมือง",
		"3": "เทศบาลเมืองชุมเห็ด",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3065",
		"codeabt": "04310107",
		"orgtype": "เทศบาลเมือง",
		"abtname": "เทศบาลเมืองชุมเห็ด",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3067",
		"1": "04310102",
		"2": "เทศบาลเมือง",
		"3": "เทศบาลเมืองบุรีรัมย์",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3067",
		"codeabt": "04310102",
		"orgtype": "เทศบาลเมือง",
		"abtname": "เทศบาลเมืองบุรีรัมย์",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'แคนดง') {
		ar = [
		{
		"0": "3154",
		"1": "06312204",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลดงพลอง",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3154",
		"codeabt": "06312204",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลดงพลอง",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3233",
		"1": "06312203",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสระบัว",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3233",
		"codeabt": "06312203",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสระบัว",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3266",
		"1": "06312205",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหัวฝาย",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3266",
		"codeabt": "06312205",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหัวฝาย",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3136",
		"1": "06312202",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลแคนดง",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3136",
		"codeabt": "06312202",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลแคนดง",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3072",
		"1": "05312201",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลแคนดง",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3072",
		"codeabt": "05312201",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลแคนดง",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		}
		]
		}
		if (id == 'โนนดินแดง') {
		ar = [
		{
		"0": "3223",
		"1": "06312003",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลลำนางรอง",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3223",
		"codeabt": "06312003",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลลำนางรอง",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3230",
		"1": "06312004",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลส้มป่อย",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3230",
		"codeabt": "06312004",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลส้มป่อย",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3179",
		"1": "06312002",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโนนดินแดง",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3179",
		"codeabt": "06312002",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโนนดินแดง",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3088",
		"1": "05312001",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโนนดินแดง",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3088",
		"codeabt": "05312001",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโนนดินแดง",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'โนนสุวรรณ') {
		ar = [
		{
		"0": "3155",
		"1": "06311704",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลดงอีจาน",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3155",
		"codeabt": "06311704",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลดงอีจาน",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3171",
		"1": "06311705",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งจังหัน",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3171",
		"codeabt": "06311705",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งจังหัน",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3180",
		"1": "06311703",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโนนสุวรรณ",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3180",
		"codeabt": "06311703",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโนนสุวรรณ",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3069",
		"1": "05311702",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโกรกแก้ว",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3069",
		"codeabt": "05311702",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโกรกแก้ว",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3089",
		"1": "05311701",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโนนสุวรรณ",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3089",
		"codeabt": "05311701",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโนนสุวรรณ",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  return ar
	}

	function onOrgYs(id) {
	  let ar = []
	  if (id == 'ไทยเจริญ') {
		ar = [
		  {
			"abtname": "เทศบาลตำบลคำเตย",
			"district": "ไทยเจริญ",
			"province": "บุรีรัมย์"
		  },
		]
	  }
	  return ar
	}

	function sendMail() {
	  event.preventDefault()
	  Swal.fire({
		title: 'อีเมลสำหรับรับรหัสผ่าน',
		html: `<input type="email" id="send_eMail" class="swal2-input" placeholder="e-Mail">`,
		confirmButtonText: 'ยืนยัน',
		focusConfirm: false,
		showCancelButton: true,
		preConfirm: () => {
		  let eMail = Swal.getPopup().querySelector('#send_eMail').value
		  if (!eMail) {
			Swal.showValidationMessage(`กรุณาพิมพ์อีเมลที่ต้องการรับรหัสผ่าน`)
		  }
		  else {
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			document.getElementById('Email').value = eMail
			document.getElementById('sendMailBtn').click()
		  }
		},
	  })
	}

	const sendEmailForm = document.forms['sendMail']
		  sendEmailForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(sendEmailForm)})
			let data = await send.json()
			let output = data.output
			if (output == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'ส่งรหัสผ่านไปที่อีเมลของท่านแล้ว!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
			else {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'ไม่มีอีเมลนี้ในระบบ!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
	})