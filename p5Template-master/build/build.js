var gui = new dat.GUI();
var params = {
    Seed: 17,
    Nombre_de_triangles: 20,
    Download_Image: function () { return save(); },
};
gui.add(params, "Seed", 0, 100, 1);
gui.add(params, "Nombre_de_triangles", 0, 200, 1);
gui.add(params, "Download_Image");
function draw() {
    background('#fff1fb');
    randomSeed(params.Seed);
    noFill();
    var P1X = 0;
    var P1Y = 280;
    var P2X = 47;
    var P2Y = 270;
    var P3X = 63;
    var P3Y = 280;
    var P4X = 94;
    var P4Y = 252;
    var P5X = 105;
    var P5Y = 252;
    var P6X = 120;
    var P6Y = 242;
    var P7X = 136;
    var P7Y = 242;
    var P8X = 158;
    var P8Y = 226;
    var P9X = 187;
    var P9Y = 242;
    var P10X = 198;
    var P10Y = 233;
    var P11X = 211;
    var P11Y = 235;
    var P12X = 332;
    var P12Y = 195;
    var P13X = 362;
    var P13Y = 195;
    var P14X = 403;
    var P14Y = 177;
    var P15X = 468;
    var P15Y = 172;
    var P16X = 507;
    var P16Y = 145;
    var P17X = 546;
    var P17Y = 154;
    var P18X = 561;
    var P18Y = 212;
    var P19X = 610;
    var P19Y = 272;
    var P20X = 632;
    var P20Y = 320;
    var P21X = 788;
    var P21Y = 335;
    var P22X = 830;
    var P22Y = 376;
    var P23X = 866;
    var P23Y = 376;
    var P24X = 876;
    var P24Y = 385;
    var P25X = 1000;
    var P25Y = 385;
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
    strokeWeight(1);
    draw_some_triangles(P1X, P1Y, P2X, P2Y);
    draw_some_triangles(P2X, P2Y, P3X, P3Y);
    draw_some_triangles(P3X, P3Y, P4X, P4Y);
    draw_some_triangles(P4X, P4Y, P5X, P5Y);
    draw_some_triangles(P5X, P5Y, P6X, P6Y);
    draw_some_triangles(P6X, P6Y, P7X, P7Y);
    draw_some_triangles(P7X, P7Y, P8X, P8Y);
    draw_some_triangles(P8X, P8Y, P9X, P9Y);
    draw_some_triangles(P9X, P9Y, P10X, P10Y);
    draw_some_triangles(P10X, P10Y, P11X, P11Y);
    draw_some_triangles(P11X, P11Y, P12X, P12Y);
    draw_some_triangles(P12X, P12Y, P13X, P13Y);
    draw_some_triangles(P13X, P13Y, P14X, P14Y);
    draw_some_triangles(P14X, P14Y, P15X, P15Y);
    draw_some_triangles(P15X, P15Y, P16X, P16Y);
    draw_some_triangles(P16X, P16Y, P17X, P17Y);
    draw_some_triangles(P17X, P17Y, P18X, P18Y);
    draw_some_triangles(P18X, P18Y, P19X, P19Y);
    draw_some_triangles(P19X, P19Y, P20X, P20Y);
    draw_some_triangles(P20X, P20Y, P21X, P21Y);
    draw_some_triangles(P21X, P21Y, P22X, P22Y);
    draw_some_triangles(P22X, P22Y, P23X, P23Y);
    draw_some_triangles(P23X, P23Y, P24X, P24Y);
    draw_some_triangles(P24X, P24Y, P25X, P25Y);
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
            triangle(newX, newY, random(minX, maxX), random(y_start + 120, y_start + 500), random(minX, maxX), random(y_start + 120, y_start + 500));
        }
    }
    else {
        for (var i = 0; i <= params.Nombre_de_triangles / 4; i++) {
            var XetY = returnXetY(x_start, y_start, x_end, y_end);
            var newX = XetY[0];
            var newY = XetY[1];
            triangle(newX, newY, random(minX, maxX), random(y_start + 120, y_start + 500), random(minX, maxX), random(y_start + 120, y_start + 500));
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