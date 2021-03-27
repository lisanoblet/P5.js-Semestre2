var tableauMontagnes = ['Aiguille_du_Midi', 'Amphitheatre_Drakensberg', 'Annapurna', 'Aoraki_Mount_Cook', 'Barre_des_Ecrins',
    'Ben_Nevis', 'Denali', 'Dufourspitze', 'El_Capitan', 'Galdhopiggen', 'Gerlachovsky_stit', 'Gunnbjorn_Fjeld', 'K2',
    'Khan_Tengri', 'Kirkjufell', 'Le_Vignemal', 'Licancabur', 'Manaslu', 'Matterhorn', 'Mont_Blanc', 'Montagne_Sainte_Victoire',
    'Mount_Ararat', 'Mount_Elbrus', 'Mount_Everest', 'Mount_Fuji', 'Mount_Hua', 'Mount_Kailash', 'Mount_Kilimanjaro',
    'Mount_Kinabalu', 'Mount_Olympus', 'Mount_Rainier', 'Mount_Rushmore', 'Mount_Scenery', 'Mountains_of_Banff', 'Popocatepetl',
    'Shkara', 'Table_Mountain', 'Tre_Cime_Di_Lavaredo', 'Triglav', 'Ushba', 'Vorder_Grauspitz', 'Zla_Kolata', 'Zugspitze'
];
var montagne;
var gui = new dat.GUI();
var params = {
    Seed: 17,
    Nombre_de_triangles: 50,
    Longueur_des_Triangles: 500,
    Couleur: '#000000',
    Montagnes: "Montagne_Sainte_Victoire",
    Download_Image: function () { return save(); },
};
gui.add(params, 'Montagnes', tableauMontagnes).onChange(function (val) { return montagne = loadJSON("montagnes/" + val + ".json"); });
gui.add(params, "Seed", 0, 100, 1);
gui.add(params, "Nombre_de_triangles", 0, 200, 1);
gui.add(params, "Longueur_des_Triangles", 400, 1000, 1);
gui.addColor(params, "Couleur");
gui.add(params, "Download_Image");
function preload() {
    montagne = loadJSON("montagnes/" + params.Montagnes + ".json");
}
function draw() {
    if (montagne.PX && montagne.PY) {
        scale(width / 1000, width / 1000);
        background('white');
        randomSeed(params.Seed);
        stroke(params.Couleur);
        noFill();
        var PX = montagne.PX;
        var PY = montagne.PY;
        for (var i = 0; i < PX.length - 1; ++i) {
            line(PX[i], PY[i], PX[i + 1], PY[i + 1]);
        }
        for (var i = 0; i < PX.length - 1; ++i) {
            draw_some_triangles(PX[i], PY[i], PX[i + 1], PY[i + 1]);
        }
        fill(0, 102, 153);
        strokeWeight(0.5);
        text(params.Montagnes, width / 2, 980);
        strokeWeight(1);
    }
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