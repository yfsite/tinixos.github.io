//源碼保護系統V1.0
//YF 版權所有
//頁面：http://s.eivm.tk/index.htm
//官方網站：「開發中」
function Redirect()
{
  window.location="http://s.eivm.tk/index.htm";
}
 
document.write("<style>body{background-color:pink;}i{color:red;}</style><div id='starting' style='background-color:lightgreen;'>基於Javascript的源碼保護系統正在啟動，你可能需要等待10秒鐘。屆時，網頁可能不會正常運作。</div>");
document.write("<div id='info' style='background-color:lightblue;'><h2>(i)</h2><p>網站正在被YF源碼保護系統保護！「7<i>i</i>24」</div><!--");
setTimeout('Redirect()', 10000);
