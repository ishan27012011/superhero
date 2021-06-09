var canvas=new fabric.Canvas("myCanvas");
var superheroX=10;
var superheroY=10;
var blockWidth=30;
var blockHeight=30;
var superheroObject="";
var blockObject="";
function superhero_update() {
fabric.Image.fromURL("Superhero.jpg",function(Img){
superheroObject=Img;
superheroObject.scaleToWidth(150);
superheroObject.scaleToHeight(140);
superheroObject.set({
left:superheroX,
top:superheroY
});
canvas.add(superheroObject);
});    
}
function object_update(get_Img){
fabric.Image.fromURL(get_Img,function(Img){
blockObject=Img;
blockObject.scaleToWidth(blockWidth);
blockObject.scaleToHeight(blockHeight);
blockObject.set({
left:superheroX,
top:superheroY
});
canvas.add(blockObject);
});
}
