(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99b12b02"],{"035e":function(t,i,a){"use strict";a("c09b")},"795e6":function(t,i,a){},9546:function(t,i,a){"use strict";a("795e6")},c09b:function(t,i,a){},f4a9:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.initialized?a("div",{staticClass:"content"},[a("div",{staticClass:"home-page"},[t.showWarningTip?a("p",{staticClass:"warning-tip ellipsis"},[a("van-icon",{staticClass:"icon-warning",attrs:{name:"warning",color:"#faad14"}}),t._v(" "+t._s(t.$t("home.homeTip"))+" "),a("a",{staticClass:"close-btn",on:{click:function(i){t.showWarningTip=!1}}},[a("van-icon",{attrs:{name:"cross",color:"#ffffff"}})],1)],1):t._e(),a("div",{staticClass:"my-wallet clearfix"},[a("AppHeader",{attrs:{accountAddress:t.userAccount}})],1),a("div",{staticClass:"home-page-header"},[a("div",{staticClass:"data-wrap"},[a("ul",[a("li",[a("p",{staticClass:"money"},[null!=t.userBalances?a("span",[t._v(t._s(t._f("formatNumber")(t.userBalances["hourUSD"],4)))]):a("span",[t._v("--")])]),a("p",{staticClass:"title"},[t._v("hourUSD")])]),a("li",[a("p",{staticClass:"money"},[null!=t.userBalances?a("span",[t._v(t._s(t._f("formatNumber")(t.userBalances["HOUR"],4)))]):a("span",[t._v("--")])]),a("p"),a("p",{staticClass:"title"},[t._v("HOUR")])])])]),a("ul",{staticClass:"header-link"},[a("router-link",{attrs:{tag:"li",to:"/mint"}},[a("i",{staticClass:"icon-coin"}),a("p",[t._v(t._s(t.$t("home.coin")))])]),a("li",{on:{click:function(i){return t.goPage("redeem")}}},[a("i",{staticClass:"icon-redeem"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.redemption")))])])])],1)]),a("div",{staticClass:"home-page-body"},[a("div",{staticClass:"home-page-body-main"},[t.showSwapMiningPendingRewardsNotice&&t.hasPendingSwapMiningRewards?a("div",{staticClass:"notice-bar-box"},[a("van-notice-bar",{staticClass:"notice unclaimed-reward",attrs:{scrollable:!1}},[a("i",{staticClass:"icon icon-notice"},[a("img",{attrs:{src:t.iconNotice,alt:"icon-notice"}})]),a("span",{staticClass:"params-one"},[t._v(t._s(t.$t("home.noticeYou")))]),a("span",[t._v(t._s(t._f("formatNumber")(t.swapMiningPoolDetail["user"]["pendingRewards"],4)))]),a("i",{staticClass:"unit"},[t._v("HOUR")])]),a("van-button",{staticClass:"link-primary fr font24 mr20 get-reward",attrs:{loading:t.isClaimingSwapMiningRewards,"loading-text":t.$t("common.claiming")},on:{click:function(i){return t.claimSwapMiningRewards()}}},[t._v(" "+t._s(t.$t("common.claim"))+" ")]),a("a",{staticClass:"close-btn",on:{click:function(i){t.showSwapMiningPendingRewardsNotice=!1}}},[a("van-icon",{attrs:{name:"cross",color:"#333333"}})],1)],1):t._e(),a("div",{staticClass:"serve-con"},[a("ul",{staticClass:"serve-link"},[a("li",{on:{click:function(i){return t.goPage("swap")}}},[a("i",{staticClass:"icon-exchange"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.exchange")))])])]),a("router-link",{attrs:{tag:"li",to:"/comingSoon"}},[a("i",{staticClass:"icon-mining"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.mining")))])])]),a("router-link",{attrs:{tag:"li",to:"/comingSoon"}},[a("i",{staticClass:"icon-vault"}),a("p",{staticClass:"text"},[a("span",[t._v(t._s(t.$t("home.vault")))])])])],1)]),a("div",{staticClass:"sub-item"},[a("div",{staticClass:"sub-title"},[t._v(t._s(t.$t("home.tradingVolume")))]),a("ul",{staticClass:"coin-link"},[a("li",[a("div",{staticClass:"title"},[a("span",{staticClass:"ml20"},[t._v(t._s(t.$t("home.total")))])]),a("div",{staticClass:"money"},[a("span",[a("em",{},[t._v(t._s(t._f("formatNumber")(t.totalSwapVolume,4)))])])])]),a("li",[a("div",{staticClass:"title"},[a("span",{staticClass:"ml20"},[t._v(t._s(t.$t("home.daily")))])]),a("div",{staticClass:"money"},[a("span",[a("em",{},[t._v(t._s(t._f("formatNumber")(t.dailySwapVolume,4)))])])])])])]),a("div",{staticClass:"sub-item"},[a("div",{staticClass:"sub-title"},[t._v(t._s(t.$t("home.hourglassPoolLiquidity")))]),a("ul",{staticClass:"coin-link"},[t.liquidities?a("div",t._l(t.liquidities,(function(i,s){return a("li",{key:s},[a("div",{staticClass:"title"},[a("img",{attrs:{src:t.getUrl(s),alt:""}}),a("span",{staticClass:"ml20"},[t._v(t._s(s))])]),a("div",{staticClass:"money"},[a("span",[a("em",[t._v(t._s(t._f("formatNumber")(i,4)))])])])])})),0):a("div",t._l(t.liquiditiesPlaceHolder,(function(i,s){return a("li",{key:s},[a("div",{staticClass:"title"},[a("img",{attrs:{src:t.getUrl(s),alt:""}}),a("span",{staticClass:"ml20"},[t._v(t._s(s))])]),a("div",{staticClass:"money"},[a("span",[a("em",[t._v(t._s(t._f("formatNumber")(i,4)))])])])])})),0)])])])]),a("app-footer",{attrs:{switchLang:!0}})],1)]):t._e()},e=[],n=a("1da1"),o=a("b85c"),l=a("5530"),r=(a("96cf"),a("b0c0"),a("2f62")),c=a("a4ce"),u=a("f657"),p=a("901e"),m={name:"home-page",components:{AppHeader:c["a"],AppFooter:u["a"]},data:function(){return{initialized:!1,showSwapMiningPendingRewardsNotice:!0,isClaimingSwapMiningRewards:!1,iconNotice:a("1c88"),showWarningTip:!0,liquiditiesPlaceHolder:{USDT:null,USDC:null}}},computed:Object(l["a"])(Object(l["a"])({},Object(r["c"])({liquidities:function(t){return t.hourglassPool.liquidities},totalSwapVolume:function(t){return t.hourglassPool.totalSwapVolume},dailySwapVolume:function(t){return t.hourglassPool.dailySwapVolume},swapMiningPoolDetails:function(t){return t.swapMining.poolDetails},userBalances:function(t){return t.wallet.balances},userAccount:function(t){return t.wallet.account}})),{},{swapMiningPoolDetail:function(){if(this.swapMiningPoolDetails){var t,i=Object(o["a"])(this.swapMiningPoolDetails);try{for(i.s();!(t=i.n()).done;){var a=t.value;if("hourUSD"==a["name"])return a}}catch(s){i.e(s)}finally{i.f()}}},hasPendingSwapMiningRewards:function(){return this.swapMiningPoolDetail&&this.swapMiningPoolDetail["user"]&&new p["BigNumber"](this.swapMiningPoolDetail["user"]["pendingRewards"]).isGreaterThan(1)}}),methods:{claimSwapMiningRewards:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,t.isClaimingSwapMiningRewards=!0,i.next=4,t.$store.dispatch("swapMiningClaimAll");case 4:t.showSwapMiningPendingRewardsNotice=!1,t.$notify({type:"success",message:t.$t("toastmsg.claimedToVault")}),i.next=12;break;case 8:i.prev=8,i.t0=i["catch"](0),t.$notify({message:t.$t("toastmsg.claimFailure")}),console.error(i.t0);case 12:return i.prev=12,t.isClaimingSwapMiningRewards=!1,t.$store.dispatch("swapMiningLoadPoolDetails"),i.finish(12);case 16:case"end":return i.stop()}}),i,null,[[0,8,12,16]])})))()},getUrl:function(t){return a("USDT"===t?"8f95":"USDC"===t||"USDC"===t?"d9f8":"DAI"===t?"70ea":"TUSD"===t?"08e7":"bee4")},connectWallet:function(){this.$router.push({name:"ConnectWallet"})},goPage:function(t){"mint"==t?this.$router.push({name:"Mint"}):"swap"==t?this.$router.push({name:"Swap"}):"redeem"==t&&this.$router.push({name:"Redeem"})}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,console.log("initWeb3"),i.next=4,t.$store.dispatch("initWeb3");case 4:return console.log("initHourglassPoolAction"),i.next=7,t.$store.dispatch("initHourglassPoolAction");case 7:t.$store.dispatch("swapMiningLoadPoolDetails"),i.next=13;break;case 10:i.prev=10,i.t0=i["catch"](0),console.error(i.t0);case 13:return i.prev=13,t.initialized=!0,i.finish(13);case 16:case"end":return i.stop()}}),i,null,[[0,10,13,16]])})))()}},d=m,g=(a("035e"),a("9546"),a("2877")),w=Object(g["a"])(d,s,e,!1,null,"28c2a8f4",null);i["default"]=w.exports}}]);