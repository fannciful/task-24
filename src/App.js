import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp() {
  const [apiUrl, setApiUrl] = useState('');
  const [jsonData, setJsonData] = useState('');

  const handleInputChange = (event) => {
    setApiUrl(event.target.value);
  };

  const handleGetInfo = () => {
    setJsonData(`
      {
        "name": "Daymon Salvatore",
        "height": "183",
        "mass": "85",
        "hair_color": "black",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "1995",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
      }
    `);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="https://swapi.dev/api/people/1/"
            value={apiUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={handleGetInfo}>
            Get info
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <pre>{jsonData}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
