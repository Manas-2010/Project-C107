function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotresult);
    console.log("Model Loded!");
}

var Dog = 0;
var Cat = 0;

function gotresult(error, result){
    if (error) {
        console.error(error);
    }

    if (result) {
    randomColorR = Math.floor(Math.random() * 255) + 1;
    randomColorG = Math.floor(Math.random() * 255) + 1;
    randomColorB = Math.floor(Math.random() * 255) + 1;

        document.getElementById("CanHere").innerHTML = result[0].label
        document.getElementById("howMany").innerHTML = "Dog(s) = " + Dog + " Cat(s) = " + Cat;
        document.getElementById("CanHere").style.color = "rgb(" + randomColorR + "," + randomColorG + "," + randomColorB + ")";
        document.getElementById("howMany").style.color = "rgb(" + randomColorR + "," + randomColorG + "," + randomColorB + ")";

        gif = document.getElementById("canHearGif")

        if (result[0].label == "Barking") {
            gif.src = "bark.gif"
            Dog = Dog + 1
        }
        
        if (result[0].label == "Meowing") {
            gif.src = "meow.gif"
            Cat = Cat + 1
        }
    }
}