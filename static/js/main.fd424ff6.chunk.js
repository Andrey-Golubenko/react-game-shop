(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(9),i=n.n(c),o=(n(15),n(0)),s=function(){return Object(o.jsx)("nav",{className:"purple darken-2",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)("a",{href:"https://andrey-golubenko.github.io/react-game-shop",className:"brand-logo",children:"React Shop"}),Object(o.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/Andrey-Golubenko/react-game-shop.git",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})},d=function(){return Object(o.jsx)("footer",{className:"page-footer purple darken-2",children:Object(o.jsx)("div",{className:"footer-copyright purple darken-2",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/Andrey-Golubenko/react-game-shop.git",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},l=function(){return Object(o.jsx)("div",{className:"progress purple accent-1",children:Object(o.jsx)("div",{className:"indeterminate purple darken-3"})})},u=n(2),j=n(3),b=n(4),O=n(6),h=n.n(O);var m,f,p,g=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,c=e.onLoad,i=void 0===c?function(){}:c,s=Object(r.useState)(!1),d=Object(b.a)(s,2),l=d[0],u=d[1],j=Object(r.useRef)(null),O=Object(r.useRef)(null),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(r.useState)(!1),a=Object(b.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(b.a)(e,1)[0];i(t.isIntersecting)}),{rootMargin:t});e.current&&n.observe(e.current);var r=e.current;return function(){n.unobserve(r)}}),[]),c}(O);Object(r.useEffect)((function(){m&&!l&&j.current&&(j.current.onload=function(){u(!0),i()})}),[m,i,l]);var f=[h.a.container];l&&f.push(h.a.containerLoaded);var p=[h.a.image];return l&&p.push(h.a.imageLoaded),Object(o.jsx)("div",{ref:O,className:f.join(" "),children:(m||l)&&Object(o.jsx)("img",{ref:j,className:p.join(" "),src:t,alt:a})})},v=function(e){var t=e.mainId,n=e.displayName,r=e.displayDescription,a=e.price,c=e.displayAssets[0],i=a.finalPrice,s=Object(j.b)().addOrderItem;return Object(o.jsxs)("div",{className:"card",id:t,children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)(g,{src:c.full_background})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:n}),Object(o.jsx)("p",{children:r})]}),Object(o.jsxs)("div",{className:"card-action",children:[Object(o.jsx)("button",{className:"btn",onClick:function(){return s({mainId:t,displayName:n,itemPrice:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(o.jsxs)("span",{className:"right",children:[i," $"]})]})]})},x=function(){var e=Object(j.b)().goods,t=void 0===e?[]:e;return t.length?Object(o.jsx)("div",{className:"goods",children:t.map((function(e){return Object(o.jsx)(v,Object(u.a)({},e),e.mainId)}))}):Object(o.jsx)("h3",{children:"Nothing find"})},y=["title","titleId"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e,t){var n=e.title,a=e.titleId,c=N(e,y);return r.createElement("svg",I({height:"414pt",viewBox:"0 -11 414.00053 414",width:"414pt",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,m||(m=r.createElement("path",{d:"m202.480469 352.128906c0-21.796875-17.671875-39.46875-39.46875-39.46875-21.800781 0-39.472657 17.667969-39.472657 39.46875 0 21.800782 17.671876 39.472656 39.472657 39.472656 21.785156-.023437 39.445312-17.683593 39.46875-39.472656zm0 0"})),f||(f=r.createElement("path",{d:"m348.445312 348.242188c2.148438 21.691406-13.695312 41.019531-35.390624 43.167968-21.691407 2.148438-41.015626-13.699218-43.164063-35.390625-2.148437-21.691406 13.695313-41.019531 35.386719-43.167969 21.691406-2.148437 41.019531 13.699219 43.167968 35.390626zm0 0"})),p||(p=r.createElement("path",{d:"m412.699219 63.554688c-1.3125-1.84375-3.433594-2.941407-5.699219-2.941407h-311.386719l-3.914062-24.742187c-3.191407-20.703125-21.050781-35.9531252-42-35.871094h-42.699219c-3.867188 0-7 3.132812-7 7s3.132812 7 7 7h42.699219c14.050781-.054688 26.03125 10.175781 28.171875 24.0625l33.800781 213.515625c3.191406 20.703125 21.050781 35.957031 42 35.871094h208.929687c3.863282 0 7-3.132813 7-7 0-3.863281-3.136718-7-7-7h-208.929687c-14.050781.054687-26.03125-10.175781-28.171875-24.0625l-5.746094-36.300781h213.980469c18.117187-.007813 34.242187-11.484376 40.179687-28.597657l39.699219-114.578125c.742188-2.140625.402344-4.511718-.914062-6.355468zm0 0"})))}var E=r.forwardRef(_),w=(n.p,function(){var e=Object(j.b)(),t=e.order,n=e.handleBasketShow;return Object(o.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:n,children:[Object(o.jsx)(E,{className:"shopping-cart-icon"}),Object(o.jsx)("span",{className:"cart-quantity",children:null===t||void 0===t?void 0:t.length})]})}),k=function(){var e=Object(j.b)(),t=e.tooltipName,n=e.closeTooltip;return Object(r.useEffect)((function(){var e=setTimeout(n,3e3);return function(){clearTimeout(e)}}),[t]),Object(o.jsx)("div",{id:"toast-container",className:"tooltip-container",children:Object(o.jsxs)("div",{className:"toast",children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})},S=a.a.lazy((function(){return n.e(3).then(n.bind(null,18))})),L=function(){var e=Object(j.b)(),t=e.setGoods,n=e.loading,a=e.isBasketShow,c=e.tooltipName;Object(r.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"9e45aac3-83e47290-ef35bedb-1dfeb2e2"}}).then((function(e){return e.json()})).then((function(e){t(e.shop)}))}),[]);var i=["container content"];return n&&i.push("full-height"),Object(o.jsxs)("main",{className:i.join(" "),children:[Object(o.jsx)(w,{}),n?Object(o.jsx)(l,{}):Object(o.jsx)(x,{}),a&&Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)("h2",{children:"Loading..."}),children:Object(o.jsx)(S,{})}),c&&Object(o.jsx)(k,{})]})},T=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s,{}),Object(o.jsx)(j.a,{children:Object(o.jsx)(L,{})}),Object(o.jsx)(d,{})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root"))},3:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(4),a=n(1),c=n(10),i=n(2),o="CLOSE_TOOLTIP",s="BASKET_SHOW",d="ADD_ORDER_ITEM",l="DELETE_ORDER_ITEM",u="ADD_ORDER_QUANTITY",j="DELETE_ORDER_QUANTITY",b="SET_GOODS",O=function(e,t){var n=t.type,r=t.payload;switch(n){case d:var a,O=null,h=e.order.findIndex((function(e){return e.mainId===r.orderItem.mainId}));if(h<0){var m=Object(i.a)(Object(i.a)({},r.orderItem),{},{orderQuantity:1});O=[].concat(Object(c.a)(e.order),[m])}else O=e.order.map((function(e,t){return t===h?Object(i.a)(Object(i.a)({},e),{},{orderQuantity:e.orderQuantity+1}):e}));return Object(i.a)(Object(i.a)({},e),{},{order:O,tooltipName:null===r||void 0===r||null===(a=r.orderItem)||void 0===a?void 0:a.displayName});case l:return Object(i.a)(Object(i.a)({},e),{},{order:e.order.filter((function(e){return e.mainId!==(null===r||void 0===r?void 0:r.mainId)}))});case u:return Object(i.a)(Object(i.a)({},e),{},{order:e.order.map((function(e){return e.mainId===r.mainId?Object(i.a)(Object(i.a)({},e),{},{orderQuantity:e.orderQuantity+1}):e}))});case j:return Object(i.a)(Object(i.a)({},e),{},{order:e.order.map((function(e){return e.mainId===r.mainId&&e.orderQuantity>0?Object(i.a)(Object(i.a)({},e),{},{orderQuantity:e.orderQuantity-1}):e}))});case s:return Object(i.a)(Object(i.a)({},e),{},{isBasketShow:!e.isBasketShow});case o:return Object(i.a)(Object(i.a)({},e),{},{tooltipName:""});case b:return Object(i.a)(Object(i.a)({},e),{},{goods:r.goods||[],loading:!1});default:return e}},h=n(0),m=Object(a.createContext)({}),f=function(){return Object(a.useContext)(m)},p=function(e){var t=Object(a.useReducer)(O,{goods:[],loading:!0,order:[],isBasketShow:!1,tooltipName:""}),n=Object(r.a)(t,2),c=n[0],i=n[1];return c.setGoods=function(e){return i({type:b,payload:{goods:e}})},c.addOrderItem=function(e){i({type:d,payload:{orderItem:e}})},c.deleteOrderItem=function(e){i({type:l,payload:{mainId:e}})},c.addOrderQuantity=function(e){i({type:u,payload:{mainId:e}})},c.deleteOrderQuantity=function(e){i({type:j,payload:{mainId:e}})},c.handleBasketShow=function(){i({type:s})},c.closeTooltip=function(){i({type:o})},Object(h.jsx)(m.Provider,{value:c,children:e.children})}},6:function(e,t,n){e.exports={container:"LoadableImage_container__1r22s",load:"LoadableImage_load__1MzDA",containerLoaded:"LoadableImage_containerLoaded__2i4yF",image:"LoadableImage_image__2SH0H",imageLoaded:"LoadableImage_imageLoaded__38ZYK"}}},[[17,1,2]]]);
//# sourceMappingURL=main.fd424ff6.chunk.js.map