(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{172:function(e,t,a){},262:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n,c=a(5),s=a(0),i=a.n(s),r=a(23),l=a.n(r),o=(a(172),a(103)),j=a(80),d=a(81),b=a(101),h=a(99),O=a(164),m=a(283),u=a(278),x=a(285),g=a(112),p=a(281),f=a(135),y=a.n(f).a.create({baseURL:"https://private-c56272-membercountdown.apiary-mock.com/info/",headers:{"Access-Control-Allow-Origin":"http://localhost:3000/","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"*/*"}}),v=function(e){switch(e){case 0:return"/";case 1:return"/MemberBirthdayCountDown/";default:return"/"}},N=function(e){switch(e){case"AKB48":return"pink";case"Nogizaka46":return"purple";default:return""}},w=a(108),A=a.n(w),L=a(136),k=Object(L.a)(),S=a(279),M=a(274),C=a(275),_=a(276),D=a(282),T=a(280),B=a(277),V=a(55),z=a(284),F=a(115),I=a.p+"static/media/logo.2d27ead7.svg",P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={searchKeyword:void 0,modalVisible:!1,dataModalMember:{}},e.onSearch=function(t){e.setState({searchKeyword:t})},e.modalVisibility=function(t,a){a?e.setState({dataModalMember:t},(function(){e.setState({modalVisible:a})})):e.setState({modalVisible:a},(function(){e.setState({dataModalMember:t})}))},e.renderModalDetail=function(){var t=e.state,a=t.modalVisible,n=t.dataModalMember,s=u.a.Link,i=u.a.Text,r=u.a.Title,l=n.pro_info,o=((l||{}).agency||"").split("|"),j=(l||{}).social||[];return console.log("data member",n,j),Object(c.jsx)(S.a,{title:Object(c.jsx)(r,{level:3,children:"Member Detail"}),visible:a,onOk:function(){return e.modalVisibility({},!1)},onCancel:function(){return e.modalVisibility({},!1)},footer:!1,width:"80%",children:n?Object(c.jsxs)(M.a,{children:[Object(c.jsx)(C.a,{span:5,children:Object(c.jsx)("img",{src:n.pict||"",style:{width:300},alt:(n.name||{}).kanji||"N/A"})}),Object(c.jsxs)(C.a,{span:19,children:[Object(c.jsxs)(M.a,{children:[Object(c.jsxs)(C.a,{span:12,children:[Object(c.jsxs)(M.a,{children:[Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))}),Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Kanji"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.name||{}).kanji||"N/A"})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Kana"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.name||{}).kana||"N/A"})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Romaji"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.name||{}).romaji||"N/A"})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Nickname"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.name||{}).nickname||"N/A"})]})]}),Object(c.jsxs)(C.a,{span:12,children:[Object(c.jsxs)(M.a,{children:[Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))}),Object(c.jsx)("label",{children:"Birth Info"}),Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Birthdate"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.birthday||{}).date||"N/A"})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Birthplace"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.birthday||{}).place||"N/A"})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Romaji"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.birthday||{}).blood_type||"N/A"})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Nickname"}),Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.birthday||{}).current_age||"N/A"})]})]})]}),Object(c.jsxs)(M.a,{children:[Object(c.jsxs)(C.a,{span:12,children:[Object(c.jsxs)(M.a,{children:[Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))}),Object(c.jsx)("label",{children:"Professional Info"}),Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"Agency"}),Object(c.jsxs)(s,{href:o[1],target:"_blank",style:{marginLeft:10},strong:!0,children:[o?o[0]:"N/A",o&&o[1]?Object(c.jsx)(z.a,{}):null]})]}),Object(c.jsxs)(M.a,{className:"modal-value",children:[Object(c.jsx)(i,{children:"SNS"}),j.length>0?j.map((function(e){var t=e.split("|");return Object(c.jsxs)(s,{href:t[1],target:"_blank",style:{marginLeft:10},strong:!0,children:[t?t[0]:"N/A",t&&t[1]?Object(c.jsx)(z.a,{}):null]})})):null]})]}),Object(c.jsxs)(C.a,{span:12,children:[Object(c.jsxs)(M.a,{children:[Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))}),Object(c.jsx)("label",{children:"Birthdat Countdown!"}),Object(c.jsx)(_.a,{className:"divider-".concat(N((n.career_info||{}).group||""))})]}),Object(c.jsx)(M.a,{className:"modal-value",children:Object(c.jsx)(i,{style:{marginLeft:10},strong:!0,children:(n.birthday||{}).date||"N/A"})})]})]})]})]}):null})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=(t.isLoading,t.dataLoaded),n=t.allData,s=u.a.Title,i=u.a.Text,r=D.a.Search;return console.log(this.props),a?Object(c.jsx)(F.a,{transitionName:"fade",transitionAppear:!0,children:Object(c.jsxs)(M.a,{justify:"space-around",align:"middle",children:[Object(c.jsx)(M.a,{style:{width:"80%",marginTop:20},justify:"space-around",children:Object(c.jsx)(s,{children:"Welcome!"})}),Object(c.jsx)(M.a,{style:{width:"40%",marginTop:20,marginBottom:30},justify:"space-around",children:Object(c.jsx)(r,{placeholder:"Search Member",allowClear:!0,enterButton:"Search",size:"large",onSearch:this.onSearch})}),Object(c.jsx)(M.a,{style:{width:"80%"},children:n.map((function(t){var a=t.group;return Object(c.jsxs)(M.a,{style:{width:"100%",marginTop:20},children:[Object(c.jsx)(C.a,{span:4,children:Object(c.jsxs)(M.a,{children:[Object(c.jsx)(C.a,{children:Object(c.jsx)(T.a,{src:t.detail.logo,alt:t.name,size:"large"})}),Object(c.jsxs)(C.a,{style:{marginLeft:5},children:[Object(c.jsx)(M.a,{children:Object(c.jsx)(i,{className:"group-name",strong:!0,children:t.name})}),Object(c.jsx)(M.a,{children:Object(c.jsx)(i,{className:"group-location",children:t.detail.location})})]})]})}),Object(c.jsx)(C.a,{span:20,style:{width:"80%"},children:Object(c.jsx)(M.a,{children:Object(c.jsx)(B.b,{dataSource:t.member,style:{width:"100%",maxHeight:"500px",overflow:"auto"},renderItem:function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(B.b.Item,{children:[Object(c.jsx)(B.b.Item.Meta,{avatar:Object(c.jsx)(T.a,{size:"large",src:t.pict,alt:t.name.romaji}),title:Object(c.jsx)("a",{href:"https://ant.design",children:t.name.romaji}),description:t.career_info.group}),Object(c.jsx)(V.a,{className:"btn-".concat(N(a)),onClick:function(){return e.modalVisibility(t,!0)},children:"Detail"})]}),Object(c.jsx)(_.a,{})]})}})})})]})}))}),this.renderModalDetail()]},"2")}):Object(c.jsx)(F.a,{transitionName:"fade",transitionAppear:!0,children:Object(c.jsx)(M.a,{justify:"space-around",align:"middle",style:{height:"92vh"},children:Object(c.jsxs)(C.a,{children:[Object(c.jsx)(M.a,{children:Object(c.jsx)("img",{src:I,className:"App-logo",alt:"logo"})}),Object(c.jsx)(M.a,{justify:"space-around",align:"middle",children:Object(c.jsx)(i,{style:{color:"#61dafb",fontSize:24},strong:!0,children:"Loading Data ..."})})]})},"1")})}}]),a}(s.Component),K=a.p+"static/media/logo.4eba379c.png";a(262),a(263);Object(g.enquireScreen)((function(e){n=e}));var R=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isMobile:n,env:1,isLoading:!1,dataLoaded:!1,allData:[]},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.setState({isLoading:!0}),y.get("/all").then((function(t){e.setState({allData:t.data,isLoading:!1,dataLoaded:!0})})).catch((function(){e.setState({isLoading:!1,dataLoaded:!1}),O.b.error("Failed to get data",2.5).then((function(){return O.b.loading("Page will be reloaded in 5 secs",5)})).then((function(){O.b.destroy(),window.location.reload()}))}))}},{key:"componentDidMount",value:function(){var e=this;Object(g.enquireScreen)((function(t){e.setState({isMobile:!!t})}))}},{key:"render",value:function(){var e=this,t=m.a.Footer,a=m.a.Content,s=this.state.env,i=u.a.Link;return Object(c.jsxs)(m.a,{children:[Object(c.jsx)(a,{children:Object(c.jsx)(p.b,{history:k,children:Object(c.jsx)(p.a,{exact:!0,path:v(s),render:function(t){return Object(c.jsx)(P,Object(o.a)(Object(o.a)(Object(o.a)({},t),e.state),{},{isMobile:n,logo:K}))}})})}),Object(c.jsxs)(t,{style:{background:"white",textAlign:n?"center":"left",fontSize:n?12:14},children:["\xa9",A()(new Date).format("YYYY")," - Developed with ",Object(c.jsx)(x.a,{style:{color:"#ea4c89"}})," by Muhamad Zaky - Powered by ",Object(c.jsx)(i,{href:"http://stage48.net/wiki/index.php/Main_Page",target:"_blank",strong:!0,children:"Stage48"})]})]})}}]),a}(s.Component),Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,286)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),Y()}},[[269,1,2]]]);
//# sourceMappingURL=main.829f02da.chunk.js.map