
var btnTranslation = document.querySelector("#btn-translation");
var textInput = document.querySelector("#textarea");
var outputDiv = document.querySelector("#output");

 //call a mock server

 var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

 function getServerURL(text){
    return serverURL+"?"+"text"+text; //? is query selector
 }

 //To handle error. sometime network call couldn't happen some issue so we send popup
 function errorHandler(error){
    console.log("Error occured", error);
    alert("Something wrong with server! try again after some time")
 }

 function clickEventHandler(){  
    var inputText = textInput.value; //taking input

    //calling server for processing

    fetch(getServerURL(inputText)).then(response => response.json()).then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;  //output
    })
    .catch(errorHandler)
 }
 
 btnTranslation.addEventListener("click", clickEventHandler)
 
 
 
 
 
 
 
 
