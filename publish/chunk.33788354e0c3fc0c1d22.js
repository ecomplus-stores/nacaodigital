(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{262:function(t,i,o){var e=o(271);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(203).default)("6cc07505",e,!0,{})},269:function(t,i,o){"use strict";var e={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:t,zIndex:i,transitionMs:o,opacity:e}=this;return{top:t,transition:"opacity ".concat(o,"ms linear"),opacity:e,zIndex:i}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(t){0===t?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(o(270),o(61)),s=Object(a.a)(e,(function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"backdrop",style:t.style,on:{click:t.hide}})}),[],!1,null,null,null);i.a=s.exports},270:function(t,i,o){"use strict";o(262)},271:function(t,i,o){(i=o(202)(!0)).push([t.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),t.exports=i},273:function(t,i,o){"use strict";var e=o(33),a=o(52),s={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(e.K)},watch:{canShow(t){t&&this.count++}}},n=o(61),r=Object(n.a)(s,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[t.canShow?o("div",{key:t.count},[t._m(0)]):t._e()])],1)}),[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+t.variant,attrs:{role:"alert"}},[t._t("default"),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":t.i19close},on:{click:function(i){return t.$emit("dismiss")}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2)}],!1,null,null,null);i.a=r.exports},312:function(t,i,o){var e=o(354);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(203).default)("5ba7bbf2",e,!0,{})},353:function(t,i,o){"use strict";o(312)},354:function(t,i,o){(i=o(202)(!0)).push([t.i,".login-modal__box{border-radius:0;box-sizing:border-box;left:0;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:410px){.login-modal__box{border-radius:var(--border-radius);left:50%;margin-left:-200px;top:var(--spacer-4);width:400px}}@media(min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;line-height:var(--line-height-lg);min-width:15rem;padding:.7rem;text-align:left}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;margin-right:var(--spacer-1);text-align:center;width:1.4rem}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{color:var(--text-muted);font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center}","",{version:3,sources:["LoginModal.scss"],names:[],mappings:"AAAA,kBAAkB,eAAe,CAAC,qBAAqB,CAAC,MAAM,CAAC,cAAc,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,wBAAwB,kBAAkB,kCAAkC,CAAC,QAAQ,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,WAAW,CAAC,CAAC,yBAAyB,kBAAkB,OAAO,CAAC,CAAC,oBAAoB,6BAA6B,CAAC,qBAAqB,0BAA0B,CAAC,kBAAkB,UAAU,CAAC,iCAAiC,CAAC,eAAe,CAAC,aAAa,CAAC,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,eAAe,CAAC,4BAA4B,kBAAkB,CAAC,oBAAoB,CAAC,kCAAkC,kBAAkB,CAAC,oBAAoB,CAAC,0BAA0B,kBAAkB,CAAC,oBAAoB,CAAC,gCAAgC,kBAAkB,CAAC,oBAAoB,CAAC,+BAA+B,kBAAkB,CAAC,oBAAoB,CAAC,qCAAqC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAuB,oBAAoB,CAAC,4BAA4B,CAAC,iBAAiB,CAAC,YAAY,CAAC,mBAAmB,aAAa,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,yBAAyB,eAAe,CAAC,2BAA2B,uBAAuB,CAAC,6BAA6B,CAAC,0BAA0B,CAAC,iBAAiB",file:"LoginModal.scss",sourcesContent:[".login-modal__box{border-radius:0;box-sizing:border-box;left:0;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:410px){.login-modal__box{border-radius:var(--border-radius);left:50%;margin-left:-200px;top:var(--spacer-4);width:400px}}@media(min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;line-height:var(--line-height-lg);min-width:15rem;padding:.7rem;text-align:left}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;margin-right:var(--spacer-1);text-align:center;width:1.4rem}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{color:var(--text-muted);font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center}"]}]),t.exports=i},412:function(t,i,o){"use strict";o.r(i);var e=o(44),a=(o(43),o(33)),s=o(52),n=o(40),r=o(216),l=o(273),c=o(269),d={name:"LoginModal",components:{ALink:r.a,AAlert:l.a,ABackdrop:c.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},favoritesUrl:{type:String,default:"/app/#/account/favorites"},ecomPassport:{type:Object,default:()=>n.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",emailCode:null,oauthProviders:[],isLoginForm:!1,isEmailCodeSent:!1,hasLoginError:!1,hasNoProfileFound:!1,isWrongCode:!1}),computed:{i19close:()=>Object(s.a)(a.K),i19continueLoginOnPopup:()=>Object(s.a)(a.U),i19email:()=>Object(s.a)(a.ib).toLowerCase(),i19enterEmailCodeMsg:()=>Object(s.a)(a.mb),i19guestCheckoutMsg:()=>Object(s.a)(a.Eb),i19incorrectEmailCodeMsg:()=>Object(s.a)(a.Mb),i19loginErrorMsg:()=>Object(s.a)(a.Yb),i19login:()=>Object(s.a)(a.Xb),i19logout:()=>Object(s.a)(a.ac),i19myAccount:()=>Object(s.a)(a.hc),i19myFavorites:()=>Object(s.a)(a.ic),i19myOrders:()=>Object(s.a)(a.jc),i19noProfileFoundWithEmail:()=>Object(s.a)(a.rc),i19signInWith:()=>Object(s.a)(a.Gd),i19signInWithAnotherEmail:()=>Object(s.a)(a.Hd),i19signUp:()=>Object(s.a)(a.Id),i19signUpWith:()=>Object(s.a)(a.Jd),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):"".concat(Object(s.a)(a.Gb)," ").concat(this.name||Object(s.a)(a.ce))}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:t,getCustomerName:i}=this.ecomPassport;this.name=i(),this.isLogged=t(),this.email="",this.isWaitingPopup=!1},waitPromise(t){this.isLoading=!0,t.catch(console.error).finally((()=>{this.isLoading=!1}))},setOauthProviders(){const t=this.ecomPassport.fetchOauthProviders().then((t=>{let{host:i,baseUri:o,oauthPath:e,providers:a}=t;const s=[];for(const t in a)if(a[t]){const{faIcon:n,providerName:r}=a[t];s.push({link:i+o+t+e,faIcon:n,provider:t,providerName:r})}this.oauthProviders=s})).catch((t=>{throw this.presetOauthProviders(),t}));return this.waitPromise(t),t},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(t,i){if(this.hasLoginError=!1,t)this.ecomPassport.popupOauthLink(t),this.isWaitingPopup=!0;else{const t=this.setOauthProviders().then((()=>{const t=this.oauthProviders.find((t=>t.provider===i));this.openOauthPopup(t,i)})).catch((t=>{throw this.hasLoginError=!0,t}));this.waitPromise(t)}},submitEmail(){this.isLoginForm=!1;const t=this.ecomPassport.fetchLogin(this.email.toLowerCase(),null,this.emailCode).catch((t=>{const{response:i}=t;if(!i||403!==i.status)throw setTimeout((()=>{this.hasLoginError=!0}),100),t;this.hasNoProfileFound=!0,this.isEmailCodeSent&&(this.isLoginForm=!0,this.isWrongCode=!0)}));this.waitPromise(t)},signUpEmail(){if(this.email)if(this.isEmailCodeSent)this.isLoginForm=!0;else{const t=this.ecomPassport.sendEmailCode(this.email).then((()=>new Promise((t=>{setTimeout((()=>{this.isLoginForm=this.isEmailCodeSent=!0,t()}),2e3)})))).catch((t=>{console.error(t),this.hasLoginError=!0}));this.waitPromise(t)}},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(t){!1===t&&(this.email="",this.isEmailCodeSent=!1),this.isLoginForm=!t},isLoginForm(t){this.hasLoginError=!1,t&&(this.isWaitingPopup=!1,this.$nextTick((()=>{setTimeout((()=>{this.$refs[this.email?"inputCode":"input"].focus()}),200)})))},isEmailCodeSent(t){t||(this.emailCode=null,this.hasNoProfileFound=!1)},emailCode(){this.isWrongCode=!1}},mounted(){["login","logout"].forEach((t=>{this.ecomPassport.on(t,(i=>{this.update(),this.$emit(t,i)}))})),this.update(),this.setOauthProviders()}},m=(o(353),o(61)),u=Object(m.a)(d,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"login-modal"},[o("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),o("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[t._t("header",(function(){return[o("div",{staticClass:"login-modal__header card-header"},[t._v(" "+t._s(t.greetings)+" "),o("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]})),o("div",{staticClass:"login-modal__body card-body"},[t.hasLoginError?o("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19loginErrorMsg)+" ")]):t._e(),o("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[t.isLoading?o("div",{key:"waiting"},[o("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):t.isLogged?o("div",{key:"logged"},[o("div",{staticClass:"list-group list-group-flush"},[o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.ordersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]),o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.accountUrl}},[t._v(" "+t._s(t.i19myAccount)+" ")]),o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.favoritesUrl}},[t._v(" "+t._s(t.i19myFavorites)+" ")])],1),o("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:t.logout}},[o("i",{staticClass:"i-sign-out"}),t._v(" "+t._s(t.i19logout)+" ")])]):t.isLoginForm?o("div",{key:"form"},[o("form",{on:{submit:function(i){return i.preventDefault(),t.submitEmail.apply(null,arguments)}}},[o("div",{staticClass:"form-group"},[o("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(i){t.isLoginForm=!1}}},[o("i",{staticClass:"i-arrow-left"})]),t.isEmailCodeSent?t._e():o("label",{attrs:{for:"login-modal-email"}},[t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:"",readonly:t.isEmailCodeSent},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}})]),t.isEmailCodeSent?o("div",{staticClass:"form-group"},[o("a-alert",{attrs:{"can-show":t.isWrongCode,variant:"warning"}},[t._v(" "+t._s(t.i19incorrectEmailCodeMsg)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.emailCode,expression:"emailCode",modifiers:{number:!0}}],ref:"inputCode",staticClass:"form-control",attrs:{type:"number",id:"login-modal-email-code",placeholder:"999999",min:"100000",max:"999999",maxlength:"6",required:""},domProps:{value:t.emailCode},on:{input:function(i){i.target.composing||(t.emailCode=t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}}),o("div",{staticClass:"form-text"},[t._v(" "+t._s(t.i19enterEmailCodeMsg)+" ")]),o("a",{attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.isEmailCodeSent=!1}}},[t._v(" "+t._s(t.i19signInWithAnotherEmail)+" ")])],1):t._e(),o("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19login)+" ")])])]):o("div",{key:"oauth"},[!t.isWaitingPopup&&t.hasNoProfileFound?o("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19noProfileFoundWithEmail)+" "),o("b",[t._v(t._s(t.email))]),t._v(". "),o("br"),o("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.signUpEmail.apply(null,arguments)}}},[t._v(" "+t._s(t.i19signUp)+" ")]),o("br"),o("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.hasNoProfileFound=!1}}},[t._v(" "+t._s(t.i19signInWithAnotherEmail)+" ")])]):t._e(),o("a-alert",{attrs:{"can-show":t.isWaitingPopup,variant:"info"}},[t._v(" "+t._s(t.i19continueLoginOnPopup)+". ")]),t._l(t.oauthProviders,(function(i){var e=i.link,a=i.faIcon,s=i.providerName,n=i.provider;return o("button",{key:n,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+n,attrs:{type:"button"},on:{click:function(i){return t.openOauthPopup(e,n)}}},[o("span",{staticClass:"login-modal__btn-icon"},[o("i",{class:"fab "+a})]),t._v(" "+t._s(t.hasNoProfileFound?t.i19signUpWith:t.i19signInWith)+" "+t._s(s)+" ")])})),t.hasNoProfileFound?o("div",{staticClass:"login-modal__visitor-info"},[t._v(" "+t._s(t.i19guestCheckoutMsg)+" ")]):o("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(i){t.isLoginForm=!0}}},[o("span",{staticClass:"login-modal__btn-icon"},[o("i",{staticClass:"i-envelope"})]),t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null),A=u.exports;i.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"login-modal",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user-button";const a=document.getElementById(i),s=document.getElementById(o);if(a&&s){const o=window.storefront&&window.storefront.getScopedSlots;new e.a({data:{isVisible:!1},created(){s.addEventListener("click",(t=>{t.preventDefault(),this.isVisible=!0}))},render(e){const s=this;return e(A,{attrs:{id:i},props:{...t.props,isVisible:s.isVisible},on:{"update:is-visible"(t){s.isVisible=t}},scopedSlots:"function"==typeof o?o(a,e):void 0})}}).$mount(a)}}}}]);