const some = document.getElementById('list');
const container = document.createElement('div');
container.setAttribute('class', 'container');
some.appendChild(container);

const home = document.getElementById('home').innerHTML += 'Click on List to See Beers!';

var request = new XMLHttpRequest();
request.open('GET', 'https://api.punkapi.com/v2/beers', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const logo = document.createElement('img');
      logo.src = beer.image_url;

      const carddisc = document.createElement('div');
      carddisc.setAttribute('class', 'carddisc');

      const h1 = document.createElement('h1');
      h1.textContent = beer.name;  

      const p = document.createElement('p');
      beer.description = beer.description.substring(0, 100);
      p.textContent = `${beer.description}...`;

      container.appendChild(card);
      card.appendChild(logo);
      card.appendChild(carddisc);
      carddisc.appendChild(h1);
      carddisc.appendChild(p);
      
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    some.appendChild(errorMessage);
  }
}

request.send();