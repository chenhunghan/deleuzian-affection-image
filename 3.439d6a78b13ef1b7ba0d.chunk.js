webpackJsonp([3,5],{593:function(t,e,r){"use strict";function n(t){var e,n,o,s,a,u,d;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.payload.url,n=["67d5d558d039403e866e9785e8c797e9","4694d2c7a501454c969b788eb2c1e76c","54139682a5314e9f93568721518dc66e","995e9d0952634a80ba202148b4f89eae","51097b614a20407e8b491f50500f8ece","97159b56715d474988929f92df0dc196"],o=n[Math.floor(Math.random()*n.length)],s="https://api.projectoxford.ai/emotion/v1.0/recognize",a={method:"POST",headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":""+o},body:JSON.stringify({url:""+e})},c.next=7,r.i(i.call)(f.a,s,a);case 7:if(u=c.sent,u.err){c.next=14;break}return d=u.data.map(function(r){return r.imgURL=e,r.entity=t.payload.entity,r}),c.next=12,r.i(i.put)({type:h.c,payload:d});case 12:c.next=16;break;case 14:return c.next=16,r.i(i.put)({type:h.d,payload:u.err});case 16:case"end":return c.stop()}},c[0],this)}function o(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(r.i(a.takeEvery)(h.e,n),"t0",1);case 1:case"end":return t.stop()}},c[1],this)}var i=r(680),s=i&&i.__esModule?function(){return i["default"]}:function(){return i};r.d(s,"a",s);var a=r(253),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};r.d(u,"a",u);var f=r(633),h=r(597);e.entitiesListSage=o;var c=[n,o].map(regeneratorRuntime.mark);e["default"]=[o]},597:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o}),r.d(e,"e",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"d",function(){return a});var n="app/EntitiesList/DEFAULT_ACTION",o="app/EntitiesList/CHANGE_HIGHLIGHT_ENTITY",i="app/EntitiesList/GET_EMOTION_REQUESTED",s="app/EntitiesList/GET_EMOTION_SUCCEEDED",a="app/EntitiesList/GET_EMOTION_FAILED"},633:function(t,e,r){"use strict";(function(t){function r(t){return t.json()}function n(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}function o(e,o){return t(e,o).then(n).then(r).then(function(t){return{data:t}})["catch"](function(t){return{err:t}})}e.a=o}).call(e,r(652))},652:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return y.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader;return e.readAsArrayBuffer(t),s(e)}function u(t){var e=new FileReader;return e.readAsText(t),s(e)}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(y.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(y.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=i(this);return t?t:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}function c(t,e){e=e||{};var r=e.body;if(c.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function p(t){var e=new o,r=(t.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(t){var r=t.trim().split(":"),n=r.shift().trim(),o=r.join(":").trim();e.append(n,o)}),e}function l(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof o?e.headers:new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var y={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(n)},o.prototype["delete"]=function(t){delete this.map[e(t)]},o.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},o.prototype.getAll=function(t){return this.map[e(t)]||[]},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=[r(n)]},o.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];c.prototype.clone=function(){return new c(this)},f.call(c.prototype),f.call(l.prototype),l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},l.error=function(){var t=new l(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];l.redirect=function(t,e){if(m.indexOf(e)===-1)throw new RangeError("Invalid status code");return new l(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=c,t.Response=l,t.fetch=function(t,e){return new Promise(function(r,n){function o(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=c.prototype.isPrototypeOf(t)&&!e?t:new c(t,e);var s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:p(s),url:o()},e="response"in s?s.response:s.responseText;r(new l(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&y.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=self.fetch},680:function(t,e,r){t.exports=r(252)}});