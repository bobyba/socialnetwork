(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[3],{250:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n(41),r=n(42),o=n(44),s=n(43),u=n(0),c=n.n(u),i=n(8),l=n(18),p=function(t){return{isAuth:t.auth.isAuth}},m=function(t){var e=function(e){Object(o.a)(u,e);var n=Object(s.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(t,this.props):c.a.createElement(i.a,{to:"login/"})}}]),u}(c.a.Component);return Object(l.b)(p)(e)}},252:function(t,e,n){t.exports={content:"profileinfo_content__109OM",descriptionBlock:"profileinfo_descriptionBlock__14yHr"}},255:function(t,e,n){t.exports={content:"content_content__1idtu"}},256:function(t,e,n){t.exports={content:"MyPosts_content__3reYz",postsBlock:"MyPosts_postsBlock__4eDPQ",posts:"MyPosts_posts__38GZw"}},257:function(t,e,n){t.exports={item:"Post_item__rRPvn"}},263:function(t,e,n){"use strict";n.r(e);var a,r=n(41),o=n(42),s=n(44),u=n(43),c=n(0),i=n.n(c),l=n(18),p=n(255),m=n.n(p),f=n(256),d=n.n(f),h=n(257),v=n.n(h),b=function(t){return i.a.createElement("div",{className:v.a.item},i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"}),t.message,i.a.createElement("div",null,i.a.createElement("span",null,"LIKE")))},E=n(248),y=n(247),g=(a=10,Object(y.a)({form:"ProfileAddNewPost"})((function(t){return i.a.createElement("form",{onSubmit:t.onHandleSubmit},i.a.createElement("div",null,i.a.createElement(E.a,{component:"textarea",name:"NewPostBody"})),i.a.createElement("button",null,"Add post"))}))),P=function(t){console.log("Render");var e=t.arrPosts.map((function(t){return i.a.createElement(b,{message:t.message})}));return i.a.createElement("div",{className:d.a.postsBlock},i.a.createElement("div",null,i.a.createElement("h3",null,"My posts")),i.a.createElement(g,{onSubmit:function(e){t.addPostActionCreator(e.NewPostBody)}}),i.a.createElement("div",null,i.a.createElement("div",{className:d.a.posts},e)))},j=n(252),k=n.n(j),_=n(33);i.a.Component;var O=n(81);function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(a=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==u.return||u.return()}finally{if(r)throw o}}return n}}(t,e)||Object(O.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(t){var e=S(Object(c.useState)(!1),2),n=e[0],a=e[1],r=S(Object(c.useState)(t.status),2),o=r[0],s=r[1];Object(c.useEffect)((function(){s(t.status)}),[t.status]);return i.a.createElement(i.a.Fragment,null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){a(!0)}},o||"No Status")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){s(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(o)},value:o})))},N=function(t){return t.profile?i.a.createElement("div",{className:k.a.content},i.a.createElement("div",null,i.a.createElement("img",{src:"https://img1.goodfon.ru/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"})),i.a.createElement("div",{className:k.a.descriptionBlock},i.a.createElement("img",{src:t.profile.photos.large}),"ava + descr"),i.a.createElement(w,{status:t.status,updateStatus:t.update})):i.a.createElement(_.a,null)},T=n(79),x=Object(l.b)((function(t){return{arrPosts:t.postPage.arrPosts,newPostText:t.postPage.newPostText}}),{addPostActionCreator:T.a})(P),A=function(t){return i.a.createElement("div",{className:m.a.content},i.a.createElement(N,{profile:t.profile,status:t.status,update:t.update}),i.a.createElement(x,null))},B=n(8),C=n(250),M=n(7),I=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t="8948"),this.props.getUserProfileThunk(t),this.props.getStatusThunk(t)}},{key:"render",value:function(){return i.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,update:this.props.updateStatusThunk}))}}]),n}(i.a.Component);e.default=Object(M.d)(Object(l.b)((function(t){return{profile:t.postPage.profile,status:t.postPage.status}}),{getUserProfileThunk:T.d,getStatusThunk:T.c,updateStatusThunk:T.e}),C.a,B.f)(I)}}]);
//# sourceMappingURL=3.7a38bf53.chunk.js.map