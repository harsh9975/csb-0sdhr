(this["webpackJsonpcrypto-practice-app"]=this["webpackJsonpcrypto-practice-app"]||[]).push([[0],{37:function(e,c,a){},38:function(e,c,a){},40:function(e,c,a){"use strict";a.r(c);var t=a(2),n=a(13),s=a.n(n),i=a(4),r=a(14),o=a.n(r),l=(a(37),a(38),a(0)),p=function(e){var c=e.name,a=e.image,t=e.symbol,n=e.price,s=e.volume,i=e.priceChange,r=e.marketcap;return Object(l.jsx)("div",{className:"coin-container",children:Object(l.jsxs)("div",{className:"coin-row",children:[Object(l.jsxs)("div",{className:"coin",children:[Object(l.jsx)("img",{src:a,alt:"crypto"}),Object(l.jsx)("h1",{children:c}),Object(l.jsx)("p",{className:"coin-symbol",children:t})]}),Object(l.jsxs)("div",{className:"coin-data",children:[Object(l.jsxs)("p",{className:"coin-price animate__pulse",children:["$",n]}),Object(l.jsx)("p",{className:"coin-volume",children:s}),i<0?Object(l.jsxs)("p",{className:"coin-percent red animate__pulse",children:[i.toFixed(2),"%"]}):Object(l.jsxs)("p",{className:"coin-percent green animate__pulse",children:[i.toFixed(2),"%"]}),Object(l.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",r.toLocaleString()]})]})]})})};var j=function(){var e=Object(t.useState)([]),c=Object(i.a)(e,2),a=c[0],n=c[1],s=Object(t.useState)(""),r=Object(i.a)(s,2),j=r[0],m=r[1];Object(t.useEffect)((function(){o.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=a.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(l.jsxs)("div",{className:"coin-app",children:[Object(l.jsxs)("div",{className:"coin-search",children:[Object(l.jsx)("h1",{"coin-text":!0,children:"Search a currency"}),Object(l.jsx)("form",{children:Object(l.jsx)("input",{type:"text",placeholder:"Search..",className:"coin-input animate__flash",onChange:function(e){m(e.target.value)}})})]}),Object(l.jsx)("div",{className:"box",children:d.map((function(e){return Object(l.jsx)(p,{name:e.name,image:e.image,symbol:e.symbol,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume,marketcap:e.market_cap},e.id)}))})]})},m=document.getElementById("root");s.a.render(Object(l.jsx)(t.StrictMode,{children:Object(l.jsx)(j,{})}),m)}},[[40,1,2]]]);
//# sourceMappingURL=main.a8544ae4.chunk.js.map