(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{116:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n}));var i=a(127),o=(a(137),i.object().shape({name:i.string().min(2,"Too Short!").max(50,"Too Long!").required("Required")})),r=i.object().shape({email:i.string().email().required("Required"),password:i.string().min(7,"Password is too short - should be 7 chars minimum").required("Required")}),n=i.object().shape({name:i.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:i.string().email().required("Required"),password:i.string().min(6,"Password is too short - should be 6 chars minimum").required("Required")})},267:function(e,t,a){"use strict";a.r(t);var i=a(14),o=a(138),r=a(44),n=a(128),s=a(36),c=a(116),d=a(5),m=a(25),j=a(2);t.default=function(){var e=Object(i.b)(),t=Object(n.a)(3),a=Object(n.a)(3),b=Object(n.a)(3);return Object(j.jsx)(s.d,{initialValues:{name:"",email:"",password:""},validationSchema:c.c,onSubmit:function(t,a){var i,o=a.resetForm,r=t.name,n=t.email,s=t.password;i={name:r,email:n,password:s},e(Object(d.g)(i)),o()},children:Object(j.jsx)(m.e,{children:Object(j.jsxs)(m.c,{autoComplete:"off",children:[Object(j.jsx)(m.d,{children:"Create your account"}),Object(j.jsxs)(m.f,{htmlFor:"id-".concat(t),children:[Object(j.jsx)(o.b,{}),"Name"]}),Object(j.jsx)(m.b,{name:"name",type:"text",id:"id-".concat(t),placeholder:"name"}),Object(j.jsx)(s.a,{name:"name",component:m.i}),Object(j.jsxs)(m.f,{htmlFor:"id-".concat(a),children:[Object(j.jsx)(r.b,{}),"Email"]}),Object(j.jsx)(m.b,{name:"email",type:"email",id:"id-".concat(a),placeholder:"example@gmail.com"}),Object(j.jsx)(s.a,{name:"email",component:m.i}),Object(j.jsxs)(m.f,{htmlFor:"id-".concat(b),children:[Object(j.jsx)(o.a,{}),"Password"]}),Object(j.jsx)(m.b,{name:"password",type:"password",id:"id-".concat(b),placeholder:"password"}),Object(j.jsx)(s.a,{name:"password",component:m.i}),Object(j.jsx)(m.a,{type:"submit",children:"Join"})]})})})}}}]);
//# sourceMappingURL=6.32ef9885.chunk.js.map