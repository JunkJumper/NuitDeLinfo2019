//VARIABLES
var premier = localStorage.setItem('premier', 0);
var deuxieme = localStorage.setItem('deuxieme', 0);
var troisieme = localStorage.setItem('troisieme', 0);

var tableau = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 200;
        this.canvas.height = 150;
        var ctx = this.canvas.getContext("2d");
        this.canvas.style = "position:absolute; margin-top: +50px; border: 2px solid #0d0d0d;";
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

//METHODES
function update(score) {
    if (score > premier)
        localStorage.setItem('premier', score);
    else if (score > deuxieme)
        localStorage.setItem('deuxieme', score);
    else if (score > troisieme)
        localStorage.setItem('troisieme', score);
}

function load() {
    update(getScore());
    tableau.start();
}

//GETTER
function getPremier() {
    return localStorage.getItem('premier');
}

function getSecond() {
    return localStorage.getItem('deuxieme');
}

function getTroisieme() {
    return localStorage.getItem('troisieme');
}