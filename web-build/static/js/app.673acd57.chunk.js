(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(0),r=n.n(a),o=n(1),i=n(8),l=n.n(i),c=n(21),s=n(50),m=n(24),u=n(23),g=function(e){var t=e.navigation,n=Object(a.useState)(""),o=l()(n,2),i=o[0],g=o[1],h=Object(a.useState)(""),d=l()(h,2),f=d[0],y=d[1];return r.a.createElement(s.a,{style:p.loginContainer},r.a.createElement(m.a,{style:p.logo,source:{uri:"https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"}}),r.a.createElement(u.d,{style:p.input,placeholder:"Username or Email",autoFocus:!0,value:i,onChangeText:function(e){return g(e)},leftIcon:{type:"font-awesome",name:"user",color:"grey"}}),r.a.createElement(u.d,{style:p.input,placeholder:"Password",secureTextEntry:!0,value:f,onChangeText:function(e){return y(e)},leftIcon:{type:"font-awesome",name:"lock",color:"grey"}}),r.a.createElement(c.a,null,r.a.createElement(u.e,{style:p.forgotPass},"Forgot Password")),r.a.createElement(u.b,{raised:!0,title:"Log In",buttonStyle:p.button,onPress:function(){i.trim()&&f.trim()?t.navigate("HomeScreen"):alert("Please enter valid input")}}),r.a.createElement(u.b,{raised:!0,title:"Sign Up",buttonStyle:p.buttonLogin}))},p=o.a.create({container:{},loginContainer:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",height:100,width:350},logo:{height:100,width:100},input:{paddingLeft:5},button:{backgroundColor:"#4488FF",height:50,width:300,borderRadius:5,marginTop:20},buttonLogin:{height:50,width:300,marginTop:20,backgroundColor:"black"},forgotPass:{color:"#4488FF",marginLeft:230}}),h=n(172),d=n(263),f=n(264),y=n(11),E=n.n(y),w=n(71),b=n(3),C=n(27),x=n(170),v=C.a.get("window").width,k=function(){return r.a.createElement(b.a,null,r.a.createElement(b.a,{style:z.navContainer},r.a.createElement(u.c,{size:25,name:"home",type:"feather"}),r.a.createElement(u.c,{size:25,name:"search",type:"fontisto"}),r.a.createElement(u.c,{size:25,name:"camera",type:"font-awesome"}),r.a.createElement(u.c,{size:25,name:"heart",type:"feather"}),r.a.createElement(u.a,{style:z.userAvatar,size:80,rounded:!0,source:{uri:"https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}})))},z=o.a.create({navContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"white",height:50,width:v},userAvatar:{height:25,width:25}}),I=(C.a.get("window").height,C.a.get("window").width),S=function(){var e=Object(a.useState)(null),t=l()(e,2),o=t[0],i=t[1],g=function(){var e,t,n;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(fetch("https://api.pexels.com/v1/search?query=clothing&orientation=portrait&size=large&per_page=79&page=2",{headers:{Authorization:"563492ad6f91700001000001cd92a8ae327d4be99f12df0692874fc6"}}));case 3:return e=a.sent,a.next=6,E.a.awrap(e.json());case 6:return t=a.sent,n=t.photos,a.abrupt("return",n);case 11:a.prev=11,a.t0=a.catch(0),console.error(a.t0);case 14:case"end":return a.stop()}}),null,null,[[0,11]],Promise)};return Object(a.useEffect)((function(){!function(){var e;E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(g());case 2:e=t.sent,i(e),console.log(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),r.a.createElement(s.a,{style:j.container},r.a.createElement(b.a,{style:j.headerContainer},r.a.createElement(u.c,{size:25,name:"camera",type:"font-awesome",color:"#000"}),r.a.createElement(m.a,{style:j.igLogo,source:n(234)}),r.a.createElement(u.c,{size:25,name:"paper-plane-o",type:"font-awesome",color:"#000"})),r.a.createElement(w.a,{horizontal:!0,data:o,keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item;return r.a.createElement(s.a,null,r.a.createElement(b.a,{style:j.storyBodyContainer},r.a.createElement(x.a,{start:[0,.5],end:[1,.5],colors:["#ff5f6d","#ffc371"],style:j.radient},r.a.createElement(b.a,{style:j.circleGradient},r.a.createElement(u.a,{style:j.stories,size:80,rounded:!0,source:{uri:t.src.portrait}}))),r.a.createElement(u.e,{h5:!0,style:j.userName},"andy")))}}),r.a.createElement(w.a,{data:o,keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item;return r.a.createElement(s.a,{style:j.feedContainer},r.a.createElement(b.a,{style:j.line}),r.a.createElement(b.a,{style:j.userOptionsContainer},r.a.createElement(m.a,{style:j.userImg,source:{uri:"https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}),r.a.createElement(u.c,{style:j.moreIcon,size:25,name:"more-horizontal",type:"feather",color:"#000"}),r.a.createElement(u.e,{h5:!0,style:j.userNameFeed},"igCloneByTushar")),r.a.createElement(m.a,{source:{uri:t.src.portrait},style:j.feed}),r.a.createElement(b.a,{style:j.interactionContainer},r.a.createElement(b.a,{style:j.iconMain},r.a.createElement(u.c,{size:25,name:"heart",type:"feather"}),r.a.createElement(u.c,{size:25,name:"comment",type:"fontisto"}),r.a.createElement(u.c,{size:25,name:"paper-plane-o",type:"font-awesome"})),r.a.createElement(u.c,{style:j.iconBookmark,size:25,name:"bookmark",type:"feather",color:"#000"})),r.a.createElement(b.a,{style:j.commentSectionContainer},r.a.createElement(u.e,{style:j.likeCount},"1000 likes"),r.a.createElement(b.a,{style:j.captionConttainer},r.a.createElement(u.e,{style:{fontWeight:"bold",marginRight:5}},"igCloneByTushar"),r.a.createElement(u.e,null,"This is the caption of the above Image")),r.a.createElement(c.a,null,r.a.createElement(u.e,{style:{fontSize:15,color:"grey",marginTop:2,marginBottom:2}},"View all 200 comments")),r.a.createElement(b.a,{style:{display:"flex",flexDirection:"row",marginBottom:5}},r.a.createElement(u.e,{style:{fontWeight:"bold",marginRight:5}},"otherUserName"),r.a.createElement(u.e,null,"This could be a comment on this post"))),r.a.createElement(u.e,{style:{marginLeft:10,color:"grey",fontWeight:"500",marginBottom:5}},"1 DAY AGO"))}}),r.a.createElement(k,null))},j=o.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},headerContainer:{display:"flex",marginTop:35,marginBottom:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:I-15},igLogo:{height:35,width:125,alignSelf:"center"},storyBodyContainer:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:80,width:80,marginTop:1,margin:5,marginBottom:80},stories:{position:"absolute",height:70,width:70,left:5,top:5},userName:{position:"absolute",top:80,marginTop:5},circleGradient:{position:"relative",margin:2,backgroundColor:"white",borderRadius:50,height:80,width:80},radient:{borderRadius:50,position:"absolute",top:3},line:{backgroundColor:"#dbdbdb",width:I,height:2},feedContainer:{},userOptionsContainer:{position:"relative",height:65,width:I,display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},userImg:{position:"absolute",height:40,width:40,borderRadius:50,left:5,top:15},userNameFeed:{position:"absolute",left:55,top:25},moreIcon:{marginLeft:320,top:5},feed:{height:400,width:I},interactionContainer:{display:"flex",flexDirection:"row",height:40,alignItems:"center",justifyContent:"space-around"},iconMain:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:100,margin:10,marginRight:220,height:40},iconBookmark:{marginRight:10},commentSectionContainer:{marginLeft:10},likeCount:{fontWeight:"bold",fontSize:15,marginTop:1,marginBottom:1},captionConttainer:{display:"flex",flexDirection:"row",marginTop:2}}),T=Object(f.a)(),B={headerShown:!1};function L(){return r.a.createElement(h.b,null,r.a.createElement(d.a,null,r.a.createElement(T.Navigator,{initialRouteName:"HomeScreen"},r.a.createElement(T.Screen,{name:"Login",component:g,options:B}),r.a.createElement(T.Screen,{name:"HomeScreen",component:S,options:B}))))}o.a.create({container:{flex:1,backgroundColor:"#000",alignItems:"center",justifyContent:"center"}})},177:function(e,t,n){e.exports=n(243)},234:function(e,t,n){e.exports=n.p+"static/media/igLogo.241fc38c.png"}},[[177,1,2]]]);
//# sourceMappingURL=app.673acd57.chunk.js.map