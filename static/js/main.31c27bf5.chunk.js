(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(t,e,i){},17:function(t,e,i){},18:function(t,e,i){"use strict";i.r(e);var r=i(1),s=i.n(r),n=i(7),o=(i(13),i(5)),c=i(6),l=i(8),a=i(0),d=function(){var t={container:{alignItems:"center",backgroundColor:"#349eeb",borderRadius:"100px",display:"flex",height:"90%",justifyContent:"center",position:"relative",verticalAlign:"middle",width:"90%"},inside:{backgroundColor:"white",borderRadius:"100px",height:"80%",position:"absolute",width:"80%"}};return Object(a.jsx)("div",{style:t.container,children:Object(a.jsx)("div",{style:t.inside})})},C=function(){var t={container:{position:"relative",width:"100%",height:"100%"},side1:{backgroundColor:"red",width:"10%",height:"90%",left:"5%",position:"relative",transform:"rotate(45deg)"},side2:{backgroundColor:"red",height:"90%",position:"relative",right:"5%",transform:"rotate(135deg)",width:"10%"}};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:t.side1,children:" "}),Object(a.jsx)("div",{style:t.side2,children:" "})]})},p=function(t){var e=t.position,i=t.value,r=t.takeTurn,s=t.disabled;return Object(a.jsxs)("div",{style:{width:"200px",height:"200px",backgroundColor:"white",padding:0,margin:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onClick:function(){s||"Empty"===i&&r(e)},children:["Circle"===i&&Object(a.jsx)(d,{}),"Cross"===i&&Object(a.jsx)(C,{})]})},u=function(t){var e=t.winner,i={container:{border:"solid",borderRadius:"20px",textAlign:"center",padding:"30px",margin:"20px"},text:{padding:"20px",fontWeight:"700"},button:{padding:"20px",fontWeight:"700"}};return Object(a.jsxs)("div",{style:i.container,"data-testid":"result",children:[Object(a.jsxs)("div",{style:i.text,children:["Circle"===e&&"Circle Wins!","Cross"===e&&"Cross Wins!","Tie"===e&&"It's a Tie!"]}),Object(a.jsx)("button",{type:"button",onClick:function(){window.location.reload()},style:i.button,children:" Reset Game"})]})},j={Empty:"Empty",Circle:"Circle",Cross:"Cross"},b=function(t){return"Circle"===t[0]&&"Circle"===t[1]&&"Circle"===t[2]||"Circle"===t[3]&&"Circle"===t[4]&&"Circle"===t[5]||"Circle"===t[6]&&"Circle"===t[7]&&"Circle"===t[8]||"Circle"===t[0]&&"Circle"===t[3]&&"Circle"===t[6]||"Circle"===t[1]&&"Circle"===t[4]&&"Circle"===t[5]||"Circle"===t[2]&&"Circle"===t[5]&&"Circle"===t[8]||"Circle"===t[0]&&"Circle"===t[4]&&"Circle"===t[8]||"Circle"===t[2]&&"Circle"===t[4]&&"Circle"===t[6]?"Circle":"Cross"===t[0]&&"Cross"===t[1]&&"Cross"===t[2]||"Cross"===t[3]&&"Cross"===t[4]&&"Cross"===t[5]||"Cross"===t[6]&&"Cross"===t[7]&&"Cross"===t[8]||"Cross"===t[0]&&"Cross"===t[3]&&"Cross"===t[6]||"Cross"===t[1]&&"Cross"===t[4]&&"Cross"===t[5]||"Cross"===t[2]&&"Cross"===t[5]&&"Cross"===t[8]||"Cross"===t[0]&&"Cross"===t[4]&&"Cross"===t[8]||"Cross"===t[2]&&"Cross"===t[4]&&"Cross"===t[6]?"Cross":"Empty"!==t[0]&&"Empty"!==t[1]&&"Empty"!==t[2]&&"Empty"!==t[3]&&"Empty"!==t[4]&&"Empty"!==t[5]&&"Empty"!==t[6]&&"Empty"!==t[7]&&"Empty"!==t[8]?"Tie":void 0},y=function(){var t=r.useState(),e=Object(c.a)(t,2),i=e[0],s=e[1],n=r.useState({player:j.Circle,positions:[j.Empty,j.Empty,j.Empty,j.Empty,j.Empty,j.Empty,j.Empty,j.Empty,j.Empty]}),d=Object(c.a)(n,2),C=d[0],y=d[1];r.useEffect((function(){s(b(Object(o.a)(C.positions)))}),[C]);var h=function(t){var e=Object(o.a)(C.positions);e[t]=C.player;var i={player:C.player===j.Circle?j.Cross:j.Circle,positions:e};y(i)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:"auto auto auto",gap:"10px",backgroundColor:"lightgrey"},children:Object(l.range)(0,9).map((function(t){return Object(a.jsx)(p,{position:t,value:C.positions[t],takeTurn:h,disabled:!!i},t)}))}),i&&Object(a.jsx)(u,{winner:i})]})},h=(i(17),function(){return Object(a.jsx)("div",{style:{width:"auto",height:"auto",display:"flex",itemAlign:"center",justifyContent:"center"},children:Object(a.jsx)(y,{})})}),g=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(e){var i=e.getCLS,r=e.getFID,s=e.getFCP,n=e.getLCP,o=e.getTTFB;i(t),r(t),s(t),n(t),o(t)}))};n.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.31c27bf5.chunk.js.map