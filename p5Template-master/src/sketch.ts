// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Seed: 17,
    Nombre_de_triangles: 15,
    //Couleur_Rouge: 0,
    //Couleur_Verte: 0,
    //Couleur_Bleue: 0,
    //Nuance_Gris: 0,
    Download_Image: () => save(),
}
gui.add(params, "Seed", 0, 100, 1)
gui.add(params, "Nombre_de_triangles", 0, 200, 1)
//gui.add(params, "Nuance_Gris", 0, 255, 1)
//gui.add(params, "Couleur_Rouge", 0, 255, 1)

//gui.add(params, "Couleur_Verte", 0, 255, 1)

//gui.add(params, "Couleur_Bleue", 0, 255, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {

    background('#fff1fb');

    //randomSeed(6)
    randomSeed(params.Seed)
    //line(debutx, debuty, random(height), random(width));

    noFill();


    // Points pour les lignes du haut
    let P1X = 0;
    let P1Y = 280;

    let P2X = 47;
    let P2Y = 270;

    let P3X = 63;
    let P3Y = 280;

    let P4X = 94;
    let P4Y = 252;

    let P5X = 105;
    let P5Y = 252;

    let P6X = 120;
    let P6Y = 242;

    let P7X = 136;
    let P7Y = 242;

    let P8X = 158;
    let P8Y = 226;

    let P9X = 187;
    let P9Y = 242;

    let P10X = 198;
    let P10Y = 233;

    let P11X = 211;
    let P11Y = 235;

    let P12X = 332;
    let P12Y = 195;


    let P13X = 362;
    let P13Y = 195;

    let P14X = 403;
    let P14Y = 177;

    let P15X = 468;
    let P15Y = 172;

    let P16X = 507;
    let P16Y = 145;

    let P17X = 546;
    let P17Y = 154;

    let P18X = 561;
    let P18Y = 212;

    let P19X = 610;
    let P19Y = 272;

    let P20X = 632;
    let P20Y = 320;

    let P21X = 788;
    let P21Y = 335;

    let P22X = 830;
    let P22Y = 376;

    let P23X = 866;
    let P23Y = 376;

    let P24X = 876;
    let P24Y = 385;
    
    let P25X = 1000;
    let P25Y = 385;
/*
    let P13X = 1100;
    let P13Y = 420;

    let P14X = 400;
    let P14Y = 250;
*/
    // Création des lignes du haut
    strokeWeight(1.25);
    line(P1X, P1Y, P2X, P2Y);
    line(P2X, P2Y, P3X, P3Y);
    line(P3X, P3Y, P4X, P4Y);
    line(P4X, P4Y, P5X, P5Y);
    line(P5X, P5Y, P6X, P6Y);
    line(P6X, P6Y, P7X, P7Y);
    line(P7X, P7Y, P8X, P8Y);
    line(P8X, P8Y, P9X, P9Y);
    line(P9X, P9Y, P10X, P10Y);
    line(P10X, P10Y, P11X, P11Y);
    line(P11X, P11Y, P12X, P12Y);

    line(P12X, P12Y, P13X, P13Y);
    line(P13X, P13Y, P14X, P14Y);
    line(P14X, P14Y, P15X, P15Y);
    line(P15X, P15Y, P16X, P16Y);
    line(P16X, P16Y, P17X, P17Y);
    line(P17X, P17Y, P18X, P18Y);
    line(P18X, P18Y, P19X, P19Y);
    line(P19X, P19Y, P20X, P20Y);
    line(P20X, P20Y, P21X, P21Y);
    line(P21X, P21Y, P22X, P22Y);
    line(P22X, P22Y, P23X, P23Y);
    line(P23X, P23Y, P24X, P24Y);
    line(P24X, P24Y, P25X, P25Y);    


// Création des triangles pour chaque segment
/* Les lignes créées au dessus me servent de limites pour définir la montagne
Les deux points me permettent de trouver l'équation de la droite, ce qui me permet ensuite de trouver des coordonnées aléatoires de x et y à placer afin que les triangles aient toujours au moins un point touchant les droites.
*/
// INTERVALLE 1
strokeWeight(1);
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    /*let coeff = (P2Y - P1Y) / (P2X - P1X);
    let n = random();
    let x = (P2X - P1X)*n + P1X;
    let y = coeff * (x-P1X)+P1Y; 
    */
    let XetY = returnXetY(P1X, P1Y, P2X, P2Y);

    let newX = XetY[0];
    let newY = XetY[1];
    
    triangle(newX, newY, random(-100, 200), random(380, 800), random(-100, 200), random(380, 900));
    //line(newX, newY, random(-100, 200), random(280, 800));

}

// INTERVALLE 2
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P2X, P2Y, P3X, P3Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(-50, 250), random(400, 900), random(-50, 250), random(400, 750));
    //line(newX, newY, random(-50, 250), random(400, 800));
}

// INTERVALLE 3
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P3X, P3Y, P4X, P4Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(-50, 250), random(400, 750), random(-50, 250), random(400, 650));
    //line(newX, newY, random(-50, 250), random(400, 800));
}

// INTERVALLE 4
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P4X, P4Y, P5X, P5Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(50, 300), random(400, 700), random(50, 300), random(400, 900));
    //line(newX, newY, random(50, 300), random(400, 800));
}

// INTERVALLE 5
for (let i = 0; i <= params.Nombre_de_triangles - 5; i++) { //60
    let XetY = returnXetY(P5X, P5Y, P6X, P6Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(0, 300), random(300, 700), random(0, 300), random(300, 700));
    //line(newX, newY, random(0, 300), random(300, 800));
}

