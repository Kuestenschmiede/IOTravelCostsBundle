!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";n.d(t,"a",function(){return r});
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
var r={DUMMY_INPUT:"Enter postal code, city or street...",HEADLINE_DIST:"Distance",HEADLINE_TIME:"Time",HEADLINE_BASE_PRICE:"Base price",HEADLINE_DIST_PRICE:"Price / km",HEADLINE_TIME_PRICE:"Price / min",ERROR_OUT_OF_BOUNDS:"Address is out of bounds",ERROR_FALSE_ADDRESS:"Address not found",ERROR:"Error",START_SEARCH:"Start search",NONE:""}},,function(e,t,n){"use strict";n.d(t,"a",function(){return r});
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
var r={DUMMY_INPUT:"PLZ, Ort oder Straße eingeben...",HEADLINE_DIST:"Entfernung",HEADLINE_TIME:"Dauer",HEADLINE_BASE_PRICE:"Grundpreis",HEADLINE_DIST_PRICE:"Preis / km",HEADLINE_TIME_PRICE:"Preis / min",ERROR_OUT_OF_BOUNDS:"Adresse außerhalb des Tarifgebiets",ERROR_FALSE_ADDRESS:"Adresse nicht gefunden",ERROR:"Fehler",START_SEARCH:"Suche starten",NONE:""}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(2);const d={};$(document).ready(function(){let e=window.serviceLang||window.navigator.userLanguage||window.navigator.language;"en"===e?$.extend(d,r.a):"de"===e?$.extend(d,i.a):$.extend(d,r.a),function(){let e="con4gis/tariffService/"+window.settingId;$.ajax({url:e}).done(function(e){let t=$(".tariff-output");"1"===window.displayGrid?t.css("display","grid"):t.css("display","block");let n="row-even",r=$(".headline-dist-price");r.html(d.HEADLINE_DIST_PRICE);let i=$(".headline-time-price");i.html(d.HEADLINE_TIME_PRICE);let a=$(".headline-base-price");a.html(d.HEADLINE_BASE_PRICE);for(let r in e)if(e.hasOwnProperty(r))if("1"===window.displayGrid){let i=document.createElement("div");i.innerHTML=r,i.className="grid-item "+n,t.append(i);let d=document.createElement("div"),a=e[r].basePrice+"0000",o=(a=a.replace(".",",")).indexOf(",")+3;d.innerHTML=a.substring(0,o)+" €",d.className="grid-item "+n,t.append(d);let c=document.createElement("div");a=(a=e[r].distPrice+"0000").replace(".",","),o=a.indexOf(",")+3,c.innerHTML=a.substring(0,o)+" €",c.className="grid-item "+n,t.append(c);let s=document.createElement("div");a=(a=e[r].timePrice+"0000").replace(".",","),o=a.indexOf(",")+3,s.innerHTML=a.substring(0,o)+" €",s.className="grid-item "+n,t.append(s),n="row-even"===n?"row-uneven":"row-even"}else{let n=document.createElement("tr");n.innerHTML="<th>"+r+"</th><td>"+e[r].basePrice+"€</td><td>"+e[r].distPrice+"€</td><td>"+e[r].timePrice+"€</td>",t.append(n)}})}()})}]);