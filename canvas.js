//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
console.log('PACYGA')
console.log('FILIP')
console.log('4F')
console.log('NR 23')

console.log('1 filmik z jakiego korzystalem')
console.log('https://www.youtube.com/watch?v=EO6OkltgudE&t=3s');

console.log('2 filmik z jakiego korzystalem')
console.log('https://www.youtube.com/watch?v=83L6B13ixQ0&t=24s/');

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c =canvas.getContext('2d');

console.log(canvas);


//okregi

c.beginPath();
c.lineWidth = 4;
c.arc(400,200,80,Math.PI/4,Math.PI*3/4,true);
c.strokeStyle = 'black';
c.stroke();

c.beginPath();
c.arc(400, 310, 80, Math.PI * (5 / 4), Math.PI * (7 / 4), true);
c.strokeStyle = 'black';
c.stroke();



c.beginPath();
c.lineWidth = 4;
c.arc(400,200,40, 0, Math.PI*2,true);
c.strokeStyle = 'cyan';
c.stroke();

c.beginPath();
c.arc(400, 310, 40,  0, Math.PI*2, true);
c.strokeStyle = 'gray';
c.stroke();



//linie

c.beginPath();
c.moveTo(400,240);
c.lineTo(400, 160);
c.strokeStyle = 'cyan';
c.stroke();

c.beginPath();
c.moveTo(440,200);
c.lineTo(360, 200);
c.strokeStyle = 'cyan';
c.stroke();

c.beginPath();
c.moveTo(430,230);
c.lineTo(370, 170);
c.strokeStyle = 'cyan';
c.stroke();

c.beginPath();
c.moveTo(430,170);
c.lineTo(370, 230);
c.strokeStyle = 'cyan';
c.stroke();

//400, 310, oryginalne srodka szarego

c.beginPath();
c.moveTo(430,340);
c.lineTo(370, 280);
c.strokeStyle = 'gray';
c.stroke();

c.beginPath();
c.moveTo(430,280);
c.lineTo(370, 340);
c.strokeStyle = 'gray';
c.stroke();

c.beginPath();
c.moveTo(400,350);
c.lineTo(400, 270);
c.strokeStyle = 'gray';
c.stroke();

c.beginPath();
c.moveTo(360,310);
c.lineTo(440, 310);
c.strokeStyle = 'gray';
c.stroke();



// polokregi

c.beginPath();
c.arc(330, 255, 80, 3/2*Math.PI, Math.PI/2, true); 
c.strokeStyle = 'green';
c.stroke();

c.beginPath();
c.arc(330, 255, 100, 3/2*Math.PI, Math.PI/2, true); 
c.strokeStyle = 'red';
c.stroke();


c.beginPath();
c.arc(470, 255, 80,  3/2*Math.PI, Math.PI/2, false); 
c.strokeStyle = 'blue';
c.stroke();

c.beginPath();
c.arc(470, 255, 100, 3/2*Math.PI, Math.PI/2, false); 
c.strokeStyle = 'magenta';
c.stroke();





//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
c.beginPath();
c.moveTo(100,500);
c.lineTo(900,500);
c.stroke();
c.strokeStyle = '#83A12F';
c.moveTo(900,500);
c.lineTo(900,100);
c.moveTo(900,500);
c.lineTo(14000,500);
c.stroke();





//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------


//ferrari

c.beginPath();
c.moveTo(310,600);
c.lineTo(730,600);
c.stroke();
c.strokeStyle = '#183AAF';
c.lineTo(730,620);
c.lineTo(340,620);
c.lineTo(340,670);
c.lineTo(360,670);
c.lineTo(360,660);
c.lineTo(375,660);
c.lineTo(375,690);
c.lineTo(360,690);
c.lineTo(360,680);
c.lineTo(340,680);
c.lineTo(340,730);
c.lineTo(355,730);
c.lineTo(355,745);
c.lineTo(310,745);
c.lineTo(310,730);
c.lineTo(320,730);
c.lineTo(320,620);
c.lineTo(310,620);
c.lineTo(310,600);
c.stroke();

////////////////////////////////////
// MOMENT kiedy dowiedziałem sie że tekst mozna drukować w canvasie a nie musze sie bawić arcami
c.font = 'bold 153px Arial';
c.strokeStyle = '#34cfeb';
 c.lineWidth = 4;
 c.strokeText('e', 385, 745);
 c.strokeStyle = 'magenta';
 c.strokeText('r', 480, 745);
 c.strokeText('r', 545, 745);
 c.strokeStyle = '#34cfeb';
 c.strokeText('a', 610, 745);
 c.strokeStyle = 'magenta';
 c.strokeText('r', 700, 745);
 c.strokeStyle = 'green';
 c.strokeText('i', 768, 745);
    
//zegarek



c.beginPath();
c.strokeStyle = 'black';
c.arc(1200,280,120,0,Math.PI*2,true)
c.arc(1200,280,140,0,Math.PI*2,true)
c.rect(1055,135,290,290);
c.stroke();
c.beginPath();
c.arc(1200,280,5,0,Math.PI*2,true);
c.stroke();
c.moveTo(1200,280);
c.lineTo(1130,250);
c.lineTo(1149,240);
c.lineTo(1130,255);
c.lineTo(1145,270);
c.moveTo(1200,280);
c.lineTo(1135,360);
c.lineTo(1138,340);
c.stroke();
c.beginPath();
c.moveTo(1135,360);
c.lineTo(1153,352);
c.stroke();
c.beginPath();
c.arc(1083,165,15,0,2*Math.PI,true);
c.stroke();
c.beginPath();
c.arc(1083,400,15,0,2*Math.PI,true);
c.stroke();
c.beginPath();
c.arc(1318,165,15,0,2*Math.PI,true);
c.stroke();
c.beginPath();
c.arc(1318,400,15,0,2*Math.PI,true);
c.stroke();

c.font = 'bold 35px Arial';
c.strokeStyle = 'black';
 c.lineWidth = 2;
 c.strokeText('1', 1250, 220);
 c.strokeText('2', 1280, 245);
 c.strokeText('3', 1295, 295);
 c.strokeText('4', 1280, 340);
 c.strokeText('5', 1250, 375);
 c.strokeText('6', 1190, 395);
 c.strokeText('7', 1130, 380);
 c.strokeText('8', 1090, 340);
 c.strokeText('9', 1084, 295);
 c.strokeText('10', 1092, 250);
 c.strokeText('11', 1120, 215);
 c.strokeText('12', 1180, 196);
 c.stroke();
 
