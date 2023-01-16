var linkImg
var rockImg
var rockGroup

function preload() {
    jungleImage = loadImage("CartoonJungle.jpg");
    linkImg = loadImage("link.gif");
    rockImg = loadImage("rock.png")
}

function setup() {

    createCanvas(600, 600);

    rockGroup = new Group();

    jungle = createSprite(400, 100, 400, 20);
    jungle.addImage("jungle", jungleImage);
    jungle.scale = 1.2
    jungle.x = width / 1.2;

    link = createSprite(300, 300, 30, 30);
    link.scale = 0.5
    link.addImage(linkImg);
}

function draw() {
    background("white");
    drawSprites()

    link.y = World.mouseY

    jungle.velocityX = -5
    if (jungle.x < 100) {
        jungle.x = 400
    }
}

function createRock() {
    if (World.frameCount % 530 == 0) {
        var rock = createSprite(Math.round(500, random(100, 500), 10, 10));
        rock.addImage(rockImg);
        rock.scale = 0.1;
        rock.velocityX = 500;
        rock.lifetime = 150;
        rockGroup.add(rock);
    }
}
