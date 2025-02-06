
'use strict';
//==================================================================
/*定義元件*/
var myDate = new Date();
//var script = document.createElement('script');
//script.src = 'D:\\SourceCodeFiles\\Simple-website\\jquery-3.7.1.js';
//document.getElementsByTagName('head')[0].appendChild(script);
const head2=document.querySelector('.haed2');
const head1=document.querySelector('h1');
const buttonclick = document.querySelector('.btn');
const buttonclick2 = document.querySelector('.btn2');
const buttonclick3 = document.querySelector('.btn3');
const buttonclick4 = document.querySelector('.btn4');
//==================================================================
//= 第一個測試選項
//==================================================================
buttonclick.addEventListener('click',function(){
    myDate = new Date();
    document.body.classList.toggle('light_thmem');
    document.body.classList.toggle('drak_thmem');

    const classnam= document.body.className;
    if(classnam == 'light_thmem'){
        this.textContent='日間模式';  
    }
    else{
        this.textContent='夜間模式';
    }
    $(document).ready(function(){
        $("div").css("border","1px solid #000");
    });
    $(function(){
        $('div h2').css('background','#FF9');
        $('#d0').css('background','#0F9');
        $('.btn').css('background','#0F9');
    });

    console.log(myDate.toLocaleString()+'--- const classname:'+classnam);
});
//==================================================================
//= JSP 練習 1 2021/12/04
//==================================================================
buttonclick2.addEventListener('click',function(){
    myDate = new Date();
    var myName = "daniel";
    var myAge = 25;
    var mybool = true;
    var mywieght = 20,myHigh = 150;
    if(this.textContent == '點擊'){
        head1.textContent='測試頁面標題切換'
        head2.textContent='切換模式';/*變更文字內容*/
        this.textContent ="測試用按鈕2";
    }
    else{
        head1.textContent='Task List'
        head2.textContent='click button2 yes';
        this.textContent ="點擊";
        document.write('<h1><a href="https://www.google.com">google</a></h1>'); 
        document.write('<hr>');
        document.write('<p>google page with jsp</p>');    
    }
    document.write("Tranning 1");
    document.write("<h1>我叫做 "+myName+"</h1>");
    document.write("<h1>我的年齡是 "+myAge+mywieght+"</h1>");
    console.log(myDate.toLocaleString()+'--- Button2 has been click.');
    var a = 1;
    //a=prompt("請輸入",0);
    document.write("<h1>你輸入的數值是 "+ a +"</h1>");
    a += myHigh;
    document.write("<h1>計算後的數值是 "+ a +"</h1>");
    switch (a){
        case 0:
            document.write("<h1>選擇的數值是 "+ a +"</h1>");
            break;
        case 1:
            document.write("<h1>選擇的數值是1 ");
            break;
        case 3:
            document.write("<h1>選擇的數值是 3</h1>");
            break;
        default:document.write("<h1>選擇的數值是 "+ a +"</h1>");
            break;
    }
    var i =0;
    while(i<10){
        i++;
        document.write("<h2> I is "+i+"</h2>");
    }
    var b= 0;
    do{
        b++;
        document.write("<h2> B is "+b+"</h2>");
    }while(b<10)

    document.write("<h2> C is </h2>");
    var count = 0;
    for(var c=1;c<=10;c++){
        count += c;
        //document.write("<h2> C is "+count+"</h2>");
    }
    document.write("<h2> C is "+count+"</h2>");
    myTraning();
});
//==================================================================
//=  Trainning Jquery
//==================================================================
buttonclick3.addEventListener('click',function(){
    var sendData = 12;
    myTraning(sendData);
    document.write("<h2>訊息測試 :"+myTraning2(sendData)+"</h2>");
    myTraning3_Array();
    $(document).ready(function(){
        $("div").css("border","1px solid #000");
    });
    $(function(){
        alert("hi");
    });
    $(function(){
        $('div h2').css('background','#FF9');
    });
});
//==================================================================
//=  function Trainning
//==================================================================
function myTraning(testValue){
    testValue += 1;
    alert("練習"+testValue);
}
//==================================================================
function myTraning2(testValue2){
    testValue2 = testValue2 *1.8+32;
    return testValue2;
}
//==================================================================
//=  function Trainning --- Array test
//==================================================================
function myTraning3_Array(){
    var stduent = new Array(3);
    var tel = new Array("111","222","333");
    var add = ["taipei","tai","ide"];

    var arraytest = new Array();
    arraytest[0] = ["test1","test2","test3"];
    arraytest[1] = ["test4","test5","test6"];
    arraytest[2] = ["test7","test8","test9"];
    
    stduent[0] = "test1";
    stduent[1] = "test2";
    stduent[2] = "test3";
    for(var i=0 ; i<stduent.length;i++){
        document.write("測試 :" + stduent[i] +"<br/>");
    }
    for (var j in tel){
        document.write("測試2: "+tel[j]+"<br/>");
    }
    document.write("<table border= '1' >")
    document.write("<tr>");
    for(var h in add){
        document.write("<td>"+add[h]+"</td>");
    }
    document.write("</tr>");
    document.write("</table>")
    
    document.write("<table border= '1'><tr><td>項目</td><td>姓名</td><td>住址</td></tr>")
    for(var y in arraytest){
        document.write("<tr>");
        for(var x in arraytest[y]){
            document.write("<td>"+arraytest[y][x]+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
//================================================================
function person(name,age,tel,weight){
    this.name = name;
    this.age = age;
    this.tel = tel;
    this.weight = weight;
    this.testfun = function(){
        return "myname is "+name+",my age is "+age+",my tel is "+tel+",my wieht is "+weight+"";
    };
}
//==================================================================
//=  function Trainning --- 自定義物件
//==================================================================
buttonclick4.addEventListener('click',function(){
    var personal = new person('davie',20,'0922002910',45);
    var personal2 = new person('Mary',40,'0922002423',65);
    var findurl = document.getElementById("otherpage");
    alert(findurl.innerHTML+"----"+findurl.href);
    document.write(personal.testfun()+"</br>");
    document.write(personal2.testfun()+"</br>");
});