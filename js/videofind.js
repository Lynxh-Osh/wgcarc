function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if(pair[0] == variable)
        {
            return pair[1];
        }
    }
return(false);
}
function videoGet()
{
    a = getQueryVariable("bianHao")//獲取編號
    b = "sp\\"+ a + ".mp4"
    c = '<video width="100%" height="75%" controls><source src="'
    d = '"  type="video/mp4">您的浏览器不支持 HTML5 video 标签。</video>'
    e = '<br><br><br><button style="width: 144px;"><a href="index.html">返回主頁</a></button>'
    f = c + b + d + e
    document.getElementById("videoHere").innerHTML= f;
}
videoGet()