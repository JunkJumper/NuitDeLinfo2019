var personnage;
var obstacle = [];
var score;

function startGame() {
    personnage = new component(30, 30, "red", 10, 120);
    personnage.gravity = 0.05;
    score = new component("30px", "Consolas", "black", 280, 40, "text");
    plateau.start();
}

var plateau = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(largeur, longueur, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = largeur;
    this.height = longueur;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = plateau.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = plateau.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(objet) {
        var gauche = this.x;
        var droite = this.x + (this.width);
        var haut = this.y;
        var bas = this.y + (this.height);
        var objGauche = objet.x;
        var objDroite = objet.x + (objet.width);
        var objHaut = objet.y;
        var objBas = objet.y + (objet.height);
        var crash = true;
        if ((bas < objHaut) || (haut > objBas) || (droite < objGauche) || (gauche > objDroite)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, taille, gap, tailleMin, tailleMax, minGap, maxGap;
    for (i = 0; i < obstacle.length; i += 1) {
        if (personnage.crashWith(obstacle[i])) {
            return;
        }
    }
    plateau.clear();
    plateau.frameNo += 1;
    if (plateau.frameNo == 1 || everyinterval(150)) {
        x = plateau.canvas.width;
        tailleMin = 20;
        tailleMax = 200;
        taille = Math.floor(Math.random() * (tailleMax - tailleMin + 1) + tailleMin);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        obstacle.push(new component(10, taille, "green", x, 0));
        obstacle.push(new component(10, x - taille - gap, "green", x, taille + gap));
    }
    for (i = 0; i < obstacle.length; i += 1) {
        obstacle[i].x += -1;
        obstacle[i].update();
    }
    score.text = "SCORE: " + plateau.frameNo;
    score.update();
    personnage.newPos();
    personnage.update();
}

function everyinterval(n) {
    if ((plateau.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function sauter(n) {
    personnage.gravity = n;
}