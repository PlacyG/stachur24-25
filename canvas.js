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





