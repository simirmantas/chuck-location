import React, { useEffect } from "react";

const App = () => {
    const [coordinates, setCoordinates] = React.useState({ latitude: 0, longitude: 0 });
    const [chuckJoke, setChuckJoke] = React.useState("");

    useEffect(() => {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(response => response.json())
            .then(data => setCoordinates(data.iss_position))
            .catch(error => console.error(error));

        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setChuckJoke(data.value))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Chuck's current coordinates are:</h1>
            <p>Latitude: {coordinates.latitude}</p>
            <p>Longitude: {coordinates.longitude}</p>
            <h1>Chuck's current joke is:</h1>
            <p>{chuckJoke}</p>
        </div>
    );
}

export default App;