(this["webpackJsonpplw-lms"]=this["webpackJsonpplw-lms"]||[]).push([[0],{75:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),c=(a(75),a(50)),l=a.n(c),s=a(58),d=a(19),b=a(51);a(89);b.a.initializeApp({apiKey:"AIzaSyAFTA1AUxOG5ukRv2oQsc4t4TTf_-qKY88",authDomain:"nsbm-spm-plw-lms.firebaseapp.com",projectId:"nsbm-spm-plw-lms",storageBucket:"nsbm-spm-plw-lms.appspot.com",messagingSenderId:"206652651828",appId:"1:206652651828:web:9d6940505da75c6a014d61"});var u=b.a.firestore(),j=a(119),f=a(123),h=a(46),O=a(124),m=a(91),p=a(125),x=a(6);var v=Object(p.a)((function(){return{appBar:{padding:"1rem 0 2rem 0",alignItems:"center"},header:{width:"100%",margin:"0 auto 2rem auto"},headerText:{width:"50%",margin:"0 auto",textAlign:"center"},navBtnGroup:{width:"50%",border:"0.1rem solid #3f51b5",background:"white",borderRadius:"5px",boxShadow:"0 0 0.5rem #ffffff"}}})),g=function(e){var t=e.setBookListOpen,a=e.setBookAddOpen,n=v();return Object(x.jsxs)(j.a,{position:"fixed",className:n.appBar,elevation:3,color:"primary",children:[Object(x.jsx)("div",{className:n.header,children:Object(x.jsx)(f.a,{children:Object(x.jsx)(h.a,{variant:"h2",component:"h1",className:n.headerText,children:"Library Management System"})})}),Object(x.jsx)("div",{className:n.navBtnGroup,children:Object(x.jsxs)(O.a,{color:"primary","aria-label":"outlined primary button group",fullWidth:!0,children:[Object(x.jsx)(m.a,{onClick:function(){a(!0),t(!1)},children:"Add New Book"}),Object(x.jsx)(m.a,{onClick:function(){t(!0),a(!1)},children:"List All Books"})]})})]})},k=a(53),y=a(131);var w={addbook:{display:"flex",flexDirection:"column",width:"50%",margin:"15rem auto"},field:{margin:"0 0 1rem 0"},addedSuccess:{color:"blue",fontFamily:"Roboto",margin:"2rem auto"}},S=function(e){var t=e.onAdd,a=Object(n.useState)(""),i=Object(d.a)(a,2),r=i[0],o=i[1],c=Object(n.useState)(""),l=Object(d.a)(c,2),s=l[0],b=l[1],u=Object(n.useState)(""),j=Object(d.a)(u,2),f=j[0],O=j[1],p=Object(n.useState)(""),v=Object(d.a)(p,2),g=v[0],S=v[1],B=Object(n.useState)(""),A=Object(d.a)(B,2),I=A[0],C=A[1],T=Object(n.useState)(!1),L=Object(d.a)(T,2),D=L[0],N=L[1];return Object(x.jsxs)("div",{style:w.addbook,children:[Object(x.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),r&&s&&f&&g&&I)?(t({title:r,isbn:s,author:f,genre:g,publisher:I}),o(""),b(""),O(""),S(""),C(""),N(!0),setTimeout((function(){return N(!1)}),1e3)):alert("Please Add All the Infomation About the Book!")},children:[Object(x.jsx)(y.a,{id:"filled-basic",label:"Title",variant:"filled",fullWidth:!0,value:r,onChange:function(e){return o(e.target.value)},style:w.field,role:"new-book-title"}),Object(x.jsx)(y.a,{id:"filled-basic",label:"ISBN",variant:"filled",fullWidth:!0,value:s,onChange:function(e){return b(e.target.value)},style:w.field,role:"new-book-isbn"}),Object(x.jsx)(y.a,{id:"filled-basic",label:"Author",variant:"filled",fullWidth:!0,value:f,onChange:function(e){return O(e.target.value)},style:w.field,role:"new-book-author"}),Object(x.jsx)(y.a,{id:"filled-basic",label:"Genre",variant:"filled",fullWidth:!0,value:g,onChange:function(e){return S(e.target.value)},style:w.field,role:"new-book-genre"}),Object(x.jsx)(y.a,{id:"filled-basic",label:"Publisher",variant:"filled",fullWidth:!0,value:I,onChange:function(e){return C(e.target.value)},style:w.field,role:"new-book-publisher"}),Object(x.jsx)(m.a,{type:"submit",color:"primary",variant:"outlined",fullWidth:!0,role:"new-book-submit",children:"Add Book"})]}),Object(x.jsx)(h.a,{variant:"body1",color:"primary",style:Object(k.a)(Object(k.a)({},w.addedSuccess),{},{visibility:D?"visible":"hidden"}),role:"new-book-add-success",children:"The Book is Added to the Database"})]})},B=a(129),A=a(130),I=a(126),C=a(127),T=a(132),L=a(128),D=a(64),N=a.n(D);function W(e){var t=e.book;return Object(x.jsx)("div",{children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)(C.a,{avatar:Object(x.jsx)(T.a,{children:Object(x.jsx)(N.a,{})}),title:t.title,subheader:t.isbn}),Object(x.jsxs)(L.a,{children:[Object(x.jsxs)(h.a,{variant:"body2",color:"textSecondary",children:["Author: ",t.author]}),Object(x.jsxs)(h.a,{variant:"body2",color:"textSecondary",children:["Genre: ",t.genre]}),Object(x.jsxs)(h.a,{variant:"body2",color:"textSecondary",children:["Publisher: ",t.publisher]})]})]})})}var F={listBook:{display:"flex",flexDirection:"column",width:"50%",margin:"15rem auto"},listBookItem:{display:"flex",flexDirection:"column",width:"100%",margin:"0.5rem auto"}},G=function(e){var t=e.booksList,a=Object(n.useState)([]),i=Object(d.a)(a,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){o(t)}),[t]),Object(x.jsx)("div",{style:F.listBook,children:Object(x.jsx)(B.a,{children:Object(x.jsx)(A.a,{container:!0,children:r.map((function(e,t){return Object(x.jsx)("div",{style:F.listBookItem,children:Object(x.jsx)(A.a,{item:!0,children:Object(x.jsx)(W,{book:e})})},t)}))})})})};a(86);var P=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),c=o[0],b=o[1],j=Object(n.useState)(!0),f=Object(d.a)(j,2),h=f[0],O=f[1];Object(n.useEffect)((function(){m()}),[a]);var m=function(){u.collection("books").orderBy("title").get().then((function(e){var t=[];e.docs.forEach((function(e){t.push(e.data())})),i(t)}))},p=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.collection("books").add(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(g,{setBookAddOpen:O,setBookListOpen:b}),h&&Object(x.jsx)(S,{onAdd:p}),c&&Object(x.jsx)(G,{booksList:a})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root")),E()}},[[87,1,2]]]);
//# sourceMappingURL=main.b0e1f1aa.chunk.js.map