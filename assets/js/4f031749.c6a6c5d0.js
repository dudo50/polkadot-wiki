(self.webpackChunk=self.webpackChunk||[]).push([[2008],{35703:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var a=o(67294);const n=function(e){var t,o=e.message,n=(0,a.useState)(!0),s=n[0],i=n[1];return a.createElement(a.Fragment,null,s&&a.createElement("div",{className:"message-box"},a.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),a.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=o,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47940:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var a=o(74165),n=o(15861),s=o(67294),i=o(87152),r=o(24354),l=o(67425);function p(e,t,o){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,a.Z)().mark((function e(t,o,n){var s,l,p,d,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){e.next=18;break}return e.abrupt("return");case 18:return p=new i.U(s),e.next=21,r.G.create({provider:p});case 21:d=e.sent,(c=o.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+o);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,o,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,o,a);break;case"precise":(0,l.Precise)(e,o,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,o);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,o=e.path,i=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,d=(0,s.useState)(""),u=d[0],k=d[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?c(i.toString(),l,t,k):k(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":e="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,o,k);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(n,l,t,k):k(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(r){console.log(r)}}}),[]),u}},67425:e=>{var t="polkadot",o="kusama",a="statemine",n="statemint",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,i,r){var l=void 0;if(i===t||i===n)l=3;else{if(i!==o&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),r((e=Number.isInteger(e/s[i].precision)?e/s[i].precision+" "+s[i].symbol:(e/s[i].precision).toFixed(l)+" "+s[i].symbol).toString())},Precise:function(e,t,o){o(e=(e=parseFloat(e))/s[t].precision+" "+s[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,s,i){var r=void 0;if(i===t||i===n)r=1;else{if(i!==o&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");r=4}s((e/=r).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},44002:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var a=o(87462),n=o(63366),s=(o(67294),o(3905)),i=o(47940),r=o(35703),l=["components"],p={id:"learn-guides-staking-pools",title:"Polkadot-JS Guides for Pool Creators",sidebar_label:"Nomination Pool Guides",description:"Polkadot-JS Guides about Nomination Pools.",keyword:["stake","staking","pools","create","destroy","claim","rewards","polkadot-js"],slug:"../learn-guides-staking-pools"},d=void 0,c={unversionedId:"learn/learn-guides-staking-pools",id:"learn/learn-guides-staking-pools",title:"Polkadot-JS Guides for Pool Creators",description:"Polkadot-JS Guides about Nomination Pools.",source:"@site/../docs/learn/learn-guides-staking-pools.md",sourceDirName:"learn",slug:"/learn-guides-staking-pools",permalink:"/docs/learn-guides-staking-pools",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-staking-pools.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1718028821,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"learn-guides-staking-pools",title:"Polkadot-JS Guides for Pool Creators",sidebar_label:"Nomination Pool Guides",description:"Polkadot-JS Guides about Nomination Pools.",keyword:["stake","staking","pools","create","destroy","claim","rewards","polkadot-js"],slug:"../learn-guides-staking-pools"},sidebar:"docs",previous:{title:"Nominator Guides",permalink:"/docs/learn-guides-nominator"},next:{title:"OpenGov Guides",permalink:"/docs/learn-guides-polkadot-opengov"}},u={},k=[{value:"Pool Creation with Polkadot-JS",id:"pool-creation-with-polkadot-js",level:2},{value:"Pool Upkeep with Polkadot-JS",id:"pool-upkeep-with-polkadot-js",level:2},{value:"Pool Destruction with Polkadot-JS",id:"pool-destruction-with-polkadot-js",level:2},{value:"Claim Rewards for Other Pool Members with Polkadot-JS",id:"claim-rewards-for-other-pool-members-with-polkadot-js",level:2}],m={toc:k},h="wrapper";function g(e){var t=e.components,p=(0,n.Z)(e,l);return(0,s.kt)(h,(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"this page")," to learn about nomination pools."),(0,s.kt)("h2",{id:"pool-creation-with-polkadot-js"},"Pool Creation with Polkadot-JS"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"You easily create a pool using the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/staking-dashboard#pools"},"Polkadot Staking Dashboard"),". See\n",(0,s.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182388-staking-dashboard-how-to-create-a-nomination-pool#How-to-create-a-pool"},"this support article"),"\nfor more information.")),(0,s.kt)("p",null,"The depositor calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"create")," extrinsic, setting the administrative roles and transferring some\nfunds to the pool to add themselves as the first member. As stated above, the depositor must always\nbe a member as long as the pool exists; they will be the last member to leave, ensuring they always\nhave some skin in the game. A significant stake from the depositor is always a good indicator of the\npool's credibility."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The current minimum bond to create a pool on"),"\n",(0,s.kt)("strong",{parentName:"p"},"Polkadot"),"","\n",(0,s.kt)("strong",{parentName:"p"},"is ",(0,s.kt)(i.Z,{network:"polkadot",path:"query.nominationPools.minCreateBond",defaultValue:5e12,filter:"humanReadable",mdxType:"RPC"}),"."),"\n",""),(0,s.kt)("p",null,"The pool\u2019s \u2018nominator role\u2019 selects validators with the nominate extrinsic. On Polkadot JS Apps UI,\nnavigate to Network > Staking > Pools and click on Add Pool button."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Create Nomination Pools",src:o(85209).Z,width:"1412",height:"638"})),(0,s.kt)("p",null,"The UI automatically assigns an ID to the pool and allows for entering the name of the pools and the\ndeposit to be bonded."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Create Nomination Pools - deposit",src:o(58732).Z,width:"1164",height:"458"})),(0,s.kt)("p",null,"When creating a pool using Polkadot JS Apps UI, all the roles are mapped to the Depositor account by\ndefault. If any of these roles need to be assigned to a different account, create the pool using\n",(0,s.kt)("inlineCode",{parentName:"p"},"create")," extrinsic available in\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics > nominationPools")," on Polkadot JS\nApps UI."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Nomination Pool Roles",src:o(12920).Z,width:"1426",height:"558"})),(0,s.kt)("h2",{id:"pool-upkeep-with-polkadot-js"},"Pool Upkeep with Polkadot-JS"),(0,s.kt)("p",null,"The nominator can update the pool\u2019s validator selection. On Polkadot JS Apps UI, navigate to\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Network > Staking > Accounts page")," and click on\nPooled button. If you have any pooled accounts with the role of nominator, you will notice the\noption to set nominees. Select the validators to nominate like you would normally using a nominator\naccount."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Nominate validators",src:o(22455).Z,width:"1810",height:"786"})),(0,s.kt)("p",null,"The root and bouncer can update the pool\u2019s state to blocked through ",(0,s.kt)("inlineCode",{parentName:"p"},"setState")," extrinsic and kick\nmembers by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"unbond")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),". (The state can also be toggled back to open)."),(0,s.kt)("h2",{id:"pool-destruction-with-polkadot-js"},"Pool Destruction with Polkadot-JS"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"As a pool admin, you can easily destroy a pool and permissionlessly remove all members using the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/staking-dashboard#pools"},"Polkadot Staking Dashboard"),". See\n",(0,s.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182388-staking-dashboard-how-to-create-a-nomination-pool#How-to-destroy-a-pool"},"this support article"),"\nfor more information.")),(0,s.kt)("p",null,"A pool can be pushed into the \u201cdestroying\u201d state via one of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The root and bouncer set the pool to \u201cdestroying\u201d. This can be done by submitting the\n",(0,s.kt)("inlineCode",{parentName:"li"},"nominationPools.setState(poolId, state)")," extrinsic using the\n",(0,s.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/extrinsics"},"Polkadot-JS UI extrinsic tab"),". Where ",(0,s.kt)("inlineCode",{parentName:"li"},"poolId")," is the\nspecific ID of the pool and ",(0,s.kt)("inlineCode",{parentName:"li"},"state"),' is the pool\'s state that must be set to "destroying". Other\npossible states are "open" and "blocked".'),(0,s.kt)("li",{parentName:"ul"},"Any account can set the pool to destroying if over 90% of the pool's active bonded balance has\nbeen ",(0,s.kt)("a",{parentName:"li",href:"/docs/learn-offenses"},"slashed"),".")),(0,s.kt)("p",null,"When a pool is in \u2018destroying\u2019 state, ",(0,s.kt)("inlineCode",{parentName:"p"},"unbond")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded")," become permissionless, so\nanyone can help all the members exit."),(0,s.kt)("p",null,"The pool is destroyed once the depositor withdraws, no members belong to the pool, and all the\npool\u2019s resources are wiped from the state."),(0,s.kt)("h2",{id:"claim-rewards-for-other-pool-members-with-polkadot-js"},"Claim Rewards for Other Pool Members with Polkadot-JS"),(0,s.kt)("p",null,"As a pool member you can claim rewards for any other members who set their\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools#claim-permissions"},"claim permissions")," to one of the ",(0,s.kt)("em",{parentName:"p"},"permissionless"),"\noptions."),(0,s.kt)("p",null,"Let's take the example of ALICE setting the claim permissions to ",(0,s.kt)("inlineCode",{parentName:"p"},"PermissionlessAll"),". Another\naccount STASH can now claim ALICE's rewards (as a free balance or compound them to the existing\nbonded balance). To do so, STASH can go to the\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Polkadot-JS UI Extrinsic Tab")," and issue the following\nextrisics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nominationPools.claimPayoutOthers")," extrinsic specifying ALICE's account. This will claim the\nrewards as a free balance on ALICE's account.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"pools-payoutOthers",src:o(51546).Z,width:"1499",height:"458"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nominationPools.bondExtraOthers")," extrinsic specifying ALICE's account and the option to bond:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the free balance currently available in ALICE's account (",(0,s.kt)("inlineCode",{parentName:"li"},"FreeBalance"),") or"),(0,s.kt)("li",{parentName:"ul"},"the pool rewards (",(0,s.kt)("inlineCode",{parentName:"li"},"Rewards"),") unclaimed by ALICE.")))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"pools-bondExtraOthers",src:o(63547).Z,width:"1496",height:"643"})))}g.isMDXComponent=!0},63547:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/nomination-pools-bondExtraOthers-d4492df464bbc1cd2c04be211a78eb46.png"},51546:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/nomination-pools-payoutOthers-bfe1ad190e494f39c2c74d65e7edd12c.png"},85209:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/Nomination-Pools-1-98ee6b5592f6851aa57c9d427d70598f.png"},58732:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/Nomination-Pools-2-84da587a4d7591f2e2f79a4054214984.png"},22455:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/Nomination-Pools-5-9b16b01bde4e095d3c8fa71aa9a9a6ca.png"},12920:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/Nomination-Pools-7-74928d7825f19208592498e7b12dee5c.png"},46601:()=>{}}]);