

window.addEventListener("load", function(){
    category1 = document.getElementById("category1");
    category2 = document.getElementById("category2");
    category3 = document.getElementById("category3");
    category4 = document.getElementById("category4");
    category1.onchange = changeCategory1;
    category2.onchange = changeCategory2;
    category3.onchange = changeCategory3;
    category4.onchange = changeCategory4;
    allplay = document.getElementById("play");
    allplay.onclick = play;
  }, false)

var note1;
var note2;
var note3;
var note4;

note_do = new Audio("sound/note_do.mp3");
note_re = new Audio("sound/note_re.mp3");
note_mi = new Audio("sound/note_mi.mp3");
note_fa = new Audio("sound/note_fa.mp3");
note_so = new Audio("sound/note_so.mp3");
note_ra = new Audio("sound/note_ra.mp3");
note_shi = new Audio("sound/note_shi.mp3");
note_do2 = new Audio("sound/note_do2.mp3");



    function changeCategory1() {

        var changedCategory1 = category1.value;  

        switch (changedCategory1){
            case "do":
                note1 = note_do;
                document.getElementById("1").innerText = "ド";            
                break;
            case "re":
                note1 = note_re;
                document.getElementById("1").innerText = "レ";              
                break;
            case "mi":
                note1 = note_mi;
                document.getElementById("1").innerText = "ミ";
                break
            case "fa":
                note1 = note_fa;
                document.getElementById("1").innerText = "ファ";
                break
            case "so":
                note1 = note_so;
                document.getElementById("1").innerText = "ソ";
                break
            case "ra":
                note1 = note_ra;           
                document.getElementById("1").innerText = "ラ";
                break
            case "shi":
                note1 = note_shi;
                document.getElementById("1").innerText = "シ";
                break
            case "do2":
                note1 = note_do2;             
                document.getElementById("1").innerText = "ド";
                break            
            default:               
        }  
    }

    function changeCategory2() {
        var changedCategory2 = category2.value;  

        switch (changedCategory2){
            case "do":
                note2 = note_do;
                document.getElementById("2").innerText = "ド";            
                break;
            case "re":
                note2 = note_re;
                document.getElementById("2").innerText = "レ";              
                break;
            case "mi":
                note2 = note_mi;
                document.getElementById("2").innerText = "ミ";
                break
            case "fa":
                note2 = note_fa;
                document.getElementById("2").innerText = "ファ";
                break
            case "so":
                note2 = note_so;
                document.getElementById("2").innerText = "ソ";
                break
            case "ra":
                note2 = note_ra;           
                document.getElementById("2").innerText = "ラ";
                break
            case "shi":
                note2 = note_shi;
                document.getElementById("2").innerText = "シ";
                break
            case "do2":
                note2 = note_do2;             
                document.getElementById("2").innerText = "ド";
                break            
            default:               
        }       
    }


    function changeCategory3() {
        var changedCategory3 = category3.value; 

        switch (changedCategory3){
            case "do":
                note3 = note_do;
                document.getElementById("3").innerText = "ド";            
                break;
            case "re":
                note3 = note_re;
                document.getElementById("3").innerText = "レ";              
                break;
            case "mi":
                note3 = note_mi;
                document.getElementById("3").innerText = "ミ";
                break
            case "fa":
                note3 = note_fa;
                document.getElementById("3").innerText = "ファ";
                break
            case "so":
                note3 = note_so;
                document.getElementById("3").innerText = "ソ";
                break
            case "ra":
                note3 = note_ra;           
                document.getElementById("3").innerText = "ラ";
                break
            case "shi":
                note3 = note_shi;
                document.getElementById("3").innerText = "シ";
                break
            case "do2":
                note3 = note_do2;             
                document.getElementById("3").innerText = "ド";
                break            
            default:               
        }
        
    }

    function changeCategory4() {
        var changedCategory4 = category4.value;

        switch (changedCategory4){
            case "do":
                note4 = note_do;
                document.getElementById("4").innerText = "ド";            
                break;
            case "re":
                note4 = note_re;
                document.getElementById("4").innerText = "レ";              
                break;
            case "mi":
                note4 = note_mi;
                document.getElementById("4").innerText = "ミ";
                break
            case "fa":
                note4 = note_fa;
                document.getElementById("4").innerText = "ファ";
                break
            case "so":
                note4 = note_so;
                document.getElementById("4").innerText = "ソ";
                break
            case "ra":
                note4 = note_ra;           
                document.getElementById("4").innerText = "ラ";
                break
            case "shi":
                note4 = note_shi;
                document.getElementById("4").innerText = "シ";
                break
            case "do2":
                note4 = note_do2;             
                document.getElementById("4").innerText = "ド";
                break            
            default:               
        }        
    }

    function sleep(waitMsec) {
    var startMsec = new Date();
   
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }

       function play() {

        sleep(2000)
        note1.currentTime = 0; 
        note1.play(); 
        sleep(500); 
        note1.pause();
        note2.currentTime = 0;  
        note2.play(); 
        sleep(500); 
        note2.pause();
        note3.currentTime = 0;  
        note3.play(); 
        sleep(500);  
        note3.pause();
        note4.currentTime = 0;  
        note4.play(); 
        sleep(600); 
        note4.pause();
    }

document.getElementById("refresh").onclick = function() { 
    window.location.reload();
}
    