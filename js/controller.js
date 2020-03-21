function controller(baseURL){
    let objectMapper = mapper(baseURL);

    let result = {};
    
    result.getStudentPrograms = function(){
        const app = document.getElementById('root');
        const container = document.createElement('div');
        container.setAttribute('class', 'card-container container-fluid');
        let row = document.createElement('div');
        row.className = "row no-gutters";
        app.appendChild(container);
        container.appendChild(row);
  
        let data = objectMapper.getStudentPrograms();
        let i = 0;
  
        const buttonEnqueue = document.createElement('a');
        buttonEnqueue.className = "btn btn-warning";
        buttonEnqueue.textContent = "Add program to queue";
        buttonEnqueue.addEventListener("click", function () {
        window.location.href = "enqueue.html";
        });
        
        container.appendChild(buttonEnqueue); 
  
        data.then((res)=>{
            res.forEach(element => {
                const column = document.createElement('div');
                column.className = "col col-sm-3 mb-3";
                const card = document.createElement('div');
                card.setAttribute('class', 'card'); 
                const body = document.createElement('body');
                body.className = "card-body";
  
                const h4 = document.createElement('h3');
                h4.textContent = "Team Name:";
                const h5 = document.createElement('h1');
                h5.textContent = element.teamName;
                h5.className = "card-title";
                
      
                const p = document.createElement('p');
                p.textContent = element.src;
                p.className = "card-text";
                  
                const buttonGroup = document.createElement('div');
                buttonGroup.className = 'btn-group';
                const buttonEdit = document.createElement('a');
                buttonEdit.className = "btn btn-primary";
                buttonEdit.textContent = "Edit";
                  
                var queryString = "?id=" + element.id;
                buttonEdit.addEventListener("click", function () {                 
                  window.location.href = "edit.html" + queryString;
                });                
  
                const buttonInfo = document.createElement('a');
                buttonInfo.className = "btn btn-secondary";
                buttonInfo.textContent = "Details";
                buttonInfo.addEventListener("click", function () {
                window.location.href = "details.html" + queryString;
                });
                  
                const buttonDelete = document.createElement('a');
                buttonDelete.className = "btn btn-danger";
                buttonDelete.textContent = "Delete";
                buttonDelete.addEventListener("click", () => {
                result.deleteStudentProgram(queryString.substring(4));
                });
  
                row.appendChild(column);
                column.appendChild(card);
                card.appendChild(body);
                card.appendChild(h4);
                card.appendChild(h5);
                card.appendChild(p);
                  
                card.appendChild(buttonGroup);
                buttonGroup.appendChild(buttonEdit);
                buttonGroup.appendChild(buttonInfo);
                buttonGroup.appendChild(buttonDelete);
                i++;
                if(i == 4){
                    const w = document.createElement('div');
                    w.className = "w-100";
                    row.appendChild(w);
                    i = 0;
                }                
            });
        });  
    };

    result.getStudentProgram = function(id){
        const app = document.getElementById('details');
        const container = document.createElement('div');
        container.setAttribute('class', 'card-container container-fluid');
        let row = document.createElement('div');
        row.className = "row no-gutters";
        app.appendChild(container);
        container.appendChild(row);
  

        let data = objectMapper.getStudentProgram(queryString);
        data.then((element)=>{
            const card = document.createElement('div');
            card.setAttribute('class', 'card');    
            const h1 = document.createElement('h1');
            h1.textContent = element.teamName;
            const p = document.createElement('p');
            p.textContent = element.id;
            const p2 = document.createElement('p');
            p2.textContent = element.isRunning;
            const p3 = document.createElement('p');
            p3.textContent = element.src;
            const buttonReturn = document.createElement('a');
                  buttonReturn.className = "btn btn-primary";
                  buttonReturn.textContent = "Return to Menu";
                  buttonReturn.addEventListener("click", function () {
                      window.location.href = "index.html";
                  });
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(buttonReturn);      
          });          
    };
    
    result.postStudentProgram = function(id, teamName, src, isRunning){
        objectMapper.postStudentProgram(studentProgram(id, teamName, src, isRunning));
    };

    result.patchStudentProgram = function(id, stProgram){    
        let data = objectMapper.getStudentProgram(queryString);    
        let program;
        data.then((element)=>{
          program = element
          document.getElementById("TeamName").value = element.teamName;
          document.getElementById("Src").value = element.src;
        });
        document.getElementById("submitButton").addEventListener("click", () => {
            let toPatch = studentProgram(program.id, document.getElementById("TeamName").value, document.getElementById("Src").value, program.isRunning)
            objectMapper.patchStudentProgram(queryString,toPatch);
        });       
    };

    result.deleteStudentProgram = function(id){
        objectMapper.deleteStudentProgram(id);
    };

    result.selectTopProgram = function(){

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