(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{179:function(e,t,a){},288:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),r=a.n(c),s=a(22),i=a.n(s),o=a(72),j=(a(179),a(64)),l=a(51),d=a(52),b=a(54),h=a(53),u=a(173),O=a(302),m=a(299),p=a(305),x=a(118),g=a(32),f=a(142),y=a.n(f).a.create({baseURL:"https://private-c56272-membercountdown.apiary-mock.com/",headers:{"Access-Control-Allow-Origin":"http://localhost:3000/","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"*/*"}}),v=function(e){switch(e){case 0:return"/";case 1:return"/MemberBirthdayCountDown/";default:return"/"}},k=a(56),w=a.n(k),M=a(42),N=Object(M.a)(),D=a(85),T=a(50),C=a(298),Y=a(297),A=a(296),S=a(87),L=a(68),I=a.p+"static/media/logo.2d27ead7.svg",B=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.isLoading,e.dataLoaded),a=e.groupData,c=e.env,r=e.isMobile,s=m.a.Title,i=m.a.Text;return t?Object(n.jsx)(L.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(D.a,{justify:"space-around",align:"middle",children:Object(n.jsxs)(T.a,{style:{width:"80%"},children:[Object(n.jsx)(D.a,{style:{marginTop:20},justify:"space-around",children:Object(n.jsx)(s,{children:"Welcome!"})}),Object(n.jsx)(D.a,{justify:"space-around",children:Object(n.jsx)(T.a,{style:{width:"100%"},children:a.map((function(e){return Object(n.jsx)(D.a,{justify:"space-around",style:{marginTop:30},children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)(D.a,{justify:"space-around",children:Object(n.jsx)(s,{level:3,children:e.category})}),Object(n.jsx)(D.a,{justify:"space-around",children:Object(n.jsx)(C.b,{grid:{gutter:16,column:r?2:e.group.length},dataSource:e.group,renderItem:function(e){return Object(n.jsx)(C.b.Item,{children:Object(n.jsxs)(Y.a,{title:e.category,onClick:function(){N.push("".concat(v(c),"group/?").concat(Object(S.stringify)({id:e.id,name:e.name})))},style:{cursor:"pointer"},children:[Object(n.jsx)(D.a,{children:Object(n.jsx)("img",{src:e.logo,className:"group-logo"})}),Object(n.jsxs)(D.a,{justify:"space-around",children:[Object(n.jsx)(A.a,{className:"custom-divider"}),Object(n.jsx)(i,{children:e.name})]})]})})}})})]})})}))})})]})},"2")}):Object(n.jsx)(L.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(D.a,{justify:"space-around",align:"middle",style:{height:"92vh"},children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)(D.a,{children:Object(n.jsx)("img",{src:I,className:"App-logo",alt:"logo"})}),Object(n.jsx)(D.a,{justify:"space-around",align:"middle",children:Object(n.jsx)(i,{style:{color:"#61dafb",fontSize:24},strong:!0,children:"Loading Data ..."})})]})},"1")})}}]),a}(c.Component),F=Object(g.g)(B),_=a(170),W=a(301),z=a(300),H=a(303),K=a(304),P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={groupID:0,groupName:"",dataGroup:{},dataListMember:[]},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=Object(S.parse)(this.props.location.search);this.setState({groupID:t.id,groupName:t.name}),y.get("/list/group/".concat(t.name)).then((function(t){e.setState({dataGroup:t.data,dataListMember:t.data.member})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataGroup,c=t.dataListMember,r=this.props,s=r.isMobile,i=r.env,o=m.a.Title,j=m.a.Text;return Object(n.jsx)(L.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(D.a,{className:"container",children:Object(n.jsxs)(T.a,{style:{width:"100%"},children:[Object(n.jsx)(D.a,{style:{marginBottom:20},children:Object(n.jsx)(_.a,{icon:Object(n.jsx)(H.a,{}),type:"link",onClick:function(){N.push("/")},children:"Back"})}),Object(n.jsxs)(D.a,{justify:"space-between",children:[Object(n.jsx)(T.a,{children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(T.a,{className:"group-detail-logo-bg",children:Object(n.jsx)("img",{src:(a.detail||{}).logo,className:"group-detail-logo"})}),Object(n.jsxs)(T.a,{style:{marginLeft:20},children:[Object(n.jsx)(D.a,{children:Object(n.jsx)("a",{href:(a.detail||{}).site,target:"_blank",children:Object(n.jsx)(o,{children:a.name})})}),Object(n.jsx)(D.a,{children:Object(n.jsx)(j,{children:(a.detail||{}).location})})]})]})}),Object(n.jsx)(T.a,{style:{marginTop:s?20:0},children:Object(n.jsx)(W.a,{className:"custom-input",prefix:Object(n.jsx)(K.a,{style:{color:"#bfbfbf",fontSize:14}}),placeholder:"Search",enterButton:!0})})]}),Object(n.jsx)(D.a,{style:{marginTop:20},children:Object(n.jsx)(C.b,{grid:{gutter:16,column:s?1:4},dataSource:c,style:{width:"100%"},renderItem:function(t){return Object(n.jsx)(C.b.Item,{children:Object(n.jsx)(Y.a,{style:{cursor:"pointer"},onClick:function(){N.push({pathname:"".concat(v(i),"member/?").concat(Object(S.stringify)({name:(t.name||{}).romaji,group:(t.career_info||{}).group,team:(t.career_info||{}).team})),state:{data:t,prevUrl:"".concat(e.props.location.pathname).concat(e.props.location.search)}})},children:Object(n.jsx)(Y.a.Meta,{avatar:Object(n.jsx)(z.a,{size:64,src:t.pict}),title:(t.name||{}).romaji,description:"".concat((t.career_info||{}).group," Team ").concat((t.career_info||{}).team)})})})}})})]})},1)})}}]),a}(c.Component),R=Object(g.g)(P),U=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={months:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props,a=t.timeTillDate,n=t.timeFormat,c=w()(a,n),r=w()(),s=w()(c-r),i=s.format("M"),o=s.format("D"),j=s.format("HH"),l=s.format("mm"),d=s.format("ss");e.setState({months:i,days:o,hours:j,minutes:l,seconds:d})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.months,a=e.days,c=e.hours,r=e.minutes,s=e.seconds,i=E(t,12,0,0,360),o=E(a,30,0,0,360),j=E(c,24,0,0,360),l=E(r,60,0,0,360),d=E(s,60,0,0,360);return s?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title-counter",children:"Countdown"}),Object(n.jsxs)("div",{className:"countdown-wrapper",children:[t&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(q,{radius:i}),t,Object(n.jsx)("span",{children:"months"})]}),a&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(q,{radius:o}),a,Object(n.jsx)("span",{children:"days"})]}),c&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(q,{radius:j}),c,Object(n.jsx)("span",{children:"hours"})]}),r&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(q,{radius:l}),r,Object(n.jsx)("span",{children:"minutes"})]}),s&&Object(n.jsxs)("div",{className:"countdown-item",children:[Object(n.jsx)(q,{radius:d}),s,Object(n.jsx)("span",{children:"seconds"})]})]})]}):null}}]),a}(c.Component),q=function(e){var t=e.radius;return Object(n.jsx)("svg",{className:"countdown-svg",children:Object(n.jsx)("path",{fill:"none",stroke:"#333","stroke-width":"4",d:J(50,50,48,0,t)})})};function G(e,t,a,n){var c=(n-90)*Math.PI/180;return{x:e+a*Math.cos(c),y:t+a*Math.sin(c)}}function J(e,t,a,n,c){var r=G(e,t,a,c),s=G(e,t,a,n),i=c-n<=180?"0":"1";return["M",r.x,r.y,"A",a,a,0,i,0,s.x,s.y].join(" ")}function E(e,t,a,n,c){return(e-t)*(c-n)/(a-t)+n}var X,Z=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={memberData:{}},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){console.log(this.props.location),this.setState({memberData:this.props.location.state.data})}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.isMobile,c=this.state.memberData,r=m.a.Title,s=m.a.Text,i=c,o=i.birthday.date.slice(0,-4)+w()().format("YYYY"),j=w()(o).format("MM DD YYYY, hh:mm");return Object(n.jsx)(L.a,{transitionName:"fade",transitionAppear:!0,children:Object(n.jsx)(D.a,{className:"container",children:Object(n.jsxs)(T.a,{style:{width:"100%"},children:[Object(n.jsx)(D.a,{style:{marginBottom:20},children:Object(n.jsx)(_.a,{icon:Object(n.jsx)(H.a,{}),type:"link",onClick:function(){N.push("".concat(t.state.prevUrl))},children:"Back"})}),a?Object(n.jsxs)(D.a,{justify:"space-around",children:[Object(n.jsx)(D.a,{justify:"space-around",children:Object(n.jsx)(T.a,{className:"member-detail-pict-bg-mobile",span:6,children:Object(n.jsx)("img",{src:i.pict,className:"member-detail-pict"})})}),Object(n.jsx)(D.a,{style:{marginTop:20},children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)(D.a,{children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)("label",{children:"Romaji"}),Object(n.jsx)(r,{children:i.name.romaji}),"Kanji: ",Object(n.jsx)(s,{strong:!0,children:i.name.kanji}),Object(n.jsx)("br",{}),"Kana: ",Object(n.jsx)(s,{strong:!0,children:i.name.kana}),Object(n.jsx)("br",{}),"Nickname: ",Object(n.jsx)(s,{strong:!0,children:i.name.nickname.toString().replace(/,/g,", ")})]})}),Object(n.jsx)(D.a,{style:{marginTop:30},children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)("label",{children:"Birth Info"}),Object(n.jsx)(r,{children:i.birthday.date}),Object(n.jsx)(s,{children:i.birthday.place}),Object(n.jsx)("br",{}),Object(n.jsxs)(s,{children:["Current Age: ",i.birthday.current_age," Years Old"]})]})}),Object(n.jsx)(D.a,{style:{marginTop:20},children:i.more.site?Object(n.jsx)("a",{href:i.more.site,target:"_blank",children:"More Info"}):null}),Object(n.jsx)(D.a,{style:{marginTop:30},justify:"space-around",children:Object(n.jsx)(T.a,{style:{width:"50%"},children:Object(n.jsx)(U,{timeTillDate:"".concat(j),timeFormat:"MM DD YYYY, hh:mm"})})})]})})]}):Object(n.jsxs)(D.a,{justify:"space-between",children:[Object(n.jsx)(T.a,{className:"member-detail-pict-bg",span:6,children:Object(n.jsx)("img",{src:i.pict,className:"member-detail-pict"})}),Object(n.jsxs)(T.a,{span:17,gutter:1,children:[Object(n.jsxs)(D.a,{children:[Object(n.jsxs)(T.a,{span:12,children:[Object(n.jsx)("label",{children:"Romaji"}),Object(n.jsx)(r,{children:i.name.romaji}),"Kanji: ",Object(n.jsx)(s,{strong:!0,children:i.name.kanji}),Object(n.jsx)("br",{}),"Kana: ",Object(n.jsx)(s,{strong:!0,children:i.name.kana}),Object(n.jsx)("br",{}),"Nickname: ",Object(n.jsx)(s,{strong:!0,children:i.name.nickname.toString().replace(/,/g,", ")})]}),Object(n.jsxs)(T.a,{span:12,children:[Object(n.jsx)("label",{children:"Birth Info"}),Object(n.jsx)(r,{children:i.birthday.date}),Object(n.jsx)(s,{children:i.birthday.place}),Object(n.jsx)("br",{}),Object(n.jsxs)(s,{children:["Current Age: ",i.birthday.current_age," Years Old"]})]})]}),Object(n.jsx)(D.a,{style:{marginTop:20},children:i.more.site?Object(n.jsx)("a",{href:i.more.site,target:"_blank",children:"More Info"}):null}),Object(n.jsx)(D.a,{style:{marginTop:30},justify:"space-around",children:Object(n.jsx)(T.a,{children:Object(n.jsx)(U,{timeTillDate:"".concat(j),timeFormat:"MM DD YYYY, hh:mm"})})})]})]})]})},1)})}}]),a}(c.Component),Q=Object(g.g)(Z),V=a.p+"static/media/logo.4eba379c.png";a(288),a(289);Object(x.enquireScreen)((function(e){X=e}));var $=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isMobile:X,env:1,isLoading:!1,dataLoaded:!1,groupData:[]},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.setState({isLoading:!0}),y.get("/list/group").then((function(t){e.setState({groupData:t.data,isLoading:!1,dataLoaded:!0})})).catch((function(){e.setState({isLoading:!1,dataLoaded:!1}),u.b.error("Failed to get data",2.5).then((function(){return u.b.loading("Page will be reloaded in 5 secs",5)})).then((function(){u.b.destroy(),window.location.reload()}))}))}},{key:"componentDidMount",value:function(){var e=this;Object(x.enquireScreen)((function(t){e.setState({isMobile:!!t})}))}},{key:"render",value:function(){var e=this,t=O.a.Footer,a=O.a.Content,c=this.state,r=c.env,s=c.isMobile;m.a.Link;return Object(n.jsxs)(O.a,{children:[Object(n.jsx)(a,{children:Object(n.jsx)(g.c,{history:N,children:Object(n.jsxs)(g.d,{children:[Object(n.jsx)(g.a,{exact:!0,from:"/",to:v(r)}),Object(n.jsx)(g.b,{exact:!0,path:v(r),render:function(t){return Object(n.jsx)(F,Object(j.a)(Object(j.a)(Object(j.a)({},t),e.state),{},{isMobile:s,logo:V}))}}),Object(n.jsx)(g.b,{exact:!0,path:"".concat(v(r),"group"),render:function(e){return Object(n.jsx)(R,Object(j.a)(Object(j.a)({},e),{},{env:r,isMobile:s}))}}),Object(n.jsx)(g.b,{exact:!0,path:"".concat(v(r),"member"),render:function(e){return Object(n.jsx)(Q,Object(j.a)(Object(j.a)({},e),{},{env:r,isMobile:s}))}})]})})}),Object(n.jsxs)(t,{style:{background:"white",textAlign:s?"center":"left",fontSize:s?12:14},children:["\xa9",w()(new Date).format("YYYY")," - Developed with ",Object(n.jsx)(p.a,{style:{color:"#ea4c89"}})," by Muhamad Zaky"]})]})}}]),a}(c.Component),ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,306)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)($,{})})}),document.getElementById("root")),ee()}},[[292,1,2]]]);
//# sourceMappingURL=main.fccd98af.chunk.js.map