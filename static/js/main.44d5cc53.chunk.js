(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{120:function(e,t,a){e.exports=a(231)},125:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(125),a(126),a(7)),s=a(8),c=a(11),u=a(10),h=(a(63),a(237)),d=a(238),m=a(109),p=a.n(m),v=a(15),f=a(113),b=a(6),g=a(18),y=a.n(g),E=a(25),w=function e(t,a){Object(l.a)(this,e),this.code=void 0,this.handler=void 0,this.code=t,this.handler=a},k=function(){function e(){Object(l.a)(this,e),this.proxyUrl="https://cors-anywhere.herokuapp.com/",this.data={},this.timerInterval=10,this.timerLongInterval=2e3,this.requestedCode=[],this.fetchingCode=void 0,console.log("disabled"),window.setTimeout(this.timerHandler,this.timerInterval,this)}return Object(s.a)(e,[{key:"isProduction",value:function(){return!0}},{key:"isLandShown",value:function(){return!0}},{key:"init",value:function(){}},{key:"getProxy",value:function(){return""}},{key:"timerHandler",value:function(e){if(void 0===e.fetchingCode)if(void 0!==e.requestedCode[0]){var t=e.requestedCode.shift(),a=t.code;if(void 0!==e.data[a])return t.handler.handleResponse(a,e.data[a]),void window.setTimeout(e.timerHandler,e.timerInterval,e);e.fetchingCode=a,e.fetchYahooFinance(t),window.setTimeout(e.timerHandler,e.timerInterval,e)}else window.setTimeout(e.timerHandler,e.timerLongInterval,e);else window.setTimeout(e.timerHandler,e.timerInterval,e)}},{key:"fetchYahooFinance",value:function(e){var t=encodeURI(e.code),a=(Date.parse("2000-01-01")/1e3).toString(),n=Date.now().toString(),i="https://query1.finance.yahoo.com/v8/finance/chart/"+t+"?period1="+a+"&period2="+n+"&interval=1d",r=new XMLHttpRequest;r.open("GET",this.getProxy()+i);var o=this;r.onload=r.onerror=function(){if(404!==r.status){t=decodeURI(t);var a=JSON.parse(r.responseText);a=a.chart.result[0],o.data[t]=a,o.fetchingCode=void 0,e.handler.handleResponse(t,a)}},r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send("")}},{key:"store",value:function(e,t){console.log(e,"is stored"),this.data[e]=t}},{key:"load",value:function(e){var t=this.data[e];return null!=t&&console.log(e,"is loaded"),t}},{key:"reqeustYahooFinance",value:function(e,t){this.requestedCode.push(new w(e,t))}}],[{key:"shared",value:function(){return null==e.instance&&(e.instance=new e),this.instance}}]),e}();k.instance=null;var x=k;var j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).proxyUrl="https://cors-anywhere.herokuapp.com/",x.shared().init(),e.state={data:[],latest_index:void 0,latest_value:0,period:"1y"},e}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){}},{key:"fetchData",value:function(e){for(var t in e){var a=e[t];"chartGetHousePrice"!==a?x.shared().reqeustYahooFinance(a,this):this.fetchLandPrice()}}},{key:"fetchLandPrice",value:function(){var e=Object(E.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.jonghyunho.com/v1/chartGetHousePrice");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleResponse",value:function(e,t){t[e]=t,this.setState({data:t})}},{key:"formatDate",value:function(e){var t=new Date(1e3*e),a=""+(t.getMonth()+1),n=""+t.getDate(),i=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[i,a,n].join(".")}},{key:"getPrevDate",value:function(e){return"3m"===e?new Date(new Date-7776e6)/1e3:"6m"===e?new Date(new Date-15552e6)/1e3:"1y"===e?new Date(new Date-31104e6)/1e3:"3y"===e?new Date(new Date-93312e6)/1e3:"5y"===e?new Date(new Date-15552e7)/1e3:"10y"===e?new Date(new Date-31104e7)/1e3:Date.parse("2000-01-01")/1e3}}]),a}(i.a.Component),O=a(20),D=a(103),S=a(236),C=a(239),_=a(101),M=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).period="1y",n.palette=["#1e6eff","#ff7245","#ffde00"],n.units=[],n.handle3Month=n.handle3MonthButton.bind(Object(O.a)(n)),n.handle6Month=n.handle6MonthButton.bind(Object(O.a)(n)),n.handle1Year=n.handle1YearButton.bind(Object(O.a)(n)),n.handle3Year=n.handle3YearButton.bind(Object(O.a)(n)),n.handle5Year=n.handle5YearButton.bind(Object(O.a)(n)),n.handle10Year=n.handle10YearButton.bind(Object(O.a)(n)),n.handleMax=n.handleMaxButton.bind(Object(O.a)(n)),n}return Object(s.a)(a,[{key:"getValues",value:function(){for(var e=[],t=[],a=[],n=0;n<10;n++)e.push(n.toString()),t.push((50*Math.random()).toFixed(2)),a.push((50*Math.random()).toFixed(2));return[e,t,a]}},{key:"getData",value:function(){var e=this.getValues();return 0===e[0].length?null:{labels:e[0],datasets:[{label:"",data:e[1],fill:!1,backgroundColor:"#1e6eff",borderColor:"#1e6eff",borderWidth:1.5,pointRadius:0,hitRadius:5,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0}]}}},{key:"render",value:function(){var e,t=16;v.isTablet,v.isMobile&&(t=8);var a=this.getData();if(null!=a)e=i.a.createElement(_.a,{data:a,height:150,options:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!0,drawOnChartArea:!0,lineWidth:0,zeroLineWidth:.5},ticks:{fontSize:t,autoSkip:!0,maxTicksLimit:2,minRotation:0,maxRotation:0}}],yAxes:[{ticks:{fontSize:t},gridLines:{drawOnChartArea:!0,lineWidth:.2,zeroLineWidth:.5}}]},animation:{duration:0}}});else{var n="18px";v.isTablet,v.isMobile&&(n="11px"),e=i.a.createElement("h6",{style:{fontSize:n,color:"#333333"}},"\ub370\uc774\ud130 \ub85c\ub529 \uc911...")}var r={marginTop:"0.15rem",marginBottom:"0.5rem",marginLeft:"0.15rem"};v.isTablet,v.isMobile&&(r={fontSize:"12px",marginTop:"0.15rem",marginBottom:"0.5rem",marginLeft:"0.15rem"});var o,l={fontSize:"16px",height:"25px",lineHeight:"13px",textAlign:"center"};v.isTablet,v.isMobile&&(l={fontSize:"10px",height:"20px",lineHeight:"6px",textAlign:"center"}),"true"!==this.props.isPeriodShown&&void 0!==this.props.isPeriodShown||(o=i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100%",height:"0.5rem"}}),i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handle3Month},"3\uac1c\uc6d4")," ",i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handle6Month},"6\uac1c\uc6d4")," ",i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handle1Year},"1\ub144")," ",i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handle3Year},"3\ub144")," ",i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handle5Year},"5\ub144")," ",i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handle10Year},"10\ub144")," ",i.a.createElement(D.a,{variant:"light",style:l,onClick:this.handleMax},"\ucd5c\ub300")," "))));var s=i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{width:"100%",style:{textAlign:"right"}},i.a.createElement(S.a,{alignRight:!0,style:{style_period_button:l}},i.a.createElement(S.a.Toggle,{id:"dropdown-basic",variant:"secondary",size:"sm",style:{style_period_button:l}},"\uc6d0\ubcf8 \ub370\uc774\ud130"),i.a.createElement(S.a.Menu,null,i.a.createElement(S.a.Item,{onClick:this.handleDropDown1,style:{style_period_button:l,textAlign:"center"}},"\uc6d0\ubcf8 \ub370\uc774\ud130"),i.a.createElement(S.a.Item,{onClick:this.handleDropDown2,style:{style_period_button:l,textAlign:"center"}},"\uc815\uaddc\ud654"),i.a.createElement(S.a.Item,{onClick:this.handleDropDown3,style:{style_period_button:l,textAlign:"center"}},"\uc99d\uac10\uc728"),i.a.createElement(S.a.Item,{onClick:this.handleDropDown4,style:{style_period_button:l,textAlign:"center"}},"\ub204\uc801 \uc99d\uac10\uc728"))))),c=[];if(void 0!=this.state.latest_index){var u="20px";v.isTablet,v.isMobile&&(u="11px"),c[0]=i.a.createElement("div",null,i.a.createElement("font",{style:{fontSize:u,color:this.palette[0]}},this.state.latest_value," ",this.units[0]),i.a.createElement("font",{color:"#aaaaaa",fontSize:"6px"},"   (",this.state.latest_index,")"))}return i.a.createElement(C.a,{style:{width:"96%",marginBottom:"10px",marginLeft:"2%"}},i.a.createElement(C.a.Body,{style:{padding:"0.75em"}},i.a.createElement(C.a.Title,{style:r},this.props.title),i.a.createElement("div",{style:{width:"100%",height:"0.45rem"}}),i.a.createElement("div",{style:{marginLeft:"0.15rem",marginBottom:"1.0rem"}},c[0],c[1],c[2],c[3]),s,i.a.createElement("div",{style:{width:"100%",height:"0.15rem"}}),e,o,i.a.createElement("div",{style:{width:"100%",height:"0.15rem"}})))}},{key:"handle3MonthButton",value:function(){this.setState({period:"3m"})}},{key:"handle6MonthButton",value:function(){this.setState({period:"6m"})}},{key:"handle1YearButton",value:function(){this.setState({period:"1y"})}},{key:"handle3YearButton",value:function(){this.setState({period:"3y"})}},{key:"handle5YearButton",value:function(){this.setState({period:"5y"})}},{key:"handle10YearButton",value:function(){this.setState({period:"10y"})}},{key:"handleMaxButton",value:function(){this.setState({period:"Max"})}},{key:"handleDropDown1",value:function(){console.log(1)}},{key:"handleDropDown2",value:function(){console.log(2)}},{key:"handleDropDown3",value:function(){console.log(3)}},{key:"handleDropDown4",value:function(){console.log(4)}}],[{key:"defaultProps",value:function(){return{isPeriodShown:"true"}}}]),a}(j),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchLandPrice();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){var e,t,a=[],n=[],i=this.state.data;if(0===i.length)return[a,n];for(var r in i.prices)e=i.prices[r][0],t=i.prices[r][1].toFixed(2),a.push(e),n.push(t);return this.state.latest_index=e,this.state.latest_value=t,[a,n]}}]),a}(M),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.fetchData([this.props.code]),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){var e=this.props.code,t=[],a=[],n=this.state.data;if(0===n.length)return[t,a];"KRW"==(n=n[e]).meta.currency?this.units[0]="\uc6d0":"USD"==n.meta.currency?this.units[0]="\ub2ec\ub7ec":this.units[0]=n.meta.currency;var i,r,o=this.getPrevDate(this.state.period),l=n.indicators.adjclose[0].adjclose;for(var s in n.timestamp){var c=n.timestamp[s];c<o||(i=this.formatDate(c),r=parseFloat(l[s]).toFixed(2),t.push(i),a.push(r))}return this.state.latest_index=i,this.state.latest_value=r,[t,a]}}]),a}(M),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a,n,r;return x.shared().isProduction()?(n=i.a.createElement(T,{title:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4\uac00\uaca9\uc9c0\uc218",text:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4 \uac00\uaca9\uc758 \ub4f1\ub77d\uc744 \uc2dc\uac01\ud654\ud55c\ub2e4.",isPeriodShown:"false"}),e=i.a.createElement(B,{code:"^DJI",title:"\ub2e4\uc6b0\uc874\uc2a4 \uc9c0\uc218",text:"\ub2e4\uc6b0\uc874\uc2a4 \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),t=i.a.createElement(B,{code:"^KS11",title:"\ucf54\uc2a4\ud53c \uc9c0\uc218",text:"\ucf54\uc2a4\ud53c \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),a=i.a.createElement(B,{code:"KRW=X",title:"\ud658\uc728",text:"\uc6d0/\ub2ec\ub7ec \ud658\uc728"}),r=i.a.createElement(B,{code:"GC=F",title:"\uae08 \uc9c0\uc218",text:"\uae08 \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."})):t=i.a.createElement(B,{code:"^KS11",title:"\ucf54\uc2a4\ud53c \uc9c0\uc218",text:"\ucf54\uc2a4\ud53c \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),i.a.createElement(i.a.Fragment,null,n,t,e,r,a)}}]),a}(i.a.Component),I=a(77),P=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).json={},e.value={},e.codes=[],e.labels=[],e.state={period:"1y",data_1:[],data_2:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.codes=this.props.codes.split(" "),this.labels=this.props.labels.split(" "),this.fetchData(this.codes),e.abrupt("return");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){this.state.latest_index=void 0;var e=[],t=[],a=[],n=this.state.data;for(var i in n)this.json[i]=n[i];for(var r in this.codes){var o=this.codes[r],l=this.json[o];if(void 0===l)return[[],[],[]]}var s=0;for(r in this.codes){o=this.codes[r];var c=(l=this.json[o]).indicators.adjclose[0].adjclose;for(var u in l.timestamp.length>0&&s<l.timestamp[0]&&(s=l.timestamp[0]),l.timestamp){var h=l.timestamp[u];if(0==r)this.value[h]=[1*parseFloat(c[u]).toFixed(3),void 0];else{var d=this.value[h];void 0!=d&&(d=d[0]),this.value[h]=[d,1*parseFloat(c[u]).toFixed(3)]}}}var m=this.getPrevDate(this.state.period);for(h in this.value)if(!(h<m)&&!(h<s)){e.push(this.formatDate(h));var p=this.value[h];t.push(p[0]),a.push(p[1])}return[e,t=this.normalize(t),a=this.normalize(a)]}},{key:"normalize",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=I.b(e),n=I.a(e);for(var i in e){var r=e[i];e[i]=1*((r-a)/(t?n:1)).toFixed(3)}return e}},{key:"getData",value:function(){var e=this.getValues();return 0===e[0].length?null:{labels:e[0],datasets:[{label:this.labels[0],data:e[1],fill:!1,backgroundColor:this.palette[0],borderColor:this.palette[0],borderWidth:1.5,pointRadius:0,hitRadius:2,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0},{label:this.labels[1],data:e[2],fill:!1,backgroundColor:this.palette[1],borderColor:this.palette[1],borderWidth:1.5,pointRadius:0,hitRadius:2,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0}]}}}]),a}(M),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{codes:"^KS11 KRW=X",labels:"\ucf54\uc2a4\ud53c \ud658\uc728",title:"\ucf54\uc2a4\ud53c\uc640 \ud658\uc728",text:"\ucf54\uc2a4\ud53c\uc640 \ud658\uc728"}),i.a.createElement(P,{codes:"KRW=X CNY=X",labels:"\ub2ec\ub7ec/\uc6d0 \ub2ec\ub7ec/\uc704\uc548",title:"(\ub2ec\ub7ec/\uc6d0)\uacfc (\ub2ec\ub7ec/\uc704\uc548)\uc758 \ud658\uc728 \ube44\uad50",text:"\ub2ec\ub7ec/\uc6d0 \ub2ec\ub7ec/\uc704\uc548 \ud658\uc728 \ube44\uad50"}),i.a.createElement(P,{codes:"^KS11 EURUSD=X",labels:"\ucf54\uc2a4\ud53c \uc720\ub85c/\ub2ec\ub7ec",title:"\ucf54\uc2a4\ud53c\uc640 (\uc720\ub85c/\ub2ec\ub7ec)\uc758 \ube44\uad50",text:"."}),i.a.createElement(P,{codes:"^KS11 000001.SS",labels:"\ucf54\uc2a4\ud53c \uc0c1\ud574\uc885\ud569",title:"\ucf54\uc2a4\ud53c\uc640 \uc0c1\ud574\uc885\ud569",text:"\ucf54\uc2a4\ud53c\uc640 \uc0c1\ud574\uc885\ud569"}),i.a.createElement(P,{codes:"^KS11 ^HSI",labels:"\ucf54\uc2a4\ud53c \ud56d\uc14d",title:"\ucf54\uc2a4\ud53c\uc640 \ud56d\uc14d",text:"\ucf54\uc2a4\ud53c\uc640 \ud56d\uc14d"}),i.a.createElement(P,{codes:"^KS11 ^N225",labels:"\ucf54\uc2a4\ud53c \ub2c8\ucf00\uc774225",title:"\ucf54\uc2a4\ud53c\uc640 \ub2c8\ucf00\uc774225",text:"\ucf54\uc2a4\ud53c\uc640 \ub2c8\ucf00\uc774225"}))}}]),a}(i.a.Component),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{title:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4\uac00\uaca9\uc9c0\uc218",text:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4 \uac00\uaca9\uc758 \ub4f1\ub77d\uc744 \uc2dc\uac01\ud654\ud55c\ub2e4.",isPeriodShown:"false"}))}}]),a}(i.a.Component),L=a(108),A=a(58);A.a.initialize("UA-115470725-2",{debug:!0});var W=Object(L.a)();W.listen((function(e){A.a.set({page:e.pathname}),A.a.pageview(e.pathname)}));var z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),console.log(":: "+Object({NODE_ENV:"production",PUBLIC_URL:"/page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_TEST),n}return Object(s.a)(a,[{key:"render",value:function(){var e=function(e){var t=new Date(1e3*e),a=""+(t.getMonth()+1),n=""+t.getDate(),i=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[i,a,n].join(".")}(Date.now()/1e3),t=i.a.createElement("h3",null,e);v.isTablet||v.isMobile&&(t=i.a.createElement("h6",null,e));var a="App-header";return v.isTablet||v.isMobile&&(a="Mobile-App-header"),i.a.createElement("div",{className:"App"},i.a.createElement(p.a,null,i.a.createElement("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),i.a.createElement("meta",{name:"theme-color",content:"#f2f2f2"})),i.a.createElement("header",{className:a},i.a.createElement(h.a,{expand:"lg",style:{padding:"0.5rem 2.5%"}},i.a.createElement(h.a.Brand,{href:"#"},t)),i.a.createElement(d.a,{activeKey:"#",style:{marginLeft:"1.5rem",marginBottom:"1.0rem"}},i.a.createElement(d.a.Item,null,i.a.createElement(d.a.Link,{href:"/page"},"\uacbd\uc81c \uc9c0\ud45c")),i.a.createElement(d.a.Item,null,i.a.createElement(d.a.Link,{href:"/page/marketindexcomparison"},"\uacbd\uc81c \uc9c0\ud45c \uac04 \ube44\uad50")),i.a.createElement(d.a.Item,null,i.a.createElement(d.a.Link,{href:"/page/realestate"},"\ubd80\ub3d9\uc0b0"))),i.a.createElement(f.a,{basename:"/page",history:W},i.a.createElement(b.a,{exact:!0,path:"/",component:R}),i.a.createElement(b.a,{path:"/marketindexcomparison",component:Y}),i.a.createElement(b.a,{path:"/realestate",component:F}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.44d5cc53.chunk.js.map