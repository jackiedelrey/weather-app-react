import "./App.css";

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weather App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="src/styles.css" />
      </head>
      <body>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-6">
              <div class="weather-app">
                <form id="search-form">
                  <div class="row">
                    <div class="col-9">
                      <input
                        type="text"
                        placeholder="Enter a city..."
                        id="city-input"
                        class="form-control"
                        autocomplete="off"
                      />
                    </div>
                    <div class="col">
                      <div class="buttons">
                        <input
                          type="submit"
                          value="Search"
                          id="search-button"
                          class="btn btn-primary w-100"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div class="overview">
                  <div class="row">
                    <div class="col">
                      <h2 id="city">Glasgow</h2>
                      <div class="d-flex weather-temperature">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg=="
                          alt="Clear"
                          id="icon"
                        />
                        <div></div>
                        <div class="col col-right">
                          <span
                            class="currentTemperature"
                            id="current-temperature"
                          >
                            <strong> 16 </strong>
                          </span>
                          <span class="units"> °C </span>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <ul>
                            <li>
                              Last updated:10:00 8th April 2023{" "}
                              <span id="date"></span>
                            </li>
                            <li>
                              <span id="description">Cloudy</span>
                            </li>
                            <li>
                              Humidity:20 <span id="humidity"></span>%
                            </li>
                            <li>
                              Wind: <span id="wind">10</span> km
                            </li>
                          </ul>
                          <div class="weather-forecast" id="forecast"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sourceCode">
            <a
              href="https://github.com/jackiedelrey/weather-app-react"
              target="_blank"
            >
              Open source code
            </a>
            <span class="name"> by Jackie Shields</span>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
