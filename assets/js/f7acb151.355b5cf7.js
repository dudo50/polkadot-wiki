(self.webpackChunk=self.webpackChunk||[]).push([[5483],{35703:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(67294);const n=function(e){var t,s=e.message,n=(0,a.useState)(!0),o=n[0],r=n[1];return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:"message-box"},a.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),a.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=s,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47940:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(74165),n=s(15861),o=s(67294),r=s(87152),i=s(24354),l=s(67425);function u(e,t,s){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)((0,a.Z)().mark((function e(t,s,n){var o,l,u,c,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return u=new r.U(o),e.next=21,i.G.create({provider:u});case 21:c=e.sent,(d=s.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+s);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,s,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,s,a);break;case"precise":(0,l.Precise)(e,s,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,s);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,s=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,c=(0,o.useState)(""),p=c[0],h=c[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":e="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,s,h);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(n,l,t,h):h(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),p}},67425:e=>{var t="polkadot",s="kusama",a="statemine",n="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,i){var l=void 0;if(r===t||r===n)l=3;else{if(r!==s&&r!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),i((e=Number.isInteger(e/o[r].precision)?e/o[r].precision+" "+o[r].symbol:(e/o[r].precision).toFixed(l)+" "+o[r].symbol).toString())},Precise:function(e,t,s){s(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,o,r){var i=void 0;if(r===t||r===n)i=1;else{if(r!==s&&r!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}o((e/=i).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},49736:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var a=s(87462),n=s(63366),o=(s(67294),s(3905)),r=s(47940),i=s(35703),l=["components"],u={id:"learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",sidebar_label:"Create Asset Guides",description:"Polkadot-JS Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets-create"},c=void 0,d={unversionedId:"learn/learn-guides-assets-create",id:"learn/learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",description:"Polkadot-JS Guides about Creating Assets.",source:"@site/../docs/learn/learn-guides-assets-create.md",sourceDirName:"learn",slug:"/learn-guides-assets-create",permalink:"/docs/learn-guides-assets-create",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-assets-create.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",sidebar_label:"Create Asset Guides",description:"Polkadot-JS Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets-create"},sidebar:"docs",previous:{title:"Asset Hub Guides",permalink:"/docs/learn-guides-assets"},next:{title:"Asset Hub Ledger Guides",permalink:"/docs/learn-guides-assets-ledger"}},p={},h=[{value:"Creating Assets on the Asset Hub with Polkadot-JS",id:"creating-assets-on-the-asset-hub-with-polkadot-js",level:2}],k={toc:h},m="wrapper";function b(e){var t=e.components,u=(0,n.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.kt)("p",null,"The Asset Hub is a generic assets system parachain which provides functionality for deploying and\ntransferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). The native token of the Asset\nhub is DOT. The Existential Deposit (ED),\ntransaction fees, and the deposits for proxy/multisig operations are about 1/10th of the values on\nthe Relay chains. For example, the Existential Deposit of an Asset Hub account is\n",(0,o.kt)(r.Z,{network:"statemint",path:"consts.balances.existentialDeposit",defaultValue:1e8,filter:"humanReadable",mdxType:"RPC"}),",\n","\nwhen compared to\n",(0,o.kt)(r.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"})," on Polkadot\n",".\nApart from the core protocol token DOT, the\nassets held on the Asset Hub can be broadly categorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("p",null,"For additional background on the Asset Hub check out\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-"},"this support article"),"."),(0,o.kt)("h2",{id:"creating-assets-on-the-asset-hub-with-polkadot-js"},"Creating Assets on the Asset Hub with Polkadot-JS"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on the Asset Hub, we recommend that you try out this tutorial on Westmint,\nwhich is a system parachain on Westend test network. The WND tokens (Westies) can be teleported from\nWestend to Westmint, are available for free through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"The images in the guides below are for Polkadot, but they also apply to Kusama."))),(0,o.kt)("p",null,"To create an asset on the Asset Hub, you would need a deposit of\n",(0,o.kt)(r.Z,{network:"statemint",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand around\n",(0,o.kt)(r.Z,{network:"statemint",path:"consts.assets.metadataDepositBase",defaultValue:20068e5,filter:"humanReadable",mdxType:"RPC"}),"\n","\nfor the metadata. Before you create an asset on the Asset Hub, ensure that your Asset Hub account\nbalance is a bit more than the sum of those two deposits, which should seamlessly account for the\nrequired deposits and transaction fees. You can send\nDOT from a\nPolkadot account to a the Asset Hub account\nusing the teleport functionality. For instructions on teleporting\nDOT, check this\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required DOT balance on\nyour Asset Hub account, the following instructions should let you successfully create an asset on\nthe Asset Hub"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access the Asset Hub through ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:s(85353).Z,width:"1710",height:"554"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on the Asset Hub, the asset's symbol, number of\ndecimals for the asset, the minimum balance required to hold this asset on an Asset Hub account\nand the most important field of your asset - the unique asset ID. The UI would not let you enter\nan ID that has already been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:s(3910).Z,width:"1510",height:"798"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:s(25965).Z,width:"1518",height:"510"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction (If you like to verify the transaction details before signing, you\ncan click on the dropdown button pointed by the arrow in the snapshot below).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:s(39764).Z,width:"1520",height:"610"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on the Asset Hub."))}b.isMDXComponent=!0},85353:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-0-71cbceb69c712729d7920b4575ab8f46.png"},3910:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},25965:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},39764:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},46601:()=>{}}]);