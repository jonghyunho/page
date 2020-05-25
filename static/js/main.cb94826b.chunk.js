(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),s=(a(96),a(97),a(199)),c=(a(46),a(8)),l=a(9),u=a(12),h=a(11),d=a(200),p=a(201),v=a(78),f=a(7),m=a.n(f),y=a(16),g=function(){function e(){Object(c.a)(this,e),this.data={},console.log("disabled")}return Object(l.a)(e,[{key:"isProduction",value:function(){return!0}},{key:"isLandShown",value:function(){return!0}},{key:"init",value:function(){}},{key:"store",value:function(e,t){console.log(e,"is stored"),this.data[e]=t}},{key:"load",value:function(e){var t=this.data[e];return null!=t&&console.log(e,"is loaded"),t}}],[{key:"shared",value:function(){return null==e.instance&&(e.instance=new e),this.instance}}]),e}();g.instance=null;var b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).period="1y",e}return Object(l.a)(a,[{key:"getValues",value:function(){for(var e=[],t=[],a=[],n=0;n<10;n++)e.push(n.toString()),t.push((50*Math.random()).toFixed(2)),a.push((50*Math.random()).toFixed(2));return[e,t,a]}},{key:"getData",value:function(){var e=this.getValues();return 0===e[0].length?null:{labels:e[0],datasets:[{label:"",data:e[1],fill:!1,backgroundColor:"#2279B5",borderColor:"#2279B5",borderWidth:2,pointRadius:0,hitRadius:5,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0}]}}},{key:"render",value:function(){var e,t,a=this,n=this.getData();return e=null!=n?r.a.createElement(v.a,{data:n,height:150,options:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!0,drawOnChartArea:!0,lineWidth:0,zeroLineWidth:.5},ticks:{autoSkip:!0,maxTicksLimit:11}}],yAxes:[{gridLines:{drawOnChartArea:!0,lineWidth:.2,zeroLineWidth:.5}}]},animation:{duration:0}}}):r.a.createElement("h6",{style:{color:"#333333"}},"\ub370\uc774\ud130 \ub85c\ub529 \uc911..."),"true"!==this.props.isPeriodShown&&void 0!==this.props.isPeriodShown||(t=r.a.createElement(d.a,{defaultActiveKey:"1y",onSelect:function(e){return a.setState({period:e})}},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"3m",style:{color:"#666666"}},"3m")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"6m",style:{color:"#666666"}},"6m")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"1y",style:{color:"#666666"}},"1y")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"3y",style:{color:"#666666"}},"3y")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"5y",style:{color:"#666666"}},"5y")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"10y",style:{color:"#666666"}},"10y")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"Max",style:{color:"#666666"}},"Max")))),r.a.createElement(p.a,{style:{width:"94%",marginTop:"15px",marginLeft:"3%"}},r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,this.props.title),r.a.createElement(p.a.Text,{style:{color:"#999999"}},this.props.text),t,r.a.createElement(p.a.Text,null),e))}}],[{key:"defaultProps",value:function(){return{isPeriodShown:"true"}}}]),a}(function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).proxyUrl="https://cors-anywhere.herokuapp.com/",g.shared().init(),e.state={data:[],period:"1y"},e}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){}},{key:"getProxy",value:function(){return""}},{key:"fetchData",value:function(e){for(var t in e){var a=e[t];"chartGetHousePrice"!==a?this.fetchYahooFinance(a):this.fetchLandPrice()}}},{key:"fetchLandPrice",value:function(){var e=Object(y.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.jonghyunho.com/v1/chartGetHousePrice");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchYahooFinance",value:function(e){var t=g.shared().load(e);if(null!=t)return console.log("cache hit",e),void this.setState({data:t});console.log("fetching",e),e=encodeURI(e);var a=(Date.parse("2000-01-01")/1e3).toString(),n=Date.now().toString(),r="https://query1.finance.yahoo.com/v8/finance/chart/"+e+"?period1="+a+"&period2="+n+"&interval=1d",o=new XMLHttpRequest;o.open("GET",this.getProxy()+r);var i=this;o.onload=o.onerror=function(){if(404!==o.status){e=decodeURI(e);var t=JSON.parse('{ "'+e+'" : '+o.responseText+"}");t[e]=t[e].chart.result[0],g.shared().store(e,t[e]),i.setState({data:t})}},o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send("")}},{key:"formatDate",value:function(e){var t=new Date(1e3*e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")}},{key:"getPrevDate",value:function(e){return"3m"===e?new Date(new Date-7776e6)/1e3:"6m"===e?new Date(new Date-15552e6)/1e3:"1y"===e?new Date(new Date-31104e6)/1e3:"3y"===e?new Date(new Date-93312e6)/1e3:"5y"===e?new Date(new Date-15552e7)/1e3:"10y"===e?new Date(new Date-31104e7)/1e3:Date.parse("2000-01-01")/1e3}}]),a}(r.a.Component)),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchLandPrice();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){var e=[],t=[],a=this.state.data;if(0===a.length)return[e,t];for(var n in a.prices)e.push(a.prices[n][0]),t.push(a.prices[n][1].toFixed(2));return[e,t]}}]),a}(b),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.fetchData([this.props.code]),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){var e=this.props.code,t=[],a=[],n=this.state.data;if(0===n.length)return[t,a];n=n[e];var r=this.getPrevDate(this.state.period),o=n.indicators.adjclose[0].adjclose;for(var i in n.timestamp){var s=n.timestamp[i];s<r||(t.push(this.formatDate(s)),a.push(parseFloat(o[i]).toFixed(2)))}return[t,a]}}]),a}(b),E=a(57),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).codes=["^KS11","KRW=X"],e.json={},e.value={},e.state={period:"1y",data_1:[],data_2:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.fetchData(this.codes),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getValues",value:function(){var e=this.codes,t=[],a=[],n=[],r=this.state.data;for(var o in r)this.json[o]=r[o];for(var i in e){var s=e[i],c=this.json[s];if(void 0===c)return[[],[],[]]}var l=0;for(i in e){s=e[i];var u=(c=this.json[s]).indicators.adjclose[0].adjclose;for(var h in c.timestamp.length>0&&l<c.timestamp[0]&&(l=c.timestamp[0]),c.timestamp){var d=c.timestamp[h];if(0==i)this.value[d]=[1*parseFloat(u[h]).toFixed(2),void 0];else{var p=this.value[d];void 0!=p&&(p=p[0]),this.value[d]=[p,1*parseFloat(u[h]).toFixed(2)]}}}var v=this.getPrevDate(this.state.period);for(d in this.value)if(!(d<v)&&!(d<l)){t.push(this.formatDate(d));var f=this.value[d];a.push(f[0]),n.push(f[1])}return[t,a=this.normalize(a),n=this.normalize(n)]}},{key:"normalize",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=E.b(e),n=E.a(e);for(var r in e){var o=e[r];e[r]=(o-a)/(t?n:1)}return e}},{key:"getData",value:function(){var e=this.getValues();return 0===e[0].length?null:{labels:e[0],datasets:[{label:"\ucf54\uc2a4\ud53c",data:e[1],fill:!1,backgroundColor:"#2279B5",borderColor:"#2279B5",borderWidth:2,pointRadius:0,hitRadius:2,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0},{label:"\ud658\uc728",data:e[2],fill:!1,backgroundColor:"#ff7245",borderColor:"#ff7245",borderWidth:2,pointRadius:0,hitRadius:2,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0}]}}}]),a}(b);var j=function(){var e,t,a,n,o;return g.shared().isProduction()?(g.shared().isLandShown()&&(n=r.a.createElement(k,{title:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4\uac00\uaca9\uc9c0\uc218",text:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4 \uac00\uaca9\uc758 \ub4f1\ub77d\uc744 \uc2dc\uac01\ud654\ud55c\ub2e4.",isPeriodShown:"false"})),e=r.a.createElement(w,{code:"^DJI",title:"\ub2e4\uc6b0\uc874\uc2a4 \uc9c0\uc218",text:"\ub2e4\uc6b0\uc874\uc2a4 \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),t=r.a.createElement(w,{code:"^KS11",title:"\ucf54\uc2a4\ud53c \uc9c0\uc218",text:"\ucf54\uc2a4\ud53c \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),a=r.a.createElement(w,{code:"KRW=X",title:"\ud658\uc728",text:"\uc6d0/\ub2ec\ub7ec \ud658\uc728"}),o=r.a.createElement(w,{code:"GC=F",title:"\uae08 \uc9c0\uc218",text:"\uae08 \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."})):t=r.a.createElement(w,{code:"^KS11",title:"\ucf54\uc2a4\ud53c \uc9c0\uc218",text:"\ucf54\uc2a4\ud53c \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s.a,{expand:"lg"},r.a.createElement(s.a.Brand,{href:"#"},r.a.createElement("h3",null,"\uc7a1\ub3d9\uc0ac\ub2c8"))),n,t,e,a,o,r.a.createElement(x,{code:"^KS11",title:"\ucf54\uc2a4\ud53c\uc640 \ud658\uc728",text:"\ucf54\uc2a4\ud53c\uc640 \ud658\uc728"}),r.a.createElement(b,{title:"\uacbd\uc81c \uc9c0\ud45c\uc758 \uc0c1\uad00\uad00\uacc4 (\uc900\ube44\uc911)",text:"\uacbd\uc81c \uc9c0\ud45c\ub97c \uc0c1\uad00\uad00\uacc4\uc9c0\uc218\ub97c \ud1b5\ud574 \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement(b,{title:"\uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 (\uc900\ube44\uc911)",text:"\uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \uc5b4\ub290 \uc9c0\ud45c\uac00 \ub354 \uc800\ud3c9\uac00 \ub418\uc5b4 \uc788\ub098?"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){},91:function(e,t,a){e.exports=a(197)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.cb94826b.chunk.js.map