function tol(){
var now = new Date(),
    h = now.getHours(),m = now.getMinutes(),s = now.getSeconds();
        if(h<10){
        h = "0" + h 
        }
    if(m<10){
        m = "0" + m 
        }
    if(s<10){
        s = "0" + s 
        };
document.getElementById("time").textContent = h + " : " + m + " : " + s ;

};
window.onload = function () { setInterval(tol , 500);}
/*======================================================================================== */
buoot.onclick = function mar(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim ",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("type").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}

/*============================= */
buoot_1.onclick = function mar(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("type-2").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}
/*============================= */
buoot_2.onclick = function mar(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim ",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("type-3").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}

/*============================= */
buoot_3.onclick = function mar(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("type-4").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}
/*============================= */
buoot_4.onclick = function mar(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("type-5").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}

/*============================= */
buoot_5.onclick = function mar(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim ",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("type-6").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}
/*======================================================================================== */
    if (window.pageYOffset > 3100){
function mara(){

    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim ",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("text-end-1").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}  
    mara();
}
/*=============================================================== */
    if (window.pageYOffset > 3300){
function maraa(){

    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim ",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("text-end-2").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}  
    maraa();
}
/*=============================================================== */
    if (window.pageYOffset > 3400){
function maraaa(){
    var myText_1 ="Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim ",
    i =0 ;
    var writing = setInterval(function(){
        document.getElementById("text-end-3").textContent += myText_1[i];i++;
        if(i > myText_1.length - 1){clearInterval(writing);}
    },50);}  
    maraaa();
}
/*==================================================================================================================== */
var button = document.getElementById("but"),
    pas = document.getElementById("pass");
button.onclick = function(){
    if(button.textContent ==="Show Password"){
        pas.setAttribute("type","text");
        button.textContent ="Hide Password";
    }else{
        pas.setAttribute("type","password");
        button.textContent ="Show Password";
    };
}





