model_status = "";
input = "";

function setup() {
    canvas = createCanvas(415,315)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(415,315)
    video.hide()
}

function start() {
    objectsDetected = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value
    console.log(input)
}

function modelLoaded() {
    console.log("Model Loaded")
    model_status = true
}

function draw() {
    image(video, 0, 0, 415, 315)
}