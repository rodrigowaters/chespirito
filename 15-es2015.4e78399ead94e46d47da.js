(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OXgS:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var i=u("pMnS"),e=u("MKJQ"),b=u("sZkV"),a=u("SVse"),r=u("mrSG"),c=u("IzT6");class s{constructor(l,n,u,o){this.route=l,this.storage=n,this.nativeAudio=u,this.alertController=o,this.route.params.subscribe(l=>{if(l.hasOwnProperty("pageId")){let n=l.pageId;this.storage.get(n.toString()).then(l=>{this.key=n,this.name=l.name,this.description=l.description,this.actor=l.actor,this.phrases=l.phrases,this.nicknames=l.nicknames})}})}presentAlert(l){return r.a(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:"Aviso",message:l,buttons:["OK"]});yield n.present()}))}playAudio(l,n){let u=parseInt(n)+1,o="assets/sounds/".concat(l).concat("_").concat(u.toString()).concat(".wav");this.nativeAudio.unload("audioToken").finally(()=>{this.nativeAudio.preloadSimple("audioToken",o).then(()=>{this.nativeAudio.play("audioToken").then()},()=>{this.presentAlert("Nao foi possivel carregar o audio ".concat(o))})})}}var p=u("iInd"),h=u("xgBC"),d=o.nb({encapsulation:0,styles:[[""]],data:{}});function k(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"ion-icon",[["name","mic"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.playAudio(t.key,l.parent.context.$implicit.key)&&o),o}),e.F,e.l)),o.ob(1,49152,null,0,b.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"mic")}),null)}function m(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,6,"ion-item",[],null,null,null,e.I,e.m)),o.ob(1,49152,null,0,b.G,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,2,"ion-label",[],null,null,null,e.J,e.p)),o.ob(3,49152,null,0,b.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(4,0,["",""])),(l()(),o.eb(16777216,null,0,1,null,k)),o.ob(6,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,6,0,n.context.$implicit.value.hasAudio)}),(function(l,n){l(n,4,0,n.context.$implicit.value.text)}))}function f(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,4,"ion-item",[],null,null,null,e.I,e.m)),o.ob(1,49152,null,0,b.G,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,2,"ion-label",[],null,null,null,e.J,e.p)),o.ob(3,49152,null,0,b.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(4,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit)}))}function x(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[],null,null,null,e.E,e.k)),o.ob(1,49152,null,0,b.A,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,e.N,e.t)),o.ob(3,49152,null,0,b.yb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,e.x,e.d)),o.ob(5,49152,null,0,b.k,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Bb(l,8).onClick(u)&&t),t}),e.w,e.c)),o.ob(7,49152,null,0,b.f,[o.h,o.k,o.x],null,null),o.ob(8,16384,null,0,b.g,[[2,b.eb],b.Eb],null,null),(l()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,e.M,e.s)),o.ob(10,49152,null,0,b.wb,[o.h,o.k,o.x],null,null),(l()(),o.Hb(11,0,[" "," "])),(l()(),o.pb(12,0,null,null,33,"ion-content",[],null,null,null,e.D,e.j)),o.ob(13,49152,null,0,b.t,[o.h,o.k,o.x],null,null),(l()(),o.pb(14,0,null,0,31,"ion-card",[],null,null,null,e.C,e.e)),o.ob(15,49152,null,0,b.l,[o.h,o.k,o.x],null,null),(l()(),o.pb(16,0,null,0,8,"ion-card-header",[],null,null,null,e.z,e.g)),o.ob(17,49152,null,0,b.n,[o.h,o.k,o.x],null,null),(l()(),o.pb(18,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o.pb(19,0,null,0,2,"ion-card-title",[],null,null,null,e.B,e.i)),o.ob(20,49152,null,0,b.p,[o.h,o.k,o.x],null,null),(l()(),o.Hb(21,0,["",""])),(l()(),o.pb(22,0,null,0,2,"ion-card-subtitle",[],null,null,null,e.A,e.h)),o.ob(23,49152,null,0,b.o,[o.h,o.k,o.x],null,null),(l()(),o.Hb(24,0,["Ator : ",""])),(l()(),o.pb(25,0,null,0,20,"ion-card-content",[],null,null,null,e.y,e.f)),o.ob(26,49152,null,0,b.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(27,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Hb(28,null,["",""])),(l()(),o.pb(29,0,null,0,16,"ion-item-group",[],null,null,null,e.H,e.o)),o.ob(30,49152,null,0,b.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(31,0,null,0,4,"ion-item-divider",[],null,null,null,e.G,e.n)),o.ob(32,49152,null,0,b.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(33,0,null,0,2,"ion-label",[],null,null,null,e.J,e.p)),o.ob(34,49152,null,0,b.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Frases"])),(l()(),o.eb(16777216,null,0,2,null,m)),o.ob(37,278528,null,0,a.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),o.Db(0,a.e,[o.r]),(l()(),o.pb(39,0,null,0,4,"ion-item-divider",[],null,null,null,e.G,e.n)),o.ob(40,49152,null,0,b.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(41,0,null,0,2,"ion-label",[],null,null,null,e.J,e.p)),o.ob(42,49152,null,0,b.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Apelidos"])),(l()(),o.eb(16777216,null,0,1,null,f)),o.ob(45,278528,null,0,a.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,37,0,o.Ib(n,37,0,o.Bb(n,38).transform(u.phrases))),l(n,45,0,u.nicknames)}),(function(l,n){var u=n.component;l(n,11,0,u.name),l(n,18,0,o.tb(1,"assets/personagens/",u.key,".png")),l(n,21,0,u.name),l(n,24,0,u.actor),l(n,28,0,u.description)}))}function g(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-detail",[],null,null,null,x,d)),o.ob(1,49152,null,0,s,[p.a,h.b,c.a,b.a],null,null)],null,null)}var v=o.lb("app-detail",s,g,{},{},[]),y=u("s7LF");u.d(n,"DetailPageModuleNgFactory",(function(){return A}));var A=o.mb(t,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[i.a,v]],[3,o.j],o.v]),o.zb(4608,a.l,a.k,[o.s,[2,a.r]]),o.zb(4608,y.d,y.d,[]),o.zb(4608,b.b,b.b,[o.x,o.g]),o.zb(4608,b.Db,b.Db,[b.b,o.j,o.p]),o.zb(4608,b.Gb,b.Gb,[b.b,o.j,o.p]),o.zb(1073742336,a.b,a.b,[]),o.zb(1073742336,y.c,y.c,[]),o.zb(1073742336,y.a,y.a,[]),o.zb(1073742336,b.Ab,b.Ab,[]),o.zb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),o.zb(1073742336,t,t,[]),o.zb(1024,p.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);