(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{178:function(e,t,a){},287:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),r=a.n(c),s=a(21),i=a.n(s),o=(a(178),a(62)),j=a(47),l=a(48),d=a(50),b=a(49),h=a(171),u=a(302),m=a(299),O=a(305),p=a(115),x=a(296),g=a(140),f=a.n(g).a.create({baseURL:"https://private-c56272-membercountdown.apiary-mock.com/",headers:{"Access-Control-Allow-Origin":"http://localhost:3000/","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"*/*"}}),y=function(e){switch(e){case 0:return"/";case 1:return"/MemberBirthdayCountDown/";default:return"/"}},v=a(55),k=a.n(v),w=a(54),M=Object(w.a)(),N=a(82),D=a(46),T=a(298),C=a(297),Y=a(295),A=a(83),S=a(66),L=a.p+"static/media/logo.2d27ead7.svg",I=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.isLoading,e.dataLoaded),a=e.groupData,c=e.env,r=e.isMobile,s=m.a.Title,i=m.a.Text;return t?Object(n.jsx)(S.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(N.a,{justify:"space-around",align:"middle",children:Object(n.jsxs)(D.a,{style:{width:"80%"},children:[Object(n.jsx)(N.a,{style:{marginTop:20},justify:"space-around",children:Object(n.jsx)(s,{children:"Welcome!"})}),Object(n.jsx)(N.a,{justify:"space-around",children:Object(n.jsx)(D.a,{style:{width:"100%"},children:a.map((function(e){return Object(n.jsx)(N.a,{justify:"space-around",style:{marginTop:30},children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(N.a,{justify:"space-around",children:Object(n.jsx)(s,{level:3,children:e.category})}),Object(n.jsx)(N.a,{justify:"space-around",children:Object(n.jsx)(T.b,{grid:{gutter:16,column:r?2:e.group.length},dataSource:e.group,renderItem:function(e){return Object(n.jsx)(T.b.Item,{children:Object(n.jsxs)(C.a,{title:e.category,onClick:function(){M.push("".concat(y(c),"group-detail/?").concat(Object(A.stringify)({id:e.id,name:e.name})))},style:{cursor:"pointer"},children:[Object(n.jsx)(N.a,{children:Object(n.jsx)("img",{src:e.logo,className:"group-logo"})}),Object(n.jsxs)(N.a,{justify:"space-around",children:[Object(n.jsx)(Y.a,{className:"custom-divider"}),Object(n.jsx)(i,{children:e.name})]})]})})}})})]})})}))})})]})},"2")}):Object(n.jsx)(S.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(N.a,{justify:"space-around",align:"middle",style:{height:"92vh"},children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(N.a,{children:Object(n.jsx)("img",{src:L,className:"App-logo",alt:"logo"})}),Object(n.jsx)(N.a,{justify:"space-around",align:"middle",children:Object(n.jsx)(i,{style:{color:"#61dafb",fontSize:24},strong:!0,children:"Loading Data ..."})})]})},"1")})}}]),a}(c.Component),B=a(168),F=a(301),_=a(300),W=a(303),z=a(304),H=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={groupID:0,groupName:"",dataGroup:{},dataListMember:[]},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=Object(A.parse)(this.props.location.search);this.setState({groupID:t.id,groupName:t.name}),f.get("/list/group/".concat(t.name)).then((function(t){e.setState({dataGroup:t.data,dataListMember:t.data.member})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataGroup,c=t.dataListMember,r=this.props,s=r.isMobile,i=r.env,o=m.a.Title,j=m.a.Text;return Object(n.jsx)(S.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(N.a,{className:"container",children:Object(n.jsxs)(D.a,{style:{width:"100%"},children:[Object(n.jsx)(N.a,{style:{marginBottom:20},children:Object(n.jsx)(B.a,{icon:Object(n.jsx)(W.a,{}),type:"link",onClick:function(){M.push("/")},children:"Back"})}),Object(n.jsxs)(N.a,{justify:"space-between",children:[Object(n.jsx)(D.a,{children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(D.a,{className:"group-detail-logo-bg",children:Object(n.jsx)("img",{src:(a.detail||{}).logo,className:"group-detail-logo"})}),Object(n.jsxs)(D.a,{style:{marginLeft:20},children:[Object(n.jsx)(N.a,{children:Object(n.jsx)("a",{href:(a.detail||{}).site,target:"_blank",children:Object(n.jsx)(o,{children:a.name})})}),Object(n.jsx)(N.a,{children:Object(n.jsx)(j,{children:(a.detail||{}).location})})]})]})}),Object(n.jsx)(D.a,{style:{marginTop:s?20:0},children:Object(n.jsx)(F.a,{className:"custom-input",prefix:Object(n.jsx)(z.a,{style:{color:"#bfbfbf",fontSize:14}}),placeholder:"Search",enterButton:!0})})]}),Object(n.jsx)(N.a,{style:{marginTop:20},children:Object(n.jsx)(T.b,{grid:{gutter:16,column:s?1:4},dataSource:c,style:{width:"100%"},renderItem:function(t){return Object(n.jsx)(T.b.Item,{children:Object(n.jsx)(C.a,{style:{cursor:"pointer"},onClick:function(){M.push({pathname:"".concat(y(i),"member-detail/?").concat(Object(A.stringify)({name:(t.name||{}).romaji,group:(t.career_info||{}).group,team:(t.career_info||{}).team})),state:{data:t,prevUrl:"".concat(e.props.location.pathname).concat(e.props.location.search)}})},children:Object(n.jsx)(C.a.Meta,{avatar:Object(n.jsx)(_.a,{size:64,src:t.pict}),title:(t.name||{}).romaji,description:"".concat((t.career_info||{}).group," Team ").concat((t.career_info||{}).team)})})})}})})]})},1)})}}]),a}(c.Component),K=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={months:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props,a=t.timeTillDate,n=t.timeFormat,c=k()(a,n),r=k()(),s=k()(c-r),i=s.format("M"),o=s.format("D"),j=s.format("HH"),l=s.format("mm"),d=s.format("ss");e.setState({months:i,days:o,hours:j,minutes:l,seconds:d})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.months,a=e.days,c=e.hours,r=e.minutes,s=e.seconds,i=q(t,12,0,0,360),o=q(a,30,0,0,360),j=q(c,24,0,0,360),l=q(r,60,0,0,360),d=q(s,60,0,0,360);return s?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title-counter",children:"Countdown"}),Object(n.jsxs)("div",{className:"countdown-wrapper",children:[t&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(P,{radius:i}),t,Object(n.jsx)("span",{children:"months"})]}),a&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(P,{radius:o}),a,Object(n.jsx)("span",{children:"days"})]}),c&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(P,{radius:j}),c,Object(n.jsx)("span",{children:"hours"})]}),r&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(P,{radius:l}),r,Object(n.jsx)("span",{children:"minutes"})]}),s&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(P,{radius:d}),s,Object(n.jsx)("span",{children:"seconds"})]})]})]}):null}}]),a}(c.Component),P=function(e){var t=e.radius;return Object(n.jsx)("svg",{className:"countdown-svg",children:Object(n.jsx)("path",{fill:"none",stroke:"#333","stroke-width":"4",d:U(50,50,48,0,t)})})};function R(e,t,a,n){var c=(n-90)*Math.PI/180;return{x:e+a*Math.cos(c),y:t+a*Math.sin(c)}}function U(e,t,a,n,c){var r=R(e,t,a,c),s=R(e,t,a,n),i=c-n<=180?"0":"1";return["M",r.x,r.y,"A",a,a,0,i,0,s.x,s.y].join(" ")}function q(e,t,a,n,c){return(e-t)*(c-n)/(a-t)+n}var G,J=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={memberData:{}},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({memberData:this.props.location.state.data})}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.isMobile,c=this.state.memberData,r=m.a.Title,s=m.a.Text,i=c,o=i.birthday.date.slice(0,-4)+k()().format("YYYY"),j=k()(o).format("MM DD YYYY, hh:mm");return Object(n.jsx)(S.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(N.a,{className:"container",children:Object(n.jsxs)(D.a,{style:{width:"100%"},children:[Object(n.jsx)(N.a,{style:{marginBottom:20},children:Object(n.jsx)(B.a,{icon:Object(n.jsx)(W.a,{}),type:"link",onClick:function(){M.push("".concat(t.state.prevUrl))},children:"Back"})}),a?Object(n.jsxs)(N.a,{justify:"space-around",children:[Object(n.jsx)(N.a,{justify:"space-around",children:Object(n.jsx)(D.a,{className:"member-detail-pict-bg-mobile",span:6,children:Object(n.jsx)("img",{src:i.pict,className:"member-detail-pict"})})}),Object(n.jsx)(N.a,{style:{marginTop:20},children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(N.a,{children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)("label",{children:"Romaji"}),Object(n.jsx)(r,{children:i.name.romaji}),"Kanji: ",Object(n.jsx)(s,{strong:!0,children:i.name.kanji}),Object(n.jsx)("br",{}),"Kana: ",Object(n.jsx)(s,{strong:!0,children:i.name.kana}),Object(n.jsx)("br",{}),"Nickname: ",Object(n.jsx)(s,{strong:!0,children:i.name.nickname.toString().replace(/,/g,", ")})]})}),Object(n.jsx)(N.a,{style:{marginTop:30},children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)("label",{children:"Birth Info"}),Object(n.jsx)(r,{children:i.birthday.date}),Object(n.jsx)(s,{children:i.birthday.place}),Object(n.jsx)("br",{}),Object(n.jsxs)(s,{children:["Current Age: ",i.birthday.current_age," Years Old"]})]})}),Object(n.jsx)(N.a,{style:{marginTop:20},children:i.more.site?Object(n.jsx)("a",{href:i.more.site,target:"_blank",children:"More Info"}):null}),Object(n.jsx)(N.a,{style:{marginTop:30},justify:"space-around",children:Object(n.jsx)(D.a,{style:{width:"50%"},children:Object(n.jsx)(K,{timeTillDate:"".concat(j),timeFormat:"MM DD YYYY, hh:mm"})})})]})})]}):Object(n.jsxs)(N.a,{justify:"space-between",children:[Object(n.jsx)(D.a,{className:"member-detail-pict-bg",span:6,children:Object(n.jsx)("img",{src:i.pict,className:"member-detail-pict"})}),Object(n.jsxs)(D.a,{span:17,gutter:1,children:[Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(D.a,{span:12,children:[Object(n.jsx)("label",{children:"Romaji"}),Object(n.jsx)(r,{children:i.name.romaji}),"Kanji: ",Object(n.jsx)(s,{strong:!0,children:i.name.kanji}),Object(n.jsx)("br",{}),"Kana: ",Object(n.jsx)(s,{strong:!0,children:i.name.kana}),Object(n.jsx)("br",{}),"Nickname: ",Object(n.jsx)(s,{strong:!0,children:i.name.nickname.toString().replace(/,/g,", ")})]}),Object(n.jsxs)(D.a,{span:12,children:[Object(n.jsx)("label",{children:"Birth Info"}),Object(n.jsx)(r,{children:i.birthday.date}),Object(n.jsx)(s,{children:i.birthday.place}),Object(n.jsx)("br",{}),Object(n.jsxs)(s,{children:["Current Age: ",i.birthday.current_age," Years Old"]})]})]}),Object(n.jsx)(N.a,{style:{marginTop:20},children:i.more.site?Object(n.jsx)("a",{href:i.more.site,target:"_blank",children:"More Info"}):null}),Object(n.jsx)(N.a,{style:{marginTop:30},justify:"space-around",children:Object(n.jsx)(D.a,{children:Object(n.jsx)(K,{timeTillDate:"".concat(j),timeFormat:"MM DD YYYY, hh:mm"})})})]})]})]})},1)})}}]),a}(c.Component),E=Object(x.e)(J),X=a.p+"static/media/logo.4eba379c.png";a(287),a(288);Object(p.enquireScreen)((function(e){G=e}));var Z=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isMobile:G,env:1,isLoading:!1,dataLoaded:!1,groupData:[]},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.setState({isLoading:!0}),f.get("/list/group").then((function(t){e.setState({groupData:t.data,isLoading:!1,dataLoaded:!0})})).catch((function(){e.setState({isLoading:!1,dataLoaded:!1}),h.b.error("Failed to get data",2.5).then((function(){return h.b.loading("Page will be reloaded in 5 secs",5)})).then((function(){h.b.destroy(),window.location.reload()}))}))}},{key:"componentDidMount",value:function(){var e=this;Object(p.enquireScreen)((function(t){e.setState({isMobile:!!t})}))}},{key:"render",value:function(){var e=this,t=u.a.Footer,a=u.a.Content,c=this.state,r=c.env,s=c.isMobile;m.a.Link;return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(a,{children:Object(n.jsx)(x.c,{history:M,children:Object(n.jsxs)(x.d,{children:[Object(n.jsx)(x.a,{exact:!0,from:"/",to:y(r)}),Object(n.jsx)(x.b,{exact:!0,path:y(r),render:function(t){return Object(n.jsx)(I,Object(o.a)(Object(o.a)(Object(o.a)({},t),e.state),{},{isMobile:s,logo:X}))}}),Object(n.jsx)(x.b,{exact:!0,path:"".concat(y(r),"group-detail"),render:function(e){return Object(n.jsx)(H,Object(o.a)(Object(o.a)({},e),{},{env:r,isMobile:s}))}}),Object(n.jsx)(x.b,{exact:!0,path:"".concat(y(r),"member-detail/"),render:function(e){return Object(n.jsx)(E,Object(o.a)(Object(o.a)({},e),{},{env:r,isMobile:s}))}})]})})}),Object(n.jsxs)(t,{style:{background:"white",textAlign:s?"center":"left",fontSize:s?12:14},children:["\xa9",k()(new Date).format("YYYY")," - Developed with ",Object(n.jsx)(O.a,{style:{color:"#ea4c89"}})," by Muhamad Zaky"]})]})}}]),a}(c.Component),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,306)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root")),Q()}},[[291,1,2]]]);
//# sourceMappingURL=main.24f1dac8.chunk.js.map