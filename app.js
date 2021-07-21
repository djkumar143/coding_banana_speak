let txtInput = document.querySelector("#text-input");
let buttonTranslate = document.querySelector("#btn-translate");
let txtOutput = document.querySelector("#text-output");


let serverURL = "https://api.funtranslations.com/translate/yoda.json";

function createURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorFunction(error){
    console.log("there might be an error. Try again after sometime.")
    alert("the response from the server timed out")
}

function clickHandler(){
    let inputText = txtInput.value;

    fetch(createURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        let translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    })

    .catch(errorFunction);
}






buttonTranslate.addEventListener("click" , clickHandler);