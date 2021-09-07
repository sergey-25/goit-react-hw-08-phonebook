(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[4],{116:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a}));var r=n(127),i=(n(137),r.object().shape({name:r.string().min(2,"Too Short!").max(50,"Too Long!").required("Required")})),c=r.object().shape({email:r.string().email().required("Required"),password:r.string().min(7,"Password is too short - should be 7 chars minimum").required("Required")}),a=r.object().shape({name:r.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:r.string().email().required("Required"),password:r.string().min(6,"Password is too short - should be 6 chars minimum").required("Required")})},269:function(e,t,n){"use strict";n.r(t);var r=n(139),i=n(1),c=n(14),a=n(128),o=n(138),s=n(11),d=n(46),l=n(30),b=n(265),m=n(9);var u=Object(m.a)("div",{target:"e181vy702"})({name:"akifvi",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.6);z-index:100"}),j=Object(m.a)("div",{target:"e181vy701"})({name:"1to2x4f",styles:"position:relative;max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),p=Object(m.a)("div",{target:"e181vy700"})({name:"1e29uwi",styles:"position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;padding:10px;color:#651fff;>svg{width:24px;height:24px;}cursor:pointer;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover,&:focus{color:red;}"}),x=n(2),h=document.querySelector("#modal-root");var f=function(e){var t=e.closeModal,n=e.children;Object(i.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(l.createPortal)(Object(x.jsx)(u,{onClick:function(e){e.target===e.currentTarget&&t()},children:Object(x.jsxs)(j,{children:[Object(x.jsx)(p,{type:"button",onClick:function(){return t()},children:Object(x.jsx)(b.a,{})}),n]})}),h)},g=n(36),O=n(116),v=n(25),w=n(45);var y=function(){var e=Object(c.c)(s.e),t=Object(c.b)(),n=Object(a.a)(3),r=Object(a.a)(3);return Object(x.jsx)(g.d,{initialValues:{name:"",number:""},validationSchema:O.b,onSubmit:function(n,r){var i,c=r.resetForm,a=n.name,o=n.number;i={name:a,number:o},e.some((function(e){return e.name===i.name}))?w.b.error("Contact ".concat(i.name," already exists")):(t(Object(s.a)(i)),w.b.success("Contact ".concat(i.name," created"))),c()},children:Object(x.jsxs)(v.c,{autoComplete:"off",children:[Object(x.jsx)(v.f,{htmlFor:"id-".concat(n),children:"Name"}),Object(x.jsx)(v.b,{id:"id-".concat(n),type:"text",name:"name",placeholder:"Name"}),Object(x.jsx)(g.a,{name:"name",component:v.i}),Object(x.jsx)(v.f,{htmlFor:"id-".concat(r),children:"Number"}),Object(x.jsx)(v.b,{id:"id-".concat(r),type:"tel",name:"number",placeholder:"+38 (XXX) XXX-XX-XX"}),Object(x.jsx)(g.a,{name:"number",component:v.i}),Object(x.jsx)(v.a,{type:"submit",children:"Add contact"})]})})};var k=Object(m.a)("div",{target:"e1wl1lmb2"})({name:"2k2ok3",styles:"display:flex;width:100%;max-width:600px;margin-top:30px;margin-bottom:30px;margin-left:auto;margin-right:auto"}),q=Object(m.a)("div",{target:"e1wl1lmb1"})({name:"zkdloc",styles:"display:flex;align-items:center;justify-content:center;padding:10px;margin-right:20px;color:#651fff;border-radius:50%;cursor:pointer;>svg{width:20px;height:20px;}&:hover,&:focus{}"}),z=Object(m.a)("input",{target:"e1wl1lmb0"})({name:"15bulek",styles:"width:100%;color:black;border:1px solid black;border-radius:5px;padding-left:10px;font-size:14px;&:hover,&:focus{}"});var C=function(){var e=Object(c.c)(s.d),t=Object(c.b)(),n=Object(i.useState)(!1),l=Object(r.a)(n,2),b=l[0],m=l[1],u=function(){return m(!b)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k,{children:[Object(x.jsx)(q,{onClick:u,children:Object(x.jsx)(o.c,{})}),Object(x.jsx)(z,{id:"id-".concat(Object(a.a)(3)),type:"text",name:"name",value:e,onChange:function(e){return t(Object(d.b)(e.target.value))},placeholder:"Search",autoComplete:"off"})]}),b&&Object(x.jsx)(f,{closeModal:u,children:Object(x.jsx)(y,{})})]})},X=n(266);var S=Object(m.a)("ul",{target:"e1qbxqv73"})({name:"1opt9uw",styles:"width:100%;max-width:600px;margin-left:auto;margin-right:auto"}),R=Object(m.a)("li",{target:"e1qbxqv72"})({name:"13q25bq",styles:"display:flex;align-items:center;justify-content:space-between;font-size:14px;width:100%;padding:10px 12px;border:1px solid black;border-radius:5px;&:not(:last-child){margin-bottom:10px;}&:hover,&:focus{}@keyframes scaleIn{from{transform:scale(0);opacity:0;}to{opacity:1;transform:scale(1);}}@media screen and (min-width: 425px){font-size:16px;}"}),E=Object(m.a)("button",{target:"e1qbxqv71"})({name:"1ta5ekw",styles:"display:inline-flex;justify-content:center;align-items:center;min-width:60px;padding:10px;margin-left:10px;margin-right:10px;font-size:12px;font-weight:700;color:whitesmoke;background-color:#651fff;border:1px solid transparent;border-radius:5px;cursor:pointer;text-transform:uppercase;&:hover,&:focus{background-color:red;}@media screen and (min-width: 425px){min-width:80px;padding:4px 10px;}@media screen and (min-width: 768px){min-width:150px;padding:8px 12px;}"}),F=Object(m.a)("div",{target:"e1qbxqv70"})({name:"o6rqun",styles:"color:black;&>svg{color:#651fff;width:20px;margin-right:3px;}&:not(:last-child){text-transform:capitalize;color:black;margin-bottom:5px;}@media screen and (min-width: 725px){&>svg{width:25px;margin-right:0;}}@media screen and (min-width: 768px){&>svg{width:35px;}}"});var L=function(){var e=Object(c.c)(s.f),t=Object(c.c)(s.e),n=Object(c.b)();return Object(i.useEffect)((function(){n(Object(s.c)())}),[n]),Object(x.jsxs)(S,{children:[t&&t.map((function(e){var t=e.id,r=e.name,i=e.number;return Object(x.jsxs)(R,{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)(F,{children:[Object(x.jsx)(X.b,{size:16}),Object(x.jsx)("span",{children:Object(x.jsx)("b",{children:r})})]}),Object(x.jsxs)(F,{children:[Object(x.jsx)(X.a,{size:16}),Object(x.jsx)("span",{children:i})]})]}),Object(x.jsx)(E,{type:"button",onClick:function(){return function(e,t){n(Object(s.b)(e)),w.b.success("Contact ".concat(t," deleted"))}(t,r)},children:"Delete"})]},t)})),e&&Object(x.jsx)("div",{children:"Loading..."})]})};t.default=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsx)(L,{})]})}}}]);
//# sourceMappingURL=4.c5de6e23.chunk.js.map