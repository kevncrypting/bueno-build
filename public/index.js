console.log(`Linked up!`);

let showContainer = document.getElementById('showContainer');
let showsButton = document.getElementById('showsButton')

let showStatus = true;

showsButton.addEventListener('click', (e) => {
    e.preventDefault();
    showContainer.innerText = ``;

    fetch('http://127.0.0.1:3030/shows')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(show => {
                let showCard = document.createElement('div');

                showCard.setAttribute('class', 'card');

                showCard.innerHTML = `
                <h3>${show.name}</h3>
                <span>Directed by ${show.director}</span>
                <p>It was released in ${show.season} of ${show.year}, and has an episode count of ${show.episodes}.</p>
                `

                showContainer.append(showCard);
            })
        })

    showStatus = !showStatus;

    if (!showStatus) {
        showsButton.innerHTML = `Hide shows`
        showContainer.style.display = `flex`;
    } else if (showStatus) {
        showsButton.innerHTML = `Show shows`
        showContainer.style.display = `none`;
    }
})

