// -------------------
//  Parameters and UI
// -------------------

//let tableauMontagnes = ['K2', 'Sainte_Victoire', 'Mont_Blanc'];
//let montagneChoisie;
let montagne;

const gui = new dat.GUI()
const params = {
    Seed: 17,
    Nombre_de_triangles: 50,
    Longueur_des_Triangles: 500,
    //Largeur_des_Triangles: 120,
    Couleur: '#000000',
    //tableauMontagnes: 'K2',
    //message: "bonjour",
    //test: false,
    Montagnes: "K2",
    //Couleur_Rouge: 0,
    //Couleur_Verte: 0,
    //Couleur_Bleue: 0,
    //Nuance_Gris: 0,
    Download_Image: () => save(),
    //Montagne: () => montagneChoisie(),
}

gui.add(params, "Seed", 0, 100, 1)
gui.add(params, "Nombre_de_triangles", 0, 200, 1)

gui.add(params, "Longueur_des_Triangles", 400, 1000, 1)

//val => montagne = loadJSON("montagnes/" + val + ".json")

//gui.add(params, "Largeur_des_Triangles", 120, 1000, 1)
//gui.add(params, "message")
gui.add(params, 'Montagnes', [ 'K2', 'Aiguille_du_Midi', 'Amphitheatre_Drakensberg', 'Annapurna', 'Aoraki_Mount_Cook', 'Barre_des_Ecrins', 'Ben_Nevis', 'Denali'] ).onChange(val => montagne = loadJSON("montagnes/" + val + ".json"));
//gui.add(text, 'language', ['english','spanish','french'])
gui.addColor(params, "Couleur")
//gui.add(params, "Name", tableauMontagnes[0], tableauMontagnes[1], 1)
//gui.add(params, "Nuance_Gris", 0, 255, 1)
//gui.add(params, "Couleur_Rouge", 0, 255, 1)

//gui.add(params, "Couleur_Verte", 0, 255, 1)

//gui.add(params, "Couleur_Bleue", 0, 255, 1)
gui.add(params, "Download_Image")
//gui.add(params, "Montagne")

// -------------------
//       Drawing
// -------------------

//montagne = params.Montagnes;

let Aiguille_du_Midi;
let Amphitheatre_Drakensberg;
let Annapurna;
let Aoraki_Mount_Cook;
let Barre_des_Ecrins;
let Ben_Nevis;
let Denali;
let Dufourspitze;
let El_Capitan;
let Galdhopiggen;
let Gerlachovsky_stit;
let Gunnbjorn_Fjeld;
let K2;
let Khan_Tengri;
let Kirkjufell;
let Le_Vignemal;
let Licancabur;
let Manaslu;
let Matterhorn;
let Mont_Blanc;
let Montagne_Sainte_Victoire;
let Mount_Ararat;
let Mount_Elbrus;
let Mount_Everest;
let Mount_Fuji;
let Mount_Hua;
let Mount_Kailash;
let Mount_Kilimanjaro;
let Mount_Kinabalu;
let Mount_Olympus;
let Mount_Rainier;
let Mount_Rushmore;
let Mount_Scenery;
let Mountains_of_Banff;
let Popocatepetl;
let Shkara;
let Table_Mountain;
let Tre_Cime_Di_Lavaredo;
let Triglav;
let Ushba;
let Vorder_Grauspitz;
let Zla_Kolata;
let Zugspitze;






//montagneChoisie = K2;
function preload() {
    
    /*Aiguille_du_Midi = loadJSON("montagnes/Aiguille_du_Midi.json");
    Amphitheatre_Drakensberg = loadJSON("montagnes/Amphitheatre_Drakensberg.json");
    Annapurna = loadJSON("montagnes/Annapurna.json");
    Aoraki_Mount_Cook = loadJSON("montagnes/Aoraki_Mount_Cook.json");

    K2 = loadJSON("montagnes/K2.json");*/

    montagne = loadJSON("montagnes/" + params.Montagnes + ".json")
    //redraw();
    //console.log(montagne)
    
}
/*
function loadMontagne(nomDuFichier){
    montagne = nomDuFichier;
    montagne = loadJSON("montagnes/" + nomDuFichier + ".json");
    return montagne;
}
*/

