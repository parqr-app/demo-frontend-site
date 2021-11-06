"use strict";(self.webpackChunkpar_qr_app=self.webpackChunkpar_qr_app||[]).push([[653],{559:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var i=n(7294),s=n(3964),r=n.n(s),a=n(4170),o=n(7326),m=n(1721),u=function(e){function t(t){var n;(n=e.call(this,t)||this).columns=3,n.timeElapsed=r()(),n.tick=n.tick.bind((0,o.Z)(n)),n.state={remainingTime:r().duration(n.props.expirys[0].diff(r()()))};for(var i=[],s=0;s<n.props.numSpots;s++)i.push(r().duration(n.props.expirys[s].diff(r()())));return n.state.remainingTimes=i,n}(0,m.Z)(t,e),t.getDerivedStateFromProps=function(e,t){for(var n=[],i=0;i<e.numSpots;i++)n.push(r().duration(e.expirys[i].diff(r()())));return{remainingTimes:n}};var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)},n.componentWillUnmount=function(){clearInterval(this.timerID)},n.tick=function(){for(var e=[],t=0;t<this.props.numSpots;t++)this.state.remainingTimes[t]>0?e.push(r().duration(this.props.expirys[t].diff(r()()))):e.push(r().duration(0));this.setState({remainingTimes:e})},n.getHourString=function(e){return this.state.remainingTimes[e].get("hours")<10?"0"+this.state.remainingTimes[e].get("hours"):this.state.remainingTimes[e].get("hours")},n.getMinuteString=function(e){return this.state.remainingTimes[e].get("minutes")<10?"0"+this.state.remainingTimes[e].get("minutes"):this.state.remainingTimes[e].get("minutes")},n.getSecondString=function(e){return this.state.remainingTimes[e].get("seconds")<10?"0"+this.state.remainingTimes[e].get("seconds"):this.state.remainingTimes[e].get("seconds")},n.getTimeRemainingString=function(e){return this.isExpired(e)?"EXPIRED":this.getHourString(e).concat(" hr ",this.getMinuteString(e)," min ",this.getSecondString(e)," s")},n.getExpiryString=function(e){return this.props.expirys[e].format("hh:mm A")},n.getDayDiffString=function(e){var t=this.state.remainingTimes[e].get("days");return t<0?"(".concat(t,")"):""},n.isExpired=function(e){return this.state.remainingTimes[e]<0},n.render=function(){for(var e=[],t=0;t<this.props.numSpots;t++){for(var n="row"+t,s=[],r=0;r<this.columns;r++){var a="cell"+t+"-"+r;0===r&&s.push(i.createElement("td",{key:a,id:a}," ",this.props.names[t]," ")),1===r&&s.push(i.createElement("td",{key:a,id:a}," ",this.getTimeRemainingString(t)," ")),2===r&&s.push(i.createElement("td",{key:a,id:a}," ",this.getExpiryString(t)," ",this.getDayDiffString(t)," "))}t%2==1?this.isExpired(t)?e.push(i.createElement("tr",{className:"odd-exp",key:t,id:n},s)):e.push(i.createElement("tr",{className:"odd",key:t,id:n},s)):this.isExpired(t)?e.push(i.createElement("tr",{className:"even-exp",key:t,id:n},s)):e.push(i.createElement("tr",{className:"even",key:t,id:n},s))}return i.createElement("section",{className:"view-spots"},i.createElement("div",{className:"title"},"You are Viewing:",i.createElement("span",{className:"highlight"}," ",this.props.lotName)),i.createElement("div",{className:"container"},i.createElement("table",{className:"table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",{className:"head"}," Spot Name"),i.createElement("th",{className:"head"},"Time Remaining"),i.createElement("th",{className:"head"},"Expire Time"))),i.createElement("tbody",{className:"body"},e))))},t}(i.Component),c=function(e){var t=e.lotName,n=(0,i.useState)([]),s=n[0],o=n[1],m=(0,i.useState)(new Array(50).fill(r()())),c=m[0],p=m[1];return(0,i.useEffect)((function(){return fetch("https://backend.demo.parqr.app:8443/graphql/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"query lotQuery($lotName: ID!) {\n    lots(name: $lotName) {\n  \t\tname\n    \tspots {\n      \tname\n      \tendTime\n    }\n    }\n  }",variables:{lotName:t}})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.lots[0].spots.name);for(var t=[],n=[],i=0;i<e.data.lots[0].spots.length;i++)t.push(e.data.lots[0].spots[i].name),n.push(r()(e.data.lots[0].spots[i].endTime));o(t),p(n)}))}),[]),i.createElement(i.Fragment,null,i.createElement(a.h,null),i.createElement(u,{lotName:t,names:s,expirys:c,numSpots:s.length}))}},7326:function(e,t,n){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=component---src-pages-meter-lot-lot-name-index-js-290209a4b86b3217c83a.js.map