/* empty css             *//* empty css                  *//* empty css                  */import{x as S,M as $,y as z,r as c,o as A,b as F,d as I,e as M,g as l,f as e,w as a,i as o,n as v,h as R,t as r,F as W,D as J,J as L,E as j,S as q,U as G,V as H,W as K}from"./index-B-NPC5fH.js";import{a as O}from"./axios-B4uVmeYG.js";const Q={class:"custom-page-header"},X={class:"header-extra"},Y={class:"button-container"},Z={class:"avatar-container"},ee={class:"tags"},ae={class:"text-large font-1000 mr-3"},te={class:"text-sm mr-3",style:{color:"var(--el-text-color-regular)"}},se={class:"info-container"},ie=S({__name:"Person",setup(oe){const P=$(),_=z(),s={account:"默认账号",password:"默认密码",email:"example@example.com",phone:"1234567890",token:"默认Token",pet_name:"test昵称"},p=c(s.account),f=c(s.password),h=c(s.email),b=c(s.phone),g=c(s.token),k=c(s.pet_name),E=c("first"),T=async()=>{try{const n=await O.post("http://127.0.0.1:5000/personal_page",{user:P.token.access_token});if(n.data.success==="true"&&n.data.data.length>0){const t=n.data.data[0];p.value=t.account??s.account,f.value=t.password??s.password,h.value=t.email??s.email,b.value=t.phone??s.phone,g.value=t.token??s.token,k.value=t.pet_name??s.pet_name}else alert(`获取数据失败: ${n.data.message}`)}catch{alert("发生错误")}},i=c(""),m=c(""),w=()=>{window.innerWidth<=1024?(i.value="person-small",m.value="avatar-small"):(i.value="person-large",m.value="avatar-large")};A(()=>{_.avatarUrl=_.avatarUrl||"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",T(),w(),window.addEventListener("resize",w)});const V=(n,t)=>{console.log(n,t)};return(n,t)=>{const U=F("EditPen"),y=J,x=L,D=j,d=q,B=G,u=H,N=K;return I(),M(W,null,[l("div",{class:v(i.value),"aria-label":"A complete example of page header"},[l("div",Q,[l("div",X,[l("div",Y,[e(x,{onClick:t[0]||(t[0]=C=>n.$router.push({path:"/EditPerson"})),class:"ml-2"},{default:a(()=>[e(y,null,{default:a(()=>[e(U)]),_:1}),o("编辑你的个人信息 ")]),_:1}),e(x,{class:"ml-2"},{default:a(()=>[o("你的工作")]),_:1})])]),l("div",{class:v(i.value)},[l("div",Z,[e(D,{class:v(m.value),src:`${R(_).avatarUrl}`},null,8,["class","src"]),l("div",ee,[l("span",ae,r(k.value),1),l("span",te,r(p.value),1)])]),l("div",se,[e(B,{column:1,size:"large",class:"mt-4"},{default:a(()=>[e(d,{label:"账号"},{default:a(()=>[o(r(p.value),1)]),_:1}),e(d,{label:"密码"},{default:a(()=>[o(r(f.value),1)]),_:1}),e(d,{label:"电话号码"},{default:a(()=>[o(r(b.value),1)]),_:1}),e(d,{label:"所在地"},{default:a(()=>[o("中国 湖南")]),_:1}),e(d,{label:"电子邮箱"},{default:a(()=>[o(r(h.value),1)]),_:1}),e(d,{label:"百度飞桨token"},{default:a(()=>[o(r(g.value),1)]),_:1})]),_:1})])],2)])],2),e(N,{modelValue:E.value,"onUpdate:modelValue":t[1]||(t[1]=C=>E.value=C),class:"demo-tabs",onTabClick:V},{default:a(()=>[e(u,{label:"个人信息",name:"first"},{default:a(()=>[o("User")]),_:1}),e(u,{label:"Config",name:"second"},{default:a(()=>[o("Config")]),_:1}),e(u,{label:"Role",name:"third"},{default:a(()=>[o("Role")]),_:1}),e(u,{label:"Task",name:"fourth"},{default:a(()=>[o("Task")]),_:1})]),_:1},8,["modelValue"])],64)}}});export{ie as default};
