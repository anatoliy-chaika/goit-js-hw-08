!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("1WSnx");const a=document.querySelector(".feedback-form"),l="feedback-form-state",i={};a.addEventListener("input",o.throttle((function(e){e.preventDefault(),i.email=`${e.currentTarget.email.value}`,i.message=`${e.currentTarget.message.value}`,localStorage.setItem(l,JSON.stringify(i))}),1e3));const s=localStorage.getItem(l);if(null!==s){!function(){const e=JSON.parse(s);a.elements.email.value=e.email,a.elements.message.value=e.message}()}a.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(s)),localStorage.removeItem(l)}))}();
//# sourceMappingURL=03-feedback.2dfdce1b.js.map
