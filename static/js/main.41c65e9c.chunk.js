(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(21),o=t.n(s),l=t(125),i=(t(58),t(51)),c=t(2),m=t.n(c),d=t(4),p=t(8),u=t(9),h=t(11),g=t(10),f=t(12),w=t(124),b=t(127),E=t(126),y=t(45),v=t(50),N=t(24);function _(e){return new Promise(function(a){return setTimeout(a,e)})}var C=function(){return new Promise(function(e,a){window.addEventListener("load",Object(d.a)(m.a.mark(function t(){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(100);case 2:window.tronWeb?(n=window.tronWeb,e(n)):a("no tron link");case 3:case"end":return t.stop()}},t,this)})))})},x="img/frames/",D={0:{name:"\u53f2\u65fa\u57fa"}},j={0:{name:"\u5a77\u5a77"},1:{name:"\u601d\u5afa"},2:{name:"\u5c0f\u656c"},3:{name:"\u59a4\u73ca"},4:{name:"\u5e1b\u745c"},5:{name:"\u4f73\u4f73"}},k={0:{model_id:0,photographer_id:0,file_name:"0-0.jpg"},1:{model_id:0,photographer_id:0,file_name:"0-1.jpg"},2:{model_id:0,photographer_id:0,file_name:"0-2.jpg"},3:{model_id:0,photographer_id:0,file_name:"0-3.jpg"},4:{model_id:0,photographer_id:0,file_name:"0-4.jpg"},5:{model_id:1,photographer_id:0,file_name:"1-0.jpg"},6:{model_id:1,photographer_id:0,file_name:"1-1.jpg"},7:{model_id:1,photographer_id:0,file_name:"1-2.jpg"},8:{model_id:1,photographer_id:0,file_name:"1-3.jpg"},9:{model_id:1,photographer_id:0,file_name:"1-4.jpg"},10:{model_id:2,photographer_id:0,file_name:"2-0.jpg"},11:{model_id:2,photographer_id:0,file_name:"2-1.jpg"},12:{model_id:2,photographer_id:0,file_name:"2-2.jpg"},13:{model_id:2,photographer_id:0,file_name:"2-3.jpg"},14:{model_id:2,photographer_id:0,file_name:"2-4.jpg"},15:{model_id:3,photographer_id:0,file_name:"3-0.jpg"},16:{model_id:3,photographer_id:0,file_name:"3-1.jpg"},17:{model_id:3,photographer_id:0,file_name:"3-2.jpg"},18:{model_id:3,photographer_id:0,file_name:"3-3.jpg"},19:{model_id:3,photographer_id:0,file_name:"3-4.jpg"},20:{model_id:4,photographer_id:0,file_name:"4-0.jpg"},21:{model_id:4,photographer_id:0,file_name:"4-1.jpg"},22:{model_id:4,photographer_id:0,file_name:"4-2.jpg"},23:{model_id:4,photographer_id:0,file_name:"4-3.jpg"},24:{model_id:4,photographer_id:0,file_name:"4-4.jpg"},25:{model_id:5,photographer_id:0,file_name:"5-0.jpg"},26:{model_id:5,photographer_id:0,file_name:"5-1.jpg"},27:{model_id:5,photographer_id:0,file_name:"5-2.jpg"},28:{model_id:5,photographer_id:0,file_name:"5-3.jpg"},29:{model_id:5,photographer_id:0,file_name:"5-4.jpg"}},I={N:{file_name:"01_normal.png"},R:{file_name:"02_rare.png"},SR:{file_name:"03_superrare.png"},SSR:{file_name:"04_ssrare.png"},UR:{file_name:"05_ultrarare.png"}};var S=function(e){function a(){return Object(p.a)(this,a),Object(h.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.card,a=e.photoId,t=e.rarityScore,n="img/photos/"+k[a].file_name,s=j[k[a].model_id].name,o=D[k[a].photographer_id].name,l=(function(e){var a=parseInt(e)}(t),function(e){var a=parseInt(e);return x+I[a<=0?"UR":a<=20?"SSR":a<=120?"SR":a<=370?"R":"N"].file_name}(t));return r.a.createElement("article",{className:"article-card"},r.a.createElement("div",{className:"portfolio-item"},r.a.createElement("div",{className:"card-image-container"},r.a.createElement("img",{className:"card-photo",src:n,alt:""}),r.a.createElement("img",{className:"card-frame",src:l,alt:""})),r.a.createElement("div",{className:"portfolio-desc align-center"},r.a.createElement("div",{className:"folio-info"},r.a.createElement("h3",{className:"text-white white"},r.a.createElement("a",null,"# ",a)),r.a.createElement("h3",{className:"text-white white"},r.a.createElement("a",null,s)),r.a.createElement("h5",{className:"text-white white"},r.a.createElement("a",null,"By ",o)),r.a.createElement("a",{href:n,className:"fancybox"},r.a.createElement("i",{className:"fa fa-plus fa-2x"}))))))}}]),a}(n.Component),M=function(e){function a(){return Object(p.a)(this,a),Object(h.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.cards,t=[];return t=e.reversed?a.slice(0).reverse().map(function(e,a){return r.a.createElement(S,{card:e,key:"card-"+a.toString()})}):a.map(function(e,a){return r.a.createElement(S,{card:e,key:"card-"+a.toString()})}),r.a.createElement("div",{className:"text-center",style:{width:"100%"}},t)}}]),a}(n.Component),O=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(h.a)(this,Object(g.a)(a).call(this,e))).secToDHMS=function(e){return e>=0?{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:Math.floor(e%60)}:{d:0,h:0,m:0,s:0}},t.secToTimeStr=function(e){if(e<0)return"Free";var a=t.secToDHMS(e),n=a.d>0?a.d.toString()+" "+t.props.daysStr+" ":"";return n=n+a.h.toString().padStart(2,"0")+":"+a.m.toString().padStart(2,"0")+":"+a.s.toString().padStart(2,"0")},t.state={now:Math.round(Date.now()/1e3)},setInterval(function(){t.setState({now:Math.round(Date.now()/1e3)})},1e3),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.secToTimeStr(this.props.endTime-this.state.now);return r.a.createElement("span",null,e)}}]),a}(n.Component),T=(t(120),2e3),P=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(h.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={tronWebState:{installed:!1,loggedIn:!1},tronWeb:null,defaultAddress:null,ContractJSON:N,networkId:"1",networkName:"Mainnet",abi:[],accounts:null,contract:null,drawCardPrice:2e7,myCards:[],playerLastFreeDrawTime:0,freeDrawTimeGap:82800,alerts:[],isDrawingCard:!1,isDrawingCardSent:!1,isDrawingCardFailed:!1,justDrawnCards:[]},t.componentDidMount=Object(d.a)(m.a.mark(function e(){var a,n,r,s,o,l,i,c,d;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:return a=e.sent,n="1",r="Mainnet",a.fullNode.host.includes("shasta")?(n="2",r="Shasta Testnet"):a.fullNode.host.includes("api.trongrid.io")?(n="1",r="Mainnet"):r="Unknown Network",console.log("networkId",n),s={installed:!!a,loggedIn:!!a&&a.ready},console.log("tronWebState",s),t.setState({tronWeb:a,tronWebState:s,networkId:n,networkName:r}),o=N.abi,l=N.networks[n].address,i="T"===l[0]?a.address.toHex(l):l,console.log("contractAddressHex",i),e.next=17,a.contract().at(i);case 17:if(c=e.sent,console.log("contract",c),t.setState({contract:c,abi:o}),s.loggedIn){e.next=22;break}return e.abrupt("return");case 22:d=a.defaultAddress,console.log("defaultAddress",d),t.setState({defaultAddress:d},function(){t.getLatestPhotoId(),t.getCardPrice(),t.getMyCards(),t.getPlayerLastFreeDrawTime()}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.error(e.t0);case 30:case"end":return e.stop()}},e,this,[[0,27]])})),t.triggerContract=function(){var e=Object(d.a)(m.a.mark(function e(a,t,n){var r,s,o,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=this.state,s=r.abi,o=r.contract,l="send",s.forEach(function(e){e.name===a&&(l=/payable/.test(e.stateMutability)?"send":"call")}),o[a].apply(o,Object(i.a)(t))[l]({feeLimit:this.feeLimit,callValue:this.callValue||0}).then(function(e){e&&n&&n(e)});case 4:case"end":return e.stop()}},e,this)}));return function(a,t,n){return e.apply(this,arguments)}}(),t.getLatestPhotoId=Object(d.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.contract,e.next=3,a.getLatestPhotoId().call();case 3:n=e.sent,console.log("latestPhotoId",n);case 5:case"end":return e.stop()}},e,this)})),t.getFreeDrawTimeGap=Object(d.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.contract,e.next=3,a.freeDrawTimeGap().call();case 3:n=e.sent,console.log("freeDrawTimeGap",n,n.toNumber()),t.setState({freeDrawTimeGap:n.toNumber()});case 6:case"end":return e.stop()}},e,this)})),t.getCardPrice=Object(d.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.contract,e.next=3,a.drawCardPrice().call();case 3:n=e.sent,console.log("drawCardPrice",n),t.setState({drawCardPrice:n.toNumber()});case 6:case"end":return e.stop()}},e,this)})),t.getTransferEvents=Object(d.a)(m.a.mark(function e(){var a,n,r,s,o,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.tronWeb,r=a.networkId,s=a.ContractJSON,o=s.networks[r].addressBase58,console.log("getTransferEvents"),e.next=5,n.getEventResult(o,154653014e4,"Transfer");case 5:l=e.sent,console.log("events",l);case 7:case"end":return e.stop()}},e,this)})),t.getCardDrawnEvents=Object(d.a)(m.a.mark(function e(){var a,n,r,s,o,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.tronWeb,r=a.networkId,s=a.ContractJSON,o=s.networks[r].addressBase58,console.log("getCardDrawnEvents"),e.next=5,n.getEventResult(o,154653014e4,"CardDrawn");case 5:l=e.sent,console.log("events",l);case 7:case"end":return e.stop()}},e,this)})),t.getMyCards=Object(d.a)(m.a.mark(function e(){var a,n,r,s,o,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.contract,r=a.defaultAddress,console.log("getMyCards"),e.next=4,n.drawnCardsOf(r.hex).call();case 4:for(s=e.sent,console.log("drawnCards",s),o=[],l=0;l<s.cardIds.length;l++)o.push({cardId:s.cardIds[l].toNumber(),photoId:s.photoIds[l].toNumber(),rarityScore:s.rarityScores[l].toNumber()});return t.setState({myCards:o}),e.abrupt("return",o);case 10:case"end":return e.stop()}},e,this)})),t.getPlayerLastFreeDrawTime=Object(d.a)(m.a.mark(function e(){var a,n,r,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.contract,r=a.defaultAddress,e.next=3,n.playerLastFreeDrawTime(r.hex).call();case 3:s=e.sent,console.log("playerLastFreeDrawTime",s,s.toNumber()),t.setState({playerLastFreeDrawTime:s.toNumber()});case 6:case"end":return e.stop()}},e,this)})),t.freeDrawCard=Object(d.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.state.contract,console.log("freeDrawCard"),t.onDrawingCard(),a.freeDrawCard(0).send({feeLimit:void 0,callValue:0,shouldPollResponse:!1}).then(function(e){console.log("freeDrawCard result",e),t.onDrawingCardSent(1)},function(e){console.log("freeDrawCard error",e),t.onDrawingCardFailed()});case 4:case"end":return e.stop()}},e,this)})),t.drawCard=Object(d.a)(m.a.mark(function e(){var a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.state,n=a.contract,r=a.drawCardPrice,console.log("drawCard"),t.onDrawingCard(),n.drawCard(0).send({feeLimit:void 0,callValue:r,shouldPollResponse:!1}).then(function(e){console.log("drawCard result",e),t.onDrawingCardSent(1)},function(e){console.log("drawCard error",e),t.onDrawingCardFailed()});case 4:case"end":return e.stop()}},e,this)})),t.draw10Cards=Object(d.a)(m.a.mark(function e(){var a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.state,n=a.contract,r=a.drawCardPrice,console.log("draw10Cards"),t.onDrawingCard(),10,n.drawMultipleCards(0,10).send({feeLimit:void 0,callValue:10*r,shouldPollResponse:!1}).then(function(e){console.log("draw10Cards result",e),t.onDrawingCardSent(10)},function(e){console.log("draw10Cards error",e),t.onDrawingCardFailed()});case 5:case"end":return e.stop()}},e,this)})),t.onDrawingCard=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({isDrawingCard:!0});case 1:case"end":return e.stop()}},e,this)})),t.onDrawingCardSent=function(){var e=Object(d.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({isDrawingCardSent:!0}),setTimeout(function(){t.pollDrawingCard(a)},T);case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.pollDrawingCard=function(){var e=Object(d.a)(m.a.mark(function e(a){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("pollDrawingCard"),n=t.state.myCards.length,e.next=4,t.getMyCards();case 4:e.sent.length>n?t.onPollCardDrawn(a):setTimeout(function(){t.pollDrawingCard(a)},T);case 6:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.onDrawingCardFailed=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({isDrawingCard:!1,isDrawingCardSent:!1,isDrawingCardFailed:!0});case 1:case"end":return e.stop()}},e,this)})),t.onCardDrawn=function(){var e=Object(d.a)(m.a.mark(function e(a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onCardDrawn"),e.next=3,t.getMyCards();case 3:n=t.state.myCards,r=n.slice(Math.max(n.length-a,0)),console.log("justDrawnCards",r),t.setState({isDrawingCard:!1,isDrawingCardSent:!1,justDrawnCards:r});case 7:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.onPollCardDrawn=function(){var e=Object(d.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("onPollCardDrawn"),setTimeout(Object(d.a)(m.a.mark(function e(){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyCards();case 2:n=t.state.myCards,r=n.slice(Math.max(n.length-a,0)),console.log("justDrawnCards",r),t.setState({isDrawingCard:!1,isDrawingCardSent:!1,justDrawnCards:r}),t.getPlayerLastFreeDrawTime();case 7:case"end":return e.stop()}},e,this)})),T);case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.pushAlert=function(){var e=Object(d.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.state.alerts.push(a),t.setState({alerts:t.state.alerts});case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.dismissAlert=function(){var e=Object(d.a)(m.a.mark(function e(a){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("input",a),n=t.state.alerts.filter(function(e){return e.id!=a.id}),t.setState({alerts:n});case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state.playerLastFreeDrawTime+this.state.freeDrawTimeGap,a=Date.now()/1e3>e;return r.a.createElement(y.ParallaxProvider,{init:{smoothScrollingDuration:500,smoothScrolling:!0,forceHeight:!1}},r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{timeout:5e3,onDismiss:this.dismissAlert,position:"bottom-left",alerts:this.state.alerts}),r.a.createElement("section",{id:"header",className:"appear"}),r.a.createElement("div",{className:"navbar navbar-fixed-top navbar-default-style",style:{backgroundColor:"rgba(68,188,221,1)",paddingLeft:"15px"},role:"navigation","data-0":"line-height:60px; height:60px; background-color:rgba(68,188,221,1);","data-300":"line-height:40px; height:40px; background-color:rgba(68,188,221,0.6);"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},r.a.createElement("span",{className:"fa fa-bars color-white"})),r.a.createElement("h1",null,r.a.createElement(w.a,{to:"/",className:"navbar-brand navbar-brand-default-style","data-0":"line-height:60px;","data-300":"line-height:50px;"},"CryptoBeauty"))),r.a.createElement("div",{className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"nav navbar-nav","data-0":"margin-top:10px;","data-300":"margin-top:5px;"},r.a.createElement("li",null,r.a.createElement("a",{style:{color:"#DDD"}},"on ",this.state.networkName)),r.a.createElement("li",null,r.a.createElement(b.a,null,r.a.createElement(E.a,{exact:!0,path:"/asset"},r.a.createElement(w.a,{to:"/"},"Own A Girl")),r.a.createElement(E.a,null,r.a.createElement(w.a,{to:"/asset"},"My Girls")))))))),r.a.createElement(b.a,null,r.a.createElement(E.a,{exact:!0,path:"/asset"},r.a.createElement("div",null,r.a.createElement("section",{id:"section-works",className:"section appear clearfix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-md-offset-3 col-md-6"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"Girls in the house")))),this.state.tronWebState.loggedIn?r.a.createElement("div",{className:"row"},0===this.state.myCards.length?r.a.createElement("h3",null,"\u4f60\u8fd8\u6ca1\u6709\u5361\u7247\uff0c\u5feb",r.a.createElement(w.a,{to:"/"},"\u56de\u5230\u9996\u9875"),"\u62bd\u4e00\u5f20\u5427\uff01"):r.a.createElement(M,{cards:this.state.myCards,reversed:!0})):r.a.createElement("div",null,r.a.createElement("h3",null,"\u8bf7\u5728\u7535\u8111\u4e0a\u7528 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/chrome/"},"Chrome")," \u5f00\u542f\u7f51\u9875"),r.a.createElement("h3",null,"\u5e76\u5b89\u88c5\u4e0e\u89e3\u9501 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"},"TronLink"))))))),r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("section",{id:"parallax4",className:"section pad-top150 pad-bot150","data-stellar-background-ratio":"0.5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"align-center pad-top150 pad-bot150"},r.a.createElement("img",{className:"align-left cryptobeauty-logo-img",style:{width:"400px",left:"40px",top:"45px",position:"absolute"},src:"img/logo/cryptobeautylogo01.png",alt:""}),r.a.createElement("h1",{className:"align-left text-white-outlined pad-top20"},"Crypto Beauty ",r.a.createElement("span",{className:"cryptobeauty-title"},"\u5bc6\u7801\u5973\u5b69")),r.a.createElement("h3",{className:"align-left text-white-outlined"},r.a.createElement("b",null,"\u4f60\u4e13\u5c5e\u7684\u533a\u5757\u94fe\u5c11\u5973\u5361\u7247\u521b\u4f5c\u4ea4\u6613\u5e73\u53f0"))))),r.a.createElement("section",{id:"section-services",className:"section pad-bot20 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"align-center color-swimsuitblue pad-bot20"},"\u4f60\u7684\u5973\u5b69\uff0c\u4e00\u952e\u62e5\u6709"),this.state.tronWebState.loggedIn?r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},a?r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.freeDrawCard},r.a.createElement("i",{className:"color-white"},"\u6bcf\u65e5\u514d\u8d39\u62bd")))):r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"button button-muted"},r.a.createElement("i",{className:"color-white"},"\u6bcf\u65e5\u514d\u8d39\u62bd")))),r.a.createElement("h4",{className:"color-2blue"},r.a.createElement(O,{endTime:e})))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.drawCard},r.a.createElement("i",{className:"color-white"},"\u5355\u5f20\u62bd\u5361")))),r.a.createElement("h4",{className:"color-2blue"},this.state.drawCardPrice/1e6," TRX"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.draw10Cards},r.a.createElement("i",{className:"color-white"},"\u8d85\u503c\u5361\u5305")))),r.a.createElement("h4",{className:"color-2blue"},this.state.drawCardPrice/1e6*10," TRX")))):r.a.createElement("div",null,r.a.createElement("h3",null,"\u8bf7\u5728\u7535\u8111\u4e0a\u7528 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/chrome/"},"Chrome")," \u5f00\u542f\u7f51\u9875"),r.a.createElement("h3",null,"\u5e76\u5b89\u88c5\u4e0e\u89e3\u9501 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"},"TronLink")),r.a.createElement("h4",{className:"align-center color-swimsuitblue pad-top20"},r.a.createElement("b",null,"\u82e5\u7f51\u9875\u65e0\u6cd5\u81ea\u52a8\u8df3\u8f6c\uff0c\u8bf7\u70b9\u51fb\u6b64 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://tronbeauty.github.io/CryptoBeauty/#/"},"\u8fde\u7ed3")," \u52a0\u901f"))),this.state.isDrawingCard?r.a.createElement("div",null,r.a.createElement("div",{className:"spinner"}),this.state.isDrawingCardSent&&r.a.createElement("h3",{className:""},"\u62bd\u5361\u4e2d\uff0c\u82e5\u5361\u7247\u4e45\u672a\u51fa\u73b0\uff0c\u8bf7\u624b\u52a8",r.a.createElement(w.a,{to:"/asset"},"\u8df3\u8f6c\u81f3 My Girls \u67e5\u770b"))):this.state.isDrawingCardFailed?r.a.createElement("div",null,r.a.createElement("h3",null,"\u62bd\u5361\u5931\u8d25"),r.a.createElement("h4",null,"\u8bf7\u786e\u5b9a TronLink \u8fde\u63a5\u5230\u4e3b\u7f51\u4e0a\uff0c\u5e76\u4e14\u62e5\u6709\u8db3\u591f\u7684 TRX")):r.a.createElement(M,{cards:this.state.justDrawnCards,reversed:!0}))),r.a.createElement("section",{id:"testimonials",className:"section","data-stellar-background-ratio":"0.5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"testimonial pad-top40 pad-bot40"},r.a.createElement("h1",{className:"text-white-outlined"},"\u53d6\u5f97\u7f51\u7ea2\u79c1\u5bc6\u7ebf\u4e0b\u6d3b\u52a8\u7684\u4e13\u5c5e\u95e8\u7968"),r.a.createElement("br",null))))))),r.a.createElement("section",{id:"section-about",className:"section appear clearfix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-md-offset-3 col-md-6"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"\u533a\u5757\u94fe X \u6a21\u7279"),r.a.createElement("p",null,"\u6e05\u7eaf\u5236\u670d / \u9650\u91cf\u7248\u578b / \u533a\u5757\u94fe / \u6570\u4f4d\u52a0\u5bc6 / \u79c1\u6709\u8d44\u4ea7 ")))),r.a.createElement("div",{className:"row align-center mar-bot40"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member5.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u5a77\u5a77"),r.a.createElement("a",{href:"https://www.instagram.com/tinaaaaalee/"},"IG:tinaaaaalee")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member6.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u601d\u5afa"),r.a.createElement("a",{href:"https://www.instagram.com/sixian0909/"},"IG:sixian0909")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member7.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u5c0f\u656c"),r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100001603870154"},"FB:\u5c0f\u656c")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member8.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u59a4\u73ca"),r.a.createElement("a",{href:"https://www.instagram.com/nnszea/"},"IG:nnszea"))))),r.a.createElement("div",{className:"row mar-bot40 bg-grey pad-bot40 pad-top40 div-round"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"\u6355\u83b7\u73cd\u7a00\u5973\u5b69"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("figure",{className:"card-photo"},r.a.createElement("img",{src:"img/cards/URcard.png",alt:""}))),r.a.createElement("div",{className:"col-md-6 align-left color-near-black"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"color-near-black"},"\u2764 \u514d\u8d39\u62bd\u5361\u5373\u523b\u62e5\u6709",r.a.createElement("span",{className:"color-swimsuitblue"},"\u9ad8\u6e05\u539f\u56fe")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"mar-left60 color-near-black"},"\u2764 \u5361\u724c\u5373\u5973\u5b69",r.a.createElement("span",{className:"color-swimsuitblue"},"\u79c1\u4eba\u89c1\u9762\u4f1a"),"\u95e8\u7968"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"mar-left120 color-near-black"},"\u2764 \u7a00\u6709\u5361\u53ef\u5151\u5973\u5b69",r.a.createElement("span",{className:"color-swimsuitblue"},"\u4e13\u5c5e\u6084\u6084\u8bdd"))))),r.a.createElement("div",{className:"row align-center mar-bot70 pad-top40"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated pad-bot40","data-animation":"bounceInUp"},"\u6210\u4e3a\u5957\u5361\u641c\u85cf\u4e13\u5bb6\uff01"),r.a.createElement("figure",{className:"card-photo-small"},r.a.createElement("img",{src:"img/cards/cards_level.png",alt:""})))),r.a.createElement("div",{className:"col-lg-4"}),r.a.createElement("div",{className:"col-lg-3 bg-grey mar-left45  mar-bot30 div-round"},r.a.createElement("div",{className:"row align-center mar-bot40 pad-top40"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated ","data-animation":"bounceInUp"},"\u6210\u4e3a\u5361\u724c"),r.a.createElement("figure",null,r.a.createElement("img",{className:"pad-bot20 pad-top20",src:"img/logo/qmark.png"})),r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("a",{href:"#"},r.a.createElement("div",{className:"button"},r.a.createElement("i",{className:"color-white"},"\u70b9\u6211\u7533\u8bf7"))))),r.a.createElement("p",null," \u5973\u5b69 / \u6444\u5f71\u5e08")))),r.a.createElement("div",{className:"col-lg-3"})))))),r.a.createElement("section",{id:"footer",className:"section footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row animated opacity mar-bot20","data-andown":"fadeIn","data-animation":"animation"},r.a.createElement("div",{className:"col-sm-12 align-center"},r.a.createElement("ul",{className:"social-network social-circle"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/CryptoBeauty.Art",className:"icoFacebook",title:"Facebook"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/TronBeauty/CryptoBeauty",className:"icoGithub",title:"Github"},r.a.createElement("i",{className:"fa fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://tronscan.org/#/contract/TXh5o25svsvgmxqDG35gU1Xcq5BcmwmcqS",className:"icoTron",title:"Tron"},r.a.createElement("i",{className:"fa fa-bitcoin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=0EHjpbdWvhc",className:"icoYoutube",title:"Youtube"},r.a.createElement("i",{className:"fa fa-youtube"})))))),r.a.createElement("div",{className:"row align-center copyright"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("p",null,"All rights reserved by CryptoBeauty")))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e){e.exports={contractName:"CryptoBeauty",abi:{entrys:[{name:"drawMultipleCards",inputs:[{name:"_photoPoolId",type:"uint256"},{name:"_amount",type:"uint256"}],type:2,payable:!0,stateMutability:4},{name:"drawMultipleCardsFromMultiplePools",inputs:[{name:"_photoPoolIds",type:"uint256[]"}],type:2,payable:!0,stateMutability:4},{constant:!0,name:"isValidPhotoId",inputs:[{name:"_photoId",type:"uint256"}],outputs:[{type:"bool"}],type:2,stateMutability:2},{constant:!0,name:"drawnCardIdsOf",inputs:[{name:"_user",type:"address"}],outputs:[{name:"cardIds",type:"uint256[]"}],type:2,stateMutability:2},{name:"addPhotos",inputs:[{name:"_modelIds",type:"uint256[]"},{name:"_photographerIds",type:"uint256[]"}],type:2,stateMutability:3},{name:"withdraw",inputs:[{name:"amount",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"isValidPoolId",inputs:[{name:"_photoPoolId",type:"uint256"}],outputs:[{type:"bool"}],type:2,stateMutability:2},{name:"renounceOwnership",type:2,stateMutability:3},{name:"addPhotoPool",inputs:[{name:"_photoIds",type:"uint256[]"}],type:2,stateMutability:3},{constant:!0,name:"drawnCardsOf",inputs:[{name:"_user",type:"address"}],outputs:[{name:"cardIds",type:"uint256[]"},{name:"photoIds",type:"uint256[]"},{name:"rarityScores",type:"uint256[]"}],type:2,stateMutability:2},{constant:!0,name:"getLatestPhotoPoolId",outputs:[{type:"uint256"}],type:2,stateMutability:2},{name:"setDrawCardPrice",inputs:[{name:"_price",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"owner",outputs:[{type:"address"}],type:2,stateMutability:2},{constant:!0,name:"cards",inputs:[{type:"uint256"}],outputs:[{name:"photoId",type:"uint256"},{name:"rarityScore",type:"uint256"},{name:"holder",type:"address"}],type:2,stateMutability:2},{constant:!0,name:"isOwner",outputs:[{type:"bool"}],type:2,stateMutability:2},{constant:!0,name:"ownerWalletAddr",outputs:[{type:"address"}],type:2,stateMutability:2},{constant:!0,name:"getLatestPhotoId",outputs:[{type:"uint256"}],type:2,stateMutability:2},{constant:!0,name:"playerLastFreeDrawTime",inputs:[{type:"address"}],outputs:[{type:"uint256"}],type:2,stateMutability:2},{constant:!0,name:"photos",inputs:[{type:"uint256"}],outputs:[{name:"modelId",type:"uint256"},{name:"photographerId",type:"uint256"}],type:2,stateMutability:2},{name:"drawCard",inputs:[{name:"_photoPoolId",type:"uint256"}],type:2,payable:!0,stateMutability:4},{name:"transfer",inputs:[{name:"_cardId",type:"uint256"},{name:"_to",type:"address"}],type:2,stateMutability:3},{name:"addPhoto",inputs:[{name:"_modelId",type:"uint256"},{name:"_photographerId",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"isValidCardId",inputs:[{name:"_cardId",type:"uint256"}],outputs:[{type:"bool"}],type:2,stateMutability:2},{constant:!0,name:"drawCardPrice",outputs:[{type:"uint256"}],type:2,stateMutability:2},{constant:!0,name:"playerDrawnCardIds",inputs:[{type:"address"},{type:"uint256"}],outputs:[{type:"uint256"}],type:2,stateMutability:2},{name:"setFreeDrawTimeGap",inputs:[{name:"_gap",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"freeDrawTimeGap",outputs:[{type:"uint256"}],type:2,stateMutability:2},{name:"freeDrawCard",inputs:[{name:"_photoPoolId",type:"uint256"}],type:2,stateMutability:3},{name:"transferOwnership",inputs:[{name:"newOwner",type:"address"}],type:2,stateMutability:3},{inputs:[{name:"_drawCardPrice",type:"uint256"},{name:"_ownerWalletAddr",type:"address"}],type:1,stateMutability:3},{name:"PoolAdded",inputs:[{indexed:!0,name:"photoPoolId",type:"uint256"}],type:3},{name:"PhotoAdded",inputs:[{indexed:!0,name:"photoId",type:"uint256"},{indexed:!0,name:"modelId",type:"uint256"},{indexed:!0,name:"photographerId",type:"uint256"}],type:3},{name:"CardDrawn",inputs:[{indexed:!0,name:"cardId",type:"uint256"},{indexed:!0,name:"photoId",type:"uint256"},{name:"rarityScore",type:"uint256"},{indexed:!0,name:"to",type:"address"}],type:3},{name:"Transfer",inputs:[{indexed:!0,name:"cardId",type:"uint256"},{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"}],type:3},{name:"OwnershipTransferred",inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],type:3}]},compiler:{name:"solc",version:"0.4.23+commit.124ca40d.Emscripten.clang"},networks:{1:{addressBase58:"TXh5o25svsvgmxqDG35gU1Xcq5BcmwmcqS",addressHex:"",address:"TXh5o25svsvgmxqDG35gU1Xcq5BcmwmcqS"},2:{addressBase58:"TDjTNAHiQsJ6zYE6E5Qmq7DC1D7GRzofrX",addressHex:"",address:"TDjTNAHiQsJ6zYE6E5Qmq7DC1D7GRzofrX"}},updatedAt:"2019-01-03T21:23:43.409Z"}},53:function(e,a,t){e.exports=t(123)},58:function(e,a,t){}},[[53,2,1]]]);
//# sourceMappingURL=main.41c65e9c.chunk.js.map