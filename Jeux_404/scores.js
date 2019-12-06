//VARIABLES
var premier = 0;
var deuxieme = 0;
var troisième = 0;

var ligne;

var score = new Array("1ST", "2ND", "3RD");
var premier = score["1ST"];
var deuxieme = score["2ND"];
var troisième = score["3RD"];

var tableau = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 200;
        this.canvas.height = 150;
        this.context = this.canvas.getContext("2d");
        this.canvas.style = "position:absolute; margin-write: +500px; border: 2px solid #0d0d0d;";
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


//METHODES
function update(score) {
    if (score > premier)
        this.premier = score;
    else if (score > deuxieme)
        this.deuxieme = score;
    else if (score > troisième)
        this.troisième = score;
}

function load() {
    update();
    //for (var i = 0; i < score.lenght; i++)
    tableau.start();
}