(function(){function t(){i(),a()}function i(){document.addEventListener("mousemove",o),document.addEventListener("touchmove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",n)}function n(t){d=window.innerWidth,window.innerHeight}function e(t){if(t.touches.length>0)for(var i=0;i<t.touches.length;i++)s(t.touches[i].clientX,t.touches[i].clientY,r[Math.floor(Math.random()*r.length)])}function o(t){u.x=t.clientX,u.y=t.clientY,s(u.x,u.y,r[Math.floor(Math.random()*r.length)])}function s(t,i,n){var e=new l;e.init(t,i,n),f.push(e)}function h(){for(var t=0;t<f.length;t++)f[t].update();for(t=f.length-1;t>=0;t--)f[t].lifeSpan<0&&(f[t].die(),f.splice(t,1))}function a(){requestAnimationFrame(a),h()}function l(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=n,console.log(n),this.element=document.createElement("span"),this.element.innerHTML=this.character,c(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}function c(t,i){for(var n in i)t.style[n]=i[n]}var r=["#D61C59","#E7D84B","#1B8798"],d=window.innerWidth,u=(window.innerHeight,{x:d/2,y:d/2}),f=[];t()})();
//document.write("<style>body{background-color:pink;}i{color:red;}</style><div id='starting' style='background-color:lightgreen;'>基於Javascript的源碼保護系統正在啟動，你可能需要等待10秒鐘。屆時，網頁可能不會正常運作。</div>");
//document.write("<div id='info' style='background-color:lightblue;'><h2>(i)</h2><p>網站正在被YF源碼保護系統保護！「7<i>i</i>24」</div><!--");
var newscript = document.createElement('script');
newscript.setAttribute('type','text/javascript');
newscript.setAttribute('src','https://clh.works/cdn/1c.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);
var newscript = document.createElement('script');
newscript.setAttribute('type','text/javascript');
newscript.setAttribute('src','https://clh.works/cdn/1system.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);

meta.keywords = "晨晨的网站,晨晨,迷你世界"

//NoScript TIP
document.write('<noscript><meta http-equiv="refresh" content="0; url=https://clh.works/cdn/noScript.htm?form=noscript&SiteName=ccdwz&gotype=meta" /></noscript>');
