const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var request = new XMLHttpRequest();

request.open("GET", "https://localhost:44337/api/StudentProgram/", true);
alert(request.status);

try
{
    request.send(null);
}
catch(error)
{
    alert(error)
}


request.onload = function(){
    var data = JSON.parse(this.response);

    // Checks for status errors
    if(request.status >= 200  && response.status < 400){ 
    
        data.array.forEach(element => {
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
}




