/**
 * QuoJS - Micro #JavaScript Library for Mobile Devices.
 * @version v3.0.6
 * @link    http://quojs.tapquo.com
 * @author  Javi Jimenez Villar (@soyjavi) (https://twitter.com/soyjavi)
 * @license MIT
 */
(function(){"use strict";!function(t){var n,s;return n=["-webkit-","-moz-","-ms-","-o-",""],t.fn.addClass=function(t){return this.each(function(){var n,s,i,e,r;for(e=t.split(" "),r=[],s=0,i=e.length;i>s;s++)n=e[s],r.push(this.classList.add(n));return r})},t.fn.removeClass=function(t){return this.each(function(){var n,s,i,e,r;for(e=t.split(" "),r=[],s=0,i=e.length;i>s;s++)n=e[s],r.push(this.classList.remove(n));return r})},t.fn.toggleClass=function(t){return this.each(function(){var n,s,i,e,r;for(e=t.split(" "),r=[],s=0,i=e.length;i>s;s++)n=e[s],r.push(this.classList.toggle(n));return r})},t.fn.hasClass=function(t){return this.length>0&&this[0].classList.contains(t)},t.fn.listClass=function(){return this.length>0?this[0].classList:void 0},t.fn.style=t.fn.css=function(t,n){var i;return null!=n?this.each(function(){return this.style[t]=n}):(i=this[0],i.style[t]||s(i,t))},t.fn.vendor=function(t,s){var i,e,r,u;for(u=[],e=0,r=n.length;r>e;e++)i=n[e],u.push(this.style(""+i+t,s));return u},s=function(t,n){return document.defaultView.getComputedStyle(t,"")[n]}}(Quo)}).call(this);