// INTERVALLE 6
for (let i = 0; i <= params.Nombre_de_triangles - 5; i++) { //60
    let XetY = returnXetY(P6X, P6Y, P7X, P7Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(-20, 320), random(400, 700), random(-20, 320), random(400, 700));
    //line(newX, newY, random(-20, 320), random(400, 800));
}

// INTERVALLE 7
for (let i = 0; i <= params.Nombre_de_triangles - 5; i++) { //60
    let XetY = returnXetY(P7X, P7Y, P8X, P8Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(-40, 340), random(400, 800), random(-40, 340), random(400, 800));
    //line(newX, newY, random(-40, 340), random(400, 800));
}

// INTERVALLE 8
for (let i = 0; i <= params.Nombre_de_triangles - 5; i++) { //60
    let XetY = returnXetY(P8X, P8Y, P9X, P9Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(-50, 350), random(400, 700), random(-50, 350), random(400, 700));
}

// INTERVALLE 9
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P9X, P9Y, P10X, P10Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(0, 400), random(400, 800), random(0, 400), random(400, 800));
}

// INTERVALLE 10
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P10X, P10Y, P11X, P11Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(0, 400), random(450, 800), random(0, 400), random(450, 800));
}

// INTERVALLE 11
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P11X, P11Y, P12X, P12Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(0, 400), random(450, 800), random(0, 400), random(450, 800));
    //line(newX, newY, random(0, 400), random(450, 800));
}

// INTERVALLE 12
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P12X, P12Y, P13X, P13Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(130, 530), random(450, 700), random(130, 530), random(450, 800));
    //line(newX, newY, random(130, 530), random(450, 800));
}

// INTERVALLE 13
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P13X, P13Y, P14X, P14Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(160, 560), random(450, 650), random(160, 560), random(450, 500));
}

// INTERVALLE 14
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P14X, P14Y, P15X, P15Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(200, 600), random(450, 500), random(200, 600), random(400, 450));
}

// INTERVALLE 15
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P15X, P15Y, P16X, P16Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(260, 660), random(450, 400), random(260, 660), random(450, 500));
}

// INTERVALLE 16 oupsi
for (let i = 0; i <= params.Nombre_de_triangles + 10; i++) { //60
    let XetY = returnXetY(P16X, P16Y, P17X, P17Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(300, 600), random(450, 500), random(300, 600), random(450, 300));
}

// INTERVALLE 16
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P17X, P17Y, P18X, P18Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(350, 550), random(450, 600), random(350, 550), random(450, 600));
    //line(newX, newY, newX + random(0, 100), random(450, 800));
}

// INTERVALLE 17
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P18X, P18Y, P19X, P19Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(360, 560), random(450, 600), random(360, 560), random(450, 600));
}

// INTERVALLE 18
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P19X, P19Y, P20X, P20Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(400, 600), random(450, 700), random(500, 700), random(450, 700));
}

// INTERVALLE 19
for (let i = 0; i <= params.Nombre_de_triangles + 10; i++) { //60
    let XetY = returnXetY(P20X, P20Y, P21X, P21Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(430, 730), random(450, 800), random(530, 830), random(450, 800));
}

// INTERVALLE 20
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P21X, P21Y, P22X, P22Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(600, 900), random(450, 750), random(600, 900), random(450, 800));
}

// INTERVALLE 21
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P22X, P22Y, P23X, P23Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(630, 930), random(650, 800), random(630, 930), random(650, 700));
}

// INTERVALLE 22
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P23X, P23Y, P24X, P24Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(660, 1000), random(450, 750), random(660, 1000), random(450, 850));
}

// INTERVALLE 23
for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
    let XetY = returnXetY(P24X, P24Y, P25X, P25Y);

    let newX = XetY[0];
    let newY = XetY[1];

    triangle(newX, newY, random(670, 1000), random(450, 700), random(670, 1000), random(450, 750));
}

   
    
   
    /*for(let point = 1; point <= 24; point++){
        //for(let pointSup = 2; pointSup <= 25; pointSup++){

        //line(point1X, point1Y, point2X, point2Y);
        let pointTest = 'P' + point + 'X';
        //console.log("test des points : " + pointTest);
        //console.log("test des points : " + 'P' + point + 'X');
        let XetY = returnXetY('P' + point + 'X', 'P' + point + 'Y', 'P' + (point + 1) + 'X', 'P' + (point + 1) + 'Y');

            let newX = XetY[0];
            let newY = XetY[1];

            for (let i = 0; i <= params.Nombre_de_triangles; i++) { 
                triangle(newX, newY, random(0, 1000), random(450, 700), random(0, 1000), random(400, 800));
        }
    }*/
    
}



/*
function coefficient(P1X, P1Y, P2X, P2Y) {
    let coeff = (P2Y - P1Y) / (P2X - P1X);
    return coeff;
}

function xDroite(P1X, P1Y, P2X, P2Y) {
    let n = random();
    let x = (P2X - P1X) * n + P1X;
    return x;
}

function yDroite(P1X, P1Y, P2X, P2Y) {
    let y = coefficient(P1X, P1Y, P2X, P2Y) * (xDroite(P1X, P1Y, P2X, P2Y) - P2X) + P2Y;
    return y;
}
*/


function returnXetY(P1X, P1Y, P2X, P2Y){
    let coeff = (P2Y - P1Y) / (P2X - P1X);
    let n = random();
    let x = (P2X - P1X)*n + P1X;
    let y = coeff * (x-P1X)+P1Y;

    return [x, y];
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}


