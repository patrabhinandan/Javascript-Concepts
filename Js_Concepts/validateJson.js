const json = '{"fName":"abhinandan","lName":"Patra"}';
function isValidJson(jsonObj){
    try {
        JSON.parse(jsonObj);
        return "It is valid JSON";
    }
    catch(e){
        return e;
    }
}

console.log(isValidJson(json));