const __vite__fileDeps=["assets/CreateUser-CNIlnEDt.js","assets/index-CU21qVtb.js","assets/index-BgAxq4jk.css","assets/axios-1Qqy5RyI.js","assets/axios-DX7gKjwE.css","assets/CreateUser-BZP0hk3W.css","assets/LogIn-CdCLDFCi.js","assets/useStorage-Cz0Q8JJq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,_ as m,d as u,e as h,f as p,b as d,j as t,L as r,R as a}from"./index-CU21qVtb.js";const g="_auth_6kyxc_1",x="_title_6kyxc_9",j="_component_6kyxc_18",f="_container_6kyxc_23",e={auth:g,title:x,component:j,container:f},E=c.lazy(()=>m(()=>import("./CreateUser-CNIlnEDt.js"),__vite__mapDeps([0,1,2,3,4,5]))),L=c.lazy(()=>m(()=>import("./LogIn-CdCLDFCi.js"),__vite__mapDeps([6,1,2,3,4,7]))),I=()=>{const[l,N]=u(),n=h(),i=p(),_=d(),o=l.get("state")||"signIn",s={create:{title:"Erstellung rnv-Registrieren",component:t.jsx(r,{className:e.component,to:n.pathname+"?state=signIn",children:"Login →"}),form:t.jsx(E,{}),btn:t.jsx("button",{className:e.btn,children:"Registrieren"})},signIn:{title:"Erstellung rnv-Login",component:t.jsx(r,{className:e.component,to:n.pathname+"?state=create",children:"Registrieren →"}),form:t.jsx(L,{}),btn:t.jsx("button",{className:e.btn,children:"Login"})}};return c.useEffect(()=>{i.status&&_(a.root,{replace:!0})},[i]),t.jsx("div",{className:e.auth,children:t.jsxs("section",{className:e.container,children:[t.jsx("h1",{className:e.title,children:n.pathname!==a.admin?s.signIn.title:s[o].title}),n.pathname===a.admin&&s[o].component,n.pathname!==a.admin?s.signIn.form:s[o].form]})})};export{I as default};