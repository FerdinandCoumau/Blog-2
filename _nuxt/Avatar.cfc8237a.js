import{_ as C}from"./Icon.cbc1ed30.js";import{k as S,V as $,X as f,d as w,Y as j,Z as E,O as t,$ as h,a0 as i,r as O,a4 as A,b as r,c as n,a1 as B,n as o,t as d,R as P,f as y,a2 as I,a5 as U}from"./entry.d72aec6b.js";const s=$(f.ui.strategy,f.ui.avatar,U),N=w({components:{UIcon:C},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>s.default.icon},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},chipColor:{type:String,default:()=>s.default.chipColor,validator(e){return["gray",...f.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>s.default.chipPosition,validator(e){return Object.keys(s.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:g}=j("avatar",E(e,"ui"),s),u=t(()=>typeof e.src=="boolean"?null:e.src),m=t(()=>(e.alt||"").split(" ").map(z=>z.charAt(0)).join("").substring(0,2)),v=t(()=>h(i(a.value.wrapper,(l.value||!u.value)&&a.value.background,a.value.rounded,a.value.size[e.size]),e.class)),c=t(()=>h(i(a.value.rounded,a.value.size[e.size]),e.imgClass)),p=t(()=>i(a.value.icon.base,a.value.icon.size[e.size])),k=t(()=>i(a.value.chip.base,a.value.chip.size[e.size],a.value.chip.position[e.chipPosition],a.value.chip.background.replaceAll("{color}",e.chipColor))),l=O(!1);A(()=>e.src,()=>{l.value&&(l.value=!1)});function b(){l.value=!0}return{ui:a,attrs:g,wrapperClass:v,imgClass:c,iconClass:p,chipClass:k,url:u,placeholder:m,error:l,onError:b}}}),R=["alt","src"];function T(e,a,g,u,m,v){const c=C;return r(),n("span",{class:o(e.wrapperClass)},[e.url&&!e.error?(r(),n("img",B({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:a[0]||(a[0]=(...p)=>e.onError&&e.onError(...p))}),null,16,R)):e.text?(r(),n("span",{key:1,class:o(e.ui.text)},d(e.text),3)):e.icon?(r(),P(c,{key:2,name:e.icon,class:o(e.iconClass)},null,8,["name","class"])):e.placeholder?(r(),n("span",{key:3,class:o(e.ui.placeholder)},d(e.placeholder),3)):y("",!0),e.chipColor?(r(),n("span",{key:4,class:o(e.chipClass)},d(e.chipText),3)):y("",!0),I(e.$slots,"default")],2)}const J=S(N,[["render",T]]);export{J as _};
