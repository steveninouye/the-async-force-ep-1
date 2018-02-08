console.log('Im running here');

function request(url, callback) {
  const Req = new XMLHttpRequest();
  Req.addEventListener('load', callback);
  Req.open('GET', url);
  Req.send();
  //   return reqObj;
}

request('https://swapi.co/api/people/4/', function() {
  const reqObj = JSON.parse(this.responseText);
  document.getElementById('person4Name').innerText = reqObj.name;
  request(reqObj.homeworld, function() {
    document.getElementById('person4HomeWorld').innerText = JSON.parse(
      this.responseText
    ).name;
  });
});

request('https://swapi.co/api/people/14', function() {
  const reqObj = JSON.parse(this.responseText);
  document.getElementById('person14Name').innerText = reqObj.name;
  request(reqObj.species, function() {
    document.getElementById('person14Species').innerText = JSON.parse(
      this.responseText
    ).name;
  });
});

request('https://swapi.co/api/films', function() {
  const reqObj = JSON.parse(this.responseText);
  reqObj.results.forEach(e => {
    document.getElementById('filmList').innerHTML += `<li class = 'film'>
                <h2 class = 'filmTitle' > ${e.title}</h2>
                <h3>Planets</h3>
                    <ul class = 'filmPlanets' id = '${e.title}'>

                    </ul>
            </li>
            `;
    let title = e.title;
    e.planets.forEach(f => {
      request(f, function() {
        let reqObj2 = JSON.parse(this.responseText);
        document.getElementById(e.title).innerHTML += `
                <li class='planet'>
                <h4 class = 'planetName'>${reqObj2.name}</h4>
                </li>
                `;
      });
    });
  });
});
