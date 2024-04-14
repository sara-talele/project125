difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);

    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        textSize(difference);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference" + difference);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function draw() {
    background('#969A97');
    document.getElementById("font-size").innerHTML = "Width and Heigth of a Text will be =" + difference + "px";
    fill('#F90093');
    text('Sara Talele', 50, 100);
}