function requestMaker(baseURL){
    var __baseURL = "http://localhost:65072";
    var request = new XMLHttpRequest();

    this.getStudentPrograms = function() {
        request.open("GET", baseURL + "/api/StudentProgram", true);
        request.send(null);
    };

    this.postStudentProgram = function(studentProgram) {
        request.open("POST", baseURL + "/api/StudentProgram", true)
        var data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src" : studentProgram.src, "isRunning" : studentProgram.isRunning});
        request.send(data);
    };

    this.patchStudentProgram = function(id, studentProgram) {

        request.open("POST", baseURL + "/api/StudentProgram/" + id, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var json = JSON.parse(request.responseText);
                console.log(json);
            }
        };
        var data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src" : studentProgram.src, "isRunning" : studentProgram.isRunning});
        request.send(data);
    };
    
    this.deleteStudentProgram = function(id){
        request.open("DELETE", baseURL + "/api/StudentProgram/", true);
        request.send(id);
    };

    this.selectTopProgram = function(){
        request.open("DELETE", baseURL + "/api/StudentProgram/Select", true);
        request.send(null);
    };
    this.test = function(){
        console.log("I'm stuff");
    }
}
