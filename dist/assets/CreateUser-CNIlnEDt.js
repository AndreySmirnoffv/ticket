import{r as i,j as e}from"./index-CU21qVtb.js";import{f as t,I as o,a as f}from"./axios-1Qqy5RyI.js";const x="_succes_k3cn5_1",m={succes:x},j=()=>{const[c,r]=i.useState(!1),[u,l]=i.useState(!1),p=async s=>{if(s.preventDefault(),c)return!1;r(!0);const d=await Object.fromEntries(new FormData(s.currentTarget));await f.post("http://localhost:8000/admin",d).then(function(n){console.log(n)}).catch(function(n){console.log(n)}),l(!0),r(!1)},a=s=>{s.target.value.length>=1&&l(!1)};return e.jsxs("form",{onSubmit:p,className:`${t.form} ${m.login}`,children:[e.jsx("p",{className:t.title,children:"Angaben zur Person"}),e.jsx(o,{inputHandle:a,name:"name",classNameCont:t.cont,placeholder:"Alex",topText:"User Name"}),e.jsx(o,{inputHandle:a,name:"email",classNameCont:t.cont,placeholder:"email@info.com",topText:"Email*"}),e.jsx(o,{inputHandle:a,name:"password",classNameCont:t.cont,placeholder:"dAmNmO!nAoBiZPi?",topText:"Password*"}),e.jsx("button",{className:t.btn,children:c?"Loading...":"Registrieren"}),u&&e.jsx("p",{className:m.succes,children:"Account erstellt ☑"})]})};export{j as default};