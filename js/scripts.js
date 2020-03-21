function controller(baseURL){
    let request = requestMaker(baseURL);
    
    let result = {};
    
    result.getStudentPrograms = function(){
        return request.getStudentPrograms();
    };

    result.getStudentProgram = function(id){
        return request.getStudentProgram(id);               
    };
    
    result.postStudentProgram = function(studentProgram){
        let data = request.postStudentProgram(studentProgram);
        data.then((element) => { window.location.href = "index.html"});
    };

    result.patchStudentProgram = function(id, studentProgram){        
        let data = request.patchStudentProgram(id, studentProgram);
        data.then((element) => { window.location.replace("index.html")});
    };

    result.deleteStudentProgram = function(){
        let data = request.deleteStudentProgram();
        data.then((element) => {window.location.reload()});        
    };

    result.selectTopProgram = function(){
        let data = request.selectTopProgram();
        data.then((element) => { window.location.href = "index.html"});
    };
    return result;
}

function studentProgram(id, teamName, src, isRunning){
    let result = {};
    result.id = id;
    result.teamName = teamName;
    result.src = src;
    result.isRunning = isRunning;
    return result;
}
