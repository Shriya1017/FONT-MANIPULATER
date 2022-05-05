rightwristX=0;
leftwristX=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose,gotPoses");
    
}

function modelLoaded(){
    console.log("model has been initiated")
}

function gotPoses(results){
    
}