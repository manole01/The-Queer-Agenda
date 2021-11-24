var language = document.getElementsByTagName('html')[0].getAttribute('lang');


if (language == 'es' || language =='es-IE') {

  replaceTextOnPage('a', String.fromCharCode(160));
  replaceTextOnPage('o', String.fromCharCode(160));
  replaceTextOnPage('A', String.fromCharCode(160));
  replaceTextOnPage('O', String.fromCharCode(160));
  replaceTextOnPage('á', String.fromCharCode(160));
  replaceTextOnPage('ó', String.fromCharCode(160));
  replaceTextOnPage('Á', String.fromCharCode(160));
  replaceTextOnPage('Ó', String.fromCharCode(160));


function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.tagName === "HEAD" || node.tagName === "STYLE") return;
      if(node.childNodes.length)
        for(var i = 0; i < node.childNodes.length; i++)
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE)
        result.push(node);
    })(document);
    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

var s = function(sketch){

  let i =150;
  let counter = 0;
  var paragraph;
  let count = 0;

  sketch.setup = function(){
    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight*10);
    c.position(0,0);
    c.style('pointer-events', 'none');
    c.style ("z-index: 9999999");
    sketch.clear();
  }

  sketch.draw = function() {
    sketch.noStroke();
    sketch.fill(150,150,150);
    sketch.rect(0,0, sketch.windowWidth*2, sketch.windowHeight*10);
    sketch.rectMode(sketch.CENTER);
    sketch.strokeWeight(7);
    sketch.stroke(255, i, i);
    sketch.fill(255, 190,190);
    sketch.rect(sketch.windowWidth/2, sketch.windowHeight/2, sketch.windowWidth/2, sketch.windowHeight/2, 50);

      if (i == 190) {
        counter = 1;
      } else if (i == 130) {
        counter = 0;
      }
      if (counter == 0) {
        i++;
      }
      if (counter == 1) {
        i--;
      }
    sketch.textFont("Georgia");
    sketch.stroke(200, 100,100);
    sketch.fill(255,130,130);
    sketch.textSize(150);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.text("¡PELIGRO!", sketch.windowWidth/2, sketch.windowHeight/2.3);
    sketch.noStroke();
    sketch.textSize(40);
    sketch.text("Esta página web contiene GÉNERO", sketch.windowWidth/2, sketch.windowHeight/1.7);
    sketch.fill(255, 150,150);
    sketch.rect(sketch.windowWidth/2, sketch.windowHeight/1.5, sketch.windowWidth/5.7, sketch.windowHeight/30, 20);
    sketch.textSize(15);
    sketch.fill(200, 50,50);
    sketch.text("Advertencia: Su experiencia en la web puede verse alterada. Usar bajo su propia responsabilidad.",sketch.windowWidth/2, sketch.windowHeight/3.7);
    sketch.textSize(20);
    let a = sketch.map(i, 130, 190, 0, 255);
    let h = sketch.map(a, 255, 0, 0, 255);
    sketch.fill(a, h, i);
    sketch.text("Pulsa aquí para eliminar el género", sketch.windowWidth/2, sketch.windowHeight/1.5);

    if (count == 1){

      sketch.clear();
      sketch.noLoop();
    }
  }

  sketch.windowResized = function() {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  sketch.mouseClicked = function() {
    if (sketch.mouseX > sketch.windowWidth/2.3 && sketch.mouseX < sketch.windowWidth/1.78 && sketch.mouseY > sketch.windowHeight/1.54 && sketch.mouseY < sketch.windowHeight/1.46) {
      count = 1;
    }
  }

};

let myp5 = new p5(s);

}
