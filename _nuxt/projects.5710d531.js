import{_ as m}from"./Header.4e78a66c.js";import{_}from"./ProjectCard.dce99f9e.js";import{u}from"./index.38c36369.js";import{u as d}from"./asyncData.9c3fa454.js";import{q as l}from"./query.36b252a2.js";import{D as h,c as s,g as f,e as y,F as j,E as k,G as b,b as t,R as v}from"./entry.d72aec6b.js";import"./Avatar.cfc8237a.js";import"./Icon.cbc1ed30.js";import"./preview.12eaf0bb.js";const x={class:"min-h-screen"},A={class:"space-y-4"},r="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",V={__name:"projects",async setup(w){let e,o;u({title:"Projects | Fayaz Ahmed",description:r});const{data:a}=([e,o]=h(()=>d("projects-all",()=>l("/projects").find())),e=await e,o(),e);return(B,g)=>{const n=m,c=_;return t(),s("main",x,[f(n,{class:"mb-12",title:"Projects",description:r}),y("div",A,[(t(!0),s(j,null,k(b(a),(p,i)=>(t(),v(c,{key:i,project:p},null,8,["project"]))),128))])])}}};export{V as default};