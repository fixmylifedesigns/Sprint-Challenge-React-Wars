import React from "react";

const StarWars = props => {
  return (
    <div className="character">
      <div className="name">
        <h2>{props.starwarsChars.name}</h2>

        <div className="identity">
          <div>
            <li>
              <strong>Height:</strong>
              {props.starwarsChars.height}
            </li>
            <li>
              <strong>Mass:</strong>
              {props.starwarsChars.mass}
            </li>
            <li>
              <strong>Hair color:</strong>
              {props.starwarsChars.hair_color}
            </li>
            <li>
              <strong>Skin Color:</strong>
              {props.starwarsChars.skin_color}
            </li>
            <li>
              <strong>Eye Color:</strong>
              {props.starwarsChars.eye_color}
            </li>
            <li>
              <strong>Birth Year:</strong>
              {props.starwarsChars.birth_year}
            </li>
            <li>
              <strong>Gender:</strong>
              {props.starwarsChars.gender}
            </li>
          </div>
        </div>
        <div className="info-container">
          <div className="top">
            <p className="url">
              <strong>Homeworld:</strong>
              {props.starwarsChars.homeworld}
            </p>

            <p className="url">
              <strong>Species:</strong>
              <br /> {props.starwarsChars.species[0]}
              <br />
              {props.starwarsChars.species[1]}
              <br />
              {props.starwarsChars.species[2]}
              <br />
              {props.starwarsChars.species[4]}
              <br />
              {props.starwarsChars.species[5]}
            </p>
          </div>
          <div className="middle">
            <p className="url">
              <strong>Films:</strong>
              <p>
                {props.starwarsChars.films[0]}
                <br />
                {props.starwarsChars.films[1]}
                <br />
                {props.starwarsChars.films[2]}
                <br />
                {props.starwarsChars.films[4]}
                <br />
                {props.starwarsChars.films[5]}
              </p>
            </p>
          </div>

          <div className="middle">
            <p className="url">
              <strong>Vehicles:</strong>
              {props.starwarsChars.vehicles[0]}
            </p>
            <p className="url">
              <strong>Starships:</strong>
              {props.starwarsChars.starships[0]}
            </p>
          </div>

          <div className="end">
            <p>
              <strong>Created:</strong>
              {props.starwarsChars.created}
            </p>
            <p>
              <strong>Edited:</strong>
              {props.starwarsChars.edited}
            </p>
            <p className="url">
              <strong>url:</strong>
              {props.starwarsChars.url}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarWars;

// "name":
// "height":
// "mass":
// "hair_color":
// "skin_color":
// "eye_color":
// "birth_year":
// "gender":
// "homeworld":
// "films":
// "species":
// "vehicles":
// "starships":
// "created":
// "edited":
// "url":
