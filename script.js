class Rectangle {
  Longueur;
  Largeur;

  surface() {
    let aireRectangle = this.Longueur * this.Largeur;
    return aireRectangle;
  }
}

const rect1 = new Rectangle();

rect1.Longueur = 10;
rect1.Largeur = 15;

document.getElementById("longueur").innerHTML =
  "<span>La longueur de l'objet rect1  vaut:</span>&nbsp;" + rect1.Longueur;
document.getElementById("largeur").innerHTML =
  "<span>La longueur de l'objet rect1  vaut:</span>&nbsp;" + rect1.Largeur;

const rect2 = new Rectangle();

rect2.Longueur = 50;
rect2.Largeur = 25;
let surfaceRect2 = rect2.surface();

document.getElementById("longueur2").innerHTML = "<span>La longueur de l'objet rect2  vaut:</span>&nbsp;" + rect2.Longueur;
document.getElementById("largeur2").innerHTML = "<span>La longueur de l'objet rect2  vaut:</span>&nbsp;" + rect2.Largeur;
document.getElementById("surface2").innerHTML = "<span>La surface de l'objet rect2 vaut:</span>&nbsp;" + surfaceRect2;

const rect3 = new Rectangle();

rect3.Longueur = prompt("Entrer la valeur de la longueur");
rect3.Largeur = prompt("Entrer la valeur de la largeur");
let surfaceRect3 = rect3.surface();

document.getElementById("longueur3").innerHTML =
  "<span>La longeur saisie de l'objet rect3 vaut:</span>&nbsp;" + rect3.Longueur;
document.getElementById("largeur3").innerHTML =
  "<span>La largeur saisie de l'objet rect3 vaut:</span>&nbsp;" + rect3.Largeur;
document.getElementById("surface3").innerHTML =
  "<span>La surface de l'objet rect3 vaut:</span>&nbsp;" + surfaceRect3;