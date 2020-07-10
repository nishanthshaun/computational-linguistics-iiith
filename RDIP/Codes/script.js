function sentencefunc()
{
var x = document.getElementById("lang").value;
if(x == "null")
{
alert("Select a language");
return false;
}
else if(x =="english"){
document.getElementById("ans").innerHTML=" ";
document.getElementById("demo").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
document.getElementById("demo1").innerHTML = "(select the buttons in proper order)";
var english = englishsentence();
return english;
}
else if(x =="hindi"){
document.getElementById("ans").innerHTML=" ";
document.getElementById("demo").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
document.getElementById("demo1").innerHTML = "(select the buttons in proper order)";
var hindi = hindisentence();
return hindi;
}
}
function englishsentence(){
var eng = ["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple","some students like to study in the night",
"at night some students like to study","John and Mary went to church","Mary and John went to church","John went to church after eating","after eating John went to church",
"John after eating went to church","did he go to market","he did go to market","the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics",
"John goes to the library and studies","John studies and goes to the library","John ate an apple so did she","she ate an apple so did John",
"the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error"
,"after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book"
,"after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book","I told her that I bought a book yesterday",
"I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"];
var length1 = eng.length;
var subarray1 = parseInt(Math.random()*length1);
var subarray = eng[subarray1];
var sen = subarray.split(" ");
var ele = new Array();
while(ele.length < sen.length)
{
var j =parseInt(Math.random()*sen.length);
var n = ele.includes(sen[j]);
if(n != true)
{
ele.push(sen[j]);
}
}
for(var k=0;k<ele.length;k++){
var doc=document.getElementById("ans");
var button=document.createElement('BUTTON');
var text=document.createTextNode(ele[k]);
button.appendChild(text);
doc.appendChild(button);
document.getElementById("ans").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
}	
}
function hindisentence(){
var hin = ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम","राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी",
"मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम",	
"राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम","बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को","एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब","एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है"," बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"];
var length3 = hin.length;
var subarray3 = parseInt(Math.random()*length3);
var sub = hin[subarray3];
var sen1 = sub.split(" ");
var ele1 = new Array();
while(ele1.length < sen1.length)
{
var a =parseInt(Math.random()*sen1.length);
var b = ele1.includes(sen1[a]);
if(b != true)
{
ele1.push(sen1[a]);
}
}
for(var c=0;c<ele1.length;c++){
var doc=document.getElementById("ans");
var button=document.createElement('BUTTON');
var text=document.createTextNode(ele1[c]);
button.appendChild(text);
doc.appendChild(button);
document.getElementById("ans").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
}
}






