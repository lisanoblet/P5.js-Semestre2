var montagne;
var gui = new dat.GUI();
var params = {
    Seed: 17,
    Nombre_de_triangles: 50,
    Longueur_des_Triangles: 500,
    Couleur: '#000000',
    Montagnes: "K2",
    Download_Image: function () { return save(); },
};
gui.add(params, "Seed", 0, 100, 1);
gui.add(params, "Nombre_de_triangles", 0, 200, 1);
gui.add(params, "Longueur_des_Triangles", 400, 1000, 1);
gui.add(params, 'Montagnes', ['K2', 'Aiguille_du_Midi', 'Amphitheatre_Drakensberg', 'Annapurna', 'Aoraki_Mount_Cook']).onChange(function (val) { return montagne = loadJSON("montagnes/" + val + ".json"); });
gui.addColor(params, "Couleur");
gui.add(params, "Download_Image");
var Aiguille_du_Midi;
var Amphitheatre_Drakensberg;
var Annapurna;
var Aoraki_Mount_Cook;
var Barre_des_Ecrins;
var Ben_Nevis;
var Denali;
var Dufourspitze;
var El_Capitan;
var Galdhopiggen;
var Gerlachovsky_stit;
var Gunnbjorn_Fjeld;
var K2;
var Khan_Tengri;
var Kirkjufell;
var Le_Vignemal;
var Licancabur;
var Manaslu;
var Matterhorn;
var Mont_Blanc;
var Montagne_Sainte_Victoire;
var Mount_Ararat;
var Mount_Elbrus;
var Mount_Everest;
var Mount_Fuji;
var Mount_Hua;
var Mount_Kailash;
var Mount_Kilimanjaro;
var Mount_Kinabalu;
var Mount_Olympus;
var Mount_Rainier;
var Mount_Rushmore;
var Mount_Scenery;
var Mountains_of_Banff;
var Popocatepetl;
var Shkara;
var Table_Mountain;
var Tre_Cime_Di_Lavaredo;
var Triglav;
var Ushba;
var Vorder_Grauspitz;
var Zla_Kolata;
var Zugspitze;
function preload() {
    montagne = loadJSON("montagnes/" + params.Montagnes + ".json");
}
function draw() {
    scale(width / 1000, width / 1000);
    background('white');
    randomSeed(params.Seed);
    noFill();
    var PX = montagne.PX;
    var PY = montagne.PY;
    stroke(params.Couleur);
    for (var i = 0; i < PX.length - 1; ++i) {
        line(PX[i], PY[i], PX[i + 1], PY[i + 1]);
    }
    for (var i = 0; i < PX.length - 1; ++i) {
        draw_some_triangles(PX[i], PY[i], PX[i + 1], PY[i + 1]);
    }
    fill(0, 102, 153);
    text(montagne, width / 2 + 200, 890);
    strokeWeight(1);
}
function draw_some_triangles(x_start, y_start, x_end, y_end) {
    var longueurIntervalle = calculLongueurIntervalle(x_start, y_start, x_end, y_end);
    var minX = longueurIntervalle[0];
    var maxX = longueurIntervalle[1];
    var longueur = longueurIntervalle[2];
    if (longueur > 80) {
        for (var i = 0; i <= params.Nombre_de_triangles; i++) {
            var XetY = returnXetY(x_start, y_start, x_end, y_end);
            var newX = XetY[0];
            var newY = XetY[1];
            triangle(newX, newY, random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles), random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles));
        }
    }
    else {
        for (var i = 0; i <= params.Nombre_de_triangles / 4; i++) {
            var XetY = returnXetY(x_start, y_start, x_end, y_end);
            var newX = XetY[0];
            var newY = XetY[1];
            triangle(newX, newY, random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles), random(minX, maxX), random(y_start + 120, y_start + params.Longueur_des_Triangles));
        }
    }
}
function returnXetY(P1X, P1Y, P2X, P2Y) {
    var coeff = (P2Y - P1Y) / (P2X - P1X);
    var n = random();
    var x = (P2X - P1X) * n + P1X;
    var y = coeff * (x - P1X) + P1Y;
    return [x, y];
}
function calculLongueurIntervalle(P1X, P1Y, P2X, P2Y) {
    var longueur = sqrt((P2X - P1X) * (P2X - P1X) + (P2Y - P1Y) * (P2Y - P1Y));
    var minXIntervalle = P1X - (longueur / 2);
    var maxXIntervalle = P2X + (longueur / 2);
    return [minXIntervalle, maxXIntervalle, longueur];
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map