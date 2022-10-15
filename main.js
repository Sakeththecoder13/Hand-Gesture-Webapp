noseX = 0
noseY = 0
leftWristx = 0
rightWristx = 0
difference = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(500, 500);
    canvas.position(530, 200);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is loaded!');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("NoseX:" +noseX, "Nose_y" +noseY);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);

        console.log("Left Wrist:" +leftWristx, "Right Wrist:" + rightWristx);
        document.getElementById("info").innerHTML = "Height of the square:" +difference;
    }

    
}

function draw(){
    background('#AFE1AF');
    fill('#EAA315');
    stroke('#EAA315');
    square(noseX, noseY, difference);
}