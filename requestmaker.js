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
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            //request.setRequestHeader('Accept', 'application/json');
            let data = JSON.stringify({"id": studentProgram.id});// , "teamName": studentProgram.teamName, "src": studentProgram.src, "isRunning": studentProgram.isRunning});
            request.send(data);
            request.addEventListener("load", ()=>{
                resolve(data);
            });
            request.addEventListener("error", ()=> {
                //debugger;
            });
        });
        /*
        let data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src": studentProgram.src, "isRunning": studentProgram.isRunning});
        console.log(data);
        return ajax.POST("http://localhost:65072/api/StudentProgram", {"id": studentProgram.id , "teamName": studentProgram.teamName, "src": studentProgram.src, "isRunning": studentProgram.isRunning}).then(log).catch(log);
        */
    };

    result.patchStudentProgram = function(id, studentProgram) {
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open("POST", baseURL + "/api/StudentProgram/" + id, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Accept", "application/json");

            let data = JSON.stringify({"id": studentProgram.id , "teamName": studentProgram.teamName, "src" : studentProgram.src, "isRunning" : studentProgram.isRunning});
            request.send(data)
            request.addEventListener("load",()=>{
                resolve(data);
            });
        });
        
    };
    
    result.deleteStudentProgram = function(){
        return new Promise((resolve, reject)=>{
            let request = new XMLHttpRequest();
            request.open("DELETE", baseURL + "/api/StudentProgram/", true);
            request.addEventListener("load", ()=>{
                resolve(data);
            }); 
        });
        
    };

    result.selectTopProgram = function(){
        return new Promise((resolve, reject)=>{
            let request = new XMLHttpRequest();
            request.open("POST", baseURL + "/api/StudentProgram/Select", true);
            request.addEventListener("load",()=>{
                resolve(data);
            });   
            
        });
    };
    return result;
}
