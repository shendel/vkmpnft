(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{64914:function(e){e.exports=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_extraData",type:"bytes"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,type:"function"},{inputs:[{name:"_initialAmount",type:"uint256"},{name:"_tokenName",type:"string"},{name:"_decimalUnits",type:"uint8"},{name:"_tokenSymbol",type:"string"}],type:"constructor"},{payable:!1,type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}]},54997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(14027)}])},54165:function(e,t,n){"use strict";n.d(t,{p:function(){return s},x:function(){return a}});var a={HOME:"index",MINT:"mint",MINTOWN:"mintown",MARKETPLACE:"marketplace",STAKE:"stake"},s=[{title:"Home",target:"HOME",link:"",blank:!1},{title:"Mint",target:"MINTOWN",link:"",blank:!1},{title:"Mint Random NFT",target:"MINT",link:"",blank:!1},{title:"Marketplace",target:"MARKETPLACE",link:"",blank:!1},{title:"Stake",target:"STAKE",link:"",blank:!1}]},66124:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(85893),s=n(67294),r=n(83300),o=n.n(r),i=function(e){return e.startsWith("ipfs://")?"".concat("https://skywalker.infura-ipfs.io/ipfs/").concat(e.substring(7)):e};function c(e){var t=e.url,n=(0,s.useState)(!1),r=n[0],c=n[1],u=(0,s.useState)(!0),l=u[0],p=u[1],d=(0,s.useState)(!1),f=d[0],m=d[1],y=(0,s.useState)(!1),h=(y[0],y[1]),k=(0,s.useState)({}),g=k[0],v=k[1];return(0,s.useState)((function(){t&&o()(i(t)).then((function(e){return e.headers.get("content-type").startsWith("image/")?"IMAGE":e.text()})).then((function(e){if("IMAGE"==e)return"IMAGE";try{return JSON.parse(e.slice(1))}catch(t){try{return JSON.parse(e)}catch(n){return"FAIL_PARSE"}}})).then((function(e){c(!0),p(!1),"FAIL_PARSE"!==e&&"IMAGE"!==e?v(e):"IMAGE"===e?m(!0):h(!0)})).catch((function(e){console.log("fail fetch",e)}))}),[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:l?(0,a.jsx)("div",{children:"Fetching"}):(0,a.jsx)(a.Fragment,{children:r&&(0,a.jsxs)(a.Fragment,{children:[g&&g.image&&(0,a.jsx)("img",{src:i(g.image)}),f&&(0,a.jsx)("img",{src:i(t)}),g&&g.name&&(0,a.jsx)("strong",{children:g.name})]})})})})}},67333:function(e,t,n){"use strict";var a=n(85893),s=n(11163),r=n(214),o=n.n(r),i=n(36485);t.Z=function(e){(0,s.useRouter)();var t=e.getDesign,n=e.getText;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"".concat(o().mainLogo," logoAddParams"),children:(0,a.jsx)("a",{href:(0,i.Rg)("index"),children:(0,a.jsx)("img",{src:t("logoUri","uri",(0,i.Vh)("vkmpnft.png","mainLogo")),alt:n("Stake NFT - earn ERC20","MainPage_Header")})})})})}},15200:function(e,t,n){"use strict";var a=n(26042),s=n(69396),r=n(85893),o=n(44423),i=n(54165),c=n(214),u=n.n(c),l=n(34617),p=n(11163);t.Z=function(e){(0,p.useRouter)();var t=(0,l.Z)(),n=t.storageMenu,c=t.isOwner,d=t.isInstalled,f=t.storageIsLoading,m=n&&n.length?n:i.p;return f?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("nav",{className:"".concat(u().mainNav," headerNavMenu"),children:[m.map((function(t,n){var c=""!==t.target&&e==i.x[t.target],l=""!==t.target?(0,o.R)(i.x[t.target]):t.link;return(0,r.jsx)("a",(0,s.Z)((0,a.Z)({className:c?"".concat(u().active," headerNavActive"):"",href:l},t.blank?{target:"_blank"}:{}),{children:t.title}),n)})),(c||!d)&&(0,r.jsx)("a",{href:(0,o.R)("settings"),className:"settings"==e?"".concat(u().active," headerNavActive"):"",children:"Settings"})]}),(0,r.jsx)("div",{className:u().mainNavSeperator})]})}},77695:function(e,t,n){"use strict";var a=n(85893),s=n(214),r=n.n(s),o=n(27129),i=n(44423),c=n(73848),u=n(49738),l=n(66124);t.Z=function(e){var t=e.tokenId,n=e.tokenUri,s=e.isApproved,p=e.onDeStake,d=e.onStake,f=e.isFetchUri,m=e.deStakeId,y=e.stakeId,h=e.isStaking,k=e.isDeStaking,g=e.isApproveDo,v=e.isApproveId,b=e.isMinted,x=e.farmStatus,w=e.tokenUtx,S=e.openConfirmWindow,T=!1;x&&x.version>=3&&x.lockEnabled&&(0,c.K)()<Number(w)+Number(x.lockTime)&&(T=!0);return(0,a.jsxs)("div",{className:"".concat(r().nftBox," nftTokenBox"),children:[!1!==n&&(0,o.Z)(n)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h3",{children:["#",t]}),(0,a.jsx)(l.Z,{url:n})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h3",{children:["#",t]}),f&&(0,a.jsx)("h2",{children:"Fetch info"})]}),b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),href:(0,i.R)("stake"),children:"Go to staking"})}):(0,a.jsxs)(a.Fragment,{children:[null!==p&&(0,a.jsx)(a.Fragment,{children:T?(0,a.jsx)("button",{onClick:function(){var e=Number(w)+Number(x.lockTime)-(0,c.K)();S({title:"NFT token is locked",message:"This token is currently locked. You can withdraw him out of the farm in ".concat((0,u.R)(e)),isOk:!0})},className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),children:"Locked"}):(0,a.jsx)("button",{disabled:k||h||g,className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),onClick:p,children:k&&m===t?(0,a.jsx)(a.Fragment,{children:"De-staking..."}):(0,a.jsx)(a.Fragment,{children:"De-stake"})})}),null!==d&&(0,a.jsx)("button",{className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),onClick:d,disabled:k||h||g,children:h&&y===t?(0,a.jsx)(a.Fragment,{children:"Staking..."}):(0,a.jsx)(a.Fragment,{children:g&&v===t?(0,a.jsx)(a.Fragment,{children:"Approving..."}):(0,a.jsx)(a.Fragment,{children:s?"Stake":"Approve & Stake"})})})]})]},t.toString())}},53419:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var a=n(47568),s=n(29815),r=n(34051),o=n.n(r),i=n(44431),c=function(){var e=(0,a.Z)(o().mark((function e(t,n,a,r,c){var u,l,p,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={from:t,gas:"0"},c&&(l.value=new i.BigNumber(c)),e.next=5,(u=n.methods)[a].apply(u,(0,s.Z)(r)).estimateGas(l);case 5:return p=e.sent,d=new i.BigNumber(new i.BigNumber(p).multipliedBy(2.15).toFixed(0)).toString(16),l.gas="0x"+d,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,s,r){return e.apply(this,arguments)}}()},51024:function(e,t,n){"use strict";n.d(t,{L:function(){return s},O:function(){return a}});var a=function(e){var t=e.multicall,n=e.target,a=e.encoder,s=e.calls;return new Promise((function(e,r){var o={},i=[],c=Object.keys(s).map((function(e){var t=s[e],r=t.func,o=t.args;return i.push(e),{target:n,callData:a.encodeFunctionData(r,o)}}));t.methods.aggregate(c).call().then((function(t){t.returnData.forEach((function(e,t){var n=a.decodeFunctionResult(s[i[t]].func,e)[0];n&&n._isBigNumber&&(n=n.toString()),o[i[t]]=n})),e(o)})).catch((function(e){r(e)}))}))},s=function(e){var t=e.multicall,n=e.calls;return new Promise((function(e,a){var s={},r=n.map((function(e){var t=e.group,n=e.func,a=e.args,r=e.encoder,o=e.target;return s[t]||(s[t]={}),{target:o,callData:r.encodeFunctionData(n,a||[])}}));t.methods.aggregate(r).call().then((function(t){t.returnData.forEach((function(e,t){var a=n[t].encoder.decodeFunctionResult(n[t].func,e)[0];a&&a._isBigNumber&&(a=a.toString()),s[n[t].group][n[t].value||n[t].func]=a})),e(s)})).catch((function(e){a(e)}))}))}},14027:function(e,t,n){"use strict";n.r(t);var a=n(47568),s=n(14924),r=n(26042),o=n(69396),i=n(34051),c=n.n(i),u=n(85893),l=(n(2593),n(35553)),p=n(67294),d=n(214),f=n.n(d),m=n(78967),y=n(53419),h=n(15200),k=n(67333),g=n(77695),v=n(73848),b=n(51024),x=n(64914),w=n.n(x),S=n(26566),T=n(73853),N=n(99312),j=n(64262),F=n(81586),A=new F.vU(S),M=new F.vU(T.Mt),_=function(e){console.log(e)};t.default=function(e){var t=e.storageData,n=(e.isOwner,e.openConfirmWindow),i=e.addNotify,d=e.getText,x=e.getDesign,F=(e.storageMenu,(0,p.useState)(null===t||void 0===t?void 0:t.chainId)),C=F[0],R=F[1],I=(0,p.useState)(null===t||void 0===t?void 0:t.nftCollection),E=I[0],B=I[1],Z=(0,p.useState)(null===t||void 0===t?void 0:t.rewardToken),D=Z[0],O=Z[1],U=(0,p.useState)(null===t||void 0===t?void 0:t.farmContract),P=U[0],Y=U[1],L=(0,p.useState)(!1),W=L[0],H=L[1],G=(0,p.useState)(!1),V=G[0],K=G[1],J=(0,p.useState)(!1),X=J[0],q=J[1],z=(0,p.useState)(!1),Q=z[0],$=z[1],ee=(0,p.useState)(!1),te=ee[0],ne=ee[1],ae=(0,p.useState)(!1),se=ae[0],re=ae[1],oe=(0,p.useState)(!1),ie=oe[0],ce=oe[1],ue=(0,p.useState)(!1),le=ue[0],pe=ue[1],de=(0,p.useState)(!1),fe=de[0],me=de[1],ye=(0,p.useState)(!1),he=ye[0],ke=ye[1],ge=(0,p.useState)(!0),ve=(ge[0],ge[1]),be=(0,p.useState)(!1),xe=be[0],we=be[1],Se=(0,p.useState)(!1),Te=Se[0],Ne=Se[1],je=(0,p.useState)(!1),Fe=je[0],Ae=je[1],Me=(0,p.useState)(!1),_e=Me[0],Ce=Me[1],Re=(0,p.useState)(!1),Ie=Re[0],Ee=Re[1],Be=(0,p.useState)(!0),Ze=(Be[0],Be[1]),De=(0,p.useState)(!1),Oe=(De[0],De[1]),Ue=(0,p.useState)(!1),Pe=Ue[0],Ye=Ue[1],Le=(0,p.useState)(!0),We=Le[0],He=Le[1],Ge=(0,p.useState)(!1),Ve=Ge[0],Ke=Ge[1],Je=(0,p.useState)(!1),Xe=Je[0],qe=Je[1],ze=(0,p.useState)(!0),Qe=(ze[0],ze[1]),$e=(0,p.useState)(!0),et=$e[0],tt=$e[1],nt=(0,p.useState)(!1),at=(nt[0],nt[1]),st=(0,p.useState)([]),rt=st[0],ot=st[1],it=(0,p.useState)([]),ct=it[0],ut=it[1],lt=(0,p.useState)({}),pt=lt[0],dt=lt[1],ft=(0,p.useState)(!1),mt=ft[0],yt=ft[1],ht=(0,p.useState)(!1),kt=(ht[0],ht[1]),gt=(0,p.useState)([]),vt=gt[0],bt=gt[1],xt=(0,p.useState)({}),wt=xt[0],St=xt[1],Tt=(0,p.useState)(!0),Nt=Tt[0],jt=Tt[1],Ft=(0,p.useState)(!1),At=(Ft[0],Ft[1],(0,p.useState)(!0)),Mt=At[0],_t=At[1],Ct=(0,p.useState)(!1),Rt=(Ct[0],Ct[1]),It=(0,p.useState)(!1),Et=(It[0],It[1]),Bt=(0,p.useState)(!1),Zt=Bt[0],Dt=Bt[1],Ot=(0,p.useState)(!1),Ut=Ot[0],Pt=Ot[1],Yt=(0,p.useState)(!1),Lt=Yt[0],Wt=Yt[1],Ht=(0,p.useState)(!1),Gt=Ht[0],Vt=Ht[1],Kt=(0,p.useState)(!1),Jt=Kt[0],Xt=Kt[1],qt=(0,p.useState)(!1),zt=qt[0],Qt=qt[1],$t=(0,p.useState)(!1),en=$t[0],tn=$t[1],nn=(0,p.useState)(!1),an=nn[0],sn=nn[1],rn=(0,p.useState)(!1);rn[0],rn[1];(0,p.useEffect)((function(){t&&t.chainId&&t.nftCollection&&t.rewardToken&&t.farmContract&&(R(t.chainId),B(t.nftCollection),O(t.rewardToken),Y(t.farmContract))}),[t]);var on=function(e,t){var n=!1;try{n=e.message.replace("Internal JSON-RPC error.",""),n=JSON.parse(n)}catch(a){}switch(n&&n.message?n.message:e.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",e.message)}},cn=function(){_("do fetchAvailableReward");try{we(!1),ve(!0),Q.methods.availableRewards(X).call().then((function(e){ke(e),ve(!1)}))}catch(e){console.log(">>> fail fetchAvailableReward"),on(e),we(!0)}},un=function(){_("do fetchTotalRewardBalance"),He(!0),Ke(!1),Fe&&Fe.methods.balanceOf(P).call().then((function(e){Ye(e),He(!1)})).catch((function(e){Ke(!0),console.log(">>> fetchTotalRewardBalance",e),on(e)}))},ln=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_("do fetchIsApproved"),Qe(!0);try{te.methods.isApprovedForAll(X,P).call().then((function(e){qe(e),Qe(!1)}))}catch(t){console.log(">>> fail check is approved"),on(t),Qe(!1)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pn=function(e){return _("do fetchTokenUris"),new Promise((function(t,n){if(X&&te&&se){var a=e.map((function(e){return{target:E,tokenId:e,callData:A.encodeFunctionData("tokenURI",[e])}}));se.methods.aggregate(a).call().then((function(n){var a={};n.returnData.forEach((function(t,n){var s=A.decodeFunctionResult("tokenURI",t)[0];a[e[n]]=s})),t(a)})).catch((function(e){on(e),n()}))}else n()}))},dn=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a,s,r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_("do fetchUserNfts"),!(X&&te&&se)||et){e.next=33;break}return _t(!0),Rt(!1),t=!1,n=!1,a=0,s=0,e.prev=8,e.next=11,te.methods.totalSupply().call();case 11:a=e.sent,t=!0,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log("Fail fetch total supply");case 18:return e.prev=18,e.next=21,te.methods.MAX_SUPPLY().call();case 21:s=e.sent,n=!0,e.next=28;break;case 25:e.prev=25,e.t1=e.catch(18),console.log("Fail fetch max supply");case 28:if(console.log("hasMaxSupply",n),console.log("hasTotalSupply",t),console.log("maxSupply",s),console.log("totalSupply",a),n||t){for(Et(!0),r=[],o=1;o<=(t?a:s);o++)r.push({target:E,callData:A.encodeFunctionData("ownerOf",[o])});se.methods.aggregate(r).call().then((function(e){var t=[];e.returnData.forEach((function(e,n){A.decodeFunctionResult("ownerOf",e)[0]===X&&t.push(n+1)})),bt(t),_t(!1),jt(!0),pn(t).then((function(e){St(e),jt(!1)})).catch((function(e){jt(!1)}))})).catch((function(e){console.log(">>> fetchUserNfts",e),Rt(!0),on(e)}))}case 33:case"end":return e.stop()}}),e,null,[[8,15],[18,25]])})));return function(){return e.apply(this,arguments)}}();(0,p.useEffect)((function(){dn(),ie||fe||le||fn()}),[X,te,se,Q,et]);var fn=function(){Q&&se&&(me(!1),pe(!0),Q.methods.version().call().then((function(e){console.log(">>> farmVersion",e);t.farmContract;var n=(0,r.Z)({version:{func:"version",args:[]}},e>=2?{rewardsPerHour:{func:"rewardsPerHour",args:[]}}:{},e>=3?{lockEnabled:{func:"lockEnabled",args:[]},lockTime:{func:"lockTime",args:[]}}:{});(0,b.O)({multicall:se,target:t.farmContract,encoder:M,calls:n}).then((function(e){ce(e),me(!0),pe(!1),console.log(e)})).catch((function(e){pe(!1),console.log(">>> err",e)}))})).catch((function(e){pe(!1),console.log(">>> fail fetchFarmStatus",e)})))};(0,p.useEffect)((function(){Fe&&(_("on useEffect rewardTokenContract"),Fe&&(Ke(!1),Oe(!1),Ze(!0),Fe.methods.decimals().call().then((function(e){Fe.methods.symbol().call().then((function(t){Ze(!1),Ee(e),Ce(t),un()})).catch((function(e){console.log(">>> reward token info - fail fetch symbol"),Ke(!0),Oe(!0)}))})).catch((function(e){console.log(">>> reward token info - fail fetch decimals"),Ke(!0),Oe(!0)}))))}),[Fe]),(0,p.useEffect)((function(){fe&&ie&&(_("do fetchStakedNfts"),X&&Q&&ie&&(at(!1),kt(!1),tt(!0),Q.methods[ie.version>=3?"getStakedTokens_V3":"getStakedTokens"](X).call().then((function(e){var t={},n=e.map((function(e){return t[e.tokenId]=e.stackeUtx,e.tokenId}));ut(t),ot(n),tt(!1),yt(!0),pn(n).then((function(e){dt(e),yt(!1)})).catch((function(e){yt(!1),kt(!0)}))})).catch((function(e){at(!0),console.log(">>> fail fetchStakedNfts",e),on(e)}))))}),[fe]),(0,p.useEffect)((function(){Q&&X&&(_("on useEffect farmContract && address"),cn())}),[X,Q]),(0,p.useEffect)((function(){X&&te&&(_("on useEffect address && nftContract"),ln())}),[X,te]);var mn=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V||"".concat(W)!="".concat(C)){e.next=4;break}V.eth.getAccounts().then((function(e){q(e[0]);var t=new V.eth.Contract(N,j.Ce[W]);console.log(t),re(t);var n=new V.eth.Contract(S,E);ne(n);var a=new V.eth.Contract(w(),D);Ae(a);var s=new V.eth.Contract(T.Mt,P);$(s)})).catch((function(e){console.log(">>> initOnWeb3Ready",e),on(e)})),e.next=8;break;case 4:return e.next=6,(0,m.IC)();case 6:e.sent&&vn();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function yn(){return(yn=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!X||!Q){e.next=7;break}return Ne(!0),i("Confirm transaction..."),e.next=5,(0,y.A)(X,Q,"claimRewards",[]);case 5:t=e.sent,Q.methods.claimRewards().send(t).then((function(e){cn(),un(),Ne(!1),i("Reward claimed","success")})).catch((function(e){Ne(!1),console.log(">>> claimRewards",e),on(e),i("Fail claim reward","error")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function hn(e){return kn.apply(this,arguments)}function kn(){return kn=(0,a.Z)(c().mark((function e(t){var n,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(X&&Q&&te)){e.next=22;break}if(n=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Pt(!0),Wt(t),i("Confirm stake transaction"),e.next=6,(0,y.A)(X,Q,"stake",[t]);case 6:n=e.sent,Q.methods.stake(t).send(n).then((function(){var e=rt;e.push(t),ot(e),ut((function(e){return(0,o.Z)((0,r.Z)({},e),(0,s.Z)({},"".concat(t),(0,v.K)()))})),dt((0,o.Z)((0,r.Z)({},pt),(0,s.Z)({},"".concat(t),wt[t]))),bt(vt.filter((function(e){return"".concat(e)!=="".concat(t)}))),St((0,o.Z)((0,r.Z)({},wt),(0,s.Z)({},"".concat(t),!1))),Pt(!1),Wt(!1),i("NFT Staked!","success")})).catch((function(e){i("Stake transaction failed","error"),console.log(">> stakeNft",e),on(e),Pt(!1),Wt(!1)})),e.next=17;break;case 10:e.prev=10,e.t0=e.catch(0),i("Stake transaction failed","error"),console.log(">> stakeNft calc gas",e.t0),on(e.t0),Pt(!1),Wt(!1);case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Xe){e.next=21;break}return tn(t),Qt(!0),i("Confirm approve transaction"),e.prev=6,e.next=9,(0,y.A)(X,te,"setApprovalForAll",[P,!0]);case 9:u=e.sent,te.methods.setApprovalForAll(P,!0).send(u).then(function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:qe(!0),Qt(!1),i("Successfull approved!","success"),n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){i("Fail approve transaction","error"),console.log(">> stakeNft do approve",e),Qt(!1),on(e)})),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(6),i("Fail approve transaction","error"),console.log(">>> stakeNft do approve calc gas",e.t0),Qt(!1),on(e.t0);case 19:e.next=22;break;case 21:n();case 22:case"end":return e.stop()}}),e,null,[[6,13]])}))),kn.apply(this,arguments)}function gn(){return(gn=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!X||!Q){e.next=18;break}return e.prev=1,Vt(!0),Xt(t),i("Confirm withdraw transaction"),e.next=7,(0,y.A)(X,Q,"withdraw",[t]);case 7:n=e.sent,Q.methods.withdraw(t).send(n).then((function(e){var n=vt;n.push(t),bt(n),ut((function(e){return(0,o.Z)((0,r.Z)({},e),(0,s.Z)({},"".concat(t),0))})),ot(rt.filter((function(e){return e!==t}))),St((0,o.Z)((0,r.Z)({},wt),(0,s.Z)({},"".concat(t),pt[t]))),dt((0,o.Z)((0,r.Z)({},pt),(0,s.Z)({},"".concat(t),!1))),Vt(!1),Xt(!1),i("NFT withdrawed","success")})).catch((function(e){console.log(">>> withdraw",e),on(e),Vt(!1),Xt(!1),i("Withdraw NFT transaction failed","error")})),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(">>> withdraw calc gas",e.t0),on(e.t0),Vt(!1),Xt(!1),i("Withdraw NFT transaction failed","error");case 18:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}(0,p.useEffect)((function(){_("on useEffect activeWeb3 initOnWeb3Ready"),C&&E&&D&&P&&mn()}),[V,C,E,D,P]);var vn=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(">>> connectWithMetamask",C),(0,m.pE)({onBeforeConnect:function(){sn(!0)},onSetActiveChain:H,onConnected:function(e,t){K(t),sn(!1)},onError:function(e){console.log(">>>> connectWithMetamask",e),on(e),sn(!1)},needChainId:C});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),bn=("".concat(f().stakeCustomNftHolder),"".concat(f().mainButton," ").concat(f().spacerBottom," primaryButton"),function(e){var t=e.message;e.onReload;return(0,u.jsx)("b",{children:t})});return(0,u.jsxs)("div",{className:f().container,children:[(0,h.Z)("stake"),(0,k.Z)({getText:d,getDesign:x}),(0,u.jsx)("h1",{className:"".concat(f().h1," pageTitle"),children:d("StakePage_Title","Stake Your NFTs - Earn ERC20")}),(0,u.jsx)("hr",{className:"".concat(f().divider," ").concat(f().spacerTop)}),X?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"stakeBeforeYourReward",children:d("StakePage_BeforeYourReward_Text")}),(0,u.jsx)("h2",{className:"stakeYourRewardLabel",children:d("StakePage_YourRewardLabel","Your reward")}),(0,u.jsx)("div",{className:"stakeAfterYourReward",children:d("StakePage_AfterYourReward_Text")}),(0,u.jsxs)("div",{className:f().tokenGrid,children:[(0,u.jsxs)("div",{className:"".concat(f().tokenItem," stakeRewardAndBank"),children:[(0,u.jsx)("h3",{className:f().tokenLabel,children:"Claimable Rewards"}),(0,u.jsx)("p",{className:f().tokenValue,children:xe?(0,u.jsx)(u.Fragment,{children:bn({message:"ERROR"})}):(0,u.jsx)("b",{children:he&&!1!==Ie&&!1!==_e?"".concat(l.bM(he,Ie)," ").concat(_e):"Loading..."})})]}),(0,u.jsxs)("div",{className:"".concat(f().tokenItem," stakeRewardAndBank"),children:[(0,u.jsx)("h3",{className:f().tokenLabel,children:"Stake Farm balance"}),(0,u.jsx)("p",{className:f().tokenValue,children:Ve?(0,u.jsx)(u.Fragment,{children:bn({message:"ERROR"})}):(0,u.jsx)("b",{children:We||!Pe||!1===Ie||!1===_e?"Loading...":"".concat(l.bM(Pe,Ie)," ").concat(_e)})})]})]}),(0,u.jsx)("hr",{className:"".concat(f().divider," ").concat(f().spacerTop)}),(0,u.jsxs)("b",{className:"stakePageConnectedWallet",children:["Connected wallet ",X]}),(0,u.jsx)("button",{disabled:Te,className:"".concat(f().mainButton," ").concat(f().spacerTop," primaryButton"),onClick:function(){return function(){return yn.apply(this,arguments)}()},children:Te?"Receiving an award...":"Claim Rewards"}),(0,u.jsx)("hr",{className:"".concat(f().divider," ").concat(f().spacerTop)}),(0,u.jsx)("h2",{className:"stakeYourStakedNfts",children:d("StakePage_YourStakedNfts","Your Staked NFTs")}),(0,u.jsx)("div",{className:"stakeYourStakedNftsDesc",children:d("StakePage_YourStakedNfts_Desc")}),(0,u.jsx)("div",{className:f().nftBoxGrid,children:et?(0,u.jsx)("p",{className:f().tokenValue,children:(0,u.jsx)("b",{children:"Loading..."})}):(0,u.jsx)(u.Fragment,{children:rt.length>0?(0,u.jsx)(u.Fragment,{children:null===rt||void 0===rt?void 0:rt.map((function(e){return(0,g.Z)({tokenId:e,tokenUri:!!pt[e]&&pt[e],isApproved:Xe,onDeStake:function(){return function(e){return gn.apply(this,arguments)}(e)},onStake:null,isFetchUri:mt,deStakeId:Jt,stakeId:Lt,isStaking:Ut,isDeStaking:Gt,isApproveDo:zt,isApproveId:en,farmStatus:ie,tokenUtx:!!ct[e]&&ct[e],openConfirmWindow:n})}))}):(0,u.jsx)("p",{className:f().tokenValue,children:(0,u.jsx)("b",{children:"You dont have staked NFTs."})})})}),(0,u.jsx)("hr",{className:"".concat(f().divider," ").concat(f().spacerTop)}),(0,u.jsx)("h2",{className:"stakeYourUnstakedNfts",children:d("StakePage_YourUnStakedNfts","Your Unstaked NFTs")}),(0,u.jsx)("div",{className:"stakeYourUnstakedNftsDesc",children:d("StakePage_YourUnStakedNfts_Desc")}),(0,u.jsx)("div",{className:f().nftBoxGrid,children:Mt?(0,u.jsx)("p",{className:f().tokenValue,children:(0,u.jsx)("b",{children:"Loading..."})}):(0,u.jsx)(u.Fragment,{children:vt.length>0?(0,u.jsx)(u.Fragment,{children:null===vt||void 0===vt?void 0:vt.map((function(e){return(0,g.Z)({tokenId:e,tokenUri:!!wt[e]&&wt[e],isApproved:Xe,onDeStake:null,onStake:function(){return hn(e)},isFetchUri:Nt,deStakeId:Jt,stakeId:Lt,isStaking:Ut,isDeStaking:Gt,isApproveDo:zt,isApproveId:en})}))}):(0,u.jsx)("p",{className:f().tokenValue,children:(0,u.jsx)("b",{children:"You dont have Unstaked NFTs."})})})})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"stakeBeforeConnectWallet",children:d("StakePage_BeforeConnect_Text")}),(0,u.jsx)("button",{disabled:an,className:"".concat(f().mainButton," primaryButton"),onClick:vn,children:an?"Connecting":"Connect Wallet"}),(0,u.jsx)("div",{className:"stakeAfterConnectWallet",children:d("StakePage_AfterConnect_Text")})]}),!1]})}},83300:function(e,t){"use strict";var n=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},26566:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},99312:function(e){"use strict";e.exports=JSON.parse('[{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')}},function(e){e.O(0,[497,616,774,888,179],(function(){return t=54997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);