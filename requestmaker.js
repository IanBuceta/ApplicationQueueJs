function requestMaker(baseURL){
    let __baseURL = "http://localhost:65072";
    let result={};

    result.getStudentPrograms = function() {
        let request = new XMLHttpRequest();
        request.open("GET", baseURL + "/api/StudentProgram", true);
        request.send(null);
    };

    result.postStudentProgram = function(studentProgram) {
        let request = new XMLHttpRequest();
        request.open("POST", baseURL + "/api/StudentProgram", true)
        let data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src" : studentProgram.src, "isRunning" : studentProgram.isRunning});
        request.send(data);
    };

    result.patchStudentProgram = function(id, studentProgram) {
        let request = new XMLHttpRequest();
        request.open("POST", baseURL + "/api/StudentProgram/" + id, true);
        request.setRequestHeader("Content-Type", "application/json");
       /* request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let json = JSON.parse(request.responseText);
                console.log(json);
            }
        };*/
        let data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src" : studentProgram.src, "isRunning" : studentProgram.isRunning});
        request.send(data);
    };
    
    result.deleteStudentProgram = function(id){
        let request = new XMLHttpRequest();
        request.open("DELETE", baseURL + "/api/StudentProgram/", true);
        request.send(id);
    };

    result.selectTopProgram = function(){
        let request = new XMLHttpRequest();
        request.open("DELETE", baseURL + "/api/StudentProgram/Select", true);
        request.send(null);
    };
    result.test = function(){
        console.log("I'm stuff");
    }
    return result;
}
