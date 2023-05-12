function startClassification(){
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/y-ulH2SeQ/modle.json",modleLoded)
}

function modleLoded(){
    classifier.classify(gotResult)
}

function gotResult(error,result){
    console.log("gotResult")
}