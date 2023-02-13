import React, { useState } from "react";

const App = () => {

    const [films, setFilms] = useState([]);

    const [people, setPeople] = useState([]);

    const getFilms = () => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
    };

    const getPeople = () => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
    };

    return (
        <div>
            <h1 className="text-center my-3">Welcome to the Studio Ghibli Compendium!</h1>
            <div className="row justify-content-center">
                <button className="btn btn-outline-primary col-3 mx-1" onClick={() => getFilms()}>Load Films</button>
                <button className="btn btn-outline-success col-3 mx-1" onClick={() => getPeople()}>Load People</button>
            </div>
            <div className="row justify-content-around">
                {films.map(film => {
                    return <div key={film.id} className="card m-4 col-4 bg-info-subtle border border-info border-2 shadow">
                        <div className="card-body">
                            <h1 className="card-title text-center text-info">{film.title}</h1>
                            <img className="card-img-top my-2" src={film.image} alt="movie poster" />
                            <h4>Director: {film.director}</h4>
                            <h4>{film.release_date}</h4>
                            <p className="card-text">{film.description}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="row justify-content-around">
                {people.map(person => {
                    return <div key={person.id} className="card m-4 col-4 bg-info-subtle border border-info border-2 shadow">
                        <div className="card-body">
                            <h1 className="card-title text-center text-info">{person.name}</h1>
                            <h4>Gender: {person.gender}</h4>
                            <h4>Age: {person.age}</h4>
                            <p className="card-text">View this character's JSON for more info <a href={person.url} target='_blank'>HERE!</a></p>
                        </div>
                    </div>
                })}
            </div>
        </div >
    );
};

export default App;