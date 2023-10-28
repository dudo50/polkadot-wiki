"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7837],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),h=a,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return o?n.createElement(g,i(i({ref:t},d),{},{components:o})):n.createElement(g,i({ref:t},d))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},83388:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"ledger",title:"Using the Polkadot & Kusama Ledger Applications",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},s=void 0,p={unversionedId:"general/ledger",id:"general/ledger",title:"Using the Polkadot & Kusama Ledger Applications",description:"Use the Polkadot Ledger Application.",source:"@site/../docs/general/ledger.md",sourceDirName:"general",slug:"/ledger",permalink:"/docs/ledger",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/ledger.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"ledger",title:"Using the Polkadot & Kusama Ledger Applications",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},sidebar:"docs",previous:{title:"Multisig Apps",permalink:"/docs/multisig-apps"},next:{title:"Polkadot Vault",permalink:"/docs/polkadot-vault"}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:2},{value:"Using on Polkadot-JS Apps",id:"using-on-polkadot-js-apps",level:2},{value:"Loading Your Account",id:"loading-your-account",level:3},{value:"Derivation paths",id:"derivation-paths",level:4},{value:"Connecting your ledger device",id:"connecting-your-ledger-device",level:4},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:3},{value:"Checking the Balance of Your Account",id:"checking-the-balance-of-your-account",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:3},{value:"Staking",id:"staking",level:3},{value:"Removing Expired Democracy Locks",id:"removing-expired-democracy-locks",level:3},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}],c={toc:u},h="wrapper";function g(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)(h,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Need support with your Ledger Wallet?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you need help using Ledger you can contact the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},(0,r.kt)("strong",{parentName:"a"},"Polkadot Support Team")),".")),(0,r.kt)("admonition",{title:"Please Note",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Because of required WebUSB support, Ledger wallets currently only work on Chromium-based browsers\nlike Google Chrome.")),(0,r.kt)("p",null,"The Polkadot ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger"),"\napplication is compatible with the Ledger Nano S and the Ledger Nano X devices. Ledger devices are\nhardware wallets that keep your secret key secured on a physical device that does not expose it to\nyour computer or the internet. The private keys will not be leaked even if you connect your nano via\nUSB to your computer. Ledger devices are also hierarchical deterministic wallets (HD wallets), that\nis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Deterministic")," means that only one seed phrase generates all the accounts for different\nblockchain networks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Hierarchical")," means that the accounts are generated in a tree-like structure for different\npurposes.")),(0,r.kt)("p",null,"Ledger devices can be equipped with applications that are blockchain-specific. Third parties usually\ndevelop such applications, enabling the user to transact securely on the blockchain network. The\nPolkadot Ledger application allows you to manage\nPolkadot's native token,\nDOT. It supports most of the transaction types of\nthe network, including batch transactions from the Utility pallet."),(0,r.kt)("admonition",{title:"Ledger apps may not support all the transactions",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"Ledger Polkadot App"),"","\nspecification for the list of transactions supported. Some transactions are supported only on a\nspecific app version, and others are not supported by any version. For instance, the staking ",(0,r.kt)("inlineCode",{parentName:"p"},"rebag"),"\nextrinsic is supported on the ",(0,r.kt)("strong",{parentName:"p"},"XL version")," but not on the ",(0,r.kt)("strong",{parentName:"p"},"lite version"),". Also, joining a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," is only possible with the XL version.")),(0,r.kt)("p",null,"If you have trouble using Ledger or following the directions below, you can try searching for your\nissue on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support pages"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("admonition",{title:"For Ledger Nano S users only",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The lite version of the Polkadot Ledger App that you can install by default in the Ledger Nano S has\nlimited functionality. The Ledger Nano S is no longer produced and has limited memory that is just\nright to accommodate the XL version of the Polkadot Ledger App, which gives the user more\nfunctionalities."),(0,r.kt)("p",{parentName:"admonition"},"If you do use a Nano S with the XL version you will not be able to:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Install any other Ledger application on your device"),(0,r.kt)("li",{parentName:"ul"},"Add Polkadot accounts to the Ledger Live App, but you will be able to add them to\n",(0,r.kt)("a",{parentName:"li",href:"/docs/wallets-and-extensions"},(0,r.kt)("strong",{parentName:"a"},"treasury-funded wallets"))," who support ledger devices or to the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/polkadotjs#polkadot-js-extension"},(0,r.kt)("strong",{parentName:"a"},"browser extension"))," and the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/polkadotjs-ui"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS UI")),"."))),(0,r.kt)("p",null,"Here is a list of what you will need before using\nPolkadot with Ledger:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Ledger Nano X or Nano S plus (recommended for\nPolkadot Ledger App space requirements and\nfunctionalities)."),(0,r.kt)("li",{parentName:"ul"},'The latest firmware of the Polkadot Ledger\nApp installed (always check for updates in Ledger Live under the "Manager" tab, you will need to\nallow access with your nano).'),(0,r.kt)("li",{parentName:"ul"},"Ledger Live is installed and at version 2.1 or newer (see settings -> about to find out if you're\nup to date)."),(0,r.kt)("li",{parentName:"ul"},"A Chromium-based web browser is installed that you can use to access the\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/"},"Polkadot-JS UI"),".")),(0,r.kt)("h2",{id:"using-ledger-live"},"Using Ledger Live"),(0,r.kt)("p",null,"Check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live"},"this support article"),"\nto learn how to use Polkadot with ledger live."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live will only show the main account with BIP44 path 44'/354'/0'/0'/0'. This means that if\nyou import a ",(0,r.kt)("a",{parentName:"p",href:"#using-on-polkadot-js-apps"},"derived account using Polkadot-JS")," with a derivation path\n44'/354'/0'/0'/1', it will not be displayed on the Ledger Live App. Consequently, it is not possible\nto transact with derived accounts using the Ledger Live App, but it is possible to do so using\nPolkadot-JS. Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"the accounts page")," for more information about\nderived accounts and derivation paths.")),(0,r.kt)("p",null,"",""),(0,r.kt)("h2",{id:"using-on-polkadot-js-apps"},"Using on Polkadot-JS Apps"),(0,r.kt)("h3",{id:"loading-your-account"},"Loading Your Account"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live should be off while using Ledger with Polkadot-JS UI as it can interfere with normal\noperation.")),(0,r.kt)("p",null,"You can import your Ledger account to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot Extension")," or to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension"},"this support article"),",\nwhile if you want to import Ledger accounts to the Polkadot-JS UI you can consult\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui"},"this other article"),"."),(0,r.kt)("h4",{id:"derivation-paths"},"Derivation paths"),(0,r.kt)("p",null,"When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,r.kt)("inlineCode",{parentName:"p"},"account type")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"account index"),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a\nPolkadot ledger account for the first time on\nLedger Live with name ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1"),"",", this\ncan be added to Polkadot-JS using the 0/0 derivation path (i.e. account type = 0 and account index =\n0). If you add a second account called\n",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 2"),"",", this will correspond to the\n1/0 derivation path, and so on. We thus have multiple parent accounts that can be viewed and used in\nboth Ledger Live and Polkadot-JS. Additionally, we can use Polkadot-JS UI to create multiple\nchildren accounts from each parent account. For example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1"),""," with 0/0 derivation path can\nhave child 0/1, 0/2, etc. that can be used within the UI. However, such children accounts cannot be\nused in Ledger Live, as it only scans through the parent accounts. So, remember that the balances on\nthe children accounts cannot be viewed, and you will not be able to transact with those accounts on\nLedger Live."),(0,r.kt)("h4",{id:"connecting-your-ledger-device"},"Connecting your ledger device"),(0,r.kt)("p",null,"While using a ledger device to sign transactions, depending on your browser and its security\nsettings, you might need to confirm the USB connection through a popup like the one below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Display the device connection popup",src:o(30536).Z,width:"468",height:"461"})),(0,r.kt)("p",null,'If you are adding your Ledger Nano for the first time, click on the "Unknown device" line and the\n"Connect" button will become available.'),(0,r.kt)("admonition",{title:"Signature error message",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have already connected your device, but an error message appears before signing a\ntransaction, make sure you have opened the\nPolkadot application on your Ledger Nano\ndevice. Visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support page")," for\nmore information about signing transactions using your ledger.")),(0,r.kt)("h3",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,r.kt)("p",null,"To display your Polkadot ledger account\naddress on your Ledger Nano, you can follow the guidelines on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181854-how-to-confirm-your-account-address-on-your-ledger-device"},"this support article"),".\nHere you can scroll through and make sure the address matches what is displayed on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,r.kt)("h3",{id:"checking-the-balance-of-your-account"},"Checking the Balance of Your Account"),(0,r.kt)("p",null,"There are a few methods to check the balance of your account. Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-"},"this support article"),"\nfor information."),(0,r.kt)("h3",{id:"sending-a-transfer"},"Sending a Transfer"),(0,r.kt)("p",null,"General instructions to send a transfer can be found on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with your Ledger nano check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support article"),"."),(0,r.kt)("h3",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,r.kt)("p",null,"To receive a transfer on the accounts stored on your Ledger device, you must provide the sender\n(i.e. the payer) with your address. To do so, follow the instructions on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui"},"this support page"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before giving anyone your address, ensure it matches what's on the Ledger by\n",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense.")),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,'For staking using Ledger devices, check the section "How to stake using your Ledger" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-"},"this support article"),"."),(0,r.kt)("h3",{id:"removing-expired-democracy-locks"},"Removing Expired Democracy Locks"),(0,r.kt)("p",null,"Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181870-how-to-remove-expired-democracy-locks"},"this support page"),"\nthe learn how to remove democracy locks after the end of a Governance referendum."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please be advised"),": Despite the Polkadot ledger application being compatible with both the Ledger\nNano S and the Ledger Nano X, none of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),"\nextrinsics are available in the light version. The following\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"repository by Zondax")," lists the currently supported\nDemocracy extrinsics on the full ledger."),(0,r.kt)("h2",{id:"ledger-developer-release"},"Ledger Developer Release"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,r.kt)("em",{parentName:"p"},"know precisely what you're doing"),".")),(0,r.kt)("h3",{id:"why-you-might-need-the-developer-release"},"Why you might need the Developer Release"),(0,r.kt)("p",null,"Ledger apps for the Polkadot ecosystem are\ndeveloped by ",(0,r.kt)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax"),". When new functionalities are added to the Ledger apps,\nthey are made available on a developer release for testing purposes. After a successful audit and\nreview, the apps would be available for download and installation using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live"),'. As it takes some time for Ledger to audit and\nreview the release, the app upgrade option may not be available on Ledger Live when the new runtime\nis deployed on the network. If this happens, users cannot use Ledger devices with the Polkadot-JS\nUI, and while signing for a transaction, will most likely incur the error message "txn version not\nsupported". Please do not panic if this happens, as there are solutions to this problem. Suppose you\ncannot wait a few days until the app passes the Ledger audit, you can install the developer release\nfrom the shell using the latest version published on\n',(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"the Zondax GitHub repository"),"."),(0,r.kt)("h3",{id:"install-the-developer-release"},"Install the Developer Release"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/4SyVQrlXZ_Q"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to install the developer\nrelease of your ledger app."),(0,r.kt)("p",{parentName:"admonition"},"Currently, the developer release can be installed only on the Nano S and S plus devices and can't be\ninstalled on the Nano X.")),(0,r.kt)("p",null,"To install the developer version, make sure you have the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," version and follow the steps\nbelow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("em",{parentName:"li"},"ledgerblue")," running the command ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 -m pip install ledgerblue"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the developer release from the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-polkadot/releases"},"Zondax GitHub repository"),". The file will be\nnamed ",(0,r.kt)("inlineCode",{parentName:"li"},"installer_nanos_plus.sh")," or something similar, depending on your ledger device."),(0,r.kt)("li",{parentName:"ul"},"Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x installer_nanos_plus.sh"),"."),(0,r.kt)("li",{parentName:"ul"},"You can now use the ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh --help")," command to visualize the available options\n(see below)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dev Ledger Help Menu",src:o(95932).Z,width:"525",height:"54"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attach your Ledger Nano (in this case Nano S Plus) to your computer, enter the PIN code, and run\nthe command ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh load"),'. Scroll with the right button until you see "Allow\nunsafe manager", left and right press to confirm. You will be asked to confirm the action of\nuninstalling the app and subsequently installing the newer version. After confirming both actions,\nthe shell script will install the version on your device. You must insert the PIN code to use the\ndevice after the installation.'),(0,r.kt)("li",{parentName:"ul"},"If you wish to revert the version to the stable release, go to Ledger Live. The app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease.")))}g.isMDXComponent=!0},95932:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"},30536:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/query-device-d7d9e7e7d28a34a343c59094db864a1a.png"}}]);