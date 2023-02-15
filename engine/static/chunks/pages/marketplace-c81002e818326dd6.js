(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{64914:function(e){e.exports=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_extraData",type:"bytes"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,type:"function"},{inputs:[{name:"_initialAmount",type:"uint256"},{name:"_tokenName",type:"string"},{name:"_decimalUnits",type:"uint8"},{name:"_tokenSymbol",type:"string"}],type:"constructor"},{payable:!1,type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}]},35610:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketplace",function(){return t(46007)}])},66124:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(85893),s=t(67294),o=t(83300),r=t.n(o),i=function(e){return e.startsWith("ipfs://")?"".concat("https://skywalker.infura-ipfs.io/ipfs/").concat(e.substring(7)):e};function c(e){var n=e.url,t=(0,s.useState)(!1),o=t[0],c=t[1],l=(0,s.useState)(!0),u=l[0],d=l[1],p=(0,s.useState)(!1),f=p[0],m=p[1],y=(0,s.useState)(!1),x=(y[0],y[1]),h=(0,s.useState)({}),g=h[0],v=h[1];return(0,s.useState)((function(){n&&r()(i(n)).then((function(e){return e.headers.get("content-type").startsWith("image/")?"IMAGE":e.text()})).then((function(e){if("IMAGE"==e)return"IMAGE";try{return JSON.parse(e.slice(1))}catch(n){try{return JSON.parse(e)}catch(t){return"FAIL_PARSE"}}})).then((function(e){c(!0),d(!1),"FAIL_PARSE"!==e&&"IMAGE"!==e?v(e):"IMAGE"===e?m(!0):x(!0)})).catch((function(e){console.log("fail fetch",e)}))}),[n]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:u?(0,a.jsx)("div",{children:"Fetching"}):(0,a.jsx)(a.Fragment,{children:o&&(0,a.jsxs)(a.Fragment,{children:[g&&g.image&&(0,a.jsx)("img",{src:i(g.image)}),f&&(0,a.jsx)("img",{src:i(n)}),g&&g.name&&(0,a.jsx)("strong",{children:g.name})]})})})})}},67333:function(e,n,t){"use strict";var a=t(85893),s=t(11163),o=t(214),r=t.n(o),i=t(36485);n.Z=function(e){(0,s.useRouter)();var n=e.getDesign,t=e.getText;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"".concat(r().mainLogo," logoAddParams"),children:(0,a.jsx)("a",{href:(0,i.Rg)("index"),children:(0,a.jsx)("img",{src:n("logoUri","uri",(0,i.Vh)("vkmpnft.png","mainLogo")),alt:t("Stake NFT - earn ERC20","MainPage_Header")})})})})}},13533:function(e,n,t){"use strict";var a=t(29815),s=t(64914),o=t.n(s),r=t(51024),i=t(99312),c=t(64262),l=t(81586),u=t(3283),d=t.n(u);n.Z=function(e){var n=e.erc20list,t=e.chainId,s=e.withAllowance,u=s||{},p=u.allowanceFrom,f=u.allowanceTo;return new Promise((function(e,u){var m=(0,c.T_)(t);if(m)try{var y=new(new(d())(m.rpcUrls[0]).eth.Contract)(i,c.Ce[t]),x=new l.vU(o()),h=[];n.forEach((function(e){h=(0,a.Z)(h).concat([{group:e,func:"name",encoder:x,target:e},{group:e,func:"symbol",encoder:x,target:e},{group:e,func:"decimals",encoder:x,target:e}],(0,a.Z)(s?[{group:e,func:"allowance",args:[p,f],encoder:x,target:e}]:[]))})),(0,r.L)({multicall:y,calls:h}).then((function(n){e(n)})).catch((function(e){console.log(">>> err",e),u(e)}))}catch(g){u(g)}else u("NOT_SUPPORTED_CHAIN")}))}},46007:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var a=t(47568),s=t(26042),o=t(69396),r=t(29815),i=t(34051),c=t.n(i),l=t(85893),u=t(67294),d=t(214),p=t.n(d),f=t(78967),m=t(15200),y=t(67333),x=t(13533),h=t(76969),g=t(61936),v=t(44423),b=t(66124),T=function(e){var n=e.tokenId,t=e.tokenUri,a=e.price,s=(e.seller,e.currency),o=e.needApprove,r=e.isApproving,i=e.isBuying,c=e.onBuy,u=e.isActive,d=e.onApproveAndBuy,f=(e.openConfirmWindow,e.isUserNFT),m=e.isOwner,y=e.isTradeAllow,x=e.isRemoveFromTrade,h=e.onRemoveFromTrade,g=e.onAddToTrade,T=e.isPreview,j=e.isWalletConnected,w=e.isBaseConfigReady;return(0,l.jsxs)("div",{className:"".concat(p().nftBox," nftTokenBox ").concat(p().nftSaleBox),children:[!1!==t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{children:["#",n]}),(0,l.jsx)(b.Z,{url:t})]}):(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("h3",{children:["#",n]})}),!T&&(0,l.jsx)(l.Fragment,{children:f?(0,l.jsxs)(l.Fragment,{children:[w&&(0,l.jsx)("a",{className:"".concat(p().mainButton," ").concat(p().spacerBottom," primaryButton"),href:(0,v.R)("stake"),children:"Go to staking"}),y&&(0,l.jsx)("button",{disabled:r||i||x,className:"".concat(p().mainButton," ").concat(p().spacerBottom," primaryButton"),onClick:g,children:"Sell"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:p().nftTokenPrice,children:[a," ",s]}),j&&(0,l.jsx)(l.Fragment,{children:m?(0,l.jsx)("button",{disabled:r||i||x,className:"".concat(p().mainButton," ").concat(p().spacerBottom," primaryButton"),onClick:h,children:x&&u?"Removing...":"Remove from sale"}):(0,l.jsx)(l.Fragment,{children:o?(0,l.jsx)("button",{disabled:r||i||x,className:"".concat(p().mainButton," ").concat(p().spacerBottom," primaryButton"),onClick:d,children:r&&u?"Approving...":"Approve & Buy"}):(0,l.jsx)("button",{disabled:r||i||x,className:"".concat(p().mainButton," ").concat(p().spacerBottom," primaryButton"),onClick:c,children:i&&u?"Buying...":"Buy"})})})]})})]},n.toString())},j=t(40589),w=t(64262),k=t(5329),N=t(44431),F=t.n(N),S=t(64914),C=t.n(S),A=t(53419),I=function(e){return new Promise((function(n,t){var s=e.activeWeb3,o=(e.chainId,e.tokenAddress),i=e.approveFor,l=e.weiAmount,u=e.onTrx||function(){},d=e.onSuccess||function(){},p=e.onError||function(){},f=e.onFinally||function(){};s.eth.getAccounts().then(function(){var e=(0,a.Z)(c().mark((function e(a){var m,y,x,h;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>0)){e.next=10;break}return y=a[0],x=new s.eth.Contract(C(),o),e.next=6,(0,A.A)(y,x,"approve",[i,l]);case 6:h=e.sent,(m=x.methods).approve.apply(m,(0,r.Z)([i,l])).send(h).on("transactionHash",(function(e){console.log("transaction hash:",e),u(e)})).on("error",(function(e){console.log("transaction error:",e),p(e),t(e)})).on("receipt",(function(e){console.log("transaction receipt:",e),d(e)})).then((function(e){n(e),f(e)})),e.next=11;break;case 10:t("NO_ACTIVE_ACCOUNT");case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(">>> approveToken",e),t(e)}))}))},_=t(26566),M=t(51024),B=t(99312),E=t(81586),R=t(3283),O=t.n(R),P=function(e){return new Promise(function(){var n=(0,a.Z)(c().mark((function n(t,a){var o,r,i,l,u,d,p,f,m,y,x,h,g,v;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.chainId,r=e.walletAddress,i=e.nftAddress,!(l=(0,w.T_)(o))){n.next=32;break}return u=new(O())(l.rpcUrls[0]),d=new u.eth.Contract(_,i),p=!1,f=!1,m=0,y=0,n.prev=9,n.next=12,d.methods.totalSupply().call();case 12:m=n.sent,p=!0,n.next=19;break;case 16:n.prev=16,n.t0=n.catch(9),console.log("Fail fetch total supply");case 19:return n.prev=19,n.next=22,d.methods.MAX_SUPPLY().call();case 22:y=n.sent,f=!0,n.next=29;break;case 26:n.prev=26,n.t1=n.catch(19),console.log("Fail fetch max supply");case 29:if(f||p){for(x=new u.eth.Contract(B,w.Ce[o]),h=new E.vU(_),g=[],v=1;v<=(p?m:y);v++)g.push({group:v,func:"ownerOf",args:[v],encoder:h,target:i}),g.push({group:v,func:"tokenURI",args:[v],encoder:h,target:i});(0,M.L)({multicall:x,calls:g}).then((function(e){var n=Object.keys(e).map((function(n){return(0,s.Z)({tokenId:n},e[n])})).filter((function(e){return e.ownerOf.toLowerCase()==r.toLowerCase()}));t(n)})).catch((function(e){console.log(">> err",e),a(e)}))}else a("NOT SUPPORTED");n.next=33;break;case 32:a("UNKNOWN CHAIN");case 33:case"end":return n.stop()}}),n,null,[[9,16],[19,26]])})));return function(e,t){return n.apply(this,arguments)}}())},U=t(66089),W=t.n(U);function Z(e){var n=e.activeWeb3,t=e.openConfirmWindow,a=e.addNotify,s=e.nftInfo,o=e.onClose,r=e.onSelled,i=e.allowedERC20Info,c=e.chainId,d=e.nftContract,f=e.tradeFee,m=(0,w.T_)(c).nativeCurrency,y=(0,u.useState)(w.r_),x=y[0],h=y[1],v=(0,u.useState)(0),b=v[0],j=v[1],N=(0,u.useState)(0),S=N[0],C=N[1],A=(0,u.useState)(!1),I=A[0],_=A[1],M=x==w.r_?m.symbol:i[x].symbol,B=(0,u.useState)(!1),E=B[0],R=B[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(W(),{id:"559e436679f25d92",children:".sellNftModal.jsx-559e436679f25d92{}.sellNftModal.jsx-559e436679f25d92>DIV.jsx-559e436679f25d92{min-width:700px}.sellNftModal.jsx-559e436679f25d92 .nftHolder.jsx-559e436679f25d92{width:auto}.sellNftModal.jsx-559e436679f25d92 .sellForm.jsx-559e436679f25d92{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.sellNftModal.jsx-559e436679f25d92 .sellForm.jsx-559e436679f25d92>DIV.jsx-559e436679f25d92{width:50%}.sellNftModal.jsx-559e436679f25d92 .inputsHolder.jsx-559e436679f25d92{text-align:left}.sellNftModal.jsx-559e436679f25d92 .inputsHolder.jsx-559e436679f25d92 LABEL.jsx-559e436679f25d92{display:block;font-weight:bold;font-size:14pt}.sellNftModal.jsx-559e436679f25d92 .inputsHolder.jsx-559e436679f25d92 SELECT.jsx-559e436679f25d92,.sellNftModal.jsx-559e436679f25d92 .inputsHolder.jsx-559e436679f25d92 INPUT.jsx-559e436679f25d92{display:block;width:100%;font-size:14pt;margin-bottom:10px;line-height:32px;height:32px}.sellNftModal.jsx-559e436679f25d92 .inputsHolder.jsx-559e436679f25d92 INPUT.jsx-559e436679f25d92{margin-bottom:0px}.sellNftModal.jsx-559e436679f25d92 .inputsHolder.jsx-559e436679f25d92 .info.jsx-559e436679f25d92 LABEL.jsx-559e436679f25d92{font-size:10pt}.sellNftModal.jsx-559e436679f25d92 .info.jsx-559e436679f25d92 STRONG.jsx-559e436679f25d92{display:block;font-size:10pt}.sellNftModal.jsx-559e436679f25d92 .error.jsx-559e436679f25d92{display:block;font-size:10pt;color:#d90d0d}"}),(0,l.jsx)("div",{className:"jsx-559e436679f25d92 "+"".concat(p().confirmWindow," sellNftModal"),children:(0,l.jsxs)("div",{className:"jsx-559e436679f25d92",children:[(0,l.jsx)("h3",{className:"jsx-559e436679f25d92",children:"Selling NFT"}),(0,l.jsx)("span",{className:"jsx-559e436679f25d92",children:"Set up sales currencies and specify the desired price"}),(0,l.jsxs)("div",{className:"jsx-559e436679f25d92 sellForm",children:[(0,l.jsx)("div",{className:"jsx-559e436679f25d92 "+"".concat(p().nftBoxGrid," nftHolder"),children:T({tokenId:s.tokenId.toString(),tokenUri:s.tokenURI,isPreview:!0})}),(0,l.jsxs)("div",{className:"jsx-559e436679f25d92 inputsHolder",children:[(0,l.jsxs)("div",{className:"jsx-559e436679f25d92",children:[(0,l.jsx)("label",{className:"jsx-559e436679f25d92",children:"Currency:"}),(0,l.jsxs)("select",{value:x,onChange:function(e){h(e.target.value)},className:"jsx-559e436679f25d92",children:[(0,l.jsxs)("option",{value:w.r_,className:"jsx-559e436679f25d92",children:["Native (",m.symbol,")"]}),Object.keys(i).length>0&&(0,l.jsx)(l.Fragment,{children:Object.keys(i).map((function(e){return(0,l.jsx)("option",{value:e,className:"jsx-559e436679f25d92",children:i[e].symbol},e)}))})]})]}),(0,l.jsxs)("div",{className:"jsx-559e436679f25d92",children:[(0,l.jsx)("label",{className:"jsx-559e436679f25d92",children:"Price:"}),I&&(0,l.jsx)("strong",{className:"jsx-559e436679f25d92 error",children:"Price must be a number greater than zero"}),(0,l.jsx)("input",{value:b,onChange:function(e){!function(n){_(!1);try{if(parseFloat(n)<=0)_(!0);else{var t=(0,k.r)(n,x==w.r_?m.decimals:i[x].decimals).toString(),a=new(F())(t).dividedBy(100).multipliedBy(f),s=new(F())(t).minus(a);C((0,k.m)(s.toFixed(),x==w.r_?m.decimals:i[x].decimals))}}catch(e){C(!1),_(!0)}j(n)}(e.target.value)},type:"number",min:"0",step:"0.001",className:"jsx-559e436679f25d92"})]}),Number(f)>0&&(0,l.jsxs)("div",{className:"jsx-559e436679f25d92 info",children:[(0,l.jsxs)("label",{className:"jsx-559e436679f25d92",children:["Marketplace fee: ",f,"%"]}),S>0&&(0,l.jsx)("strong",{className:"jsx-559e436679f25d92",children:"You are got ".concat(S," ").concat(M)})]})]})]}),(0,l.jsxs)("div",{className:"jsx-559e436679f25d92",children:[(0,l.jsx)("button",{disabled:E,onClick:function(){t(b?{title:"Selling NFT",message:"Do you really want to sell NFT #".concat(s.tokenId.toString()," for ").concat(b," ").concat(M,"?"),onConfirm:function(){R(!0),a("Placing NFT to Marketplace. Confirm transaction"),(0,g.Z)({activeWeb3:n,contractAddress:d,method:"sellNFT",args:[s.tokenId.toString(),(0,k.r)(b,x==w.r_?m.decimals:i[x].decimals),x],onTrx:function(e){console.log(">> onTrx",e),a("Placing NFT at Marketplace TX ".concat(e),"success")},onSuccess:function(e){},onError:function(e){console.log(">> onError",e),a("Fail place NFT at Marketplace. ".concat(e.message?e.message:""),"error"),R(!1)},onFinally:function(e){a("NFT successfull placed at Marketplace","success"),R(!1),r()}})}}:{title:"Selling NFT",message:"Enter the correct price",isOk:!0})},className:"jsx-559e436679f25d92 "+"".concat(p().mainButton," primaryButton"),children:"Sell"}),(0,l.jsx)("button",{disabled:E,onClick:o,className:"jsx-559e436679f25d92 "+"".concat(p().mainButton," primaryButton"),children:"Cancel"})]})]})})]})}var L=function(e){var n=e.storageData,t=e.storageData.isBaseConfigReady,i=(e.isOwner,e.addNotify),d=e.getText,v=e.getDesign,b=e.openConfirmWindow,N=(e.storageMenu,(0,u.useState)(null===n||void 0===n?void 0:n.chainId)),S=N[0],C=N[1],A=(0,u.useState)(null===n||void 0===n?void 0:n.nftCollection),_=A[0],M=A[1],B=(0,u.useState)({}),E=B[0],R=B[1],U=(0,u.useState)(!1),W=U[0],L=U[1],H=(0,u.useState)([]),D=H[0],G=H[1],z=(0,u.useState)({}),X=z[0],Y=z[1],J=(0,u.useState)(!1),V=(J[0],J[1]),q=(0,u.useState)(!1),K=q[0],Q=q[1],$=(0,u.useState)(!1),ee=$[0],ne=$[1],te=(0,u.useState)(!1),ae=te[0],se=te[1],oe=(0,u.useState)(!1),re=oe[0],ie=oe[1],ce=(0,u.useState)(!1),le=(ce[0],ce[1]),ue=(0,u.useState)(!1),de=ue[0],pe=ue[1],fe=(0,u.useState)(!1),me=fe[0],ye=fe[1],xe=(0,u.useState)(!1),he=xe[0],ge=xe[1],ve=(0,u.useState)(!1),be=ve[0],Te=ve[1],je=(0,u.useState)(!1),we=je[0],ke=je[1],Ne=function(e){i("Buying NFT. Confirm transaction"),ke(!0),(0,g.Z)((0,o.Z)((0,s.Z)({activeWeb3:ae,contractAddress:_,method:D[e].erc20==w.r_?"buyNFT":"buyNFTbyERC20"},D[e].erc20==w.r_?{weiAmount:D[e].price.toString()}:{}),{args:[D[e].tokenId.toString()],onTrx:function(e){console.log(">> onTrx",e),i("Buy NFT TX ".concat(e),"success")},onSuccess:function(e){},onError:function(e){console.log(">> onError",e),i("Fail buy NFT. ".concat(e.message?e.message:""),"error"),ke(!1)},onFinally:function(e){i("NFT success buyed","success"),ke(!1),Ge(),_e(!0)}}))},Fe=(0,u.useState)([]),Se=Fe[0],Ce=Fe[1],Ae=(0,u.useState)(!0),Ie=Ae[0],_e=Ae[1],Me=(0,u.useState)(!1),Be=(Me[0],Me[1]),Ee=(0,u.useState)(!1),Re=Ee[0],Oe=Ee[1];(0,u.useEffect)((function(){S&&re&&_&&Ie&&(_e(!1),Ce([]),Oe(!1),Be(!0),P({chainId:S,walletAddress:re,nftAddress:_}).then((function(e){Ce(e),Be(!1),Oe(!0)})).catch((function(e){Be(!1),Oe(!0),console.log(">>> err",e)})))}),[S,re,_,Ie]);var Pe=(0,u.useState)(!1),Ue=Pe[0],We=Pe[1],Ze=(0,u.useState)({}),Le=Ze[0],He=Ze[1];(0,u.useEffect)((function(){if(E&&E.isNFTStakeToken&&E.NFTStakeInfo){var e=E.NFTStakeInfo;G((0,r.Z)(e.tokensAtSale)),e.allowedERC20.length>0?(V(!0),Q(!1),(0,x.Z)({erc20list:e.allowedERC20,chainId:S,withAllowance:!!re&&{allowanceFrom:re,allowanceTo:_}}).then((function(e){Y(e),V(!1),Q(!0)})).catch((function(e){console.log("Fail fetch allowed erc20 info",e),Q(!0),V(!1)}))):Q(!0)}}),[E]);var De=function(e,n){var t=!1;try{t=e.message.replace("Internal JSON-RPC error.",""),t=JSON.parse(t)}catch(a){}switch(t&&t.message?t.message:e.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",e.message)}},Ge=function(){(0,h.Z)(_,S).then((function(e){G((0,r.Z)(e.NFTStakeInfo.tokensAtSale))})).catch((function(e){console.log(">>> fail fetch nft info",e)}))},ze=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ae||"".concat(ee)!="".concat(S)){e.next=4;break}ae.eth.getAccounts().then((function(e){console.log(">>> initOnWeb3Ready",e),ie(e[0]);var n=new ae.eth.Contract(j.Mt,_);le(n),(0,h.Z)(_,S).then((function(e){console.log(">>> nft info fetched",e),R(e),L(!0)})).catch((function(e){console.log(">>> fail fetch nft info",e)}))})).catch((function(e){console.log(">>> initOnWeb3Ready",e),De(e)})),e.next=8;break;case 4:return e.next=6,(0,f.IC)();case 6:e.sent&&Xe();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){(0,f.Wk)((function(e){ie(e),e&&(ze(),_e(!0))}))}),[]),(0,u.useEffect)((function(){if(S&&_&&!re){console.log(">>> has chainId");var e=(0,w.T_)(S);if(console.log(">>> chainInfo",e),e)try{var n=new(O())(e.rpcUrls[0]);console.log(">>> web3",n),se(n),(0,h.Z)(_,S).then((function(e){console.log(">>> nft info fetched no address",e),R(e),L(!0)})).catch((function(e){console.log(">>> fail fetch nft info",e)}))}catch(t){console.log(">>> err",t)}}}),[S,_,re]),(0,u.useEffect)((function(){n&&n.chainId&&n.nftCollection&&(C(n.chainId),M(n.nftCollection))}),[n]),(0,u.useEffect)((function(){var e;e="on useEffect activeWeb3 initOnWeb3Ready",console.log(e),ae&&S&&_&&ze()}),[ae,S,_]);var Xe=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,f.pE)({onBeforeConnect:function(){pe(!0)},onSetActiveChain:ne,onConnected:function(e,n){se(n),pe(!1)},onError:function(e){console.log(">>>> connectWithMetamask",e),De(e),pe(!1)},needChainId:S});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=(0,w.T_)(S).nativeCurrency;return(0,l.jsxs)("div",{className:p().container,children:[(0,m.Z)("marketplace"),(0,y.Z)({getText:d,getDesign:v}),(0,l.jsx)("h1",{className:"".concat(p().h1," pageTitle"),children:d("MarketPage_Title","NFTs Marketplace")}),(0,l.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),(0,l.jsxs)(l.Fragment,{children:[re?(0,l.jsxs)("h4",{children:["Connected wallet ",re]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"mpBeforeConnectWallet",children:d("MarketPage_BeforeConnect_Text")}),(0,l.jsx)("button",{disabled:de,className:"".concat(p().mainButton," primaryButton"),onClick:Xe,children:de?"Connecting":"Connect Wallet"}),(0,l.jsx)("div",{className:"mpAfterConnectWallet",children:d("MarketPage_AfterConnect_Text")})]}),W?(0,l.jsx)(l.Fragment,{children:E.isNFTStakeToken?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:p().nftBoxGrid,children:K?(0,l.jsx)(l.Fragment,{children:D.map((function(e,n){var a=e.uri,s=e.tokenId,o=e.erc20,r=e.seller,c=(0,k.m)(e.price,o==w.r_?Ye.decimals:X[o].decimals),l=!1;return o!=w.r_&&(l=new(F())(e.price.toString()).isGreaterThan(X[o].allowance)),T({isWalletConnected:re,tokenId:s.toString(),tokenUri:a,price:c,needApprove:l,seller:r,isERC:o!=w.r_,currency:o==w.r_?Ye.symbol:X[o].symbol,openConfirmWindow:b,isApproving:he,isBuying:we,isActive:n===me,isOwner:e.seller==re,isRemoveFromTrade:be,isBaseConfigReady:t,onRemoveFromTrade:function(){ye(n),function(e){var n=D[e].tokenId;b({title:"Remove lot from marketplace",message:"Do you want remove NFT #".concat(n.toString()," from marketplace?"),onConfirm:function(){Te(!0),i("Removing NFT from marketplace. Confirm transaction"),(0,g.Z)({activeWeb3:ae,contractAddress:_,method:"deSellNFT",args:[n.toString()],onTrx:function(e){console.log(">> onTrx",e),i("Remove NFT from marketplace TX ".concat(e),"success")},onSuccess:function(e){},onError:function(e){console.log(">> onError",e),i("Fail remove NFT. ".concat(e.message?e.message:""),"error"),Te(!1)},onFinally:function(e){i("NFT successfull removed from marketplace","success"),Te(!1),Ge(),_e(!0)}})}})}(n)},onBuy:function(){ye(n),Ne(n)},onApproveAndBuy:function(){ye(n),function(e){i("Approving... Confirm transaction");var n=D[e],t=n.erc20,a=n.price;ge(!0),I({activeWeb3:ae,chainId:S,tokenAddress:t,approveFor:_,weiAmount:a.toString(),onTrx:function(e){i("Approving TX hash ".concat(e),"success")},onFinally:function(){i("Approved","success"),ge(!1),Ne(e)},onError:function(e){ge(!1),i("Fail approve token. ".concat(e.message?e.message:""),"error")}})}(n)}})}))}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:"Loading..."})})}),(0,l.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),!1!==re&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Your NFTs"}),(0,l.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),(0,l.jsx)("div",{className:p().nftBoxGrid,children:Re?(0,l.jsx)(l.Fragment,{children:Se.length>0?(0,l.jsx)(l.Fragment,{children:Se.map((function(e,n){return T({tokenId:e.tokenId.toString(),tokenUri:e.tokenURI,openConfirmWindow:b,isUserNFT:!0,isTradeAllow:E.NFTStakeInfo.allowUserSale,onAddToTrade:function(){!function(e){He(Se[e]),We(!0)}(n)}})}))}):(0,l.jsx)("div",{children:"You are dont have any NFTs"})}):(0,l.jsx)("div",{children:"Loading..."})})]}),Ue&&(0,l.jsx)(Z,{activeWeb3:ae,openConfirmWindow:b,addNotify:i,nftInfo:Le,chainId:S,nftContract:_,isBaseConfigReady:t,allowedERC20Info:X,tradeFee:E.NFTStakeInfo.tradeFee.toString(),onClose:function(){We(!1)},onSelled:function(){We(!1),Ge(),_e(!0)}})]}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:"Not NFTStake contract"})})}):(0,l.jsx)("div",{children:d("MarketPage_Loading","Loading...")})]})]})}},83300:function(e,n){"use strict";var t=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("unable to locate global object")}();e.exports=n=t.fetch,t.fetch&&(n.default=t.fetch.bind(t)),n.Headers=t.Headers,n.Request=t.Request,n.Response=t.Response},26566:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}},function(e){e.O(0,[497,89,203,774,888,179],(function(){return n=35610,e(e.s=n);var n}));var n=e.O();_N_E=n}]);