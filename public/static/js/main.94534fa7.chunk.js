(this["webpackJsonpgrub-paste"]=this["webpackJsonpgrub-paste"]||[]).push([[0],{147:function(e,t){},149:function(e,t){},159:function(e,t){},161:function(e,t){},188:function(e,t){},190:function(e,t){},191:function(e,t){},196:function(e,t){},198:function(e,t){},204:function(e,t){},206:function(e,t){},225:function(e,t){},237:function(e,t){},240:function(e,t){},476:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(131),s=n.n(r),l=n(16),i=n(0),o=function(){return Object(i.jsx)("div",{className:"d-flex min-vh-100 align-items-center justify-content-center container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"row text-center mb-5",children:[Object(i.jsx)("h1",{className:"display-1",children:"GRUB PASTE"}),Object(i.jsx)("h5",{children:"O melhor compartilhador de c\xf3digos"})]}),Object(i.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(i.jsx)("div",{className:"col-md-2 d-grid mb-3",children:Object(i.jsx)(l.b,{to:"/saiba-mais",className:"btn btn-lg btn-outline-dark",children:"Saiba mais"})}),Object(i.jsx)("div",{className:"col-md-2 d-grid mb-3",children:Object(i.jsx)(l.b,{to:"/app",className:"btn btn-lg btn-dark",children:"Come\xe7ar"})})]})]})})},j=n(4),u=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("nav",{className:"navbar navbar-light bg-light px-5",children:Object(i.jsx)("a",{href:"/",className:"navbar-brand",children:"Grub"})})})},b=function(){return Object(i.jsx)("div",{className:"mt-5 p-5",children:Object(i.jsx)("div",{className:"row d-flex justify-content-center pt-5",children:Object(i.jsxs)("div",{className:"col-md-4 border border-dark rounded",children:[Object(i.jsx)("div",{className:"row text-center my-5",children:Object(i.jsx)("h1",{children:"O que deseja fazer ?"})}),Object(i.jsxs)("div",{className:"row py-5 d-flex justify-content-center",children:[Object(i.jsx)("div",{className:"col-5 d-grid",children:Object(i.jsxs)(l.b,{className:"btn py-3 btn-outline-dark",to:"search",children:[Object(i.jsx)("i",{className:"bi bi-search"})," Buscar"]})}),Object(i.jsx)("div",{className:"col-5 d-grid",children:Object(i.jsxs)(l.b,{className:"btn py-3 btn-dark",to:"create",children:[Object(i.jsx)("i",{className:"bi bi-plus-lg"})," Criar arquivo"]})})]})]})})})},d=n(10),m=n.n(d),h=n(12),x=n(17),O=function(e){var t=e.label,n=e.type,a=e.name,c=e.value,r=e.onChange,s=e.error,l=e.onBlur;return Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:a,className:"form-label",children:t}),Object(i.jsx)("input",{type:n,className:"form-control",id:a,value:c,onChange:r,onBlur:l}),s&&Object(i.jsx)("p",{className:"text-danger",children:s})]})},p=n(9),f=function(e){var t=e.label,n=e.name,a=e.value,r=e.onChange,s=e.onBlur,l=c.a.useState(!1),o=Object(p.a)(l,2),j=o[0],u=o[1];return Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:n,className:"form-label",children:t}),Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("input",{type:j?"text":"password",className:"form-control",id:n,value:a,onChange:r,onBlur:s}),Object(i.jsx)("button",{onClick:function(){u(!j)},className:"btn btn-outline-dark",type:"button",children:Object(i.jsx)("i",{className:"bi bi-eye"})})]})]})},v=function(e){var t=e.label,n=e.name,a=e.value,c=e.onChange,r=e.error,s=e.options;return Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:n,className:"form-label",children:t}),Object(i.jsx)("select",{value:a,onChange:c,className:"form-select",id:n,required:!0,children:s.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))}),r&&Object(i.jsx)("p",{className:"text-danger",children:r})]})},N=n(133),g=["children"],y=function(e){var t=e.children,n=Object(N.a)(e,g);return Object(i.jsx)("div",{className:"d-grid py-5",children:Object(i.jsx)("button",Object(h.a)(Object(h.a)({className:"btn btn-lg btn-dark"},n),{},{children:t}))})},w=function(e){var t=e.label,n=e.name,a=e.value,c=e.onChange,r=e.error;return Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:n,className:"form-label",children:t}),Object(i.jsx)("textarea",{value:a,onChange:c,className:"form-control",id:n,rows:"5"}),r&&Object(i.jsx)("p",{className:"text-danger",children:r})]})},k=function(){var e=c.a.useState(null),t=Object(p.a)(e,2),n=t[0],a=t[1],r=c.a.useState(null),s=Object(p.a)(r,2),l=s[0],i=s[1],o=c.a.useState(!1),j=Object(p.a)(o,2),u=j[0],b=j[1];return{data:n,error:l,loading:u,request:c.a.useCallback(function(){var e=Object(x.a)(m.a.mark((function e(t,n){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(null),b(!0),e.next=5,fetch(t,n);case 5:return c=e.sent,e.next=8,c.json();case 8:if(r=e.sent,!1!==c.ok){e.next=11;break}throw new Error(r.message);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),r=null,i(e.t0.message);case 17:return e.prev=17,a(r),b(!1),e.abrupt("return",{response:c,json:r});case 22:case"end":return e.stop()}}),e,null,[[0,13,17,22]])})));return function(t,n){return e.apply(this,arguments)}}(),[])}},S={email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email v\xe1lido"}},C=function(e){var t=c.a.useState(""),n=Object(p.a)(t,2),a=n[0],r=n[1],s=c.a.useState(null),l=Object(p.a)(s,2),i=l[0],o=l[1];function j(t){return!1===e||(0===t.length?(o("Preencha um valor."),!1):S[e]&&!S[e].regex.test(t)?(o(S[e].message),!1):(o(null),!0))}return{value:a,setValue:r,onChange:function(e){var t=e.target;i&&j(t.value),r(t.value)},error:i,validate:function(){return j(a)},onBlur:function(){return j(a)}}},E=n(34),q=n.n(E),B="https://grub-paste.herokuapp.com/api";function P(e){return{url:"".concat(B,"/files"),options:{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}}}function A(e){return{url:"".concat(B,"/files/").concat(e),options:{method:"GET"}}}function T(e){return{url:"".concat(B,"/files?name=").concat(e),options:{method:"GET"}}}var J=function(){var e=["Plain text","C++","Python","Java"],t=C(),n=C(),a=C(),r=C(!1),s=k().request,l=Object(j.g)();function o(){return(o=Object(x.a)(m.a.mark((function e(c){var i,o,j,u,b,d,h,x;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),![t.validate(),n.validate(),a.validate()].reduce((function(e,t){return e&&t}),!0)){e.next=12;break}return i={name:t.value,type:n.value,content:a.value,protected:!1,pattern:"pattern"},r.value.length>0&&(i.content=q.a.AES.encrypt(i.content,r.value).toString(),i.pattern=q.a.AES.encrypt(i.pattern,r.value).toString(),i.protected=!0),o=P(i),j=o.url,u=o.options,e.next=8,s(j,u);case 8:b=e.sent,d=b.response,h=b.json,d.ok&&(x=h._id,l("/app/view/".concat(x)));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.useEffect((function(){n.value||n.setValue(e[0])}),[n,e]),Object(i.jsx)("div",{className:"row d-flex justify-content-center mt-5",children:Object(i.jsxs)("div",{className:"col-md-4 text-center p-3 border",children:[Object(i.jsx)("h1",{children:"Criar"}),Object(i.jsxs)("form",{onSubmit:function(e){return o.apply(this,arguments)},children:[Object(i.jsx)(O,Object(h.a)({label:"Nome do arquivo",name:"filename"},t)),Object(i.jsx)(v,Object(h.a)({options:e,label:"Tipo",name:"type"},n)),Object(i.jsx)(f,Object(h.a)({label:"Senha (opcional)",name:"password"},r)),Object(i.jsx)(w,Object(h.a)({label:"Conte\xfado",name:"content"},a)),Object(i.jsx)(y,{children:"Salvar"})]})]})})},F=function(e){var t=e.name,n=e.type,a=e._id;return Object(i.jsx)("div",{className:"card mb-3",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h3",{className:"card-title",children:Object(i.jsx)("a",{href:"/app/view/".concat(a),className:"text-dark",children:t})}),Object(i.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:n})]})})},G=function(){var e=c.a.useState(""),t=Object(p.a)(e,2),n=t[0],a=t[1],r=c.a.useState([]),s=Object(p.a)(r,2),l=s[0],o=s[1],j=k().request;function u(){return(u=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a(n.value);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.useEffect(Object(x.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return(a=Object(x.a)(m.a.mark((function e(){var t,a,c,r,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=4;break}o([]),e.next=11;break;case 4:return t=T(n),a=t.url,c=t.options,e.next=7,j(a,c);case 7:r=e.sent,s=r.response,l=r.json,s.ok&&o(l);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return a.apply(this,arguments)},e.next=4,t();case 4:case"end":return e.stop()}}),e)}))),[n,j]),Object(i.jsx)("div",{className:"row d-flex justify-content-center",children:Object(i.jsxs)("div",{className:"col-md-6 my-5",children:[Object(i.jsx)("h1",{className:"text-center mb-5",children:"Buscar"}),Object(i.jsx)("div",{className:"mb-5",children:Object(i.jsx)("input",{onChange:function(e){return u.apply(this,arguments)},name:"name",placeholder:"Digite o nome do arquivo...",className:"form-control form-control-lg"})}),l.map((function(e){return Object(i.jsx)(F,Object(h.a)({},e),e._id)}))]})})},z=n(132),D=n.n(z),_={"C++":"c++",Python:"python",Java:"java","Plain text":"plaintext"},R=function(){var e=Object(j.h)().id,t=k().request,n=c.a.useState(null),a=Object(p.a)(n,2),r=a[0],s=a[1],l=c.a.useState(!1),o=Object(p.a)(l,2),u=o[0],b=o[1],d=c.a.useState(0),O=Object(p.a)(d,2),v=O[0],N=O[1],g=C(),y=c.a.useRef(null);function w(){b(!0),y.current.className="",y.current.value=r.content,y.current.select(),document.execCommand("copy"),y.current.className="d-none"}return c.a.useEffect(Object(x.a)(m.a.mark((function n(){var a,c,r,l,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=A(e),c=a.url,r=a.options,n.next=3,t(c,r);case 3:l=n.sent,i=l.json,s(i);case 6:case"end":return n.stop()}}),n)}))),[e]),c.a.useEffect((function(){D.a.highlightAll()}),[r]),c.a.useEffect((function(){u&&setTimeout((function(){b(!1)}),1500)}),[u]),null===r?null:Object(i.jsxs)("div",{className:"row d-flex justify-content-center mt-5",children:[Object(i.jsx)("textarea",{className:"d-none",ref:y}),Object(i.jsx)("div",{className:"row d-flex justify-content-center",children:Object(i.jsx)("div",{className:"col-md-4",children:r.protected&&Object(i.jsx)("div",{className:"card mb-3",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h3",{className:"card-title",children:"O arquivo est\xe1 criptografado"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)(f,Object(h.a)({name:"password",label:"Senha"},g)),v>0&&Object(i.jsxs)("p",{className:"text-danger",children:["senha incorreta (",v,")"]})]}),Object(i.jsx)("button",{onClick:function(){function e(e,t){return q.a.AES.decrypt(e,t).toString(q.a.enc.Utf8)}"pattern"===e(r.pattern,g.value)?s(Object(h.a)(Object(h.a)({},r),{},{content:e(r.content,g.value),pattern:e(r.pattern,g.value),protected:!1})):N(v+1)},type:"button",className:"btn btn-dark",children:"Desbloquear"})]})})})}),r&&!r.protected&&Object(i.jsxs)("div",{className:"col-md-8",children:[Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(i.jsx)("h1",{className:"mb-5",children:r.name}),u?Object(i.jsx)("button",{onClick:w,className:"btn btn-dark",children:"Copiado"}):Object(i.jsx)("button",{onClick:w,className:"btn btn-outline-dark",children:"Copiar"})]}),Object(i.jsx)("pre",{children:Object(i.jsx)("code",{className:"language-".concat(_[r.type]),children:r.content})})]})]})},U=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(j.a,{path:"create",element:Object(i.jsx)(J,{})}),Object(i.jsx)(j.a,{path:"search",element:Object(i.jsx)(G,{})}),Object(i.jsx)(j.a,{path:"view/:id",element:Object(i.jsx)(R,{})})]})]})};var V=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(j.a,{path:"app/*",element:Object(i.jsx)(U,{})})]})})})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("root"))}},[[476,1,2]]]);
//# sourceMappingURL=main.94534fa7.chunk.js.map