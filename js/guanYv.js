function guanYv()
{
    a = '<p><h2>關於訪問視頻</h2>請輸入諸如UN-0001訪問, 或者UN-0564-1來訪問分檔案<br />'
    b = '<br />已經可供訪問的檔案視頻有<br />'
    c = 'UN-0001<br />UN-0027<br />UN-0101<br />UN-0118<br />UN-0321<br />UN-0344<br />UN-0368<br />UN-0449<br />UN-0564-1<br />UN-0564-2<br />UN-0714<br />UN-0731<br />UN-0763-1<br />UN-0763-2<br />UN-0763-3<br />UN-0909<br />UN-1026<br/>UN-1037<br />UN-1129<br />UN-3067'
    d = '<br />如果視頻卡頓嚴重可以<a href="https://lynxh.lanzouy.com/iIc7R0lurkti">下載觀看</a>'
    e = '<br /><button onclick="shouQi()">收起關於</button>'
    f = '</p>'
    g = a+b+c+d+e+f
    //以上都是視頻訪問頁面的關於內容, 分開寫是因為這樣更容易看出來寫了什麼, g變量是把以上所有內容整合起來
    document.getElementById("guanYv").innerHTML= g;
}
function shouQi()
{
    document.getElementById("guanYv").innerHTML= '';
}