function requestMaker(baseURL){
    let result={};

    result.getStudentPrograms = function() {
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();         
            request.open("GET", baseURL + "/api/StudentProgram", true);
            request.send(null);
            request.addEventListener("load",()=>{
                let data = JSON.parse(request.response);
                resolve(data);
            });
        });
    };

    result.getStudentProgram = function(id){
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();       
            request.open("GET", baseURL + "/api/StudentProgram/" + id, true);
            request.send(null);
            request.addEventListener("load",()=>{
                let data = JSON.parse(request.response);
                resolve(data);
            });
        });
    }

    function log(data) { console.log(data); }

    result.postStudentProgram = function(studentProgram) {
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open("POST", baseURL + "/api/StudentProgram/", true)
            request.setRequestHeader('Accept', 'application/json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            let data = JSON.stringify({"id": studentProgram.id, "teamName": studentProgram.teamName, "src": studentProgram.src, "isRunning": studentProgram.isRunning});
            request.send(data);
            request.addEventListener("load", ()=>{
                resolve(data);
            });

        });
    };

    result.patchStudentProgram = function(id, studentProgram) {
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open("PATCH", baseURL + "/api/StudentProgram/" + id, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Accept", "application/json");

            let data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src" : studentProgram.src, "isRunning" : studentProgram.isRunning});
            request.send(data)
            request.addEventListener("load",()=>{
                resolve(request.response);
            });
        });
        
    };
    
    result.deleteStudentProgram = function(){
        return new Promise((resolve, reject)=>{
            let request = new XMLHttpRequest();
            request.open("DELETE", baseURL + "/api/StudentProgram/", true);
            request.send(null);
            request.addEventListener("load", ()=>{
                resolve(request.response);
            }); 
        });
        
    };

    result.selectTopProgram = function(){
        return new Promise((resolve, reject)=>{
            let request = new XMLHttpRequest();
            request.open("POST", baseURL + "/api/StudentProgram/Select", true);
            request.send(null);
            request.addEventListener("load",()=>{
                resolve(request.response);
            });   
            
        });
    };
    return result;
}
