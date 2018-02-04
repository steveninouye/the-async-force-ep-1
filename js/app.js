console.log('Im running here');

const Req = new XMLHttpRequest();

function reqListener() {
    const Req2 = new XMLHttpRequest();
    const reqObj = JSON.parse(this.responseText);

    function reqListener2() {
        document.getElementById('person4HomeWorld').innerText = JSON.parse(this.responseText).name;
    }

    document.getElementById('person4Name').innerText = reqObj.name;

    Req2.addEventListener('load', reqListener2);
    Req2.open('GET', reqObj.homeworld);
    Req2.send();
}

Req.addEventListener("load", reqListener);
Req.open("GET", "https://swapi.co/api/people/4/");
Req.send();

const Req1 = new XMLHttpRequest();

function reqListener1() {
    const Req2 = new XMLHttpRequest();
    const reqObj = JSON.parse(this.responseText);

    function reqListener2() {
        document.getElementById('person14Species').innerText = JSON.parse(this.responseText).name;
    }

    document.getElementById('person14Name').innerText = reqObj.name;

    Req2.addEventListener('load', reqListener2);
    Req2.open('GET', reqObj.species);
    Req2.send();
}

Req1.addEventListener('load', reqListener1);
Req1.open('GET', 'https://swapi.co/api/people/14');
Req1.send();

const Req3 = new XMLHttpRequest();

function reqListener3() {
    const reqObj = JSON.parse(this.responseText);
    // console.log(reqObj.results);
    reqObj.results.forEach(e => {
        document.getElementById('filmList').innerHTML +=
            `<li class = 'film'>
                <h2 class = 'filmTitle' > ${e.title}</h2>
                <h3>Planets</h3>
                    <ul class = 'filmPlanets' id = '${e.title}'>
                        
                    </ul>               
            </li>
            `;
        let title = e.title;
        e.planets.forEach(f => {
            const Req2 = new XMLHttpRequest();
            const reqObj = JSON.parse(this.responseText);

            function reqListener2() {
                let reqObj2 = JSON.parse(this.responseText);
                document.getElementById(e.title).innerHTML +=
                    `
                <li class='planet'>
                <h4 class = 'planetName'>${reqObj2.name}</h4>
                </li>
                `
            }

            Req2.addEventListener('load', reqListener2);
            Req2.open('GET', f);
            Req2.send();
        }
        )
    })



}

Req3.addEventListener('load', reqListener3);
Req3.open('GET', 'https://swapi.co/api/films/');
Req3.send();