"use strict";(self["webpackChunkfunreads"]=self["webpackChunkfunreads"]||[]).push([[652],{4652:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(3673),l=a(2323);function n(e,s,a,n,u,o){const r=(0,t.up)("q-space"),c=(0,t.up)("q-btn"),i=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(i,{class:"flex q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Welcome Home "+(0,l.zw)(u.user)+" "+(0,l.zw)(u.email)+" ",1),(0,t.Wm)(r),(0,t._)("div",null,[(0,t.Wm)(c,{class:"flex flex-center q-px-lg q-py-sm q-mb-md",size:"md",label:"Logout",onClick:o.logout,color:"primary"},null,8,["onClick"])])])),_:1})}var u=a(2490);const o={name:"Home",data(){return{user:"",email:""}},created(){u.firebase.auth().onAuthStateChanged((e=>{e?(this.user=e.displayName,this.email=e.email):console.log("user name is null")}))},methods:{logout(){u.firebase.auth().signOut(),this.$router.push("/").then((()=>{this.$q.notify({message:"Sign Out Success."})})).catch((e=>console.log("error",e)))}}};var r=a(4260),c=a(4379),i=a(2025),m=a(8240),p=a(7518),d=a.n(p);const h=(0,r.Z)(o,[["render",n]]),f=h;d()(o,"components",{QPage:c.Z,QSpace:i.Z,QBtn:m.Z})}}]);