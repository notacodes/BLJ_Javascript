function fetchAPI(search) {
    const url = `https://transport.opendata.ch/v1/stationboard?station=${search}&limit=21&`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const departureBoard = document.getElementById('departureBoard').getElementsByTagName('tbody')[0];
            departureBoard.innerHTML = '';

            const dateElement = document.getElementById('date');
            let today = new Date();
            let formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
            dateElement.textContent = formattedDate;

            if (data.stationboard && data.stationboard.length > 0) {
                data.stationboard.forEach(item => {
                    let timestampDeparture = new Date(item.stop.departure);
                    let hours = timestampDeparture.getHours();
                    let minutes = timestampDeparture.getMinutes();
                    let departure = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                    let to = item.to;
                    let train = item.category + item.number;
                    let delay = item.stop.delay ? item.stop.delay + ' min' : 'Keine';

                    const row = departureBoard.insertRow();
                    row.insertCell(0).textContent = departure;
                    row.insertCell(1).textContent = to;
                    row.insertCell(2).textContent = train;
                    row.insertCell(3).textContent = delay;
                });
            } else {
                alert('Keine Abfahrten gefunden');
            }
            })
        .catch(error => {
            console.error('Fehler:', error);
        });
}
