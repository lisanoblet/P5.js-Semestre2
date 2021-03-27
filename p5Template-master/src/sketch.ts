// -------------------
//  Parameters and UI
// -------------------

let tableauMontagnes = ['Aiguille_du_Midi', 'Amphitheatre_Drakensberg', 'Annapurna', 'Aoraki_Mount_Cook', 'Barre_des_Ecrins',
    'Ben_Nevis', 'Denali', 'Dufourspitze', 'El_Capitan', 'Galdhopiggen', 'Gerlachovsky_stit', 'Gunnbjorn_Fjeld', 'K2',
    'Khan_Tengri', 'Kirkjufell', 'Le_Vignemal', 'Licancabur', 'Manaslu', 'Matterhorn', 'Mont_Blanc', 'Montagne_Sainte_Victoire',
    'Mount_Ararat', 'Mount_Elbrus', 'Mount_Everest', 'Mount_Fuji', 'Mount_Hua', 'Mount_Kailash', 'Mount_Kilimanjaro',
    'Mount_Kinabalu', 'Mount_Olympus', 'Mount_Rainier', 'Mount_Rushmore', 'Mount_Scenery', 'Mountains_of_Banff', 'Popocatepetl',
    'Shkara', 'Table_Mountain', 'Tre_Cime_Di_Lavaredo', 'Triglav', 'Ushba', 'Vorder_Grauspitz', 'Zla_Kolata', 'Zugspitze'
];

let montagne;

const gui = new dat.GUI()
const params = {
    Seed: 17,
    Nombre_de_triangles: 50,
    Longueur_des_Triangles: 500,
    //Largeur_des_Triangles: 120,
    Couleur: '#000000',
    Montagnes: "Montagne_Sainte_Victoire",

    Download_Image: () => save(),
}


gui.add(params, 'Montagnes', tableauMontagnes).onChange(val => montagne = loadJSON("montagnes/" + val + ".json"));

gui.add(params, "Seed", 0, 100, 1)

gui.add(params, "Nombre_de_triangles", 0, 200, 1)

gui.add(params, "Longueur_des_Triangles", 400, 1000, 1)

gui.addColor(params, "Couleur")

gui.add(params, "Download_Image")
//gui.add(params, "Montagne")

// -------------------
//       Drawing
// -------------------



function preload() {

    // CHARGEMENT DU FICHIER JSON CORRESPONDANT A LA MONTAGNE CHOISIE
    montagne = loadJSON("montagnes/" + params.Montagnes + ".json")

}

function draw() {

    if (montagne.PX && montagne.PY) { // pour régler le problème d'asynchronisme de loadjson 

        scale(width / 1000, width / 1000);

        background('white');

        randomSeed(params.Seed)

        stroke(params.Couleur);

        noFill();
       
        // DEFINITION DES COORDONNEES DES POINTS DES LIGNES 
        // En fonction de la montagne choisie dans les paramètres GUI, les coordonnées sont récupérées dans le fichier JSON correspondant  
        const PX = montagne.PX;
        const PY = montagne.PY;
       
        // CREATION DES LIGNES POUR LE CONTOUR DE LA MONTAGNE
        // Les lignes sont créees grâce aux points 
        for (let i = 0; i < PX.length - 1; ++i) {
            line(PX[i], PY[i], PX[i + 1], PY[i + 1]);
        }

        // CREATION DES TRIANGLES EN DESSOUS DE LA LIGNE

        for (let i = 0; i < PX.length - 1; ++i) {
            draw_some_triangles(PX[i], PY[i], PX[i + 1], PY[i + 1]);
        }

        // NOM DE LA MONTAGNE AFFICHÉ EN BAS
        fill(0, 102, 153);
        strokeWeight(0.5);
        text(params.Montagnes, width / 2, 980);

        strokeWeight(1);
    }
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
    }else{
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
    
    return [x, y];
}

//permet de calculer les intervalles pour chaque segment pour que ce soit proportionnel à sa longueur
function calculLongueurIntervalle(P1X, P1Y, P2X, P2Y) {
    let longueur = sqrt((P2X - P1X) * (P2X - P1X) + (P2Y - P1Y) * (P2Y - P1Y));
    
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