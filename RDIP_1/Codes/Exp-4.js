var corpus1 = ["A mouse was having a very bad time.She could find no food at all.She looked here and there,but there was no food,and she grew very thin.", "At last the mouse found a basket,full of corn.There was a small hole in the basket,and she crept in.She could just get through the hole.Then she began to eat the corn.", "Being very hungry,she ate a great deal , and went on eating and eating.She had grown very fat before she felt that she had had enough.", "When the mouse tried to climb out of the basket,she could not . She was too fat to pass through the hole.\"How shall I climb out?\"said the mouse.", " \"Oh,how shall I climb out?\"Just then a rat came along,and he heard the mouse. \"Mouse\" said the rat,\" If you want to climb out of the basket,you must wait till you have grown as thin as you were when you went in."]

var corpus2 = ["A wolf carried off a lamb. The lamb said,\" I know you are going to eat me, but before you eat me I would like to hear you play the flute.", "I have heard that you can play the flute better than anyone else, even the shepherd himself.", "The wolf was so pleased at this that he took out his flute and began to play.", "When he had done, the lamb insisted him to play once more and the wolf played again.", "The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."]

var corpus3 = ["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it.", "Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey.", "\"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself,", "\"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table.", "Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house,", "and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair.\""]
var res = "";
var stemmer = new Snowball('English');
var root_word = [];
var root_similar = {};
function corpusfunc() {
    var x = document.getElementById("corpus").value;
    if (x == "corpus1") {
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("tab1").innerHTML = "";
        document.getElementById("sub").innerHTML = "";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("root").innerHTML = "";
        document.getElementById("roots").innerHTML = "";
        document.getElementById("button").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        var a = corpus1func();
        return a;
    }
    else if (x == "corpus2") {
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("tab1").innerHTML = "";
        document.getElementById("sub").innerHTML = "";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("root").innerHTML = "";
        document.getElementById("roots").innerHTML = "";
        document.getElementById("button").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        var b = corpus2func();
        return b;
    }
    else if (x == "corpus3") {
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("tab1").innerHTML = "";
        document.getElementById("sub").innerHTML = "";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("root").innerHTML = "";
        document.getElementById("roots").innerHTML = "";
        document.getElementById("button").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        var c = corpus3func();
        return c;
    }
    else {
        alert("select a corpus");
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("tab1").innerHTML = "";
        document.getElementById("sub").innerHTML = "";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("root").innerHTML = "";
        document.getElementById("roots").innerHTML = "";
        document.getElementById("button").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        return false;
    }
}
function corpus1func() {
    var finishedsentence = "";
    for (var i = 0; i < corpus1.length; i++) {
        finishedsentence += corpus1[i];
    }
    res = finishedsentence;
    document.getElementById("demo").innerHTML = finishedsentence;
    document.getElementById("demo1").innerHTML = "Enter the number of tokens and types for the above corpus:";
    var table = document.getElementById("tab1");
    var row1 = table.insertRow(0);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var cell11 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    cell1.innerHTML = "#tokens:";
    cell2.innerHTML = '<input type="text" id="token" value=""/>'
    cell11.innerHTML = "#types:"
    cell22.innerHTML = '<input type="text" id="type" value=""/>'
    var Button = '<center><button id="submit" onclick="comparefunc(res)">submit</button></center>'
    document.getElementById("sub").innerHTML = Button;
    d = 0
    res = corpus_1.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

    //console.log(res)

    for (var i = 0; i < res.length; i++) {
        stemmer.setCurrent(res[i]);

        stemmer.stem()

        root_word.push(stemmer.getCurrent())
    }

    console.log(root_word)

    for (var i = 0; i < root_word.length; i++) {
        if (root_similar[root_word[i]]) {
            //console.log(root_similar)
            root_similar[root_word[i]]++;
        }

        else {
            //console.log(root_similar)
            d++;

            root_similar[root_word[i]] = 1;
        }
    }
}
function corpus2func() {
    var finishedsentence = "";
    for (var i = 0; i < corpus2.length; i++) {
        finishedsentence += corpus2[i];
    }
    res = finishedsentence;
    document.getElementById("demo").innerHTML = finishedsentence;
    document.getElementById("demo1").innerHTML = "Enter the number of tokens and types for the above corpus:";
    var table = document.getElementById("tab1");
    var row1 = table.insertRow(0);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var cell11 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    cell1.innerHTML = "#tokens:";
    cell2.innerHTML = '<input type="text" id="token" value=" "/>'
    cell11.innerHTML = "#types:"
    cell22.innerHTML = '<input type="text" id="type" value = " "/>'
    var Button = '<button id="submit" onclick="comparefunc(res)">submit</button>'
    document.getElementById("sub").innerHTML = Button;
}
function corpus3func() {
    var finishedsentence = "";
    for (var i = 0; i < corpus3.length; i++) {
        finishedsentence += corpus3[i];
    }
    res = finishedsentence;
    document.getElementById("demo").innerHTML = finishedsentence;
    document.getElementById("demo1").innerHTML = "Enter the number of tokens and types for the above corpus:";
    var table = document.getElementById("tab1");
    var row1 = table.insertRow(0);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var row2 = table.insertRow(1);
    var cell11 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    cell1.innerHTML = "#tokens:";
    cell2.innerHTML = '<input type="text" id="tokens" value = "token">'
    cell11.innerHTML = "#types:"
    cell22.innerHTML = '<input type="text" id="types" value = "type">'
    var Button = '<button id="submit" onclick="comparefunc(res)">submit</button>'
    document.getElementById("sub").innerHTML = Button;
}
var ele = "";
function comparefunc(res) 
{
    document.getElementById("demo2").innerHTML = "";
    var val = res;
    var va = val.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
    var val1 = va.replace(/\s{2,}/g, " ").split(" ");
    var length1 = val1.length;
    ele = new Array();
    for (var i = 0; i < val1.length; i++) {
        var str = val1[i].toLowerCase();
        var n = ele.includes(str);
        if (n != true) {
            ele.push(str);
        }
    }
    var length2 = ele.length;
    var valu1 = Number(document.getElementById("token").value);
    var valu2 = Number(document.getElementById("type").value);
    if (length1 == valu1 && length2 == valu2) {
        document.getElementById("token").style.backgroundColor = "green";
        document.getElementById("type").style.backgroundColor = "green";
    }
    else if (length1 == valu1 && length2 != valu2) {
        document.getElementById("token").style.backgroundColor = "green";
        document.getElementById("type").style.backgroundColor = "red";
    }
    else if (length1 != valu1 && length2 == valu2) {
        document.getElementById("token").style.backgroundColor = "red";
        document.getElementById("type").style.backgroundColor = "green";
    }
    else {
        document.getElementById("token").style.backgroundColor = "red";
        document.getElementById("type").style.backgroundColor = "red";
    }
    if (length1 == valu1 && length2 == valu2) {
        document.getElementById("demo2").innerHTML = "Right answer";
        document.getElementById("demo2").style.backgroundColor = "green";
        var button = '<center><button id="continue" onclick = "rootsfunc(ele)">continue</button></center>'
        document.getElementById("root").innerHTML = button;
    }
    else {
        document.getElementById("demo2").innerHTML = "wrong answer";
        document.getElementById("demo2").style.backgroundColor = "red";
    }
}
function rootsfunc(ele) 
{
    document.getElementById("root").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("sub").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById("demo3").innerHTML = "#newtypes";
    var input = '<center><input type="text" id="newtype"></center>'
    document.getElementById("roots").innerHTML = input;
    var button = '<center><button id="newtypes" onclick = "newtypes(ele)">submit</button></center>'
    document.getElementById("button").innerHTML = button;
}
function newtypes(ele) {
    document.getElementById("demo4").innerHTML = root_word.length;
}
function newtypes(ele) 
{
    var value1 = Number(document.getElementById("newtype").value);
    var stemr1 = ele
    var str = [];
    var unique = [];
    var j = 0;
    for (var i = 0; i < stemr1.length; i++) {
        if (stemr1[i] == 'the' || stemr1[i] == 'of' || stemr1[i] == 'to' || stemr1[i] == 'very' || stemr1[i] == 'off' || stemr1[i] == 'me' || stemr1[i] == 'you' || stemr1[i] == 'up') {
            continue;
        }
        else {
            stemmer.setCurrent(stemr1[i]);
            stemmer.stem();
            str[j] = stemmer.getCurrent();
            j++;
        }
        var n = "";
        for (var k = 0; k < str.length; k++)
        {
            n = unique.includes(str[k]);
            if (n != true)
            {
                unique.push(str[k]);
            }
        }
        var length2 = unique.length;
        if (value1 == length2) {
            document.getElementById("newtype").style.backgroundColor = "green";
            document.getElementById("demo4").innerHTML = "RIGHT ANSWER";
            document.getElementById("demo4").style.backgroundColor = "green";
        }
        else {
            document.getElementById("newtype").style.backgroundColor = "red";
            document.getElementById("demo4").innerHTML = "WRONG ANSWER";
            document.getElementById("demo4").style.backgroundColor = "red";
}
}
}