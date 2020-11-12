(this["webpackJsonpdishes-form"]=this["webpackJsonpdishes-form"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(6),i=n.n(r),l=(n(12),n(13),function(){return Object(c.jsx)("h1",{className:"header",children:"Dishes Form"})}),o=n(2),j=n(5),u=n(3),h=function(e){var t=e.inputChangeHandler;return Object(c.jsxs)("div",{className:"form-control pizza-options",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"number",children:"Number of slices:"}),Object(c.jsx)("input",{type:"number",name:"no_of_slices",pattern:"[0-9]",placeholder:"1 - 14",onChange:function(e){return t(e)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"number",children:"Diameter:"}),Object(c.jsx)("input",{type:"number",step:"any",name:"diameter",pattern:"[0-9]",placeholder:"20 - 60",onChange:t})]})]})},b=function(e){var t=e.inputChangeHandler;return Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"number",children:"Slices of bread:"}),Object(c.jsx)("input",{type:"number",name:"slices_of_bread",placeholder:"1 - 10",onChange:t})]})},d=function(e){var t=e.inputChangeHandler;return Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"range",children:"Spiciness scale:"}),Object(c.jsx)("input",{type:"range",name:"spiciness_scale",min:"1",max:"10",defaultValue:"5",onChange:t})]})},m=(n(14),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),l=i[0],m=i[1],p=Object(a.useState)(!1),O=Object(u.a)(p,2),x=O[0],f=O[1],g=function(e){var t=e.target.value;s(Object(j.a)(Object(j.a)({},n),{},Object(o.a)({},e.target.name,"number"===e.target.type||"range"===e.target.type?parseInt(t):t)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),f(!1),function(){var e,t=n.name,c=n.type,a=n.no_of_slices,s=n.diameter,r=n.spiciness_scale,i=n.slices_of_bread,l=function(e){return!!e.match(/^[A-Za-z]+$/)&&e.length>2&&e.length<15}(t),o=function(e){return void 0!==e}(c),j=!0;return"pizza"===n.type&&(j=(e=a)>0&&e<15&&function(e){return e>19&&e<61}(s)),"soup"===n.type&&(j=r.length>0),"sandwich"===n.type&&(j=function(e){return e.length>0&&e.length<11}(i)),l&&o&&j}()?fetch("https://frosty-wood-6558.getsandbox.com:443/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).then(f&&f(!1)).then(m(!0)).catch((function(e){console.error("Error:",e)})):(m(!1),f(!0))},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"text",children:"Dish name:"}),Object(c.jsx)("input",{type:"text",name:"name",value:n.value,placeholder:"Name of the dish...",maxLength:"15",onChange:g,required:!0})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"text",children:"Preparation time:"}),Object(c.jsx)("input",{type:"time",name:"preparation_time",value:n.value,step:"1",onChange:g,required:!0})]}),Object(c.jsxs)("div",{className:"form-control type",children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"text",children:"Type:"}),Object(c.jsxs)("select",{name:"type",id:"dish-type-select",onChange:g,children:[Object(c.jsx)("option",{children:"--select--"}),Object(c.jsx)("option",{value:"pizza",children:"Pizza"}),Object(c.jsx)("option",{value:"soup",children:"Soup"}),Object(c.jsx)("option",{value:"sandwich",children:"Sandwich"})]}),"pizza"===n.type&&Object(c.jsx)(h,{inputChangeHandler:g}),"soup"===n.type&&Object(c.jsx)(d,{inputChangeHandler:g}),"sandwich"===n.type&&Object(c.jsx)(b,{inputChangeHandler:g})]}),Object(c.jsx)("button",{className:"submit",children:"Submit"})]}),l&&Object(c.jsx)("h2",{style:{color:"green"},children:"Form submitted!"}),x&&Object(c.jsx)("h2",{style:{color:"red"},children:"Form invalid!"})]})}),p=(n(15),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("h1",{children:"imagineSolo \xa9 2020"})})});n(16);var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(m,{}),Object(c.jsx)(p,{})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.8cc454ea.chunk.js.map