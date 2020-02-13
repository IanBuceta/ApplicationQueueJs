const app = document.getElementById('root');
const baseURL="http://localhost:65072";
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

/*var request = new requestMaker(baseURL);
request.addEventListener("load",  function(){
    var data = JSON.parse(this.response);

    // Checks for status errors
    if(request.status >= 200  && request.status < 300){ 
    
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
    else{
        const errorMsg = document.createElement('marquee');
        error.textContent = 'Something went wrong! Status code:' + request.status;
        app.appendChild(errorMsg);
    }
});


*/
//request.open("GET",baseURL+ "/api/StudentProgram", true);

