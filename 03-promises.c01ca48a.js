!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire7bc7=o);var r=o("iU1Pc");o("h6c0i"),e(r).Notify.init({width:"320px",timeout:5e3});const l={form:document.querySelector(".form"),labels:document.querySelectorAll("label"),button:document.querySelector("button")};function u(e,t){const n=Math.random()>.3;return new Promise(((i,o)=>{setTimeout((()=>{n?i({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.form.setAttribute("style","display: flex; align-items: center; margin: 8px 0 0 -2px;"),l.labels.forEach((e=>{e.setAttribute("style","display: flex; flex-direction: column; justify-content: center; align-items: left; margin: 0 2px;")})),l.button.setAttribute("style","margin: 24px 0 0 2px;"),l.form.addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:n,step:i,amount:o}}=t.currentTarget,l=Number(n.value),s=Number(i.value),a=Number(o.value);if(l<0||s<0||a<=0)e(r).Notify.failure("Must be: delay>=0, step>=0, amount>0");else for(let t=0;t<a;t+=1)u(t+1,l+t*s).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}));t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.c01ca48a.js.map