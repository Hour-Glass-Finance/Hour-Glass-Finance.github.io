(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e295948e"],{"795e6":function(t,e,a){},9546:function(t,e,a){"use strict";a("795e6")},bd53:function(t,e,a){},f4a9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"home-page"},[t.showWarningTip?a("p",{staticClass:"warning-tip ellipsis"},[a("van-icon",{staticClass:"icon-warning",attrs:{name:"warning",color:"#faad14"}}),t._v(" "+t._s(t.$t("home.homeTip"))+" "),a("a",{staticClass:"close-btn",on:{click:function(e){t.showWarningTip=!1}}},[a("van-icon",{attrs:{name:"cross",color:"#ffffff"}})],1)],1):t._e(),a("div",{staticClass:"my-wallet clearfix"},[a("AppHeader")],1),a("div",{staticClass:"home-page-header"},[a("div",{staticClass:"data-wrap"},[a("ul",[a("li",[a("p",{staticClass:"money"}),t.user?a("div",[t.userBalances?a("span",[t._v(t._s(t._f("formatNumber")(t.userBalances["hourUSD"],4)))]):a("span",[a("van-loading",{attrs:{type:"spinner"}})],1)]):a("div",[a("span",[t._v("...")])]),a("p"),a("p",{staticClass:"title"},[t._v("hourUSD")])]),a("li",[a("p",{staticClass:"money"}),t.user?a("div",[t.userBalances?a("span",[t._v(t._s(t._f("formatNumber")(t.userBalances["HOUR"],4)))]):a("span",[a("van-loading",{attrs:{type:"spinner"}})],1)]):a("div",[a("span",[t._v("...")])]),a("p"),a("p"),a("p",{staticClass:"title"},[t._v("HOUR")])])])]),a("ul",{staticClass:"header-link"},[a("router-link",{attrs:{tag:"li",to:"/mint"}},[a("i",{staticClass:"icon-coin"}),a("p",[t._v(t._s(t.$t("home.coin")))])]),a("li",{on:{click:function(e){return t.goPage("redeem")}}},[a("i",{staticClass:"icon-redeem"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.redemption")))])])])],1)]),a("div",{staticClass:"home-page-body"},[a("div",{staticClass:"home-page-body-main"},[t.showSwapMiningPendingRewardsNotice&&t.hasPendingRewards?a("div",{staticClass:"notice-bar-box"},[a("van-notice-bar",{staticClass:"notice unclaimed-reward",attrs:{scrollable:!1}},[a("i",{staticClass:"icon icon-notice"},[a("img",{attrs:{src:t.iconNotice,alt:"icon-notice"}})]),a("span",{staticClass:"params-one"},[t._v(t._s(t.$t("home.noticeYou")))]),a("span",[t._v(t._s(t._f("formatNumber")(t.userDetail["pendingRewards"],4)))]),a("i",{staticClass:"unit"},[t._v("HOUR")])]),a("van-button",{staticClass:"link-primary fr font24 mr20 get-reward",attrs:{loading:t.isClaimingSwapMiningRewards,"loading-text":t.$t("common.claiming")},on:{click:function(e){return t.claimSwapMiningRewards()}}},[t._v(" "+t._s(t.$t("common.claim"))+" ")]),a("a",{staticClass:"close-btn",on:{click:function(e){t.showSwapMiningPendingRewardsNotice=!1}}},[a("van-icon",{attrs:{name:"cross",color:"#333333"}})],1)],1):t._e(),a("div",{staticClass:"serve-con"},[a("ul",{staticClass:"serve-link"},[a("li",{on:{click:function(e){return t.goPage("swap")}}},[a("i",{staticClass:"icon-exchange"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.exchange")))])])]),a("router-link",{attrs:{tag:"li",to:"/comingSoon"}},[a("i",{staticClass:"icon-mining"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.mining")))])])]),a("router-link",{attrs:{tag:"li",to:"/comingSoon"}},[a("i",{staticClass:"icon-vault"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.vault")))])])])],1)]),a("div",{staticClass:"sub-item"},[a("div",{staticClass:"sub-title"},[t._v(t._s(t.$t("home.tradingVolume")))]),a("ul",{staticClass:"coin-link"},[a("li",[a("div",{staticClass:"title"},[a("span",{staticClass:"ml20"},[t._v(t._s(t.$t("home.total")))])]),a("div",{staticClass:"money"},[t.totalSwapVolume?a("span",[a("em",{},[t._v(t._s(t._f("formatNumber")(t.totalSwapVolume,4)))])]):a("span",[a("van-loading",{attrs:{type:"spinner"}})],1)])]),a("li",[a("div",{staticClass:"title"},[a("span",{staticClass:"ml20"},[t._v(t._s(t.$t("home.daily")))])]),a("div",{staticClass:"money"},[t.dailySwapVolume?a("span",[a("em",{},[t._v(t._s(t._f("formatNumber")(t.dailySwapVolume,4)))])]):a("span",[a("van-loading",{attrs:{type:"spinner"}})],1)])])])]),a("div",{staticClass:"sub-item"},[a("div",{staticClass:"sub-title"},[t._v(" "+t._s(t.$t("home.hourglassPoolLiquidity"))+" "),t.liquidities?t._e():a("van-loading",{attrs:{type:"spinner"}})],1),a("ul",{staticClass:"coin-link"},[t.liquidities?a("div",t._l(t.liquidities,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"title"},[a("img",{attrs:{src:t.getUrl(n),alt:""}}),a("span",{staticClass:"ml20"},[t._v(t._s(n))])]),a("div",{staticClass:"money"},[a("span",[a("em",[t._v(t._s(t._f("formatNumber")(e,4)))])])])])})),0):t._e()])])])]),a("app-footer",{attrs:{switchLang:!0}})],1)])},i=[],s=a("1da1"),r=a("5530"),o=(a("99af"),a("96cf"),a("a4ce")),c=a("f657"),l=a("2f62"),u=a("46eb"),p=a("88ba"),d=a("11da"),m=a("90a4"),w=a("901e"),f={name:"home-page",components:{AppHeader:o["a"],AppFooter:c["a"]},data:function(){return{showSwapMiningPendingRewardsNotice:!0,isClaimingSwapMiningRewards:!1,iconNotice:a("1c88"),showWarningTip:!0,totalSwapVolume:null,dailySwapVolume:null,liquidities:null,pid:1,userBalances:null,userDetail:null}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])({user:function(t){return t.wallet.user},chainId:function(t){return t.wallet.chainId},supportedChains:function(t){return t.wallet.supportedChains},isWeb3Initialized:function(t){return t.wallet.isWeb3Initialized}})),{},{hasPendingRewards:function(){return!!(this.userDetail&&this.userDetail["pendingRewards"]&&new w["BigNumber"](this.userDetail["pendingRewards"]).gte(0))}}),methods:{claimSwapMiningRewards:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isClaimingSwapMiningRewards=!0,e.next=4,p["a"](window.web3,t.openTxNotification);case 4:t.showSwapMiningPendingRewardsNotice=!1,t.$notify({type:"success",message:t.$t("toastmsg.claimedToVault")}),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$notify({message:t.$t("toastmsg.claimFailure")}),console.error(e.t0);case 12:return e.prev=12,t.isClaimingSwapMiningRewards=!1,e.finish(12);case 15:t.loadUserDetail();case 16:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))()},getUrl:function(t){return a("USDT"===t?"8f95":"USDC"===t||"USDC"===t?"d9f8":"DAI"===t?"163b":"TUSD"===t?"9ddc":"078d")},connectWallet:function(){this.$router.push({name:"ConnectWallet"})},goPage:function(t){"mint"==t?this.$router.push({name:"Mint"}):"swap"==t?this.$router.push({name:"Swap"}):"redeem"==t&&this.$router.push({name:"Redeem"})},loadUserDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.user){e.next=4;break}return e.next=3,p["b"](window.web3,t.pid,t.user["account"]);case 3:t.userDetail=e.sent;case 4:case"end":return e.stop()}}),e)})))()},loadSwapVolume:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["e"](window.web3);case 2:return t.totalSwapVolume=e.sent,e.next=5,m["a"](window.web3);case 5:t.dailySwapVolume=e.sent;case 6:case"end":return e.stop()}}),e)})))()},loadLiquidities:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"](window.web3);case 2:t.liquidities=e.sent;case 3:case"end":return e.stop()}}),e)})))()},loadUserBalances:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.user){e.next=12;break}a={},n=0,i=["hourUSD","HOUR"];case 3:if(!(n<i.length)){e.next=11;break}return s=i[n],e.next=7,d["e"](window.web3,t.chainId,s,t.user["account"]);case 7:a[s]=e.sent;case 8:n++,e.next=3;break;case 11:t.userBalances=a;case 12:case"end":return e.stop()}}),e)})))()},openTxNotification:function(t){var e="".concat(u["a"][this.chainId]["scanLink"],"/tx/").concat(t);this.$dialog.confirm({title:"Transaction Submitted",message:t,cancelButtonText:"Confirm",confirmButtonText:"View Transanction"}).then((function(){window.open(e,"_blank")})).catch((function(){}))}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("initWeb3");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.$notify({type:"danger",message:e.t0.message});case 8:t.loadSwapVolume(),t.loadLiquidities(),t.loadUserBalances(),t.loadUserDetail();case 12:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},g=f,h=(a("f962"),a("9546"),a("2877")),v=Object(h["a"])(g,n,i,!1,null,"6f2a8534",null);e["default"]=v.exports},f962:function(t,e,a){"use strict";a("bd53")}}]);