function draw() {

    scale(width/1000, width/1000);
    
    background('white');

    //randomSeed(6)
    randomSeed(params.Seed)
    //line(debutx, debuty, random(height), random(width));

    noFill();
/*
    for(let j = params.tableauMontagnes; j<40; j++){
        let montagneChoisie = tableauMontagnes[j];
        let montagne = loadJSON("montagnes/" + montagneChoisie + ".json")
    }
    */
    
//console.log(montagne.PX)
    const PX = montagne.PX;
    const PY = montagne.PY;
    //console.log(PX)
    stroke(params.Couleur);

    for (let i = 0; i < PX.length - 1; ++i) {
      line(PX[i], PY[i], PX[i+1], PY[i+1]);
    }

    
    for (let i = 0; i < PX.length - 1; ++i) {
      draw_some_triangles(PX[i], PY[i], PX[i+1], PY[i+1]);
    }

    fill(0, 102, 153);
    text(montagne, width/2+200, 890);

    strokeWeight(1);

}


function draw_some_triangles(x_start, y_start, x_end, y_end) {

    //les triangles sont contenus dans des intervalles qui sont proportionnelles à chaque segment 
    //je les calcule grace a la fonction
    let longueurIntervalle = calculLongueurIntervalle(x_start, y_start, x_end, y_end);

    // coordonnées des points x à ne pas dépasser pour les intervalles des segments
    let minX = longueurIntervalle[0];
    let maxX = longueurIntervalle[1];
    let longueur = longueurIntervalle[2];


    // pour éviter une densité très très importante sur les petits segments, je rajoute une condition pour diminuer le nombre de triangles
    if (longueur > 80) {

        for (let i = 0; i <= params.Nombre_de_triangles; i++) { //60
            let XetY = returnXetY(x_start, y_start, x_end, y_end);
            //coordonnées de x et y le premier point du triangle sur la droite 
            let newX = XetY[0];
            let newY = XetY[1];

            // je change les valeurs des y pour avoir des hauteurs différentes comme sur l'oeuvre originale mais proportionnelles de ce qu'il y a au dessus sans dépasser la ligne 
            triangle(newX, newY, random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles), random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles));
        }
    } else {
        for (let i = 0; i <= params.Nombre_de_triangles / 4; i++) { //60
            let XetY = returnXetY(x_start, y_start, x_end, y_end);

            let newX = XetY[0];
            let newY = XetY[1];

            triangle(newX, newY, random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles), random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles));
        }
    }
}


// retourne les coordonnées du premier point du triangle qui est sur la droite 
function returnXetY(P1X, P1Y, P2X, P2Y) {
    let coeff = (P2Y - P1Y) / (P2X - P1X);
    let n = random();
    let x = (P2X - P1X) * n + P1X;
    let y = coeff * (x - P1X) + P1Y;
    //let longueur = sqrt((P2X - P1X)*(P2X - P1X) + (P2Y - P1Y)*(P2Y - P1Y));
    //let longueurIntervalle = longueur * longueur;

    return [x, y];
}

//permet de calculer les intervalles pour chaque segment pour que ce soit proportionnel à sa longueur
function calculLongueurIntervalle(P1X, P1Y, P2X, P2Y) {
    let longueur = sqrt((P2X - P1X) * (P2X - P1X) + (P2Y - P1Y) * (P2Y - P1Y));
    //let longueurIntervalle = longueur * 4;

    let minXIntervalle = P1X - (longueur / 2);
    let maxXIntervalle = P2X + (longueur / 2);

    return [minXIntervalle, maxXIntervalle, longueur];
}

// -------------------
//    Initialization
// -------------------


function setup() {
    //noLoop()

    p6_CreateCanvas()

 
}

function windowResized() {
    p6_ResizeCanvas()
}