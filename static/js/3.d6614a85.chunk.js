(this["webpackJsonpreect-kabzda-1"]=this["webpackJsonpreect-kabzda-1"]||[]).push([[3],{296:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__382T7",imgLogo:"ProfileInfo_imgLogo__imJS8"}},297:function(e,t,a){},298:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1oDrF",posts:"MyPosts_posts__W78pH"}},299:function(e,t,a){e.exports={item:"Post_item__2955X"}},300:function(e,t,a){"use strict";a.r(t);var n=a(29),s=a(30),o=a(31),r=a(32),u=a(0),c=a.n(u),i=(a(297),a(42)),l=a(298),p=a.n(l),m=a(299),d=a.n(m),f=function(e){return c.a.createElement("div",{className:d.a.item},c.a.createElement("img",{src:"https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like"),e.likesCount))},b=a(94),E=a(131),g=a(89),h=a(38),v=Object(g.a)(10),k=Object(E.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(b.a,{name:"newPostText",component:h.b,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[g.b,v]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),j=c.a.memo((function(e){console.log("RENDER YO");var t=Object(i.a)(e.posts).reverse().map((function(e){return c.a.createElement(f,{message:e.message,id:e.id,likesCount:e.likesCount})}));c.a.createRef();return c.a.createElement("div",{className:p.a.postsBlock},c.a.createElement("h3",null,"My post"),c.a.createElement(k,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:p.a.posts},t))})),O=a(296),P=a.n(O),S=a(41),_=a(132),w=function(e){var t=Object(u.useState)(!1),a=Object(_.a)(t,2),n=a[0],s=a[1],o=Object(u.useState)(e.status),r=Object(_.a)(o,2),i=r[0],l=r[1];Object(u.useEffect)((function(){l(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"-------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(i)},value:i})))},B=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?c.a.createElement("div",null,c.a.createElement("div",{className:P.a.imgLogo},c.a.createElement("img",{src:"https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"})),c.a.createElement("div",{className:P.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large}),c.a.createElement(w,{status:a,updateStatus:n}))):c.a.createElement(S.a,null)},x=a(57),y=(a(58),a(13)),N=Object(y.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(x.a)(t))}}}))(j),A=function(e){return c.a.createElement("div",null,c.a.createElement(B,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(N,null))},C=a(25),I=(a(141),a(7)),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(c.a.Component);t.default=Object(I.d)(C.f,Object(y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.e}))(T)}}]);
//# sourceMappingURL=3.d6614a85.chunk.js.map