function setup(){
canvas=createCanvas(600,500);
canvas.position(250,350);
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
objectDetector=ml5.objectDetector("CoCoSSD" , modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}