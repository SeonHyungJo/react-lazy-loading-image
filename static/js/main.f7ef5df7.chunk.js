(this["webpackJsonpreact-lazy-image-hooks-example"]=this["webpackJsonpreact-lazy-image-hooks-example"]||[]).push([[0],{14:function(a,e,t){},15:function(a,e,t){"use strict";t.r(e);var r=t(0),s=t.n(r),c=t(1),n=t.n(c),o=(t(14),t(2)),m=t(3),l=t(5),u=t(4),d=t(6),p=function(){if("IntersectionObserver"in window){var a=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),a.unobserve(t)}}))}),{root:null,rootMargin:"0px 0px 0px 0px",threshold:.2});return a}var e=!1,t=[],r=function a(){!1===e&&(e=!0,setTimeout((function(){t.forEach((function(e){e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(console.log(e),e.src=e.dataset.src||"",e.srcset=e.dataset.srcset||"",e.classList.remove("lazy"),0===(t=t.filter((function(a){return a!==e}))).length&&(document.removeEventListener("scroll",a),window.removeEventListener("resize",a),window.removeEventListener("orientationchange",a)))})),e=!1}),200))};return document.addEventListener("scroll",r),window.addEventListener("resize",r),window.addEventListener("orientationchange",r),{observe:function(a){t.push(a)}}}();var h="styles_img__xC5Mi";!function(a,e){void 0===e&&(e={});var t=e.insertAt;if(a&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===t&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=a:s.appendChild(document.createTextNode(a))}}(".styles_img__xC5Mi {\n  background: #F1F1FA;\n  width: 400px;\n  height: 300px;\n  display: block;\n  margin: 10px auto;\n  border: 0;\n}\n");var E=function(a){var e=a.src,t=a.srcSet,c=a.dataSrc,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){null!==n&&!e&&p.observe(n.current)}),[n]),s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:e,"data-src":c,"data-srcset":t,ref:n,className:h}))},x=function(a){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E,{src:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{src:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{src:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}),s.a.createElement(E,{dataSrc:"https://source.unsplash.com/random/400x300"}))}}]),e}(r.Component);n.a.render(s.a.createElement(x,null),document.getElementById("root"))},7:function(a,e,t){a.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.f7ef5df7.chunk.js.map