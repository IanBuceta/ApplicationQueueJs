function controller(baseURL){
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);
    
    const _baseURL = baseURL;
    let request = requestMaker(baseURL);
    
    let result = {};
    
    result.getStudentPrograms = function(){
        let stuff = request.getStudentPrograms()
        let data = JSON.parse(stuff);
        data.forEach(element => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = element.teamName;

            const p = document.createElement('p');
            p.textContent = `${element.src}`
            
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });

    }
    
    result.postStudentProgram = function(studentProgram){
        request.postStudentProgram(studentProgram);
        result.getStudentPrograms();
    }

    result.patchStudentProgram = function(id, studentProgram){
        request.patchStudentProgram(id, studentProgram);
        result.getStudentPrograms();

    }

    result.deleteStudentProgram = function(){
        request.deleteStudentProgram();
        result.getStudentPrograms();
    }

    result.selectTopProgram = function(){
        request.selectTopProgram();
        result.getStudentPrograms();
    }
    return result;
}

let application = controller("http://localhost:65072");
application.addEventListener("load", application.getStudentPrograms());
//application.addEventListener("",)

//request.open("GET",baseURL+ "/api/StudentProgram", true);

