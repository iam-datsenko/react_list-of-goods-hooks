(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s,c=n(8),r=n.n(c),i=n(6),o=n(9),a=n(1),l=n(2),u=n.n(l),d=(n(15),n(16),n(0)),j=function(e){var t=e.reorderedGoods;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{"data-cy":"Good",children:e},e)}))})},b=n(7),h=n(10),N=["children","className"],O=function(e){var t=e.children,n=e.className,s=Object(h.a)(e,N);return Object(d.jsx)("button",Object(b.a)(Object(b.a)({type:"button",className:u()("button",n)},s),{},{children:t}))},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var E=function(){var e=Object(a.useState)(s.NONE),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),l=Object(i.a)(r,2),b=l[0],h=l[1],N=function(e,t){var n=t.sortType,c=t.isReversed,r=Object(o.a)(e);return r.sort((function(e,t){switch(n){case s.LENGTH:return e.length-t.length;case s.ALPHABET:return e.localeCompare(t);default:return 0}})),c&&r.reverse(),r}(f,{sortType:n,isReversed:b});return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)(O,{onClick:function(){return c(s.LENGTH)},className:u()("is-success",{"is-light":n!==s.LENGTH}),children:"Sort by length"}),Object(d.jsx)(O,{onClick:function(){return c(s.ALPHABET)},className:u()("is-info",{"is-light":n!==s.ALPHABET}),children:"Sort alphabetically"}),Object(d.jsx)(O,{onClick:function(){h((function(e){return!e}))},className:u()("is-warning",{"is-light":!b}),children:"Reverse"}),(n!==s.NONE||b)&&Object(d.jsx)(O,{onClick:function(){c(s.NONE),h(!1)},className:"is-danger is-light",children:"Reset"})]}),Object(d.jsx)(j,{reorderedGoods:N})]})};r.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ae2f5f08.chunk.js.map