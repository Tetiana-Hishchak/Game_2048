var t=document.querySelector(".button"),e=document.querySelector(".game-score"),n=document.querySelector(".message-start"),r=document.querySelector(".message-win"),l=document.querySelector(".message-lose"),o=document.getElementsByClassName("field-cell"),a=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];t.addEventListener("click",function(){t.classList.contains("start")?(t.classList.remove("start"),t.classList.add("restart"),t.textContent="Restart",n.classList.add("hidden"),l.classList.add("hidden"),r.classList.add("hidden"),g(),g()):t.classList.contains("restart")&&(function(){for(var t=0;t<a.length;t++)for(var o=0;o<a.length;o++){var i=document.getElementById("".concat(t,"-").concat(o));a[t][o]=0,v(i,a[t][o])}u=0,e.innerText=0,n.classList.add("hidden"),l.classList.add("hidden"),r.classList.add("hidden")}(),g(),g())}),document.addEventListener("keydown",function(n){if(!t.classList.contains("start")){switch(function(){for(var t=0;t<a.length;t++)for(var e=0;e<a.length;e++)i[t][e]=a[t][e]}(),n.code){case"ArrowLeft":(function(){for(var t=0;t<a.length;t++){var e=a[t];e=f(e),a[t]=e;for(var n=0;n<a.length;n++)v(document.getElementById(t.toString()+"-"+n.toString()),a[t][n])}})(),g();break;case"ArrowRight":(function(){for(var t=0;t<a.length;t++){var e=a[t];e.reverse(),e=f(e),a[t]=e.reverse();for(var n=0;n<a.length;n++)v(document.getElementById(t.toString()+"-"+n.toString()),a[t][n])}})(),g();break;case"ArrowUp":(function(){for(var t=0;t<a.length;t++){var e=[a[0][t],a[1][t],a[2][t],a[3][t]];e=f(e);for(var n=0;n<a.length;n++)a[n][t]=e[n],v(document.getElementById(n.toString()+"-"+t.toString()),a[n][t])}})(),g();break;case"ArrowDown":(function(){for(var t=0;t<a.length;t++){var e=[a[0][t],a[1][t],a[2][t],a[3][t]];e.reverse(),(e=f(e)).reverse();for(var n=0;n<a.length;n++)a[n][t]=e[n],v(document.getElementById(n.toString()+"-"+t.toString()),a[n][t])}})(),g()}e.innerText=u,function(){if(h())return!1;for(var t=0;t<a.length;t++)for(var e=0;e<a.length;e++){var n=a[t][e];if(t+1<a.length&&n===a[t+1][e]||e+1<a.length&&n===a[t][e+1])return!1}return!0}()&&l.classList.remove("hidden"),Array.from(o).some(function(t){return"2048"===t.textContent})&&r.classList.remove("hidden")}});for(var s=0,c=0;c<a.length;c++)for(var d=0;d<a.length;d++)o[s++].id=c.toString()+"-"+d.toString();var u=0;function f(t){for(var e=t.filter(function(t){return 0!==t}),n=0;n<e.length-1;n++)e[n]===e[n+1]&&(e[n]*=2,e[n+1]=0,u+=e[n]);for(var r=e.filter(function(t){return 0!==t});r.length<a.length;)r.push(0);return r}function g(){if(!(!h()||function(){for(var t=0;t<a.length;t++)for(var e=0;e<a.length;e++)if(a[t][e]!==i[t][e])return!1;return!0}()))for(var t=!1;!t;){var e=Math.random()>.1?4:2,n=Math.floor(Math.random()*a.length),r=Math.floor(Math.random()*a.length);if(0===a[n][r]){a[n][r]=e;var l=document.getElementById(n.toString()+"-"+r.toString());l.innerText=e,v(l,e),t=!0}}}function h(){for(var t=0;t<a.length;t++)for(var e=0;e<a.length;e++)if(0===a[t][e])return!0;return!1}function v(t,e){t.innerText="",t.classList.value="",t.classList.add("field-cell"),e>0&&(t.innerText=e.toString(),e<=2048&&t.classList.add("field-cell--"+e.toString()))}
//# sourceMappingURL=index.5d3beeae.js.map