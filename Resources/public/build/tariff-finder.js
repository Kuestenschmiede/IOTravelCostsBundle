!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";r.d(t,"a",function(){return n});
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
var n={DUMMY_INPUT:"Enter postal code, city or street...",HEADLINE_DIST:"Distance",HEADLINE_TIME:"Time",HEADLINE_BASE_PRICE:"Base price",HEADLINE_DIST_PRICE:"Price / km",HEADLINE_TIME_PRICE:"Price / min",ERROR_OUT_OF_BOUNDS:"Address is out of bounds",ERROR_FALSE_ADDRESS:"Address not found",ERROR:"Error",START_SEARCH:"Start search",NONE:""}},function(e,t,r){"use strict";r.d(t,"a",function(){return n});
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
var n={DUMMY_INPUT:"PLZ, Ort oder Straße eingeben...",HEADLINE_DIST:"Entfernung",HEADLINE_TIME:"Dauer",HEADLINE_BASE_PRICE:"Grundpreis",HEADLINE_DIST_PRICE:"Preis / km",HEADLINE_TIME_PRICE:"Preis / min",ERROR_OUT_OF_BOUNDS:"Adresse außerhalb des Tarifgebiets",ERROR_FALSE_ADDRESS:"Adresse nicht gefunden",ERROR:"Fehler",START_SEARCH:"Suche starten",NONE:""}},,function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(1);const a={};$(document).ready(function(){let e=window.serviceLang||window.navigator.userLanguage||window.navigator.language;"en"===e?$.extend(a,n.a):"de"===e?$.extend(a,i.a):$.extend(a,n.a),function(){let e="con4gis/tariffService/"+window.settingId;$.ajax({url:e}).done(function(e){let t=$(".tariff-output");"1"===window.displayGrid?t.css("display","grid"):t.css("display","block");let r="row-even",n=$(".headline-dist-price");n.html(a.HEADLINE_DIST_PRICE);let i=$(".headline-time-price");i.html(a.HEADLINE_TIME_PRICE);let d=$(".headline-base-price");d.html(a.HEADLINE_BASE_PRICE);for(let n in e)if(e.hasOwnProperty(n))if("1"===window.displayGrid){let i=document.createElement("div");i.innerHTML=n,i.className="grid-item "+r,t.append(i);let d=document.createElement("div"),c=e[n].basePrice+"0000",o=(c=c.replace(".",",")).indexOf(",")+3;d.innerHTML=c.substring(0,o)+" €",d.className="grid-item "+r,t.append(d);let s="auto auto";if(e[n].distPrice.length>1){for(let i in e[n].distPrice)if(e[n].distPrice.hasOwnProperty(i)){let d=e[n].distPrice[i],l=a.HEADLINE_DIST_PRICE+"<br>"+d.name;if("0"===i){let e=$(".headline-dist-price");e.html(l)}else{let e=$(".headline-dist-price").last(),t=document.createElement("div");t.className="headline-dist-price grid-item",t.innerHTML=l,e.after(t)}let u=document.createElement("div");c=(c=d.kilometerPrice+"0000").replace(".",","),o=c.indexOf(",")+3,u.innerHTML=c.substring(0,o)+" €",u.className="grid-item "+r,t.append(u),s+=" auto"}}else{let i=document.createElement("div");c=(c=e[n].distPrice[0].kilometerPrice+"0000").replace(".",","),o=c.indexOf(",")+3,i.innerHTML=c.substring(0,o)+" €",i.className="grid-item "+r,t.append(i)}if(0!=e[n].timePrice){let i=document.createElement("div");c=(c=e[n].timePrice+"0000").replace(".",","),o=c.indexOf(",")+3,i.innerHTML=c.substring(0,o)+" €",i.className="grid-item "+r,t.append(i),r="row-even"===r?"row-uneven":"row-even",s+=" auto"}else $("*").remove(".headline-time-price");$(".tariff-output").css("grid-template-columns",s)}else{let r=document.createElement("tr");r.innerHTML="<th>"+n+"</th><td>"+e[n].basePrice+"€</td><td>"+e[n].distPrice+"€</td><td>"+e[n].timePrice+"€</td>",t.append(r)}})}()})}]);