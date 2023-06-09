var stanmenu 
stanmenu = 0

function myFunctionmenu() {

if (stan==0 && stanmenu == 0) {
 stan = 1
stanmenu = 1

}

if (stan==1 && stanmenu == 0) {

stan = 0
stanmenu = 1

}

if (stan==0 ) {

  document.getElementById("menu").innerHTML = "menu rozwiń" ;
document.getElementById("menulink1").innerHTML = "" ;
document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;



}

if (stan==1 ) {

    document.getElementById("menu").innerHTML = "menu zwiń" ;
document.getElementById("menulink1").innerHTML = "" ;
document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";
  document.getElementById("menu1").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=50>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Pierwsza"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
  document.getElementById("menu2").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"PseudoPoeta"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
  document.getElementById("menu3").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=90>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Projekty"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;
  document.getElementById("menu4").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=110>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Antymagia"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;
  document.getElementById("menu5").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=130>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Pseudoheros"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;
  document.getElementById("menu6").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=150>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Metafizyka"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;


}
stanmenu = 0

if (stan==2 ) {

    document.getElementById("menu").innerHTML = "menu zwiń" ;
document.getElementById("menulink1").innerHTML = "" ;
document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";
  document.getElementById("menu1").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=50>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Pierwsza"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
  document.getElementById("menu2").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"PseudoPoeta"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
  document.getElementById("menu3").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=90>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Projekty"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;
  document.getElementById("menu4").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=110>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Antymagia"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;
  document.getElementById("menu5").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=130>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Pseudoheros"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;
  document.getElementById("menu6").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=RIGHT BEHAVIOR=SLIDE SCROLLDELAY=150>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"Metafizyka"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>"  ;

stan = 1
}
}

function myFunctionmenu1() {
stan = 2
link = 1

if (stan==2 ) {
  document.getElementById("menu").innerHTML = "menu rozwiń" ;

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;

}
if (stan==2 && link==1) {
  document.getElementById("menulink1").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=down BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"kliknij link"+
"<br>"+
"Pierwsza"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;

document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";
}
}

function myFunctionmenu2() {
stan = 2
link = 2

if (stan==2 ) {
  document.getElementById("menu").innerHTML = "menu rozwiń" ;

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;

}
if (stan==2 && link==2) {
  
  document.getElementById("menulink1").innerHTML = "";

document.getElementById("menulink2").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=down BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"kliknij link"+
"<br>"+
"PseudoPoeta"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";
}
}

function myFunctionmenu3() {
stan = 2
link = 3

if (stan==2 ) {
  document.getElementById("menu").innerHTML = "menu rozwiń" ;

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;

}
if (stan==2 && link==3) {
    document.getElementById("menulink1").innerHTML = "";

document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=down BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"kliknij link"+
"<br>"+
"Projekty"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";
}
}

function myFunctionmenu4() {
stan = 2
link = 4

if (stan==2 ) {
  document.getElementById("menu").innerHTML = "menu rozwiń" ;

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;

}
if (stan==2 && link==4) {
    document.getElementById("menulink1").innerHTML = "";

document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=down BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"kliknij link"+
"<br>"+
"Antymagia"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "";
}
}

function myFunctionmenu5() {
stan = 2
link = 5

if (stan==2 ) {
  document.getElementById("menu").innerHTML = "menu rozwiń" ;

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;

}
if (stan==2 && link==5) {
    document.getElementById("menulink1").innerHTML = "";

document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=down BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"kliknij link"+
"<br>"+
"Pseudoheros"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
document.getElementById("menulink6").innerHTML = "";
}
}

function myFunctionmenu6() {
stan = 2
link = 6

if (stan==2 ) {
  document.getElementById("menu").innerHTML = "menu rozwiń" ;

  document.getElementById("menu1").innerHTML = "" ;
  document.getElementById("menu2").innerHTML = "" ;
  document.getElementById("menu3").innerHTML = "" ;
  document.getElementById("menu4").innerHTML = "" ;
  document.getElementById("menu5").innerHTML = "" ;
  document.getElementById("menu6").innerHTML = "" ;

}
if (stan==2 && link==6) {
    document.getElementById("menulink1").innerHTML = "";

document.getElementById("menulink2").innerHTML = "";
document.getElementById("menulink3").innerHTML = "";
document.getElementById("menulink4").innerHTML = "";
document.getElementById("menulink5").innerHTML = "";
document.getElementById("menulink6").innerHTML = "<TABLE BORDER=0 >"+  
"<td>"+
"<MARQUEE DIRECTION=down BEHAVIOR=SLIDE SCROLLDELAY=70>"+
"<TABLE BORDER=0 BGCOLOR=blue>"+  
"<td>"+
"kliknij link"+
"<br>"+
"Metafizyka"+
"</td>"+
"</TABLE>"+
"</MARQUEE>"+
"</td>"+
"</TABLE>" ;
}
}






