(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{34:function(e,t,O){},56:function(e,t,O){},58:function(e,t,O){"use strict";O.r(t);var r=O(0),n=O.n(r),a=O(9),c=O.n(a),o=O(8),T=(O(34),O(3)),_=O.n(T),E=O(5),D=O(6),i=O.n(D),l={FETCH_TODO_LOADING:"FETCH_TODO_LOADING",FETCH_TODO_SUCCESS:"FETCH_TODO_SUCCESS",FETCH_TODO_FAILURE:"FETCH_TODO_FAILURE",POST_TODO_LOADING:"POST_TODO_LOADING",POST_TODO_SUCCESS:"POST_TODO_SUCCESS",POST_TODO_FAILURE:"POST_TODO_FAILURE",DELETE_TODO_LOADING:"DELETE_TODO_LOADING",DELETE_TODO_SUCCESS:"DELETE_TODO_SUCCESS",DELETE_TODO_FAILURE:"DELETE_TODO_FAILURE",UPDATE_TODO_LOADING:"UPDATE_TODO_LOADING",UPDATE_TODO_SUCCESS:"UPDATE_TODO_SUCCESS",UPDATE_TODO_FAILURE:"UPDATE_TODO_FAILURE",GET_TODO_LOADING:"GET_TODO_LOADING",GET_TODO_SUCCESS:"GET_TODO_SUCCESS",GET_TODO_FAILURE:"GET_TODO_FAILURE"},s=O(4),u=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e}));return Object(r.useEffect)((function(){var t;e((t=5,function(){var e=Object(E.a)(_.a.mark((function e(O){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O({type:l.GET_TODO_LOADING}),e.prev=1,e.next=4,i()({method:"get",url:"https://boiling-shelf-13431.herokuapp.com/api/v1/todos/".concat(t),headers:{"Content-Type":"application/json",token:"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w"}});case 4:r=e.sent,O({type:l.GET_TODO_SUCCESS,payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O({type:l.GET_TODO_FAILURE,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[]),console.log("#################"),console.log(t),console.log("###############"),Object(s.jsx)("div",{className:"App",children:"working"})};O(56);var d=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})},S=O(7),j=O(22),b=O(23),C=O.n(b),g=O(1),A={items:[],loading:!1,error:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.FETCH_TODO_LOADING:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case l.FETCH_TODO_SUCCESS:return Object(g.a)(Object(g.a)({},e),{},{items:t.payload,loading:!0});case l.FETCH_TODO_FAILURE:return Object(g.a)(Object(g.a)({},e),{},{error:t.error});default:return e}},U={item:{},loading:!1,error:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.POST_TODO_LOADING:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case l.POST_TODO_SUCCESS:return Object(g.a)(Object(g.a)({},e),{},{item:t.payload,loading:!0});case l.POST_TODO_FAILURE:return Object(g.a)(Object(g.a)({},e),{},{error:t.error});default:return e}},I={message:null,loading:!1,error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.DELETE_TODO_LOADING:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case l.DELETE_TODO_SUCCESS:return Object(g.a)(Object(g.a)({},e),{},{message:t.payload,loading:!0});case l.DELETE_TODO_FAILURE:return Object(g.a)(Object(g.a)({},e),{},{error:t.error});default:return e}},G={message:null,loading:!1,error:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.UPDATE_TODO_LOADING:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case l.UPDATE_TODO_SUCCESS:return Object(g.a)(Object(g.a)({},e),{},{message:t.payload,loading:!0});case l.UPDATE_TODO_FAILURE:return Object(g.a)(Object(g.a)({},e),{},{error:t.error});default:return e}},F={message:null,loading:!1,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.GET_TODO_LOADING:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case l.GET_TODO_SUCCESS:return Object(g.a)(Object(g.a)({},e),{},{item:t.payload,loading:!0});case l.GET_TODO_FAILURE:return Object(g.a)(Object(g.a)({},e),{},{error:t.error});default:return e}},P=Object(S.b)({TodoReducer:L,PostTodoReducer:p,DeleteTodoReducer:h,UpdateTodoReducer:f,GetTodoReducer:v}),R=Object(S.c)(P,Object(S.a)(j.a,C.a)),y=function(e){e&&e instanceof Function&&O.e(3).then(O.bind(null,59)).then((function(t){var O=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;O(e),r(e),n(e),a(e),c(e)}))};c.a.render(Object(s.jsx)(o.a,{store:R,children:Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(d,{})})}),document.getElementById("root")),y()}},[[58,1,2]]]);
//# sourceMappingURL=main.cc6eb6b2.chunk.js.map