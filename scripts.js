function controller(baseURL){
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);
    
    const _baseURL = baseURL;
    let request = requestMaker(baseURL);
    
    let result = {};
    
    result.getStudentPrograms = function(){
        let data = request.getStudentPrograms();
        data.then((res)=>{
            res.forEach(element => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');    
                const h1 = document.createElement('h1');
                h1.textContent = element.teamName;
    
                const p = document.createElement('p');
                p.textContent = element.src;
                
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            });
        });
    };

    result.getStudentProgram = function(id){
        let data = request.getStudentProgram(id);
        data.then((element)=>{
            const card = document.createElement('div');

                card.setAttribute('class', 'card');    
                const h1 = document.createElement('h1');
                h1.textContent = element.teamName;
    
                const p = document.createElement('p');
                p.textContent = element.id;
                const p2 = document.createElement('p');
                p.textContent = element.isRunning;
                const p3 = document.createElement('p');
                p.textContent = element.src;
                
                
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
                card.appendChild(p2);
                card.appendChild(p3);
        });        
    };
    
    result.postStudentProgram = function(studentProgram){
        let data = request.postStudentProgram(studentProgram);
        data.then((element) => {result.getStudentPrograms()});
    };

    result.patchStudentProgram = function(id, studentProgram){        
        let data = request.patchStudentProgram(id, studentProgram);
        data.then((element) => {result.getStudentPrograms()});
    };

    result.deleteStudentProgram = function(){
        let data = request.deleteStudentProgram();
        data.then((element) => {result.getStudentPrograms()});        
    };

    result.selectTopProgram = function(){
        let data = request.selectTopProgram();
        data.then((element) => {result.getStudentPrograms()});
    };
    return result;
}

let application = controller("http://localhost:65072");
//application.getStudentPrograms();
//application.postStudentProgram(studentProgram(18,"equipoDeGente", "anda a buscarlo", false));
//application.getStudentProgram(1);
//application.deleteStudentProgram();
//application.patchStudentProgram(3, studentProgram(3,"MODIFICADO", "anda a buscarlo", false));

function studentProgram(id, teamName, src, isRunning){
    let result = {};
    result.id = id;
    result.teamName = teamName;
    result.src = src;
    result.isRunning = isRunning;
    return result;
}