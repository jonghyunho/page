(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{168:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(17),o=a.n(i),s=(a(70),a(71),a(170)),c=(a(20),a(6)),u=a(7),l=a(10),h=a(9),p=a(171),f=a(58),d=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).useProxy=!0,t.proxyUrl="https://cors-anywhere.herokuapp.com/",t.state={data:[]},t}return Object(u.a)(a,[{key:"getProxy",value:function(){return this.useProxy?this.proxyUrl:""}},{key:"formatDate",value:function(t){var e=new Date(1e3*t),a=""+(e.getMonth()+1),n=""+e.getDate(),r=e.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")}},{key:"requestYahooFinance",value:function(t){var e="https://query1.finance.yahoo.com/v8/finance/chart/"+t+"?period1=1546268400&period2="+Date.now().toString()+"&interval=1d",a=new XMLHttpRequest;a.open("GET",this.getProxy()+e);var n=this;a.onload=a.onerror=function(){if(404!==a.status){var t=JSON.parse(a.responseText);t=t.chart.result[0],n.setState({data:t})}},a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send("")}}]),a}(r.a.Component);d.shared=d;var m=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"getValues",value:function(){for(var t=[],e=[],a=0;a<10;a++)t.push(a.toString()),e.push((50*Math.random()).toFixed(2));return[t,e]}},{key:"getData",value:function(){var t=this.getValues();return 0===t[0].length?null:{labels:t[0],datasets:[{label:"",data:t[1],fill:!1,backgroundColor:"#2279B5",borderColor:"#2279B5",borderWidth:2,pointRadius:0,hitRadius:20,cubicInterpolationMode:"monotone",lineTension:.1,spanGaps:!0}]}}},{key:"render",value:function(){var t,e=this.getData();return t=null!=e?r.a.createElement(f.a,{data:e,height:150,options:{legend:{display:!1},scales:{xAxes:[{gridLines:{drawBorder:!0,drawOnChartArea:!0,lineWidth:0,zeroLineWidth:.5},ticks:{autoSkip:!0,maxTicksLimit:20}}],yAxes:[{gridLines:{drawOnChartArea:!0,lineWidth:.2,zeroLineWidth:.5}}]}}}):r.a.createElement("h6",{style:{color:"#333333"}},"\ub370\uc774\ud130 \ub85c\ub529 \uc911..."),r.a.createElement(p.a,{style:{width:"94%",marginTop:"15px",marginLeft:"3%"}},r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,this.props.title),r.a.createElement(p.a.Text,{style:{color:"#999999"}},this.props.text),r.a.createElement(p.a.Text,null),t))}}]),a}(d),v=a(5),y=a.n(v),j=a(12),b=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).state={data:[]},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(y.a.mark((function t(){var e,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.jonghyunho.com/v1/chartGetHousePrice");case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,this.setState({data:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"getValues",value:function(){var t=[],e=[],a=this.state.data;for(var n in a.prices)n%4===0?t.push(a.prices[n][0]):t.push(""),e.push(a.prices[n][1].toFixed(2));return[t,e]}}]),a}(m),g=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestYahooFinance("%5EDJI");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getValues",value:function(){var t=[],e=[],a=this.state.data;if(0===a.length)return[t,e];for(var n in a.timestamp)t.push(this.formatDate(a.timestamp[n]));var r=a.indicators.adjclose[0].adjclose;for(n in r)e.push(parseInt(r[n]));return[t,e]}}]),a}(m),O=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.requestYahooFinance("%5EKS11"),t.abrupt("return");case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getValues",value:function(){var t=[],e=[],a=this.state.data;if(0===a.length)return[t,e];for(var n in a.timestamp)t.push(this.formatDate(a.timestamp[n]));var r=a.indicators.adjclose[0].adjclose;for(n in r)e.push(parseInt(r[n]));return[t,e]}}]),a}(m),x=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestYahooFinance("GC=F");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getValues",value:function(){var t=[],e=[],a=this.state.data;if(0===a.length)return[t,e];for(var n in a.timestamp)t.push(this.formatDate(a.timestamp[n]));var r=a.indicators.adjclose[0].adjclose;for(n in r)e.push(parseInt(r[n]));return[t,e]}}]),a}(m),k=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestYahooFinance("KRW=X");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getValues",value:function(){var t=[],e=[],a=this.state.data;if(0===a.length)return[t,e];for(var n in a.timestamp)t.push(this.formatDate(a.timestamp[n]));var r=a.indicators.adjclose[0].adjclose;for(n in r)e.push(parseInt(r[n]));return[t,e]}}]),a}(m);var w=function(){var t,e,a,n,i;return n=r.a.createElement(b,{title:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4\uac00\uaca9\uc9c0\uc218",text:"\uc11c\uc6b8 \ubd80\ub3d9\uc0b0 \ub9e4\ub9e4 \uac00\uaca9\uc758 \ub4f1\ub77d\uc744 \uc2dc\uac01\ud654\ud55c\ub2e4."}),t=r.a.createElement(g,{title:"\ub2e4\uc6b0\uc874\uc2a4 \uc9c0\uc218",text:"\ub2e4\uc6b0\uc874\uc2a4 \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),e=r.a.createElement(O,{title:"\ucf54\uc2a4\ud53c \uc9c0\uc218",text:"\ucf54\uc2a4\ud53c \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),a=r.a.createElement(k,{title:"\ud658\uc728",text:"\uc6d0/\ub2ec\ub7ec \ud658\uc728"}),i=r.a.createElement(x,{title:"\uae08 \uc9c0\uc218",text:"\uae08 \uc9c0\uc218\ub97c \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s.a,{expand:"lg"},r.a.createElement(s.a.Brand,{href:"#"},r.a.createElement("h3",null,"\uc7a1\ub3d9\uc0ac\ub2c8"))),n,e,t,a,i,r.a.createElement(m,{title:"\uacbd\uc81c \uc9c0\ud45c\uc758 \uc0c1\uad00\uad00\uacc4 (\uc900\ube44\uc911)",text:"\uacbd\uc81c \uc9c0\ud45c\ub97c \uc0c1\uad00\uad00\uacc4\uc9c0\uc218\ub97c \ud1b5\ud574 \uc2dc\uac01\ud654\ud55c\ub2e4."}),r.a.createElement(m,{title:"\uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 (\uc900\ube44\uc911)",text:"\uc8fc\uc2dd\uacfc \ubd80\ub3d9\uc0b0 \uc5b4\ub290 \uc9c0\ud45c\uac00 \ub354 \uc800\ud3c9\uac00 \ub418\uc5b4 \uc788\ub098?"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},20:function(t,e,a){},65:function(t,e,a){t.exports=a(168)},70:function(t,e,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.842123db.chunk.js.map