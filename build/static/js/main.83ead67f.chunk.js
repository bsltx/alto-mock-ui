(this["webpackJsonpalto-mock-ui"]=this["webpackJsonpalto-mock-ui"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"trip":{"estimated_arrival":"Fri, 28 Sep 2018 14:22:17 GMT","estimated_fare_min":6500,"estimated_fare_max":7500,"passengers_min":1,"passengers_max":5,"payment":"Amex01","dropoff_location":{"name":"DFW Int\'l Airport - Terminal E","street_line1":"2400 Aviation Dr","street_line2":"","city":"DFW Airport","state":"Texas","zipcode":"75261","lat":"","long":""},"pickup_location":{"name":"","street_line1":"449 Flora St.","street_line2":"","city":"Dallas","state":"Texas","zipcode":"75201","lat":"","long":""},"notes":"Can you drop me off at AA International Bag Drop please?"},"driver":{"name":"Steph","image":"/images/Driver_photo.png","bio":"Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018.","phone":""},"vehicle":{"license":"Alto 09","make":"2019 Volkswagen Atlas","color":"Pure White","image":"/images/Vehicle_photo.png"},"vibe":{"name":"Vaporwave Beats"}}')},17:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(6),r=n.n(c),s=(n(17),n(2)),o=n(28),d=n(10),l=function(e){var t=new Date(e);return Object(o.a)(t,"p")},u=function(e){var t=e.city,n=e.state,a=e.zipcode;return"".concat(t,", ").concat(n," ").concat(a)},b=n(0),j=function(e){var t=e.ids,n=Object(a.useState)(0),i=Object(s.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(0),d=Object(s.a)(o,2),l=d[0],u=d[1],j=Object(a.useState)([0]),p=Object(s.a)(j,2),A=p[0],m=p[1];Object(a.useEffect)((function(){window.addEventListener("scroll",f);for(var e=t.filter((function(e){return e.length>0})).length,n=100/e/2,a=[n],i=1;i<e;i++)a.push(a[i-1]+2*n);return m(a),function(){window.removeEventListener("scroll",f)}}),[t]),Object(a.useEffect)((function(){var e=c>0?A[c-1]:0,t=c<A.length-1?A[c+1]:100,n=e+(t-e)/2,a=100!==t&&l>n&&l-n>t-l;0!==e&&l<n&&n-l>l-e&&r(c-1),a&&r(c+1)}),[c,l,A]);var f=function(){u(function(){var e=document.documentElement,t=document.body,n="scrollTop",a="scrollHeight";return(e[n]||t[n])/((e[a]||t[a])-e.clientHeight)*100}())};return Object(b.jsxs)("div",{className:"kabob-nav",children:[Object(b.jsx)("div",{className:"content-spacer"}),Object(b.jsx)("div",{className:"kabob-dots",children:t.map((function(e,t){return e?Object(b.jsx)("a",{href:"#".concat(e),className:"".concat(t===c?"active":""),"aria-label":"Navigation Link to ".concat(e),children:"\xa0"},"kabob-item-".concat(t)):Object(b.jsx)("p",{className:"".concat(e.length<1?"outline":""),"aria-label":"Inactive Nav Dot",children:"\xa0"},"kabob-item-".concat(t))}))})]})},p=function(e){var t=e.navIds;return Object(b.jsxs)("div",{className:"logo-header",children:[Object(b.jsx)("div",{className:"content-spacer"}),Object(b.jsx)("div",{className:"logo-wrapper",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAYAAABth09nAAAABGdBTUEAALGPC/xhBQAABAdJREFUSA29Vn1olVUYf55z3qtu1hqCf4RNkHHvrIkkQXi3ub1X68pM9EKtiSCuqZPIFYEEfVDD/6L6w6ggkiCohmaYfUDkdu80d69GkKRs7k7sQ5x9QM4uevdue8/pd657b+v17t6gtQOH55znec7vnOfrnMPka3Y4uFcTdUoWj8WTQ3Gf+JZp0+rgNWZaKFhEZ9JvCgc/IE1bb1k8xWDm9/pS6baZ5NHGlcvG3ezDrMQqnC0jmE5XzCs78knfmVFvjfAGHtXEj2LTpa5ST3m8ErRCa5KaVNlMekyyW0h+iInbiPgHo4fxQSFETJBoKKus3l1orW3X3hapC73ujGcvaJdeUVpt1VrtxtnevercuBgJL887h6cD2LZtaWfkD9L6dvBVwOJgz8n0xek6/jEiAicRCUEbE8nhL/xy/xz6R8HbJJhfSqTS+/xyb75+zd13jk1M9iBaKRb8KTYZIdLVrGiz0noL9MzZFbHYcjw19JHlLTSUnV/q9U0jzFRMuroT9GkzmcsWja5c6GTGEoLlvkTq/IfT9v4W44ORhuB+5dJnyJzFpNVrLS0tR/+RWordDcScgRfeMIuRMu2b6mtMdOa0wYhnEIHffEbkz5A4OXxaEm8EQ6FXXb0ycH/eEESCSXELBN3wxKsoYBfjimuuagOds9bc3DwfHtwriE8V2zSeSn8Dpx82OhOuW5U35IGGmgbEYJnFdCCeHPwJifb5FFBnzshiqLMoy2YvLwZcuWb9aylYHD5Xk5J1Zd4Q16V2RGFUkVjaFK5BZPSPU0DBtfWhDaVAZ0suXWeRwWKla0thCsGXjA6K/0rOENu+txIeaEVNVCrlHkYBHcI4f/0q9fe4FPh/lWMvx2Ag0Rs7Ou4LFMNDgeTqV1jy55wheuz6NtxljhRyvWS+a54US0xHnj4/BfTgujW19xQDnS3ZHYGyXErBkdVDZzMvFMPVSoUQu+8b17WeyRmClOqAC96OJ89/hSK6fKx/aMR0vaD8LQDdMGDu5OSTxUBnS2Zea9yavQYPzn3ODtfsKIRtrmho7LEk7enq6lJibXh5HaxfQUK+71/QdxO02/Dxom6LIQX9Ov/HPBCQj8O5Y7hkLOx7wA6HjqDHoo0rqsxDiZptHv8z2wNDX+ztT39tzgBFdyfoQF9y8FyhQ1lkvTlBE8Yr5aPO9e2g+wvp4fZ+NrI6tNmTKUG/H0+mvdT02P+KHjsxOBypCz4CBx/CgnIYFAONOeO58sGtS+fwk3ginkyf8ACFlqJXstzlMfy0JzXwnZCiFQ/QLmbrgl+ONPjSdPAzKNAqrwt4yK9r5viafIx/1ssY9heSezzz3eEFshZ1+g54l5BnWezTj79QO81fsiqeHM4bYdb8Bdijf/8uHOlRAAAAAElFTkSuQmCC",alt:"Alto Brand Logo"})}),Object(b.jsx)(j,{ids:t})]})},A=n(8),m=n.n(A),f=n(11),x=n(5),O=Object(x.b)("app/fetchMission",Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e({data:d})}),500)}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),h=Object(x.c)({name:"app",initialState:{mission:{trip:null,driver:null,vehicle:null,vibe:null},status:"idle"},reducers:{changeVibe:function(e,t){e.mission.vibe={name:t.payload}},updateNotes:function(e,t){e.mission.trip&&(e.mission.trip.notes=t.payload)}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.status="loading"})).addCase(O.fulfilled,(function(e,t){e.status="idle",e.mission=t.payload}))}}),v=(h.actions.changeVibe,function(e){return e.app.mission}),g=function(e){return e.app.status},T=h.reducer,k=n(4),N=function(){return Object(k.b)()},S=k.c,E=n(3),L=function(e){var t=e.text,n=e.disabled,a=e.btnClick;return Object(b.jsx)("button",{className:"big-btn",disabled:!!n,onClick:a,children:t})},w=function(e){var t=e.text,n=e.isTime;return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsxs)("p",{className:"jumbo-time",children:[t.split(" ")[0],Object(b.jsx)("span",{children:t.split(" ")[1]})]}):Object(b.jsx)("p",{className:"jumbo-text",children:t})})},C=function(e){var t=e.cardType,n=e.jumboText,a=e.isJumboTime,i=e.subText;return Object(b.jsxs)("div",{className:"detail-header",children:[t&&Object(b.jsxs)("p",{className:"card-title",children:["YOUR ",t.toUpperCase()]}),Object(b.jsx)(w,{isTime:!!a,text:n}),i&&Object(b.jsx)("p",{className:"estimated-arrival",children:i})]})},P=function(e){var t=e.title,n=e.content,a=e.infoLink,i=e.ind,c=t?"cd-content":"cd-content-no-title";return Object(b.jsxs)("div",{className:"detail-table-item",children:[Object(b.jsx)("p",{className:"cd-title",children:t}),Object(b.jsxs)("p",{className:c,children:[n," ",a&&Object(b.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABGdBTUEAALGPC/xhBQAAAN1JREFUKBWVkj0KwkAQRmfGiHgJK2tjhhCws7aw8CgiYmfAxsrDeAebNGJlbW4hxKx+q8iQ+Jtq8r2XzO7sMpknSaKwKMoFOeoQu4IcB8SUB4Gss2x/MCpRmqai2luqhtuBatdCvCMHh/dkCGLtz5/BiwIcnkdYEv5U9TTquTjuj2wOD75gDy1qTC1EzcIzkfJoc3h+zxqFOwu+1fDFT+mF+VjesIZuUxU/1hr5GDRvnSivjvndJ3ePT4KDO9Nl8060OTz4Pvv3nPwJj8eTVUll+9ONAIeHLmzb/3r3rrogWvAkgjutAAAAAElFTkSuQmCC",alt:"Info Icon"})})]})]},"content-item-".concat(i))},z=function(e){var t=e.content;return Object(b.jsx)("div",{className:"detail-table",children:t.map((function(e,t){return Object(b.jsx)(P,{title:e.title,content:e.content,infoLink:e.infoLink,ind:t},"content-".concat(t))}))})},V=function(e){var t=e.trip,n=e.id,i=N(),c=Object(a.useState)({headerText:"",headerSubText:"",detailTableContent:[{title:"",content:""}],buttonText:"",pickup:{name:"",addrLine1:"",addrLine2:"",cityStateZip:""},dropoff:{name:"",addrLine1:"",addrLine2:"",cityStateZip:""},notes:""}),r=Object(s.a)(c,2),o=r[0],d=r[1];Object(a.useEffect)((function(){t&&d((function(e){return Object(E.a)(Object(E.a)({},e),{},{headerText:l(t.estimated_arrival),headerSubText:"Estimated arrival at ".concat(t.dropoff_location.name),detailTableContent:[{title:"Estimated Fare:",content:"$".concat(t.estimated_fare_min/100," - $").concat(t.estimated_fare_max/100),infoLink:"https://google.com"},{title:"Passengers:",content:"".concat(t.passengers_min," - ").concat(t.passengers_max)},{title:"Payment:",content:t.payment}],buttonText:"CANCEL TRIP",pickup:{name:t.pickup_location.name,addrLine1:t.pickup_location.street_line1,addrLine2:t.pickup_location.street_line2,cityStateZip:u(t.pickup_location)},dropoff:{name:t.dropoff_location.name,addrLine1:t.dropoff_location.street_line1,addrLine2:t.dropoff_location.street_line2,cityStateZip:u(t.dropoff_location)},notes:t.notes})}))}),[t]);return Object(b.jsxs)("div",{className:"detail-card-no-image",id:n,children:[Object(b.jsx)("div",{className:"dcni-header",children:Object(b.jsx)("p",{children:"Your Trip"})}),Object(b.jsxs)("div",{className:"dcni-content",children:[Object(b.jsx)(C,{isJumboTime:!0,jumboText:o.headerText,subText:o.headerSubText}),Object(b.jsx)(z,{content:o.detailTableContent}),Object(b.jsxs)("div",{className:"trip-notes",children:[Object(b.jsxs)("div",{className:"pickup",children:[o.pickup.name&&Object(b.jsx)("p",{children:o.pickup.name}),o.pickup.addrLine1&&Object(b.jsx)("p",{children:o.pickup.addrLine1}),o.pickup.addrLine2&&Object(b.jsx)("p",{children:o.pickup.addrLine2}),o.pickup.cityStateZip&&Object(b.jsx)("p",{children:o.pickup.cityStateZip})]}),Object(b.jsxs)("div",{className:"dropoff",children:[o.dropoff.name&&Object(b.jsx)("p",{children:o.dropoff.name}),o.dropoff.addrLine1&&Object(b.jsx)("p",{children:o.dropoff.addrLine1}),o.dropoff.addrLine2&&Object(b.jsx)("p",{children:o.dropoff.addrLine2}),o.dropoff.cityStateZip&&Object(b.jsx)("p",{children:o.dropoff.cityStateZip})]}),Object(b.jsxs)("div",{className:"custom-notes",children:[Object(b.jsx)("p",{children:o.notes}),Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGPC/xhBQAAAMRJREFUGBljZMAB/v//z3R455qZjP8ZrNiY2H2YcahjcLHSTWT4z9AIlBf9x/CPAUMhyCRXS71IG/fgxY/vXpdlYGQQYGLmSEcxEKToyPY1iw9tX/0fSPcB+YyHDm0TBSlihKkEKTq6Y+3Cfwz/Y8BijAz3WRh4Taw8PN6B+CwgApsioHUOVq4QRSA1jLgU2bj6PgIpgAFmV0vdBqB1uWABoHUgk9AVgeSY/v9ncCakCKKQ6f8hRkbmeGZGZgtsJoENARIALPhXVVSE0UQAAAAASUVORK5CYII=",alt:"Edit Note Icon",onClick:function(){t&&i(h.actions.updateNotes(t.notes.includes("International")?"Please drop me off in Terminal A instead":"Can you drop me off at AA International Bag Drop please?"))}})]})]}),Object(b.jsx)(L,{text:o.buttonText,disabled:!0})]})]})},y=function(e){var t=e.cardType,n=e.imgSrc,a=e.imgAlt,i=e.isMap,c={backgroundImage:"url(".concat("/alto-mock-ui").concat(n,")")};return Object(b.jsx)("div",{style:c,role:"img","aria-label":a,className:"image-card-header ".concat(t,"-image"),children:i&&Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"Map Icon"})})},B=function(e){var t=e.driver,n=e.vehicle,i=e.trip,c=e.vibe,r=e.id,o=N(),d=Object(a.useState)(""),u=Object(s.a)(d,2),j=u[0],p=u[1],A=Object(a.useState)({imgSrc:"",imgAlt:"",isMap:!1}),m=Object(s.a)(A,2),f=m[0],x=m[1],O=Object(a.useState)({isTimeHeader:!1,headerText:"",headerSubText:"",detailTableContent:[{title:"",content:""}],buttonText:"",buttonDisabled:!1}),v=Object(s.a)(O,2),g=v[0],T=v[1];Object(a.useEffect)((function(){t?(p("driver"),x({imgSrc:t.image,imgAlt:"Image of your driver, ".concat(t.name),isMap:!1}),T((function(e){return Object(E.a)(Object(E.a)({},e),{},{headerText:t.name,detailTableContent:[{title:"",content:t.bio}],buttonText:"CONTACT DRIVER",buttonDisabled:!0})}))):n?(p("vehicle"),x({imgSrc:n.image,imgAlt:"Image of your ".concat(n.color," ").concat(n.make," Alto vehicle"),isMap:!1}),T((function(e){return Object(E.a)(Object(E.a)({},e),{},{headerText:n.license,detailTableContent:[{title:"Make / Model",content:n.make},{title:"Color",content:n.color}],buttonText:"IDENTIFY VEHICLE",buttonDisabled:!0})}))):i&&c&&(p("trip"),x({imgSrc:"/images/Map_overview.png",imgAlt:"Default image of map overview",isMap:!0}),T((function(e){return Object(E.a)(Object(E.a)({},e),{},{isTimeHeader:!0,headerText:l(i.estimated_arrival),headerSubText:"Estimated arrival at ".concat(i.dropoff_location.name),detailTableContent:[{title:"Current Vibe",content:c.name}],buttonText:"CHANGE VEHICLE VIBE"})})))}),[t,n,i,c]);return Object(b.jsxs)("div",{className:"detail-card-with-image",id:r,children:[Object(b.jsx)(y,Object(E.a)({cardType:j},f)),Object(b.jsxs)("div",{className:"dcwi-content",children:[Object(b.jsx)(C,{isJumboTime:g.isTimeHeader,cardType:j,jumboText:g.headerText,subText:g.headerSubText}),Object(b.jsx)(z,{content:g.detailTableContent})]}),Object(b.jsx)(L,{text:g.buttonText,disabled:g.buttonDisabled,btnClick:g.buttonDisabled?function(){}:function(){c&&o(h.actions.changeVibe("Sanctuary"===c.name?"Vaporwave Beats":"Sanctuary"))}})]})},H=function(e){var t=e.navIds,n=S(v),a=n.trip,i=n.driver,c=n.vehicle,r=n.vibe;return Object(b.jsxs)("div",{className:"mission-control",children:[Object(b.jsx)(V,{trip:a,id:t[0]}),Object(b.jsx)(B,{driver:i,id:t[1]}),Object(b.jsx)(B,{vehicle:c,id:t[2]}),Object(b.jsx)(B,{trip:a,vibe:r,id:t[3]})]})},U=function(e){var t=e.showEnRoute,n=S(v).trip,i=Object(a.useState)(""),c=Object(s.a)(i,2),r=c[0],o=c[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),j=u[0],p=u[1];return Object(a.useEffect)((function(){if(n){var e=n.estimated_arrival,t=n.dropoff_location.name;t.includes(" - ")?o(t.split("-")[0].trim()):o(t),p(l(e))}}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"bottom-nav",children:Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAABElJREFUSA2NVl9oW1UYP+fm5iaZsjjmMi2CnSlMGM7BmDCF/OuSNaTdOrFP+iB0Yw8DEWQiCFrxQcE3QR86iz4MBMv8k6SmTcaSxoeBCorgQ62xRrp2nVQMaxKa3Nzj7zvLze5ubocHmvOd3+/7fuec75zz3XJ2n5aMRB7TGTvNhUgJIYKM8wHpLsQa57wiOJ9TGfsmVyqt7iTDnYhT8fhAs9V6B9y4wljWYCztVtVfH+h01si/7nINtHX9ELhT4EYBfe3TtLfThYLkycdsfROMhEIU9AkcZvya9v7s1as109mpnzhxwl9rtd4AN4kJz86Xy2mr3z0TJMLhV0BehOPz84uLP5iOU1NTyvVicRITxwkDXzgejc4AB3SnjYTDxzD4EqMP8ouLH5p4bwK5cs4/cnF+3JrTiYkJrbaxkUH+FZzFJQpE7s8xIQz//v1js7OzLVOMzqwjxHVFiAvmTrAYJBI5p7TQyq3ixNVu3XoN4vVno9GTC+XyF/RHNmGSI6duo1jSIC3SNHEWD4cvJUKh93qAxYiHQjeSsVjQAkmTMOLsOI1JizTJVmhb6MfpQAmwtjPDw3uxUi137VrFipMtMXDSx0Z2tcZJW6F7jm1lnW7LNmN7ket/bPG9IQ5ws2kYD/eArkFapCm16REhZ/dcLTPAMIzeJTCx/9uTJmnjwEWQHpFToOF2N4B7nTjCEOvr+vS5kCZpK8jxgPlC7V4LCwur4P3JZHK3nZMYOOljJzGWmtBGqtD27evI3vaDeiOQo4zRaLxqoxhhxJGPnaNxTdMkrmKfa/XNzQCwqpMj93pfN5rNHxORSMOvqvLq1XT9HM7nvM/jOeYUQ5hL1x/BIa8rVBUNXT+6kyNSsO5R1WewkOdQc1b+bbf/JJswp+Jm6hhCHIG9rFLJxYmnMKA6IlsiFgvxTodKtIYVfC98vvn83NwZqknkYK1BdyL6f7HDEcTmOD0G3TB+82rak7rbvdFpNC5D+DAO9zIcbsOOYcVhJPQnrihZYJn5YnGpX/Iukkql9rS2tpZVzo/Ie07PGkYbQhp2tPuhQOAlaxF7ORLx3jSMGG7CGPxSmBxvkGWYy5UdHBr6bnp6un1XXpaKd+ETQFU9LyfofmB+ISfu8Tyez+fr1gC7fTIafRo7G2OGMYoFHQRfQO4yGlLSUpQnhK5nXIpylIqfnIAEqFx3OP/YI0Q0Wy4v20V3GicSiQDf3qZqQF+2YbxezhTlxXyplKUYlxn4e7W6NDQ4qCMNM0PBYLGysrJucvfrK5VKvVKt/nzwwIG/cHPGIP5WoVT63Izp7cAEup/Mz3B9P/X4/VPpdPq2yTn1dKDtra2LOL+zyPsk8p6x+vVNQKTlo/8CtjyHPF9RVXWJadrqg82mgQr6KB7RU0jpKPjTEL7i2rXrzVwu97dVnGzHCUwneYVt/7ZAUEDwBq7tHwjO4ip+9W2pdNOMsff/Af6Z6P3VVzHAAAAAAElFTkSuQmCC",alt:"Profile Menu Icon"}),Object(b.jsxs)("div",{className:"nav-trip-details",children:[Object(b.jsx)("p",{className:"airport",children:r}),Object(b.jsx)("p",{className:"eta",children:t?"En route...":j})]}),Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAABJ5JREFUSA2VVVtoHFUYPmdmziYbLwkaURNR89RqtWqqSEt2s+xmk1pieoH4VLVPzYtQBUUrIouURimIgi/JS730yaq1adEk2w2bTYioNJZ6ofUlIiYqVklUssnOze+bnbNZk1XoDzNn/vvl/P8/UvwP9KVSNxdte7/v+x0Qa5dCNPlSRoTvL0gpL4M+Xq/UybMTE/P/ZQY6GyEwXCodA6dXSPkRnjHLNGdtw7gSjUZtd3n5Nsd17/Y871HI7IazM3Wm+VItRxscpNPpFn919TwU325oajo6MjLy18YQ1ih9fX3XrSwuPo9sDkrTPDiez3+8xhVigwMye3p6bhgbG/tDC+5KJG4ped4ORHpnSJuLWtbMSC73q5bpicXaXSFOQeb1bKHwpqZXHDDybDa7oBk8d6ZSW13bHvSFSAL9EsIXUf9G4M0oWwe+84ZpHkbU31C+N5lsXbHtGdAO6UwCB6z5sm1fMKPRLTryrljsKUTzKoxlUKqh9aXam0rd+LfjDEjfnx8vFN6hAwIz8YQYrVPqgcqdpGOxd9OdnUfLIkLQeDoe/74rHr9X067m7I7Hj8DecepYYcf0Rhsb7yAhLAsj336uUPiaNAIuUUJps1JKPhyLXcpkMgh0DWD0SWEY51mu+qam15YXF+dYMgOleZytqEsQ1jxTbZxmYLwfx4Rj26PT6Pt0IrF/zTwCkLLVc91B0kJbp3Ef/QbwDvY5GewWHCnWnHg1wOH7eG5Fh9xuSPmE8LxXqp1ca1lDsJNgRahnGMYZ3GG3gVtujyjFvhdsRZTmC50Ny4J7eIy8ahifnMxCecD3vGMoFYMUp3K531HH6aLj7CCOwfwO+psMtp2n1BUS4awNz0V+E3Z1dd2Fo9LTATF8BU6EsD+fmtqs6dClnTbiZkPDT8ioxeBusSzLCYSk9OHw+uA7fEHJrsarv5Gtsm0bRwhSLunPYrGo0MIlZrCwsrTUGjLmIH2TFmK3AI90d3amNW3deSg7OXlJ01CS+/D8QFx5XjN0F3Ff8rI0jC0BUcrPkFYHh4g4WxG8Z6E0VMsJLx76QQbcSdB9MGIYM9TFMmzHMWtAeTzciuKTfP4XZJTnhFKIkM3nT6AlXvZ8/z0M34+49J9rXTz6fgDlnAhsUNH3e+B82lCm+QHQ3UEE+OBu4fhTRgOddCSTLZZSO0FLoiwnNY8nJx7GM6ZSh4kHtnx/X1SpE8Q5RMc53gFylS8aD9YK1otWBW2Q64e4xRd/FiuOc+GRePzDTwuFr0gjBOPv+y3XRCLDQZ+XycGbUYZlyaDML5ybmnqLDK56t1g8EI1E7ieOzMqALPZicN6Q9fXb9druTiTuCcYfE4qaTkP4N1zkn7jVrdB6iDVnWUZzucrs0Fr16q84IANb9Gkczygp91RnEizE8oS2UY6tyG6pXCho639SlCP8ywEJiHqP77rD6IBhbkW9NsirBWGpXgTvgKyr26az17IbHJDBNbvqukcQKX/qp7m4UL5v6xsb5x3HsQzbbi7Z9ja2Ip59kDmLmj9X/QulHUJNB2VW5RfYj2y64WwTdwvHnxMKmVn2OVuxlmFt4x/HGjH7KB8XuQAAAABJRU5ErkJggg==",alt:"Profile Menu Icon"})]})}),Object(b.jsx)("div",{className:"content-bumper"})]})},D=function(){return Object(b.jsxs)("div",{className:"loading-indicator",children:[Object(b.jsx)("div",{className:"spinner",children:Object(b.jsxs)("div",{className:"lds-ring",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),Object(b.jsx)("p",{children:"Retrieving your trip details..."})]})},I=function(){var e=N(),t=S(g),n=Object(a.useState)(!1),i=Object(s.a)(n,2),c=i[0],r=i[1],o=["tripCard","driverCard","vehicleCard","mapCard",""];return Object(a.useEffect)((function(){e(O()),window.onscroll=function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight?r(!0):r(!1)}}),[e]),Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{navIds:o}),"loading"===t?Object(b.jsx)(D,{}):Object(b.jsx)(H,{navIds:o}),Object(b.jsx)(U,{showEnRoute:c})]})})},M=Object(x.a)({reducer:{app:T}});r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(k.a,{store:M,children:Object(b.jsx)(I,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.83ead67f.chunk.js.map