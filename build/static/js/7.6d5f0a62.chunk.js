(this["webpackJsonpQuicksafe-web"]=this["webpackJsonpQuicksafe-web"]||[]).push([[7,22],{1081:function(e,t,a){"use strict";a.r(t);var c=a(37),n=a.n(c),r=a(59),s=a(33),o=a(1),l=a(8),i=(a(22),a(816),a(78),a(67)),u=a(818),d=a(6);i.b.on("sendData",(function(e){console.log("data of socket ",e)}));t.default=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(o.useState)([])),c=Object(s.a)(a,2),b=(c[0],c[1],Object(o.useState)(0)),j=Object(s.a)(b,2),f=j[0],h=j[1],p=Object(o.useState)(0),O=Object(s.a)(p,2),g=O[0],v=O[1],x=Object(o.useState)(0),S=Object(s.a)(x,2),N=S[0],k=S[1],w=Object(o.useState)(0),E=Object(s.a)(w,2),m=E[0],T=(E[1],Object(o.useState)(0)),y=Object(s.a)(T,2),A=(y[0],y[1],function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("agents/all/all-agent").then((function(e){var t=JSON.stringify(e.data.data[0].total);console.log("dataaa : "+t),h(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()),I=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("accidents/all-accidents").then((function(e){console.log(" data dashboard",e.data);var t=JSON.stringify(e.data.data[0].total_accident);console.log("dataaa : "+t),v(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("users/total-user").then((function(e){var t=JSON.stringify(e.data.data[0].total_user);console.log("dataaa : "+t),k(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){A(),I(),C()}),[]),console.log(" Total des agents :"+f),console.log(" Total des accidents :"+g),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.L,{children:Object(d.jsx)(l.k,{children:Object(d.jsxs)(l.i,{className:"mb-4",children:[Object(d.jsx)(l.X,{header:"".concat(f),text:"NOMBRES D'AGENTS",color:"gradient-info",value:"".concat(f),inverse:!0,children:Object(d.jsx)(l.A,{src:"avatars/users.png",height:80,width:80,className:"bg-gradient rounded-pill border-end p-2"})}),Object(d.jsx)(l.X,{header:"".concat(g),text:"NOMBRES D'ACCIDENTS",color:"gradient-warning",value:"".concat(g),inverse:!0,children:Object(d.jsx)(l.A,{src:"avatars/accident.png",height:80,width:80,className:"bg-gradient rounded-pill border-end p-2"})}),Object(d.jsx)(l.X,{header:"".concat(N),text:"UTILISATEURS INSCRITS",color:"gradient-success",inverse:!0,value:"".concat(N),children:Object(d.jsx)(l.A,{src:"avatars/users.png",height:80,width:80,className:"bg-gradient rounded-pill border-end p-2"})}),Object(d.jsx)(l.X,{header:"".concat(m),text:"NOMBRE DE DECES",color:"gradient-danger",value:"".concat(m),inverse:!0,children:Object(d.jsx)(l.A,{src:"avatars/deadly.png",height:80,width:80,className:"bg-gradient rounded-pill border-end p-2"})})]})})}),Object(d.jsx)(l.L,{children:Object(d.jsx)(l.k,{children:Object(d.jsx)(u.default,{})})})]})}},818:function(e,t,a){"use strict";a.r(t);var c=a(37),n=a.n(c),r=a(59),s=a(33),o=a(1),l=a(8),i=a(816),u=a(67),d=a(6);t.default=function(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],b=Object(o.useState)(0),j=Object(s.a)(b,2),f=j[0],h=j[1],p=Object(o.useState)(0),O=Object(s.a)(p,2),g=O[0],v=(O[1],Object(o.useState)(0)),x=Object(s.a)(v,2),S=x[0],N=x[1],k=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("accidents/all-accidents").then((function(e){var t=JSON.stringify(e.data.data[0].total_accident);console.log("dataaa : "+t),c(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("users/total-user").then((function(e){var t=JSON.stringify(e.data.data[0].total_user);console.log("dataaa : "+t),N(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("agents/all/all-agent").then((function(e){var t=JSON.stringify(e.data.data[0].total);console.log("dataaa : "+t),h(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){try{k(),E(),w()}catch(e){console.log(e)}}),[]);"".concat(a),"".concat(S),"".concat(f),"".concat(g);var m={labels:["ACCDIENTS","UTILISATEURS INSCRITS","AGENTS INSCRITS","DECES"],datasets:[{data:["".concat(a),"".concat(S),"".concat(f),"".concat(g)],backgroundColor:["#ff8b0b","#70b40e","#36A2EB","#fa0404"],hoverBackgroundColor:["#ff8b0b","#70b40e","#36A2EB","#fa0404"]}]};return Object(d.jsx)(l.l,{children:0===a?Object(d.jsx)(l.L,{children:Object(d.jsx)(l.k,{className:"text-center ",children:Object(d.jsxs)("div",{children:[Object(d.jsx)(l.A,{src:"avatars/datta-1.png",className:"img-fluid"}),Object(d.jsx)("h4",{className:"text-uppercase text-center",children:"Donn\xe9es indisponibles  ..."})]})})}):Object(d.jsxs)(l.f,{children:[Object(d.jsx)(l.j,{children:"STATISTIQUES"}),Object(d.jsx)(l.g,{children:Object(d.jsx)(i.a,{type:"pie",datasets:m.datasets,labels:m.labels})})]})})}}}]);
//# sourceMappingURL=7.6d5f0a62.chunk.js.map