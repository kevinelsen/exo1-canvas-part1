var dessin = document.getElementById('canvas');
var ctx = dessin.getContext('2d');

ctx.beginPath(); //Début du chemin
ctx.moveTo(150,80); // Le tracé part du point 150,80
ctx.lineTo(300,80);  // Un segment est ajouté vers 300,230
ctx.lineTo(300,250);  // Un segment est ajouté vers 150,230
ctx.lineTo(150,250);
ctx.closePath();      // Fermeture du chemin
ctx.fillStyle = "lightblue"; // Définition de la couleur de remplissage
ctx.fill();  // Remplissage du dernier chemin tracé

//Le toit
ctx.beginPath();
ctx.moveTo(150,80);
ctx.lineTo(300,80);
ctx.lineTo(227,10);
ctx.fillStyle = '#d7823e';
ctx.fill();

//Les fenêtres n°1
ctx.beginPath();
ctx.moveTo(170,100);
ctx.lineTo(170,135);
ctx.lineTo(205,135);
ctx.lineTo(205,100);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();

//Les fenêtres n°2
ctx.beginPath();
ctx.moveTo(250,100);
ctx.lineTo(250,135);
ctx.lineTo(285,135);
ctx.lineTo(285,100);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();

//La porte
ctx.beginPath();
ctx.moveTo(205,190);
ctx.lineTo(205,250);
ctx.lineTo(250,250);
ctx.lineTo(250,190);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();
